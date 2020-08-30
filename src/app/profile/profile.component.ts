import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProfileFinderService } from '../profile-finder.service';
import { Subscription } from 'rxjs';
import {TimeCountPipe } from '../time-count.pipe'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  profiles: any;

  constructor(private findProfile: ProfileFinderService) {


  }

  ngOnInit() {

    this.subscription = this.findProfile.getProfile.subscribe((response) => { this.profiles = response; console.log(response); console.log(`Hello`, this.profiles) })

  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}