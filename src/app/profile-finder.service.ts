import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileFinderService {

  constructor( private http: HttpClient) { }


getGithub(searchname){
return this.http.get(`https://api.github.com/users/${searchname}?access_token=319b61a8a1b3d50a818d0866fff282ed1be092b4`)
}




}
