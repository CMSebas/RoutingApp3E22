import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MidllePage } from './midlle.page';

describe('MidllePage', () => {
  let component: MidllePage;
  let fixture: ComponentFixture<MidllePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MidllePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
