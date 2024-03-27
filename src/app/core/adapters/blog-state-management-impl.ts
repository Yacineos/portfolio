import { Injectable, WritableSignal, computed, signal } from "@angular/core";
import { BlogStateMangement } from "../ports/blog-state-management";
import { Post } from "../models/post";

@Injectable({
    providedIn:"root"
})
export class BlogStateMangementImpl extends BlogStateMangement{
    
    private readonly _sigPosts : WritableSignal<Post[]> = signal<Post[]>([]) ;
    readonly sigPosts = computed<Post[]>( () => this._sigPosts());

    setPosts(posts: Post[]): void {
        this._sigPosts.set(posts);
    }

    addPost(post: Post): void {
        this._sigPosts.update( (posts) => [...posts,post]);
    }

    deletePost(id: string): void {
        this._sigPosts.update((posts) => posts.filter( (post) => post.id !== id ));
    }
}