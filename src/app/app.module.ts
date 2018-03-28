import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { Routes,RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NodeService } from './services/node.service';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { HomeComponent } from './component/home/home.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { CardsComponent } from './component/cards/cards.component';

const appRoutes : Routes = [
  { path: 'login', component:LoginComponent},
  { path: '' , redirectTo: '/login', pathMatch: 'full'},
  { path:'signup', component:SignupComponent},
  { path:'home', component:HomeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    CardsComponent
    
  ],
  imports: [
    BrowserModule,
    PdfViewerModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
),
  ],
  providers: [NodeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
