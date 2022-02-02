import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { HomeComponent } from './home.component';
import { PaginatorComponent } from './paginator.component';
import { effects, reducers } from './state';

@NgModule({
  declarations: [HomeComponent, PaginatorComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forFeature('list', reducers),
    RouterModule.forChild([{ path: '', component: HomeComponent }]),
    EffectsModule.forFeature(effects),
  ],
  exports: [HomeComponent],
})
export class HomeModule {}
