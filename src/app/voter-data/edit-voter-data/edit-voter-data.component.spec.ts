import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVoterDataComponent } from './edit-voter-data.component';

describe('EditVoterDataComponent', () => {
  let component: EditVoterDataComponent;
  let fixture: ComponentFixture<EditVoterDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditVoterDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditVoterDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
