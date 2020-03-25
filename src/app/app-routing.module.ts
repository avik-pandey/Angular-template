import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { AuthGuard} from './modules/auth/auth-guard.service';
import { AuthService} from './modules/auth/auth.service';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)},
  {path: 'members', canActivate : [AuthGuard],loadChildren: () => import('./modules/pages/pages.module').then(m => m.PagesModule)},
  
];

// console.log("testing");
// console.log(localStorage.getItem('key'));

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  constructor(private router:Router){

  }
  
  ngOnInit() {
    // if(localStorage.getItem('key') == 'test'){
    //   console.log(localStorage.getItem('key'));
    //   console.log('pllllzzz');
    //   this.router.navigate(['/members']);
    // }
    // console.log(localStorage.getItem('key'));
    // console.log('pooooll');
  }
 }
