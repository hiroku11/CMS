import { DashboardComponent } from './../components/dashboard/dashboard.component';
import { HeaderComponent } from './../components/header/header.component';
import { LoginComponent } from './../components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserService } from '../services/user.service';
import { DocumentComponent } from '../components/document/document.component'
import { DocumentListComponent } from '../components/document/document-list/document-list.component'
import { AddDocumentComponent } from '../components/document/add-document/add-document.component'
import { SendEmailComponent } from '../components/send-email/send-email.component';
import { PublishEmailComponent } from '../components/publish-email/publish-email.component';
import { NotifyAdminComponent } from '../components/notify-admin/notify-admin.component';


const appRoutes: Routes = [
      { path: '', component: LoginComponent },
      { path: 'login', component: LoginComponent },
    
      { path: 'document', component: DocumentComponent,
            children:[
                  {path: '',component: DocumentListComponent , pathMatch: 'full'},
                  {path: 'app-document-list',component: DocumentListComponent , pathMatch: 'full'},
                  {path:'add-document',component: AddDocumentComponent ,
                   children:[
                        {path:'send-email',component:SendEmailComponent, pathMatch:'full'},
                        {path:'publish-email',component:PublishEmailComponent, pathMatch:'full'},
                        {path:'notify-admin',component:NotifyAdminComponent, pathMatch:'full'}
                   ]
                  },
                  {path:'send-email',component:SendEmailComponent, pathMatch:'full'}
            ],canActivate:[UserService]
      },
    
     
];

@NgModule({
      imports: [
        RouterModule.forRoot(appRoutes) 
      ],
      exports: [RouterModule],
      providers:[]
})
export class AppRoutingModule { }
