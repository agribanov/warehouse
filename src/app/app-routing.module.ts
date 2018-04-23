import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsContainerComponent } from './products/products-container/products-container.component';
import { ProductsListComponent } from './products/products-list/products-list.component';

const routes: Routes = [
  { path:'', redirectTo:'products', pathMatch:'full'},
  {
    path:'products', component: ProductsContainerComponent, children: [
      {path:'', redirectTo: 'list', pathMatch:'full'},
      {
        path: 'list', component: ProductsListComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
