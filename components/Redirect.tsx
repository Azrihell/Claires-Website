import React from 'react';

const AppStoreRedirectButton = () => {
  const handleRedirect = () => {
    const iosStoreLink = 'https://apps.apple.com/us/app/dorian-comics-game-platform/id1529215455';
    const androidStoreLink = 'https://play.google.com/store/apps/details?id=com.dorian.playtogether&hl=en_US&pli=1';

    const userAgent = navigator.userAgent;

    if (/iPad|iPhone|iPod/.test(userAgent)) {
      window.location.href = iosStoreLink;
    } else if (/android/i.test(userAgent)) {
      window.location.href = androidStoreLink;
    } else {
      alert('Please visit the app store manually.');
    }
  };

  return (
    <button className="button" onClick={handleRedirect}>
      Download from App Store
    </button>
  );
};

export default AppStoreRedirectButton;