import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {InputText} from 'primeng/inputtext';
import {Produto} from '../../class/produto';
import {Select} from 'primeng/select';
import {FloatLabel} from 'primeng/floatlabel';
import {Card} from 'primeng/card';

@Component({
  selector: 'app-produto-cadastro',
  imports: [
    FormsModule,
    InputText,
    Select,
    FloatLabel,
    ReactiveFormsModule,
    Card
  ],
  templateUrl: './produto-cadastro.component.html',
  styleUrl: './produto-cadastro.component.scss'
})
export class ProdutoCadastroComponent {
  produto: Produto = new Produto();
  situacaoEnum: string[] = ['Ativo', 'Inativo'];

  produtoForm: FormGroup = new FormGroup({
    codigo: new FormControl(''),
    descricao: new FormControl(''),
    situacao: new FormControl(''),
  });

  constructor(private formBuilder: FormBuilder) {}

  onSubmit() {

  }
}
