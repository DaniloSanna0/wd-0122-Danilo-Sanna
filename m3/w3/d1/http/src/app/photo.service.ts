import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Subject, throwError } from 'rxjs';
import { P } from './p';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  url = 'https://jsonplaceholder.typicode.com/photos'

  favouritePhotos = new Subject<number>();

  counter = 0

  constructor(private http:HttpClient) { }

  getPhotos(){
    return this.http.get<P[]>(this.url).pipe(catchError(err =>{
      return throwError(err)
    }))
  }

  deltePhoto(id:number){
    return this.http.delete<P[]>(this.url+'/'+id)
    // catchError(err =>throwError(err))
  }

  addFav(){
    this.counter++
    this.favouritePhotos.next(this.counter)
  }
}
