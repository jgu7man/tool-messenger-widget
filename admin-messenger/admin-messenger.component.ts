import { Component, OnInit } from '@angular/core';
import { GdevMessengerService } from '../messenger.service';
import { GdevMessengerModel } from '../messenger.model';

@Component({
  selector: 'gdev-admin-messenger',
  templateUrl: './admin-messenger.component.html',
  styleUrls: ['./admin-messenger.component.scss']
})
export class AdminMessengerComponent implements OnInit {

  messengerObject: GdevMessengerModel
  constructor (
    public _messenger: GdevMessengerService
  ) {
    this.messengerObject = new GdevMessengerModel('')
   }

  ngOnInit() {
    this._messenger.getFacebookID().then( faceDoc => {
      if (faceDoc) this.messengerObject = faceDoc as GdevMessengerModel
    })
  }

}
