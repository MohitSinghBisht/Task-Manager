import { Component } from '@angular/core';
import { TaskModel } from '../model/task.model';
import { BackendAPIService } from '../service/backend-api.service';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  productDialog: boolean = false;

  products!: TaskModel[];

  product!: TaskModel;

  selectedProducts!: TaskModel[] | null;

  submitted: boolean = false;

  statuses!: any[];

  constructor(private api: BackendAPIService, private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.callMethod();
    this.statuses = [
      { label: 'COMPLETED', value: 'completed' },
      { label: 'PENDING', value: 'pending' },
      { label: 'CANCELLED', value: 'cancelled' },
      { label: 'IN PROGRESS', value: 'in progress' }
  ];
}

  callMethod() {
    this.api.getAllTasks().subscribe( data => {
      this.products = data;
    });
  }

  openNew() {
    this.product = { title: '', description: '', status: '', dueDat: null };
    this.submitted = false;
    this.productDialog = true;
  }

  deleteSelectedProducts() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected products?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.products = this.products.filter((val) => !this.selectedProducts?.includes(val));
        this.selectedProducts = null;
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
      }
    });
  }

  editProduct(product: TaskModel) {
    this.product = product;
    this.productDialog = true;
  }

  deleteProduct(product: TaskModel) {
    this.confirmationService.confirm({
      header: 'Confirm',
      message: 'Are you sure you want to delete ' + product.title + '?',
      accept: () => {
        this.api.deleteTask(product.id).subscribe(data=>{
          console.log(data);
          this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
          this.product = { title: '', description: '', status: '', dueDat: null };
          this.callMethod();
        })
      }
    });
  }

  notifyTask() {
    // this.confirmationService.confirm({
    //   header: 'Confirm',
    //   message: '',
    //   accept: () => {
    //     this.api.deleteTask(product.id).subscribe(data=>{
    //       console.log(data);
    //       this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
    //       this.product = { title: '', description: '', status: '', dueDat: null };
    //       this.callMethod();
    //     })
    //   }
    // });
  }

  hideDialog() {
    this.productDialog = false;
    this.callMethod();
    this.submitted = false;
  }

  saveProduct() {
    this.product.dueDat = this.toLocalDate(this.product.dueDat);
    this.submitted = true;
    if (this.product && this.product.id == null) {
        this.api.postAddTask(this.product).subscribe(data=>{
          if(data.id!=null){
            this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 });
            this.callMethod();
            this.productDialog = false;
             this.product = { title: '', description: '', status: '', dueDat: null };
          }
        });
    }  
    else{
      this.api.putTask(this.product).subscribe(data=>{
        if(this.product.id == data.id) {
          this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000 });
          this.callMethod();
          this.productDialog = false;
          this.product = { title: '', description: '', status: '', dueDat: null };
        }   
      });
    }
  }


  getSeverity(status: string) {
    switch (status.toUpperCase()) {
      case 'COMPLETED':
        return 'success';
      case 'PENDING':
        return 'warning';
      case 'CANCELLED':
        return 'danger';
      case 'IN PROGRESS':
        return 'info';
      default:
        return 'contrast';
    }
  }

  toLocalDate(date: Date): Date {
    try{
      const userTimezoneOffset = date.getTimezoneOffset() * 60000;
      return new Date(date.getTime() - userTimezoneOffset);
    }
    catch(Exception){
      return date;
    }
}
}
