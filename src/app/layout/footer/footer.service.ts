import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { CategoryService } from 'src/app/services/category.service';

export type sectionType = {
  title: string;
  colsSpan:number,
  links: {
    path: string;
    label: string;
    isHref?: boolean;
    column?:number;
    row?:number;
    selected?:boolean;
  }[];
}


@Injectable({
  providedIn: 'root'
})
export class FooterService {
  private $sections: Array<sectionType> = [
    {
      title: 'NAVIGATION',colsSpan:1, links: [
        { path: '/home', label: 'Home'  },
        { path: '/books', label: 'Books', selected:true  },
        { path: '/reviews', label: 'Reviews'  },
        { path: '/news', label: 'News' },
        { path: '/contact', label: 'Contact' }]
    },
    {
      title: 'CATEGORIES',colsSpan:3, links: [],
    },
    {
      title: 'FOLLOW US',colsSpan:1, links: [
        { path: 'https://www.facebook.com/haytham.idrees.73/', label: 'Facebook', isHref: true },
        { path: 'https://twitter.com/haytham_idrees', label: 'twitter', isHref: true },
        { path: 'https://rss.com/', label: 'Rss', isHref: true } // no link exit for Really Simple Syndication
      ]
    }
  ];

  private sectionsStream = new Subject<Array<sectionType>>()
  constructor(private categoryService: CategoryService) {
    this.getCategories();
  }

  get sections() {
    return this.sectionsStream.asObservable()
  }

  getCategories() {
    this.categoryService.getCategories().subscribe(

      (categories) => {
        this.$sections[1].links = Object.values(categories).map(category => ({path:category.path,label:category.label}));
        this.sectionsStream.next(this.$sections);
      },
      (error) => {
        console.error('error', error);
        this.$sections.splice(1,1)
        this.sectionsStream.next(this.$sections);
      }

    )
  }
}
