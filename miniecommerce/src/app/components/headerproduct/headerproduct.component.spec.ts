import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderproductComponent } from './headerproduct.component';

describe('HeaderproductComponent', () => {
  let component: HeaderproductComponent;
  let fixture: ComponentFixture<HeaderproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
