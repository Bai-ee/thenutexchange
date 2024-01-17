import Subscribe from "@/src/components/Subscribe";
import Item from "@/src/components/Item";
import RestaurantCardTab from "@/src/components/RestaurantCardTab";
import LayoutActivity from "@/src/layouts/LayoutActivity";
import WalletFuntion from "@/src/components/WalletFuntion";
import Link from "next/link";
import Edition from "@/src/components/edition_card";
import SearchBar from "@/src/components/searchBarAction";
import TableLayoutActivity from "@/src/components/table_layout_activity";
import TableLayoutActivityVert from "@/src/components/table_layout_activity_vert";
import NavActivity from "@/src/components/nav_activity";
import FooterActivity from "@/src/components/footer_activity";


const Services = () => {
  
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
    
    <LayoutActivity>
          <div class="collection_bg_img">
    <div class="collection_banner_gradient"></div>
    <div class="collection_banner_gradient_bottom"></div>
    <img alt="collection banner" class="collection_banner_img"src="assets/img/31341974_about_media_98e2f8a2-a8aa-46d9-9267-87108353c759.avif" />
    </div> 

<section className="activity-section flex-col">
<NavActivity/>

 <div className="activity-body ">

<div id="sidebar_action">
<div className="chartTextH1 rate">

<div className="actionCont">
<div className="icon_cont">
<svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_74_557)">
<path d="M14.2222 0H16V1.77778H14.2222V0ZM12.4444 3.55556V1.77778H14.2222V3.55556H12.4444ZM10.6667 3.55556H12.4444V5.33333H10.6667V3.55556ZM10.6667 3.55556H8.88889V1.77778H10.6667V3.55556ZM0 1.77778H7.11111V3.55556H0V1.77778ZM7.11111 10.6667H0V12.4444H7.11111V10.6667ZM13.3333 12.4444V10.6667H15.1111V8.88889H13.3333V10.6667H11.5556V8.88889H9.77778V10.6667H11.5556V12.4444H9.77778V14.2222H11.5556V12.4444H13.3333ZM13.3333 12.4444V14.2222H15.1111V12.4444H13.3333Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_74_557">
<rect width="16" height="15" fill="white"/>
</clipPath>
</defs>
</svg>
<div className="chartTextH1" id="sidebar_nav_action">STATUS</div>
</div>

<div className="icon_cont">
<button id="activity-type-sales-switch" role="switch"
className="" aria-checked="true">
  <div className="toggleButton Switch__Track-sc-1u4na4u-0-dKdgxE"></div></button>
<h6 className="chartText" id="">SALES</h6>
</div>

<div className="icon_cont">
<button id="activity-type-sales-switch" role="switch"
className="" aria-checked="true">
  <div className="toggleButton Switch__Track-sc-1u4na4u-0-dKdgxE"></div></button>
<h6 className="chartText" id="">LISTINGS</h6>
</div>
</div>

<div className="chartTextH1 rate actionCont
">
<div className="icon_cont">
<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_77_559)">
<path d="M10.4551 5.09078L10.4551 3.63623L11.9096 3.63623L11.9096 5.09078L10.4551 5.09078Z" fill="white"/>
<path d="M9 15.2726L9 5.09082L10.4545 5.09082L10.4545 15.2726L9 15.2726Z" fill="white"/>
<path d="M14.8184 0.727539V10.9093H16.2729V0.727539H14.8184Z" fill="white"/>
<path d="M11.9102 13.8183L11.9102 12.3638L13.3647 12.3638L13.3647 13.8183L11.9102 13.8183Z" fill="white"/>
<path d="M11.9102 3.63619L11.9102 2.18164L13.3647 2.18164L13.3647 3.63619L11.9102 3.63619Z" fill="white"/>
<path d="M13.3633 12.3637L13.3633 10.9092L14.8178 10.9092L14.8178 12.3637L13.3633 12.3637Z" fill="white"/>
<path d="M13.3633 2.18209L13.3633 0.727539L14.8178 0.727539L14.8178 2.18209L13.3633 2.18209Z" fill="white"/>
<path d="M6.08984 5.09078L6.08984 3.63623L7.54439 3.63623L7.54439 5.09078L6.08984 5.09078Z" fill="white"/>
<path d="M4.63672 15.2726L4.63672 5.09082L6.09126 5.09082L6.09126 15.2726L4.63672 15.2726Z" fill="white"/>
<path d="M7.54492 3.63619L7.54492 2.18164L8.99947 2.18164L8.99947 3.63619L7.54492 3.63619Z" fill="white"/>
<path d="M9 2.18209L9 0.727539L10.4546 0.727539L10.4546 2.18209L9 2.18209Z" fill="white"/>
<path d="M1.72852 5.09078L1.72852 3.63623L3.18307 3.63623L3.18307 5.09078L1.72852 5.09078Z" fill="white"/>
<path d="M0.273438 15.2726L0.273438 5.09082L1.72798 5.09082L1.72798 15.2726L0.273438 15.2726Z" fill="white"/>
<path d="M3.18164 3.63619L3.18164 2.18164L4.63619 2.18164L4.63619 3.63619L3.18164 3.63619Z" fill="white"/>
<path d="M4.63672 2.18209L4.63672 0.727539L6.09127 0.727539L6.09127 2.18209L4.63672 2.18209Z" fill="white"/>
<path d="M10.4551 15.2729L10.4551 13.8184L11.9096 13.8184L11.9096 15.2729L10.4551 15.2729Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_77_559">
<rect width="17" height="16" fill="white"/>
</clipPath>
</defs>
</svg>
<div class="chartTextH1" id="sidebar_nav_action">COLLECTIONS</div>
</div>

<SearchBar/>


<TableLayoutActivityVert/>

</div>




</div>



</div>
<TableLayoutActivity/>
</div> 
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



<FooterActivity/>



</section>

   
    </LayoutActivity>
  );
};
export default Services;
