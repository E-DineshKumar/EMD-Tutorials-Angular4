import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
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
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';
import { ViewComponent } from './component/admin/view/view.component';
import { CreatenewComponent } from './component/admin/createnew/createnew.component';
import { AdminnavbarComponent } from './component/admin/adminnavbar/adminnavbar.component';
import { UpdateComponent } from './component/admin/update/update.component';
import { LMarkdownEditorModule } from 'ngx-markdown-editor';
import { ReadComponent } from './component/admin/read/read.component';
import { ReadcourseComponent } from './component/readcourse/readcourse.component';
import { ChatComponent } from './component/chat/chat.component';
import { ChatroomsComponent } from './component/chatrooms/chatrooms.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent },
  { path: 'admin-allcourses', component: ViewComponent },
  { path: 'admin-createnew', component: CreatenewComponent },
  { path: 'admin-update', component: UpdateComponent },
  { path: 'admin-read', component: ReadComponent },
  { path: 'read-course', component: ReadcourseComponent},
  { path: 'chat', component: ChatComponent},
  { path: 'chatroom', component: ChatroomsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    CardsComponent,
    FileSelectDirective,
    ViewComponent,
    CreatenewComponent,
    AdminnavbarComponent,
    UpdateComponent,
    ReadComponent,
    ReadcourseComponent,
    ChatComponent,
    ChatroomsComponent
  ],
  imports: [
    BrowserModule,
    PdfViewerModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    LMarkdownEditorModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
  ],
  providers: [NodeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
