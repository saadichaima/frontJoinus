import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProfilService{



 constructor(public http:HttpClient) { }

 GetInfoUser(){

  var id ;
  			if(typeof (Storage) !== 'undefined') {

           id=sessionStorage.getItem('currId') ; 
           console.log(id);

            }

 return this.http.get("http://localhost:1994/clients/"+id).pipe(map((resp: any)=> resp)) ;
    



}
	
  }