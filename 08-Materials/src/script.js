import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
/**
 * Textures
 */

const textureLoader = new THREE.TextureLoader();
const cubeTextureLoader = new THREE.CubeTextureLoader();
const rgbeLoader = new RGBELoader();


const doorColorTexture = textureLoader.load('/textures/door/color.jpg')
const doorAlphaTexture = textureLoader.load('/textures/door/alpha.jpg')
const doorAmbientOclusionTexture = textureLoader.load('/textures/door/ambientOcclusion.jpg')
const doorHeightTexture = textureLoader.load('/textures/door/height.jpg')
const doorNormalTexture = textureLoader.load('/textures/door/normal.jpg')
const doorMetalnessTexture = textureLoader.load('/textures/door/metalness.jpg')
const doorRoughnessTexture = textureLoader.load('/textures/door/roughness.jpg')
const metcapTexture = textureLoader.load('/textures/matcaps/1.png')
const gradientTexture = textureLoader.load('/textures/gradients/3.png')

const environmentMapTexture = cubeTextureLoader.load([
   '/textures/environmentMaps/1/px.jpg',
   '/textures/environmentMaps/1/nx.jpg',
   '/textures/environmentMaps/1/py.jpg',
   '/textures/environmentMaps/1/ny.jpg',
   '/textures/environmentMaps/1/pz.jpg',
   '/textures/environmentMaps/1/nz.jpg'  
])

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

const gui = new dat.GUI()

/**
 * objects
 */

/* Material-01 MeshBasicMaterial

const material = new THREE.MeshBasicMaterial()
// material.map = doorColorTexture
// material.color.set('pink')

// when instantiated color property becomes Color
material.color = new THREE.Color('brown')

// when we want opacity we need to set transparancy true
// material.transparent = true;
// material.opacity = 0.5

// alphamap controls the transparency with texture
// material.transparent = true
// material.alphaMap = doorAlphaTexture

// side property lets you decide which side of face is visible 
material.side = THREE.DoubleSide
*/

 // Material-02 MeshNormalMaterial 
// const material = new THREE.MeshNormalMaterial()
// material.flatShading = true

// Material-03 MeshMatcapMaterial - we get an illusion that the objects are illuminated
// const material = new THREE.MeshMatcapMaterial()
// material.matcap = metcapTexture

// Material-04 MeshDepthMaterial - color the geometry white when closer and dark when farther
// const material = new THREE.MeshDepthMaterial()

// Material-05 MeshLambertMaterial - will react to light
// const material = new THREE.MeshLambertMaterial()

// Material-06 MeshPhongMaterial
// const material = new THREE.MeshPhongMaterial()
// material.shininess = 100

// Material-07 MeshToonMaterial - like lambart but cartoonish
// const material = new THREE.MeshToonMaterial()
// material.gradientMap = gradientTexture


const material = new THREE.MeshStandardMaterial()
material.metalness = 0.7
material.roughness = 0.2


// material.map = doorColorTexture
// material.aoMap = doorAmbientOclusionTexture
// material.aoMapIntensity = 1
// material.displacementMap = doorHeightTexture
// material.displacementScale = 0.05
// material.metalnessMap = doorMetalnessTexture
// material.metalnessMap = doorRoughnessTexture
// material.normalMap = doorNormalTexture
// material.normalScale.set(0.5, 0.5)
// material.transparent = true
// material.alphaMap = doorAlphaTexture

rgbeLoader.load('/textures/environmentMap/2k.hdr', function (environmentMap) {
    // Set the mapping for correct reflections
    environmentMap.mapping = THREE.EquirectangularReflectionMapping;

    // Apply as scene background and environment
    scene.background = environmentMap;
    scene.environment = environmentMap;

    // If you have a material that depends on it, update it
    // Example: assume you created a meshStandardMaterial
    material.needsUpdate = true;

    // Optional: log to confirm
    console.log('HDR environment map loaded');
});

gui.add(material, 'metalness').min(0).max(1).step(0.01);
gui.add(material, 'roughness').min(0).max(1).step(0.01);
gui.add(material, 'aoMapIntensity').min(0).max(10).step(0.01)
gui.add(material, 'displacementScale').min(0).max(10).step(0.01)

const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 64, 64),
    material
)
sphere.position.x = -1.5

sphere.geometry.setAttribute('uv2', new THREE.BufferAttribute(sphere.geometry.attributes.uv.array, 2))

const plane = new THREE.Mesh(
    new THREE.PlaneGeometry(1, 1, 100, 100),
    material
)

plane.geometry.setAttribute('uv2', new THREE.BufferAttribute(plane.geometry.attributes.uv.array, 2))


const torus = new THREE.Mesh(
    new THREE.TorusGeometry( 0.3, 0.2, 64, 128),
    material
)
torus.position.x = 1.5

torus.geometry.setAttribute('uv2', new THREE.BufferAttribute(torus.geometry.attributes.uv.array, 2))

scene.add(sphere, plane, torus)

/**
 * lights
 */
const ambientLight = new THREE.AmbientLight('white', 0.3)
scene.add(ambientLight)

const pointLight = new THREE.PointLight('white', 1)
pointLight.position.x = 2
pointLight.position.y = 3
pointLight.position.z = 4
scene.add(pointLight)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 1
camera.position.y = 1
camera.position.z = 2
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()
    
    // update objects
    // sphere.rotateX(0.015 * elapsedTime) 
    // plane.rotateX (0.015 * elapsedTime)
    // torus.rotateX (0.015 * elapsedTime)

    // sphere.rotateY (0.015 * elapsedTime)
    // plane.rotateY (0.015 * elapsedTime)
    // torus.rotateY (0.015 * elapsedTime)

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()