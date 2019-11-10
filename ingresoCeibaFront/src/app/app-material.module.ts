import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule,
     MatCardModule,
      MatInputModule,
       MatButtonModule,
        MatMenuModule,
        MatDatepickerModule, 
   MatNativeDateModule
     } from '@angular/material';

const materialModules = [
    MatToolbarModule, 
    MatCardModule, 
    MatInputModule,
     MatButtonModule,
      MatMenuModule,
      MatDatepickerModule, 
      MatNativeDateModule]
@NgModule({
    imports: [CommonModule, materialModules],
    exports:[materialModules]
})

export class AppMaterialModule{}