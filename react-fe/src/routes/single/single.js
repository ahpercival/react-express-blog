import { usePosts } from "../../hooks/usePosts";
import { useParams } from "react-router-dom";
import Image from "react-bootstrap/Image";

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
      <div>
        <Image
          src={article.image}
          alt={article.title}
          className="blog-header"
        />
        <div className="blog-content">
          <h1>{article.title}</h1>
          <p>Posted on {article.date}</p>
          <p>{article.content}</p>
        </div>
      </div>
    );
  }

  return <p>Article not found</p>;
};
