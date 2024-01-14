import Subscribe from "@/src/components/Subscribe";
import Item from "@/src/components/Item";
import RestaurantCardTab from "@/src/components/RestaurantCardTab";
import Layout from "@/src/layouts/Layout";
import WalletFuntion from "@/src/components/WalletFuntion";
import Link from "next/link";
import Edition from "@/src/components/edition_card";

const exampleRows = [
  {
// number: '/assets/img/2c36035682c874a7940051e79e8fe906.avif', // Path relative to the 'public' folder
number: 1,
symbol:  '/assets/img/2c36035682c874a7940051e79e8fe906.avif', // Path relative to the 'public' folder
collection: 'Bitcoin',
floor: '45,000',
volume: '200M',
owners: '3M',
support: '24/7'
  },
  {
    number: 2,
    symbol:  '/assets/img/bd6822389dd9dbda7a00a882b20f4f84.avif', // Path relative to the 'public' folder
    collection: 'Ethereum',
    floor: '3,000',
    volume: '150M',
    owners: '5M',
    support: '24/7'
  },
  {
    number: 3,
    symbol:  '/assets/img/5a430b65e24425193ee98c5129cb93e1.webp', // Path relative to the 'public' folder
    collection: 'Litecoin',
    floor: '150',
    volume: '50M',
    owners: '1M',
    support: 'Business Hours'
  },
  {
    number: 4,
    symbol:  '/assets/img/H8jOCJuQokNqGBpkBN5wk1oZwO7LM8bNnrHCaekV2nKjnCqw6UB5oaH8XyNeBDj6bA_n1mjejzhFQUP3O1NfjFLHr3FOaeHcTOOT.avif', // Path relative to the 'public' folder
    collection: 'Ripple',
    floor: '0.8',
    volume: '120M',
    owners: '2M',
    support: '24/5'
  },
  {
    number: 5,
    symbol:  '/assets/img/lHexKRMpw-aoSyB1WdFBff5yfANLReFxHzt1DOj_sg7mS14yARpuvYcUtsyyx-Nkpk6WTcUPFoG53VnLJezYi8hAs0OxNZwlw6Y-dmI.avif', // Path relative to the 'public' folder
    collection: 'Cardano',
    floor: '1.2',
    volume: '80M',
    owners: '2.5M',
    support: '24/7'
  },
  {
    number: 6,
    symbol:  '/assets/img/ODl0M4aBjdBhEsqnH9-JgSd7Hg8CCgrZ_I6bs9vBopnB_lUYn90rr7f_rWHB1IHaUo8F6LVNQ4kk-Be1KVPUyy8NON8m_CTPE66Y.avif', // Path relative to the 'public' folder
    collection: 'Polkadot',
    floor: '25',
    volume: '60M',
    owners: '900K',
    support: '24/7'
  },
  {
    number: 7,
    symbol:  '/assets/img/b1c9ed2e584b4f6e418bf1ca15311844 (1).avif', // Path relative to the 'public' folder
    collection: 'Bitcoin Cash',
    floor: '500',
    volume: '40M',
    owners: '1.5M',
    support: 'Business Hours'
  },
  {
    number: 8,
    symbol:  '/assets/img/c0b7dfed5908126d92877c00470ee72a.avif', // Path relative to the 'public' folder
    collection: 'Solana',
    floor: '40',
    volume: '100M',
    owners: '800K',
    support: '24/7'
  },
  {
    number: 9,
    symbol:  '/assets/img/bbaf43ee4a02d5affb7e8fc186d0bdb5.avif', // Path relative to the 'public' folder
    collection: 'Chainlink',
    floor: '20',
    volume: '70M',
    owners: '2M',
    support: '24/7'
  },
  {
    number: 10,
    symbol:  '/assets/img/yNi-XdGxsgQCPpqSio4o31ygAV6wURdIdInWRcFIl46UjUQ1eV7BEndGe8L661OoG-clRi7EgInLX4LPu9Jfw4fq0bnVYHqg7RFi.avif', // Path relative to the 'public' folder
    collection: 'Chainlink',
    floor: '20',
    volume: '70M',
    owners: '2M',
    support: '24/7'
  }
];
const Blog = () => {
  const items = [
    {
      id: 5,
      image: "/assets/img/edition_thumb_320.jpg",
      title: "Collection Name",
      edition:"12,000",
      tags: ["breakfast", "brunch"],
      price: 0.07000,
      lastSale: 0.06402,
      category: ["edition"],
    },
    {
      id: 5,
      image: "/assets/img/edition_thumb_320.jpg",
      title: "Collection Name",
      edition:"12,000",
      tags: ["breakfast", "brunch"],
      price: 0.07000,
      lastSale: 0.06402,
      category: ["edition"],
    },
    {
      id: 5,
      image: "/assets/img/edition_thumb_320.jpg",
      title: "Collection Name",
      edition:"12,000",
      tags: ["breakfast", "brunch"],
      price: 0.07000,
      lastSale: 0.06402,
      category: ["edition"],
    },
    {
      id: 5,
      image: "/assets/img/edition_thumb_320.jpg",
      title: "Collection Name",
      edition:"12,000",
      tags: ["breakfast", "brunch"],
      price: 0.07000,
      lastSale: 0.06402,
      category: ["edition"],
    },
    {
      id: 5,
      image: "/assets/img/edition_thumb_320.jpg",
      title: "Collection Name",
      edition:"12,000",
      tags: ["breakfast", "brunch"],
      price: 0.07000,
      lastSale: 0.06402,
      category: ["edition"],
    },
    {
      id: 5,
      image: "/assets/img/edition_thumb_320.jpg",
      title: "Collection Name",
      edition:"12,000",
      tags: ["breakfast", "brunch"],
      price: 0.07000,
      lastSale: 0.06402,
      category: ["edition"],
    },
    {
      id: 5,
      image: "/assets/img/edition_thumb_320.jpg",
      title: "Collection Name",
      edition:"12,000",
      tags: ["breakfast", "brunch"],
      price: 0.07000,
      lastSale: 0.06402,
      category: ["edition"],
    },
    {
      id: 5,
      image: "/assets/img/edition_thumb_320.jpg",
      title: "Collection Name",
      edition:"12,000",
      tags: ["breakfast", "brunch"],
      price: 0.07000,
      lastSale: 0.06402,
      category: ["edition"],
    },
    {
      id: 5,
      image: "/assets/img/edition_thumb_320.jpg",
      title: "Collection Name",
      edition:"12,000",
      tags: ["breakfast", "brunch"],
      price: 0.07000,
      lastSale: 0.06402,
      category: ["edition"],
    },
    {
      id: 5,
      image: "/assets/img/edition_thumb_320.jpg",
      title: "Collection Name",
      edition:"12,000",
      tags: ["breakfast", "brunch"],
      price: 0.07000,
      lastSale: 0.06402,
      category: ["edition"],
    },
    {
      id: 5,
      image: "/assets/img/edition_thumb_320.jpg",
      title: "Collection Name",
      edition:"12,000",
      tags: ["breakfast", "brunch"],
      price: 0.07000,
      lastSale: 0.06402,
      category: ["edition"],
    },
    {
      id: 5,
      image: "/assets/img/edition_thumb_320.jpg",
      title: "Collection Name",
      edition:"12,000",
      tags: ["breakfast", "brunch"],
      price: 0.07000,
      lastSale: 0.06402,
      category: ["edition"],
    },
    {
      id: 5,
      image: "/assets/img/edition_thumb_320.jpg",
      title: "Collection Name",
      edition:"12,000",
      tags: ["breakfast", "brunch"],
      price: 0.07000,
      lastSale: 0.06402,
      category: ["edition"],
    },
    {
      id: 5,
      image: "/assets/img/edition_thumb_320.jpg",
      title: "Collection Name",
      edition:"12,000",
      tags: ["breakfast", "brunch"],
      price: 0.07000,
      lastSale: 0.06402,
      category: ["edition"],
    },
    {
      id: 5,
      image: "/assets/img/edition_thumb_320.jpg",
      title: "Collection Name",
      edition:"12,000",
      tags: ["breakfast", "brunch"],
      price: 0.07000,
      lastSale: 0.06402,
      category: ["edition"],
    },
    {
      id: 5,
      image: "/assets/img/edition_thumb_320.jpg",
      title: "Collection Name",
      edition:"12,000",
      tags: ["breakfast", "brunch"],
      price: 0.07000,
      lastSale: 0.06402,
      category: ["edition"],
    },
    {
      id: 5,
      image: "/assets/img/edition_thumb_320.jpg",
      title: "Collection Name",
      edition:"12,000",
      tags: ["breakfast", "brunch"],
      price: 0.07000,
      lastSale: 0.06402,
      category: ["edition"],
    },
    {
      id: 5,
      image: "/assets/img/edition_thumb_320.jpg",
      title: "Collection Name",
      edition:"12,000",
      tags: ["breakfast", "brunch"],
      price: 0.07000,
      lastSale: 0.06402,
      category: ["edition"],
    },
  ];
  return (
    <Layout>
          <div class="collection_bg_img">
    <div class="collection_banner_gradient"></div>
    <div class="collection_banner_gradient_bottom"></div>
    <img alt="collection banner" class="collection_banner_img"src="assets/img/31341974_about_media_98e2f8a2-a8aa-46d9-9267-87108353c759.avif" />
    </div> 
      <section
        className="hero-section about gap"
        // style={{ backgroundImage: "url(assets/img/background.png)" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={300}
            >
              <div className="about-text">
                <ul className="crumbs d-flex">
                  <li>
                    <Link href="/">Collection</Link>
                  </li>
                  <li className="two">
                    <Link href="/">
                      <i className="fa-solid fa-right-long" />
                      Edition Page
                    </Link>
                  </li>
                </ul>
                <h2>Collection Name #12987</h2>
                <p>
                  Egestas sed tempus urna et pharetra pharetra massa. 
                </p>
                

<div href="checkout" class="button button-2 mb-3 buyNow">BUY NOW</div>


              </div>
            </div>
            <div
              className="col-lg-6"
              data-aos="flip-up"
              data-aos-delay={300}
              data-aos-duration={400}
            >
              <div className="restaurants-girl-img blog food-photo-section">
                <img alt="man" src="assets/img/restaurant-1.jpg" />{" "}
                <a href="#" className="one">
                  <i className="fa-brands fa-facebook-f" />
                </a>{" "}
                <a href="#" className="two">
                  <i className="fa-brands fa-instagram" />
                </a>{" "}
                <a href="#" className="three">
                  <i className="fa-brands fa-twitter" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* posts-section-blog */}
      <section className="posts-section-blog gap">
        <div className="container">
          <div className="row">

           {/* <CryptoExchangeTable /> */}

           <div className="overflow-x-auto">
            <table className="table w-full table-auto border-collapse border-slate-500">
                <thead>
                    <tr>
                        <th className="border-b border-slate-600 px-4 py-2 text-slate-800">#</th>
                        <th className="border-b border-slate-600 px-4 py-2 text-slate-800">Symbol</th>
                        <th className="border-b border-slate-600 px-4 py-2 text-slate-800">Collection</th>
                        <th className="border-b border-slate-600 px-4 py-2 text-slate-800">Floor</th>
                        <th className="border-b border-slate-600 px-4 py-2 text-slate-800">Volume</th>
                        <th className="border-b border-slate-600 px-4 py-2 text-slate-800">Owners</th>
                        <th className="border-b border-slate-600 px-4 py-2 text-slate-800">Support</th>
                    </tr>
                </thead>
                <tbody>
                    {exampleRows.map((row, index) => (
                        <tr key={index}>
                            <td className="border-custo border-slate-700 max-w-40 ml-2">{row.number}</td>
                            <td className="border-custo-img border-slate-700">
                                <img src={row.symbol} alt="Symbol" className="thumbnail_table w-4 h-4" />
                            </td>
                            <td className="border-custo border-slate-700">{row.collection}</td>
                            <td className="border-custo border-slate-700">{row.floor}</td>
                            <td className="border-custo border-slate-700">{row.volume}</td>
                            <td className="border-custo border-slate-700">{row.owners}</td>
                            <td className="border-custo border-slate-700">{row.support}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
            <WalletFuntion/> 
           

            {/* <div
              className="col-lg-12"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={300}
            >
              <div className="news-posts-one full">
                <div className="blog-post-data-img">
                  <img alt="man" src="assets/img/blog-2.jpg" />
                  <div className="quickeat">
                    {" "}
                    <a href="#">news</a> <a href="#">quickeat</a>
                  </div>
                </div>
                <div className="blog-post-data-img">
                  <h3>We Have Received An Award For The Quality Of Our Work</h3>
                  <p>
                    Scelerisque purus semper eget duis at. Tincidunt ornare
                    massa eget egestas purus viverra. Morbi enim nunc faucibus a
                    pellentesque. Lobortis elementum nibh tellus molestie nunc
                    non...
                  </p>{" "}
                  <Link href="/single-blog">
                    Read More
                    <i className="fa-solid fa-arrow-right" />
                  </Link>
                  <ul className="data">
                    <li>
                      <h6>
                        <i className="fa-solid fa-user" />
                        by Quickeat
                      </h6>
                    </li>
                    <li>
                      <h6>
                        <i className="fa-regular fa-calendar-days" />
                        01.Jan. 2022
                      </h6>
                    </li>
                    <li>
                      <h6>
                        <i className="fa-solid fa-eye" />
                        132
                      </h6>
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}
            {/* <div
              className="col-xl-4 col-lg-6 col-md-6 col-sm-12"
              data-aos="flip-up"
              data-aos-delay={200}
              data-aos-duration={300}
            >
              <div className="news-posts-one blog">
                <img alt="man" src="assets/img/news-2.jpg" />
                <div className="quickeat">
                  {" "}
                  <a href="#">news</a> <a href="#">quickeat</a>
                </div>
                <h3>With Quickeat you can order food for the whole day</h3>
                <p>
                  Scelerisque purus semper eget duis at. Tincidunt ornare massa
                  eget egestas purus viverra. Morbi enim nunc faucibus a
                  pellentesque. Lobortis elementum nibh tellus molestie nunc
                  non...
                </p>{" "}
                <Link href="/single-blog">
                  Read More
                  <i className="fa-solid fa-arrow-right" />
                </Link>
                <ul className="data">
                  <li>
                    <h6>
                      <i className="fa-solid fa-user" />
                      by Quickeat
                    </h6>
                  </li>
                  <li>
                    <h6>
                      <i className="fa-regular fa-calendar-days" />
                      01.Jan. 2022
                    </h6>
                  </li>
                  <li>
                    <h6>
                      <i className="fa-solid fa-eye" />
                      132
                    </h6>
                  </li>
                </ul>
              </div>
            </div> */}
            {/* <div
              className="col-xl-4 col-lg-6 col-md-6 col-sm-12"
              data-aos="flip-up"
              data-aos-delay={300}
              data-aos-duration={400}
            >
                         
              <div className="news-posts-one blog">
                <img alt="man" src="assets/img/news-3.jpg" />
                <div className="quickeat">
                  {" "}
                  <a href="#">news</a> <a href="#">quickeat</a>
                </div>
                <h3>127+ Couriers On Our Team Big Food Trends</h3>
                <p>
                  Scelerisque purus semper eget duis at. Tincidunt ornare massa
                  eget egestas purus viverra. Morbi enim nunc faucibus a
                  pellentesque. Lobortis elementum nibh tellus molestie nunc
                  non...
                </p>{" "}
                <Link href="/single-blog">
                  Read More
                  <i className="fa-solid fa-arrow-right" />
                </Link>
                <ul className="data">
                  <li>
                    <h6>
                      <i className="fa-solid fa-user" />
                      by Quickeat
                    </h6>
                  </li>
                  <li>
                    <h6>
                      <i className="fa-regular fa-calendar-days" />
                      01.Jan. 2022
                    </h6>
                  </li>
                  <li>
                    <h6>
                      <i className="fa-solid fa-eye" />
                      132
                    </h6>
                  </li>
                </ul>
              </div>
            </div> */}
            {/* <div
              className="col-xl-4 col-lg-6 col-md-6 col-sm-12"
              data-aos="flip-up"
              data-aos-delay={400}
              data-aos-duration={500}
            >
              <div className="news-posts-one blog">
                <img alt="man" src="assets/img/news-7.jpg" />
                <div className="quickeat">
                  {" "}
                  <a href="#">news</a> <a href="#">quickeat</a>
                </div>
                <h3>Why You Should Optimize Your Menu for Delivery</h3>
                <p>
                  Scelerisque purus semper eget duis at. Tincidunt ornare massa
                  eget egestas purus viverra. Morbi enim nunc faucibus a
                  pellentesque. Lobortis elementum nibh tellus molestie nunc
                  non...
                </p>{" "}
                <Link href="/single-blog">
                  Read More
                  <i className="fa-solid fa-arrow-right" />
                </Link>
                <ul className="data">
                  <li>
                    <h6>
                      <i className="fa-solid fa-user" />
                      by Quickeat
                    </h6>
                  </li>
                  <li>
                    <h6>
                      <i className="fa-regular fa-calendar-days" />
                      01.Jan. 2022
                    </h6>
                  </li>
                  <li>
                    <h6>
                      <i className="fa-solid fa-eye" />
                      132
                    </h6>
                  </li>
                </ul>
              </div>
            </div> */}
            {/* <div
              className="col-xl-4 col-lg-6 col-md-6 col-sm-12"
              data-aos="flip-up"
              data-aos-delay={200}
              data-aos-duration={300}
            >
              <div className="news-posts-one blog">
                <img alt="man" src="assets/img/news-4.jpg" />
                <div className="quickeat">
                  {" "}
                  <a href="#">news</a> <a href="#">quickeat</a>
                </div>
                <h3>How Restaurants Can Engage with Millennials in 2022</h3>
                <p>
                  Scelerisque purus semper eget duis at. Tincidunt ornare massa
                  eget egestas purus viverra. Morbi enim nunc faucibus a
                  pellentesque. Lobortis elementum nibh tellus molestie nunc
                  non...
                </p>{" "}
                <Link href="/single-blog">
                  Read More
                  <i className="fa-solid fa-arrow-right" />
                </Link>
                <ul className="data">
                  <li>
                    <h6>
                      <i className="fa-solid fa-user" />
                      by Quickeat
                    </h6>
                  </li>
                  <li>
                    <h6>
                      <i className="fa-regular fa-calendar-days" />
                      01.Jan. 2022
                    </h6>
                  </li>
                  <li>
                    <h6>
                      <i className="fa-solid fa-eye" />
                      132
                    </h6>
                  </li>
                </ul>
              </div>
            </div> */}
            {/* <div
              className="col-xl-4 col-lg-6 col-md-6 col-sm-12"
              data-aos="flip-up"
              data-aos-delay={300}
              data-aos-duration={400}
            >
              <div className="news-posts-one blog">
                <img alt="man" src="assets/img/news-5.jpg" />
                <div className="quickeat">
                  {" "}
                  <a href="#">news</a> <a href="#">quickeat</a>
                </div>
                <h3>Why You Should Optimize Your Menu for Delivery</h3>
                <p>
                  Scelerisque purus semper eget duis at. Tincidunt ornare massa
                  eget egestas purus viverra. Morbi enim nunc faucibus a
                  pellentesque. Lobortis elementum nibh tellus molestie nunc
                  non...
                </p>{" "}
                <Link href="/single-blog">
                  Read More
                  <i className="fa-solid fa-arrow-right" />
                </Link>
                <ul className="data">
                  <li>
                    <h6>
                      <i className="fa-solid fa-user" />
                      by Quickeat
                    </h6>
                  </li>
                  <li>
                    <h6>
                      <i className="fa-regular fa-calendar-days" />
                      01.Jan. 2022
                    </h6>
                  </li>
                  <li>
                    <h6>
                      <i className="fa-solid fa-eye" />
                      132
                    </h6>
                  </li>
                </ul>
              </div>
            </div> */}
            {/* <div
              className="col-xl-4 col-lg-6 col-md-6 col-sm-12"
              data-aos="flip-up"
              data-aos-delay={400}
              data-aos-duration={500}
            >
              <div className="news-posts-one blog">
                <img alt="man" src="assets/img/news-6.jpg" />
                <div className="quickeat">
                  {" "}
                  <a href="#">news</a> <a href="#">quickeat</a>
                </div>
                <h3>5 Big food Trends Coming Your Way in 2022</h3>
                <p>
                  Scelerisque purus semper eget duis at. Tincidunt ornare massa
                  eget egestas purus viverra. Morbi enim nunc faucibus a
                  pellentesque. Lobortis elementum nibh tellus molestie nunc
                  non...
                </p>{" "}
                <Link href="/single-blog">
                  Read More
                  <i className="fa-solid fa-arrow-right" />
                </Link>
                <ul className="data">
                  <li>
                    <h6>
                      <i className="fa-solid fa-user" />
                      by Quickeat
                    </h6>
                  </li>
                  <li>
                    <h6>
                      <i className="fa-regular fa-calendar-days" />
                      01.Jan. 2022
                    </h6>
                  </li>
                  <li>
                    <h6>
                      <i className="fa-solid fa-eye" />
                      132
                    </h6>
                  </li>
                </ul>
              </div>
            </div> */}
            {/* <div
              className="button-gap"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={300}
            >
              {" "}
              <Link href="/single-blog" className="button button-2 non">
                See All
                <i className="fa-solid fa-arrow-right" />
              </Link>
            </div> */}
          </div>

          <Edition id="editions" className="flex-row w-auto" 

items={items}

/>
        </div>

        
        
      </section>

      {/* subscribe-section */}
      {/* <Subscribe /> */}
      {/* <Edition/> */}
    </Layout>
  );
};
export default Blog;
