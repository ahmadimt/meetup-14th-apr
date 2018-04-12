export class RssFeed {

  id: string;;
  link: string;
  title: string;
  contents: string;
  authors: string[] 
  updatedDate: Date;
  publishedDate: Date;
  constructor(res:any){
    Object.assign(this,res);
  }
}
