import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Hebergement } from '../models/hebergement.model';
import { HebergementsService } from '../hebergements.service';

@Component({
  selector: 'app-new-hebergements',
  templateUrl: './new-hebergements.component.html',
  styleUrls: ['./new-hebergements.component.css']
})
export class NewHebergementsComponent implements OnInit {



  hebergement:Hebergement= new Hebergement();
  mode:number=1; 


  constructor(public hebergementsservice: HebergementsService,  private router: Router) { }

  ngOnInit() {
  }


  ajouterHebergement(){
  	this.hebergementsservice.saveHebergement(this.hebergement)
  		.subscribe(data=>{
			console.log(data);
			this.router.navigate(['hebergements']);

		},err=> {
		     console.log(err);
		});
  }

}

