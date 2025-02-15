import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailprodComponent } from './detailprod.component';

describe('DetailprodComponent', () => {
  let component: DetailprodComponent;
  let fixture: ComponentFixture<DetailprodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailprodComponent]
    });
    fixture = TestBed.createComponent(DetailprodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
