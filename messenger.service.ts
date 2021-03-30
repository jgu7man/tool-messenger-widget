import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { GdevMessengerModel, GdevMessengerModelKeys } from './messenger.model';

@Injectable({
  providedIn: 'root'
})
export class GdevMessengerService {


  public facebookID:string = ''
  constructor (
    private fs: AngularFirestore,
  ) { }

  saveFacebookID( messenger: GdevMessengerModel ) {
    Object.keys(messenger).forEach((key) => {
      if (!messenger[key as GdevMessengerModelKeys]) {
        delete messenger[key as GdevMessengerModelKeys]
      }
    })
    var messengerObject = {}
    messengerObject = {...messengerObject, ...messenger}
    this.fs.collection( 'panel' ).ref.doc( 'messenger' )
      .set( messengerObject, { merge: true } )
      .then(() => {
        // console.log('ID de facebook guardado')
      })
  }

  async getFacebookID() {
    var faceDoc = await this.fs.collection( 'panel' ).ref.doc( 'messenger' ).get()
    return faceDoc.data()
  }

}
