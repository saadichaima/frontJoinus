import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SemaineService{

  constructor(public http:HttpClient) { }
 
 
 getSemaines(id:number){
    return this.http.get("http://localhost:1994/semaines"+id)
    .pipe(map((resp:any)=> resp.json()));
 
  }
 
 
 
  
 }
   
