import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { buytype, buy } from 'src/app/shared/sell.model';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';

//import { worker } from 'cluster';

@Component({
  selector: 'app-addform',
  templateUrl: './addform.component.html',
  styleUrls: ['./addform.component.css'],
})
export class AddformWorkerComponent implements OnInit {
  buyType = buytype;
  name: string;
  surname: number;
  type = 0;


  form_workers: FormGroup;

  

  @Output() addWorker = new EventEmitter<buy>();
  

  constructor(private form_build: FormBuilder) {


  }

  ngOnInit(){
     
     this.form_workers = this.form_build.group
    
    ({

      name: new FormControl ("",[Validators.required,]),
      surname: new FormControl("",[Validators.required,])
      // number: new FormControl("",[Validators.required,]),
      // email: new FormControl("",[Validators.pattern(this.emailCheck),Validators.required,]),
      // date: new FormControl("",[Validators.required,]),

    })
  }
  
 

  onAddWorker() {
console.log(this.form_workers.value.name, this.form_workers.value.surname)
    this.addWorker.emit({
      name: this.form_workers.value.name,
      surname: this.form_workers.value.surname,
      type: 0,
      number:"#9aff4e"
      
      
    });
  
  }
  

}
