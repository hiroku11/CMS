import { DashboardComponent } from './../components/dashboard/dashboard.component';
import { HeaderComponent } from './../components/header/header.component';
import { LoginComponent } from './../components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserService } from '../services/user.service';
import { DocumentComponent } from '../components/document/document.component'
import { DocumentListComponent } from '../components/document/document-list/document-list.component'
import { AddDocumentComponent } from '../components/document/add-document/add-document.component'


const appRoutes: Routes = [
      { path: '', component: LoginComponent },
      { path: 'login', component: LoginComponent },
      { path: 'dashboard', component: DashboardComponent,canActivate:[UserService]},
      { path: 'document', component: DocumentComponent,
            children:[
                  {path: '',component: DocumentListComponent , pathMatch: 'full'},
                  {path: 'add-doc',component: AddDocumentComponent , pathMatch: 'full'},
                  {path:'edit-doc/:id',component: AddDocumentComponent , pathMatch: 'full'}
            ],canActivate:[UserService]
      }
     
];

@NgModule({
      imports: [
        RouterModule.forRoot(appRoutes) 
      ],
      exports: [RouterModule],
      providers:[]
})
export class AppRoutingModule { }
