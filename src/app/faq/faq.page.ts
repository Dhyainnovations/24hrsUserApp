import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
})
export class FaqPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  backToPrivious() {
    this.router.navigate(['/support'])
  }


   //-------------- Navigate to notificationPage ----------//
   notification() {
    this.router.navigate(['/notification'])
  }

  
}
