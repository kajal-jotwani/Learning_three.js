import * as THREE from 'three';
import gsap from 'gsap';

const canvas = document.querySelector('canvas.webgl');

const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({color: "skyblue"});
const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

const size = {
    width: window.innerWidth,
    height: window.innerHeight
}

const camera = new THREE.PerspectiveCamera(75, size.width / size.height);
camera.position.z = 2;
scene.add(camera);

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(size.width, size.height);

let time = Date.now();

// clock
// const clock = new THREE.Clock();

// gsap
// gsap.to(mesh.position, {x: 2, duration: 1, delay: 1});

const tick = () => {
    /*
    // Delta time method 
    const currentTime = Date.now();
    const deltaTime = currentTime - time;
    time = currentTime;
    */

    // clock method
    // const elapsedTime = clock.getElapsedTime();

    // mesh.rotation.y += 0.001 * deltaTime;
    // mesh.rotateY(0.01);

    // mesh.rotation.y = elapsedTime;

    // mesh.position.y = Math.sin(elapsedTime);
    // mesh.position.x = Math.cos(elapsedTime);

    renderer.render(scene, camera);
    window.requestAnimationFrame(tick);
}
tick();
