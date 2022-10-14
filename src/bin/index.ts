import { Application } from "./application";

class Program extends Application {
    constructor(){
        super()
    }

    main(){
        this.build("dev");
    }
}

let prog = new Program();
prog.main();