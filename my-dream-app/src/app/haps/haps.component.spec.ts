import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HAPsComponent } from './haps.component';

describe('HAPsComponent', () => {
  let component: HAPsComponent;
  let fixture: ComponentFixture<HAPsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HAPsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HAPsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
