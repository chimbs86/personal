import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {AbstractInformationService} from "../../services/abstract-information.service";
import {TripDetailPage} from "../trip-detail/trip-detail";
import {AbstractItem} from "./AbstractItem";

@Component({
  selector: 'page-educationandworkexperience',
  templateUrl: 'trips.html'
})
export class OtherProjects extends AbstractItem{
  // list of dataStructure
  public workExperiences: any;

  constructor(public nav: NavController, public tripService: AbstractInformationService) {
    super(nav,tripService);
  }

}
