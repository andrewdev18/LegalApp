import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './pages/create/create.component';
import { ListComponent } from './pages/list/list.component';
import { FormsModule } from '@angular/forms';
import { PrimengModule } from '../UI/primeng.module';
import { BillSequencePipe } from './pipes/bill-sequence.pipe';



@NgModule({
  declarations: [
    CreateComponent,
    ListComponent,
    BillSequencePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    PrimengModule
  ]
})
export class SalesModule { }
