import { Version } from "./version";

export class Application {

    constructor(){
        console.clear()
    }

    build(version: string){

        // select version
        switch(version){
            case 'pro':
                this.version_pro();
                break;
            case 'dev':
                this.version_dev();
                break; 
        }

    }

    version_pro(){
        let build = new Version();
        build.prodution(); // config: prodution
        build.program(); // init: program
    }

    version_dev(){
        let build = new Version();
        build.development(); // config: development
        build.program(); // init: program
    }

}