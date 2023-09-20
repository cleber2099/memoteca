import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-botao-listar-mais',
  templateUrl: './botao-listar-mais.component.html',
  styleUrls: ['./botao-listar-mais.component.css']
})
export class BotaoListarMaisComponent implements OnInit {

  @Input() haMaisPensamentos: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
