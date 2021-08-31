import { Evenement } from "./evenement";
import { Servicee } from "./servicee";

export class Reservation {
    idReservation?:number;
    date?:Date;
    countFinal?:number;
    evenement?:Evenement;
    service?:Servicee;
}
