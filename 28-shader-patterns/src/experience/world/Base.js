import * as THREE from 'three'

import Experience from '../Experience'
import Resources from '../utils/Resources'
import Debug from '../utils/Debug'
import Time from '../utils/Time'
import vertexShader from '../../shaders/test/vertex.glsl';
import fragmentShader from '../../shaders/test/fragment.glsl';
import fragmentShader2 from '../../shaders/test/fragment2.glsl';
import fragmentShader3 from '../../shaders/test/fragment3.glsl';
import fragmentShader4 from '../../shaders/test/fragment4.glsl';
import fragmentShader5 from '../../shaders/test/fragment5.glsl';
import fragmentShader6 from '../../shaders/test/fragment6.glsl';
import fragmentShader7 from '../../shaders/test/fragment7.glsl';


// console.log(vertexShader)
// console.log(fragmentShader)

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
        // this.material = new THREE.MeshBasicMaterial({ color: 0xff00ff });
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.mesh.position.x = -2;
        this.scene.add(this.mesh);

        // const axesHelper = new THREE.AxesHelper(2);
        // this.scene.add(axesHelper);

        // Pattern 2
        this.material = new THREE.ShaderMaterial({
            vertexShader: vertexShader,
            fragmentShader: fragmentShader2,
            side: THREE.DoubleSide,
        });
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.mesh.position.x = -1;
		this.scene.add(this.mesh);

        // pattern 3
        this.material = new THREE.ShaderMaterial({
            vertexShader: vertexShader,
            fragmentShader: fragmentShader3,
            side: THREE.DoubleSide,
        });
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.mesh.position.x = 0;
		this.scene.add(this.mesh);

        // Pattern 4
        this.material = new THREE.ShaderMaterial({
            vertexShader: vertexShader,
            fragmentShader: fragmentShader4,
            side: THREE.DoubleSide,
        });
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.mesh.position.x = 1;
		this.scene.add(this.mesh);

        // pattern 5
        this.material = new THREE.ShaderMaterial({
            vertexShader: vertexShader,
            fragmentShader: fragmentShader5,
            side: THREE.DoubleSide,
        });
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.mesh.position.x = 2;
		this.scene.add(this.mesh);

        // Pattern 6
        this.material = new THREE.ShaderMaterial({
            vertexShader: vertexShader,
            fragmentShader: fragmentShader6,
            side: THREE.DoubleSide,
        });
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.mesh.position.x = -2;
        this.mesh.position.z = 1;
		this.scene.add(this.mesh);

        // pattern 7
        this.material = new THREE.ShaderMaterial({
            vertexShader: vertexShader,
            fragmentShader: fragmentShader7,
            side: THREE.DoubleSide,
        });
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.mesh.position.x = -1;
        this.mesh.position.z = 1;
		this.scene.add(this.mesh);
    }
    update() {}

}