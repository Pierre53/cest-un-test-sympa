import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HapDetailComponent } from './hap-detail.component';

describe('HapDetailComponent', () => {
  let component: HapDetailComponent;
  let fixture: ComponentFixture<HapDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HapDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HapDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
