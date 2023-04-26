import { Component ,OnInit} from '@angular/core';
import { Restauration } from '../models/restauration.model';
import { RestaurationService } from '../restauration.service';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit-restauration',
  templateUrl: './edit-restauration.component.html',
  styleUrls: ['./edit-restauration.component.css']
})
export class EditRestaurationComponent implements OnInit {

  restauration:Restauration= new Restauration();
 
 
 
   constructor(public restaurationservice: RestaurationService,
               private route: ActivatedRoute,
               private router: Router
               ) { }
 
   ngOnInit() {
     
        let id = this.route.snapshot.paramMap.get('id');
 
     this.restaurationservice.getRestaurationById(this.stringToNumber(id))
     .subscribe(data=>{
       this.restauration=data;
             
     },err=> {
          console.log(err);
     });	
 
   }
 
   
  
   modifierRestauration(){
     this.restaurationservice.updateRestauration(this.restauration)
         .subscribe(data=>{
           console.log(data);
         alert("Mise à jour effectuée");
         this.router.navigate(['restaurations']);
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
 
