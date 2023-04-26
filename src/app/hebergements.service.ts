import { Injectable } from '@angular/core';
import { Hebergement } from './models/hebergement.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HebergementsService{

  constructor(public http:HttpClient) { }
 
  getHebergements(motCle:string, page:number , size:number){
    return this.http.get("http://localhost:1994/chercherHebergements?mc="+motCle+"&size="+size+"&page="+page+"")
    .pipe(map((resp:any)=> resp));
 
  }
 
  saveHebergement(hebergement:Hebergement){
    return this.http.post("http://localhost:1994/hebergements",hebergement)
    .pipe(map((resp:any)=> resp));
 
  }
  
   getHebergementById(id:number){
    return this.http.get("http://localhost:1994/hebergement/"+id+"")
    .pipe(map((resp:any)=> resp));
 
  }
 
   updateHebergement(hebergement: Hebergement){
    return this.http.put("http://localhost:1994/hebergement/"+hebergement.idHebergement,hebergement)
    .pipe(map((resp:any)=> resp));
  }
 
 
   getDisponibiliteHebergementByIdHebergement(idHebergement:number){
    return this.http.get("http://localhost:1994/DisponibiliteHebergement?idHebergement="+idHebergement)
     .pipe(map((resp:any)=> resp));
 
  }
 
  deleteHebergement(id:number){
    return this.http.delete("http://localhost:1994/hebergement/"+id)
    .pipe(map((resp:any)=> resp));
  }
 
  getSemaine(id:number){
    return this.http.get("http://localhost:1994/semaines/"+id)
    .pipe(map((resp:any)=> resp));
 
  }
 
  getSemaines(){
    return this.http.get("http://localhost:1994/semaines")
    .pipe(map((resp:any)=> resp));
 
  }
 
  
 
 }
   