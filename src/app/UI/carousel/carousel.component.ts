import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, TemplateRef, ViewChild } from '@angular/core';
import { Observable, take, timer } from 'rxjs';

@Component({
  selector: 'app-carousel[title][items][itemTemplate][theme]',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  standalone:true,
  imports:[CommonModule]
})
export class CarouselComponent {
  @ViewChild('lastItem') lastItem!:ElementRef;
  @ViewChild('firstItem') firstItem!:ElementRef;
  @Input('itemTemplate') itemTemplate!: TemplateRef<any>;
  @Input('title') title!:string;
  @Input('items') items:Array<any> = [];
  @Input('background') background:string = '#282828'
  @Input('theme') theme:string = 'light'
  
  selectedIndex = 0;
  isButtonsDisabled = false;
  userClickTime!:number;
  debounceTime = 500;
  isWaitingAnimation = false;
  isTransitionEnabled = true;
  touchX!:number;
  touchY!:number;
  isDragging = false;
  debounceUserClick() {
    if (!this.isButtonsDisabled) {
      this.isButtonsDisabled = true;
      this.userClickTime = Date.now();
      setTimeout(() => {
        this.isButtonsDisabled = false;
      }, this.debounceTime);
    }
  }

  nextItem(){
    if(this.isWaitingAnimation){
      return;
    }

    if(this.isButtonsDisabled){
      this.isWaitingAnimation = true;
      this.waitForAnimationEnd().subscribe(()=>{
        this.isWaitingAnimation = false;
        this.nextItem();
      })
      return;
    }

    this.debounceUserClick();
    this.handleNextItem();

  }

  private handleNextItem(){
    if(this.isElementFullyVisible(this.lastItem)){
      this.isTransitionEnabled = false;
      setTimeout(() => {
        this.selectedIndex--;
        let deleted = this.items.shift();
        if (deleted) {
          this.items.push(deleted);
        }
        setTimeout(() => {
          this.isTransitionEnabled = true;
          this.selectedIndex++;
        }, 20);
      }, 10);
    } else {
      this.selectedIndex++;
    }
  }

  previousItem(){
    if(this.isWaitingAnimation){
      return;
    }
    
    if(this.isButtonsDisabled){
      this.isWaitingAnimation = true;
      this.waitForAnimationEnd().subscribe(()=>{
        this.isWaitingAnimation = false;
        this.previousItem();
      })
      return;
    }

    this.debounceUserClick();
    this.handlePreviousItem();
  }

  private handlePreviousItem(){
    if(this.isElementFullyVisible(this.firstItem)){
      this.isTransitionEnabled = false;
      setTimeout(()=>{
        this.selectedIndex++;
        let deleted = this.items.pop();
        if(deleted){
          this.items.unshift(deleted);
        }
        
        setTimeout(()=>{
          this.isTransitionEnabled = true;
          this.selectedIndex--;
        },20)
      },10)
    } else {
      this.selectedIndex--;
    }
  }

   waitForAnimationEnd(): Observable<0> {
    const current = Date.now();
    const delay = Math.max(0, this.debounceTime - (current - this.userClickTime));
    return timer(delay).pipe(take(1));
  }

  isElementFullyVisible(element:ElementRef) {
    if(!element?.nativeElement){
      return false;
    }
    const rect = element.nativeElement.getBoundingClientRect();
    const windowWidth = window.innerWidth || document.documentElement.clientWidth;
  
    return (
      rect.left >= 0 &&
      rect.right <= windowWidth
    );
  }

  onTouchStart(event:TouchEvent){
    this.touchX = event.touches[0].clientX;
    this.touchY = event.touches[0].clientY;
    this.isDragging = true;
  }


  onTouchMove(event:TouchEvent){
    if (!this.isDragging){
      return;
    } 
    const currentY = event.touches[0].clientY;
    const deltaY = Math.abs(currentY - this.touchY);
    if(deltaY > 50){
      this.isDragging = false;
    }

    event.preventDefault();
    const currentX = event.touches[0].clientX;
    const deltaX = currentX - this.touchX;
    console.log('deltaX',deltaX);
    
    if(deltaX > 50){
      this.onTouchEnd();
      this.previousItem();
    } else if(deltaX < -50){
      this.onTouchEnd();
      this.nextItem();
    } 
  }

  onTouchEnd(){
    this.touchX = 0;
    this.touchY = 0;
    this.isDragging = false;
  }

  
  
}
