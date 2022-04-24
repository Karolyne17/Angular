import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/interfaces/article';
import { User } from 'src/interfaces/user';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  articles: Array<Article> = [];
  idAcharger: number = 0;
  user: User = {
    pseudo: '',
    email: '',
    password: '',
    avatar: '',
    id: -1
  };
  auteurArticles: Array<User> = [];

  constructor(private loginService:LoginService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let that = this;
    this.loginService.getArticles().subscribe({
      next(ret) {
        console.log(ret);
        that.articles = ret;
        that.loginService.getUsers().subscribe({
          next(autArt) {
            console.log(autArt);
            for (ret of that.articles){
              let index = autArt.findIndex((auteurArticle:User) => auteurArticle.id === ret.id)
              that.auteurArticles.push(autArt[index]);
            }
          },
          error(err){
            console.log(err);
          }
        });
      },
      error(err){
        console.log(err);
      }
    });

  /*  this.loginService.getUser(this.idAcharger).subscribe({
      next(ret) {
        console.log(ret);
        that.user = ret;
      },
      error(err){
        console.log(err);
      }
    });*/

  }

}
