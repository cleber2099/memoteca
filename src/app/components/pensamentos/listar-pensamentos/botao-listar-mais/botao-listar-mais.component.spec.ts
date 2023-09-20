import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoListarMaisComponent } from './botao-listar-mais.component';

describe('BotaoListarMaisComponent', () => {
  let component: BotaoListarMaisComponent;
  let fixture: ComponentFixture<BotaoListarMaisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotaoListarMaisComponent]
    });
    fixture = TestBed.createComponent(BotaoListarMaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
