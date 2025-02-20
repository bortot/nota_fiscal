import { Component } from '@angular/core';
import {TableModule} from 'primeng/table';
import {ProdutoService} from '../../services/produto.service';
import {Produto} from '../../class/produto';
import {Menubar} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import {Divider} from 'primeng/divider';
import {InputText} from 'primeng/inputtext';
import {Ripple} from 'primeng/ripple';
import {Paginator} from 'primeng/paginator';
import {ActivatedRoute, Router} from '@angular/router';
import {NgIf} from '@angular/common';


@Component({
  selector: 'app-produto',
  imports: [
    TableModule,
    Menubar,
    Divider,
    InputText,
    Ripple,
    Paginator,
    NgIf,
  ],
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.scss',
  providers: [ProdutoService, Router]
})
export class ProdutoComponent {
  menuItems: MenuItem[] | undefined;
  produtoList!: Produto[];
  selectedProduct?: Produto;
  currentPage = 0;
  rows = 15;
  totalRecords: number = 0;

  constructor(private produtoService: ProdutoService, private router : Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.loadData()

    this.menuItems = [
      { label: 'Novo Produto', icon: 'pi pi-plus', onClick: this.novoProduto, show: () => true},
      { label: 'Editar', icon: 'pi pi-pencil', onClick: this.editarProduto, show: () : boolean => !!this.selectedProduct?.id },
      { label: 'Remover', icon: 'pi pi-times', onClick: this.removerProduto, show: () => !!this.selectedProduct?.id },
    ];
  }

  loadData(): void {
    this.produtoService.getRecords(this.currentPage, this.rows).subscribe(response => {
      this.produtoList = response.data;
      this.totalRecords = response.totalRecords;
    });
  }

  novoProduto = () => {
    this.router.navigate(['cadastro'], { relativeTo: this.route });
  };

  editarProduto = () => {
    if (this.selectedProduct?.id == null) return;
    this.router.navigate([`produto/cadastro/${this.selectedProduct.id}`]);
  }

  removerProduto = () => {
    if (this.selectedProduct?.id == null) return;
    this.produtoService.deleteRecord(this.selectedProduct.id);
  }

  pageChange(event: any) {
    this.currentPage = event.page;
    this.rows = event.rows;

    this.loadData()
  }
}
