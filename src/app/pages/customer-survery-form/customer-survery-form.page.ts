import { Component, OnInit } from '@angular/core';
import { Survey, CustomerSurveryFormService } from 'src/app/services/customer-survery-form.service';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-customer-survery-form',
  templateUrl: './customer-survery-form.page.html',
  styleUrls: ['./customer-survery-form.page.scss'],
})
export class CustomerSurveryFormPage implements OnInit {

  survey: Survey = {
    name: null,
    address: null,
    phone: null,
    location: null,
    reasonForUsingOtherBrands: null,
    reasonForUsingOtherBrandsOther: null,
    reasonForUsingWatawala: null,
    typeOfTeaUsed: null,
    updateUser: null,
    updatedTimestamp: null,
    isRemoved: false,
    createdAt: new Date().getTime(),
    user: null
  }

  surveyId = null;

  constructor(private customerSurveyFormService: CustomerSurveryFormService, private route: ActivatedRoute, 
    private loadingController: LoadingController, private nav: NavController) { }

  ngOnInit() {
    this.surveyId = this.route.snapshot.params['id'];
    if (this.surveyId) {
      this.loadSurvey();
    }
  }

  async loadSurvey() {
    const loading = await this.loadingController.create({
      message : 'Loading Survey...'
    });
    await loading.present();

    this.customerSurveyFormService.getSurvey(this.surveyId).subscribe(res => {
      loading.dismiss();
      this.survey = res;
    });
  }

  async saveSurvey() {

    const loading = await this.loadingController.create({
      message : 'Saving Survey...'
    });
    await loading.present();

    if (this.surveyId) {
      this.customerSurveyFormService.updateSurvey(this.survey, this.surveyId).then(res => {
        loading.dismiss();
        this.nav.navigateBack("home");
      });
    }
    else {
      this.customerSurveyFormService.addSurvey(this.survey).then(res => {
        loading.dismiss();
        this.nav.navigateBack("home");
      });
    }

  }

}
