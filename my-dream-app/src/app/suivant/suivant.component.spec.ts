import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuivantComponent } from './suivant.component';

describe('SuivantComponent', () => {
  let component: SuivantComponent;
  let fixture: ComponentFixture<SuivantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuivantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuivantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
