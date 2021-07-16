import router from 'next/router';
import React, { useState, useEffect } from 'react';

export function useAllbDevice() {
  const [isDevice, setDevice] = useState(null);
  useEffect(() => {
    const device = window.localStorage.getItem('device_id')
    if(device){
      return setDevice(device)
    } else {
      router.push('/')
    }
    
  });

  if (isDevice === null) {
    return 'Loading...';
  }
  return isDevice ? 'Online' : 'Offline';
}