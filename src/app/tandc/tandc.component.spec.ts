import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TandcComponent } from './tandc.component';

describe('TandcComponent', () => {
  let component: TandcComponent;
  let fixture: ComponentFixture<TandcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TandcComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TandcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
