import {Injectable} from "@angular/core";
import {AbstractInformationService} from "./abstract-information.service";
import {EDUCATION} from "./mock-trips";

@Injectable()
export class EducationService extends AbstractInformationService {
  constructor() {
    super();
    this.dataStructure = EDUCATION;
  }
}
