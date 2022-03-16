import { Component, OnInit } from '@angular/core';
import { LocalNotifications} from '@ionic-native/local-notifications/ngx'
@Component({
  selector: 'app-local',
  templateUrl: './local.page.html',
  styleUrls: ['./local.page.scss'],
})
export class LocalPage implements OnInit {

  constructor( public localNotifications: LocalNotifications) { }


  ngOnInit() {
    this.simpleNotif()
  }
  clickSub: any;
  simpleNotif() {
    this.localNotifications.schedule({
      id: 1,
      text: 'Single Local Notification',
      data: { secret: 'secret' }
    });
  }

  
}
