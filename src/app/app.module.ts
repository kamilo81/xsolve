import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routerModule } from './app.routing';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import 'hammerjs';
import { AppComponent } from './app.component';
import { AppHomeComponent } from './home/home.component';
import { UsersComponent } from './home/users/users.component';
import { AlbumsComponent } from './home/albums/albums.component';
import { AlbumComponent } from './home/albums/album.component';
import { StatsComponent } from './home/stats/stats.component';
import { Dialog } from './home/albums/album.component'

@NgModule({
  declarations: [
    AppComponent,
    AppHomeComponent,
    UsersComponent,
    AlbumsComponent,
    AlbumComponent,
    StatsComponent,
    Dialog
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpModule,
    routerModule,
    NgxDatatableModule,
    SharedModule,
    BrowserAnimationsModule,
    ChartsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    Dialog
  ]
})
export class AppModule { }
