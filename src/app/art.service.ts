import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtService {
  private apiUrl = 'http://localhost:3000/api/artworks';  // Update with your backend API URL

  constructor(private http: HttpClient) { }

  submitArtwork(artworkData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, artworkData);
  }
}
