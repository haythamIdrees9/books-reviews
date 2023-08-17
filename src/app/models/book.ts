export interface bookModel {
    imageSource: string;
    title: string;
    author: string;
    reviewedBy: string
}

export interface CategoryBooks {
    title: string;
    items: bookModel[];
  }
