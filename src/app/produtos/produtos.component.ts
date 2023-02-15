import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduto } from '../produtos';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  produtos: IProduto[] | undefined;

  constructor(
    private produtosService: ProdutosService
  ) { }

  ngOnInit(): void {
    this.produtos = this.produtosService.getAll();
  }
}
