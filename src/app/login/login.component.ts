import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor(errorMessage: string) { }

  ngOnInit(): void {
  }

  public afficheInfo(){


      var prenom  = (document.getElementById("prenom") as HTMLInputElement).value;
      let mdp = (document.getElementById("mdp") as HTMLInputElement).value;




    console.log("Le prenom est " + prenom + " et le mdp est " + mdp ) ;
  }

}
