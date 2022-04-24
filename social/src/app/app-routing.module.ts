import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { SubscribeFormComponent } from './subscribe-form/subscribe-form.component';
import { DetailComponent } from './detail/detail.component';
import { AccueilComponent } from './accueil/accueil.component';
import { CommentaireComponent } from './commentaire/commentaire.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { ConnectGuardGuard } from './connect-guard.guard';
import { UpdateProfilComponent } from './update-profil/update-profil.component';
import { UpdateArticleComponent } from './update-article/update-article.component';

const routes: Routes = [
    { path: "login", component: LoginFormComponent },
    { path: "users", component: UserListComponent, canActivate: [ConnectGuardGuard] },
    { path: "subscribe", component: SubscribeFormComponent },
    { path: "details/:id", component: DetailComponent, canActivate: [ConnectGuardGuard] },
    { path: "accueil", component: AccueilComponent, canActivate: [ConnectGuardGuard] },
    { path: "commentaires/:id", component: CommentaireComponent, canActivate: [ConnectGuardGuard] },
    { path: "add-article", component: AddArticleComponent, canActivate: [ConnectGuardGuard] },
    { path: "update-profil/:id", component: UpdateProfilComponent, canActivate: [ConnectGuardGuard] },
    { path: "update-article/:id", component: UpdateArticleComponent, canActivate: [ConnectGuardGuard] },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
