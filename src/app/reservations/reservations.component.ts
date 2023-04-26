import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { ReservationsService } from '../reservations.service';
import { Router } from '@angular/router';
import { UtilityService } from '../utility.service';
import { Reservation } from '../models/reservation.model';
@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {

  pageClients:any;

  motCle:string="";
  currentPage:number=0;
  size:number=5;
  pages:any;
  idSemaine:number=0;

  constructor(public http:HttpClient, public reservationsservice: ReservationsService, private router: Router,private utility:UtilityService ) { }

  ngOnInit() {

this.utility.isLogged().then((result: boolean) => {

              this.doSearch();
          if(!result) {
                           this.router.navigate(['connexion']);

            }
        })

  }


  chercherReservationBySemaineId(){

  	this.reservationsservice.getReservationBySemaineId(this.idSemaine, this.currentPage, this.size)
  .subscribe(
    (data: any) => {
      // Success callback
      this.pageClients = data;
      this.pages = new Array(data.totalPages);
    },
    (error: any) => {
      // Error callback
      console.error('Erreur lors de la récupération des réservations :', error);
    }
  );



  }




  doSearch(){

  	this.reservationsservice.getReservations(this.motCle, this.currentPage, this.size)
		.subscribe(data=>{
			this.pageClients=data;
       this.pages=new Array(data.totalPages);
       console.log(data);
		},err=> {
		     console.log(err);
		});


  }

  chercherReservation(){

  	this.doSearch();

  }

  modifierReservation(id:number){
  	this.router.navigate(['edit-reservation',id]);
  }


  supprimerReservation(res:Reservation){
  	let confirme=window.confirm('Est vous sure ?');
  	if(confirme==true){
  	this.reservationsservice.deleteReservation(res.idReservation)
  		.subscribe(data=>{
  			this.pageClients.content.splice(
  					this.pageClients.content.indexOf(res), 1
  				); 
			this.ngOnInit();
			this.router.navigate(['reservations']);
		},err=> {
		     console.log(err);
		});
  	}
  }

  gotoPage(i:number){
  	this.currentPage=i;
  	this.doSearch();

  }

}
