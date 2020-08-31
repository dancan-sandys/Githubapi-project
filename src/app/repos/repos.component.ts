import { Component, OnInit } from '@angular/core';
import { ReposfinderService } from  '../reposfinder.service'

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {

  repos:any;

  constructor( private githubRepos: ReposfinderService) { 
  }



  ngOnInit() {
    this.githubRepos.getRepositories.subscribe((response:any) => this.repos = response, (error) => console.log(`An error occured`))
  }

}
