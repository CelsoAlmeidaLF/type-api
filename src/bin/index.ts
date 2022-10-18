import { Application } from "./application";

class Program extends Application {
    constructor(){
        super()
    }

    main(){
        this.version("dev");
    }
}

let prog = new Program();
prog.main();