import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeSubcategoryComponent } from './recipe-subcategory.component';

describe('RecipeSubcategoryComponent', () => {
  let component: RecipeSubcategoryComponent;
  let fixture: ComponentFixture<RecipeSubcategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeSubcategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeSubcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
