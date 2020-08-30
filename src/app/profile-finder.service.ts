import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class ProfileFinderService {

  constructor(private http: HttpClient) { }

  private Profiles = new BehaviorSubject<any>([]);
  
  getProfile = this.Profiles.asObservable();

  getGithub(searchName) {
    return this.http.get(`https://api.github.com/users/${searchName}?access_token=319b61a8a1b3d50a818d0866fff282ed1be092b4`)
      .subscribe((responses:any) => this.Profiles.next(responses))
  }




}
