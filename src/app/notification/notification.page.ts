import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../shared/http.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {

  constructor(private router: Router,private activatedRoute: ActivatedRoute,private http: HttpService,route: ActivatedRoute,) {
    route.params.subscribe(val => {
      this.alaramList()

     
    });
   }

  ngOnInit() {
  }

  notificationList:any = []

  searchPage(){
    this.router.navigate(['/searchpage'])
  }
  
  setalarm(){
    this.router.navigate(['/setalarm'])             
  }

  alaramList(){
    this.http.get('/alarm_notification', ).subscribe((response: any) => {
      console.log(response);
      this.notificationList = response.records
      console.log(this.notificationList);
     


    }, (error: any) => {
      console.log(error);
    });
  }

}
