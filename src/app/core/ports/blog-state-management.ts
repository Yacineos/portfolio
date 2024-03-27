import { Signal } from "@angular/core";
import { Post } from "../models/post";

/*
    This abstract class define a blog state ,
        - it should exposes a readonly signal that holds the list 
        of the posts
        - it should offer a set method to update the state
        - it should offer an add method to add a new post
        - it should offer a delete post methode 
*/

export abstract class blogStateMangement {
    
    /*
        signal that holds the state of the posts 
    */
    abstract readonly sigPosts : Signal<Post[]> ;

    /*
        method called to set a post state 
    */
    abstract setPosts(posts: Post[]): void;

    /*
        method to add a new post into the post list 
        (should update the state)
    */
   abstract addPost(post: Post):void;

   /*
        method to delete a post from the post list
        (should update the state)
   */
  abstract deletePost(id : string):void;
  
}
