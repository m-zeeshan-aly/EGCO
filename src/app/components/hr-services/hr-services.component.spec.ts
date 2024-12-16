import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrServicesComponent } from './hr-services.component';

describe('HrServicesComponent', () => {
  let component: HrServicesComponent;
  let fixture: ComponentFixture<HrServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HrServicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HrServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
