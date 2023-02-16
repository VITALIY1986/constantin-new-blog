import Meta from "../components/Meta";
import Post from "../components/Post";
import Animate from "../components/Animate";
import Heading from "../components/Heading";
import Magazine from "../components/Magazine";
import { Block, Row, Col } from "../components/Grid";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Magazine cover image
import magazineCover from "../public/assets/images/covers/category-1.jpg";

// Data
const blog_category_1 = [
    {
        title: "Best Places to visit in the World",
        image: "/assets/images/blog/travel-2-1.jpg",
        image_width: 600,
        image_height: 600,
        excerpt: "In this post, we are going to highlight the many benefits of blogging for business and how you can get started with creating relevant content that drives inbound links and traffic to your site.",
        category: "travel",
        link: "/single-post-1",
    },
    {
        title: "Where can People travel right now?",
        image: "/assets/images/blog/travel-2-2.jpg",
        image_width: 600,
        image_height: 600,
        excerpt: "In this post, we are going to highlight the many benefits of blogging for business and how you can get started with creating relevant content that drives inbound links and traffic to your site.",
        category: "travel",
        link: "/single-post-1",
    },
    {
        title: "What is the best about Travelling?",
        image: "/assets/images/blog/travel-2-3.jpg",
        image_width: 600,
        image_height: 600,
        excerpt: "In this post, we are going to highlight the many benefits of blogging for business and how you can get started with creating relevant content that drives inbound links and traffic to your site.",
        category: "travel",
        link: "/single-post-1",
    },
    {
        title: "What are the best countries to visit?",
        image: "/assets/images/blog/travel-2-4.jpg",
        image_width: 600,
        image_height: 600,
        excerpt: "In this post, we are going to highlight the many benefits of blogging for business and how you can get started with creating relevant content that drives inbound links and traffic to your site.",
        category: "travel",
        link: "/single-post-1",
    },
    {
        title: "What do you Gain from Traveling?",
        image: "/assets/images/blog/travel-2-5.jpg",
        image_width: 600,
        image_height: 600,
        excerpt: "In this post, we are going to highlight the many benefits of blogging for business and how you can get started with creating relevant content that drives inbound links and traffic to your site.",
        category: "travel",
        link: "/single-post-1",
    },
    {
        title: "How much will it Cost to Travel?",
        image: "/assets/images/blog/travel-2-6.jpg",
        image_width: 600,
        image_height: 600,
        excerpt: "In this post, we are going to highlight the many benefits of blogging for business and how you can get started with creating relevant content that drives inbound links and traffic to your site.",
        category: "travel",
        link: "/single-post-1",
    },
    {
        title: "Best Places to visit in the World",
        image: "/assets/images/blog/travel-2-7.jpg",
        image_width: 600,
        image_height: 600,
        excerpt: "In this post, we are going to highlight the many benefits of blogging for business and how you can get started with creating relevant content that drives inbound links and traffic to your site.",
        category: "travel",
        link: "/single-post-1",
    },
    {
        title: "Where can People travel right now?",
        image: "/assets/images/blog/travel-2-8.jpg",
        image_width: 600,
        image_height: 600,
        excerpt: "In this post, we are going to highlight the many benefits of blogging for business and how you can get started with creating relevant content that drives inbound links and traffic to your site.",
        category: "travel",
        link: "/single-post-1",
    },
    {
        title: "What is the best about Travelling?",
        image: "/assets/images/blog/travel-2-9.jpg",
        image_width: 600,
        image_height: 600,
        excerpt: "In this post, we are going to highlight the many benefits of blogging for business and how you can get started with creating relevant content that drives inbound links and traffic to your site.",
        category: "travel",
        link: "/single-post-1",
    },
];

function Category() {
    return (
        <>
            <Meta />
            <Magazine className="bg-black">
                <Magazine.Cover image={magazineCover}>
                    <Heading className="absolute left-8 bottom-24 text-white">
                        <Heading.Title>
                            <h1 className="text-40 text-white font-extrabold" style={{ lineHeight: 1.2 }}>
                                Archive Results for
                                <br />
                                Category: <span className="text-yellow-400">Travel</span>
                                <br />
                            </h1>
                        </Heading.Title>
                        <Heading.Subtitle>
                            <p>9 posts found.</p>
                        </Heading.Subtitle>
                    </Heading>
                </Magazine.Cover>
                <Magazine.Content className="bg-black overflow-x-hidden">
                    <Block className="py-24 px-8">
                        <Row className="row row-md">
                            {blog_category_1 &&
                                blog_category_1.length > 0 &&
                                blog_category_1.slice(0, 9).map((item, index) => (
                                    <Col key={item.id} className="col-sm-12 col-md-6 col-lg-4">
                                        <Animate name="fadeInUpXs" delay={`${index + 3}00ms`} duration="1.8s">
                                            <Post post={item} model={1} color="light" image_width={334} image_height={334} image_quality={100} />
                                        </Animate>
                                    </Col>
                                ))}
                        </Row>
                    </Block>
                </Magazine.Content>
            </Magazine>
        </>
    );
}

export default Category;
