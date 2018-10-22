import {Component} from "@angular/core";
import {NavController, PopoverController} from "ionic-angular";
import {Storage} from '@ionic/storage';

import {NotificationsPage} from "../notifications/notifications";
import {SettingsPage} from "../settings/settings";
import {Education} from "../workexperience/Education";
import {SearchLocationPage} from "../search-location/search-location";
import {AbstractItem} from "../workexperience/AbstractItem";
import {WorkExperience} from "../workexperience/WorkExperience";
import {Certifications} from "../workexperience/Certifications";
import {OtherProjects} from "../workexperience/OtherProjects";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  // search condition
  public search = {
    name: "Rio de Janeiro, Brazil",
    date: new Date().toISOString()
  }

  constructor(private storage: Storage, public nav: NavController, public popoverCtrl: PopoverController) {
  }
  thumbs:cards[] = [ {imgUrl:'../assets/img/trip/thumb/graduation.jpg', description:'Signalling', name: 'Education', navigator: Education},
    {imgUrl: '../assets/img/trip/thumb/work-experience.jpg', description:'Practical Knowledge', name: 'Work Experience', navigator: WorkExperience},
    {imgUrl: '../assets/img/trip/thumb/certification.jpg', description:'Secondary Signalling', name: 'Certifications', navigator: Certifications},
    {imgUrl: '../assets/img/trip/thumb/passion.jpg', description:'Passion', name: 'Personal Projects', navigator: OtherProjects}

    ];

  ionViewWillEnter() {
    // this.search.pickup = "Rio de Janeiro, Brazil";
    // this.search.dropOff = "Same as pickup";
    this.storage.get('pickup').then((val) => {
      if (val === null) {
        this.search.name = "Rio de Janeiro, Brazil"
      } else {
        this.search.name = val;
      }
    }).catch((err) => {
      console.log(err)
    });
  }

  // go to result page
  doSearch() {
    this.nav.push(Education);
  }

  // choose place
  choosePlace(from) {
    this.nav.push(SearchLocationPage, from);
  }

  // to go account page
  goToAccount() {
    this.nav.push(SettingsPage);
  }

  presentNotifications(myEvent) {
    console.log(myEvent);
    let popover = this.popoverCtrl.create(NotificationsPage);
    popover.present({
      ev: myEvent
    });
  }
  openPage(page) {
    this.nav.push(page);

  }

}
class cards{
  imgUrl: string;
  description: string;
  name: string;
  navigator: any;
}
//
