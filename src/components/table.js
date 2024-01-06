import React from 'react';

const CryptoExchangeTable = () => {
    // Example data
    const exampleRow = {
        number: 1,
        symbol: 'BTC',
        collection: 'Bitcoin',
        floor: '45,000',
        volume: '200M',
        owners: '3M',
        support: '24/7'
    };

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse border border-slate-500">
                <thead>
                    <tr>
                        <th className="border border-slate-600 px-4 py-2 text-slate-800">Number</th>
                        <th className="border border-slate-600 px-4 py-2 text-slate-800">Symbol</th>
                        <th className="border border-slate-600 px-4 py-2 text-slate-800">Collection</th>
                        <th className="border border-slate-600 px-4 py-2 text-slate-800">Floor</th>
                        <th className="border border-slate-600 px-4 py-2 text-slate-800">Volume</th>
                        <th className="border border-slate-600 px-4 py-2 text-slate-800">Owners</th>
                        <th className="border border-slate-600 px-4 py-2 text-slate-800">Support</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-slate-700 px-4 py-2">{exampleRow.number}</td>
                        <td className="border border-slate-700 px-4 py-2">{exampleRow.symbol}</td>
                        <td className="border border-slate-700 px-4 py-2">{exampleRow.collection}</td>
                        <td className="border border-slate-700 px-4 py-2">{exampleRow.floor}</td>
                        <td className="border border-slate-700 px-4 py-2">{exampleRow.volume}</td>
                        <td className="border border-slate-700 px-4 py-2">{exampleRow.owners}</td>
                        <td className="border border-slate-700 px-4 py-2">{exampleRow.support}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default CryptoExchangeTable;
