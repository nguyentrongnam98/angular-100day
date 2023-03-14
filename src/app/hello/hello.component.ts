import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {
  user = {
    name:'Sam Nguyen',
    age: 25
  }
   permission = 'admin'
   inputType = 'text'
   handleClick() {
    alert('say hello')
   }
   handleChange(e:Event) {
     console.log((e.target as HTMLInputElement).value)
   }
   handleChangePermission(e:string) {
    console.log(e)
    this.permission = e;
   }
}
