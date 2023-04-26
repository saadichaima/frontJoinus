import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHebergementComponent } from './list-hebergement.component';

describe('ListHebergementComponent', () => {
  let component: ListHebergementComponent;
  let fixture: ComponentFixture<ListHebergementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListHebergementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListHebergementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
