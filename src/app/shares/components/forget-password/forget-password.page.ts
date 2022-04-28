import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.page.html',
  styleUrls: ['./forget-password.page.scss'],
})
export class ForgetPasswordPage implements OnInit {

  step1 = true;
  step2 = false;
  showPwd = false;
  constructor(private route: Router) { }

  navigate(){
    if(this.step1 == false){
      this.step1 = true;
      this.step2 = false;
    }
    else{
      this.route.navigateByUrl('connexion')
    }
  }

  ngOnInit() {
  }

}
