import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostAddComponent} from "./post/post-add/post-add.component";
import {RegistrationComponent} from "./registration/registration.component";
import {ProfileComponent} from "./profile/profile.component";
import {LoginComponent} from "./login/login.component";
import {PostSearchListComponent} from "./post/post-search/post-search-list.component";

export const routes: Routes = [
  {path: 'posts', component: PostSearchListComponent, data: {title: 'Пости', showInNav: true}},
  {path: 'post-add', component: PostAddComponent, data: {title: 'Додати пост', showInNav: true}},
  {path: 'registration', component: RegistrationComponent, data: {title: 'Реєстрація', showInNav: true}},
  {path: 'login', component: LoginComponent, data: {title: 'Логін', showInNav: true}},
  {path: 'profile', component: ProfileComponent, data: {title: 'Профіль', showInNav: true}},
  {path: 'profile/:username', component: ProfileComponent, data: {showInNav: false}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
