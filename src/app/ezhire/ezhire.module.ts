import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipelineComponent } from './pipeline/pipeline.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: PipelineComponent },
  { path: 'pipeline', component: PipelineComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PipelineComponent]
})
export class EzhireModule { }
