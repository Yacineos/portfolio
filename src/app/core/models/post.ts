import { PostgrestSingleResponse } from "@supabase/supabase-js";

export type Post = {
    id : string,
    title : string,
    content : string,
    date : string
}

export const mockPost : Post = {
    id : "-1" ,
    title: "would",
    content: "would",
    date: "1/1/N"
}

/*
    converts the server response to a post using casts 
*/
export function toPost(serverResponse: PostgrestSingleResponse<any[]>): Post {
    const posts = serverResponse.data as Post[];
    return posts[0];
}


