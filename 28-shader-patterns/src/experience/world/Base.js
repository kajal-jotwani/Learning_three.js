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
import fragmentShader8 from '../../shaders/test/fragment8.glsl';
import fragmentShader9 from '../../shaders/test/fragment9.glsl';
import fragmentShader10 from '../../shaders/test/fragment10.glsl';
import fragmentShader11 from '../../shaders/test/fragment11.glsl';
import fragmentShader12 from '../../shaders/test/fragment12.glsl';
import fragmentShader13 from '../../shaders/test/fragment13.glsl';
import fragmentShader14 from '../../shaders/test/fragment14.glsl';
import fragmentShader15 from '../../shaders/test/fragment15.glsl';
import fragmentShader16 from '../../shaders/test/fragment16.glsl';
import fragmentShader17 from '../../shaders/test/fragment17.glsl';
import fragmentShader18 from '../../shaders/test/fragment18.glsl';
import fragmentShader19 from '../../shaders/test/fragment19.glsl';
import fragmentShader20 from '../../shaders/test/fragment20.glsl';
import fragmentShader21 from '../../shaders/test/fragment21.glsl';
import fragmentShader22 from '../../shaders/test/fragment22.glsl';
import fragmentShader23 from '../../shaders/test/fragment23.glsl';
import fragmentShader24 from '../../shaders/test/fragment24.glsl';
import fragmentShader25 from '../../shaders/test/fragment25.glsl';
import fragmentShader26 from '../../shaders/test/fragment26.glsl';
import fragmentShader27 from '../../shaders/test/fragment27.glsl';
import fragmentShader28 from '../../shaders/test/fragment28.glsl';
import fragmentShader29 from '../../shaders/test/fragment29.glsl';
import fragmentShader30 from '../../shaders/test/fragment30.glsl';
import fragmentShader31 from '../../shaders/test/fragment31.glsl';
import fragmentShader32 from '../../shaders/test/fragment32.glsl';
import fragmentShader33 from '../../shaders/test/fragment33.glsl';
import fragmentShader34 from '../../shaders/test/fragment34.glsl';
import fragmentShader35 from '../../shaders/test/fragment35.glsl';



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

        // pattern 8
        this.material = new THREE.ShaderMaterial({
            vertexShader: vertexShader,
            fragmentShader: fragmentShader8,
            side: THREE.DoubleSide,
        });
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.mesh.position.x = 0;
        this.mesh.position.z = 1;
		this.scene.add(this.mesh);

        // pattern 9
        this.material = new THREE.ShaderMaterial({
            vertexShader: vertexShader,
            fragmentShader: fragmentShader9,
            side: THREE.DoubleSide,
        });
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.mesh.position.x = 1;
        this.mesh.position.z = 1;
		this.scene.add(this.mesh);

        // pattern 10
        this.material = new THREE.ShaderMaterial({
            vertexShader: vertexShader,
            fragmentShader: fragmentShader10,
            side: THREE.DoubleSide,
        });
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.mesh.position.x = 2;
        this.mesh.position.z = 1;
		this.scene.add(this.mesh);

        // pattern 11
        this.material = new THREE.ShaderMaterial({
            vertexShader: vertexShader,
            fragmentShader: fragmentShader11,
            side: THREE.DoubleSide,
        });
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.mesh.position.x = -2;
        this.mesh.position.z = 2;
		this.scene.add(this.mesh);

        // pattern 12
        this.material = new THREE.ShaderMaterial({
            vertexShader: vertexShader,
            fragmentShader: fragmentShader12,
            side: THREE.DoubleSide,
        });
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.mesh.position.x = -1;
        this.mesh.position.z = 2;
		this.scene.add(this.mesh);

        // pattern 13
        this.material = new THREE.ShaderMaterial({
            vertexShader: vertexShader,
            fragmentShader: fragmentShader13,
            side: THREE.DoubleSide,
        });
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.mesh.position.x = 0;
        this.mesh.position.z = 2;
		this.scene.add(this.mesh);

        // pattern 14
        this.material = new THREE.ShaderMaterial({
            vertexShader: vertexShader,
            fragmentShader: fragmentShader14,
            side: THREE.DoubleSide,
        });
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.mesh.position.x = 1;
        this.mesh.position.z = 2;
		this.scene.add(this.mesh);

        // pattern 15
        this.material = new THREE.ShaderMaterial({
            vertexShader: vertexShader,
            fragmentShader: fragmentShader15,
            side: THREE.DoubleSide,
        });
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.mesh.position.x = 2;
        this.mesh.position.z = 2;
		this.scene.add(this.mesh);
        
        // pattern 16
        this.material = new THREE.ShaderMaterial({
            vertexShader: vertexShader,
            fragmentShader: fragmentShader16,
            side: THREE.DoubleSide,
        });
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.mesh.position.x = -2;
        this.mesh.position.z = 3;
		this.scene.add(this.mesh);

        // pattern 17
        this.material = new THREE.ShaderMaterial({
            vertexShader: vertexShader,
            fragmentShader: fragmentShader17,
            side: THREE.DoubleSide,
        });
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.mesh.position.x = -1;
        this.mesh.position.z = 3;
		this.scene.add(this.mesh);

        // pattern 18
        this.material = new THREE.ShaderMaterial({
            vertexShader: vertexShader,
            fragmentShader: fragmentShader18,
            side: THREE.DoubleSide,
        });
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.mesh.position.x = 0;
        this.mesh.position.z = 3;
		this.scene.add(this.mesh);

        // pattern 19
        this.material = new THREE.ShaderMaterial({
            vertexShader: vertexShader,
            fragmentShader: fragmentShader19,
            side: THREE.DoubleSide,
        });
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.mesh.position.x = 1;
        this.mesh.position.z = 3;
		this.scene.add(this.mesh);

        // pattern 20
        this.material = new THREE.ShaderMaterial({
            vertexShader: vertexShader,
            fragmentShader: fragmentShader20,
            side: THREE.DoubleSide,
        });
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.mesh.position.x = 2;
        this.mesh.position.z = 3;
		this.scene.add(this.mesh);

        // pattern 21
        this.material = new THREE.ShaderMaterial({
            vertexShader: vertexShader,
            fragmentShader: fragmentShader21,
            side: THREE.DoubleSide,
        });
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.mesh.position.x = -2;
        this.mesh.position.z = 4;
		this.scene.add(this.mesh);

        // pattern 22
        this.material = new THREE.ShaderMaterial({
            vertexShader: vertexShader,
            fragmentShader: fragmentShader22,
            side: THREE.DoubleSide,
        });
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.mesh.position.x = -1;
        this.mesh.position.z = 4;
		this.scene.add(this.mesh);

        // pattern 23
        this.material = new THREE.ShaderMaterial({
            vertexShader: vertexShader,
            fragmentShader: fragmentShader23,
            side: THREE.DoubleSide,
        });
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.mesh.position.x = 0;
        this.mesh.position.z = 4;
		this.scene.add(this.mesh);

        // pattern 24
        this.material = new THREE.ShaderMaterial({
            vertexShader: vertexShader,
            fragmentShader: fragmentShader24,
            side: THREE.DoubleSide,
        });
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.mesh.position.x = 1;
        this.mesh.position.z = 4;
		this.scene.add(this.mesh);

        // pattern 25
        this.material = new THREE.ShaderMaterial({
            vertexShader: vertexShader,
            fragmentShader: fragmentShader25,
            side: THREE.DoubleSide,
        });
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.mesh.position.x = 2;
        this.mesh.position.z = 4;
		this.scene.add(this.mesh);

        // pattern 26
        this.material = new THREE.ShaderMaterial({
            vertexShader: vertexShader,
            fragmentShader: fragmentShader26,
            side: THREE.DoubleSide,
        });
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.mesh.position.x = -2;
        this.mesh.position.z = 5;
		this.scene.add(this.mesh);

        // pattern 27
        this.material = new THREE.ShaderMaterial({
            vertexShader: vertexShader,
            fragmentShader: fragmentShader27,
            side: THREE.DoubleSide,
        });
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.mesh.position.x = -1;
        this.mesh.position.z = 5;
		this.scene.add(this.mesh);

        // pattern 28
        this.material = new THREE.ShaderMaterial({
            vertexShader: vertexShader,
            fragmentShader: fragmentShader28,
            side: THREE.DoubleSide,
        });
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.mesh.position.x = 0;
        this.mesh.position.z = 5;
		this.scene.add(this.mesh);

        // pattern 29
        this.material = new THREE.ShaderMaterial({
            vertexShader: vertexShader,
            fragmentShader: fragmentShader29,
            side: THREE.DoubleSide,
        });
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.mesh.position.x = 1;
        this.mesh.position.z = 5;
		this.scene.add(this.mesh);

        // pattern 30
        this.material = new THREE.ShaderMaterial({
            vertexShader: vertexShader,
            fragmentShader: fragmentShader30,
            side: THREE.DoubleSide,
        });
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.mesh.position.x = 2;
        this.mesh.position.z = 5;
		this.scene.add(this.mesh);

        // pattern 31
        this.material = new THREE.ShaderMaterial({
            vertexShader: vertexShader,
            fragmentShader: fragmentShader31,
            side: THREE.DoubleSide,
        });
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.mesh.position.x = -2;
        this.mesh.position.z = 6;
		this.scene.add(this.mesh);

        // pattern 32
        this.material = new THREE.ShaderMaterial({
            vertexShader: vertexShader,
            fragmentShader: fragmentShader32,
            side: THREE.DoubleSide,
        });
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.mesh.position.x = -1;
        this.mesh.position.z = 6;
		this.scene.add(this.mesh);

        // pattern 33
        this.material = new THREE.ShaderMaterial({
            vertexShader: vertexShader,
            fragmentShader: fragmentShader33,
            side: THREE.DoubleSide,
        });
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.mesh.position.x = 0;
        this.mesh.position.z = 6;
		this.scene.add(this.mesh);

        // pattern 34
        this.material = new THREE.ShaderMaterial({
            vertexShader: vertexShader,
            fragmentShader: fragmentShader34,
            side: THREE.DoubleSide,
        });
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.mesh.position.x = 1;
        this.mesh.position.z = 6;
		this.scene.add(this.mesh);

        // pattern 35
        this.material = new THREE.ShaderMaterial({
            vertexShader: vertexShader,
            fragmentShader: fragmentShader35,
            side: THREE.DoubleSide,
        });
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.mesh.position.x = 2;
        this.mesh.position.z = 6;
		this.scene.add(this.mesh);


    }
    update() {}

}