import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResidenceComponent } from './residence/residence.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DetailprodComponent } from './detailprod/detailprod.component';
import { LoginComponent } from './login/login.component';
import { AddProductComponent } from './add-product/add-product.component';
import { HttpClientModule} from '@angular/common/http';
import { ResidenceDetailComponent } from './residence-detail/residence-detail.component';
import { AddResidenceComponent } from './add-residence/add-residence.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResidenceComponent,
    NavbarComponent,
    NotfoundComponent,
    DetailprodComponent,
    LoginComponent,
    AddProductComponent,
    ResidenceDetailComponent,
    AddResidenceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,    
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
