import { Component, OnInit } from '@angular/core';
import { Produto } from './produto.model';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  produtos: Produto[] = [
  { 
    id: "1",
    nome: "Produto Genérico",
    img: "../../assets/images/caixa-remedio.jpg",
    descricao: "350ml",
    temEstoque: true
  },
  { 
    id: "2",
    nome: "Produto Genérico",
    img: "../../assets/images/caixa-remedio.jpg",
    descricao: "350ml",
    temEstoque: true
  },
  { 
    id: "3",
    nome: "Produto Genérico",
    img: "../../assets/images/caixa-remedio.jpg",
    descricao: "350ml",
    temEstoque: true
  }
  ]
}
