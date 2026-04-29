     import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { feedService } from "../services/feedService";
import { Post } from "../types/Post";

export function useFeed() {
  return useQuery({
    queryKey: ["feed"],
    queryFn: feedService.getPosts,
  });
}

// optimistic update
export function useLikePost() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => feedService.likePost(id),

    onMutate: async (id) => {
      await queryClient.cancelQueries({ queryKey: ["feed"] });

      const previous = queryClient.getQueryData<Post[]>(["feed"]);

      queryClient.setQueryData<Post[]>(["feed"], (old) =>
        old?.map((post) =>
          post.id === id
            ? {
                ...post,
                liked: !post.liked,
                likes: post.liked ? post.likes - 1 : post.likes + 1,
              }
            : post
        )
      );

      return { previous };
    },

    onError: (_err, _id, context) => {
      queryClient.setQueryData(["feed"], context?.previous);
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["feed"] });
    },
  });
}