import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../shared/http.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from "@angular/forms";
import Swal from 'sweetalert2';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-setalarm',
  templateUrl: './setalarm.page.html',
  styleUrls: ['./setalarm.page.scss'],
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
export class SetalarmPage implements OnInit {
  form: FormGroup;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private http: HttpService, route: ActivatedRoute,) {
    route.params.subscribe(val => {
      this.storeList()
    });
  }

  ngOnInit() {

  }

  forProductbtnVisible: any = false
  forStorebtnVisible: any = false
  isVisible: any = false;
  isVisibleForProduct: any = false;
  isShown: any = true;
  selectStore: any = "";
  selectProductName: any;
  storeId: any;
  storeTbid: any = '';
  storeIdUseOfProductSetAlarm: any;
  productTbid: any;

  resultProductCardVisible: any = false
  resultStoreCardVisible: any = false
  forproduct: any = false;
  forstore: any = false;
  getStoreList: any = [];
  storeDetails: any = []
  resultProductDetails: any = []
  productNameList: any = []
  getProductList: any = []

  storeLogo: any;
  description: any;
  storeName: any;
  productImage: any;
  offerTime: any;
  productName: any;
  weight: any;
  unit: any;
  totalCost: any;
  offerPrice: any;

  storeLogForStore: any;
  storeNameForSrore: any;
  storeID:any


  searchPage() {
    this.router.navigate(['/searchpage'])
  }
  notification() {
    this.router.navigate(['/notification'])
  }

  forProduct() {
    this.forproduct = true;
    this.forstore = false;
    this.forProductbtnVisible = true
    this.forStorebtnVisible = false
    this.resultStoreCardVisible = false
  }

  forStore() {
    this.forstore = true;
    this.forproduct = false;
    this.forStorebtnVisible = true
    this.forProductbtnVisible = false
    this.resultProductCardVisible = false
  }





  selectStoreForProductSetAlarm() {
    this.isVisible = true;
    this.storeIdUseOfProductSetAlarm = name


    // var formData = new FormData();
    // formData.append('store_name', this.storeTbid);
    // console.log('formData: ', formData.getAll('store_name'));

    const obj = {
      store_name: this.storeTbid
    }
    

    this.http.post('/product_list', obj).subscribe((response: any) => {
      console.log(response);
      this.productNameList = response.records
    }, (error: any) => {
      console.log(error);
    });
  }

  setAlarmForProduct() {

    const obj = {
      store_name: this.storeTbid,
      product: this.productTbid
    }
    console.log(obj);


    this.http.post('/product_alarm', obj).subscribe((response: any) => {
      console.log(response);
      if (response.success == "true") {
        this.selectProductName = ''
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
          title: 'Alarm Set successfully'
        })
      } else {

      }

    }, (error: any) => {
      this.selectProductName = ''
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1200,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

      Toast.fire({
        icon: 'error',
        title: 'Alarm Already Exist for this product.'
      })
      console.log(error);
    });
  }


  selectProductToSetAlarm(name) {
    this.selectProductName = name;
    console.log(name);
    const s = name

    this.http.get('/product_search_user?s=' + s).subscribe((response: any) => {
      if (response.success == "true") {
        this.selectProductName = name;
        console.log(response);
        this.storeLogo = response.records.store_logo
        this.storeName = response.records.store_name
        this.productName = response.records.product_name
        this.productImage = response.records.product_image
        this.description = response.records.description
        this.offerTime = response.records.offer_time
        this.weight = response.records.weight
        this.unit = response.records.unit
        this.totalCost = response.records.total_cost
        this.offerPrice = response.records.offer_price
        this.productTbid = response.records.tbid
        this.isVisibleForProduct = false
        this.resultProductCardVisible = true;
      }


    }, (error: any) => {
      console.log(error);
    });



  }

  storeList() {
   
    console.log(this.getStoreList);
    this.http.get('/list_store',).subscribe((response: any) => {
      console.log(response);
      this.getStoreList = response.records
      console.log(response.records);
      console.log(this.getStoreList);
    }, (error: any) => {
      console.log(error);
    });
  }

  searchStore() {
    this.isVisible = true;
   
  }

  selectStoreForGetStoreDetails(tbid,name) {
    this.isVisible = false
    this.selectStore = name;
    this.storeID = tbid;

    const obj = {
      store_name: name
    }
    console.log(obj);

    this.http.post('/store_details_user', obj).subscribe((response: any) => {
      console.log(response);
      if (response.success == "true") {
        this.resultStoreCardVisible = true;

        this.storeLogForStore = response.records.store_logo
        this.storeNameForSrore = response.records.store_name

      }


    }, (error: any) => {
      console.log(error);
    });
  }

  setAlarmForStore() {
    console.log(this.storeId);
    const obj = {
      store_name: this.storeID
    }
    console.log(obj);

    this.http.post('/store_alarm', obj).subscribe((response: any) => {
      console.log(response);
      if (response.success == "true") {
        this.selectStore = ''
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
          title: 'Alarm Set successfully'
        })

      }

    }, (error: any) => {
      console.log(error);
      this.selectStore = ''
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
        title: 'Alarm Already Exist for this store.'
      })
    });
  }



  searchProduct() {

    this.isVisible = true;
    this.isShown = false;
    this.isVisibleForProduct = false;

    const obj = {
      store_name: this.selectProductName
    }
    this.http.post('/product_list', obj).subscribe((response: any) => {
      console.log(response);
      this.getProductList = response.records
      console.log(response.records);
      console.log(this.getStoreList);
    }, (error: any) => {
      console.log(error);
    });

  }

  productSearchBasedOnStore() {
    this.isVisibleForProduct = true;
    this.isVisible = false;

  }

  backToHome() {
    this.router.navigate(['/homepage'])
  }

}
