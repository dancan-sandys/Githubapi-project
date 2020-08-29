import { Component, OnInit } from '@angular/core';
import { ProfileFinderService } from '../profile-finder.service';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private githubProfiles: ProfileFinderService , http : HttpClient) { }

  public profiles: any = {};

  public repos : any;

  ngOnInit(){

    this.githubProfiles.getGithub().subscribe((response:any) => {console.log(response.repos_url) ; this.profiles = response  ; this.repos = this.http.})

  

  }

}
