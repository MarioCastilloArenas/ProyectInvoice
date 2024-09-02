import { Injectable } from '@angular/core';
import { Invoice } from '../models/invoice';
import { invoiceData } from '../data/invoice.data';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private invoice: Invoice = invoiceData
  
  constructor() {

  }

  getInvoice(): Invoice {
    const total = this.calculateTotal();
    return {...this.invoice, total}; //crea una nueva isntancia de la factura con todos sus objetos y le añadimos el total
  }

  remove(id: number): Invoice{
    this.invoice.items = this.invoice.items.filter(item => item.id != id);
    const total = this.calculateTotal();
    return {...this.invoice, total};
  }

  calculateTotal(){
    let total = 0;
    
    this.invoice.items.forEach(item =>{
      total = total + (item.price * item.quantity);
    })
    return total;

    // return this.invoice.items.reduce((accumulator, item) => accumulator + (item.price * item.quantity), 0); //reduce permite ir reduciendo flujo y el acumulador dice donde empieza y donde acaba , o 

  }

  save(item: Item): Invoice{
    this.invoice.items =  [... this.invoice.items, item];
    const total = this.calculateTotal();
    return {...this.invoice, total};
  }
}
