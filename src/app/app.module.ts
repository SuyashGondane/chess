import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChessTableComponent } from './components/chess-table/chess-table.component';
import { TableRowComponent } from './components/table-row/table-row.component';
import { RowBoxComponent } from './components/row-box/row-box.component';
import { PieceComponent } from './components/piece/piece.component';

@NgModule({
  declarations: [
    AppComponent,
    ChessTableComponent,
    TableRowComponent,
    RowBoxComponent,
    PieceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
