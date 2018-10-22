import {Injectable} from "@angular/core";
import {AbstractInformationService} from "./abstract-information.service";

@Injectable()
export class EducationService extends AbstractInformationService {
  constructor() {
    super();
    this.dataStructure = [];
  }
}
