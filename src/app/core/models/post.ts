import { PostgrestSingleResponse } from "@supabase/supabase-js";

export type Post = {
    id : string,
    title : string,
    content : string,
    date : string
}

/*
    converts the server response to a post using casts 
*/
export function toPost(serverResponse: PostgrestSingleResponse<any[]>): Post {
    const posts = serverResponse.data as Post[];
    return posts[0];
}
