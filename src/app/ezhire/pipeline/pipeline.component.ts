import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-pipeline',
  templateUrl: './pipeline.component.html',
  styleUrls: ['./pipeline.component.css']
})
export class PipelineComponent implements OnInit {

  itemList: any[];
  tempItemList: any[];
  headers: any[];
  displayAddModal: boolean = false;
  addRecordForm: FormGroup;

  constructor() { }

  ngOnInit() {
    let tempHeaders = [];

    this.itemList = [
      { id: 1, name: 'a', address: 'as dasf a' },
      { id: 2, name: 'b', address: 'as dasf a' },
      { id: 3, name: 'c', address: 'as dasf a' },
      { id: 4, name: 'd', address: 'as dasf a' },
      { id: 5, name: 'e', address: 'as dasf a' },
      { id: 6, name: 'f', address: 'as dasf a' },
      { id: 7, name: 'g', address: 'as dasf a' },
      { id: 8, name: 'h', address: 'as dasf a' },
      { id: 9, name: 'i', address: 'as dasf a' },
      { id: 10, name: 'j', address: 'as dasf a' },
      { id: 11, name: 'k', address: 'as dasf a' },
      { id: 12, name: 'l', address: 'as dasf a' },
      { id: 13, name: 'm', address: 'as dasf a' },
      { id: 14, name: 'n', address: 'as dasf a' },
      { id: 15, name: 'o', address: 'as dasf a' },
      { id: 16, name: 'p', address: 'as dasf a' },
      { id: 17, name: 'q', address: 'as dasf a' },
      { id: 18, name: 'r', address: 'as dasf a' },
      { id: 19, name: 's', address: 'as dasf a' },
      { id: 20, name: 't', address: 'as dasf a' },
      { id: 21, name: 'u', address: 'as dasf a' },
      { id: 22, name: 'v', address: 'as dasf a' },
      { id: 23, name: 'w', address: 'as dasf a' },
      { id: 24, name: 'x', address: 'as dasf a' },
      { id: 25, name: 'y', address: 'as dasf a' },
      { id: 26, name: 'z', address: 'as dasf a' }
    ];

    this.tempItemList = this.itemList;

    this.headers = [
      { name: 'id', show: true },
      { name: 'name', show: true },
      { name: 'address', show: true }
    ];

    //New Record Form
    this.addRecordForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      address: new FormControl(null, [Validators.required])
    });
    
  }

  dynamicColChange(event, index) {
    if (event.target.checked) {
      this.headers[index].show = true;
    } else {
      this.headers[index].show = false;
    }
    console.log('index ', index);
  }

  onEditColumnInline(event, id) {
    if (event.keyCode === 13 || event.keyCode === 9) {
      console.log(event);
      console.log('ID ', id);
    }
  }

  addNewRecord() {
    this.addRecordForm.reset();
    this.displayAddModal = true;
    console.log('add');
  }

  postAddNewForm() {
    console.log(this.addRecordForm.value);
  }
}
