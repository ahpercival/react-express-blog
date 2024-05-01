import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const BlogCard = (article) => {
  return (
    <Card key={article.props.id} className="grid h-full bg-slate-100 rounded-md border-2 border-slate-200 overflow-hidden hover:drop-shadow">
      <Card.Img
        variant="top"
        src={article.props.image}
        alt={article.props.title}
      />
      <Card.Body className="grid gap-4 p-8">
        <Card.Title className="font-bold">{article.props.title}</Card.Title>
        <Card.Text>Posted on {article.props.date}</Card.Text>
        <Card.Text>{article.props.summary}</Card.Text>
        <Link to={article.props.slug} className="rounded-md border-2 border-slate-200 text-center my-auto p-3 bg-slate-200 hover:bg-transparent">
          <Button variant="primary">Read More</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default BlogCard;
