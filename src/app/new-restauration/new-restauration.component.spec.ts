import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRestaurationComponent } from './new-restauration.component';

describe('NewRestaurationComponent', () => {
  let component: NewRestaurationComponent;
  let fixture: ComponentFixture<NewRestaurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewRestaurationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewRestaurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
