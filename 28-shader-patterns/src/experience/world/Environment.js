import * as THREE from "three";

import Experience from "../Experience";
import Debug from "../utils/Debug";
import Resources from "../utils/Resources";

export default class Environment {
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.debug = this.experience.debug;

        this.sunlight = undefined;
        this.environmentMap = {};
        this.debugFolder = undefined;
    }
}