import { usePosts } from "../../hooks/usePosts";
import { useParams } from "react-router-dom";
import Image from "react-bootstrap/Image";
import parse from 'html-react-parser';

export const Single = () => {
  const $posts = usePosts();
  const { slug } = useParams();

  if ($posts.isLoading) {
    return <div>Loading</div>;
  }

  if ($posts.isSuccess) {
    const article = $posts.data.articles.find((article) => {
      return article.slug === slug;
    });

    return (
      <div className="mb-24">
        <Image
          src={article.image}
          alt={article.title}
          className="object-none object-center w-full max-h-[370px] mb-4"
        />
        <div className="mx-5 sm-mx-14 lg:mx-24">
          <h1 className="font-bold text-xl">{article.title}</h1>
          <p>Posted on {article.date}</p>
          <hr className="my-4" />
          <p>{parse(article.content)}</p>
        </div>
      </div>
    );
  }

  return <p>Article not found</p>;
};
