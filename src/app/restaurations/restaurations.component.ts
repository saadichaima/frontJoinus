import { Component , OnInit } from '@angular/core';
import { Restauration } from '../models/restauration.model';
import { Hebergement } from '../models/hebergement.model';
import { HttpClient } from '@angular/common/http';
import { RestaurationService } from '../restauration.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-restaurations',
  templateUrl: './restaurations.component.html',
  styleUrls: ['./restaurations.component.css']
})
export class RestaurationsComponent implements OnInit {

  pageClients:any;

  motCle:string="";
  currentPage:number=0;
  size:number=5;
  pages:any;
  semaineDisponbilite:any;
  hebergementSelectionne:Hebergement | undefined;
  mode:number=2;

  constructor(public http:HttpClient, public restaurationsservice: RestaurationService, private router: Router ) { }
  ngOnInit() {
  	this.doSearch();
    if(sessionStorage.getItem('isAdmin')=="1"){
          this.mode=1;
           }else{
            this.mode=2;
           }
  	
  }
  

  doSearch(){

  	this.restaurationsservice.getRestaurations(this.motCle, this.currentPage, this.size)
		.subscribe(data=>{
			this.pageClients=data;
       this.pages=new Array(data.totalPages);
 
		},err=> {
		     console.log(err);
		});




  }

  gotoPageRestauration(idRestauration:number){

  	  this.router.navigate(['list-restauration',idRestauration ]);

  }


  chercherRestauration(){

  	this.doSearch();

  }
  
 gotoNewReservation(){
 	 this.router.navigate(['new-reservation']);
 }

 modifierRestauration(id:number){
  	this.router.navigate(['edit-restauration',id]);
  }

  supprimerRestauration(restauration:Restauration){
  	let confirme=window.confirm('Est vous sure ?');
  	if(confirme==true){
  	this.restaurationsservice.deleteRestauration(restauration.idRestauration)
  		.subscribe(data=>{
  			console.log("data");
  			this.pageClients.content.splice(
  					this.pageClients.content.indexOf(restauration), 1
  				); 
			this.ngOnInit();
			this.router.navigate(['restaurations']);
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

