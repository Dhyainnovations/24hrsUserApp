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

  constructor(private router: Router, private http: HttpService,
    private toastCtrl: ToastController, public popoverController: PopoverController,  private route: ActivatedRoute) {
    this.invalidAlert = false;
    this.acceptCondtion = false;


    this.route.queryParams.subscribe(queryParams => {
      this.checked= queryParams['checkbox'];

  
   });
  }


  ngOnInit() {

  }

  checked:any = false

  emailid: any = '';
  sellername: any = '';
  mobilenumber: any = '';
  password: any = '';
  otp: any;
  checkedSts: any = false;

  isVisible: any = false;
  otpBtnVisible: any = false;
  emailidRes: any = false;
  usernameRes: any = false;
  mobilenumberRes: any = false;
  passwordRes: any = false;

  isNotMbileAlert: any = false;
  isNotEmailAlert: any = false;
  isUserNameAlert: any = false;

  pwLowercaseAlert: any = false;
  pwUppercaseAlert: any = false;
  pwNumberAlert: any = false;
  pwMinimumAlert: any = false;
  invalidAlert: any = false;
  acceptCondtion: any = false;

  isEmail() {
    this.emailidRes = (validator.isEmail(this.emailid));
    if ((this.emailidRes)) {
      this.isNotEmailAlert = false
    } else {
      this.isNotEmailAlert = true
    }
  }



  passwordValidation(pw) {
    console.log(pw);
    this.invalidAlert = false;

    var lowerCaseLetters = /[a-z]/g;
    this.passwordRes = (lowerCaseLetters.test(pw));

    if (this.passwordRes) {
      this.pwLowercaseAlert = false
    } else {
      this.pwLowercaseAlert = true
    }


    var upperCaseLetters = /[A-Z]/g;
    this.passwordRes = (upperCaseLetters.test(pw));

    if (this.passwordRes) {
      this.pwUppercaseAlert = false
    } else {
      this.pwUppercaseAlert = true
    }

    var numbers = /[0-9]/g;
    this.passwordRes = (numbers.test(pw));

    if (this.passwordRes) {
      this.pwNumberAlert = false
    } else {
      this.pwNumberAlert = true
    }

    if (pw.length >= 8) {
      this.pwMinimumAlert = false
    } else {
      this.pwMinimumAlert = true
    }

    return numbers.test(pw);
  }




  signup(pw) {
    if (!this.emailidRes) {
      this.isNotEmailAlert = true
    }
    if (!this.passwordRes) {
      this.invalidAlert = true
    }

    if (this.checkedSts == false) {
      this.acceptCondtion = true;
    } else {
      this.acceptCondtion = false;
    }



    if (!this.emailidRes && !this.passwordRes) {
      return false
    }
    const userData = {
      user_name: this.sellername,
      email_id: this.emailid,
      mobile_number: this.mobilenumber,
      password: this.password
    }

    this.http.post('/user_register', userData).subscribe((response: any) => {
      if (response.success == "true") {
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
        console.log(response);

        this.navigateSigninPage()
      } else if (response.message == "Email-Id Already Exist") {
        this.emailid = '';
        this.sellername = '';
        this.mobilenumber= '';
        this.password = '';

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
          title: 'Email Already Exist'
        })
      } else if (response.message == "User name Already Exist") {
        this.emailid = '';
        this.sellername = '';
        this.mobilenumber= '';
        this.password = '';

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
          title: 'Username Already Exist'
        })
      }
      else if (response.message == "Mobile Number Already Exist") {
        this.emailid = '';
        this.sellername = '';
        this.mobilenumber= '';
        this.password = '';
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
          title: 'Mobile Number Already Exist'
        })
      }

    }, (error: any) => {
      console.log(error);
    }
    );


  }

  navigateSigninPage() {
    this.sellername = ''
    this.emailid = ''
    this.mobilenumber = ''
    this.password = ''
    this.router.navigate(['/'])
  }
  signinPage() {
    this.router.navigate(['/'])
  }

  mobileNumVerification() {
    let n = this.mobilenumber.length;
    console.log(n);
    if (n == 10) {
      this.otpBtnVisible = true;
    } else {
      this.otpBtnVisible = false;
    }


  }
  sendOtp() {
    this.otpBtnVisible = false;
    this.isVisible = true;

  }

  verifyNumber() {
    this.isVisible = false;
  }

  termsAndCondition() {
    this.router.navigate(['/terms-and-condition'])
  }


  checkboxClick(e) {
    console.log(e.detail.checked);

    this.checkedSts = e.detail.checked;

  }

  navigateHome() {
    this.router.navigate(['/signinpage'])
  }

}

