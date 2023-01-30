import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { ListComponent } from './components/list/list.component';



@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    TestRoutingModule
  ]
})
export class TestModule { }
