import {Injectable} from "@angular/core";
import {WORK_EXPERIENCES} from "./mock-trips";

@Injectable()
export class AbstractInformationService {
  protected dataStructure: any;

  constructor() {

  }

  getAll() {
    return this.dataStructure;
  }

  getItem(id) {
    for (var i = 0; i < this.dataStructure.length; i++) {
      if (this.dataStructure[i].id === parseInt(id)) {
        return this.dataStructure[i];
      }
    }
    return null;
  }

  remove(item) {
    this.dataStructure.splice(this.dataStructure.indexOf(item), 1);
  }
}
