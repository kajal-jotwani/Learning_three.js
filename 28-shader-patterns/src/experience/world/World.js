import * as THREE from 'three';
import Base from './Base';
import Resources from '../utils/Resources';
import Environment from './Environment';
import Experience from '../Experience';

export default class World
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        // this.resources.on("ready", () => {
            this.environment = new Environment()
            this.base = new Base()
        // })

    }
    update() {
        if(this.base){
            this.base.update();
        }
    }
}