import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostPopularCategoriesComponent } from './most-popular-categories.component';

describe('MostPopularCategoriesComponent', () => {
  let component: MostPopularCategoriesComponent;
  let fixture: ComponentFixture<MostPopularCategoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostPopularCategoriesComponent]
    });
    fixture = TestBed.createComponent(MostPopularCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
