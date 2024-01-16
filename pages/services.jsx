import Subscribe from "@/src/components/Subscribe";
import Item from "@/src/components/Item";
import RestaurantCardTab from "@/src/components/RestaurantCardTab";
import Layout from "@/src/layouts/Layout";
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
    
    <Layout>

<section className="activity-section flex-col">
<NavActivity/>

 <div className="activity-body ">

<div id="sidebar_action">
<div class="chartTextH1 rate">
<h6 class="chartTextH1" id="sidebar_nav_action">STATUS</h6>
<h6 class="chartText" id="">• SALES</h6>
<h6 class="chartText" id="">• LISTINGS</h6>
</div>

<div id="">
<div class="chartTextH1 rate">
<h6 class="chartTextH1" id="sidebar_nav_action">COLLECTIONS</h6>
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

   
    </Layout>
  );
};
export default Services;
