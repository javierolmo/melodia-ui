import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepositorioRoutingModule } from './repositorio-routing.module';
import { RepositorioComponent } from './repositorio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    NbActionsModule, NbButtonModule,
    NbCardModule, NbContextMenuModule,
    NbDialogModule,
    NbIconModule, NbInputModule,
    NbListModule, NbPopoverModule,
    NbSpinnerModule, NbTooltipModule,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { DownloadDialogComponent } from './download-dialog/download-dialog.component';
import { StatusComponent } from './status/status.component';


@NgModule({
  declarations: [RepositorioComponent, DownloadDialogComponent, StatusComponent],
    imports: [
        CommonModule,
        RepositorioRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        NbEvaIconsModule,
        NbIconModule,
        NbListModule,
        NbCardModule,
        NbDialogModule,
        NbSpinnerModule,
        NbActionsModule,
        NbContextMenuModule,
        NbButtonModule,
        NbTooltipModule,
        NbPopoverModule,
        NbInputModule,
    ],
  providers: [],
})
export class RepositorioModule { }
