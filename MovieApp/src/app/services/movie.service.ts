import { Injectable } from '@angular/core';
import { Movie } from '../movie';
import { Movies } from '../movie.datasource';
import { Observable,of } from 'rxjs';
import { LoggingService } from './logging.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiMoviesUrl = "api/Movies";

  

  constructor(
    private loggingService: LoggingService,
    private http: HttpClient
  ) { }

  getMovies(): Observable<Movie[]>{
    this.loggingService.add("MovieService: listing movie");
    return this.http.get<Movie[]>(this.apiMoviesUrl);
  }

  getMovie(id: number): Observable<Movie | undefined>{
    this.loggingService.add("MovieService: get detail by id= "+ id);
    return this.http.get<Movie>(this.apiMoviesUrl+"/"+id);
  }

  update(movie: Movie): Observable<any>{
    const httpOptions = { headers: new HttpHeaders({"content-type": "application/json"}) };
    return this.http.put(this.apiMoviesUrl, movie, httpOptions);
  }
  
  add(movie:Movie): Observable<Movie>{
    const httpOptions = { headers: new HttpHeaders({"content-type": "application/json"}) };
    return this.http.post<Movie>(this.apiMoviesUrl, movie, httpOptions).pipe();
  }

  delete(movie:Movie): Observable<Movie>{
    const httpOptions = { headers: new HttpHeaders({"content-type": "application/json"}) };
    return this.http.delete<Movie>(this.apiMoviesUrl+"/"+movie.id, httpOptions);
  }
}
