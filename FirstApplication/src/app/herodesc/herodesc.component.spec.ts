import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerodescComponent } from './herodesc.component';

describe('HerodescComponent', () => {
  let component: HerodescComponent;
  let fixture: ComponentFixture<HerodescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HerodescComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HerodescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
