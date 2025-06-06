import { Handlers, PageProps } from "$fresh/server.ts";
import { getPost, getPosts, Post } from "@/utils/posts.ts";

export const handler: Handlers<Post[]> = {
  async GET(_req, ctx) {
    const posts = await getPosts();
    return ctx.render(posts);
  },
};

export default function BlogIndexPage(props: PageProps<Post[]>) {
  const posts = props.data;
  return (
    <main class="max-w-screen-md px-4 pt-16 mx-auto">
      <h1 class="text-5xl font-bold">
        <font color="b3323e"> Mataso's Creative Coding Blog</font>
      </h1>
      <div class="mt-8">
        {posts.map((post) => (
          <PostCard post={post} />
        ))}
      </div>
    </main>
  );
}

function PostCard(props: { post: Post }) {
  const { post } = props;
  return (
    <div class="py-8 border(t red-900)">
      <a class="sm:col-span-2" href={`/${post.slug}`}>
        <h3 class="text(3xl red-500) font-bold">{post.title}</h3>
        <time class="text-red-400">
          {new Date(post.publishedAt).toLocaleDateString("en-us", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <div class="mt-4 text-red-800">{post.snippet}</div>
      </a>
    </div>
  );
}
