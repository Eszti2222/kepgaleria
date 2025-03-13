export default class Kep {
  #eUt;
  #cim; /*privát adattag */
  #index;
  constructor(eUt, cim, index, szuloElem) {
    /*beállítja az adattagokat */
    this.#eUt = eUt;
    this.#cim = cim;
    this.#index = index;
    this.szuloElem = szuloElem; /*publikus adattag */
    this.megjelenit();
    this.kepElem = document.querySelector(".kep:last-child");
    this.kepElem.addEventListener("click", () => {
      console.log(this.#index);
      /*nincs return!
            e helyett létrehozunk egy saját eseményt - neve: kivalaszt.
            A saját eseményünkre tetszőleges osztályban fel tudunk iratkozni
            */
      const e = new CustomEvent("kivalaszt", { detail: this.#index });
      window.dispatchEvent(e);
    });
  }
  /*kell-e getter és setter valójában?
    MIVEL A GALÉRIÁBAN A KÉPEK ELÉRÉSI ÚTJÁT NEM AKAROM VÁLTOZTANI,EZÉRT NEM KELL
    */
  megjelenit() {
    /*HTML kódban elhelyezzük a képet az adataival */
    let html = `<div class="kep">
                <h3>${this.#cim}</h3>
                <img src="${this.#eUt}" alt="${this.#cim}">
            </div>`;
    /*innerHTML -html kódot illesztünk be, de nem kapunk HTML DOM objektumot ezért insertAdjacentHTML  */
    this.szuloElem.insertAdjacentHTML("beforeend", html);
  }
}
