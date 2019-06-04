import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoketypesComponent } from './poketypes.component';

describe('PoketypesComponent', () => {
  let component: PoketypesComponent;
  let fixture: ComponentFixture<PoketypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoketypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoketypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
