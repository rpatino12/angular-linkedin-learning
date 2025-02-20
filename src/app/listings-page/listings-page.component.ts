import { Component, OnInit } from '@angular/core';
import { Listing } from '../types';
import { ListingsService } from '../services/listings.service';

@Component({
  selector: 'app-listings-page',
  standalone: false,
  
  templateUrl: './listings-page.component.html',
  styleUrl: './listings-page.component.css'
})
export class ListingsPageComponent implements OnInit {
  listings: Listing[] = [];
  
  constructor(
    private listingsService: ListingsService,
  ) {}

  ngOnInit(): void {
    this.listingsService.getListings()
    .subscribe(listings => this.listings = listings);
  }
  
}
