import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {EducationService} from "../../services/EducationService";
import {AbstractItem} from "./AbstractItem";

@Component({
  selector: 'page-educationandworkexperience',
  templateUrl: 'trips.html'
})
export class Education extends AbstractItem {

  constructor(public nav: NavController, public tripService: EducationService) {
    // set sample data
    super(nav, tripService);
  }

}
