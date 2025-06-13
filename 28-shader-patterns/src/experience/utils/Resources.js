import * as THREE from 'three';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import EventEmitter from './EventEmitters';

export default class Resources extends EventEmitter
{
    constructor(sources)
    {
        super();

        this.sources = sources;

        // setup
        this.items = {};  // Will hold loaded files by name
        this.toLoad = this.sources.length; // Total number of things to load
        this.loaded = 0;  // How many have finished loading

        this.setLoaders();  // Set up loader objects
        this.startLoading();  // Begin loading all resources
    }

    setLoaders()
    {
        this.loaders = {};
        this.loaders.gltfLoader = new GLTFLoader();
        this.loaders.textureloader = new THREE.TextureLoader();
        this.loaders.cubeTextureLoader = new THREE.CubeTextureLoader();
    }

    startLoading()
    {
        for(const source of this.sources){
            if(source.type === "gltfModel"){
                this.loaders.gltfLoader.load(source.path, (file) => {
                    this.sourceLoaded(source, file);
                })
            }
            else if(source.type === "texture"){
                this.loaders.textureloader.load(source.path, (file) => {
                    this.sourceLoaded(source, file);
                })
            }
            else if(source.type === "cubeTexture"){
                this.loaders.load(source.path, (file) => {
                    this.sourceLoaded(source, file);
                })
            }
        }
    }

    sourceLoaded(source, file)
    {
        this.items[source.name] = file
        this.loaded++;

        if(this.loaded == this.toLoad)
        {
            this.trigger('ready')
        }
    }
}