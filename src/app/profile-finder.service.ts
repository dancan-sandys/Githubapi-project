import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs'
import {environment } from '../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class ProfileFinderService {

  constructor(private http: HttpClient) { }

  private Profiles = new BehaviorSubject<any>([]);
  
  getProfile = this.Profiles.asObservable();

  getGithub(searchName) {
    return this.http.get(`https://api.github.com/users/${searchName}?access_token=${environment.accesstocken}`)
      .subscribe((responses:any) => this.Profiles.next(responses))
  }




}
