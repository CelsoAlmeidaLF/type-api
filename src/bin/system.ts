import Version from "./version";

export default class System {
    
    private version: Version

    constructor(){
        this.version = new Version();
    }

    config(version: string){
        this.version.config(version);
    }

}