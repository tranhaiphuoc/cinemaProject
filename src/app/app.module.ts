import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import { UserAccountComponent } from './components/user-account/user-account.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateAddComponent } from './modules/movie/update-add/update-add.component';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    LogInComponent,
    RegisterComponent,
    UserAccountComponent,
    UpdateAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
