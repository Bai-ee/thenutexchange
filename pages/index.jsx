import Subscribe from "@/src/components/Subscribe";
import Layout from "@/src/layouts/Layout";
import { sliderProps } from "@/src/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
// import { CryptoExchangeTable } from "@/src/components/table";



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

const Index = () => {
  return (
    <Layout>
      <section
        className="hero-section gap"
        style={{ backgroundImage: "url(assets/img/background-1.png)" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={300}
            >
              <div className="restaurant">
                <h1>
                  DISCOVER<br></br>
                  MINT<br></br>
                  COLLECT<br></br>
                  REPEAT.<br></br>
                </h1>
                {/* <p>
                Enhancing your experience with unparalleled security, user-friendly interfaces, and a vibrant community of artists and collectors.
                </p> */}
                <div className="nice-select-one">
                  <select className="nice-select Advice">
                    <option>Featured Collections</option>
                    <option>Featured Collection</option>
                    <option>Featured Collection</option>
                    <option>Featured Collection</option>
                    <option>Featured Collection</option>
                  </select>{" "}
                  <Link href="checkout" className="button button-2">
                    BROWSE
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6"
              data-aos="fade-up"
              data-aos-delay={300}
              data-aos-duration={400}
            >
              <div className="img-restaurant">
                <img alt="man" className="img-custo" src="assets/img/photo-1.png" />
                {/* <div className="wilmington">
                  <img alt="img" src="assets/img/photo-2.jpg" />
                  <div>
                    <p>Restaurant of the Month</p>
                    <h6>The Wilmington</h6>
                    <div>
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-regular fa-star-half-stroke" />
                    </div>
                  </div>
                </div> */}
                {/* <div className="wilmington location-restaurant">
                  <i className="fa-solid fa-location-dot" />
                  <div>
                    <h6>12 Restaurant</h6>
                    <p>In Your city</p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* works-section */}
      <section className="works-section gap no-top">
        <div className="container">


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




          {/* <div
            className="hading"
            data-aos="fade-up"
            data-aos-delay={200}
            data-aos-duration={300}
          >
            <h2>How it works</h2>
            <p>
              Magna sit amet purus gravida quis blandit turpis cursus. Venenatis
              tellus in
              <br /> metus vulputate eu scelerisque felis.
            </p>
          </div>
          <div className="row ">
            <div
              className="col-lg-4 col-md-6 col-sm-12"
              data-aos="flip-up"
              data-aos-delay={200}
              data-aos-duration={300}
            >
              <div className="work-card">
                <img alt="img" src="assets/img/Illustration-1.png" />
                <h4>
                  <span>01</span> Select Restaurant
                </h4>
                <p>
                  Non enim praesent elementum facilisis leo vel fringilla.
                  Lectus proin nibh nisl condimentum id. Quis varius quam
                  quisque id diam vel.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-12"
              data-aos="flip-up"
              data-aos-delay={300}
              data-aos-duration={400}
            >
              <div className="work-card">
                <img alt="img" src="assets/img/Illustration-2.png" />
                <h4>
                  <span>02</span> Select menu
                </h4>
                <p>
                  Eu mi bibendum neque egestas congue quisque. Nulla facilisi
                  morbi tempus iaculis urna id volutpat lacus. Odio ut sem nulla
                  pharetra diam sit amet.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-12"
              data-aos="flip-up"
              data-aos-delay={400}
              data-aos-duration={500}
            >
              <div className="work-card">
                <img alt="img" src="assets/img/illustration-3.png" />
                <h4>
                  <span>03</span> Wait for delivery
                </h4>
                <p>
                  Nunc lobortis mattis aliquam faucibus. Nibh ipsum consequat
                  nisl vel pretium lectus quam id leo. A scelerisque purus
                  semper eget. Tincidunt arcu non.
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </section>
      {/* best-restaurants */}
      {/* <section
        className="best-restaurants gap"
        style={{ background: "#fcfcfc" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6"
              data-aos="flip-up"
              data-aos-delay={200}
              data-aos-duration={300}
            >
              <div className="city-restaurants">
                <h2>12 Best Restaurants in Your City</h2>
                <p>
                  Magna sit amet purus gravida quis blandit turpis cursus.
                  Venenatis tellus in metus vulputate.
                </p>
              </div>
            </div>
            <div
              className="col-lg-6"
              data-aos="flip-up"
              data-aos-delay={300}
              data-aos-duration={400}
            >
              <div className="logos-card">
                <img alt="logo" src="assets/img/logos-2.jpg" />
                <div className="cafa">
                  <h4>
                    <Link href="restaurant-card">Kennington Lane Cafe</Link>
                  </h4>
                  <div>
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-regular fa-star" />
                  </div>
                  <div className="cafa-button">
                    {" "}
                    <a href="#">american</a> <a href="#">steakhouse</a>{" "}
                    <a className="end" href="#">
                      seafood
                    </a>
                  </div>
                  <p>
                    Non enim praesent elementum facilisis leo vel fringilla.
                    Lectus proin nibh nisl condimentum id. Quis varius quam
                    quisque id diam vel.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6"
              data-aos="flip-up"
              data-aos-delay={400}
              data-aos-duration={500}
            >
              <div className="logos-card two">
                <img alt="logo" src="assets/img/logos-1.jpg" />
                <div className="cafa">
                  <h4>
                    <Link href="restaurant-card">The Wilmington</Link>
                  </h4>
                  <div>
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                  </div>
                  <div className="cafa-button">
                    {" "}
                    <a href="#">american</a> <a href="#">steakhouse</a>{" "}
                    <a className="end" href="#">
                      seafood
                    </a>
                  </div>
                  <p>
                    Vulputate enim nulla aliquet porttitor lacus luctus.
                    Suscipit adipiscing bibendum est ultricies integer. Sed
                    adipiscing diam donec adipiscing tristique.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6"
              data-aos="flip-up"
              data-aos-delay={500}
              data-aos-duration={600}
            >
              <div className="logos-card three">
                <img alt="logo" src="assets/img/logos-3.jpg" />
                <div className="cafa">
                  <h4>
                    <Link href="restaurant-card">Kings Arms</Link>
                  </h4>
                  <div>
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-regular fa-star-half-stroke" />
                  </div>
                  <div className="cafa-button">
                    {" "}
                    <a href="#">healthy</a> <a href="#">steakhouse</a>{" "}
                    <a className="end" href="#">
                      vegetarian
                    </a>
                  </div>
                  <p>
                    Tortor at risus viverra adipiscing at in tellus. Cras semper
                    auctor neque vitae tempus. Dui accumsan sit amet nulla
                    facilisi. Sed adipiscing diam donec adipiscing tristique.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="button-gap">
            <Link href="restaurants" className="button button-2 non">
              See All
              <i className="fa-solid fa-arrow-right" />
            </Link>
          </div>
        </div>
      </section> */}
      {/* your-favorite-food */}
      {/* <section
        className="your-favorite-food gap"
        style={{ backgroundImage: "url(assets/img/background-1.png)" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-5"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={300}
            >
              <div className="food-photo-section">
                <img alt="img" src="assets/img/photo-3.png" />{" "}
                <a href="#" className="one">
                  <i className="fa-solid fa-burger" />
                  Burgers
                </a>{" "}
                <a href="#" className="two">
                  <i className="fa-solid fa-cheese" />
                  Steaks
                </a>{" "}
                <a href="#" className="three">
                  <i className="fa-solid fa-pizza-slice" />
                  Pizza
                </a>
              </div>
            </div>
            <div
              className="col-lg-6 offset-lg-1"
              data-aos="fade-up"
              data-aos-delay={300}
              data-aos-duration={400}
            >
              <div className="food-content-section">
                <h2>Food from your favorite restaurants to your table</h2>
                <p>
                  Pretium lectus quam id leo in vitae turpis massa sed. Lorem
                  donec massa sapien faucibus et molestie. Vitae elementum
                  curabitur vitae nunc.
                </p>{" "}
                <Link href="checkout" className="button button-2">
                  BROWSE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* counters-section */}
      {/* <section className="counters-section">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-3 col-md-6 col-sm-12"
              data-aos="flip-up"
              data-aos-delay={200}
              data-aos-duration={300}
            >
              <div>
                <h2>Service shows good taste.</h2>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-12"
              data-aos="flip-up"
              data-aos-delay={300}
              data-aos-duration={400}
            >
              <div className="count-time">
                <h2
                  className="timer count-title count-number"
                  data-to={976}
                  data-speed={2000}
                >
                  976
                </h2>
                <p>
                  Satisfied
                  <br />
                  Customer
                </p>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-12"
              data-aos="flip-up"
              data-aos-delay={400}
              data-aos-duration={500}
            >
              <div className="count-time">
                <h2
                  className="timer count-title count-number"
                  data-to={12}
                  data-speed={2000}
                >
                  12
                </h2>
                <p>
                  Best
                  <br />
                  Restaurants
                </p>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 col-sm-12"
              data-aos="flip-up"
              data-aos-delay={500}
              data-aos-duration={600}
            >
              <div className="count-time sp">
                <h2
                  className="timer count-title count-number"
                  data-to={1}
                  data-speed={2000}
                >
                  1
                </h2>
                <span>k+</span>
                <p>
                  Food
                  <br />
                  Delivered
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* reviews-sections */}
      {/* <section className="reviews-sections gap">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-xl-6 col-lg-12"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={300}
            >
              <div className="reviews-content">
                <h2>What customers say about us</h2>
                <div className="custome owl-carousel">
                  <Swiper {...sliderProps.index1Testmoninal}>
                    <SwiperSlide className="item">
                      <h4>
                        "Dapibus ultrices in iaculis nunc sed augue lacus
                        viverra vitae. Mauris a diam maecenas sed enim. Egestas
                        diam in arcu cursus euismod quis. Quam quisque id diam
                        vel".
                      </h4>
                      <div className="thomas">
                        <img alt="girl" src="assets/img/photo-5.jpg" />
                        <div>
                          <h6>Thomas Adamson</h6>
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="item">
                      <h4>
                        "Dapibus ultrices in iaculis nunc sed augue lacus
                        viverra vitae. Mauris a diam maecenas sed enim. Egestas
                        diam in arcu cursus euismod quis. Quam quisque id diam
                        vel".
                      </h4>
                      <div className="thomas">
                        <img alt="girl" src="assets/img/photo-5.jpg" />
                        <div>
                          <h6>Thomas Adamson</h6>
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="item">
                      <h4>
                        "Dapibus ultrices in iaculis nunc sed augue lacus
                        viverra vitae. Mauris a diam maecenas sed enim. Egestas
                        diam in arcu cursus euismod quis. Quam quisque id diam
                        vel".
                      </h4>
                      <div className="thomas">
                        <img alt="girl" src="assets/img/photo-5.jpg" />
                        <div>
                          <h6>Thomas Adamson</h6>
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                          <i className="fa-solid fa-star" />
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                  <div className="owl-nav mt-4">
                    <button className="owl-prev">
                      <i className="fa-solid fa-arrow-left"></i>
                    </button>
                    <button className="owl-next ms-3">
                      <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-12"
              data-aos="fade-up"
              data-aos-delay={300}
              data-aos-duration={400}
            >
              <div className="reviews-img">
                <img alt="photo" src="assets/img/photo-4.png" />
                <i className="fa-regular fa-thumbs-up" />
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* join-partnership */}
      {/* <section
        className="join-partnership gap"
        style={{ backgroundColor: "#363636" }}
      >
        <div className="container">
          <h2>Want to Join Partnership?</h2>
          <div className="row">
            <div
              className="col-lg-6"
              data-aos="flip-up"
              data-aos-delay={200}
              data-aos-duration={300}
            >
              <div className="join-img">
                <img alt="img" src="assets/img/photo-6.jpg" />
                <div className="Join-courier">
                  <h3>Join Courier</h3>
                  <Link href="become-partner" className="button button-2">
                    Learn More <i className="fa-solid fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6"
              data-aos="flip-up"
              data-aos-delay={300}
              data-aos-duration={400}
            >
              <div className="join-img">
                <img alt="img" src="assets/img/photo-7.jpg" />
                <div className="Join-courier">
                  <h3>Join Merchant</h3>
                  <Link href="become-partner" className="button button-2">
                    Learn More <i className="fa-solid fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* news-section */}
      {/* <section className="news-section gap">
        <div className="container">
          <h2>Latest news and events</h2>
          <div className="row">
            <div
              className="col-xl-6 col-lg-12"
              data-aos="flip-up"
              data-aos-delay={200}
              data-aos-duration={300}
            >
              <div className="news-posts-one">
                <img alt="man" src="assets/img/photo-8.jpg" />
                <div className="quickeat">
                  {" "}
                  <a href="#">news</a> <a href="#">quickeat</a>
                </div>
                <h3>We Have Received An Award For The Quality Of Our Work</h3>
                <p>
                  Donec adipiscing tristique risus nec feugiat in fermentum.
                  Sapien eget mi proin sed libero. Et magnis dis parturient
                  montes nascetur. Praesent semper feugiat nibh sed pulvinar
                  proin gravida.
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
            <div
              className="col-xl-6 col-lg-12"
              data-aos="flip-up"
              data-aos-delay={300}
              data-aos-duration={400}
            >
              <div className="news-post-two">
                <img alt="food-img" src="assets/img/food-1.jpg" />
                <div className="news-post-two-data">
                  <div className="quickeat">
                    {" "}
                    <a href="#">restaurants</a> <a href="#">cooking</a>
                  </div>
                  <h6>
                    <Link href="single-blog">
                      With Quickeat you can order food for the whole day
                    </Link>
                  </h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor...
                  </p>
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
              <div className="news-post-two">
                <img alt="food-img" src="assets/img/food-2.jpg" />
                <div className="news-post-two-data">
                  <div className="quickeat">
                    {" "}
                    <a href="#">restaurants</a> <a href="#">cooking</a>
                  </div>
                  <h6>
                    <Link href="single-blog">127+ Couriers On Our Team!</Link>
                  </h6>
                  <p>
                    Urna condimentum mattis pellentesque id nibh tortor id
                    aliquet. Tellus at urna condimentum mattis...
                  </p>
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
              <div className="news-post-two end">
                <img alt="food-img" src="assets/img/food-3.jpg" />
                <div className="news-post-two-data">
                  <div className="quickeat">
                    {" "}
                    <a href="#">restaurants</a> <a href="#">cooking</a>
                  </div>
                  <h6>
                    <Link href="single-blog">
                      Why You Should Optimize Your Menu for Delivery
                    </Link>
                  </h6>
                  <p>
                    Enim lobortis scelerisque fermentum dui. Sit amet cursus sit
                    amet dictum sit amet. Rutrum tellus...
                  </p>
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
            </div>
          </div>
        </div>
      </section> */}
      {/* subscribe-section */}
      {/* <Subscribe /> */}
    </Layout>
  );
};
export default Index;
