import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Produit } from './models/produit';
import { MatDialog } from '@angular/material/dialog';
import { HelloResponseModalComponent } from './hello-response-modal/hello-response-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tp05_tregnago_hugo';
  nameHello = '';
  login: string = '';
  password: string = '';

  nom: string = '';
  prenom: string = '';
  cnx: boolean = false;
  produits$: Observable<Array<Produit>>;
  constructor(private apiService: ApiService, private dialog: MatDialog) {
    this.produits$ = this.apiService.getCatalogue();
  }
  connexion() {
    this.apiService.loginClient(this.login, this.password).subscribe((c) => {
      this.nom = c.nom;
      this.prenom = c.prenom;
      this.cnx = true;
    });
  }
  hello(): void {
    if (this.nameHello.trim() !== '') {
      this.apiService.getHello(this.nameHello)
        .subscribe(
          (data) => {
            const dialogRef = this.dialog.open(HelloResponseModalComponent, {
              width: '400px',
              data: data.nom
            });
          },
          (error) => {
            console.error('Erreur lors de l\'appel à l\'API Hello :', error);
          }
        );
    } else {
      console.log('Veuillez saisir un nom pour Hello.');
    }
  }
}
