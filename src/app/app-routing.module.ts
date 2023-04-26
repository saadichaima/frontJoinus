import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './clients/clients.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ProfilAdminComponent } from './profil-admin/profil-admin.component';
import { ProfilComponent } from './profil/profil.component';
import { ActivateClientComponent } from './activate-client/activate-client.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { RestaurationsComponent } from './restaurations/restaurations.component';
import { HebergementsComponent } from './hebergements/hebergements.component';
import { ListHebergementComponent } from './list-hebergement/list-hebergement.component';
import { NewClientComponent } from './new-client/new-client.component';
import { NewHebergementsComponent } from './new-hebergements/new-hebergements.component';
import { NewReservationComponent } from './new-reservation/new-reservation.component';
import { NewRestaurationComponent } from './new-restauration/new-restauration.component';
import { ListReservationClientComponent } from './list-reservation-client/list-reservation-client.component';
import { ListRestaurationComponent } from './list-restauration/list-restauration.component';
import { EditHebergementComponent } from './edit-hebergement/edit-hebergement.component';
import { EditReservationComponent } from './edit-reservation/edit-reservation.component';
import { EditRestaurationComponent } from './edit-restauration/edit-restauration.component';
import { ButtonComponent } from './button/button.component';


const routes: Routes = [
  { path: 'Clients', component: ClientsComponent },
  { path: 'Connexion', component: ConnexionComponent },
  { path: 'Profil', component: ProfilComponent },
  { path: 'ProfilAdmin', component: ProfilAdminComponent },
  { path: 'ActivateClient', component:ActivateClientComponent },
  { path: 'Inscription', component:InscriptionComponent },
  { path: 'reservation', component:ReservationsComponent },
  { path: 'restauration', component:RestaurationsComponent },
  { path: 'hebergement', component:HebergementsComponent },
  { path: 'list-hebergement', component:ListHebergementComponent},
  { path: 'clients', component: ClientsComponent },
	{ path: 'new-client', component: NewClientComponent },
	{ path: 'reservations', component: ReservationsComponent },
	{ path: 'new-reservation', component: NewReservationComponent },
	{ path: 'hebergements', component: HebergementsComponent },
	{ path: 'new-hebergement', component: NewHebergementsComponent },
	{ path: 'new-restauration', component: NewRestaurationComponent },
	{ path: 'edit-reservation/:id', component: EditReservationComponent},
	{ path: 'edit-hebergement/:id', component: EditHebergementComponent},
	{ path: 'edit-restauration/:id', component: EditRestaurationComponent},
	{ path: 'connexion', component: ConnexionComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'restaurations', component: RestaurationsComponent },
  { path: 'list-hebergement/:id', component: ListHebergementComponent },
  { path: 'profil_admin', component: ProfilAdminComponent },
  { path: 'clients_inactif', component: ActivateClientComponent },
  { path: 'list-restauration/:id', component: ListRestaurationComponent},
  { path: 'list-reservation-client', component: ListReservationClientComponent},
	{ path: '',
	  redirectTo: '/connexion',
	  pathMatch: 'full'
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
