import sqlite3 from "sqlite3";

export default class Database {

    public sucess: string

    constructor(){
        this.sucess = ''
    }

    private Open(): sqlite3.Database {
        let db: sqlite3.Database = new sqlite3.Database('./database.db');
        return db;
    }

    // Get Entity
    async get(sql: string, params: any[] | undefined){
        let db = this.Open();

        try{
             return new Promise<any>((res, rej) => { 
                 db.get(sql, params, (err: Error | null, row: any) => { 
                    if(err) { rej(err) }
                    else { res(row) }
                });
            });
        }
        catch(err){
            throw err;
        }
        finally{
            db.close();
        }
    }

    // Get List
    async getall(sql: string, params: any[] | undefined) {
        let db = this.Open();

        try{
             return new Promise<any[]>((res, rej) => { 
                db.all(sql, params, (err: Error | null, rows: any[]) => { 
                    if(err) { rej(err) }
                    else { res(rows) }
                });
            });
        }
        catch(err){
            throw err;
        }
        finally{
            db.close();
        }
    }

    // Exec Command
    exec(sql: string): string {
        let db = this.Open();

        try{    
            db.exec(sql);
            return this.sucess;
        }
        catch(err){
            throw err;
        }
        finally{
            db.close();
        }
    }

    // Run Command
    run(sql: string, params: any[] | undefined): string {
        let db = this.Open();

        try{    
            db.run(sql, params);    
            return this.sucess;
        }
        catch(err){
            throw err;
        }
        finally{
            db.close();
        }
    }

}