function Jatekos(nev, csapat, szin) {

    this.nev = nev;
    this.csapat = csapat;
    this.szin = szin;
    this.pontszam = 0;

}

Jatekos.prototype.dobas = function (pont) {

    if (pont) {
        this.pontszam += pont;
    } else {
        this.pontszam++;
    }

}

const jatekos1 = new Jatekos("Peter Wright", "Skótok", "lila");
const jatekos2 = new Jatekos("Michael Smith", "Angolok", "piros");

console.log(jatekos1);
console.log(jatekos2);

jatekos1.dobas(60);
jatekos2.dobas();

console.log(jatekos1);
console.log(jatekos2);



class Verseny{

    constructor (nev, nyeremeny, resztvevok = 1) {
        this.nev = nev;
        this.nyeremeny = nyeremeny;
        this.resztvevok = resztvevok;
    }

    SetNyeremeny(ujnyeremeny) {
        this.nyeremeny = ujnyeremeny;
    }

}

const verseny1 = new Verseny("Világbajnokság", 150000);
const verseny2 = new Verseny("Premier League", 300000, 8);

console.log(verseny1);
console.log(verseny2);

verseny1.SetNyeremeny(300000);
verseny2.SetNyeremeny(199000);

console.log(verseny1);
console.log(verseny2);