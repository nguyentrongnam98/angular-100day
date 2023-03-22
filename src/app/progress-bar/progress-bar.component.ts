import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit , OnChanges {
 @Input() name:string = ''
 @Input() backgroundColor : string = '';
 @Input() set styles(val) {
   this._styles = val;
 }
 private _styles = {
  background:'red',
  width:'70%'
 }
 get styles() {
   return this._styles
 }
 @Input() person : {name:string,age:string} = {name:'',age:''};
 ngOnInit(): void {
   console.log('init',this.styles)
 }
 ngOnChanges(changes: SimpleChanges): void {
   console.log('change',this.styles,changes)
 }
}
