import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClarityModule } from 'clarity-angular'
import { RouterModule, Routes } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { ExplorerComponent } from './explorer/explorer.component';
import { BlockComponent } from './block/block.component';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { NotfoundComponent } from './notfound/notfound.component';
import { HttpClient } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { TokenInterceptor } from './services/token.interceptor'

import { AlertService } from './services/alert.service';
import { IdentityService } from './services/identity.service'

import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';

import { Config } from './config'

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'explorer',
    pathMatch: 'full'
  },
  {
    path: 'login', component: LoginComponent
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
    NotfoundComponent,
    LoginComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    ClarityModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    AlertService,
    Config,
    IdentityService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
