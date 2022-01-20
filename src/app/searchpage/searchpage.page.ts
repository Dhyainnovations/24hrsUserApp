import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HttpService } from '../shared/http.service';

@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.page.html',
  styleUrls: ['./searchpage.page.scss'],
})
export class SearchpagePage implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private http: HttpService, route: ActivatedRoute) {
    route.params.subscribe(val => {
      this.getProductList()
    });
  }


  ngOnInit() {
  }

  cardVisible:any = false;
  isVisible: any = false;
  isShown: any = true;
  searchResultVisible: any = false
  searchProductName: any;
  searchResult: any = []
  searchProductList: any = []
  storeLogo:any;
  storeName:any;
  productName:any;
  productImage:any;
  description:any;
  weight:any;
  unit:any;
  totalCost:any;
  offerPrice:any;
  offerTime:any;
  

  searchProduct() {
    console.log(this.searchProductName);
    this.getProductList()
    this.isVisible = true;
    this.isShown = false;
    this.cardVisible = false;
    this.searchResultVisible = true;
    this.http.get('/product_search_user' + this.searchProductName).subscribe((response: any) => {
      if (response.success == "true") {
        this.searchProductList = response.records;
        console.log(response);
       
      }

    }, (error: any) => {
      console.log(error);
    });
  }

  selectSearchProduct(name) {
    
    this.searchProductName = name;
    const s = name;
    console.log(s);
    this.searchResultVisible = false;
    this.cardVisible = true;
    this.http.get('/product_search_user?s=' + s).subscribe((response: any) => {
      if(response.success == "true") {
        console.log(response);
        this.storeLogo = response.records.store_logo
        this.storeName = response.records.store_name
        this.productName = response.records.product_name
        this.productImage = response.records.product_image
        this.description = response.records.description
        this.weight =response.records.weight
        this.unit = response.records.unit
        this.totalCost = response.records.total_cost
        this.offerPrice = response.records.offer_price
        this.offerTime = response.records.offer_time
        
        
        
      }

    }, (error: any) => {
      console.log(error);
    });


  }
  

  getProductList() {
    this.http.get('/list_all_product').subscribe((response: any) => {
      this.searchProductList = response.records;
      console.log(response);

    }, (error: any) => {
      console.log(error);
    });
  }

  backToHome() {
    this.router.navigate(['/homepage'])
  }

}

