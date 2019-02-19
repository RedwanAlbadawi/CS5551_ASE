import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {routing} from "./app-routing.module";
//import {AppRoutingModule, r} from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NutritionixComponent } from './nutritionix/nutritionix.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {AppGuardGuard} from './app-guard.guard';
import {AuthService} from './auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NutritionixComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    routing,
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'Nutritionix',
        component: NutritionixComponent,
        canActivate: [AppGuardGuard]
      }
    ])
  ],
  providers: [AuthService, AppGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
