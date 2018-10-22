import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {AbstractItem} from "./AbstractItem";
import {WorkExperienceService} from "../../services/WorkExperienceService";

@Component({
  selector: 'page-educationandworkexperience',
  templateUrl: 'trips.html'
})
export class WorkExperience extends AbstractItem {

  constructor(public nav: NavController, public tripService: WorkExperienceService) {
    super(nav,tripService);
  }


}
