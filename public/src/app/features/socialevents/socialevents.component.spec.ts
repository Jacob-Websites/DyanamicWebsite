import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialeventsComponent } from './socialevents.component';

describe('SocialeventsComponent', () => {
  let component: SocialeventsComponent;
  let fixture: ComponentFixture<SocialeventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SocialeventsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialeventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
