import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-item',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-item.component.html',
})
export class FormItemComponent {

  @Output() addItemEventEmitter = new EventEmitter();

  private counterId = 4; //empieza en 4 porque ya tenemos guardados 3 

  item: any = { // estos van a ser los datos que metamos al form
    product:'',
    price:'',
    quantity: ''
  }

  onSubmit(itemform: NgForm): void{

    if(itemform.valid){

      this.addItemEventEmitter.emit({id: this.counterId, ...this.item}); //esta linea lo que hace es pasar el id desde donde cuenta y el resto de elementos de un item
      this.counterId ++; // para incrementarlo 
      this.item = { // esto es para limpiar el formulario una vez lo enviemos 
        product:'',
        price:'',
        quantity: ''
      }

      itemform.reset();
      itemform.resetForm();

    }
  }
}
