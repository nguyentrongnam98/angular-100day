import { Component, Input, SimpleChanges, OnInit, OnChanges, SimpleChange } from '@angular/core';

interface IProps extends SimpleChanges {
  age:SimpleChange
}
@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})

export class HelloComponent implements OnInit, OnChanges {
  private $name = '';
  @Input() age?: number;
  @Input()
  get name(): string {
     return this.$name
  }
  set name(value:string) {
    if (value === 'angular') {
      this.notification = 'Is Framework'
      this.$name = value
    }
  }
  obj = {
    type:'text',
    value:'something'
  }
  person = {
    name:'',
    age:0
  }
  notification = ''
  authors = [
    {
      id: 1,
      firstName: 'Flora',
      lastName: 'Twell',
      email: 'ftwell0@phoca.cz',
      gender: 'Female',
      ipAddress: '99.180.237.33',
    },
    {
      id: 2,
      firstName: 'Priscella',
      lastName: 'Signe',
      email: 'psigne1@berkeley.edu',
      gender: 'Female',
      ipAddress: '183.243.228.65',
    },
    // more data
  ];
  ngOnInit() {
    console.log('INIT COMPONENT');
  }
  ngOnChanges(changes:IProps) {
     if (changes.age.currentValue >= 18) {
       this.alert()
     }
  }
  alert() {
    alert('Hello my friend ban da du tuoi')
  }
  ngOnDestroy() {
    console.log('DESTROY COMPONENT');
  }
}
