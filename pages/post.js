import Layout from "../components/Layout";
import { useRouter } from "next/router";
import Image from "next/image";

const posts = [
  {
    title: "React",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint excepturi ea explicabo. Illum suscipit illo, porro quisquam voluptatem",
    imageURL: "/home.jpg",
  },
  {
    title: "Angular",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint excepturi ea explicabo. Illum suscipit illo, porro quisquam voluptatem",
    imageURL: "/home.jpg",
  },
  {
    title: "Nextjs",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint excepturi ea explicabo. Illum suscipit illo, porro quisquam voluptatem",
    imageURL: "/home.jpg",
  },
  {
    title: "Nextjs",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint excepturi ea explicabo. Illum suscipit illo, porro quisquam voluptatem",
    imageURL: "/home.jpg",
  },
  {
    title: "Nextjs",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint excepturi ea explicabo. Illum suscipit illo, porro quisquam voluptatem",
    imageURL: "/home.jpg",
  },
];

const Post = () => {
  const router = useRouter();

  const currentPost = posts.filter(
    (post) => post.title === router.query.title
  )[0];

  return (
    <Layout title={router.query.title} footer={false}>
      <div className="text-center">
        <Image
          src={currentPost.imageURL}
          alt="Picture of the author"
          width={400}
          height={400}
        />
        <p className="p-4">{currentPost.content}</p>
      </div>
    </Layout>
  );
};

export default Post;
