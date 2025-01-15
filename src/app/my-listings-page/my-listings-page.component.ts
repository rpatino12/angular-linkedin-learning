import { Component, OnInit } from '@angular/core';
import { Listing } from '../types';
import { fakeMyListings } from '../fake-data';
import { ListingsService } from '../services/listings.service';

@Component({
  selector: 'app-my-listings-page',
  standalone: false,
  
  templateUrl: './my-listings-page.component.html',
  styleUrl: './my-listings-page.component.css'
})
export class MyListingsPageComponent implements OnInit {
  listings: Listing[] = [];

  constructor(
    private listingsService: ListingsService,
  ) {}
  
  ngOnInit(): void {
    this.listingsService.getListingsForUser()
      .subscribe(
        listings => this.listings = listings
      );
  }

  onDeleteClicked(listingId: string): void {
    this.listingsService.deleteListing(listingId)
      .subscribe(() => {
        this.listings = this.listings.filter(
          listing => listing.id !== listingId
        )
      });
  }

}
