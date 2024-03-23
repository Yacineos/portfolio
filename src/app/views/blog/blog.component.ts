import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { BlogService } from '../../shared/services/blog.service';
import { CommonModule } from '@angular/common';
import { Post } from '../../core/models/post';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogComponent {
  sigPost = signal<Post>( {
    id : "" ,
    title: "dsfsdf",
    content: "dsfds ",
    date: ""
  });
  constructor(protected blogService: BlogService){

  }
  newPost(title: string , content: string){
    const today = new Date();
    const formattedToday = today.toISOString().slice(0, 10);
    this.sigPost.update((sg) =>  ({...sg , title , content , date: formattedToday}));

    console.log(this.sigPost())
    this.blogService.addPost(this.sigPost());
  }

  delete(post : Post){
    this.blogService.deleteRow(post);
  }
}
