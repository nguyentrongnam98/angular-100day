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
  curentAuthor = false
  isCheck = true;
  showLast = true;
  incrementProgress() {
    this.progress = this.progress + 10
  }
  onSelectedAuthor(authorId:number) {
    if(authorId) this.curentAuthor = true
  }
  onDeletedAuthor(authorId:number) {
    this.authors = this.authors.filter((author) => author.id !== authorId)
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
