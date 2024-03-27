import { Injectable, Signal, WritableSignal, computed, signal } from '@angular/core';
import { PostgrestSingleResponse, SupabaseClient, createClient } from '@supabase/supabase-js';
import { environment } from '../../environment';
import { Post } from '../../core/models/post';
import { SupabaseBlogRepositoryImpl } from '../../core/adapters/supabase-blog-repo-impl';
import { BlogStateMangementImpl } from '../../core/adapters/blog-state-management-impl';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  readonly sigPosts : Signal<Post[]>; 

  constructor(  
    private dbAccesser : SupabaseBlogRepositoryImpl , 
    private blogState : BlogStateMangementImpl 
  ){
    this.sigPosts = computed<Post[]>(() => blogState.sigPosts());
    this.getAllPosts();

  }

  async getAllPosts(){
    const posts = await this.dbAccesser.getAllPosts();
    this.blogState.setPosts(posts);
  }

  async addPost(post: Post){
    const addedPost = await this.dbAccesser.addPost(post);
    this.blogState.addPost(addedPost);
  }

  async deleteRow(post: Post){  
    const deletedPost = await this.dbAccesser.deletePost(post.id);
    this.blogState.deletePost(deletedPost.id);
  }

}
