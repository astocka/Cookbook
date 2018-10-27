import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeFavComponent } from './recipe-fav.component';

describe('RecipeFavComponent', () => {
  let component: RecipeFavComponent;
  let fixture: ComponentFixture<RecipeFavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeFavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeFavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
