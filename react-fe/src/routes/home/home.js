import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import BlogCard from "../../components/BlogCard";
import { useHome } from "./useHome";

import { Pagination } from "../../components/Pagination";

export const Home = () => {
  const { pagination, $posts, currentPosts } = useHome();

  if ($posts.isLoading) {
    return <div>Loading</div>;
  }

  if ($posts.isSuccess) {
    return (
      <div>
        <Container className="m-4">
          <Row className="grid gap-4 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 m-4">
            {currentPosts.map((article, index) => {
              return (
                <Col key={index}>
                  <BlogCard props={article} />
                </Col>
              );
            })}
          </Row>
          <Pagination {...pagination} />
        </Container>
      </div>
    );
  }

  return <p>No posts found</p>;
};
