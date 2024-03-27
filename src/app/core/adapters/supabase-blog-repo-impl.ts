import { PostgrestSingleResponse, SupabaseClient, createClient } from "@supabase/supabase-js";
import { SupabaseBlogRepository } from "../ports/supabase-blog-repository";
import { environment } from "../../environment";
import { Post, toPost } from "../models/post";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn:"root"
})
export class SupabaseBlogRepositoryImpl extends SupabaseBlogRepository{
    
    readonly supabase: SupabaseClient = createClient(environment.supabaseUrl, environment.supabaseKey);
    
    readonly tableName : string = "blogs" ;

    async getAllPosts() : Promise<Post[]> {
        const fetchQueryResponse = await this.supabase.from(this.tableName).select('*');
        return fetchQueryResponse.data as Post[];
    }

    async addPost(post: Post): Promise<Post>{
    
        const addedPost = await this.supabase.from(this.tableName)
                                                    .insert([ 
                                                             {title: post.title, content: post.content, created_at: post.date}
                                                            ])
                                                    .select();
        
        return toPost(addedPost); 
    }

    async deletePost(postId: string): Promise<Post>{
    
        const deletedPost = await this.supabase.from(this.tableName)
                                               .delete()
                                               .eq('id',postId)
                                               .select();
        
        return toPost(deletedPost);
    }

}