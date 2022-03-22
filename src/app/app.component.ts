import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { LocalNotifications, LocalNotificationSchema } from '@capacitor/local-notifications';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  notificationsDelayInSeconds: string = "2";

  public appPages = [
    { title: 'Home', url: '/homepage',icon: 'assets/icon/home.PNG'},
    { title: 'Set Alarm', url: '/setalarm', icon:'assets/icon/setalarm.png' },
    { title: 'My Alarms', url: '/myalarms',  icon:'assets/icon/myalarms.png' },
    { title: 'My Profile', url: '/myprofile', icon:'assets/icon/myprofile.png' },
    { title: 'Support', url: '/support', icon:'assets/icon/support.png' },
    // { title: 'Log out', url: '/signinpage', icon:'assets/icon/logout.png' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
 
  constructor( private router: Router,private route: ActivatedRoute,) {
    route.params.subscribe(val => {
      
   
    
    });
   }

  logout() {
    
    localStorage.clear()
    this.router.navigate(['/signinpage'])
  }

  // ScheduleNotification() {
  //   var options: LocalNotificationSchema = {
  //     id: 123,
  //     title: "title",
  //     body: "Body",
  //     summaryText: "summaryText",
  //     largeBody: "largeBody",
  //     schedule: { at: new Date(new Date().getTime() + parseInt(this.notificationsDelayInSeconds) * 1000) },
  //     extra: "extra"
  //   }
  //   LocalNotifications.schedule({ notifications: [options] }).then(() => {
  //     alert("Notification" + options.schedule);
  //     alert("Notification" + options);
  //   })
  // }


}
