import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivateClientComponent } from './activate-client.component';

describe('ActivateClientComponent', () => {
  let component: ActivateClientComponent;
  let fixture: ComponentFixture<ActivateClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivateClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivateClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
