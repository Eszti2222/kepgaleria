import Kep from "./Kep.js";

export default class Galeria{

    #lista=[];
    constructor(lista,szuloElem){
        this.#lista=lista;
        this.szuloElem=szuloElem;
        this.megjelenit();
        }
    megjelenit(){
        for (let index = 0; index < this.#lista.length; index++) {
            const element = this.#lista[index];
            const KEP = new Kep(element.kep,element.cim,index,this.szuloElem)
                
        }
    }
}