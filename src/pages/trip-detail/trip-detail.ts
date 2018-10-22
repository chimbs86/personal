import {Component} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";
import {AbstractInformationService} from "../../services/abstract-information.service";
import {CheckoutTripPage} from "../checkout-trip/checkout-trip";
import {WorkExperienceService} from "../../services/WorkExperienceService";
import {EducationService} from "../../services/EducationService";

@Component({
  selector: 'page-trip-detail',
  templateUrl: 'trip-detail.html'
})
export class TripDetailPage {
  // workExperience info
  public trip: any;
  // number of adult
  public adults = 2;
  // number of children
  public children = 0;
  public param: number;

  constructor(public nav: NavController,   public tripService: EducationService, public navParams: NavParams) {

    let id = navParams.get('id')

    this.trip = tripService.getItem(id);
  }

  // minus adult when click minus button
  minusAdult() {
    this.adults--;
  }

  // plus adult when click plus button
  plusAdult() {
    this.adults++;
  }

  // minus children when click minus button
  minusChildren() {
    this.children--;
  }

  // plus children when click plus button
  plusChildren() {
    this.children++;
  }

  // go to checkout page
  checkout() {
    this.nav.push(CheckoutTripPage);
  }
}
