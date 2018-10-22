import {Injectable} from "@angular/core";
import {AbstractInformationService} from "./abstract-information.service";

@Injectable()
export class OtherProjectService extends AbstractInformationService {
  constructor() {
    super();
  }
}
