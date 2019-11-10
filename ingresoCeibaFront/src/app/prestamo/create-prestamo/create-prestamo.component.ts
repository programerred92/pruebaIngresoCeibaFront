import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuComponent } from '../../shared/menu/menu.component';
import { Router } from '@angular/router';
import { PrestamoService } from '../../shared/service/prestamo.service';
@Component({
  selector: 'app-create-prestamo',
  templateUrl: './create-prestamo.component.html',
  styleUrls: ['./create-prestamo.component.css'],
  providers:[PrestamoService, MenuComponent]
})
export class CreatePrestamoComponent implements OnInit {
  prestamoForm: FormGroup;
  bookArr: any = [];
  constructor(
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    private prestamoService: PrestamoService
  ) { }

  ngOnInit() {
    this.addBook()

  }

  addBook() {
    this.prestamoForm = this.fb.group({
      fecha_prestamo: ['', Validators.required],
      fecha_entrega: ['', Validators.required],
      id_libro: ['', Validators.required]
    })
  }

  submitForm() {
    console.log('llego aca '+this.prestamoForm.value.fecha_prestamo+' y '+this.prestamoForm.value.id_libro)
    this.prestamoService.CreatePrestamo(this.prestamoForm.value)
   }
}
