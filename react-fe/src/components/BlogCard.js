import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const BlogCard = (article) => {
  return (
    <Card
      key={article.props.id}
      className="blogCard"
      style={{ width: "18rem" }}
    >
      <Card.Img
        variant="top"
        src={article.props.image}
        alt={article.props.title}
      />
      <Card.Body>
        <Card.Title>{article.props.title}</Card.Title>
        <Card.Text>{article.props.date}</Card.Text>
        <Card.Text>{article.props.summary}</Card.Text>
        <Link to={article.props.slug}>
          <Button variant="primary">Read More</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default BlogCard;
