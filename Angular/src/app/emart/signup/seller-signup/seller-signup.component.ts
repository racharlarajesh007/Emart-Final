import { Component, OnInit } from '@angular/core';
import { Seller } from '../../seller';
import { EmartService } from '../../emart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-signup',
  templateUrl: './seller-signup.component.html',
  styleUrls: ['./seller-signup.component.css']
})
export class SellerSignupComponent implements OnInit {


  sellerUsername:string='';
  sellerPassword:string='';
  sellerCompany:string='';
  sellerBrief:string='';
  sellerGst:number;
  sellerAddress:string='';
  sellerEmail:string='';
  sellerWebsite:string='';
  sellerContact:number;
  sellers:any;

  constructor(protected emartService:EmartService,protected router:Router) { }

  ngOnInit(): void {
  }


  addSeller(){
    
    let seller:Seller = {
      id:0,
      username:this.sellerUsername,
      password:this.sellerPassword,
      company:this.sellerCompany,
      brief:this.sellerBrief,
      gst:this.sellerGst,
      address:this.sellerAddress,
      email:this.sellerEmail,
      website:this.sellerWebsite,
      contact:this.sellerContact
      
                        
    };
    
    this.emartService.addSeller(seller).subscribe(
      (response: any)=>{
        //this.sellers.push(response);
      }
    );
   /* this.busername = '';
    this.bpassword = '';
    this.bemail='';
    this.bmobile=null,
    this.bdate=null*/

    this.router.navigate(['/']);
  

}
}
