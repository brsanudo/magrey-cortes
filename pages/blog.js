import Link from "next/link";
import Layout from "../components/Layout";
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

const PostCard = ({ post }) => (
  <div className="col-md-4 py-2">
    <div className="card">
      <div className="overflow">
        <Image
          src={post.imageURL}
          alt="Picture of the author"
          width={400}
          height={400}
        />
      </div>
      <div className="card-body">
        <h1>{post.title}</h1>
        <p>{post.content}</p>
        <Link href={`/post?title=${post.title}`}>
          <button className="btn btn-light">Read</button>
        </Link>
      </div>
    </div>
  </div>
);

const blog = () => {
  return (
    <Layout title="Cortes" footer={false} dark>
      <div className="row">
        {posts.map((post, i) => (
          <PostCard post={post} key={i} />
        ))}
      </div>
    </Layout>
  );
};

export default blog;
