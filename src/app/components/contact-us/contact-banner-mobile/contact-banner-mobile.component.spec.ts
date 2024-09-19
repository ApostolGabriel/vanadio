import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactBannerMobileComponent } from './contact-banner-mobile.component';

describe('ContactBannerMobileComponent', () => {
  let component: ContactBannerMobileComponent;
  let fixture: ComponentFixture<ContactBannerMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactBannerMobileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactBannerMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
