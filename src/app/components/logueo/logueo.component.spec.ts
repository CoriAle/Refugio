import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogueoComponent } from './logueo.component';

describe('LogueoComponent', () => {
  let component: LogueoComponent;
  let fixture: ComponentFixture<LogueoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogueoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogueoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
