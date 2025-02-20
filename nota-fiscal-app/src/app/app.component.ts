import {Component, HostListener} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import {PanelMenu} from 'primeng/panelmenu';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenubarModule, PanelMenu],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      { label: 'Home', icon: 'pi pi-home', routerLink: '/' },
      { label: 'Nota Fiscal', icon: 'pi pi-sign-out', routerLink: '/nota-fiscal' },
      { label: 'Fornecedor', icon: 'pi pi-cog', routerLink: '/fornecedor' },
      { label: 'Produto', icon: 'pi pi-user', routerLink: '/produto' },
    ];
  }

  @HostListener('window:popstate', ['$event'])
  onPopState(event : any) {
    location.reload()
  }
}
