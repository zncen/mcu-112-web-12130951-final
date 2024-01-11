import { Component, HostBinding, Input } from '@angular/core';
import { ArticlePreviewComponent } from '../article-preview/article-preview.component';
import { ArticleComponent } from '../article/article.component';
import { Article } from '../model/article';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [ArticleComponent, NgFor],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.css',
})
export class ArticleListComponent {
  @HostBinding('class') class = 'article-list';
  @Input({ required: true }) articles!: Article[];
}