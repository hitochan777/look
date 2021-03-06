import { Injectable } from '@angular/core'
import { of, Observable } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Face } from './face'

type UserOutput = {
  name: string
  error?: string
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authEndpoint = '/api/auth'
  constructor(private http: HttpClient) {}

  authenticate(data: { image: string; mode: string }): Observable<UserOutput> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    }
    return this.http.post<UserOutput>(this.authEndpoint, data, httpOptions)
  }

  registerFace(image: File): Observable<boolean> {
    return of(true)
  }

  deleteFace(id: number): Observable<boolean> {
    return of(true)
  }

  getFaces(): Observable<Face[]> {
    return of([])
  }
}
