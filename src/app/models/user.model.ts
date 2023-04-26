import { Client } from "./client.model";
export class User{


	idUser:number=0;
	username:string="";
	password:string="";
	actived:boolean=false;;
	role:number=0;
	ficheClient:Client; 
	
	constructor() { 
		this.ficheClient= new Client(); 

				}


}