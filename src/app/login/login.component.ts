import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MessageService} from "../message/message.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  errorMessage! : string ;
  alertevide : boolean = true  ;
  message : any ;

  constructor(htpp : HttpClient, messageservice : MessageService) {

    this.message = messageservice ;

  }

  ngOnInit(): void {

  }

  public afficheInfo(){


      var prenom  = (document.getElementById("prenom") as HTMLInputElement).value;
      let mdp = (document.getElementById("mdp") as HTMLInputElement).value;



    if ( prenom == "" || mdp =="")
    {
        this.errorMessage = "vous devez saisir un login et un password non vides"
        this.alertevide = false ;
        console.log("viiiide")


    }
    else {
      this.alertevide = true ;
      console.log("Le prenom est " + prenom + " et le mdp est " + mdp);
    }

    this.message.sendMessage("CheckLogin", "");


  }

}
