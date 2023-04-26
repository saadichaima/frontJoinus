import { Component ,OnInit} from '@angular/core';
import { Restauration } from '../models/restauration.model';
import { Router,ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { RestaurationService } from '../restauration.service';
@Component({
  selector: 'app-list-restauration',
  templateUrl: './list-restauration.component.html',
  styleUrls: ['./list-restauration.component.css']
})
export class ListRestaurationComponent implements OnInit {

 
  restaurationSelectionne:Restauration= new Restauration();
 


  constructor(public http:HttpClient,
  			 public restaurationservice: RestaurationService,
  			 private router: Router,
  			 private route: ActivatedRoute ) { }

  ngOnInit() {
  


         let idRestaurationString = this.route.snapshot.paramMap.get('id');

         // Convert the string to a number using parseInt() or provide a default value of 0
         let idRestauration = parseInt(idRestaurationString ?? '0', 10);
         

		this.restaurationservice.getRestaurationById(idRestauration)
		.subscribe(data=>{
			this.restaurationSelectionne=data;
		
 
		},err=> {
		     
		     console.log(err);

		});


  
  }

  dirigeVersNewReservation(id:number){
  	   sessionStorage.setItem('restauration',id.toString());
  	  this.router.navigate(['new-reservation']);

  }
}

