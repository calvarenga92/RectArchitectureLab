import { Post } from "../types/Post";
import { useLikePost } from "../hooks/useFeed";

export function PostCard({ post }: { post: Post }) {
  const { mutate } = useLikePost();

  return (
    <div className="rounded-xl bg-white p-4 shadow-md">
      <h3 className="font-bold">{post.author}</h3>

      <p className="mt-2">{post.content}</p>

      {post.image && (
        <img
          src={post.image}
          className="mt-3 rounded-lg"
        />
      )}

      <div className="mt-4 flex items-center gap-3">
        <button
          onClick={() => mutate(post.id)}
          className="text-sm font-bold"
        >
          ❤️ {post.likes}
        </button>
      </div>
    </div>
  );
}