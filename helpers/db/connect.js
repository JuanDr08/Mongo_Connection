import { MongoClient } from "mongodb"; // metodo para conectarnos, recibe parametro el cual es la cadena de conexion 

// export class connect {
//     static instance;
//     name;
//     constructor(nombre) {
//         if(typeof connect.instance === 'object'){
//             return connect.instance;
//         }
//         this.name = nombre;
//         connect.instance = this;
//         console.log(connect.instance, "hola")
//         return this
//     }
// }

export class connect {
    static instance;
    user;
    port;
    #pass;
    #host;
    #cluster;
    #dbName
    constructor({user : u, port : p, pass: w, host: h, cluster: c, dbName: d} = {user: "juandavidrodriguez890", port: 3000, pass: 'tG0RjXhRjqrLljM2', host: 'mongodb+srv://', cluster: "@cluster0.5qmhwzi.mongodb.net", dbName: 'test'}) {
        if(typeof connect.instance === 'object'){
            return connect.instance;
        }
        this.user = u
        this.port = p
        this.setPass = w
        this.setHost = h
        this.setCluster = c
        this.setDbName = d
        this.#open();
        this.db = this.conexion.db(this.getDbName);
        connect.instance = this;
        return this
    }
    set setPass(pass) {
        this.#pass = pass;
    }
    set setHost(host) {
        this.#host = host;
    }
    set setCluster(cluster) {
        this.#cluster = cluster;
    }
    set setDbName(dbName) {
        this.#dbName = dbName;
    }
    get getPass(){
        return this.#pass
    }
    get getHost(){
        return this.#host
    }
    get getCluster(){
        return this.#cluster
    }
    get getDbName(){
        return this.#dbName
    }
    async reconnect(){
        await this.#open();
    }
    async #open () {
        this.conexion = new MongoClient(`mongodb://mongo:PNSmQbwecKrbuFTCqXmYoaqicgEZpFeF@monorail.proxy.rlwy.net:47797/`)
        await this.conexion.connect();
        
    }
    async close(){
        await this.conexion.close();
    }
}

// mongodb+srv://juandavidrodriguez890:tG0RjXhRjqrLljM2@cluster0.5qmhwzi.mongodb.net/