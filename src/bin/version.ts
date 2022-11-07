import Application  from "../app/application"

export default class Version {

    config(version: string){
        switch(version){
            case 'dev':
                this.desenvolvimento();
                break;
            case 'prod':
                this.produção();
                break;    
            case 'homg':
                this.homologação();
                break;  
        }
    }

    desenvolvimento(){

    }

    produção(){

    }

    homologação(){

    }

}