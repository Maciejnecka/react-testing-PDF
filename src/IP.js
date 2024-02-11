// ./src/IP.js
import React, { useState, useEffect } from 'react';
import { get } from './api/ipProvider';
function IP() {
  const [ip, setIp] = useState(null);
  useEffect(() => {
    let isMounted = true;
    get().then((data) => {
      if (isMounted) setIp(() => data.ip);
    });
    return () => (isMounted = false);
  }, []);

  if (ip === null) return <p>Loading...</p>;
  return <h1>{ip}</h1>;
}
export default IP;
