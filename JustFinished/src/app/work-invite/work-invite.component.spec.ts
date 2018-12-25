import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkInviteComponent } from './work-invite.component';

describe('WorkInviteComponent', () => {
  let component: WorkInviteComponent;
  let fixture: ComponentFixture<WorkInviteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkInviteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkInviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
