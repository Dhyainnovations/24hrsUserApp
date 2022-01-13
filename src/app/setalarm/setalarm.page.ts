import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../shared/http.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from "@angular/forms";

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

  isVisible: any = false;
  isVisibleForProduct: any = false;
  isShown: any = true;
  selectItem: any;
  storeId: any;
  storeTbid: any = '';

  forproduct: any = false;
  forstore: any = false;
  getStoreList: any = [];
  storeDetails: any = []
  productDetails: any = []

  searchPage() {
    this.router.navigate(['/searchpage'])
  }
  notification() {
    this.router.navigate(['/notification'])
  }

  forProduct() {
    this.forproduct = true;
    this.forstore = false;
  }

  forStore() {
    this.forstore = true;
    this.forproduct = false;
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



  selectStoreForProduct() {
    console.log(this.storeTbid);
    var formData = new FormData();
    formData.append('store_name', this.storeTbid );
    console.log('formData: ', formData.getAll('store_name'));


    this.isVisible = false;
    this.http.postFormData('/product_list', formData).subscribe((response: any) => {
      console.log(response);
      this.productDetails = response.records
      console.log(this.productDetails);
      this.forproduct = true;


    }, (error: any) => {
      console.log(error);
    });
  }

  setAlarmForProduct() {
    console.log(this.storeId);
    const obj = {
      store_name: this.storeId
    }

    this.http.post('/store_alarm', obj).subscribe((response: any) => {
      console.log(response);
      if (response.success == "true") {
        this.selectItem = ''
      }

    }, (error: any) => {
      console.log(error);
    });
  }


  selectStoreForStore(tbid, name) {
    this.storeId = tbid;
    this.selectItem = name;
    console.log(tbid);
    console.log(name);
    this.http.get('/store_details_user',).subscribe((response: any) => {
      console.log(response);
      this.storeDetails = response.records

    }, (error: any) => {
      console.log(error);
    });



  }

  setAlarmForStore() {
    console.log(this.storeId);
    const obj = {
      store_name: this.storeId
    }

    this.http.post('/store_alarm', obj).subscribe((response: any) => {
      console.log(response);
      if (response.success == "true") {
        this.selectItem = ''
      }

    }, (error: any) => {
      console.log(error);
    });
  }



  searchProduct() {
    this.isVisible = true;
    this.isShown = false;
    this.isVisibleForProduct = false;
     this.http.get('/list_store',).subscribe((response: any) => {
      console.log(response);
      this.getStoreList = response.records
      console.log(response.records);
      console.log(this.getStoreList);
    }, (error: any) => {
      console.log(error);
    });
    
  }

  productSearchBasedOn() {
    this.isVisibleForProduct = true;
    this.isVisible = false;
  }

  backToHome() {
    this.router.navigate(['/homepage'])
  }

}
