import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomMineComponent } from './custom-mine.component';

describe('CustomMineComponent', () => {
  let component: CustomMineComponent;
  let fixture: ComponentFixture<CustomMineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomMineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomMineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
