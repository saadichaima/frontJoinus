import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Restauration } from './models/restauration.model';

@Injectable({
  providedIn: 'root'
})

export class RestaurationService{

 constructor(public http:HttpClient) { }

 getRestaurations(motCle:string, page:number , size:number){
 	return this.http.get("http://localhost:1994/chercherRestaurations?mc="+motCle+"&size="+size+"&page="+page+"")
   .pipe(map((resp:any)=> resp));

 }

 saveRestauration(restauration:Restauration){
 	return this.http.post("http://localhost:1994/restaurations",restauration)
   .pipe(map((resp:any)=> resp));

 }
 
  getRestaurationById(id:number){
 	return this.http.get("http://localhost:1994/restaurations/"+id+"")
   .pipe(map((resp:any)=> resp));

 }

  getDisponibiliteHebergementByIdRestauration(idRestauration:number){
 	return this.http.get("http://localhost:1994/DisponibiliteRestauration?idRestauration="+idRestauration)
   .pipe(map((resp:any)=> resp));

 }

 updateRestauration(restauration: Restauration){
 	return this.http.put("http://localhost:1994/restauration/"+restauration.idRestauration,restauration)
   .pipe(map((resp:any)=> resp));
 }

 deleteRestauration(id:number){
 	return this.http.delete("http://localhost:1994/restauration/"+id)
   .pipe(map((resp:any)=> resp));
 }




 

}
	
  


