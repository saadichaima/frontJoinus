import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Restauration } from '../models/restauration.model';
import { RestaurationService } from '../restauration.service';


@Component({
  selector: 'app-new-restauration',
  templateUrl: './new-restauration.component.html',
  styleUrls: ['./new-restauration.component.css']
})
export class NewRestaurationComponent implements OnInit {

  
  restauration:Restauration= new Restauration();



  constructor(public restaurationservice: RestaurationService,  private router: Router) { }

  ngOnInit() {

  }


  ajouterRestauration(){

  	this.restaurationservice.saveRestauration(this.restauration)
  		.subscribe( (data: any) =>{
			console.log(data);
			this.router.navigate(['restaurations']);

		}, (err: any) => {
		     console.log(err);
		});
  }



}
