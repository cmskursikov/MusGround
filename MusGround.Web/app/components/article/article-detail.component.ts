import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {ArticleInfo, ArticleInfoService} from '../../../app/services/article/article.service';
import {SideMenuService} from '../../../app/services/shared.service';

@Component({
	providers: [ArticleInfoService],
	templateUrl: '/app/templates/article/article-detail.html'
})
export class ArticleDetailComponent implements OnInit {
	article: ArticleInfo;
	
	constructor(private _routeParams: RouteParams, private _articleInfoService: ArticleInfoService, private sideMenuService: SideMenuService) { }

	ngOnInit() {
		var id: number = +this._routeParams.get('id');
		this.article = this._articleInfoService.getArticleInfo(id);
		this.sideMenuService.emitNavChangeEvent(this.article);
	}
	ngOnDestroy() {
		this.sideMenuService.emitNavChangeEvent(null);
	}
}