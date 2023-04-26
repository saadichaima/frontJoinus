import { Component ,OnInit} from '@angular/core';
import { Reservation } from '../models/reservation.model';
import { HttpClient } from '@angular/common/http';
import { ReservationsService } from '../reservations.service';
import { Router } from '@angular/router';
import { UtilityService } from '../utility.service';
//import * as jsPDF from 'jspdf';



declare var jsPDF: any;
@Component({

  selector: 'app-list-reservation-client',
  templateUrl: './list-reservation-client.component.html',
  styleUrls: ['./list-reservation-client.component.css']
})
export class ListReservationClientComponent implements OnInit {


  pageClients:any;
  currentPage:number=0;
  size:number=5;
  pages:any;
  reservationSelectionne!:Reservation;
  mode:number=1;


  constructor(public http:HttpClient, public reservationsservice: ReservationsService, private router: Router,  private utility:UtilityService ) { }

  ngOnInit() {




 this.utility.isLogged().then((result: boolean) => {
            if(!result) {
                           this.router.navigate(['connexion']);

            }

            
        })




  		this.doSearch();
  }


doSearch(){


	this.mode=1;

	this.reservationsservice.consulterReservationByIdClient(this.stringToNumber(sessionStorage.getItem('clientId')), this.currentPage, this.size)
		.subscribe(data=>{
			this.pageClients=data;
      this.pages=new Array(data.totalPages);
			console.log(data);
			console.log(sessionStorage.getItem('clientId'));
		},err=> {
		     console.log(err);
		});


}


gotoPageReservation(id: number) {
  this.mode = 2; // Update the mode to 2

  const clientId = this.stringToNumber(sessionStorage.getItem('clientId')); // Get clientId from sessionStorage
  this.reservationsservice.consulterReservationById(id, clientId, this.currentPage, this.size)
      .subscribe(data => {
          this.reservationSelectionne = data;
      }, err => {
          console.log(err);
      });
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
			 if(sessionStorage.getItem('isAdmin')=="1"){
					this.router.navigate(['reservations']);
			     }else{
			     	this.router.navigate(['list-reservation-client']);
			     }
		},err=> {
		     console.log(err);
		});
  	}
  }


  gotoPage(i:number){
  	this.currentPage=i;
  	this.doSearch();

  }


public download() {


const  pdf = new jsPDF('chaima') ; 
var img = new Image;


//console.log(this.user.nomClient);
    


  var dd = new Date(this.reservationSelectionne.semaine.datePremierJour)  ; 
  var dds = dd.toISOString().substring(0, 10);
  var df = new Date(this.reservationSelectionne.semaine.dateDernierJour)  ; 
  var dfs = df.toISOString().substring(0, 10);

  
    pdf.text("Nombre de client :",50,70 ) ;
    pdf.text( this.reservationSelectionne.client.nomClient,130,70) ; 

    pdf.text("Nom  Reservation :" , 50,80 ) ;
    pdf.text( this.reservationSelectionne.nomReservation,130,80) ; 
    pdf.text("Nom d'hebergement :",50,90 ) ;
    pdf.text( this.reservationSelectionne.hebergement.nomHebergement,130,90) ; 
    pdf.text("Nombre de persone :",50,100 ) ;
    pdf.text( String(this.reservationSelectionne.nbrPersonne),130,100) ; 

    pdf.text("Date Début :",50,110 ) ;

    pdf.text( dfs,130,110) ; 

    pdf.text("Date fin :",50,120 ) ;
    pdf.text(  dds,130,120) ;
    //pdf.text( this.user.mail,60,100) ; 
    pdf.text("total :",50,130 ) ;

    pdf.text( String(this.reservationSelectionne.total),130,130) ; 

    //pdf.save("test.pdf");
img.onload = function() {
    pdf.addImage(this,80,10,50, 50);
    pdf.save("test.pdf");

};
img.crossOrigin = "";  
img.src = "../assets/club.JPG";  


} 


















stringToNumber(str: string | null): number {
  if (str != null) {
    return parseInt(str);
  }
  else
    return 0;
}





}

