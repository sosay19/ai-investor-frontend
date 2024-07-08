import React from 'react';

const RecommendationsTable: React.FC = () => {
    const recommendations = [
        { type: 'Bond', risk: 'Low', return: '5%', advice: 'Buy' },
        { type: 'Stock', risk: 'Medium', return: '10%', advice: 'Hold' },
        { type: 'ETF', risk: 'High', return: '15%', advice: 'Sell' },
    ];

    return (
        <div className="w-full max-w-4xl mx-auto bg-white shadow-md rounded-lg p-4 mt-8">
            <h2 className="text-xl font-semibold mb-4">Recommendations</h2>
            <table className="w-full table-auto border-collapse">
                <thead>
                    <tr className="bg-gray-200 text-left">
                        <th className="py-2 px-4 border-b">Type</th>
                        <th className="py-2 px-4 border-b">Risk Level</th>
                        <th className="py-2 px-4 border-b">Expected Return</th>
                        <th className="py-2 px-4 border-b">Advice</th>
                        <th className="py-2 px-4 border-b">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {recommendations.map((rec, index) => (
                        <tr key={index} className="border-b hover:bg-gray-100">
                            <td className="py-2 px-4">{rec.type}</td>
                            <td className="py-2 px-4">{rec.risk}</td>
                            <td className="py-2 px-4">{rec.return}</td>
                            <td className="py-2 px-4">{rec.advice}</td>
                            <td className="py-2 px-4">
                                <button className="bg-blue-500 text-white px-2 py-1 rounded mr-2 hover:bg-blue-600">View Details</button>
                                <button className="bg-gray-500 text-white px-2 py-1 rounded mr-2 hover:bg-gray-600">History</button>
                                <button className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600">Feedback</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default RecommendationsTable;
