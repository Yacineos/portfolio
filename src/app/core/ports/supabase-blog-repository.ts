import {  SupabaseClient } from "@supabase/supabase-js";
import { Post } from "../models/post";


/*
    interface that will handle :
        - the blog state
        - accessing supabase relational DB ( refer to https://supabase.com/ )
        - CRUD operations with a given table name 
*/
export abstract class SupabaseBlogRepository {
    
    /*
        supabase client to link the database and give access to supabase methods  
    */
    abstract readonly supabase: SupabaseClient ;

    /*
        the name of the table that store posts in the supabase db 
    */
    abstract readonly tableName : string ;

    /*
        access the db using the @tableName and fetch all the posts in the table 
        @returns Post[]
    */
    abstract getAllPosts() : Promise<Post[]> ;

    /*
        access the db and adds a new row(post) into the @tableName table 
        and then returns the added Post

        @Param Post

        @Returns Promise<Post>
    */
    abstract addPost(post : Post) : Promise<Post> ;

    /*
        access the db and deletes a row(post) from the @tableName table 
        and then returns the deleted Post
        
        @Param Post

        @Returns Promise<Post>
    */
    abstract deletePost(postId : string) : Promise<Post> ;

}