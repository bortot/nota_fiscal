import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {InputText} from 'primeng/inputtext';
import {Produto} from '../../class/produto';
import {Select} from 'primeng/select';
import {FloatLabel} from 'primeng/floatlabel';
import {Card} from 'primeng/card';
import {ProdutoService} from '../../services/produto.service';
import {Button} from 'primeng/button';
import {ActivatedRoute, Router} from '@angular/router';
import {Tooltip} from 'primeng/tooltip';
import {Menubar} from 'primeng/menubar';
import {Divider} from 'primeng/divider';

@Component({
  selector: 'app-produto-cadastro',
  imports: [
    FormsModule,
    InputText,
    Select,
    FloatLabel,
    ReactiveFormsModule,
    Card,
    Button,
    Tooltip,
    Menubar,
    Divider
  ],
  templateUrl: './produto-cadastro.component.html',
  styleUrl: './produto-cadastro.component.scss',
  providers: [ ProdutoService, Router ]
})
export class ProdutoCadastroComponent {
  produtoId?: number = undefined;
  situacaoEnum: string[] = ['ATIVO', 'INATIVO'];

  produtoForm: FormGroup = new FormGroup({
    codigo: new FormControl(''),
    descricao: new FormControl(''),
    situacao: new FormControl('ATIVO'),
  });

  constructor(private produtoService: ProdutoService, private router : Router, private route: ActivatedRoute) {}

  ngOnInit() {
    if (this.route.snapshot.params['id']) {
      this.produtoId = this.route.snapshot.params['id'];

      this.produtoService.findById(this.produtoId!).subscribe(produto => {
        if (!produto) {
          this.router.navigate(['/produto/cadastro']);
          return;
        }

        this.produtoForm.get('codigo')!.setValue(produto.codigo);
        this.produtoForm.get('descricao')!.setValue(produto.descricao);
        this.produtoForm.get('situacao')!.setValue(produto.situacao);
      });
    }
  }

  save() {
    if (this.produtoId) {
      this.update();
      return;
    }

    this.produtoService.save(this.produtoForm.value).subscribe(response => {
      this.router.navigate(['/produto']);
    });
  }

  update() {
    this.produtoService.update(this.produtoId!, this.produtoForm.value).subscribe(response => {
      this.router.navigate(['/produto']);
    });
  }

  voltar() {
    this.router.navigate(['/produto']);
  }
}
