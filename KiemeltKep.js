export default class KiemeltKep{
    #eUt;
    #cim;/*privát adattag */
    constructor(eUt,cim,szuloElem){
        /*beállítja az adattagokat */
        this.#eUt=eUt;
        this.#cim=cim;
        this.szuloElem=szuloElem/*publikus adattag */
        this.megjelenit();

    }
    /*kell-e getter és setter valójában?
    MIVEL A GALÉRIÁBAN A KÉPEK ELÉRÉSI ÚTJÁT NEM AKAROM VÁLTOZTANI,EZÉRT NEM KELL
    */
   megjelenit(){
    /*HTML kódban elhelyezzük a képet az adataival */
    let html=`<div class="kep">
                <h3>${this.#cim}</h3>
                <img src="${this.#eUt}" alt="${this.#cim}">
            </div>`
            this.szuloElem.innerHTML=html;
   }
}