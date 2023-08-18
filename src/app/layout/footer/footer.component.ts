import { Component, OnDestroy, OnInit } from '@angular/core';
import { FooterService, sectionType } from './footer.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy  {
  sections:Array<sectionType> = [];

  streamSubscription = new Subscription();
  constructor(private footerService: FooterService) {

  }
  ngOnDestroy(): void {
    this.streamSubscription.unsubscribe();
  }
  ngOnInit(): void {
    this.streamSubscription = this.footerService.sections.subscribe(sections=>{
      this.sections = sections;
    })
  }
}
