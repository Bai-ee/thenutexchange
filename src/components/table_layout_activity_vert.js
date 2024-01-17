import { useState } from "react";
import Item from "./Item";

const TableLayoutActivityVert = ({ items }) => {
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
    },
    {
      number: 11,
      symbol:  '/assets/img/yNi-XdGxsgQCPpqSio4o31ygAV6wURdIdInWRcFIl46UjUQ1eV7BEndGe8L661OoG-clRi7EgInLX4LPu9Jfw4fq0bnVYHqg7RFi.avif', // Path relative to the 'public' folder
      collection: 'Chainlink',
      floor: '20',
      volume: '70M',
      owners: '2M',
      support: '24/7'
    },
    {
      number: 12,
      symbol:  '/assets/img/yNi-XdGxsgQCPpqSio4o31ygAV6wURdIdInWRcFIl46UjUQ1eV7BEndGe8L661OoG-clRi7EgInLX4LPu9Jfw4fq0bnVYHqg7RFi.avif', // Path relative to the 'public' folder
      collection: 'Chainlink',
      floor: '20',
      volume: '70M',
      owners: '2M',
      support: '24/7'
    },
    {
      number: 13,
      symbol:  '/assets/img/yNi-XdGxsgQCPpqSio4o31ygAV6wURdIdInWRcFIl46UjUQ1eV7BEndGe8L661OoG-clRi7EgInLX4LPu9Jfw4fq0bnVYHqg7RFi.avif', // Path relative to the 'public' folder
      collection: 'Chainlink',
      floor: '20',
      volume: '70M',
      owners: '2M',
      support: '24/7'
    }
  ];
  const [activeTab, setActiveTab] = useState("breakfast");
  return (

    <div className="w-100 chartTextH1 h-100">
    <table className="table w-full table-auto border-collapse border-slate-500 chartTextVertContHeader">
        <thead className="">
            <tr>
                <th className="chartText chartTextPL0 border-b border-slate-600 pl-0 py-2 text-slate-800">COLLECTION</th>
                <th className="chartText border-b border-slate-600 text-slate-800 textAlignRight">FLOOR</th>
                <th className="chartText border-b border-slate-600 text-slate-800 textAlignRight">%</th>
            </tr>
        </thead>
        <tbody>
            {exampleRows.map((row, index) => (
                <tr key={index}>

                    <td className="chartText border-custo-img border-slate-700 icon_eth pl-0">
                        <img src={row.symbol} alt="Symbol" className="thumbnail_table_vert w-sm w-2 h-2" />
                        {row.collection}
                    </td>
                    {/* <td className="chartText border-custo border-slate-700">{row.collection}</td> */}
                    

                    <td className="chartText border-custo-img border-slate-700 textAlignRight">
                      
                      {row.floor}
                      <svg className="mr-4"width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_83_582)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.49936 0H3.89945V0.624911H3.59949V1.24982H2.99957V2.49965H2.39966V3.12456H1.79975V4.37437H1.19983V4.99928H0.599915V6.24911H0V6.87402H0.599915V7.49893H1.79975V8.12384H2.99957V8.74875H3.89945V9.37367H4.49936V8.74875H5.39924V8.12384H6.59906V7.49893H7.79889V6.87402H8.39881V6.24911H7.79889V4.99928H7.19897V4.37437H6.59906V3.12456H5.99915V2.49965H5.39924V1.24982H4.79931V0.624911H4.49936V0ZM2.99957 8.12384V7.49893H1.79975V6.87402H0.599915V6.24911H1.19983V4.99928H1.79975V4.37437H2.39966V3.12456H2.99957V2.49965H3.59949V1.24982H3.89945V8.12384H2.99957Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 8.74893H0.599915V9.99871H1.19983V11.2486H1.79975V11.8735H2.39966V13.1242H2.99957V13.7492H3.59949V14.3752H3.89945V15.0002H4.49936V14.3752H4.1994V14.374H4.79931V13.7492H5.39924V13.1242H5.99915V11.8735H6.59906V11.2486H7.19897V9.99871H7.79889V8.74893H8.39881V8.12402H7.79889V8.74893H6.59906V9.37385H5.39924V9.99815L4.49936 9.99871V10.6237H3.89945V9.99871H2.99957V9.37385H1.79975V8.74893H0.599915V8.12402H0V8.74893ZM1.79975 9.99871H1.19983V9.37385H1.79975V9.99871ZM1.79975 9.99871V11.2486H2.39966V11.8735H2.99957V13.1242H3.59949V13.7473H4.1994V13.7492H4.79931V13.7473H4.1994V11.2486H3.89945V10.6237H2.99957V9.99871H1.79975Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_83_582">
<rect width="9" height="15" fill="white"/>
</clipPath>
</defs>
</svg>


                      
                      </td>
                    <td className="chartText border-custo-img border-slate-700 textAlignRight pr-0">{row.volume}</td>
                </tr>
            ))}
        </tbody>
    </table>
</div>

  );
};
export default TableLayoutActivityVert;
