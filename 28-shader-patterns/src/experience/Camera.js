import * as THREE from 'three'
import Experience from './Experience.js';
import { OrbitControls } from 'three/examples/jsm/Addons.js';

export default class Camera 
{
    constructor()
    {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.size = this.experience.sizes
        this.canvas = this.experience.canvas;

        this.setInstance();
        this.setOrbitControls();
    }

    setInstance()
    {
        this.instance = new THREE.PerspectiveCamera(75, this.size.width / this.size.height, 0.1, 1000);
        this.instance.position.set(0, 1, 1.5);
        // this.instance.lookAt(0, 0, 0); 
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
        this.controls.update()
    }
}