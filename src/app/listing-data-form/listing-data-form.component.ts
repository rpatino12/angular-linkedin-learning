import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Listing } from '../types';

@Component({
  selector: 'app-listing-data-form',
  standalone: false,
  
  templateUrl: './listing-data-form.component.html',
  styleUrl: './listing-data-form.component.css'
})
export class ListingDataFormComponent implements OnInit {
  @Input() buttonText: any;
  @Output() onSubmit = new EventEmitter<Listing>();

  name: string = '';
  description: string = '';
  price: string = '';

  constructor(
    private router: Router,
  ) {}
  
  ngOnInit(): void {}

  onButtonClicked(): void {
    this.onSubmit.emit({
      id: null,
      name: this.name,
      description: this.description,
      price: Number(this.price),
    });
  }
}