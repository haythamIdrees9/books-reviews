import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Observable, defer, take, timer } from 'rxjs';

@Component({
  selector: 'app-carousel[category]',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  standalone:true,
  imports:[CommonModule]
})
export class CarouselComponent {
  @ViewChild('lastItem') lastItem!:ElementRef;
  @ViewChild('firstItem') firstItem!:ElementRef;
  
  @Input('category') category!:string;
  carouselDummyData = Array(8).fill(0).map((item,index)=> ({imageSrc:'assets/images/the-fever-tree.jpeg', title:'title', author:'author',reviewedBy:'reviewedBy'+index}))

  selectedIndex = 0;
  isButtonsDisabled = false;
  userClickTime!:number;
  debounceTime = 500;
  isWaitingAnimation = false;
  isTransitionEnabled = true;
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


    // testing not completed yet TODO: factorize it
    if(this.isElementFullyVisible(this.lastItem)){
      this.isTransitionEnabled = false;
      setTimeout(()=>{
        this.selectedIndex--;
        let deleted = this.carouselDummyData.shift();
        if(deleted){
          this.carouselDummyData.push(deleted);
        }
      },10)

      setTimeout(()=>{
        this.isTransitionEnabled = true;
        this.selectedIndex++;
      },50)
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
    // testing not completed yet TODO: factorize it
    if(this.isElementFullyVisible(this.firstItem)){
      this.isTransitionEnabled = false;
      setTimeout(()=>{
        this.selectedIndex++;
        let deleted = this.carouselDummyData.pop();
        if(deleted){
          this.carouselDummyData.unshift(deleted);
        }
      },10)

      setTimeout(()=>{
        this.isTransitionEnabled = true;
        this.selectedIndex--;
      },50)
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
  
}
