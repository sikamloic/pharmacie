import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {

  showPwd = false;
  sign = true;
  step1 = false;
  step2 = false;
  finally = false;
  male = true;
  female = false;
  constructor(private route: Router) { }

  navigate(){
    // if(this.sign == true){
    //   this.route.navigateByUrl('onboard')
    // }
    if(this.step1 == true){
      this.step1 = false;
      this.sign = true
    }
    if(this.step2 == true){
      this.step2 = false;
      this.step1 = true;
    }
  }

  ngOnInit() {
  }

}
