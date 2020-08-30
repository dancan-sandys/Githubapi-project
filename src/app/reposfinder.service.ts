import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class ReposfinderService {

  constructor(private http: HttpClient) { }

  Repositories = new BehaviorSubject<any>([]);

  getRepos(searchName) {
    return this.http.get(`https://api.github.com/users/${searchName}/repos?access_token=319b61a8a1b3d50a818d0866fff282ed1be092b4`)
      .subscribe((responses: any) => this.Repositories.next(responses))
  }

  getRepositories() {
    return this.Repositories.asObservable();
  }

}
