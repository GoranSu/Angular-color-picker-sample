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
  @Input() article: Article;
  showCustomization: boolean = false;
  constructor() {
  }

  ngOnInit() {
  }
  openLink(link: string) {
    console.log(link)
  }
  toggleCustomization() {
    this.showCustomization = !this.showCustomization; 
  }
  setColor(card: any, type: string, color: string) {
      console.log(card, type, color)
      switch (type) {
        case 'background':
          card.backgroundColor = color;
          break;
        case 'font':
          card.fontColor = color;
          break;
        case 'link':
          card.linkColor = color;
          break;
        default:
          break;
      }
   }
  resetToDefault(article: Article) {
    console.log(article)
    article.backgroundColor = this.defaultBackground;
    article.fontColor = this.defaultFont;
    article.linkColor = this.defaultLink;
    this.showCustomization = false;
  }
}