import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SubscribeFormComponent } from './subscribe-form/subscribe-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './user-list/user-list.component';
import { DetailComponent } from './detail/detail.component';
import { AccueilComponent } from './accueil/accueil.component';
import { CommentaireComponent } from './commentaire/commentaire.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { AddCommentaireComponent } from './add-commentaire/add-commentaire.component';
import { UpdateProfilComponent } from './update-profil/update-profil.component';
import { UpdateArticleComponent } from './update-article/update-article.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    HeaderComponent,
    FooterComponent,
    SubscribeFormComponent,
    UserListComponent,
    DetailComponent,
    AccueilComponent,
    CommentaireComponent,
    AddArticleComponent,
    AddCommentaireComponent,
    UpdateProfilComponent,
    UpdateArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
