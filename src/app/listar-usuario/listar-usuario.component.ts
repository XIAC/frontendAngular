import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './shared/usuario.service';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.scss'],
  providers: [UsuarioService]
})
export class ListarUsuarioComponent implements OnInit {

  constructor(private usuarioService: UsuarioService) {

   }

  ngOnInit() {
    this.usuarioService.obtenerUsuario().subscribe(
      response => this.onGetSuccess(response),
      response => this.onGetError(response));
      // r => console.log(r));
  }
  onGetSuccess(response) {
    console.log(response);
  }
  onGetError(response) {
    console.log(response);
  }

}
