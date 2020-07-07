import { Component, OnInit, Input, Output, EventEmitter, Type } from '@angular/core';
import { buy} from 'src/app/shared/sell.model';




@Component({
  selector: 'app-table-workers',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableWorkersComponent implements OnInit {
  @Input() title: string;
  @Input() workers: buy[] = [];
  a=0
  id1: number = 1;
  age1: number = 0;
  sort_Id: number = 1;
  sort_age: number = 0;
  @Output() deleteWorker = new EventEmitter<number>();
  @Output() changeWorker = new EventEmitter<buy>();
  @Output() buyWorker = new EventEmitter<buy>();
  
  

  //export class AddformWorkerComponent implements OnInit {
    
    _workers : buy;
    name: string;
    surname: string;
    type = 0;
  constructor() {
    
  }

  ngOnInit() {
    
  }

  IdUp() {
    this.sort_Id = 1

    this.sort_age = 0
  }

  Id_Down() {
    this.sort_Id = 2


    this.sort_age = 0
  }

  Age_Up(){
    this.sort_age = 1



    this.sort_Id = 0
  }

  Age_Down(){
    this.sort_age = 2

    this.sort_Id = 0
  }

  onDeleteWorker(id: number) {
    this.deleteWorker.emit(id);
  }

 
  onChangeWorker1(worker){
    console.log(worker.name)
    this.changeWorker.emit(worker)
    
    
    
  }
  onBuy(worker){
    // worker.type=0;
    // worker.number="white"
    this.buyWorker.emit(worker)
    
    
  }
get_current_age(date) {
 
  
  document.getElementById("kek").style.backgroundColor="green";
 
  let birthDate = new Date(date);
  
   
  
  var now = new Date(),

      age = now.getFullYear() - birthDate.getFullYear();


  return now.setFullYear(1972) < birthDate.setFullYear(1972) ? age - 1 : age;
    
    }
    
     
    
    
    
}

