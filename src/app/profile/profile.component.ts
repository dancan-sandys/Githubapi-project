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

  constructor(private githubProfiles: ProfileFinderService, private http: HttpClient, private githubRepos: ReposfinderService) { }

  public profiles: any = {};

  public repos: any;

  Profiles:UserProfile = (this.profiles.login, this.profiles.name, this.profiles.company, this.profiles.email, this.profiles.location, this.profiles.created_at, this.profiles.email)

  Repos:Repos = (this.repos);

  search(searchterm) {
    if (searchterm != '') {
      this.githubProfiles.getGithub(searchterm).subscribe((response: {}) => { console.log(response); this.profiles = response; })

      this.githubRepos.getRepos(searchterm).subscribe((response: {}) => { this.repos = response; console.log(response) })
     
      console.log('Any', this.Profiles) 
     
    }

    else{
      this.githubProfiles.getGithub(`dancan-sandys`).subscribe((response: {}) => { console.log(response); this.profiles = response })

      this.githubRepos.getRepos(`dancan-sandys`).subscribe((response: {}) => { this.repos = response; console.log(response) })

      
    }
  }

  ngOnInit() {
    
  }

}
