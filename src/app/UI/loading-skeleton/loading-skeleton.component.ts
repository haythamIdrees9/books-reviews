import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading-skeleton[height][width]',
  templateUrl: './loading-skeleton.component.html',
  styleUrls: ['./loading-skeleton.component.scss'],
  standalone:true,
  imports:[CommonModule]

})
export class LoadingSkeletonComponent {
  @Input('width') width!:string; // please provide it with its units
  @Input('height') height!:string; // please provide it with its units
}
