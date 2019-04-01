import { Component, OnInit } from '@angular/core';
import { Survey, CustomerSurveryFormService } from '../services/customer-survery-form.service';
import { constructor } from 'q';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  surveys: Survey[];

  constructor(private customerSurveryFormService: CustomerSurveryFormService) {

  }

  ngOnInit() {
    this.customerSurveryFormService.getSurverys().subscribe( res => {
      this.surveys = res;
    });
  }

  remove(item) {
    this.customerSurveryFormService.removeSurvey(item.id);

  }
}
