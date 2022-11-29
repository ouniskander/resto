import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderlivComponent } from './headerliv.component';

describe('HeaderlivComponent', () => {
  let component: HeaderlivComponent;
  let fixture: ComponentFixture<HeaderlivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderlivComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderlivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
