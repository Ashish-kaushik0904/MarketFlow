import React from 'react';

const topics = [
  {
    title: "Account Opening",
    links: [
      "Online Account Opening",
      "Offline Account Opening",
      "Company, Partnership, HUF Account",
      "NRI Account Opening",
      "Charges at MarketFlow",
      "Getting Started",
    ],
  },
  {
    title: "Your MarketFlow Account",
    links: [
      "Login Credentials",
      "Account Modification",
      "DP ID and Bank Details",
      "Your Profile",
      "Transfer of Shares",
    ],
  },
  {
    title: "Trading & Platform",
    links: [
      "Margin & Leverage",
      "Product & Order Types",
      "Web and Mobile Platform",
      "Trading FAQs",
      "Corporate Actions",
      "MarketFlow API",
      "GTT Orders",
    ],
  },
  {
    title: "Funds",
    links: [
      "Adding Funds",
      "Fund Withdrawal",
      "eMandates",
      "Adding Bank Accounts",
    ],
  },
  {
    title: "Reports & Console",
    links: [
      "Reports",
      "Ledger",
      "Portfolio",
      "60 Day Challenge",
      "Referral Program",
    ],
  },
  {
    title: "Mutual Funds",
    links: [
      "Understanding Mutual Funds",
      "Buying and Selling",
      "Starting an SIP",
      "Manage your Portfolio",
      "Government Securities",
    ],
  },
];

function CreateTicket() {
  return (
    <div className="support-tickets">
      <h2>To create a ticket, select a relevant topic</h2>
      <div className="support-topics-grid">
        {topics.map((topic, index) => (
          <div className="support-topic-card" key={index}>
            <h4>{topic.title}</h4>
            <ul>
              {topic.links.map((link, i) => (
                <li key={i}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreateTicket;