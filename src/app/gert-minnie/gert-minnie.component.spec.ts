import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GertMinnieComponent } from './gert-minnie.component';

describe('GertMinnieComponent', () => {
  let component: GertMinnieComponent;
  let fixture: ComponentFixture<GertMinnieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GertMinnieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GertMinnieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
