import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FacebookService, InitParams } from 'ngx-facebook';
import { GdevMessengerService } from './messenger.service';
import { GdevMessengerModel } from './messenger.model';

@Component( {
  selector: 'gdev-messenger',
  templateUrl: './messenger.component.html',
  styleUrls: [ './messenger.component.scss' ]
} )
export class MessengerComponent implements OnInit, AfterViewInit {

  public msgDoc: GdevMessengerModel
  @ViewChild( 'customerchat' ) customerchat: ElementRef | any

  constructor (
    private facebookService: FacebookService,
    public _messenger: GdevMessengerService
  ) {
    this.msgDoc = new GdevMessengerModel('','','','')
   }

  ngOnInit() {
    this.initFacebookService()
  }

  ngAfterViewInit() {
    this._messenger.getFacebookID().then((msgDoc) => {
      let doc = msgDoc as GdevMessengerModel
      this.customerchat.nativeElement.setAttribute( 'page_id', doc.page_id )
    } )

  }

  private initFacebookService(): void {
    const initParams: InitParams = {
      status: true,
      appId: '1030185604009438',
      xfbml: true,
      version: 'v3.2',
      cookie: true
    };
    this.facebookService.init( initParams );
  }

}
