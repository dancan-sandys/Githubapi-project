import { Component, OnInit } from '@angular/core';
import { ProfileFinderService } from '../profile-finder.service';
import { HttpClient } from '@angular/common/http'
import { ReposfinderService } from '../reposfinder.service'
import { UserProfile } from '../user-profile'
import { Repos } from '../repos'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  public profiles: any = {};

  public repos: any;

  Profiles: UserProfile = (this.profiles.login, this.profiles.name, this.profiles.company, this.profiles.email, this.profiles.location, this.profiles.created_at, this.profiles.email)

  Repos: Repos = (this.repos);

  constructor(private githubProfiles: ProfileFinderService, private http: HttpClient, private githubRepos: ReposfinderService) { 
  }


 

  ngOnInit() {
    this.githubProfiles.getProfile.subscribe((response) => {this.profiles = response})

  }

}
