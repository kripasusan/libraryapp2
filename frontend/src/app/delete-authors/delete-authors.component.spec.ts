import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAuthorsComponent } from './delete-authors.component';

describe('DeleteAuthorsComponent', () => {
  let component: DeleteAuthorsComponent;
  let fixture: ComponentFixture<DeleteAuthorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteAuthorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAuthorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
