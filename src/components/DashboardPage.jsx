import React from 'react';
import Web3Provider from './Web3Provider.jsx';
import { ConnectWallet } from './ConnectWallet.jsx';
import DashboardContent from './DashboardContent.jsx';

export default function DashboardPage() {
  return (
    <Web3Provider>
      <nav className="top-bar">
        <a href="/" className="logo">Suchbot</a>
        <div className="wallet-container">
          <ConnectWallet />
        </div>
      </nav>
      <main style={{ maxWidth: '900px', margin: '0 auto', padding: '5rem 1.5rem 3rem' }}>
        <DashboardContent />
      </main>
    </Web3Provider>
  );
}
