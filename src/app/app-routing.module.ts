import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'splashscreen',
    pathMatch: 'full'
  },
  { path: 'signin', 
  loadChildren: () => import('./pages/signin/signin.module').then(m => m.SigninPageModule)
 },

  {
    path: 'signin',
    loadChildren: () => import('./pages/signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'mybooking',
    loadChildren: () => import('./pages/mybooking/mybooking.module').then( m => m.MybookingPageModule)
  },
  {
    path: 'splashscreen',
    loadChildren: () => import('./pages/splashscreen/splashscreen.module').then( m => m.SplashscreenPageModule)
  },
  {
    path: 'buzzparty',
    loadChildren: () => import('./pages/buzzparty/buzzparty.module').then( m => m.BuzzpartyPageModule)
  },
  {
    path: 'forgotpassword',
    loadChildren: () => import('./pages/forgotpassword/forgotpassword.module').then( m => m.ForgotpasswordPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'contactus',
    loadChildren: () => import('./pages/contactus/contactus.module').then( m => m.ContactusPageModule)
  },
  {
    path: 'editprofile',
    loadChildren: () => import('./pages/editprofile/editprofile.module').then( m => m.EditprofilePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
