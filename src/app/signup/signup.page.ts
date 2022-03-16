import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared/http.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import Swal from 'sweetalert2';
import { ToastController } from '@ionic/angular';
import validator from 'validator';
import { PopoverController } from '@ionic/angular';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations'; 
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  animations: [
    trigger('fadein', [
      state('void', style({ opacity: 0 })),
      transition('void => *', [
        style({ opacity: 0 }),
        animate('900ms ease-out', style({ opacity: 1 }))
      ])
    ]),
    trigger('slidelefttitle', [
      transition('void => *', [
        style({ opacity: 0, transform: 'translateX(150%)' }),
        animate('600ms 300ms ease-out', style({ transform: 'translateX(0%)', opacity: 1 }, ))
      ])
    ]),
    trigger('slideup', [
      transition('void => *', [
        style({ opacity: 0, transform: 'translateY(150%)' }),
        animate('900ms 300ms ease-out', style({ transform: 'translateY(0%)', opacity: 1 }, ))
      ])
    ])
  ]
})
export class SignupPage implements OnInit {
  modalCtrl: any;

  constructor(private router: Router, private http: HttpService,
    private toastCtrl: ToastController, public popoverController: PopoverController,  private route: ActivatedRoute) {



    this.route.queryParams.subscribe(queryParams => {
    
   });
  }


  ngOnInit() {

  }


  locationn: any = "coimbate";
  userName: any = "";
  mobileNumber: any = 8838373520;
  

  


}

