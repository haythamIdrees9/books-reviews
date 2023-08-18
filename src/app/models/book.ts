export interface CategoryBookModel {
    imageSource: string;
    title: string;
    author: string;
    reviewedBy: string
}

export interface CategoryBooks {
    title: string;
    items: CategoryBookModel[];
    background:string;
    theme:string;
  }

  export interface BookModel{
    id:string;
    image:string;
    title:string;
    author:string;
    reviewedBy:string;
    publishedOn:string;
    description:string;
  }
