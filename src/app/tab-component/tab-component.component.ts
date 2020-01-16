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
    article.colors.titleColor = this.defaultTitle;
    article.colors.backgroundColor = this.defaultBackground;
    article.colors.fontColor = this.defaultFont;
    this.showCustomization = false;
   }
}