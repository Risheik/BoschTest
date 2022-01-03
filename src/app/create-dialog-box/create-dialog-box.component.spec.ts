import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDialogBoxComponent } from './create-dialog-box.component';

describe('CreateDialogBoxComponent', () => {
  let component: CreateDialogBoxComponent;
  let fixture: ComponentFixture<CreateDialogBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDialogBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
