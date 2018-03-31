import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-comercial-property',
  templateUrl: './comercial-property.component.html',
  styleUrls: ['./comercial-property.component.css']
})
export class ComercialPropertyComponent implements OnInit {
  tag:any[];
  tagList:any[];
  fieldTypes:any[];
  referenceName:string;

  constructor() { }
  
  ngOnInit() {   
    // this.fieldTypes = [{
    //   displyLabel: null,
    //   referenceName: null,
    //   defaultValue: null,
    //   customValidation: null
    // }]
   this.tag = [{
      carMake: 'Toyota',
      carModel: 'Prius',
      yearBuild: '2017',
      carRegNumber : 80560
  },{
      carMake: 'Benz',
      carModel: 'C 200',
      yearBuild: '2016',
      carRegNumber : 4856
  }];

  console.log(this.tagList);
  };

  getTags(){
    this.tagList = this.tag;
  }

  referanceGen(val){    
    var lableWithoutSpaces = val.replace(/[\s]/g, '');    
    this.referenceName = lableWithoutSpaces;    
  }

}
