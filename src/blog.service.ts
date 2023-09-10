import { PostDto } from './blog.model';

export class BlogService {
  posts = [];

  getAllPosts() {
    return this.posts;
  }

  createPost(postDto: PostDto) {
    const id = this.posts.length + 1;
    this.posts.push({ id: id.toString(), ...postDto, createdDt: new Date() });
  }

  getPost(id: string) {
    const post = this.posts.find((post) => {
      return post.id === id;
    });
    console.log(post);
    return post;
  }

  delete(id: string) {
    const filterdPosts = this.posts.filter((post) => post.id !== id);
    this.posts = [...filterdPosts];
  }

  updatePost(id, postDto: PostDto) {
    const updateIndex = this.posts.findIndex((post) => post.id !== id);
    const updatePost = { id, ...postDto, updatedDt: new Date() };
    this.posts[updateIndex] = updatePost;
    return updatePost;
  }
}
