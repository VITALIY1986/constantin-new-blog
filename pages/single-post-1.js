import Link from "next/link";
import Image from "next/image";
import Meta from "../components/Meta";
import Form from "../components/Form";
import Header from "../components/Header";
import Magazine from "../components/Magazine";
import PostNavigation from "../components/PostNavigation";
import { Block } from "../components/Grid";

// Magazine cover image
import magazineCover from "../public/assets/images/covers/single-post-1.jpg";

export default function SinglePost() {
    return (
        <>
            <Meta />
            <Header />
            <Magazine>
                <Magazine.Cover image={magazineCover}>
                    <Magazine.Footer className="absolute bottom-3 w-100" />
                </Magazine.Cover>
                <Magazine.Content>
                    <Block className="pt-10 md:pt-16 lg:pt-20 xl:pt-24 px-4 md:px-16 xl:px-20 pb-10 md:pb-16">
                        <div className="single-post">
                            <div className="single-post__head pb-10 md:pb-12">
                                <div className="post-category mb-6">
                                    <Link href="/category">
                                        <a>Travel</a>
                                    </Link>
                                </div>
                                <h1 className="text-4xl font-body font-bold leading-snug mb-6">What is the best thing about Travelling?</h1>
                                <ul className="post-metadata flex items-center whitespace-nowrap">
                                    <li className="pr-3">
                                        <div className="flex items-center">
                                            <div style={{ width: 30, height: 30 }}>
                                                <Image alt="alt" className="rounded-full" src="/assets/images/other/avatar.png" width={30} height={30} />
                                            </div>
                                            <span className="pl-3 pr-1">By</span>
                                            <span>Mona Smith</span>
                                        </div>
                                        <span className="dot"></span>
                                    </li>
                                    <li className="pr-3">
                                        <span>October 13, 2021</span>
                                    </li>
                                    <li className="post-metadata__line"></li>
                                </ul>
                            </div>
                            <div className="single-post__body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                <p>Risus maecenas amet morbi dui. Sociosqu habitant nostra praesent elementum sagittis porta erat proin quam. Montes orci semper condimentum gravida nostra risus semper penatibus egestas faucibus dictumst quam viverra platea. Consequat tempus arcu facilisis.</p>
                                <Image alt="alt" src="/assets/images/blog/single-post-1.jpg" width={800} height={533.333333333} />
                                <h2 className="text-3xl font-bold">Five Great Sources of Stunning Things</h2>
                                <ol>
                                    <li>Vidit mentitum vis in.</li>
                                    <li>Probo omnes fuisset ius an.</li>
                                    <li>Mix ea viderer sanctus indoctum.</li>
                                    <li>Possit theo phrastus.</li>
                                    <li>Id eripuit veritus ius, et sit veri.</li>
                                </ol>
                                <p>Malesuada luctus etiam, suscipit aliquam, lacus elementum magna cubilia elit fusce dignissim facilisi libero malesuada ante scelerisque pede sapien nec tempus ac vel nisi mattis sollicitudin conubia primis parturient netus erat aliquet netus. Magna porta venenatis nunc dignissim eros pharetra eget eleifend sociis est neque interdum bibendum. Vestibulum auctor.</p>
                                <p>de nonummy proin nibh. Quis porta aliquam cubilia primis vulputate tincidunt dis libero laoreet, platea enim faucibus cum scelerisque congue duis, metus porta praesent fusce, ullamcorper risus neque.</p>
                                <blockquote className="blockquote">
                                    <p>&quot;We love ourselves notwithstanding our faults, and we ought to love our friends in like manner&quot;</p>
                                    <cite>Cyrus the Great</cite>
                                </blockquote>
                                <Image alt="alt" src="/assets/images/blog/single-post-2.jpg" width={800} height={533.333333333} />
                                <h2 className="text-3xl font-bold">Travel is an investment in yourself.</h2>
                                <p>Magna. Curabitur lorem varius vivamus inceptos. Pharetra lectus, lobortis ac porta platea dolor posuere nonummy dui sed luctus elit fringilla laoreet ornare tellus praesent mus aliquet lectus cubilia vel hendrerit lacinia mollis nostra velit fringilla sociis sodales.</p>
                            </div>
                        </div>
                        <PostNavigation prevLink="#" prevTitle="How much will it Cost to Travel in 2022?" nextLink="#" nextTitle="Which is correct Travelling or Traveling?" className="py-12 my-12" />
                        <Form title="Leave a Comment" action="#" />
                    </Block>
                </Magazine.Content>
            </Magazine>
        </>
    );
}
