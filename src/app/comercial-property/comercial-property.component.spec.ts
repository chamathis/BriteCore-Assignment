import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComercialPropertyComponent } from './comercial-property.component';

describe('ComercialPropertyComponent', () => {
  let component: ComercialPropertyComponent;
  let fixture: ComponentFixture<ComercialPropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComercialPropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComercialPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
