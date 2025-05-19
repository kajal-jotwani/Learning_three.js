import * as THREE from 'three';

const canvas = document.querySelector('canvas.webgl');

// scene
const scene = new THREE.Scene();

// object 
const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial({color: "skyblue"});
const mesh = new THREE.Mesh(geometry, material);
// mesh.position.z = 1;
// mesh.position.y = 1;
// mesh.rotation.x = 0.5
scene.add(mesh);

// scale - resize without modifying geometry, animate, flip objects
mesh.scale.set(1.8, 1, 1);

// rotation
// mesh.rotation.reorder = 'YXZ';  
// mesh.rotation.x = Math.PI * 1.5;
// mesh.rotation.y = Math.PI * 3;
// mesh.rotation.z = Math.PI * 2;

// sizes
const size = {
    width: window.innerWidth,
    height: window.innerHeight
}

// axes helper - this is a helper to visualize the axes in the scene
// it is not a part of the scene, but a helper to visualize the axes

const axesHelper = new THREE.AxesHelper(3);
scene.add(axesHelper);

// camera
const camera = new THREE.PerspectiveCamera(75, size.width / size.height);
// camera.position.z = 3;
// camera.position.y = 1;
// camera.position.x = 1;
camera.position.set(0, -0.6, 3);
scene.add(camera);

// camera.lookAt(new THREE.Vector3(0, 0, 0));

/*
// group -  used to combine multiple 3D objects so you can move, scale, or rotate them together as a single unit. 
const group = new THREE.Group();
const size = {
    width: window.innerWidth,
    height: window.innerHeight
}
const camera = new THREE.PerspectiveCamera(75, size.width / size.height);
const Cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: "skyblue" })
)
const Cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: "green" })
)
const Cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: "red" })
)
Cube1.position.x = -1.5;
Cube2.position.x = 0;
Cube3.position.x = 1.5;
camera.position.z = 5;
group.add(Cube1, Cube2, Cube3);

scene.add(group);
*/

// renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

renderer.setSize(size.width, size.height);

renderer.render(scene, camera);
