import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideHttpClient } from "@angular/common/http";
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { CommonModule } from '@angular/common';
import { ConfirmationService, MessageService } from "primeng/api";
import { DialogModule } from "primeng/dialog";
import { RippleModule } from "primeng/ripple";
import { ButtonModule } from "primeng/button";
import { ToastModule } from "primeng/toast";
import { DropdownModule } from "primeng/dropdown";
import { ToolbarModule } from "primeng/toolbar";
import { RadioButtonModule } from "primeng/radiobutton";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { InputTextModule } from "primeng/inputtext";
import { InputTextareaModule } from "primeng/inputtextarea";
import { FormsModule } from "@angular/forms";
import { InputNumberModule } from "primeng/inputnumber";
import { CalendarModule } from 'primeng/calendar';
import { FileUploadModule } from "primeng/fileupload";
import { HomeComponent } from "./home/home.component";
import { CardModule } from 'primeng/card';
import { TimelineModule } from 'primeng/timeline';
import { TaskComponent } from "./task/task.component";
import { RouterOutlet } from "@angular/router";
import {  KnobModule } from "primeng/knob";
import { AppRoutingModule } from "./app-routing.module";
import { ExportComponent } from "./export/export.component";

@NgModule({
    declarations: [AppComponent,HomeComponent,TaskComponent,ExportComponent],
    imports: [BrowserModule, BrowserAnimationsModule,TimelineModule,KnobModule,CardModule, TableModule, DialogModule, RippleModule, ButtonModule, ToastModule, ToolbarModule, ConfirmDialogModule, InputTextModule, InputTextareaModule, CommonModule, FileUploadModule, DropdownModule, TagModule, RadioButtonModule, CalendarModule, RatingModule, InputTextModule, FormsModule, InputNumberModule,RouterOutlet,AppRoutingModule],
    providers: [provideHttpClient(), MessageService, ConfirmationService],
    bootstrap: [AppComponent]
})
export class AppModule {

}