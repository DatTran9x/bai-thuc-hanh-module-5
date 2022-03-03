import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { ShowComponent } from './show/show.component';
import {CreateComponent} from "./create/create.component";
import {EditComponent} from "./edit/edit.component";
import {DeleteComponent} from "./delete/delete.component";
import {DetailsComponent} from "./details/details.component";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppComponent} from "../app.component";

const routes : Routes = [
  {path:"",component:ShowComponent},
  {path:"create",component:CreateComponent},
  {path:"edit",component:EditComponent},
  {path:"delete",component:DeleteComponent},
  {path:"details",component:DetailsComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    ShowComponent,
    CreateComponent,
    EditComponent,
    DeleteComponent,
    DetailsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MainModule { }
