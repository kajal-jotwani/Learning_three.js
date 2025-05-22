import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

/**
 * Textures
 */
/*
const image = new Image();
const texture = new THREE.Texture(image);

image.addEventListener('load', () => {
    texture.needsUpdate = true
})

image.src = '/textures/door/color.jpg'
*/
// loading manager 
const loadingManager = new THREE.LoadingManager();
/*
loadingManager.onStart = () => {
    console.log('loading started');
}

loadingManager.onLoad = () => {
    console.log('loading finished');
}

loadingManager.onProgress = () => {
    console.log(`loading progress`);
}

loadingManager.onError = () => {
    console.log(`loading error`);
}
*/

// Method 2 using the textureloader class
const textureLoader = new THREE.TextureLoader(loadingManager);
// loading multiple textures
// const colorTexture = textureLoader.load('./textures/door/color.jpg') 
// const colorTexture = textureLoader.load('./textures/checkerboard-1024x1024.png')
const colorTexture = textureLoader.load('./textures/minecraft.png')
const alphaTexture = textureLoader.load('./textures/door/alpha.jpg')
const heightTexture = textureLoader.load('./textures/door/height.jpg')
const normalTexture = textureLoader.load('./textures/door/normal.jpg')
const ambientOcclusionTexture = textureLoader.load('./textures/door/ambientOcclusion.jpg')
const metalnessTexture = textureLoader.load('./textures/door/metalness.jpg')
const roughnessTexture = textureLoader.load('./textures/door/roughness.jpg')

// colorTexture.repeat.x = 2
// colorTexture.repeat.y = 3

// to repeat the texture
// colorTexture.wrapS = THREE.RepeatWrapping
// colorTexture.wrapT = THREE.RepeatWrapping

// for mirroring the texture
// colorTexture.wrapS = THREE.MirroredRepeatWrapping
// colorTexture.wrapT = THREE.MirroredRepeatWrapping

// to flip the texture
// colorTexture.flipY = false

// to set the texture offset
// colorTexture.offset.x = 0.5
// colorTexture.offset.y = 0.5

// to set the texture rotation
// colorTexture.rotation = Math.PI / 4 

// minmap filter
// if we are using nearest filter, we can deactivate the mipmap generation
// colorTexture.generateMipmaps = false
// colorTexture.minFilter = THREE.NearestFilter
colorTexture.magFilter = THREE.NearestFilter


/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Object
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
// instead of using a color, we use the texture
const material = new THREE.MeshBasicMaterial({map:colorTexture })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

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
camera.position.z = 1
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

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()