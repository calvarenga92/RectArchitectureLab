export interface Post {
  id: string;
  author: string;
  content: string;
  image?: string;
  likes: number;
  liked: boolean;
  createdAt: string;
}