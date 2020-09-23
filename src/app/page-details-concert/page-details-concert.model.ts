export class Concert{

    artiste : string;
    date : string;
    lieu : string;
    prixBillet : number;
    salleConcert : string;
    nom : string;

    constructor(date,lieu,nom){
        this.date = date;
        this.lieu = lieu;
        this.nom = nom;
    }

}