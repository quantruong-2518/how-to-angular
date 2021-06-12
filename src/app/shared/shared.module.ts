import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const EXPORT_MODULES = [
  CommonModule,
  RouterModule,
  FormsModule,
  ReactiveFormsModule,
];

const IMPORT_MODULES = [FormsModule, ReactiveFormsModule];

@NgModule({
  imports: [...IMPORT_MODULES],
  exports: [...EXPORT_MODULES],
})

export class SharedModule {}
