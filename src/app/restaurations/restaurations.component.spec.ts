import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurationsComponent } from './restaurations.component';

describe('RestaurationsComponent', () => {
  let component: RestaurationsComponent;
  let fixture: ComponentFixture<RestaurationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
