import { NgModule } from '@angular/core';
import {NbCardModule, NbLayoutModule, NbMenuModule} from '@nebular/theme';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { HomeComponent } from './home/home.component';
import { RepositorioModule } from './repositorio/repositorio.module';
import { ComposicionModule } from './composicion/composicion.module';
import {ThemeModule} from '../@theme/theme.module';
import { ChangelogComponent } from './home/changelog/changelog.component';

@NgModule({
    imports: [
        PagesRoutingModule,
        NbMenuModule,
        MiscellaneousModule,
        ThemeModule,
        NbCardModule,
        RepositorioModule,
        ComposicionModule,
        NbLayoutModule,
    ],
  declarations: [
    PagesComponent,
    HomeComponent,
    ChangelogComponent,
  ],
})
export class PagesModule {
}
