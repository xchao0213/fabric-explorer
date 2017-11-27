import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClarityModule } from 'clarity-angular'
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { ExplorerComponent } from './explorer/explorer.component';
import { BlockComponent } from './block/block.component';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { NotfoundComponent } from './notfound/notfound.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'explorer',
    pathMatch: 'full'
  },
  {
    path: 'explorer', component: ExplorerComponent
  },
  {
    path: 'block', component: BlockComponent
  },
  {
    path: '**', component: NotfoundComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ExplorerComponent,
    BlockComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
