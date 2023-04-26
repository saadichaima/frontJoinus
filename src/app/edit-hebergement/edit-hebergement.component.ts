import { Component,OnInit } from '@angular/core';
import { Hebergement } from '../models/hebergement.model';
import { HebergementsService } from '../hebergements.service';
import { Router , ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-edit-hebergement',
  templateUrl: './edit-hebergement.component.html',
  styleUrls: ['./edit-hebergement.component.css']
})
export class EditHebergementComponent implements OnInit {


  mode:number=1;

  hebergement:Hebergement= new Hebergement();


  constructor(
              public hebergementsservice: HebergementsService,
              private route: ActivatedRoute,
              private router: Router
              ) { }

  ngOnInit() {

  	let id = this.route.snapshot.paramMap.get('id');

		this.hebergementsservice.getHebergementById(this.stringToNumber(id))
		.subscribe(data=>{
			this.hebergement=data;
	        	
		},err=> {
		     console.log(err);
		});	

  }



  modifierHebergement(){
	  this.hebergementsservice.updateHebergement(this.hebergement)
	  		.subscribe(data=>{
	  			console.log(data);
				alert("Mise à jour effectuée");
				this.router.navigate(['hebergements']);
			},err=> {
				console.log(err);
			     alert("Problème !! ");
			});
  }
  stringToNumber(str: string | null): number {
    if (str != null) {
      return parseInt(str);
    }
    else
      return 0;
  }
}

