import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotLightComponent } from './spot-light.component';

describe('SpotLightComponent', () => {
  let component: SpotLightComponent;
  let fixture: ComponentFixture<SpotLightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpotLightComponent]
    });
    fixture = TestBed.createComponent(SpotLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
