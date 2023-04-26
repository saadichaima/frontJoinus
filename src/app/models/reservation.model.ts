import { Client } from "./client.model";
import { Restauration } from "./restauration.model";
import { Semaine } from "./semaine.model";
import { Hebergement } from "./hebergement.model";
export class Reservation{
	
	idReservation:number=0;
	nbrPersonne:number=0;
	nbrSemaine:number=0;
	nomReservation:string="";
	total:number=0;
	typePaiement:string="";
	client:Client;
    restauration:Restauration|null;
    semaine:Semaine;
hebergement:Hebergement;
	

	constructor() { 
		//this.hebergement = new Hebergement();
        //this.semaine = new Semaine();
        this.client= new Client();
        this.restauration=new Restauration();
		this.semaine= new Semaine();
		this.hebergement= new Hebergement();

				}


}