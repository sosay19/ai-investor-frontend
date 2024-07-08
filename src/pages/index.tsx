import React from 'react';
import Header from '../components/Header';
import NavigationBar from '../components/NavigationBar';
import InvestmentSummary from '../components/InvestmentSummary';
import RecommendationsTable from '../components/RecommendationsTable';

const Home: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <Header />
            <NavigationBar />
            <main className="p-8">
                <InvestmentSummary />
                <RecommendationsTable />
            </main>
        </div>
    );
};

export default Home;
