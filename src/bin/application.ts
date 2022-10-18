import { Framework } from "./framework";
import { System } from "./system";

export class Application {

    framework: Framework
    system: System

    constructor(){
        console.clear()
        this.system = new System();
        this.framework = new Framework();
    }

    version(version: string){
        this.system.version(version);
    }
    
}