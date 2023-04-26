import { Injectable } from '@angular/core';
import{HttpClient} from'@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(public http:HttpClient) { }

  getClients(motCle: string, page: number, size: number) {
    return this.http.get("http://localhost:1994/chercherClients?mc=" + motCle + "&size=" + size + "&page=" + page + "")
      .pipe(map((resp: any) => resp));
  }


  getClientsNonValide() {
    return this.http.get("http://localhost:1994/usersNonActive")
      .pipe(map((resp: any) => resp));
  }


  saveClient(client: any) {
    return this.http.post("http://localhost:1994/clients", client)
      .pipe(map((resp: any) => resp));
  }
  deleteClient(client: any) {
    return this.http.delete("http://localhost:1994/clients/" + client.idClient)
      .pipe(map((resp: any) => resp));
  }


  activateClient(client: any) {
    console.log(client.username);
    return this.http.put("http://localhost:1994/users/" + client.idUser, client)
      .pipe(map((resp: any) => resp));
  }
  getClientsByTypeHebergement(typeHebergement: string, page: number, size: number) {
    return this.http.get("http://localhost:1994/clientsbyHebergement?typeHebergement=" + typeHebergement + "&size=" + size + "&page=" + page)
      .pipe(map((resp: any) => resp));
  }
  
  getClientsByTypeRestauration(typeRestauration: string, page: number, size: number) {
    return this.http.get("http://localhost:1994/clientsbyRestauration?typeRestauration=" + typeRestauration + "&size=" + size + "&page=" + page)
      .pipe(map((resp: any) => resp));
  }
  
  getClient(id: number) {
    return this.http.get("http://localhost:1994/clients/" + id)
      .pipe(map((resp: any) => resp));
  }

}    
	
  

