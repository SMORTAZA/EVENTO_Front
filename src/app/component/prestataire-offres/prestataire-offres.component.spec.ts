import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestataireOffresComponent } from './prestataire-offres.component';

describe('PrestataireOffresComponent', () => {
  let component: PrestataireOffresComponent;
  let fixture: ComponentFixture<PrestataireOffresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestataireOffresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestataireOffresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
