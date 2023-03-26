import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toogle',
  templateUrl: './toogle.component.html',
  styleUrls: ['./toogle.component.css']
})
export class ToggleComponent {
 @Input() checked: boolean = false;
 toogle() {
  this.checked = !this.checked
 }
 ngOnChanges() {
  console.log('value change',this.checked);
  }
}
