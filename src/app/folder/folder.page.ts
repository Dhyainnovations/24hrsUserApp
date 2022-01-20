import { Component, OnDestroy, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../shared/http.service';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { ReportSellerComponent } from '../report-seller/report-seller.component';
import { ThemeService } from '../darkmode/theme.service';
import { trigger, style, state, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
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
        animate('400ms 200ms ease-out', style({ transform: 'translateY(0%)', opacity: 1 },))
      ])
    ])
  ]

})

export class FolderPage implements OnInit, OnDestroy {
  public folder: string;

  constructor(private theme: ThemeService, private router: Router, private activatedRoute: ActivatedRoute, private http: HttpService, route: ActivatedRoute, public popoverController: PopoverController) {
    route.params.subscribe(val => {
      this.getSelectCategory()
      this.offerList()
    });
  }

  ngOnInit() {
    this.start()
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }
  ngOnDestroy() { this.clearTimer(); }

  intervalId = 0;
  message = '';
  seconds = 11;
  hour = 1;

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
        this.message = 'Offers Ends..!';
      } else {
        if (this.seconds < 0) { this.seconds = 60; } // reset
        this.message = `${this.hour}. ${this.seconds} Hrs`;
      }
    }, 1000);
  }

  click: any = false;

  userdetails: any = JSON.parse(atob(localStorage.getItem("24hrs-user-data")));
  slideName: any = 'Home';

  isvisible: any = false;
  deliveryAvilability: any = false;
  popUpisvisible: any = false;
  productDetails: any = true;
  storedetailsVisible: any = false;
  noDataFound: any = false;
  offerListVisible: any = true;

  getCategoryList: any = [];
  offerlist: any = [];
  offerView: any = []
  storedetails: any = []

  storeTbid: any;
  storeLogo: any;
  storeName: any;
  productName: any;
  productImage: any;
  description: any;
  offer: any;
  totalPrice: any;
  offerPrice: any;
  offerTime: any;

  storeAddress: any;
  websiteLink: any;
  whatsApp: any;
  contact: any;
  instagram: any;

  others: any;
  storeID: any;
  spamMsg: any;
  storeNa:any;
  offerDenaid:any;




  hidepopup() {
    this.popUpisvisible = false;
  }
  showPopup() {
    this.popUpisvisible = true;

  }

  spam(val) {
    this.spamMsg = val
  }

  storeNA(val) {
    this.storeNa = val
  }

  OfferDenaid(val) {
    this.offerDenaid = val
  }

  reportSeller() {

    const obj = {
      store_name: this.storeID,
      spam_msg: this.spamMsg,
      store: this.storeNa,
      offer_denied: this.offerDenaid,
      others: this.others
    }

    console.log(obj);
    
    this.http.post('/seller_report', obj).subscribe((response: any) => {
      console.log(response);
      if (response.success == "true") {
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
        this.popUpisvisible = false
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




  slideOpts = {
    slidesPerView: 3.0,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
  }




  singleCard(tbid) {

    const o = tbid
    this.isvisible = true;
    this.storedetailsVisible = false
    this.productDetails = true

    
    this.http.get('/readone_offer_user?o=' + o).subscribe((response: any) => {
      if (response.success == "true") {
        this.storeTbid = response.records.tbid
        this.storeLogo = response.records.store_logo
        this.storeName = response.records.store_name
        this.productName = response.records.product
        this.productImage = response.records.product_image
        this.description = response.records.description
        this.offer = response.records.offer
        this.totalPrice = response.records.total_cost
        this.offerPrice = response.records.offer_price
        this.offerTime = response.records.offer_time


      }

    }, (error: any) => {
      console.log(error);
    });
  }

  storeDetails(storename) {
    this.storedetailsVisible = true;
    this.productDetails = false;

    const obj = {
      store_name: storename
    }
    console.log(obj);


    this.http.post('/store_details_user', obj).subscribe((response: any) => {
      this.storedetails = response.records;
      console.log(this.storedetails);
      this.storeAddress = response.records.store_address
      this.websiteLink = response.records.website
      this.whatsApp = response.records.whatsapp
      this.contact = response.records.contact_number
      this.instagram = response.records.instagram
      this.storeID = response.records.tbid
      this.deliveryAvilability = response.records.delivery_availability

      console.log(this.deliveryAvilability);
      

    }
    , (error: any) => {
      console.log(error);
    }
    );
  }

  navigateHome() {
    this.storedetailsVisible = false;
    this.isvisible = false;
    this.productDetails = true;

  }

  searchPage() {
    this.router.navigate(['/searchpage'])
  }

  setalarm() {
    this.router.navigate(['/setalarm'])
  }

  notification() {
    this.router.navigate(['/notification'])
  }

  getSelectCategory() {
    this.http.get('/store_category').subscribe((response: any) => {
      this.getCategoryList = response.records
      console.log(response);

    }, (error: any) => {
      console.log(error);
    });
  }


  offerList() {
    this.http.get('/list_all_offer',).subscribe((response: any) => {
      this.offerlist = response.records;
      console.log(this.offerlist);

    }, (error: any) => {
      console.log(error);
    }
    );
  }

  clickSlideHome() {
    this.slideName = "Home";
    this.offerListVisible = true;
    this.noDataFound = false;
    this.isvisible = false
    this.offerList()
  }

  clickSlide(item) {
    console.log(item);
    this.isvisible = false
    this.slideName = item;
    if (this.slideName == "Home") {
      this.offerListVisible = true;
      this.noDataFound = false;
      this.offerList()
    }

    const obj = {
      store_category: item
    }
    this.http.post('/list_offer_category', obj).subscribe((response: any) => {
      if (response.success == "true") {
        this.offerlist = response.records;
        console.log(response);
        this.offerListVisible = true;
        this.noDataFound = false;
      } else {

      }
    }, (error: any) => {
      console.log(error);
      this.offerListVisible = false;
      this.noDataFound = true;

    }
    );
  }





}
