import * as THREE from 'three';

import sources from './sources.js';

import Sizes from './utils/Size.js';
import Time from './utils/Time.js';
import Camera from './Camera.js';
import Renderer from './Renderer.js';
import World from './world/World.js'
import Resources from './utils/Resources.js';
import Debug from './utils/Debug.js';


let instance = null;

export default class Experience
{
    constructor(canvas)
    {
        if(instance){
            return instance;
        }
        instance = this;

        // global access
        window.Experience = this;

        this.canvas = canvas;

        // setup
        this.debug = new Debug()
        this.sizes = new Sizes();
        this.time = new Time();
        this.scene = new THREE.Scene();
        this.resources = new Resources(sources);
        this.camera = new Camera();
        this.renderer = new Renderer();
        this.world = new World();

        // sizes resize event 
        this.sizes.on("resize", ()=> {
            this.resize();
        })

        // time tick event
        this.time.on("tick", ()=> {
            this.update();
        })
    }

    resize()
    {
        this.camera.resize();
        this.renderer.resize();   
    }

    update()
    {
        this.camera.update();
        this.world.update();
        this.renderer.update();
    }

    destroy()
    {
        this.sizes.off("resize");
        this.time.off("tick");

        this.scene.traverse((child) => {
            if(child instanceof THREE.Mesh){
                child.geometry.dispose();

                // traverse the whole scene of all the objects
                for(const key in child.material){
                    const value = child.material[key];
                    if(value && typeof value === "object" && "dispose" in value){
                        value.dispose();
                    }
                }
            }
        })

        // dispose the scene 
        this.camera.controls.dispose();
        this.renderer.instance.dispose();
        if(this.debug.active){
            this.debug.ui.destroy()
        }
    }
}