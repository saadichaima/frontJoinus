import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { ClientsService } from '../clients.service';
import { Client } from '../models/client.model';
import { User } from '../models/user.model';
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {


  public username: string="";
  public password: string="";
  public nomClient: string="";
  public email : string="" ; 
  public tel :string ="";
  public idClient: number=1;
  public adresse:any;
  idUser: number =0;
  actived: boolean =false;
  role:number=0;
data: any;
constructor(public userservice: UserService , private router:Router, private clientsService:ClientsService) { }

ngOnInit() {

}


//mode:number=1;

//console.log(this.user.username);
ajouterUser(){


let ficheclient: Client = {
  idClient: this.idClient,
          nomClient: this.nomClient,
          adresse: this.password , 
          email: this.email , 
          tel: this.tel 

        }

         


  //console.log("Voila 1 " + user.username) ;
  console.log("Voila  " + ficheclient) ;

  this.clientsService.saveClient(ficheclient)
  .subscribe(
    (data: any) => {
      console.log(`voilaaa ${data.nomClient}`);
    },
    (err: any) => {
      console.error(err);
    }
  );



let user: User = {
          username: this.username,
          password: this.password,
          idUser: this.idUser,
          actived: this.actived,
          role:this.role,
          ficheClient: this.data
      }

      this.userservice.saveUser(user)
      .subscribe(
        (data: any) => {
          // Success callback
          console.log(`voilaaa ${data}`);
          this.router.navigate(['connexion']);
        },
        (error: any) => {
          // Error callback
          console.error(error);
        }
      );
    
}

 





login(){
this.router.navigate(['connexion'] ) ;    

}




}
