import {Injectable} from "@angular/core";
import {AbstractInformationService} from "./abstract-information.service";

@Injectable()
export class CertificationService extends AbstractInformationService {
  constructor() {
    super();
  }
}
