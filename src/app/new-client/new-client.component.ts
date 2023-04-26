import { Component,OnInit} from '@angular/core';
import { UtilityService } from '../utility.service';
import { Router } from '@angular/router';
import { ClientsService } from '../clients.service';
import { Client } from '../models/client.model';
@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.css']
})
export class NewClientComponent implements OnInit {

	client:Client= new Client();
	mode:number=1; 


  constructor(public clientsservice: ClientsService , private router: Router,private utility:UtilityService) { }

  ngOnInit() {



this.utility.isLogged().then((result: boolean) => {
            if(!result) {
                           this.router.navigate(['connexion']);

            }

            
        })



  }


  ajouterClient() {
    this.clientsservice.saveClient(this.client)
      .subscribe(
        (data: any) => {
          // Success callback
          console.log('Client ajouté :', data);
        },
        (error: any) => {
          // Error callback
          console.error('Erreur lors de l\'ajout du client :', error);
        }
      );
  }
  

}
