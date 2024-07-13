import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHtmlComponent } from './home.html.component';

describe('HomeHtmlComponent', () => {
  let component: HomeHtmlComponent;
  let fixture: ComponentFixture<HomeHtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeHtmlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
