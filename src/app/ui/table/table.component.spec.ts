import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableWorkersComponent } from './table.component';

describe('TableWorkersComponent', () => {
  let component: TableWorkersComponent;
  let fixture: ComponentFixture<TableWorkersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableWorkersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableWorkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
