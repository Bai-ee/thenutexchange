import { useState } from "react";
import Item from "./Item";

const TableLayoutActivity = ({ items }) => {
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
  const [activeTab, setActiveTab] = useState("breakfast");
  return (

    <div className="activity-chart overflow-x-auto w-100 chartTextH1">
      ACTIVITY
    <table className="table w-full table-auto border-collapse border-slate-500">
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
    </table>
</div>

  );
};
export default TableLayoutActivity;
