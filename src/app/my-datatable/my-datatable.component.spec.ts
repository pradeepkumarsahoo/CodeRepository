
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDatatableComponent } from './my-datatable.component';

describe('MyDatatableComponent', () => {
  let component: MyDatatableComponent;
  let fixture: ComponentFixture<MyDatatableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDatatableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
