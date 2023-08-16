import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScreenSizesService {
  sizesMap = {
    xsm: 400,
    sm: 600,
    md: 768,
    xmd: 900,
    lg: 1024,
    xl: 1400,
  }
  constructor() { }

  

}
