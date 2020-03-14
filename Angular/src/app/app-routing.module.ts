import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemDisplayComponent } from './emart/item/item-display/item-display.component';
import { ItemListComponent } from './emart/item/item-list/item-list.component';
import { CartListComponent } from './emart/cart/cart-list/cart-list.component';
import { BillViewComponent } from './emart/bill/bill-view/bill-view.component';
import { BillListComponent } from './emart/bill/bill-list/bill-list.component';
import { LoginComponent } from './emart/signup/login/login.component';
import { LogoutComponent } from './emart/signup/logout/logout.component';
import { BuyerSignupComponent } from './emart/signup/buyer-signup/buyer-signup.component';
import { SellerSignupComponent } from './emart/signup/seller-signup/seller-signup.component';
import { EnterGuardService } from './guard-service';
const routes: Routes = [
                        {
                            path: '',
                              component:LoginComponent
                        },
                        {
                          path: 'seller-signup',
                            component:SellerSignupComponent,
                            canActivate:[EnterGuardService]
                        },
                        {
                          path: 'buyer-signup',
                            component:BuyerSignupComponent,
                            canActivate:[EnterGuardService]
                        },
                        {
                          path: 'item-display/:iId',
                          component: ItemDisplayComponent,
                          canActivate:[EnterGuardService]
                        },
                        {
                          path: 'item-list',
                          component: ItemListComponent,
                          canActivate:[EnterGuardService]
                        },
                        {
                          path: 'cart-list',
                          component: CartListComponent,
                          canActivate:[EnterGuardService]
                        },
                        {
                          path: 'bill-view',
                          component: BillViewComponent,
                          canActivate:[EnterGuardService]
                        },
                        {
                          path: 'bill-list',
                          component: BillListComponent,
                          canActivate:[EnterGuardService]
                        },
                        {
                          path: 'logout',
                          component: LogoutComponent,
                          canActivate:[EnterGuardService]
                        }
                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
