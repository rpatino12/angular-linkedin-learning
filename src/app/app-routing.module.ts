import { NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, Routes } from '@angular/router';
import { ListingsPageComponent } from './listings-page/listings-page.component';
import { ListingDetailPageComponent } from './listing-detail-page/listing-detail-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { EditListingPageComponent } from './edit-listing-page/edit-listing-page.component';
import { MyListingsPageComponent } from './my-listings-page/my-listings-page.component';
import { NewListingPageComponent } from './new-listing-page/new-listing-page.component';
import { fakeListings } from './fake-data';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/listings',
    pathMatch: 'full'
  },
  {
    path: 'listings',
    component: ListingsPageComponent,
    title: 'BuyAndSell | All listings',
    pathMatch: 'full'
  },
  {
    path: 'listings/:id',
    component: ListingDetailPageComponent,
    title: (route: ActivatedRouteSnapshot) => `BuyAndSell | ${fakeListings.find(listing => listing.id === route.paramMap.get('id'))?.name}`
  },
  {
    path: 'contact/:id',
    component: ContactPageComponent,
    title: 'BuyAndSell | Contact seller',
  },
  {
    path: 'edit-listing/:id',
    component: EditListingPageComponent
  },
  {
    path: 'my-listings',
    component: MyListingsPageComponent,
    title: 'BuyAndSell | My listings',
  },
  {
    path: 'new-listing',
    component: NewListingPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
