import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { ClientComponent } from './client/client.component';
import { HeaderComponent } from './admin/header/header.component';
import { GestionmenuComponent } from './admin/gestionmenu/gestionmenu.component';
import { GestionarticleComponent } from './admin/gestionarticle/gestionarticle.component';
import { AjoutmenuComponent } from './admin/gestionmenu/ajoutmenu/ajoutmenu.component';
import { ListmenuComponent } from './admin/gestionmenu/listmenu/listmenu.component';
import { UpdatemenuComponent } from './admin/gestionmenu/updatemenu/updatemenu.component';
import { AjoutarticleComponent } from './admin/gestionarticle/ajoutarticle/ajoutarticle.component';
import { ListarticleComponent } from './admin/gestionarticle/listarticle/listarticle.component';
import { UpdatearticleComponent } from './admin/gestionarticle/updatearticle/updatearticle.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './client/navbar/navbar.component';
import { FooterComponent } from './client/footer/footer.component';
import { HomepageComponent } from './client/homepage/homepage.component';
import { CoverComponent } from './client/homepage/cover/cover.component';
import { AboutComponent } from './client/homepage/about/about.component';
import { MenusComponent } from './client/homepage/menus/menus.component';
import { AdsComponent } from './client/homepage/ads/ads.component';
import { BlogsComponent } from './client/homepage/blogs/blogs.component';
import { DetailmenuComponent } from './client/detailmenu/detailmenu.component';
import { DetailarticleComponent } from './client/detailarticle/detailarticle.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { LivreurComponent } from './livreur/livreur.component';
import { DetailcommandeComponent } from './livreur/detailcommande/detailcommande.component';
import { DetailclientComponent } from './livreur/detailclient/detailclient.component';
import { ListclientComponent } from './livreur/detailclient/listclient/listclient.component';
import { UpdateclientComponent } from './livreur/detailclient/updateclient/updateclient.component';
import { ListcommandeComponent } from './livreur/detailcommande/listcommande/listcommande.component';
import { UpdatecommandeComponent } from './livreur/detailcommande/updatecommande/updatecommande.component';
import { HeaderlivComponent } from './livreur/headerliv/headerliv.component';
import { PanierComponent } from './livreur/panier/panier.component';
import { CommonModule } from '@angular/common';
import { MescommandesComponent } from './livreur/mescommandes/mescommandes.component';
import { LoginlivreurComponent } from './loginlivreur/loginlivreur.component';
import { CommandelistsComponent } from './livreur/commandelists/commandelists.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ClientComponent,
    HeaderComponent,
    GestionmenuComponent,
    GestionarticleComponent,
    AjoutmenuComponent,
    ListmenuComponent,
    UpdatemenuComponent,
    AjoutarticleComponent,
    ListarticleComponent,
    UpdatearticleComponent,
    RegisterComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    HomepageComponent,
    CoverComponent,
    AboutComponent,
    MenusComponent,
    AdsComponent,
    BlogsComponent,
    DetailmenuComponent,
    DetailarticleComponent,
    LivreurComponent,
    DetailcommandeComponent,
    DetailclientComponent,
    ListclientComponent,
    UpdateclientComponent,
    ListcommandeComponent,
    UpdatecommandeComponent,
    HeaderlivComponent,
    PanierComponent,
    MescommandesComponent,
    LoginlivreurComponent,
    CommandelistsComponent,


  ],
  imports: [
    BrowserModule,
    CommonModule ,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    ScrollToModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
