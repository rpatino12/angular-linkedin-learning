import { Injectable } from '@angular/core';
import { Listing } from '../types';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class ListingsService {

  url = 'http://localhost:8000/api';

  constructor(
    private http: HttpClient
  ) { }

  getListings(): Observable<Listing[]> {
    return this.http.get<Listing[]>('/api/listings');
  }

  async getListingById(id: string | null): Promise<Listing | undefined> {
    const data = await fetch(`${this.url}/listings/${id}`);
    return await data.json() ?? {};
  }

  addViewToListing(id: string | null): Observable<Listing> {
    return this.http.patch<Listing>(
      `${this.url}/listings/${id}/add-view`,
      {},
      httpOptions
    );
  }

  // async getListingsForUser(userId: string | null): Promise<Listing[]> {
  //   const data = await fetch(`${this.url}/users/${userId}/listings`);
  //   return await data.json() ?? [];
  // }

  getListingsForUser(): Observable<Listing[]> {
    return this.http.get<Listing[]>(`${this.url}/users/12345/listings`); // Hardcoded the user, it will get the user by authentication later
  }

  deleteListing(id: string): Observable<any> {
    return this.http.delete(`${this.url}/listings/${id}`);
  }

  createListing(name: string, description: string, price: number): Observable<Listing> {
    return this.http.post<Listing>(
      `${this.url}/listings`,
      {name, description, price},
      httpOptions
    );
  }
}
