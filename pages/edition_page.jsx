import Item from "@/src/components/Item";
import RestaurantCardTab from "@/src/components/RestaurantCardTab";
import Layout from "@/src/layouts/Layout";
import WalletFuntion from "@/src/components/WalletFuntion";
import Link from "next/link";
import Edition from "@/src/components/edition_card";







const RestaurantCard = () => {
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

  // const [selectedGenre, setSelectedGenre] = useState('all');

  // const releases = [
   
  //   { genre: ['house','acid'], component: <Release_HomeBase genre={['house','acid']} /> }, { genre: ['techno','acid'], component: <Release_Burnt genre={['techno','acid']} /> },
  //   { genre: ['house','acid'], component: <Release_Decongestion genre={['house','acid']} />},
  //   { genre: ['house','acid'], component: <Release_Great_Gift genre={['house','acid']} />},
  //   { genre: ['house','acid'], component: <Release_Acid_Beach genre={['house','acid']} /> },
  //   { genre: ['techno'], component: <Release_No_Mills genre={['techno']} /> },
  //   { genre: ['techno'], component: <Release_Triggered genre={['techno']} /> },
  //   { genre: ['acid','techno'], component: <Release_Tunnel genre={['acid','techno']}/> },
  //   { genre: ['acid','house'], component: <Release_Moment genre={['acid','house']} /> },
  //   { genre: ['merch'], component: <TFU_Hoodie genre={['merch']} /> },
  // ];

  // const filteredReleases = releases.filter(release => 
  //   selectedGenre === 'all' || release.genre.includes(selectedGenre)
  // );
  
  return (
    <Layout>
    <div class="collection_bg_img">
    <div class="collection_banner_gradient"></div>
    <div class="collection_banner_gradient_bottom"></div>
    <img alt="collection banner" class="collection_banner_img"src="assets/img/31341974_about_media_98e2f8a2-a8aa-46d9-9267-87108353c759.avif" />
    </div> 
    <section
    className="hero-section about"
    >
    
    
    
    <div className="container container_cp">
    
    <div className="row_hero_collection align-items-center">
    <div
    className="col-lg-6"
    // data-aos="fade-up"
    // data-aos-delay={300}
    // data-aos-duration={400}
    >
    <div className="about-text">
    {/* <ul className="crumbs d-flex">
    <li>
    <Link href="/">Home</Link>
    </li>
    <li>
    <Link href="/">
    <i className="fa-solid fa-right-long" />
    Restaurants
    </Link>
    </li>
    <li className="two">
    <Link href="/">
    <i className="fa-solid fa-right-long" />
    The Wilmington
    </Link>
    </li>
  </ul> */}
  <div className="logo-detail">
  <img alt="logo" src="assets/img/logos-2.jpg" />
  
  </div>
  <h2>Collection Name</h2>
  
  <div className="rate">
  <span>Description of this collection. </span>
  
  <p>
  1,886 ETH
  </p>
  <span>TOTAL VOLUME</span>
  <p>
  0.794 ETH
  </p>
  <span>FLOOR PRICE</span>
  <p>
  0.794 ETH
  </p>
  <span>FLOOR PRICE</span>
  <p>
  0.7610 WETH ETH
  </p>
  <span>BEST OFFER</span>
  <p>
  6,0176 (61%)
  </p>
  <span>OWNERS (UNIQUE)</span>
  
  {/* <div className="star">
  <i className="fa-solid fa-star" />
  <i className="fa-solid fa-star" />
  <i className="fa-solid fa-star" />
  <i className="fa-solid fa-star" />
  <i className="fa-regular fa-star-half-stroke" />
</div> */}

{/* <div className="cafa-button">
{" "}
<a href="#">american</a> <a href="#">steakhouse</a>{" "}
<a href="#">seafood</a>
</div> */}

</div>
  </div>
</div>

<div
className="col-lg-6"
// data-aos="fade-up"
// data-aos-delay={400}
// data-aos-duration={500}
>

<div className="about-img">
<img alt="man" src="assets/img/restaurant-1.jpg" />
<div className="hours">
<i className="fa-regular fa-clock" />
<h4>
1.8666
<br />
<span>FLOOR PRICE</span>
</h4>
</div>
<div className="hours two">
<svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_46_2009)">
<path d="M23.5 47C36.4787 47 47 36.4787 47 23.5C47 10.5213 36.4787 0 23.5 0C10.5213 0 0 10.5213 0 23.5C0 36.4787 10.5213 47 23.5 47Z" fill="#627EEA"/>
<path d="M24.2314 5.875V18.9028L35.2427 23.8231L24.2314 5.875Z" fill="white" fill-opacity="0.602"/>
<path d="M24.2314 5.875L13.2188 23.8231L24.2314 18.9028V5.875Z" fill="white"/>
<path d="M24.2314 32.2655V41.1176L35.25 25.8735L24.2314 32.2655Z" fill="white" fill-opacity="0.602"/>
<path d="M24.2314 41.1176V32.264L13.2188 25.8735L24.2314 41.1176Z" fill="white"/>
<path d="M24.2314 30.2166L35.2427 23.8231L24.2314 18.9058V30.2166Z" fill="white" fill-opacity="0.2"/>
<path d="M13.2188 23.8231L24.2314 30.2166V18.9058L13.2188 23.8231Z" fill="white" fill-opacity="0.602"/>
</g>
<defs>
<clipPath id="clip0_46_2009">
<rect width="47" height="47" fill="white"/>
</clipPath>
</defs>
</svg>

<h4>
1.886 ETH
<br />
<span>TOTAL VOLUME</span>
</h4>
</div>
</div>
</div>
</div>
</div>
</section>
{/* tabs */}
{/* <RestaurantCardTab items={items} /> */}
{/* Lunch Section */}
<section className="lunch-section gap">

<div id="sidebar">



<div class="rate">
<h6 id="sidebar_nav">STATUS</h6>
<h6 id="sidebar_nav">RARITY</h6>
  <h6 id="sidebar_nav">PRICE</h6>
  <h6 id="">TRAITS</h6>

  <p>BACKGROUND</p>
  <span>13</span>

  <p>BODY</p>
  <span>64</span>

  <p>FACE</p>
  <span>27</span>

  <p>HEAD</p>
  <span>54</span>

  <p>SKIN</p>
  <span>15</span>
  <h6 id="sidebar_nav">STATUS</h6>
<h6 id="sidebar_nav">RARITY</h6>
<h6 id="sidebar_nav">RARITY</h6>
<p>OWNERS</p>
  <span>4472</span>

  <p>SUPPLY</p>
  <span>8888</span>
  <p>ROYALTY</p>
  <span>0.5%</span>
</div>






</div>
<Edition id="editions" className="grid gap-1 grid-cols-4 md:grid-cols-3 lg:grid-cols-4" 

items={items}

/>
{/* <div id="editions" className="grid gap-1 grid-cols-4 md:grid-cols-3 lg:grid-cols-4"> */}

{/* {filteredReleases.map(release => release.component)} */}

{/* <Edition items={items} /> */}

{/* <div className="w-4 b-red h-4" id="edititon_card">

</div>
<div className="w-4 b-red h-4" id="edititon_card">

</div>
<div className="w-4 b-red h-4" id="edititon_card">

</div>
<div className="w-4 b-red h-4" id="edititon_card"> */}

{/* </div> */}

{/* <div className="w-4 b-red h-4">

</div> */}







</section>
</Layout>
);
};
export default RestaurantCard;
