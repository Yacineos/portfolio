import { Injectable, WritableSignal, computed, signal } from '@angular/core';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { environment } from '../../environment';
import { Post } from '../../core/models/types';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private supabase: SupabaseClient = createClient(environment.supabaseUrl, environment.supabaseKey);

  private readonly tableName : string = "blogs" ;

  private readonly _sigPosts : WritableSignal<Post[]> = signal<Post[]>([]) ;
  readonly sigPosts = computed<Post[]>( () => this._sigPosts());

  constructor(){
    this.getAllPosts();
  }
  async getAllPosts(){

    let { data: blogs, error } = await this.supabase
                                      .from('blogs')
                                      .select('*')
    this._sigPosts.set(blogs as Post[]); 
  }
  getPost(post : Post){
    return this.supabase
      .from(this.tableName)
      .select(`id, title, content , created_at`)
      .eq('id', post.id)
      .single()
  }

  updatePost(post: Post) {
    const update = {
      ...post,
      updated_at: new Date(),
    }
    return this.supabase.from(this.tableName).upsert(update)
  }

  async addPost(post: Post){
    const postsWithTheOneWeJustAdded = await this.supabase.from(this.tableName)
                                                          .insert([ 
                                                              {title: post.title, content: post.content, created_at: post.date}
                                                            ])
                                                          .select();

    this._sigPosts.update((sg) => sg.concat(postsWithTheOneWeJustAdded.data as Post[]));
  }

  async deleteRow(post: Post){
    await this.supabase.from(this.tableName)
                       .delete()
                       .eq('id',post.id)
  }

}
