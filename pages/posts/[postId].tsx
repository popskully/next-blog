import Format from "../../layout/format";
import Author from "../../components/__child/author";
import Related from "../../components/__child/related";
import Image from "next/image";
import getPost from "../../lib/helper";
import fetcher from "../../lib/fetcher";
import Spinner from "../../components/__child/spinner";
import Error from "../../components/__child/error";
import { useRouter } from "next/router";
import { SWRConfig } from "swr";

export default function Page({ fallback }: { fallback: any }) {
  const router = useRouter();
  const { postId } = router.query;
  const { data, isLoading, isError } = fetcher(`api/posts/${postId}`);

  if (isLoading) return <Spinner></Spinner>;
  if (isError) return <Error></Error>;

  return (
    <SWRConfig value={{ fallback }}>
      <Article {...data}></Article>
    </SWRConfig>
  );
}

interface ArticleProps {
  title: any;
  subtitle: any;
  description: any;
  category: any;
  img: any;
  published: any;
  author: any;
}

function Article({
  title,
  subtitle,
  description,
  category,
  img,
  published,
  author,
}: ArticleProps) {
  return (
    <Format>
      <section className="container mx-auto md:px-2 py-16 w-1/2">
        <div className="flex justify-center">
          {author ? <Author {...author}></Author> : <></>}
        </div>
        <div className="post py-10">
          <h1 className="pb-5 text-4xl font-bold text-gray-800 text-center">
            {title || "Unknown"}
          </h1>
          <p className="text-xl text-gray-500 text-center">
            {subtitle || "Unknown"}
          </p>
          <div className="py-10">
            <Image
              alt="Blog Image"
              src={img || "/"}
              width={900}
              height={600}
            ></Image>
          </div>
          <div className="content text-gray-600 text-lg flex flex-col gap-4">
            <p>{description || "Unknown"}</p>
          </div>
        </div>
        <Related />
      </section>
    </Format>
  );
}

export async function getStaticProps({ params }: { params: any }) {
  const posts = await getPost(params.postId);

  return {
    props: {
      fallback: {
        "/api/posts": posts,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = await getPost();
  const paths = posts.map((value: any) => {
    return {
      params: {
        postId: value.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
