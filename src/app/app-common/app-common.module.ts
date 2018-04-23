import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { MatToolbarModule, MatButtonModule } from '@angular/material'
import { LocalStorageStoreService } from './local-storage-store.service';
@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [LocalStorageStoreService],
  exports: [NavigationComponent],
  declarations: [NavigationComponent]
})
export class AppCommonModule { }
