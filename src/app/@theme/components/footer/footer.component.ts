import { Component } from '@angular/core';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
      UNED Ingeniería Informática  |  Javier Olmo Injerto   |  correo: jolmo60@alumno.uned.es
    </span>
    <a [href]=documentationUrl>API</a>
  `,
})
export class FooterComponent {
  documentationUrl = environment.apiUrl + '/swagger-ui/';
}
