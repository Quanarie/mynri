import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {PostComponent} from './post/post.component';
import {PostSearchResultsComponent} from './post/post-search/post-search-results.component';
import {PostAddComponent} from './post/post-add/post-add.component';
import {RegistrationComponent} from './registration/registration.component';
import {ProfileComponent} from './profile/profile.component';
import {LoginComponent} from './login/login.component';
import {NgSelectModule} from "@ng-select/ng-select";
import { PostSearchParamsComponent } from './post/post-search/post-search-params.component';
import { PostSearchListComponent } from './post/post-search/post-search-list.component';
import { PostValidateFieldComponent } from './post/post-add/post-validate-field/post-validate-field.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostSearchResultsComponent,
    PostAddComponent,
    RegistrationComponent,
    ProfileComponent,
    LoginComponent,
    PostSearchParamsComponent,
    PostSearchListComponent,
    PostValidateFieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
