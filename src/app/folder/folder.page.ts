import { Component, OnInit } from '@angular/core';
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

export class FolderPage implements OnInit {
  public folder: string;

  constructor(private theme: ThemeService, private router: Router, private activatedRoute: ActivatedRoute, private http: HttpService, route: ActivatedRoute, public popoverController: PopoverController) {
    route.params.subscribe(val => {
      this.getSelectCategory()
      this.ProductList()
    });
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  click: any = false;

  userdetails: any = JSON.parse(atob(localStorage.getItem("24hrs-user-data")));
  slideName: any = 'Home' ;

  isvisible: any = false;
  productDetails: any = true;
  storedetailsVisible: any = false;

  getCategoryList: any = [];
  offerlist: any = [];
  offerView:any = []
  storedetails:any = []

  async popup(ev: any) {
    const popover = await this.popoverController.create({
      component: ReportSellerComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    await popover.present();

    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
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
    this.http.get('/readone_offer_user?o=' + o).subscribe((response: any) => {
      if (response.success == "true") {
      this.offerView = response.records
      console.log(this.offerView);
      
     
      }

    }, (error: any) => {
      console.log(error);
    });
  }

  storeDetails(storenamae) {
    this.storedetailsVisible = true;
    this.productDetails = false;

    const obj ={
      store_name: storenamae
    }

    this.http.post('/seller_store_details', obj).subscribe((response: any) => {
      this.storedetails = response.records;
      console.log(this.storedetails);

    }, (error: any) => {
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


  ProductList() {
    this.http.get('/list_all_offer',).subscribe((response: any) => {
      this.offerlist = response.records;
      console.log(this.offerlist);

    }, (error: any) => {
      console.log(error);
    }
    );
  }

  clickSlide(item) {
    console.log(item);
    this.slideName = item;

    const obj = {
      store_category: item
    }
    
    console.log(obj);
    
    this.http.post('/list_product_category', obj).subscribe((response: any) => {
      this.offerlist = response.records;
      console.log(response);

    }, (error: any) => {
      console.log(error);
    }
    );
    

  }



}
