import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../shared/http.service';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-report-seller',
  templateUrl: './report-seller.component.html',
  styleUrls: ['./report-seller.component.scss'],
})
export class ReportSellerComponent implements OnInit {

  constructor(public modalController: ModalController,private router: Router, private activatedRoute: ActivatedRoute, private http: HttpService, route: ActivatedRoute, public popoverController: PopoverController) { }

  ngOnInit() {

  }
  
  storeID: any = localStorage.getItem("storeId");

  others:any;


  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });

  }

  reportSeller(){
    const obj = {
      store_name : this.storeID,
      spam_msg : "",
      store : "",
      offer_denied : "offer_denied",
      others : this.others
    }

    this.http.post('/seller_report', obj).subscribe((response: any) => {
      console.log(response);
      if(response.success == "true"){
        this.others = ''
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
          title: 'Report Successfully'
        })
        this.router.navigate(['/homepage'])
      }

    }, (error: any) => {
      console.log(error);
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
    });
  }

}
