import { Application } from "../app/application"

export class Version {

    private config: any | undefined

    constructor(){
        this.config = undefined
    }

    prodution() {
        this.config = 'prodution'
    }

    development() {
        this.config = 'development'
    }

    program(){
        let app = new Application(this.config);
    }
}