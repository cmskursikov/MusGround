import {Component, OnInit} from 'angular2/core';
import {RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';
import {ArticleDetailComponent} from './article-detail.component';
import {ArticleInfo, ArticleInfoService} from '../../../app/services/article/article.service';
import {SideMenuService} from '../../../app/services/shared.service';

@Component({
	providers: [ArticleInfoService],
	directives: [ROUTER_DIRECTIVES],
	templateUrl: '/app/templates/article/article-list.html'
})
export class ArticleListComponent implements OnInit {
	articles: ArticleInfo[];
	
	constructor(private _articleInfoService: ArticleInfoService, private sideMenuService: SideMenuService) { }

	ngOnInit() {
		this.articles = this._articleInfoService.getAllArticleInfo();
	}
	setActiveArticle(article) {
		this.sideMenuService.emitNavChangeEvent(article);
	}
}