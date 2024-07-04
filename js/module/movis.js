import { connect } from "../../helpers/db/connect.js";


export class movis extends connect {
    static instance; 
    constructor() {
        if(typeof movis.instance === "object") {
            return movis.instance;
        }
        super();
        this.collection = this.db.collection("movis");
        movis.instance = this;
        return this;
    }

    async getAllMovis(){
        let res = await this.collection.find({},{}).toArray();
        await this.conexion.close()
        return res;
    }
    //
    async getMovieGenreAccion(){
        let res = await this.collection.find({genre: "Accion"},{name: 1, genre: 1}).toArray();
        await this.conexion.close()
        return res
    }
    //
    async getMovieFormatBlurayMoreThanTwoHundred(){
        let res = await this.collection.find({format: {$elemMatch: {$and: [{copies: {$gt: 200}}, {name: "Bluray"}]}}},{name:1, format:1}).toArray();
        await this.conexion.close()
        return res
    }
    //
    async getMoviesFormatDVDLessThanTen(){
        let res = await this.collection.find({format: {$elemMatch: {$and: [{name: "dvd"}, {value: {$lt: 10}}]}}},{name:1, format:1}).toArray();
        await this.conexion.close()
        return res
    }
    async getMoviesActorCobb(){
        let res = await this.collection.find({character: {$elemMatch: {apodo: "Cobb"}}},{name: 1,"character.apodo": 1}).toArray();
        await this.conexion.close()
        return res
    }
    async getMoviesIdActorTwoAndThree() {
        let res = await this.collection.find({character: {$elemMatch: {id_actor: {$in: [2,3]}}}},{name:1, _id: 0, character: 1}).toArray();
        await this.conexion.close()
        return res
    }
    //
    async getMoviesWithFormatBluray(){
        let res = await this.collection.find({"format.name": "Bluray"},{name:1, "format.name": 1}).toArray();
        await this.conexion.close()
        return res
    }
    //
    async getMoviesGenreCienciaFiccion(){
        let res = await this.collection.find({genre: {$elemMatch: {$eq: "Ciencia Ficción"}}},{name:1, genre: 1, _id: 0}).toArray();
        await this.conexion.close()
        return res
    }
    async getMoviesWithPrincipalRolMiguel(){
        let res = await this.collection.find({$and: [{"character.rol": "principal"}, {"character.apodo": "Miguel"}]},{name:1, character:1}).toArray();
        await this.conexion.close()
        return res
    }
    async getMoviesWithFormatLessThanOneHundred(){
        let res = await this.collection.find({"format.copies": {$gte: 100}},{name:1, format:1}).toArray();
        await this.conexion.close()
        return res
    }
    //
    async getMoviesWithIdActorOne(){
        let res = await this.collection.find({"character.id_actor": 1},{name: 1, character: 1}).toArray();
        await this.conexion.close()
        return res
    }
    async getMoviesWithPrincipalRolCobb(){
        let res = await this.collection.find({$and: [{"character.rol": "principal"}, {"character.apodo": "Cobb"}]},{name: 1, character: 1}).toArray();
        await this.conexion.close()
        return res
    }
    //
    async getMoviesWithMoreThanTwoHundredCopies(){
        let res = await this.collection.find({$and: [{"format.name": "Bluray"}, {"format.copies": {$gt: 200}}]}, {name: 1, format: 1}).toArray()
        await this.conexion.close()
        return res
    }
    //
    async getMoviesWithFormatDVDLessThanTen(){
        let res = await this.collection.find({$and: [{"format.name": "dvd"}, {"format.value": {$lt: 10}}]},{name:1, format:1}).toArray()
        await this.conexion.close()
        return res
    }
    async getMoviesWithSecondaryActorArthur(){
        let res = await this.collection.find({$and: [{"character.rol": "secundario"}, {"character.apodo": "Arthur"}]},{name:1, character:1}).toArray()
        await this.conexion.close()
        return res
    }
    async getMoviesWithPrincipalActorMiguel() {
        let res = await this.collection.find({$and: [{"character.rol": "principal"}, {"character.apodo": "Miguel"}]},{name:1, character:1}).toArray()
        await this.conexion.close()
        return res
    }
}