import Image from "next/image";
import Link from "next/link";
import Author from "./__child/author";
import getPost from "../lib/helper";
import fetcher from "../lib/fetcher";
import Spinner from "./__child/spinner";
import Error from "./__child/error";

export default function section2() {
  const { data, isLoading, isError } = fetcher("api/posts");
  if (isLoading) return <Spinner />;
  if (isError) return <Error />;

  // console.log(process.env.baseUrl);
  // console.log(getPost());
  // getPost(2).then((res) => console.log(res));
  return (
    <section className="container mx-auto md:px-20 py-10">
      <h1 className="font-bold text-4xl py-12 text-center">Lastest Post</h1>
      {/*grid column*/}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
        {data.map((value: any, index: any) => (
          <Post data={value} key={index}></Post>
        ))}
      </div>
    </section>
  );
}

function Post({ data }: { data: any }) {
  const { id, title, description, category, img, published, author } = data;
  return (
    <div className="item">
      <div className="images">
        <Link href={`/posts/${id}`}>
          <Image
            alt="image"
            src={img || "/"}
            className="rounded"
            width={500}
            height={350}
          />
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
        <div className="cat flex gap-2">
          <Link
            href={`/posts/${id}`}
            className="text-orange-600 hover:text-orange-800"
          >
            {category || "Unknown"}
          </Link>
          <Link
            href={`/posts/${id}`}
            className="text-gray-800 hover:text-gray-600"
          >
            {published || "Unknown"}
          </Link>
        </div>
        <div className="title">
          <Link
            href={`/posts/${id}`}
            className="text-xl font-bold text-gray-800 hover:text-gray-600"
          >
            {title || "Unknown"}
          </Link>
        </div>
        <p className="text-gray-500 py-3">{description || "Unknown"}</p>
        {author ? <Author {...author}></Author> : <></>}
      </div>
    </div>
  );
}
