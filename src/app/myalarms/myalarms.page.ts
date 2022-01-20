import { Component,OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../shared/http.service';
import Swal from 'sweetalert2';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-myalarms',
  templateUrl: './myalarms.page.html',
  styleUrls: ['./myalarms.page.scss'],
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
        animate('900ms 300ms ease-out', style({ transform: 'translateX(0%)', opacity: 1 }, ))
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
export class MyalarmsPage implements OnInit {

  constructor(private router: Router, private http: HttpService,
    private toastCtrl: ToastController, route: ActivatedRoute,public alertController: AlertController) { 
      route.params.subscribe(val => {
        
        this.getAlarmList()
        
      });
    }

  ngOnInit() {
  }

  isVisible:any = false;
  alarmList:any = []
  tbid:any;

  searchPage(){
    this.router.navigate(['/searchpage'])
  }
  notification(){
    this.router.navigate(['/notification']) 
  }

  newAlarm(){
    this.router.navigate(['/setalarm']) 
  }


  getAlarmList() {
    this.http.get('/list_all_alarm').subscribe((response: any) => {
      this.alarmList = response.records;
      console.log(response);
      
      // if(response.success == "false"){
      //   this.isVisible = true;
       
      // }else{
      //   this.alarmList = response.records
      // }
      
    }, (error: any) => {
      console.log(error);
    });
  }

  deleteAlarm(value){
    this.tbid =value;
    this.presentAlertConfirm()
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'buttonCss ',
      
      header: 'Are you sure want to delete?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'alert-danger',
          handler: (blah) => {
            console.log('Confirm Cancel: No');
          }
        }, {
          text: 'Yes',
          cssClass: 'buttonCss',
          handler: () => {
            
            console.log('Confirm Okay');

            const obj = {
              tbid : this.tbid
            }
            console.log(obj)

            this.http.post('/delete_store_alarm', obj).subscribe((response: any) => {
              console.log(response);
             if(response.success == "true"){
              const encodeText: any = btoa(JSON.stringify(obj))
              localStorage.setItem("24hrs-user-data", encodeText)
              localStorage.setItem("token", response.token)
              localStorage.setItem("loginstatus", response.user_status)
      
              const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 1000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })
      
              Toast.fire({
                icon: 'success',
                title: 'Alarm Deleted successfully'
              })
             }
        
            }, (error: any) => {
              const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 1000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })
        
              Toast.fire({
                icon: 'error',
                title: 'Something Went Wrong'
              })
              console.log(error);
            });
           
          }
        }
      ]
    });

    await alert.present();
  }

}
