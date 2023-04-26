import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService{

 constructor(public http:HttpClient) { }


   GetUser(){
 
 

 return this.http.get("http://localhost:1994/users").pipe(map((resp: any) => resp)); ;
    
//console.log("Ok") ;


}

}
	
  