import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared/http.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { ToastController } from '@ionic/angular';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
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
        animate('900ms 300ms ease-out', style({ transform: 'translateX(0%)', opacity: 1 },))
      ])
    ]),
    trigger('slideup', [
      transition('void => *', [
        style({ opacity: 0, transform: 'translateY(150%)' }),
        animate('900ms 300ms ease-out', style({ transform: 'translateY(0%)', opacity: 1 },))
      ])
    ])
  ]
})
export class SigninPage implements OnInit {
  intervalId = 0;
  message = '';
  seconds = 0;
  hour = 0;
  lat: number;
  lon: number;

  constructor(private geolocation: Geolocation,private router: Router, private http: HttpService,
    private toastCtrl: ToastController) { }

  ngOnInit() {
    this.MobInputcolSize = 12;
    this.OtpInputcolSize = 12;
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude
      this.lon = resp.coords.longitude
     }).catch((error) => {
       console.log('Error getting location', error);
     });
     
     let watch = this.geolocation.watchPosition();
     watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
     });
  }
  ngOnDestroy() { this.clearTimer(); }

  loginsts: any = ''
  mobileNumber: any = '';
  otp: any = '';
  MobInputcolSize: any;
  OtpInputcolSize:any;
  sendOtpBtnVisible:any = false;
  submitBtnVisible:any = false;
  resendOtpVisible:any = false;
  timerVisible:any = false

  clearTimer() { clearInterval(this.intervalId); }
  start() { this.countDown(); }
  stop() {
    this.clearTimer();
    this.message = `$ ${this.hour} {this.seconds} `;
  }

  private countDown() {
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      this.seconds -= 1;
      if (this.seconds === 0) {
        // this.message = 'Offers Ends..!';
      } else {
        if (this.seconds < 0) { this.seconds = 60; } // reset
        this.message = `${this.hour}. ${this.seconds}s`;
      }
    }, 1000);
  }

  


  enterMobile() {
    this.MobInputcolSize = 8;
    this.sendOtpBtnVisible = true;
  }
  enterOtp(){
    this.OtpInputcolSize = 8;
    this.submitBtnVisible = true;
  }

  sendOtp(){
    this.seconds = 60;
    this.MobInputcolSize = 12;
    this.sendOtpBtnVisible = false;
    this.resendOtpVisible = true;

    const Data = {
      mobile_number: this.mobileNumber,
    }
    console.log(Data);
    
      this.http.post('/user_send_otp',Data).subscribe((response: any) => {
        console.log(response);
      
      }, (error: any) => {
        console.log(error);
        
      });
    
  }

  ResendOtp(){
   this.timerVisible = true;
   this.start()
 
   const Data = {
      mobile_number: this.mobileNumber,
    }
    console.log(Data);
    
      this.http.post('/user_send_otp',Data).subscribe((response: any) => {
        console.log(response);
      
      }, (error: any) => {
        console.log(error);
        
      });

  }

  

  signIn() {
    const Data = {
      mobile_number: this.mobileNumber,
      verify_otp: this.otp
    }

    this.http.post('/user_verify_otp', Data).subscribe((response: any) => {
      if (response.success == "true") {
        const obj = {
          mobile: response.mobile_number,
          // token: response.token,
          // loginstatus: response.user_status
        }

        // this.loginsts = response.user_status

        console.log(obj);

        const encodeText: any = btoa(JSON.stringify(obj))
        localStorage.setItem("24hrs-user-data", encodeText)
        // localStorage.setItem("token", response.token)
        // localStorage.setItem("loginstatus", response.user_status)

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
          title: 'Signed in successfully'
        })

        this.router.navigate(['/homepage'])
        // this.navigateTabs()
      } else {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })

        Toast.fire({
          icon: 'error',
          title: 'Invalid Otp, Please try again.'
        })
      }
    }, (error: any) => {
      console.log(error);
    }
    );
  }

  navigateTabs() {

    if (this.loginsts == "First Login") {
      console.log(this.loginsts);
      console.log("1st");
      this.router.navigate(['/selectcategories'])
    } else {
      console.log("2nd");
      this.router.navigate(['/homepage'])
    }
  }

  signupPage() {
    this.router.navigate(['/signuppage'])
  }


  signin(){
    this.router.navigate(['/homepage'])
  }

  navigateToLocal(){
    alert("i")
    this.router.navigate(['/local'])
  }

}
