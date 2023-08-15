import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CategoryService } from 'src/app/services/category.service';

export type sectionType = {
  title: string;
  links: {
    path: string;
    label: string;
    isHref?: boolean;
    column?:number;
    row?:number
  }[];
}

@Injectable({
  providedIn: 'root'
})
export class FooterService {
  private $sections: Array<sectionType> = [
    {
      title: 'NAVIGATION', links: [
        { path: '/home', label: 'Home'  },
        { path: '/books', label: 'Books'  },
        { path: '/reviews', label: 'Reviews'  },
        { path: '/news', label: 'News' },
        { path: '/contact', label: 'Contact' }]
    },
    {
      title: 'CATEGORIES', links: [],
    },
    {
      title: 'FOLLOW US', links: [
        { path: 'https://www.facebook.com/haytham.idrees.73/', label: 'Facebook', isHref: true },
        { path: 'https://twitter.com/haytham_idrees', label: 'twitter', isHref: true },
        { path: 'https://www.facebook.com/haytham.idrees.73/', label: 'Rss', isHref: true } // no link exit for Really Simple Syndication
      ]
    }
  ];

  private sectionsStream = new BehaviorSubject(this.$sections)
  constructor(private categoryService: CategoryService) {
    this.getCategories();
  }

  get sections() {
    return this.sectionsStream.asObservable()
  }

  getCategories() {
    this.categoryService.getCategories().subscribe(

      (categories) => {
        this.$sections[1].links = Object.values(categories);
        this.sectionsStream.next(this.$sections);
      },
      (error) => {
        console.log('error', error);

      }

    )
  }
}
