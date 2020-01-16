export class Article {
  title: string = '';
  subtitle: string = '';
  content:string = '';
  image: string = '';
  link: string = '';
  active: boolean = true;
  colors: Colors;
}

export class Colors {
  backgroundColor:string = '';  
  fontColor:string = '';
  linkColor:string = '';
  titleColor: string = '';
}