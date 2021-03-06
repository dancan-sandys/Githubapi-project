import { Component, OnInit } from '@angular/core';
import { ProfileFinderService } from '../profile-finder.service';
import { HttpClient } from '@angular/common/http'
import { ReposfinderService } from '../reposfinder.service'
import { SearchButtonResizingDirective } from '../search-button-resizing.directive'
import { UserProfile } from '../user-profile'
import { Repos } from '../repos'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private githubProfiles: ProfileFinderService, private http: HttpClient, private githubRepos: ReposfinderService) { }

  profiles: any;
  Found:boolean;

  search(searchterm) {

    this.githubProfiles.getGithub(searchterm)
    this.githubRepos.getRepos(searchterm)

  }

  ngOnInit(): void {
    this.githubProfiles.getProfile
      .subscribe((response) => { this.profiles = response; console.log(response); console.log(`Hello`, this.profiles) })

    this.Found = this.githubProfiles.found
  }

}
