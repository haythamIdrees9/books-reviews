import { Component, OnInit } from '@angular/core';
import { FooterService, sectionType } from './footer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent  {
  sections:Array<sectionType> = [];

  constructor(private footerService: FooterService) {
    this.footerService.sections.subscribe(sections=>{
      this.sections = sections;
    })
  }
}
