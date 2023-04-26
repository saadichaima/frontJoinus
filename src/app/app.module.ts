import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ClientsComponent } from './clients/clients.component';
import { ClientsService } from './clients.service';
import { ConnexionComponent } from './connexion/connexion.component';
import { ProfilComponent } from './profil/profil.component';
import { ProfilAdminComponent } from './profil-admin/profil-admin.component';
import { ActivateClientComponent } from './activate-client/activate-client.component';
import { FormsModule } from '@angular/forms';
import { InscriptionComponent } from './inscription/inscription.component';
import { NewClientComponent } from './new-client/new-client.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { RestaurationsComponent } from './restaurations/restaurations.component';
import { HebergementsComponent } from './hebergements/hebergements.component';
import { ListHebergementComponent } from './list-hebergement/list-hebergement.component';
import { ListRestaurationComponent } from './list-restauration/list-restauration.component';
import { ListReservationClientComponent } from './list-reservation-client/list-reservation-client.component';
import { NewHebergementsComponent } from './new-hebergements/new-hebergements.component';
import { NewReservationComponent } from './new-reservation/new-reservation.component';
import { NewRestaurationComponent } from './new-restauration/new-restauration.component';
import { EditHebergementComponent } from './edit-hebergement/edit-hebergement.component';
import { EditReservationComponent } from './edit-reservation/edit-reservation.component';
import { EditRestaurationComponent } from './edit-restauration/edit-restauration.component';
import { NavadminComponent } from './navadmin/navadmin.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    ConnexionComponent,
    ProfilComponent,
    ProfilAdminComponent,
    ActivateClientComponent,
    InscriptionComponent,
    NewClientComponent,
    ReservationsComponent,
    RestaurationsComponent,
    HebergementsComponent,
    ListHebergementComponent,
    ListRestaurationComponent,
    ListReservationClientComponent,
    NewHebergementsComponent,
    NewReservationComponent,
    NewRestaurationComponent,
    EditHebergementComponent,
    EditReservationComponent,
    EditRestaurationComponent,
    NavadminComponent,
    ButtonComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ClientsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
