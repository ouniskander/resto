import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginlivreurComponent } from './loginlivreur.component';

describe('LoginlivreurComponent', () => {
  let component: LoginlivreurComponent;
  let fixture: ComponentFixture<LoginlivreurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginlivreurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginlivreurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
