import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
  standalone:true,
  imports:[CommonModule]
})
export class RatingComponent {
  @Output('onRate') onRate = new EventEmitter();
  hoveredPercent: number = 0;
  isRateSubmitted: boolean = false;
  rateItem(event:MouseEvent){
    this.calculatePercent(event)
    const starsRate = this.hoveredPercent / 20;    
    this.onRate.emit(starsRate.toFixed(1));
    this.isRateSubmitted = true;
  }

  calculateHoveredPercent(event: MouseEvent) {
    if(this.isRateSubmitted){
      return;
    }
    this.calculatePercent(event)
  }

  private calculatePercent(event: MouseEvent){
    const container = event.target as HTMLElement;
    const containerWidth = container.offsetWidth;
    const mouseX = event.clientX - container.getBoundingClientRect().left;

    this.hoveredPercent = (mouseX / containerWidth) * 100;
  }
  onMouseLeave() {
    if(this.isRateSubmitted){
      return;
    }
    this.hoveredPercent = 0;
  }
}
