import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Article } from 'src/interfaces/article';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {

  articleAddForm: FormGroup;

  constructor(private formBuilder:FormBuilder, private loginService:LoginService, private router:Router) { 
    this.articleAddForm = this.formBuilder.group({
      titre: "" as string,
      contenu: "" as string
    })
  }

  validFormAddArticle() {
    console.log(this.articleAddForm.value);
    let articleInfo: Article = {
      titre: this.articleAddForm.value.titre,
      contenu: this.articleAddForm.value.contenu,
      id_article: -1,
      id: -1
    };
    this.loginService.addArticle(articleInfo).subscribe(retour => {this.router.navigate(["accueil"]);} );
  }

  ngOnInit(): void {
  }

}
