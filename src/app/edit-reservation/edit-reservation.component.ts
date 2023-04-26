import { Component ,OnInit} from '@angular/core';
import { Reservation } from '../models/reservation.model';
import { Hebergement } from '../models/hebergement.model';
import { Router, ActivatedRoute} from '@angular/router';
import { HebergementsService } from '../hebergements.service';
import { ReservationsService } from '../reservations.service';
@Component({
  selector: 'app-edit-reservation',
  templateUrl: './edit-reservation.component.html',
  styleUrls: ['./edit-reservation.component.css']
})
export class EditReservationComponent implements OnInit {

  reservation:Reservation= new Reservation();

  mode:number=1;

  hebergement:Hebergement= new Hebergement();


  constructor(public reservationsservice: ReservationsService,
              public hebergementsservice: HebergementsService,
              private route: ActivatedRoute,
              private router: Router
              ) { }

  ngOnInit() {
  	
  		 let id = this.route.snapshot.paramMap.get('id');

		this.reservationsservice.getReservationById(this.stringToNumber(id))
		.subscribe(data=>{
			this.reservation=data;
	        	
		},err=> {
		     console.log(err);
		});	

  }

  
 
  modifierReservation(){
  	
	  this.reservationsservice.updateReservation(this.reservation)
	  		.subscribe(data=>{
	  			console.log(data);
				alert("Mise à jour effectuée");
				 if(this.stringToNumber(sessionStorage.getItem('isAdmin'))==1){
					this.router.navigate(['reservations']);
			     }else{
			     	this.router.navigate(['list-reservation-client']);
			     }
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
