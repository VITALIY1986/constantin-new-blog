import Image from "next/image";
import Meta from "../components/Meta";
import Post from "../components/Post";
import Animate from "../components/Animate";
import Heading from "../components/Heading";
import Magazine from "../components/Magazine";
import { Block, Row, Col } from "../components/Grid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination as SwiperPagination } from "swiper";
import { getAllPostsForHome } from '../lib/api'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// Magazine cover image
import magazineCover from "../public/assets/images/covers/2.jpg";

function Fashion({ preview, allPosts }) {
  const mag = ' https://www.arcadiamedical.ro/storage/qsTkVV5NZdm6jdRWymoZJuXioEMDbfXY8qgzaIQ5.jpg'
    const heroPost = allPosts
    const morePosts = allPosts  
console.log(morePosts[0].coverImage.url)
    return (
        <>
<Meta />
            <Magazine>
                <Magazine.Cover image={magazineCover}>
                    <div className="absolute left-3 md:left-8 bottom-3 md:bottom-8">
                        <Animate name="fadeIn" delay="1.2s" duration="1s">
                            <Image alt="alt" src={morePosts[0].coverImage.url} width={69} height={69}   unoptimized={true} />
                        </Animate>
                    </div>
                    <Heading className="absolute left-3 md:left-8 top-32 md:top-48 text-white">
                        <Animate name="fadeInLeftSm" delay="1.2s" duration="2s">
                            <Heading.Title>
                                <h1 className="text-5xl text-white font-extrabold uppercase">
                                    You can
                                    <br />
                                    Change
                                    <br />
                                    the World
                                </h1>
                            </Heading.Title>
                        </Animate>
                        <Heading.Subtitle>
                            <Animate name="fadeIn" delay="1.8s" duration="3s">
                                <p>
                                    How Women are Redirecting Hollywood
                                    <br />
                                    <b className="text-xs text-primary">By Jasmin Smith</b>
                                </p>
                            </Animate>
                        </Heading.Subtitle>
                    </Heading>
                    <Heading className="absolute right-3 md:right-8 bottom-3 md:bottom-8 text-white text-right">
                        <Heading.Title>
                            <Animate name="fadeInRightSm" delay="1.2s" duration="2s">
                                <h2 className="text-5xl text-white uppercase">
                                    Strong
                                    <br />
                                    Style
                                </h2>
                            </Animate>
                        </Heading.Title>
                        <Heading.Subtitle>
                            <Animate name="fadeIn" delay="1.8s" duration="3s">
                                <p>
                                    New Ways to Wear Denim
                                    <br />
                                    Belt Bags make a Comeback
                                    <br />
                                    <b className="text-xs text-primary">How to Shop Mindfully</b>
                                </p>
                            </Animate>
                        </Heading.Subtitle>
                    </Heading>
                </Magazine.Cover>
                <Magazine.Content className="bg-white overflow-x-hidden">
                    <Block className="py-24 px-4 md:px-8">
                        <Swiper modules={[SwiperPagination]} pagination={{ clickable: true }} className="swiper--light">
                            {morePosts &&
                       
                                morePosts.map((item) => (
                                    <SwiperSlide key={item.id}>
                                        <Post post={item} model={2} max_words={22} image_width={555} image_height={555} />
                                    </SwiperSlide>
                                ))}
                        </Swiper>
                    </Block>
                    <Block className="px-4 md:px-8 pb-8 mb-16">
                        <Row className="row row-md">
                            {morePosts &&
                                morePosts.length > 0 &&
                                morePosts.slice(0, 9).map((item, index) => (
                                    <Col key={item.id} className="col-sm-12 col-md-6 col-lg-4">
                                        <Animate name="fadeInUpXs" delay={`${index + 3}00ms`} duration="1.8s">
                                            <Post post={item} model={1} image_width={334} image_height={334} image_quality={100} />
                                        </Animate>
                                    </Col>
                                ))}
                        </Row>
                    </Block>
                    <Block className="px-4 md:px-8 pb-8">
                        <Row className="row row-md row--alt">
                            {morePosts &&
                            
                              morePosts.map((item, index) => (
                                    <Col key={item.id} className="col-12">
                                        <Animate name="fadeInUpXs" delay={`${index + 3}00ms`} duration="1.8s">
                                            <Post post={item} model={2} max_words={14} image_width={600} image_height={600} image_quality={100} hover="move-in-left" />
                                        </Animate>
                                    </Col>
                                ))}
                        </Row>
                    </Block>
                    <Magazine.Footer className="mt-2 mb-8" color="#333" />
                </Magazine.Content>
            </Magazine>
        </>
    );
}
export async function getStaticProps({ preview = false }) {
    const allPosts = (await getAllPostsForHome(preview)) ?? []
    return {
      props: { preview, allPosts },
    }
  }
export default Fashion;