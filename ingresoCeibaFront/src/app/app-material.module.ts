import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatCardModule, MatInputModule, MatButtonModule, MatMenuModule } from '@angular/material';

const materialModules = [MatToolbarModule, MatCardModule, MatInputModule, MatButtonModule, MatMenuModule]
@NgModule({
    imports: [CommonModule, materialModules],
    exports:[materialModules]
})

export class AppMaterialModule{}