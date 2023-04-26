import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { User } from './models/user.model';
@Injectable({
  providedIn: 'root'
})
export class UserService{

  constructor(public http:HttpClient) { }
 
 
 
  saveUser(user:User){
    return this.http.post("http://localhost:1994/users",user)
     .pipe(map((resp:any)=> resp.json()));
 
  }
 
 
  
 }