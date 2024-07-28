import React from 'react';
import HeaderBox from '@/components/ui/HeaderBox';
import TotalBalanceBox from '@/components/ui/TotalBalanceBox';
import RightSidebar from '@/components/ui/RightSidebar';

const Home = () => {
  const loggedIn = {firstName:'Aman' , lastName:' Anand', email:"amananand1812@gmail.com"};
  return (
    <section className="home">
      <div className="home-content">
        <header className='home-header'>
          <HeaderBox
            type="greeting"
            title="Welcome"
            user="Aman"
            subtext="Access and manage your account and transactions efficiently."
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={12500}
          />
        </header>

        RECENT TRANSACTIONS 
      </div>

      <RightSidebar
      user={loggedIn}
      trasactions={[]}
      banks={[{currentBalance: 123.50},{
        currentBalance: 500.50}]}
      />
    </section>
  );
};

export default Home;