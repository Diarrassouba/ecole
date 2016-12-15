/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PersonneComponent } from './personne.component';

describe('PersonneComponent', () => {
  let component: PersonneComponent;
  let fixture: ComponentFixture<PersonneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
