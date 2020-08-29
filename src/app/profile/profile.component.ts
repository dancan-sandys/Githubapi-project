import { Component, OnInit } from '@angular/core';
import { ProfileFinderService } from '../profile-finder.service';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private githubProfiles: ProfileFinderService, private http: HttpClient) { }

  public profiles: any = {};

  public repos: any;

  ngOnInit() {

    this.githubProfiles.getGithub().subscribe((response: {}) => { console.log(response); this.profiles = response })

   

  }

}
