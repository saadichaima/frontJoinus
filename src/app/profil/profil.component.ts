import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilityService } from '../utility.service';
import { ProfilService } from '../profil.service';
@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  mail:any ;
  user:any ;
  currentUser:any;
 

   
  constructor ( private http: HttpClient,  public router:Router, public profilservice : ProfilService , private utility:UtilityService )   { }



  ngOnInit() {


 this.utility.isLogged().then((result: boolean) => {
            if(!result) {
                           this.router.navigate(['connexion']);

            }

            else{
               this.profile();

            }
        })


  }


profile() {

  this.profilservice.GetInfoUser().subscribe(
    (data: any) => {
      // Success callback
      this.user = data;
      console.log(this.user);
    },
    (error: any) => {
      // Error callback
      console.error(error);
    }
  );
  


}






/*public download() {
       
        
var server  = email.server.connect({
   user:    "nawal.zakri1@gmail.com", 
   password:"W1SnhpGfbkqFUyJx", 
   host:    "smtp-relay.sendinblue.com", 
   ssl:     true
   port:    587
});
 
// send the message and get a callback with an error or details of the message that was sent
server.send({
   text:    "You have signed up", 
   from:    "nawal.zakri1@gmail.com", 
   to:      "nawal.zakri1@insa-cvl.fr",
   subject: "Welcome to my app",
   attachment: 
   [
      {data:"<html>i <i>hope</i> this works!</html>", alternative:true},
     
   ]
}, function(err, message) { 
    if(err)
    console.log(err);
    else
    res.json({success: true, msg: 'sent'});
 });
        
    } */

 





}
