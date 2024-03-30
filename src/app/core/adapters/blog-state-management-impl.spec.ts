import { TestBed } from '@angular/core/testing';
import { BlogStateMangementImpl } from './blog-state-management-impl';
import { Post, mockPost } from '../models/post';

describe('blogStateManagementImplementation', () => {
    
  let blogStateManagementImplementation: BlogStateMangementImpl;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlogStateMangementImpl],
    }).compileComponents();

    blogStateManagementImplementation = TestBed.inject(BlogStateMangementImpl);
  });

  it('create an object', () => {
    expect(blogStateManagementImplementation).toBeTruthy();
  });

  describe('setPosts', () => {

    it('correctly sets the current state of the sigPosts signal to empty', () => {
        blogStateManagementImplementation.setPosts([]);
        const result = blogStateManagementImplementation.sigPosts();
        const expected: Post[] = [];

        expect(result).toEqual(expected);
    });

    it('correctly sets an array of posts', () => {
        blogStateManagementImplementation.setPosts([mockPost]);
        const result = blogStateManagementImplementation.sigPosts();
        const expected: Post[] = [mockPost];

        expect(result).toEqual(expected);
    });

    it('correctly sets a very big array', () => {
        let mockPosts: Post[] =[]; 
        for(let i = 0; i < 999 ; i++){
            mockPosts.push(mockPost);
        }
        blogStateManagementImplementation.setPosts(mockPosts);
        const resultLength = blogStateManagementImplementation.sigPosts().length;
        const expected = 999;

        expect(resultLength).toEqual(expected);

    })
  });

  describe('addPost', ()=> {
    
    it('should correctly add post if the current state is empty' , ()=>{
        blogStateManagementImplementation.addPost(mockPost);
        const result = blogStateManagementImplementation.sigPosts();
        const expected = [mockPost];

        expect(result).toEqual(expected);
    });

    it('should correctly add a post if the current state is not empty', ()=> {
        blogStateManagementImplementation.setPosts([mockPost,mockPost]);
        
        blogStateManagementImplementation.addPost(mockPost);
        const resultLength = blogStateManagementImplementation.sigPosts().length
        const expectedLength = 3 ;

        expect(resultLength).toEqual(expectedLength);
    });


  });

  describe('deletePost', ()=>{
    it('should not do anything if the array is empty', ()=>{
        blogStateManagementImplementation.deletePost("");

        expect(blogStateManagementImplementation.sigPosts()).toEqual([]);
    });

    it('should correctly remove a post from the list', ()=>{
        blogStateManagementImplementation.setPosts([mockPost]);

        blogStateManagementImplementation.deletePost(mockPost.id);

        expect(blogStateManagementImplementation.sigPosts()).not.toContain(mockPost);
    })
  })
});
