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
                    <td class="chartText border-custo-img border-slate-700 textAlignCenter mw-100 actionChartButton">{row.price}<svg class="mr-4" width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_83_582)"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.49936 0H3.89945V0.624911H3.59949V1.24982H2.99957V2.49965H2.39966V3.12456H1.79975V4.37437H1.19983V4.99928H0.599915V6.24911H0V6.87402H0.599915V7.49893H1.79975V8.12384H2.99957V8.74875H3.89945V9.37367H4.49936V8.74875H5.39924V8.12384H6.59906V7.49893H7.79889V6.87402H8.39881V6.24911H7.79889V4.99928H7.19897V4.37437H6.59906V3.12456H5.99915V2.49965H5.39924V1.24982H4.79931V0.624911H4.49936V0ZM2.99957 8.12384V7.49893H1.79975V6.87402H0.599915V6.24911H1.19983V4.99928H1.79975V4.37437H2.39966V3.12456H2.99957V2.49965H3.59949V1.24982H3.89945V8.12384H2.99957Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M0 8.74893H0.599915V9.99871H1.19983V11.2486H1.79975V11.8735H2.39966V13.1242H2.99957V13.7492H3.59949V14.3752H3.89945V15.0002H4.49936V14.3752H4.1994V14.374H4.79931V13.7492H5.39924V13.1242H5.99915V11.8735H6.59906V11.2486H7.19897V9.99871H7.79889V8.74893H8.39881V8.12402H7.79889V8.74893H6.59906V9.37385H5.39924V9.99815L4.49936 9.99871V10.6237H3.89945V9.99871H2.99957V9.37385H1.79975V8.74893H0.599915V8.12402H0V8.74893ZM1.79975 9.99871H1.19983V9.37385H1.79975V9.99871ZM1.79975 9.99871V11.2486H2.39966V11.8735H2.99957V13.1242H3.59949V13.7473H4.1994V13.7492H4.79931V13.7473H4.1994V11.2486H3.89945V10.6237H2.99957V9.99871H1.79975Z" fill="white"></path></g><defs><clipPath id="clip0_83_582"><rect width="9" height="15" fill="white"></rect></clipPath></defs></svg></td>
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
