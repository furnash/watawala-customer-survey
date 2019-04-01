import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'customer-survery-form', loadChildren: './pages/customer-survery-form/customer-survery-form.module#CustomerSurveryFormPageModule' },
  { path: 'customer-survery-form/:id', loadChildren: './pages/customer-survery-form/customer-survery-form.module#CustomerSurveryFormPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
