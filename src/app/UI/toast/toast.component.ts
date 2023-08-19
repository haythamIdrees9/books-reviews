import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  standalone:true
})
export class ToastComponent implements OnInit {
  @Input('timeout') timeout!:number;
  status = 'success' // :TODO add other types 
  isFinished!:boolean;
  ngOnInit(): void {
    if(this.timeout){
      setTimeout(()=>{
        this.isFinished = true;
      },this.timeout)
    }
  }
}
