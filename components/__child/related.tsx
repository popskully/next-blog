import Link from "next/link";
import Image from "next/image";
import Author from "../../components/__child/author";
import fetcher from "../../lib/fetcher";
import Spinner from "./spinner";
import Error from "./error";

export default function Related() {
  const { data, isLoading, isError } = fetcher("api/popular");
  if (isLoading) return <Spinner />;
  if (isError) return <Error />;
  return (
    <div>
      <section className="pt-20">
        <h1 className="font-bold text-3xl py-10">Related</h1>
        <div className="flex flex-col gap-10">
          {data.map((value, index) => (
            <Post key={index} data={value}></Post>
          ))}
        </div>
      </section>
    </div>
  );
}

function Post({ data }) {
  const { id, title, description, category, img, published, author } = data;
  return (
    <div className="flex gap-5">
      <div className="image flex flex-col justify-start">
        <Link href={`/posts/${id}`}>
          <Image
            alt="image"
            src={img || "/"}
            className="rounded"
            width={300}
            height={200}
          />
        </Link>
      </div>
      <div className="info flex justify-center flex-col">
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
        {author ? <Author {...author}></Author> : <></>}
      </div>
    </div>
  );
}
