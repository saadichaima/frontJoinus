import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRestaurationComponent } from './edit-restauration.component';

describe('EditRestaurationComponent', () => {
  let component: EditRestaurationComponent;
  let fixture: ComponentFixture<EditRestaurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRestaurationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditRestaurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
