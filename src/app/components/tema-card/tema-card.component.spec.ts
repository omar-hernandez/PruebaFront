import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemaCardComponent } from './tema-card.component';

describe('TemaCardComponent', () => {
  let component: TemaCardComponent;
  let fixture: ComponentFixture<TemaCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemaCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
