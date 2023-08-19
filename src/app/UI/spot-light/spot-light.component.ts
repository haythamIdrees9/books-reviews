import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnDestroy, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-spot-light[ariaLabel]',
  templateUrl: './spot-light.component.html',
  styleUrls: ['./spot-light.component.scss'],
})
export class SpotLightComponent implements AfterViewInit, OnDestroy {
  @ViewChild('search_field') searchField!:ElementRef;
  @Input('ariaLabel') ariaLabel!:string;
  @Input('placeholder') placeholder!:string;
  @Output('onSearch') onSearch = new EventEmitter()
  enteredText:string = ""
  isSpotLightClosed:boolean = false;

  ngAfterViewInit(): void {
    this.searchField?.nativeElement?.focus();
    const bodyElement = document.getElementById('body');
    if (bodyElement) {
      bodyElement.style.overflow = 'hidden'; 
    }
  }

  hideSpotLightInput(event:Event){
    event.stopPropagation();
    this.search("")
  }

  stopPropagation(event:Event){
    event.stopPropagation();
  }

  search(term = this.enteredText){
    this.isSpotLightClosed = true;
    setTimeout(() => {
      this.onSearch.emit(term);
    }, 200);
  }

  ngOnDestroy(): void {
    const bodyElement = document.getElementById('body');
    if (bodyElement) {
      bodyElement.style.overflow = 'auto'; 
    }
  }
}
