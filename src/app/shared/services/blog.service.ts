import { Injectable, WritableSignal, computed, signal } from '@angular/core';
import { PostgrestSingleResponse, SupabaseClient, createClient } from '@supabase/supabase-js';
import { environment } from '../../environment';
import { Post } from '../../core/models/post';
import { SupabaseBlogRepositoryImpl } from '../../core/adapters/supabase-blog-repo-impl';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private readonly _sigPosts : WritableSignal<Post[]> = signal<Post[]>([]) ;
  readonly sigPosts = computed<Post[]>( () => this._sigPosts());

  constructor(private dbAccesser : SupabaseBlogRepositoryImpl){
    this.getAllPosts();
  }

  async getAllPosts(){
    this._sigPosts.set(await this.dbAccesser.getAllPosts()); 
  }

  async addPost(post: Post){
    const addedPost = await this.dbAccesser.addPost(post);
    this._sigPosts.update((sg) => sg.concat(addedPost));
  }

  async deleteRow(post: Post){  
    const deletedPost = await this.dbAccesser.deletePost(post.id);
    this._sigPosts.update( (posts) => posts.filter((post) => post.id !== deletedPost.id ))
  }

}
