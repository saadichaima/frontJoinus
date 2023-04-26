import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRestaurationComponent } from './list-restauration.component';

describe('ListRestaurationComponent', () => {
  let component: ListRestaurationComponent;
  let fixture: ComponentFixture<ListRestaurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRestaurationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListRestaurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
