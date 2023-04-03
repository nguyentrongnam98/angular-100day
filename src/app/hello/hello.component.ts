import { Component, Input, SimpleChanges, OnInit, OnChanges, SimpleChange, Output, EventEmitter } from '@angular/core';
import { Author } from '../author.model';

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
  @Output() onSelectAuthor = new EventEmitter<number>();
  @Output() onDeleteAuthor = new EventEmitter<number>();
  @Input() age?: number;
  @Input() authors?: Author[];
  @Input() curentAuthor?: boolean;
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

  ngOnInit() {
    console.log('INIT COMPONENT');
  }
  handleSelectAuthor(authorId:number) {
     this.onSelectAuthor.emit(authorId)
  }
  handleDeleteAuthor(authorId:number) {
     this.onDeleteAuthor.emit(authorId)
  }
  ngOnChanges(changes:IProps) {
     if (changes?.age?.currentValue >= 18) {
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
