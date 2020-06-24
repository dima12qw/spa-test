import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {User} from '../users/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private url = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }

  getAllUsers() {
    return this.http.get<User[]>(`${this.url}/users`).pipe(
      catchError(this.handleError)
    );
  }

  getByID(id: number){
    return this.http.get<User>(`${this.url}/users/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  updateUser(id, user: User){
    return this.http.patch<User>(`${this.url}/users/${id}`, user).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
