import * as THREE from 'three'

import Experience from '../Experience'
import Resources from '../utils/Resources'
import Debug from '../utils/Debug'
import Time from '../utils/Time'
import vertexShader from '../../shaders/test/vertex.glsl';
import fragmentShader from '../../shaders/test/fragment.glsl';

export default class Base 
{
    constructor()
    {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.debug = this.experience.debug;
        this.time = this.experience.time;

        this.setGeometry();
        this.setTexture();
        this.setMaterial();
    }

    setGeometry(){
        this.geometry = new THREE.PlaneGeometry(0.8, 0.8, 32, 32);
    }

    setTexture() {}

    setMaterial(){
        // Pattern 1
        this.material = new THREE.ShaderMaterial({
            vertexShader: vertexShader,
            fragmentShader: fragmentShader,
            side: THREE.DoubleSide,
        });
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.mesh.position.x = -2;
        this.scene.add(this.mesh);
    }
}