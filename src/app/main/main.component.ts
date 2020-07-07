import { Component, Output, EventEmitter } from '@angular/core';
import {
  buy,
  
  buytype,
} from '../shared/sell.model';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {  OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import{Tablesort} from 'src/app/services/tablesort'


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})

export class MainComponent implements OnInit {
  @Output() changeWorker = new EventEmitter<buy>();
  title = 'Список покупок';
  
  search=""
  workers: buy[];
  buyType = buytype;
   formChanger = new FormGroup({
    name: new FormControl(),
    surname: new FormControl(),
    type: new FormControl()
  });
  public mask = ['+', /[1-9]/, /[1-9]/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]
  
  public emailCheck = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  
  ngOnInit(){
    
    
  
  }
  
  getByType(type: number) {
    return this.workers.filter((worker) => worker.type === type);
  }
 
  async get() {

    try {
      this.workers = await this.base.get();
    } catch (err) {
      console.error(err);
    }
  }
 async onDeleteById(id: number) {
  try {
      
    await this.base.delete(id);   
    } catch (err) {
      console.error(err);
    } finally {
      this.get(); 
    }
  }

  constructor(private form_build: FormBuilder, public activeModal: NgbActiveModal,private base: DataService) { 
    this.get();
  }


  async onAdd(worker) {


    try {
      console.log(worker);
      await this.base.add(worker);
    } catch (err) {
      console.error(err);
    } finally {
      this.get();
    }

  }
  //  showCover() {
  //   let coverDiv = document.createElement('div');
  //   coverDiv.id = 'cover-div';

  //   // убираем возможность прокрутки страницы во время показа модального окна с формой
  //   document.body.style.overflowY = 'hidden';

  //   document.body.append(coverDiv);
  // }

 onclickChange(worker){
  let numCheck = /^[+,0-9]+$/;

  this.formChanger = this.form_build.group
  
  

    ({
      name: new FormControl(worker.name, [Validators.required,]),
      surname: new FormControl(worker.surname, [Validators.required,]),
      type: new FormControl(worker.type, [Validators.required,])
     
    })



    
    
  document.getElementsByTagName("dialog")[0].showModal()


}
  async onChange(worker){
    //console.log(worker);
    
    await this.onclickChange(worker)
    let but=document.getElementById("ok");
    var promise1 = new Promise((resolve, reject) => {
    but.onclick= function(){
      
      worker.name=(<HTMLInputElement>document.getElementById("DropdownName")).value;
      worker.surname=(<HTMLInputElement>document.getElementById("DropdownSurname")).value;

      
      worker.type=parseInt((<HTMLInputElement>document.getElementById("DropdownType")).value);
      if(worker.type==1)
      worker.number='white'
      if(worker.type==0)
      worker.number='#a9ff77'
       document.getElementsByTagName("dialog")[0].close();
      //console.log(worker);
     
      resolve("done")
    }
    
  });
  //console.log(worker);
  promise1.then(()=>{
    console.log(worker)
     this.base.change(worker)
  })
   
  
     // await console.log(worker);
  
    // await this.buyBase.postWorkers(new_worker);
    // await this.onDeleteById(event.id);  

    
     
   
     
     


}
onbuy(worker){
  console.log("Привет!")
  worker.type=1;
  worker.number="white"
  this.base.change(worker)
}
}

    //console.log(this.workers)
  //    console.log(worker)
  // worker.name=prompt("Измените имя",worker.name);
  //    worker.surname=prompt("Измените фамилию",worker.surname);
  //   worker.type=prompt("Измените профессию \n 1.Программист \n 2.Дизайнер \n 3.Рекламщик \n 4.Менеджер",(worker.type+1));
  //   console.log(parseInt(worker.type))
  //   worker.number=prompt("Измените номер телефона, пример номера: +79160884519",worker.number);



  //   if((worker.type<1)||(worker.type>4)||(worker.name=='')||(worker.surname=='')){
  //     alert("Проверьте введенные значения")
  //    this.onChangeWorker(worker)
  //  }
  //   worker.type--;
    
    
    
 
