import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {
  @Input() name : string = '';
  ngOnInit() {
    console.log('INIT COMPONENT');
  }
  ngOnDestroy() {
    console.log('DESTROY COMPONENT');
  }
}
