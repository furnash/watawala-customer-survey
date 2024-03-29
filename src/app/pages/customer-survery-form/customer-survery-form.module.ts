import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CustomerSurveryFormPage } from './customer-survery-form.page';

const routes: Routes = [
  {
    path: '',
    component: CustomerSurveryFormPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CustomerSurveryFormPage]
})
export class CustomerSurveryFormPageModule {}
