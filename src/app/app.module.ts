import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ClarityModule } from 'clarity-angular';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { K8sService } from './services/k8s.service';
import { AppRoutingModule } from './/app-routing.module';
import { HeaderComponent } from './header/header.component';
import { PodsComponent } from './pods/pods.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    PodsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ClarityModule.forRoot(),
  ],
  providers: [K8sService],
  bootstrap: [AppComponent]
})
export class AppModule { }
