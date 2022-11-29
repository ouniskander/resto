import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AjoutarticleComponent } from './admin/gestionarticle/ajoutarticle/ajoutarticle.component';
import { GestionarticleComponent } from './admin/gestionarticle/gestionarticle.component';
import { ListarticleComponent } from './admin/gestionarticle/listarticle/listarticle.component';
import { UpdatearticleComponent } from './admin/gestionarticle/updatearticle/updatearticle.component';
import { AjoutmenuComponent } from './admin/gestionmenu/ajoutmenu/ajoutmenu.component';
import { GestionmenuComponent } from './admin/gestionmenu/gestionmenu.component';
import { ListmenuComponent } from './admin/gestionmenu/listmenu/listmenu.component';
import { UpdatemenuComponent } from './admin/gestionmenu/updatemenu/updatemenu.component';
import { AuthGuard } from './auth.guard';
import { ClientComponent } from './client/client.component';
import { DetailarticleComponent } from './client/detailarticle/detailarticle.component';
import { DetailmenuComponent } from './client/detailmenu/detailmenu.component';
import { HomepageComponent } from './client/homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LivreurComponent } from './livreur/livreur.component';
import { DetailcommandeComponent } from './livreur/detailcommande/detailcommande.component';
import { DetailclientComponent } from './livreur/detailclient/detailclient.component';
import { PanierComponent } from './livreur/panier/panier.component';
import { MescommandesComponent } from './livreur/mescommandes/mescommandes.component';
import { LoginlivreurComponent } from './loginlivreur/loginlivreur.component';
import { CommandelistsComponent } from './livreur/commandelists/commandelists.component';


const routes: Routes = [

  { path: '' , component: ClientComponent , children: [

    { path:'' , component:HomepageComponent },
    { path: 'detailmenu/:id' , component: DetailmenuComponent },
    { path: 'detailarticle/:id' , component: DetailarticleComponent },
    { path:'panier', canActivate:[ AuthGuard ] , component: PanierComponent },
    { path:'mescommandes', canActivate:[ AuthGuard ] , component: MescommandesComponent },
    { path:'commandelists', canActivate:[ AuthGuard ] , component: CommandelistsComponent },


  ] },

  { path: 'admin' , canActivate:[ AuthGuard ] , component: AdminComponent , children: [

    { path: 'article' , component: GestionarticleComponent , children: [

      {path: '' , component: ListarticleComponent },
      { path:'ajout' , component: AjoutarticleComponent },
      { path: 'update/:id' , component: UpdatearticleComponent }

    ] },

    { path: '' , component: GestionmenuComponent , children: [

      { path: '' , component: ListmenuComponent },
      { path: 'ajout' , component: AjoutmenuComponent },
      { path: 'update/:id' , component: UpdatemenuComponent }

    ] }

  ] },


  { path:'register' , component: RegisterComponent },

  { path: 'login' , component: LoginComponent },
  { path: 'loginlivreur' , component: LoginlivreurComponent },

{ path: 'livreur' , canActivate:[ AuthGuard ] , component: LivreurComponent , children: [

      { path: 'Detailclient' , component: DetailclientComponent},
      { path: 'Detailcommande' , component: DetailcommandeComponent},
      ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
