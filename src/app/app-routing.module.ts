import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent} from './profile/profile.component'
import { ReposComponent } from './repos/repos.component'
import { ErrorComponent } from './error/error.component';


const routes: Routes = [
{path:'profile', component:ProfileComponent},
{path:'repos', component:ReposComponent},
{path:'', redirectTo:'/profile', pathMatch:"full"},
{path:'**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
