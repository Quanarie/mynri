import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostListComponent} from "./post/post-list/post-list.component";
import {PostAddComponent} from "./post/post-add/post-add.component";
import {RegistrationComponent} from "./registration/registration.component";
import {ProfileComponent} from "./profile/profile.component";
import {LoginComponent} from "./login/login.component";

export const routes: Routes = [
  {path: 'posts', component: PostListComponent, data: {title: 'Пости', showInNav: true}},
  {path: 'post-add', component: PostAddComponent, data: {title: 'Додати пост', showInNav: true}},
  {path: 'registration', component: RegistrationComponent, data: {title: 'Реєстрація', showInNav: true}},
  {path: 'login', component: LoginComponent, data: {title: 'Логін', showInNav: true}},
  {path: 'profile', component: ProfileComponent, data: {title: 'Профіль', showInNav: true}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
