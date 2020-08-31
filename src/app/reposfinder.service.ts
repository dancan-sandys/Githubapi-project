import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs'
import {environment } from '../environments/environment'
import  'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class ReposfinderService {

  constructor(private http: HttpClient) { }

  private Repositories = new BehaviorSubject<any>([]);
                                                        
  getRepositories = this.Repositories.asObservable();

  getRepos(searchName) {
    return this.http.get(`https://api.github.com/users/${searchName}/repos?access_token=${environment.accesstocken}`)
      .subscribe((responses: any) => this.Repositories.next(responses))
  }




}
