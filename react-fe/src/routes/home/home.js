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
        <Container>
          <Row>
            {currentPosts.map((article, index) => {
              return (
                <Col key={index} xs={6} md={4}>
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
