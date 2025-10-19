"use client"
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="text-content">
          <span className="badge">Best for organize and customize easily</span>
          <h1>Best for organize and customize easily</h1>
          <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button className="cta-button">Download</button>
        </div>
        <div className="image-content">
          <Image src="/phone.png" alt="Phone Image" width={300} height={600} />
        </div>
      </div>
      <style jsx>{`
        .hero-section {
          background: linear-gradient(135deg, #7b5aff, #764ba2);
          padding: 80px 0;
          position: relative;
          display: flex;
          justify-content: center;
        }
        .container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1200px;
          width: 100%;
          padding: 0 20px;
        }
        .text-content {
          max-width: 500px;
        }
        .badge {
          display: inline-block;
          background-color: #eef2f6;
          padding: 8px 16px;
          border-radius: 50px;
          font-size: 14px;
          color: #333;
        }
        h1 {
          font-size: 36px;
          font-weight: bold;
          color: #fff;
          margin-top: 20px;
        }
        p {
          font-size: 18px;
          color: #ddd;
          margin: 20px 0;
        }
        .cta-button {
          background-color: #ff3366;
          color: white;
          padding: 12px 24px;
          border: none;
          border-radius: 50px;
          font-size: 16px;
          cursor: pointer;
        }
        .image-content {
          position: relative;
        }
        .image-content img {
          max-width: 100%;
          height: auto;
          transform: rotate(25deg);
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
