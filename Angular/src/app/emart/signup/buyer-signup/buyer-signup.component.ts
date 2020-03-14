import { Component, OnInit, ViewChild } from '@angular/core';
import { Buyer } from '../../buyer';
import { Router } from '@angular/router';
import { EmartService } from '../../emart.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-buyer-signup',
  templateUrl: './buyer-signup.component.html',
  styleUrls: ['./buyer-signup.component.css']
})
export class BuyerSignupComponent implements OnInit {

@ViewChild('signUpForm') public buyerSignupForm:NgForm;
  buyerUsername:string='';
  buyerPassword:string='';
  buyerEmail:string='';
  buyerMobile:number;
  buyerDate:Date;
  buyers: any;

  constructor(protected emartService: EmartService,protected  router:Router) { }

  ngOnInit(): void {
  }

  addBuyer(){
    let buyer:Buyer = {
      id:0,
      username:this.buyerUsername,
      password:this.buyerPassword,
      email:this.buyerEmail,
      mobile:this.buyerMobile,
      date:this.buyerDate
                        
    };
    
    this.emartService.addBuyer(buyer).subscribe(
      (response: any)=>{
      }
    );
    
    this.router.navigate(['/']);
}
}
