import { Component, OnInit } from '@angular/core';
import { ProfileFinderService } from '../profile-finder.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private githubProfiles: ProfileFinderService) { }

  public profiles: any = {};

  ngOnInit(){

    this.githubProfiles.getGithub().subscribe((response) => {console.log(response) ; this.profiles = response })

    

  }

}
