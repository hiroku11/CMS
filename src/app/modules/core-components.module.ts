import { SharedService } from './../services/shared.service';
import { AlertsLoaderService } from "./../services/alerts-loader.service";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeaderComponent } from "../components/header/header.component";
import { LoginComponent } from "../components/login/login.component";
import { SideNavComponent } from "../components/side-nav/side-nav.component";
import { DashboardComponent } from "../components/dashboard/dashboard.component";
import { RouterModule } from "@angular/router";
import { PaginationModule } from "ngx-pagination-bootstrap";
import { AjaxLoaderComponent } from "../components/ajax-loader/ajax-loader.component";
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { ErrorMessageComponent } from "../components/error-message/error-message.component";
import { SuccessMessageComponent } from "../components/sucess-message/sucess-message.component";
import { OwlDateTimeModule, OWL_DATE_TIME_FORMATS } from 'ng-pick-datetime';
import { OwlMomentDateTimeModule } from 'ng-pick-datetime-moment';
import { DocumentComponent } from '../components/document/document.component';
import { DocumentListComponent } from '../components/document/document-list/document-list.component';
import { AddDocumentComponent } from '../components/document/add-document/add-document.component';
import { SendEmailComponent } from '../components/send-email/send-email.component';
import { PublishEmailComponent } from '../components/publish-email/publish-email.component';
import { NotifyAdminComponent } from '../components/notify-admin/notify-admin.component';

export const MY_MOMENT_FORMATS = {
    parseInput: 'DD/MM/YYYY HH:mm:ss',
    fullPickerInput: 'DD/MM/YYYY HH:mm:ss',
    datePickerInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
};




@NgModule({
    declarations: [
        HeaderComponent,
        LoginComponent,
        SideNavComponent,
        DashboardComponent,
        DocumentComponent,
        DocumentListComponent,
        AddDocumentComponent,
        NotifyAdminComponent,
        SendEmailComponent,
        PublishEmailComponent,
        AjaxLoaderComponent,
        ErrorMessageComponent,
        SuccessMessageComponent
      
    ],
    imports: [FormsModule, CommonModule, RouterModule,
        PaginationModule, SelectDropDownModule, 
        OwlDateTimeModule,
        OwlMomentDateTimeModule,],
    providers: [AlertsLoaderService,
        { provide: OWL_DATE_TIME_FORMATS, useValue: MY_MOMENT_FORMATS },
    ],
    exports: [FormsModule, CommonModule],
    entryComponents: [DashboardComponent, AjaxLoaderComponent, ErrorMessageComponent, SuccessMessageComponent]
})
export class CoreModule { }
