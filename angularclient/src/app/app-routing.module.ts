import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostAddComponent} from "./post/post-add/post-add.component";
import {RegistrationComponent} from "./authentication/registration/registration.component";
import {ProfileComponent} from "./profile/profile.component";
import {LoginComponent} from "./authentication/login/login.component";
import {PostSearchListComponent} from "./post/post-search/post-search-list.component";
import {AuthGuard} from "./authentication/auth.guard";
import {LogoutComponent} from "./authentication/logout/logout.component";

export const routes: Routes = [
  {path: 'posts', component: PostSearchListComponent, canActivate: [AuthGuard]},
  {path: 'post-add', component: PostAddComponent, canActivate: [AuthGuard]},
  {path: 'registration', component: RegistrationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'profile/:username', component: ProfileComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
