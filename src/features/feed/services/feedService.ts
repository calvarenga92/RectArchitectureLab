import type { Post } from "../types/Post";

const mockPosts: Post[] = [
  {
    id: "1",
    author: "Claudio",
    content: "Construindo um feed com React Query e arquitetura limpa.",
    image: "https://picsum.photos/600/350",
    likes: 10,
    liked: false,
    createdAt: new Date().toISOString(),
  },
   {
    id: "2",
    author: "Claudio",
    content: "Construindo um feed com React Query e arquitetura limpa.",
    image: "https://picsum.photos/600/350",
    likes: 10,
    liked: false,
    createdAt: new Date().toISOString(),
  },
];

export const feedService = {
  async getPosts(): Promise<Post[]> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockPosts), 800);
    });
  },

  async likePost(id: string): Promise<void> {
    console.log("Liked post:", id);

    return new Promise((resolve) => {
      setTimeout(() => resolve(), 300);
    });
  },
};