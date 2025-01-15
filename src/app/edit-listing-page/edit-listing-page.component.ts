import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Listing } from '../types';
import { fakeMyListings } from '../fake-data';
import { ListingsService } from '../services/listings.service';

@Component({
  selector: 'app-edit-listing-page',
  standalone: false,
  
  templateUrl: './edit-listing-page.component.html',
  styleUrl: './edit-listing-page.component.css'
})
export class EditListingPageComponent implements OnInit {
  
  listing: Listing | undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private listingsService: ListingsService,
  ) {}
  
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.listingsService.getListingById(id)
      .then(listing => this.listing = listing);
  }

  onSubmit({name, description, price}: Listing): void {
    this.listingsService.editListing(this.listing?.id, name, description, price)
      .subscribe(() => this.router.navigateByUrl('/my-listings'));
  }
}
