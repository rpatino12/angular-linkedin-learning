import { Component, OnInit } from '@angular/core';
import { Listing } from '../types';
import { ActivatedRoute, Router } from '@angular/router';
import { ListingsService } from '../services/listings.service';

@Component({
  selector: 'app-contact-page',
  standalone: false,
  
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css'
})
export class ContactPageComponent implements OnInit {
  email: string = '';
  message: string = '';
  listing: Listing | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private listingsService: ListingsService,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.listingsService.getListingById(id)
      .then(listing => {
        this.listing = listing;
        this.message = `Hi, I'm interested in your ${this.listing?.name.toLowerCase()}!`;
      });
  }

  sendMessage(): void {
    alert('Your message has been sent!');
    this.router.navigateByUrl('/listings');
  }

}
