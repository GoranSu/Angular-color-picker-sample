import { Component } from '@angular/core';
import { Article } from './article';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  public showArticles: boolean = false;
  public showTabs: boolean = false;
  public articles: Article[] = [
    { title: 'Article One', subtitle: 'Article One subtitle', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. IPraesent libero. Sed cursus ante dapibus diam. Sed nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. IPraesent libero. Sed cursus ante dapibus diam. Sed nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. IPraesent libero. Sed cursus ante dapibus diam. Sed nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. IPraesent libero. Sed cursus ante dapibus diam. Sed nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. IPraesent libero. Sed cursus ante dapibus diam. Sed nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. IPraesent libero. Sed cursus ante dapibus diam. Sed nisi.', image: 'https://images.unsplash.com/photo-1499084732479-de2c02d45fcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1778&q=80', link: 'www.google.com', active: true, backgroundColor: '#fff',
        fontColor: '#ff0000',
        linkColor: '#4b4fce',
        titleColor: '#96C582'
        },
    { title: 'Article Two', subtitle: 'Article Two subtitle' ,content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. IPraesent libero. Sed cursus ante dapibus diam. Sed nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. IPraesent libero. Sed cursus ante dapibus diam. Sed nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. IPraesent libero. Sed cursus ante dapibus diam. Sed nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. IPraesent libero. Sed cursus ante dapibus diam. Sed nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. IPraesent libero. Sed cursus ante dapibus diam. Sed nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. IPraesent libero. Sed cursus ante dapibus diam. Sed nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. IPraesent libero. Sed cursus ante dapibus diam. Sed nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. IPraesent libero. Sed cursus ante dapibus diam. Sed nisi.', image: 'https://images.unsplash.com/photo-1487297977649-04b1dc408d93?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', link: 'www.google.com', active: true, backgroundColor: '#fff',
        fontColor: '#ff0000',
        linkColor: '#4b4fce',
        titleColor: '#96C582'},
    { title: 'Article Three', subtitle: 'Article Three subtitle', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. IPraesent libero. Sed cursus ante dapibus diam. Sed nisi.', image: 'https://www.gstatic.com/webp/gallery3/1.png', link: 'www.google.com', active: false,
    backgroundColor: '#fff',
        fontColor: '#ff0000',
        linkColor: '#4b4fce',
        titleColor: '#96C582'},
    { title: 'Article Four', subtitle: 'Article Four subtitle', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. IPraesent libero. Sed cursus ante dapibus diam. Sed nisi.', image: 'https://www.gstatic.com/webp/gallery3/1.png', link: 'www.google.com', active: true, 
    backgroundColor: '#fff',
        fontColor: '#ff0000',
        linkColor: '#4b4fce'},
    { title: 'Article Five', subtitle: 'Article Five subtitle', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. IPraesent libero. Sed cursus ante dapibus diam. Sed nisi.', image: 'https://www.gstatic.com/webp/gallery3/1.png', link: 'www.google.com', active: false, backgroundColor: '#fff',
        fontColor: '#ff0000',
        linkColor: '#4b4fce',
        titleColor: '#96C582'
    }
  ];

  constructor() {}

  toggleArticles() {
      this.showArticles = !this.showArticles;
  }

  toggleTabs() {
    this.showTabs = !this.showTabs;
  }
}
