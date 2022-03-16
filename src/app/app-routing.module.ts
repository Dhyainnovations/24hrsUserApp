import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'homepage',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'signinpage',
    loadChildren: () => import('./signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'signuppage',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'selectcategories',
    loadChildren: () => import('./selectcategories/selectcategories.module').then( m => m.SelectcategoriesPageModule)
  },
  {
    path: 'myprofile',
    loadChildren: () => import('./myprofile/myprofile.module').then( m => m.MyprofilePageModule)
  },
  {
    path: 'support',
    loadChildren: () => import('./support/support.module').then( m => m.SupportPageModule)
  },
  {
    path: 'setalarm',
    loadChildren: () => import('./setalarm/setalarm.module').then( m => m.SetalarmPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./splashscreen/splashscreen.module').then( m => m.SplashscreenPageModule)
  },
  {
    path: 'searchpage',
    loadChildren: () => import('./searchpage/searchpage.module').then( m => m.SearchpagePageModule)
  },
  {
    path: 'terms-and-condition',
    loadChildren: () => import('./terms-and-condition/terms-and-condition.module').then( m => m.TermsAndConditionPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./modal/modal.module').then( m => m.ModalPageModule)
  },
  {
    path: 'myalarms',
    loadChildren: () => import('./myalarms/myalarms.module').then( m => m.MyalarmsPageModule)
  },
  {
    path: 'change-category',
    loadChildren: () => import('./change-category/change-category.module').then( m => m.ChangeCategoryPageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./faq/faq.module').then( m => m.FaqPageModule)
  },
  {
    path: 'slide-test',
    loadChildren: () => import('./slide-test/slide-test.module').then( m => m.SlideTestPageModule)
  },
  {
    path: 'local',
    loadChildren: () => import('./local/local.module').then( m => m.LocalPageModule)
  },

 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
