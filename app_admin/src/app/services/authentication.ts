import { Inject, Injectable } from '@angular/core';
import { BROWSER_STORAGE } from '../storage';
import { User } from '../models/user';
import { TripData } from './trip-data';

@Injectable({
  providedIn: 'root'
})
export class Authentication {

  constructor(
    @Inject(BROWSER_STORAGE) private storage: Storage,
    private tripData: TripData
  ) { }

  public getToken(): string {
    return this.storage.getItem('travlr-token') || '';
  }

  public saveToken(token: string): void {
    this.storage.setItem('travlr-token', token);
  }

  public login(user: User, passwd: string): void {
    this.tripData.login(user, passwd)
      .subscribe({
        next: (value: any) => {
          this.saveToken(value.token);
        },
        error: (error: any) => {
          console.log('Error: ' + error);
        }
      });
  }

  public register(user: User, passwd: string): void {
    this.tripData.register(user, passwd)
      .subscribe({
        next: (value: any) => {
          this.saveToken(value.token);
        },
        error: (error: any) => {
          console.log('Error: ' + error);
        }
      });
  }

  public logout(): void {
    this.storage.removeItem('travlr-token');
  }

  public isLoggedIn(): boolean {
    const token: string = this.getToken();
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.exp > (Date.now() / 1000);
    } else {
      return false;
    }
  }

  public getCurrentUser(): User | null {
    if (this.isLoggedIn()) {
      const token: string = this.getToken();
      const { email, name } = JSON.parse(atob(token.split('.')[1]));
      return { email, name } as User;
    }
    return null;
  }
}
