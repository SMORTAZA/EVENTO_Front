import { Adresse } from "./adresse";

export class Evenement {
    idEvenement?:number;
    description:String='';
    budget:number=0;
    categorie:String='';
    nom:String='';
    dateDebut?:Date;
    dateFin?:Date;
    adresse?:Adresse;

}
