import {Release, ReleaseData} from '../data/release';
import {Observable, of} from 'rxjs';

export class ReleaseMockService extends ReleaseData {

  private releases: Release[] = [
    {date: '25/09/2021', version: '0.5.0', news: [
        'Hello, world!',
        'Hello, world! 2',
      ]},
    {date: '25/08/2021', version: '0.4.0', news: [
        'Se añade la sección "Composición" -> "Red neuronal" (En pruebas)',
        'Se añade diálogo para editar usuarios en "Administración" -> "Usuarios"',
        'Se añade diálogo para restablecer contraseña en "Administración" -> "Usuarios"',
      ]},
    {date: '20/08/2021', version: '0.3.19', news: [
        'Se añade nueva sección "Administración" -> "Usuarios"',
      ]},
    {date: '17/08/2021', version: '0.3.18', news: [
        'Actualizo endpoints del Api tras refactorización en backend',
      ]},
    {date: '19/06/2021', version: '0.4.0', news: [
        'Ahora la sección "Mi repositorio" es independiente para cada usuario, conteniendo únicamente sus ' +
        'composiciones',
      ]},
    {date: '10/06/2021', version: '0.3.15', news: [
        'Implemento registro de nuevos usuarios',
      ]},
    {date: '05/06/2021', version: '0.3.14', news: [
        'Sección "Perfil", permite editar datos de usuario y generar tokens para llamadas al API',
        'Implementación de logout',
        'Spinner de carga en sección repositorio mientras la composición no ha terminado',
        'Filtrado por nombre en el repositorio',
      ]},
    {date: '04/06/2021', version: '0.3.13', news: [
        'Se incorpora sección administración + vista logs',
        'Mejoras estéticas, logo, tema oscuro',
      ]},
  ];

  getReleases(): Observable<Release[]> {
    return of(this.releases);
  }

}
