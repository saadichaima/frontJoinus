import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Reservation } from './models/reservation.model';
@Injectable({
  providedIn: 'root'
})

export class ReservationsService{

 constructor(public http:HttpClient) { }

 getReservations(motCle:string, page:number , size:number){
 	return this.http.get("http://localhost:1994/chercherReservations?mc="+motCle+"&size="+size+"&page="+page+"")
  	.pipe(map((resp:any)=> resp));

 }

 saveReservation(reservation:Reservation){
 	return this.http.post("http://localhost:1994/reservations",reservation,)
  	.pipe(map((resp:any)=> resp));

 }

 updateReservation(reservation: Reservation){
 	return this.http.put("http://localhost:1994/reservation/"+reservation.idReservation,reservation)
  	.pipe(map((resp:any)=> resp));
 }


 getReservationById(id:number){
 	return this.http.get("http://localhost:1994/reservation/"+id+"")
  	.pipe(map((resp:any)=> resp));
 }

deleteReservation(id:number){
 	return this.http.delete("http://localhost:1994/reservation/"+id+"")
  	.pipe(map((resp:any)=> resp));
 }

getAllReservation(){
		return this.http.get("http://localhost:1994/reservations")
  	.pipe(map((resp:any)=> resp));
}



getReservationBySemaineId(id :number, page:number , size:number){
 	return this.http.get("http://localhost:1994/chercherReservationsParSemaine?&id="+id+"&size="+size+"&page="+page+"")
  	.pipe(map((resp:any)=> resp));

 }


 // client 


//  lister reservations avec id client et id reservation
consulterReservationById(idR :number,idC :number, page:number , size:number){
 	return this.http.get("http://localhost:1994/consulterReservationById?&idR="+idR+"&idC="+idC+"&size="+size+"&page="+page+"")
  	.pipe(map((resp:any)=> resp));

 }

//lister all reservations with id client 
 consulterReservationByIdClient(idC :number, page:number , size:number){
 	return this.http.get("http://localhost:1994/consulterReservationByIdClient?&idC="+idC+"&size="+size+"&page="+page+"")
  	.pipe(map((resp:any)=> resp));

 }


}
	
  







