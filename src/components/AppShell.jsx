import React from 'react';
import Web3Provider from './Web3Provider.jsx';
import { ConnectWallet } from './ConnectWallet.jsx';

export default function AppShell({ children }) {
  return (
    <Web3Provider>
      <nav className="top-bar">
        <a href="/" className="logo">Suchbot</a>
        <div className="wallet-container">
          <ConnectWallet />
        </div>
      </nav>
      <div className="app-content">
        {children}
      </div>
    </Web3Provider>
  );
}
