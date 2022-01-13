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

  selectSearchProduct(name) {

    console.log(name);
    this.searchProductName = name;
    const s = name;

    this.http.get('/product_search_user?s=' + s).subscribe((response: any) => {
      if (response.success == "true") {
        this.searchResult = response.records;
        console.log(response);
        this.searchResultVisible = false;
        this.cardVisible = true;
      }

    }, (error: any) => {
      console.log(error);
    });


  }

  searchProduct() {
    console.log(this.searchProductName);
    this.getProductList()
    this.isVisible = true;
    this.isShown = false;
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

