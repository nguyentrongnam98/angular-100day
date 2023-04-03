import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Author,listAuthor } from './author.model';
import { ToggleComponent } from './toogle/toogle.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // @ViewChildren(ToggleComponent) toggleComponent ?: QueryList<ToggleComponent>;
  // @ViewChild('button', {static:true}) button?: ElementRef<HTMLButtonElement>;
  public title = 'angular-100days';
  name = "angular";
  age = 18;
  progress: number = 50;
  progressColor: string = 'tomato';
  backgroundColor: string = '#ccc';
  styles: { background: string; width: string } = {
    background: this.progressColor,
    width: `${this.progress}` + '%'
  };
  person = {
    name:'Sam',
    age:'25'
  }
  listAuthor : Author[] = listAuthor
  curentAuthor = this.listAuthor[0]
  isCheck = true;
  showLast = true;
  incrementProgress() {
    this.progress = this.progress + 10
  }
  onSelectedAuthor(author:Author) {
   this.curentAuthor = author
  }
  onDeletedAuthor(id:number) {
    this.listAuthor = this.listAuthor.filter((author) => author.id !== id)
    if (this.curentAuthor.id === id) {
      this.curentAuthor = this.listAuthor[0]
    }
  }
  toggle() {
    this.isCheck = !this.isCheck
  }
  ngOnInit() {
    // this.toggleComponent?.changes.subscribe(console.log)

  }

  ngAfterViewInit() {
    // this.toggleComponent?.changes.subscribe(console.log)
  }
}
