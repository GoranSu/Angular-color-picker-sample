import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'
import { Article } from '../article';


@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.css']
})
export class CardComponentComponent implements OnInit {
  defaultBackground: string = '#FFF';
  defaultFont: string = '#000105';
  defaultLink: string = '#000105';
  defaultTitle: string = '#000105';
  @Input() article: Article;
  showCustomization: boolean = false;
  constructor() {
  }

  ngOnInit() {}

  openLink(link: string) {
    console.log(link)
  }
  toggleCustomization() {
    this.showCustomization = !this.showCustomization; 
  }
  setColor(card: any, type: string, color: string) {
      console.log(card, type, color)
      switch (type) {
        case 'title':
          card.colors.titleColor = color;
          break;
        case 'background':
          card.colors.backgroundColor = color;
          break;
        case 'font':
          card.colors.fontColor = color;
          break;
        case 'link':
          card.colors.linkColor = color;
          break;
        default:
          break;
      }
   }
  resetToDefault(article: Article) {
    console.log(article)
    article.colors.backgroundColor = this.defaultBackground;
    article.colors.fontColor = this.defaultFont;
    article.colors.linkColor = this.defaultLink;
    article.color.titleColor = this.defaultTitle;
    this.showCustomization = false;
  }
}