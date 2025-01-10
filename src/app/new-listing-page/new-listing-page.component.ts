import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-listing-page',
  standalone: false,
  
  templateUrl: './new-listing-page.component.html',
  styleUrl: './new-listing-page.component.css'
})
export class NewListingPageComponent implements OnInit {
  constructor(
    private router: Router,
  ) {}
  
  ngOnInit(): void {}

  onSubmit(): void {
    alert('Creating new listing...');
    this.router.navigateByUrl('/my-listings');
  }
}
