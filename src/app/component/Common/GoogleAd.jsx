'use client';

import React, { useEffect } from 'react';

const GoogleAd = ({ client = 'pub-1332484085024349', slot, format = 'auto', responsive = true }) => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.log('AdSense error:', err.message);
    }
  }, []);

  return (
    <>
      <div className="google-ad-container my-4">
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client={`ca-${client}`}
          data-ad-slot={slot}
          data-ad-format={format}
          data-full-width-responsive={responsive}
        />
      </div>
    </>
  );
};

export default GoogleAd;