import { Component } from '@angular/core';
import { Author,listAuthor } from './author.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public title = 'angular-100days';
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
}
