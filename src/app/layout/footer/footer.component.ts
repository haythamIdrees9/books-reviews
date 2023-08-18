import { Component, OnDestroy, OnInit } from '@angular/core';
import { FooterService, sectionType } from './footer.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy {
  sections: Array<sectionType> = [];
  loadingSkeleton = [
    { title: "NAVIGATION", colsSpan: 1, links: Array(5).fill(true) },
    { title: "CATEGORIES", colsSpan: 3, links: Array(23).fill(true) },
    { title: "FOLLOW US", colsSpan: 1, links: Array(3).fill(true) }
  ];
  streamSubscription = new Subscription();
  constructor(private footerService: FooterService) {

  }
  ngOnInit(): void {
    this.streamSubscription = this.footerService.sections.subscribe(sections => {
      this.sections = sections;
    })
  }

  ngOnDestroy(): void {
    this.streamSubscription.unsubscribe();
  }
}
