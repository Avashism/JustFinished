import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptInvComponent } from './accept-inv.component';

describe('AcceptInvComponent', () => {
  let component: AcceptInvComponent;
  let fixture: ComponentFixture<AcceptInvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptInvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptInvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
