import React, { useState } from "react";
import "./Clients.css";
import { assets } from "../../assets/assets"

const clientsData = [
  {
    name: "ICICI LOMBOARD",
    logo: assets.ICICI_LOMBOARD,
    description: "A trusted leader in general insurance, delivering innovative risk management solutions across India.",
  },
  {
    name: "Elastic Run",
    logo: assets.Elastic_Run,
    description: "A tech-driven logistics platform bridging the gap between brands and rural India through last-mile delivery.",
  },
  {
    name: "Rasoi Queen",
    logo: assets.Rasoi_Queen,
    description: "Empowering home chefs to deliver authentic, home-cooked meals with love and hygiene.",
  },
  {
    name: "Dhameja Masala",
    logo: assets.Dhameja_Masala,
    description: "Celebrating Indian traditions with a wide range of aromatic, high-quality spices.",
  },
  {
    name: "Car Shringar",
    logo: assets.Car_Shringar,
    description: "One-stop destination for premium car accessories and auto detailing services.",
  },
  {
    name: "Xtrim Global",
    logo: assets.Xtrim_Global,
    description: "Providing cutting-edge outsourcing and tech solutions across global markets.",
  },
  {
    name: "Ink Graph Technologies",
    logo: assets.Ink_Graph_Technologies,
    description: "Blending innovation with design to offer advanced tech and printing solutions.",
  },
  {
    name: "Anaxee Digital Runner",
    logo: assets.Anaxee_Digital_Runner,
    description: "India’s largest last-mile digital reach platform, connecting brands to remote consumers.",
  },
  {
    name: "IMAST Operation",
    logo: assets.IMAST_Operation,
    description: "Strategic operations and consulting services for scalable business growth.",
  },
  {
    name: "Tejas Masale",
    logo: assets.Tejas_Masale,
    description: "Delivering a rich blend of traditional Indian spices crafted with authenticity.",
  },
  {
    name: "Club Mahindra",
    logo: assets.Club_Mahindra,
    description: "India’s leading vacation ownership company offering unforgettable family holidays.",
  },
  {
    name: "Insta Connect",
    logo: assets.Insta_Connect,
    description: "Enabling fast, reliable, and secure connectivity solutions for modern consumers.",
  },
  {
    name: "Novarsis Tech Technologies",
    logo: assets.Novarsis_Tech_Technologies,
    description: "Driving innovation through advanced AI and technology-powered business solutions.",
  },
  {
    name: "Meesho",
    logo: assets.Meesho,
    description: "India’s top reselling platform empowering entrepreneurs through social commerce.",
  },
  {
    name: "L&T Micro Finance",
    logo: assets.L_and_T_Micro_Finance,
    description: "Delivering inclusive financial services to uplift underserved communities.",
  },
  {
    name: "Axis Securities",
    logo: assets.Axis_Securities,
    description: "Offering intelligent investment and trading solutions backed by trust and technology.",
  },
  {
    name: "Arihant Capital",
    logo: assets.Arihant_Capital,
    description: "Expert financial planning and investment services for a secure future.",
  },
  {
    name: "D-Mart",
    logo: assets.D_Mart,
    description: "India’s most loved retail chain offering quality products at unbeatable prices.",
  },
  {
    name: "Vardhman Traders",
    logo: assets.Vardhman_Traders,
    description: "A trusted name in wholesale trading with a commitment to value and reliability.",
  },
  {
    name: "Agrawal Spices",
    logo: assets.Agrawal_Spices,
    description: "Delivering purity and flavor through carefully curated Indian spices.",
  },
  {
    name: "Amazon",
    logo: assets.Amazon,
    description: "The world’s largest e-commerce marketplace transforming online shopping globally.",
  },
  {
    name: "Flipkart",
    logo: assets.Flipkart,
    description: "India’s leading online retail platform known for value, variety, and convenience.",
  },
  {
    name: "Myntra",
    logo: assets.Myntra,
    description: "India’s premier fashion destination offering the latest styles and trends.",
  },
  {
    name: "Mr. AutomotiEV",
    logo: assets.Mr_AutomotiEV,
    description: "A pioneer in smart electric vehicle solutions promoting sustainable mobility.",
  },
  {
    name: "Eureka Forbes",
    logo: assets.Eureka_Forbes,
    description: "Delivering clean living with advanced water and air purification systems.",
  },
];


const Clients = () => {
  const [selectedClient, setSelectedClient] = useState(null);

  return (
    <div className="clients-page">
      <div className="background-animation">
        <div className="circle c1"></div>
        <div className="circle c2"></div>
        <div className="circle c3"></div>
        <div className="circle c4"></div>
      </div>

      <h2 className="clients-title">Our Clients</h2>

      <div className="clients-grid">
        {clientsData.map((client, index) => (
          <div
            className="client-card fade-in"
            key={index}
            style={{ animationDelay: `${index * 0.1}s` }}
            onClick={() => setSelectedClient(client)}
          >
            <img src={client.logo} alt={client.name} />
            <p>{client.name}</p>
          </div>
        ))}
      </div>

      {selectedClient && (
        <div className="modal" onClick={() => setSelectedClient(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>{selectedClient.name}</h3>
            <p>{selectedClient.description}</p>
            <button onClick={() => setSelectedClient(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Clients;
