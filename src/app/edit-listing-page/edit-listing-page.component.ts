import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Listing } from '../types';
import { fakeMyListings } from '../fake-data';

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
  ) {}
  
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.listing = fakeMyListings.find(listing => listing.id === id);
  }

  onSubmit(): void {
    alert('Saving changes to the listing...');
    this.router.navigateByUrl('/my-listings');
  }
}
