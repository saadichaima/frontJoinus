import { Component, OnInit } from '@angular/core';
import { Hebergement } from '../models/hebergement.model';
import { HebergementsService } from '../hebergements.service';
import { HttpClient } from '@angular/common/http';
import { Router,ActivatedRoute } from '@angular/router';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-list-hebergement',
  templateUrl: './list-hebergement.component.html',
  styleUrls: ['./list-hebergement.component.css']
})
export class ListHebergementComponent implements OnInit {



  hebergementSelectionne!:Hebergement;
  semaineDisponbilite:any;
  mode:boolean=false;


  constructor(public http:HttpClient,
  			 public hebergementsservice: HebergementsService,
         private utility:UtilityService,
  			 private router: Router,
  			 private route: ActivatedRoute ) { }

  ngOnInit() {





this.utility.isLogged().then((result: boolean) => {
            if(!result) {
                           this.router.navigate(['connexion']);

            }

            
        })


        let idHebergementString = this.route.snapshot.paramMap.get('id');

        // Convert the string to a number using parseInt() or provide a default value of 0
        let idHebergement = parseInt(idHebergementString ?? '0', 10);
        
        this.hebergementsservice.getSemaines()
		.subscribe(data=>{
            console.log("disp")
			this.semaineDisponbilite=data;
            this.mode=false;
		 console.log(this.semaineDisponbilite);
            
		},err=> {

		     console.log(err);

		});
         

  		this.hebergementsservice.getDisponibiliteHebergementByIdHebergement(idHebergement)
		.subscribe(data=>{

			if(data != null){
                  this.semaineDisponbilite=data;
                  this.mode=true;
			
			}
			console.log("disp--")
            console.log(this.semaineDisponbilite);
		},err=> {
		     console.log(err);
		});


		this.hebergementsservice.getHebergementById(idHebergement)
		.subscribe(data=>{
			this.hebergementSelectionne=data;
			console.log("cc2");
            console.log(this.hebergementSelectionne);
 
		},err=> {
		     console.log(err);
		});


  
  }

  dirigeVersNewReservation(id:number,semaine:number){
    sessionStorage.setItem('semaine', semaine.toString());
  sessionStorage.setItem('hebergement', id.toString());

  	  this.router.navigate(['restaurations']);
  	  //this.router.navigate(['new-reservation',id,semaine]);

  }

}
