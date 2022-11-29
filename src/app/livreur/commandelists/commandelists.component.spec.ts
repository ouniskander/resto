import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandelistsComponent } from './commandelists.component';

describe('CommandelistsComponent', () => {
  let component: CommandelistsComponent;
  let fixture: ComponentFixture<CommandelistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandelistsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandelistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
