import { Component } from '@angular/core';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent {

  items = Array(8).fill(0).map((item,index)=> ({imageSrc:'assets/images/the-fever-tree.jpeg', title:'Lorem ipsum dolor sit amet, consectetur adipiscing elit', author:'author',reviewedBy:'By ADAM SMITH REVIEWED BY JESSICA SMITH'+index}))
  items1 = Array(8).fill(0).map((item,index)=> ({imageSrc:'assets/images/the-fever-tree.jpeg', title:'Lorem ipsum dolor sit amet, consectetur adipiscing elit', author:'author',reviewedBy:'By ADAM SMITH REVIEWED BY JESSICA SMITH'+index}))
  items2 = Array(8).fill(0).map((item,index)=> ({imageSrc:'assets/images/the-fever-tree.jpeg', title:'Lorem ipsum dolor sit amet, consectetur adipiscing elit', author:'author',reviewedBy:'By ADAM SMITH REVIEWED BY JESSICA SMITH'+index}))
  items3 = Array(8).fill(0).map((item,index)=> ({imageSrc:'assets/images/the-fever-tree.jpeg', title:'Lorem ipsum dolor sit amet, consectetur adipiscing elit', author:'author',reviewedBy:'By ADAM SMITH REVIEWED BY JESSICA SMITH'+index}))

}
