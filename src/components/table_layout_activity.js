import { useState } from "react";
import Item from "./Item";

const TableLayoutActivity = ({ items }) => {
  const exampleRows = [
    {
  // number: '/assets/img/2c36035682c874a7940051e79e8fe906.avif', // Path relative to the 'public' folder
  number: 1,
  symbol:  '/assets/img/2c36035682c874a7940051e79e8fe906.avif', // Path relative to the 'public' folder
  collection: 'Bitcoin #2343',
  rarity: '504',
  price: '0.073',
  topbid: '-',
  from: 'C4ASDA',
  to:"-",
  time:"4s"
    },
    {
      number: 2,
      symbol:  '/assets/img/bd6822389dd9dbda7a00a882b20f4f84.avif', // Path relative to the 'public' folder
      collection: 'Ethereum #2343',
      rarity: '504',
      price: '0.073',
      topbid: '-',
      from: 'C4ASDA',
      to:"-",
      time:"4s"
    },
    {
      number: 3,
      symbol:  '/assets/img/5a430b65e24425193ee98c5129cb93e1.webp', // Path relative to the 'public' folder
      collection: 'Litecoin #2343',
      rarity: '504',
      price: '0.073',
      topbid: '-',
      from: 'C4ASDA',
      to:"-",
      time:"4s"
    },
    {
      number: 4,
      symbol:  '/assets/img/H8jOCJuQokNqGBpkBN5wk1oZwO7LM8bNnrHCaekV2nKjnCqw6UB5oaH8XyNeBDj6bA_n1mjejzhFQUP3O1NfjFLHr3FOaeHcTOOT.avif', // Path relative to the 'public' folder
      collection: 'Ripple #2343',
      rarity: '504',
      price: '0.073',
      topbid: '-',
      from: 'C4ASDA',
      to:"-",
      time:"4s"
    },
    {
      number: 5,
      symbol:  '/assets/img/lHexKRMpw-aoSyB1WdFBff5yfANLReFxHzt1DOj_sg7mS14yARpuvYcUtsyyx-Nkpk6WTcUPFoG53VnLJezYi8hAs0OxNZwlw6Y-dmI.avif', // Path relative to the 'public' folder
      collection: 'Cardano #2343',
      rarity: '504',
      price: '0.073',
      topbid: '-',
      from: 'C4ASDA',
      to:"-",
      time:"4s"
    },
    {
      number: 6,
      symbol:  '/assets/img/ODl0M4aBjdBhEsqnH9-JgSd7Hg8CCgrZ_I6bs9vBopnB_lUYn90rr7f_rWHB1IHaUo8F6LVNQ4kk-Be1KVPUyy8NON8m_CTPE66Y.avif', // Path relative to the 'public' folder
      collection: 'Polkadot #2343',
      rarity: '504',
      price: '0.073',
      topbid: '-',
      from: 'C4ASDA',
      to:"-",
      time:"4s"
    },
    {
      number: 7,
      symbol:  '/assets/img/b1c9ed2e584b4f6e418bf1ca15311844 (1).avif', // Path relative to the 'public' folder
      collection: 'Cash #2343',
      rarity: '504',
      price: '0.073',
      topbid: '-',
      from: 'C4ASDA',
      to:"-",
      time:"4s"
    },
    {
      number: 8,
      symbol:  '/assets/img/c0b7dfed5908126d92877c00470ee72a.avif', // Path relative to the 'public' folder
      collection: 'Solana #2343',
      rarity: '504',
      price: '0.073',
      topbid: '-',
      from: 'C4ASDA',
      to:"-",
      time:"4s"
    },
    {
      number: 9,
      symbol:  '/assets/img/bbaf43ee4a02d5affb7e8fc186d0bdb5.avif', // Path relative to the 'public' folder
      collection: 'Chainlink #2343',
      rarity: '504',
      price: '0.073',
      topbid: '-',
      from: 'C4ASDA',
      to:"-",
      time:"4s"
    },
    {
      number: 10,
      symbol:  '/assets/img/yNi-XdGxsgQCPpqSio4o31ygAV6wURdIdInWRcFIl46UjUQ1eV7BEndGe8L661OoG-clRi7EgInLX4LPu9Jfw4fq0bnVYHqg7RFi.avif', // Path relative to the 'public' folder
      collection: 'Chainlink #2343',
      rarity: '504',
      price: '0.073',
      topbid: '-',
      from: 'C4ASDA',
      to:"-",
      time:"4s"
    },
    {
      number: 10,
      symbol:  '/assets/img/yNi-XdGxsgQCPpqSio4o31ygAV6wURdIdInWRcFIl46UjUQ1eV7BEndGe8L661OoG-clRi7EgInLX4LPu9Jfw4fq0bnVYHqg7RFi.avif', // Path relative to the 'public' folder
      collection: 'Chainlink #2343',
      rarity: '504',
      price: '0.073',
      topbid: '-',
      from: 'C4ASDA',
      to:"-",
      time:"4s"
    },
    {
      number: 10,
      symbol:  '/assets/img/yNi-XdGxsgQCPpqSio4o31ygAV6wURdIdInWRcFIl46UjUQ1eV7BEndGe8L661OoG-clRi7EgInLX4LPu9Jfw4fq0bnVYHqg7RFi.avif', // Path relative to the 'public' folder
      collection: 'Chainlink #2343',
      rarity: '504',
      price: '0.073',
      topbid: '-',
      from: 'C4ASDA',
      to:"-",
      time:"4s"
    },
    {
      number: 10,
      symbol:  '/assets/img/yNi-XdGxsgQCPpqSio4o31ygAV6wURdIdInWRcFIl46UjUQ1eV7BEndGe8L661OoG-clRi7EgInLX4LPu9Jfw4fq0bnVYHqg7RFi.avif', // Path relative to the 'public' folder
      collection: 'Chainlink #2343',
      rarity: '504',
      price: '0.073',
      topbid: '-',
      from: 'C4ASDA',
      to:"-",
      time:"4s"
    },
    {
      number: 10,
      symbol:  '/assets/img/yNi-XdGxsgQCPpqSio4o31ygAV6wURdIdInWRcFIl46UjUQ1eV7BEndGe8L661OoG-clRi7EgInLX4LPu9Jfw4fq0bnVYHqg7RFi.avif', // Path relative to the 'public' folder
      collection: 'Chainlink #2343',
      rarity: '504',
      price: '0.073',
      topbid: '-',
      from: 'C4ASDA',
      to:"-",
      time:"4s"
    },
    {
      number: 10,
      symbol:  '/assets/img/yNi-XdGxsgQCPpqSio4o31ygAV6wURdIdInWRcFIl46UjUQ1eV7BEndGe8L661OoG-clRi7EgInLX4LPu9Jfw4fq0bnVYHqg7RFi.avif', // Path relative to the 'public' folder
      collection: 'Chainlink #2343',
      rarity: '504',
      price: '0.073',
      topbid: '-',
      from: 'C4ASDA',
      to:"-",
      time:"4s"
    }
  ];
  const [activeTab, setActiveTab] = useState("breakfast");
  return (

    <div className="activity-chart overflow-x-auto w-100 chartTextH1">
      <div className="w-100 displayFlexRow">
      ACTIVITY 
      <div class="icon_cont"><div class="chartText" id="">SHOW CHART</div><button id="activity-type-sales-switch" role="switch" class="" aria-checked="true"><div class="toggleButton Switch__Track-sc-1u4na4u-0-dKdgxE"></div></button></div>
        </div>
      
    {/* <table className="table w-full table-auto border-collapse border-slate-500">
        <thead>
            <tr>
                <th className="chartText chartTextPL0 border-b border-slate-600 pl-0 py-2 text-slate-800">ACTION</th>
                <th className="chartText border-b border-slate-600 px-4 py-2 text-slate-800">ITEM</th>
                <th className="chartText border-b border-slate-600 px-4 py-2 text-slate-800">RARITY</th>
                <th className="chartText border-b border-slate-600 px-4 py-2 text-slate-800">PRICE</th>
                <th className="chartText border-b border-slate-600 px-4 py-2 text-slate-800">TOP BID</th>
                <th className="chartText border-b border-slate-600 px-4 py-2 text-slate-800">FROM</th>
                <th className="chartText border-b border-slate-600 px-4 py-2 text-slate-800">CLOCK</th>
            </tr>
        </thead>
        <tbody>
            {exampleRows.map((row, index) => (
                <tr key={index}>
                    <td className="chartText border-custo border-slate-700 max-w-40 ml-2">{row.number}</td>
                    <td className="chartText border-custo-img border-slate-700">
                        <img src={row.symbol} alt="Symbol" className="thumbnail_table w-2 h-2" />
                    </td>
                    <td className="chartText border-custo border-slate-700">{row.collection}</td>
                    <td className="chartText border-custo border-slate-700">{row.floor}</td>
                    <td className="chartText border-custo border-slate-700">{row.volume}</td>
                    <td className="chartText border-custo border-slate-700">{row.owners}</td>
                    <td className="chartText border-custo border-slate-700">{row.support}</td>
                </tr>
            ))}
        </tbody>
    </table> */}



<div className="w-100 chartTextH1 h-100">
    <table className="table w-full table-auto border-collapse border-slate-500 chartTextVertContHeader">
        <thead className="">
            <tr>
                <th className="chartText chartTextPL0 border-b border-slate-600 pl-0 py-2 text-slate-800">ACTION</th>
                <th className="chartText border-b border-slate-600 text-slate-800 textAlignLeftt mw-100">ITEM</th>
                <th className="chartText border-b border-slate-600 text-slate-800 textAlignLeft pr-0">RARITY</th>
                <th className="chartText border-b border-slate-600 text-slate-800 textAlignCenter pr-0">PRICE</th>
                <th className="chartText border-b border-slate-600 text-slate-800 textAlignRight pr-0">TOP BID</th>
                <th className="chartText border-b border-slate-600 text-slate-800 textAlignRight pr-0">FROM</th>
                <th className="chartText border-b border-slate-600 text-slate-800 textAlignRight pr-0">TO</th>
                <th className="chartText border-b border-slate-600 text-slate-800 textAlignRight pr-0">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_91_572)">
<path d="M11.9774 0.600098H2.02183V2.02232H0.599609V11.9779H2.02183V13.4001H11.9774V11.9779H13.3996V2.02232H11.9774V0.600098ZM11.9774 2.02232V11.9779H2.02183V2.02232H11.9774ZM6.28849 3.44454H7.71072V7.71121H10.5551V9.13343H6.28849V3.44454Z" fill="#D9D9D9"/>
</g>
<defs>
<clipPath id="clip0_91_572">
<rect width="14" height="14" fill="white"/>
</clipPath>
</defs>
</svg>


                </th>



            </tr>
        </thead>

        
        <tbody>
            {exampleRows.map((row, index) => (
                <tr key={index}>



                    <td className="chartText border-custo-img border-slate-700 pl-0 icon_cont mw-50">
                   
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_88_558)">
<path d="M7.47436 1.08837L6.5744 0.188415L0.274736 6.48808L1.17469 7.38804L7.47436 1.08837Z" fill="white"/>
<path d="M6.57466 12.7882L7.47461 13.6881L13.7743 7.38848L12.8743 6.48853L6.57466 12.7882Z" fill="white"/>
<path d="M6.57466 14.5881L7.47461 13.6881L0.274736 6.48808L-0.625 7.38845L6.57466 14.5881Z" fill="white"/>
<path d="M9.27424 1.08837L8.37429 0.188416L7.47436 1.08837L8.37429 1.98833L9.27424 1.08837Z" fill="white"/>
<path d="M13.7741 5.58813L12.8741 4.68817L11.9741 5.58813L12.8743 6.48853L13.7741 5.58813Z" fill="white"/>
<path d="M13.7735 3.78814L12.8736 2.88818L11.9736 3.78814L12.8741 4.68817L13.7735 3.78814Z" fill="white"/>
<path d="M11.0734 3.78771L10.1734 2.88775L9.27345 3.78771L10.1734 4.68767L11.0734 3.78771Z" fill="white"/>
<path d="M11.0748 1.0888L10.1748 0.188843L9.27424 1.08837L10.1748 1.98876L11.0748 1.0888Z" fill="white"/>
<path d="M13.7735 1.9879L11.9735 0.187988L11.0736 1.08795L12.8736 2.88818L13.7735 1.9879Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_88_558">
<rect width="14" height="14" fill="white"/>
</clipPath>
</defs>
</svg>

<div className="icon_eth">LIST</div>

                    </td>

                    <td className="chartText border-custo-img border-slate-700 textAlignRight">
                    <td className="chartText   icon_eth pl-0">
                    {/* <td className="chartText border-custo border-slate-700">{row.collection}</td> */}
                    <img src={row.symbol} alt="Symbol" className="thumbnail_table_action w-2 h-2 " />
                        {row.collection}
                        </td>
                      {/* {row.floor} */}



                      
                      </td>
                    <td className="chartText border-custo-img border-slate-700 textAlignLeft pr-0 mw-100">{row.rarity}</td>
                    <td class="chartText border-custo-img border-slate-700 textAlignCenter mw-100 actionChartButton">{row.price}

                <svg className="mr-4"width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.84963 1.41059C9.7851 1.44883 9.7346 1.48093 9.68217 1.50933C9.46081 1.62936 9.27366 1.79409 9.08845 1.96155C8.97535 2.06384 8.84564 2.13838 8.70253 2.19194C8.48392 2.2739 8.26063 2.28229 8.03734 2.2276C7.84761 2.18097 7.67336 2.09466 7.53349 1.9551C7.32972 1.75214 7.11014 1.57063 6.85442 1.43785C6.44785 1.22666 6.01547 1.13099 5.55614 1.14793C5.23783 1.15971 4.93484 1.22957 4.6433 1.35396C4.3629 1.47367 4.11509 1.64324 3.89309 1.85136C3.45699 2.26035 3.02106 2.6695 2.58465 3.07816C2.50479 3.15302 2.50414 3.16093 2.57981 3.24127C2.85408 3.53281 3.12803 3.82467 3.40214 4.11669C3.45635 4.17445 3.46329 4.17525 3.51766 4.12427C3.93278 3.73432 4.34757 3.34405 4.76301 2.95442C4.88789 2.83729 5.01405 2.72193 5.17362 2.65094C5.42078 2.54075 5.6765 2.5051 5.93948 2.57576C6.15922 2.63481 6.34847 2.74871 6.50964 2.91215C6.80473 3.21159 7.15531 3.41842 7.5572 3.54491C7.98733 3.68011 8.42342 3.69027 8.85822 3.60186C9.27382 3.51732 9.64554 3.32888 9.96983 3.04977C10.1049 2.93344 10.2291 2.80292 10.3893 2.71661C10.5313 2.63997 10.6826 2.5969 10.8401 2.56995C10.8903 2.5614 10.9249 2.57931 10.9508 2.62239C11.0742 2.82954 11.2037 3.03315 11.321 3.24369C11.4759 3.52184 11.5942 3.81644 11.695 4.11846C11.8031 4.44178 11.8763 4.77252 11.9335 5.10858C12.0174 5.60356 12.0101 6.10048 11.976 6.59675C11.9578 6.86263 11.9097 7.12868 11.8509 7.38924C11.771 7.7424 11.6608 8.08815 11.5093 8.4184C11.424 8.60459 11.3301 8.78706 11.2368 8.96953C11.2049 9.03197 11.1887 9.03245 11.1384 8.98534C10.9624 8.82045 10.7654 8.68412 10.5505 8.57716C10.3869 8.49585 10.2157 8.43341 10.0371 8.38662C9.79091 8.32209 9.54309 8.29175 9.29028 8.3016C8.86661 8.31789 8.47069 8.4326 8.10091 8.64089C7.88714 8.76141 7.70111 8.91709 7.52026 9.08021C7.23292 9.33915 6.89943 9.44128 6.51642 9.37561C6.2586 9.33141 6.04887 9.20218 5.86817 9.01728C5.67957 8.82433 5.46031 8.67138 5.21976 8.55054C4.68719 8.28304 4.12477 8.21964 3.54492 8.33419C3.20499 8.4013 2.88393 8.53118 2.60869 8.7464C2.40637 8.90451 2.21777 9.08069 2.02755 9.2538C1.81765 9.44467 1.61276 9.64085 1.40608 9.8351C1.35187 9.88608 1.33848 9.88544 1.28766 9.82252C1.05695 9.53727 0.845923 9.23767 0.67894 8.91096C0.554872 8.66815 0.442905 8.4184 0.33852 8.16623C0.264144 7.98667 0.199125 7.80113 0.152015 7.61269C0.090707 7.3673 0.0510182 7.11658 0.00277857 6.86796C-0.00738563 6.81601 0.0105227 6.77826 0.0534382 6.74292C0.164922 6.6508 0.265919 6.54529 0.381436 6.45897C0.535351 6.34394 0.713627 6.28053 0.905457 6.26053C1.06518 6.24391 1.22539 6.24891 1.37914 6.29457C1.56774 6.35071 1.74279 6.4388 1.88299 6.58062C2.09241 6.79278 2.32393 6.97412 2.589 7.11125C3.06059 7.3552 3.56267 7.43764 4.08782 7.38585C4.4284 7.35229 4.75253 7.25355 5.04584 7.07883C5.24202 6.96202 5.42288 6.81891 5.60616 6.68145C5.86527 6.4872 6.11453 6.27924 6.3788 6.09225C6.60177 5.93447 6.86071 5.88865 7.1324 5.91188C7.42216 5.93656 7.65804 6.07015 7.87149 6.25924C8.23595 6.58223 8.6046 6.90039 8.97164 7.22064C9.102 7.33438 9.23204 7.44829 9.36256 7.56171C9.42128 7.61269 9.43371 7.61011 9.48453 7.5517C9.75025 7.24678 10.0165 6.94217 10.2831 6.63822C10.3477 6.56465 10.3453 6.55529 10.2707 6.49108C9.99629 6.25472 9.72427 6.01578 9.45049 5.77894C9.16605 5.5329 8.885 5.28267 8.59427 5.04405C8.3655 4.85625 8.10284 4.72702 7.82002 4.6349C7.44346 4.51212 7.06222 4.48147 6.67017 4.53035C6.25167 4.58246 5.87124 4.73138 5.53001 4.97387C5.28591 5.14747 5.05503 5.33929 4.81755 5.52209C4.68541 5.62389 4.55747 5.73231 4.41775 5.82282C4.19317 5.96835 3.94294 6.02546 3.67496 5.99739C3.3568 5.96399 3.10092 5.81734 2.87505 5.59275C2.60546 5.32494 2.28714 5.12907 1.9243 5.00307C1.6176 4.89643 1.30412 4.8406 0.982253 4.85061C0.710562 4.859 0.440969 4.89739 0.185573 5.00178C0.152176 5.01549 0.116844 5.02437 0.0829628 5.03711C0.0395633 5.05341 0.0200416 5.04082 0.0289151 4.99403C0.0442421 4.91304 0.0563423 4.83108 0.0773161 4.75171C0.140721 4.51277 0.194285 4.2698 0.277051 4.03763C0.365141 3.7903 0.474043 3.54943 0.588753 3.31291C0.817044 2.84148 1.11503 2.41507 1.46336 2.02447C1.80233 1.6442 2.18308 1.31153 2.60578 1.02628C2.90506 0.824291 3.21999 0.651016 3.54992 0.50662C3.74095 0.423047 3.93939 0.355286 4.13687 0.287363C4.44792 0.180397 4.76866 0.11199 5.09359 0.0645574C5.51726 0.00260416 5.94255 -0.0154655 6.37073 0.0134137C6.71131 0.0363235 7.04754 0.0866605 7.37844 0.164909C7.80598 0.265905 8.21852 0.413367 8.61363 0.607455C9.01197 0.803318 9.38579 1.03774 9.73266 1.31492C9.76848 1.34347 9.80349 1.37316 9.84996 1.41156L9.84963 1.41059Z" fill="#9D1E19"/>
<path d="M5.97463 11.9996C5.81555 11.9996 5.65631 11.9962 5.49723 12.0004C5.2399 12.0072 4.98628 11.983 4.73685 11.9207C4.50485 11.8628 4.27075 11.8101 4.04391 11.7358C3.71898 11.6297 3.40244 11.499 3.10671 11.3256C2.88148 11.1934 2.66174 11.0519 2.44216 10.9108C2.36682 10.8624 2.36827 10.849 2.43119 10.7899C2.72741 10.5119 3.02233 10.2323 3.32241 9.95856C3.46762 9.8261 3.64444 9.75156 3.83595 9.70462C4.09151 9.64186 4.33206 9.68913 4.56567 9.78932C4.70184 9.84772 4.81639 9.94081 4.92029 10.0465C5.12406 10.2538 5.35864 10.4171 5.62001 10.5439C6.08095 10.7675 6.56722 10.834 7.07171 10.7733C7.39665 10.7343 7.70173 10.6268 7.98665 10.4661C8.1801 10.3571 8.3566 10.2235 8.51648 10.0696C8.78785 9.80852 9.10762 9.67816 9.48547 9.708C9.81912 9.73446 10.0908 9.88547 10.3094 10.1364C10.3412 10.1728 10.3265 10.1994 10.297 10.2293C10.0227 10.5087 9.72602 10.7614 9.40319 10.9832C9.12601 11.1737 8.83625 11.3411 8.531 11.4834C8.20188 11.6366 7.86517 11.7683 7.51152 11.8494C7.25725 11.9078 6.99895 11.9488 6.7421 11.9964C6.71468 12.0014 6.6858 11.9998 6.65772 11.9998C6.43008 12 6.20243 11.9998 5.97479 11.9998L5.97463 11.9996Z" fill="#9D1E19"/>
</svg>
    

                    </td>
                    
                    
                    {/* <td className="chartText border-custo-img border-slate-700 textAlignRight pr-0 mw-100 actionChartButton">{row.price}</td> */}
                    <td className="chartText border-custo-img border-slate-700 textAlignRight pr-0 mw-100">{row.topbid}</td>
                    <td className="chartText border-custo-img border-slate-700 textAlignRight pr-0 mw-100">{row.from}</td>
                    <td className="chartText border-custo-img border-slate-700 textAlignRight pr-0 mw-100">{row.to}</td>
                    <td className="chartText border-custo-img border-slate-700 textAlignRight pr-0 mw-50">{row.time}</td>
                </tr>
            ))}
        </tbody>
    </table>
</div>



</div>



  );
};
export default TableLayoutActivity;
