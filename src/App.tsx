import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Details from './details/Details';
import CookieConsent from './CookieConsent';
import { COOKIES_LOCAL_STORAGE_KEY } from './utils/constants';
import { useEffect, useState } from 'react';
;

const App: React.FC = () => {
  localStorage.removeItem(COOKIES_LOCAL_STORAGE_KEY);
  const [isCookiesAccepted, setIsCookiesAccepted] = useState<boolean | null>(null);
  const [isCookieConsentVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const storedValue = localStorage.getItem(COOKIES_LOCAL_STORAGE_KEY);
    setIsCookiesAccepted(storedValue === "true");
  }, []);


  const handleAcceptCookies = () => {
    localStorage.setItem(COOKIES_LOCAL_STORAGE_KEY, "true");
    setIsCookiesAccepted(true);
    setIsVisible(false);
  };

  const handleRefuseCookies = () => {
    localStorage.setItem(COOKIES_LOCAL_STORAGE_KEY, "false");
    setIsCookiesAccepted(false);
    setIsVisible(false);
  };

  return (
    <div className="w-screen h-screen">
    <Router>
      <Routes>
        <Route path="/" element={<Home isCookiesAccepted={isCookiesAccepted}/>}/>
        <Route path="/details/:productId" element={<Details isCookiesAccepted={isCookiesAccepted}/>}/>
      </Routes>
    </Router>
    {
      (isCookiesAccepted == null || (isCookiesAccepted == false && isCookieConsentVisible)) && (
        <>
        <CookieConsent onAccept={handleAcceptCookies} onRefuse={handleRefuseCookies} isCookieConsentVisible={isCookieConsentVisible}></CookieConsent>
        </>
      )
    }
    </div>
      
  );
}

export default App;
