import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../article';

@Component({
  selector: 'app-tab-component',
  templateUrl: './tab-component.component.html',
  styleUrls: ['./tab-component.component.css']
})
export class TabComponentComponent implements OnInit {
  @Input() articles: Article[];
  showCustomization: boolean = false;
  defaultBackground: string = '#FFF';
  defaultFont: string = '#000105';
  defaultTitle: string = '#000105';
  constructor() { }

  ngOnInit() {}

  toggleCustomization() {
    this.showCustomization = !this.showCustomization;
  }
  openLink(link: string) {
    console.log(link)
  }
  setColor(card: any, type: string, color: string) {
      console.log(card, type, color)
      switch (type) {
        case 'title':
          card.titleColor = color;
          break;
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
    article.titleColor = this.defaultTitle;
    article.backgroundColor = this.defaultBackground;
    article.fontColor = this.defaultFont;
    this.showCustomization = false;
   }
}