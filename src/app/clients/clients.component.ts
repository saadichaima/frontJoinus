import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../clients.service'
import { Router } from '@angular/router';
import { UtilityService } from '../utility.service';
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})

export class ClientsComponent implements OnInit {

  pageClients: any;
  motCle = '';
  typeHebergement = '';
  typeRestauration = '';
  currentPage = 0;
  size = 5;
  pages: number[] = [];
  

  constructor(public http:HttpClient, public clientsservice: ClientsService, private router: Router, private utility:UtilityService) { }


  ngOnInit() {

    this.utility.isLogged().then((result: boolean) => {
            if(!result) {
                           this.router.navigate(['connexion']);

            }

            
        })
        

      this.clientsservice.getClients(this.motCle, this.currentPage, this.size)
		     .subscribe(data=>{
			      this.pageClients=data;
               this.pages=new Array(data.totalPages);

		},err=> {
		     console.log(err);
		});
  	
  }
  

  doSearch(){

  	this.clientsservice.getClients(this.motCle, this.currentPage, this.size)
		.subscribe(data=>{
			this.pageClients=data;
      this.pages=new Array(data.totalPages);

		},err=> {
		     console.log(err);
		});


  }

  chercherClient(){

  	this.doSearch();

  }

  chercherClientByTypeHebergement(){
  	this.clientsservice.getClientsByTypeHebergement(this.typeHebergement, this.currentPage, this.size)
		.subscribe(data=>{
			this.pageClients=data;

		},err=> {
		     console.log(err);
		});


  }
  chercherClientByTypeRestauration(){
  	this.clientsservice.getClientsByTypeRestauration(this.typeRestauration, this.currentPage, this.size)
		.subscribe(data=>{
			this.pageClients=data;

		},err=> {
		     console.log(err);
		});


  }

  

  gotoPage(i:number){
  	this.currentPage=i;
  	this.doSearch();

  }
}
