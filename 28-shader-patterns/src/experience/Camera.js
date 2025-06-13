import * as THREE from 'three'
import Experience from './Experience.js';
import { OrbitControls } from 'three/examples/jsm/Addons.js';

export default class Camera 
{
    constructor()
    {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.size = this.experience.scene;
        this.canvas = this.experience.canvas;

        this.setInstance();
        this.setOrbitControls();
    }

    setInstance()
    {
        this.instance = new THREE.PerspectiveCamera(35, this.size.width / this.size.height, 0.1, 100);
        this.instance.position.set(6, 4, 8);
        this.scene.add(this.instance);
    }

    setOrbitControls()
    {
        this.controls = new OrbitControls(this.instance, this.canvas);
        this.controls.enableDamping = true;
    }

    resize()
    {
        this.instance.aspect = this.size.width / this.size.height;
        this.instance.updateProjectionMatrix();
    }

    update()
    {
        this.controls.update();
    }
}