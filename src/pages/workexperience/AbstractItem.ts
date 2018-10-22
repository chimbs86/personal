import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {AbstractInformationService} from "../../services/abstract-information.service";
import {TripDetailPage} from "../trip-detail/trip-detail";

@Component({
  selector: 'page-educationandworkexperience',
  templateUrl: 'trips.html'
})
export abstract class AbstractItem {
  // list of dataStructure
  public dataStructure: any;

  protected constructor(public nav: NavController, public tripService: AbstractInformationService) {
    // set sample data
    this.dataStructure = tripService.getAll();
  }

  // view workExperience detail
  viewDetail(id) {

    this.nav.push(TripDetailPage, {id: id});
  }
}
