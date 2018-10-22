import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Keyboard} from '@ionic-native/keyboard';

import {ActivityService} from "../services/activity-service";
import {AbstractInformationService} from "../services/abstract-information.service";
import {WeatherProvider} from "../services/weather";

import {MyApp} from "./app.component";

import {SettingsPage} from "../pages/settings/settings";
import {CheckoutTripPage} from "../pages/checkout-trip/checkout-trip";
import {HomePage} from "../pages/home/home";
import {LoginPage} from "../pages/login/login";
import {NotificationsPage} from "../pages/notifications/notifications";
import {RegisterPage} from "../pages/register/register";
import {SearchLocationPage} from "../pages/search-location/search-location";
import {TripDetailPage} from "../pages/trip-detail/trip-detail";
import {Education} from "../pages/workexperience/Education";
import {LocalWeatherPage} from "../pages/local-weather/local-weather";
import {WorkExperience} from "../pages/workexperience/WorkExperience";
import {Certifications} from "../pages/workexperience/Certifications";
import {OtherProjects} from "../pages/workexperience/OtherProjects";
import {WorkExperienceService} from "../services/WorkExperienceService";
import {EducationService} from "../services/EducationService";
import {OtherProjectService} from "../services/OtherProjectService";
import {CertificationService} from "../services/CertificationService";

// import services
// end import services
// end import services

// import pages
// end import pages

@NgModule({
  declarations: [
    MyApp,
    SettingsPage,
    CheckoutTripPage,
    HomePage,
    LoginPage,
    LocalWeatherPage,
    NotificationsPage,
    RegisterPage,
    SearchLocationPage,
    TripDetailPage,
    Education,
    WorkExperience,
    Certifications,
    OtherProjects
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {
      scrollPadding: false,
      scrollAssist: true,
      autoFocusAssist: false
    }),
    IonicStorageModule.forRoot({
      name: '__ionic3_start_theme',
        driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SettingsPage,
    CheckoutTripPage,
    HomePage,
    LoginPage,
    LocalWeatherPage,
    NotificationsPage,
    RegisterPage,
    SearchLocationPage,
    TripDetailPage,
    Education,
    WorkExperience,
    Certifications,
    OtherProjects
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Keyboard,
    ActivityService,
    AbstractInformationService,
    WorkExperienceService,
    EducationService,
    OtherProjectService,
    CertificationService,
    WeatherProvider,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})

export class AppModule {
}
