import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SourcesResultComponent } from './sources-result.component';

describe('SourcesResultComponent', () => {
  let component: SourcesResultComponent;
  let fixture: ComponentFixture<SourcesResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SourcesResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SourcesResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
