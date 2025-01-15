import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Listing } from '../types';
import { ListingsService } from '../services/listings.service';

@Component({
  selector: 'app-listing-detail-page',
  standalone: false,
  
  templateUrl: './listing-detail-page.component.html',
  styleUrl: './listing-detail-page.component.css'
})
export class ListingDetailPageComponent implements OnInit {
  
  isLoading: boolean = true;
  listing: Listing | undefined;

  constructor(
    private route: ActivatedRoute,
    private listingsService: ListingsService,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    
    this.listingsService.getListingById(id)
      .then(listing => {
        this.listing = listing;
        this.isLoading = false;
      });
    
    this.listingsService.addViewToListing(id).subscribe(() => console.log('Views updated!'));
  }

}
