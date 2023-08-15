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
      this.setGridValues()
    })
  }

  setGridValues(){
    this.sections.forEach((section:sectionType) =>{
        section.links.forEach((link,index) =>{
          link.column = Math.floor(index / 8) + 1
          link.row = (index % 8) + 1;
        })
    })
  }

}
