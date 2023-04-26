import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  constructor(private router: Router) { }

  logged: boolean = true;
  isAdmin: string | null = "";


  ngOnInit() {

    if (sessionStorage.getItem("isAdmin") != null) {


      console.log("HELLOOOWWW");
      this.logged = true;
      this.isAdmin = sessionStorage.getItem("isAdmin");

      console.log("hellow" + this.isAdmin);
    }




    console.log("coucou" + this.logged);



  }



  logout() {


    sessionStorage.clear();
    this.logged = false;
    this.isAdmin = null;

    this.router.navigate(['connexion']);

  }



  stringToNumber(str: string | null): number {
    if (str != null) {
      return parseInt(str);
    }
    else
      return 0;
  }


}
