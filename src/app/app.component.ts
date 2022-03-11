import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/homepage',icon: 'assets/icon/home.PNG'},
    { title: 'Set Alarm', url: '/setalarm', icon:'assets/icon/setalarm.png' },
    { title: 'My Alarms', url: '/myalarms',  icon:'assets/icon/myalarms.png' },
    { title: 'My Profile', url: '/myprofile', icon:'assets/icon/myprofile.png' },
    { title: 'Support', url: '/support', icon:'assets/icon/support.png' },
    // { title: 'Log out', url: '/signinpage', icon:'assets/icon/logout.png' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
 
  constructor( private router: Router) { }

  logout() {
    localStorage.removeItem("24hrs-user-data")
    localStorage.removeItem("token")
    this.router.navigate(['/signinpage'])
  }

}
