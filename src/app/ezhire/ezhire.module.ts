import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipelineComponent } from './pipeline/pipeline.component';
import { Routes, RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';

const routes: Routes = [
  { path: '', component: PipelineComponent },
  { path: 'pipeline', component: PipelineComponent }
];

@NgModule({
  imports: [
    CommonModule,
    TableModule,
    FormsModule,
    DialogModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PipelineComponent]
})
export class EzhireModule { }
