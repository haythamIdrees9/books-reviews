import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @ViewChild('search_field') searchField!:ElementRef ; 
  isOpened: boolean = false;

  toggleOpenState(event: Event) {
    event.stopPropagation()
    this.isOpened = !this.isOpened;
    if(this.isOpened && this.searchField?.nativeElement){
      setTimeout(()=>{
        this.searchField.nativeElement.focus()
      })
    }
  }


  @HostListener('document:click')
  onKeydownHandler() {
    this.isOpened = false;
  }
}
