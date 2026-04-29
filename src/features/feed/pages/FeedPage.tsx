import { useFeed } from "../hooks/useFeed";
import { PostCard } from "../components/PostCard";

export default function FeedPage() {
  const { data, isLoading } = useFeed();

  if (isLoading) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="mx-auto max-w-xl space-y-4">
      {data?.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}