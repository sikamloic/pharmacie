import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'connexion',
    loadChildren: () => import('./shares/components/connexion/connexion.module').then( m => m.ConnexionPageModule)
  },
  {
    path: 'inscription',
    loadChildren: () => import('./shares/components/inscription/inscription.module').then( m => m.InscriptionPageModule)
  },
  {
    path: 'onboard',
    loadChildren: () => import('./shares/components/onboard/onboard.module').then( m => m.OnboardPageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./shares/components/splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'forget-password',
    loadChildren: () => import('./shares/components/forget-password/forget-password.module').then( m => m.ForgetPasswordPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
