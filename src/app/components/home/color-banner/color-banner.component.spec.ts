import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorBannerComponent } from './color-banner.component';

describe('ColorBannerComponent', () => {
  let component: ColorBannerComponent;
  let fixture: ComponentFixture<ColorBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ColorBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
