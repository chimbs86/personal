import {Injectable} from "@angular/core";
import {AbstractInformationService} from "./abstract-information.service";
import {WORK_EXPERIENCES} from "./mock-trips";

@Injectable()
export class WorkExperienceService extends AbstractInformationService {
  constructor() {
    super();
    this.dataStructure = WORK_EXPERIENCES;
  }
}
