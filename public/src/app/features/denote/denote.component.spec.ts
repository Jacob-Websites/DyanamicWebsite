import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DenoteComponent } from './denote.component';

describe('DenoteComponent', () => {
  let component: DenoteComponent;
  let fixture: ComponentFixture<DenoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DenoteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DenoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
