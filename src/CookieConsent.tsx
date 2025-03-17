

interface CookieConsentProps {
  onAccept: () => void;
  onRefuse: () => void;
  isCookieConsentVisible: boolean;
}

const CookieConsent: React.FC<CookieConsentProps> = ({
  onAccept,
  onRefuse,
  isCookieConsentVisible,
}) => {
  return (
    <>
      <div
        className={`absolute bottom-0 left-0 w-full h-auto bg-gray-600 p-8 cookie-consent ${
          isCookieConsentVisible ? "" : "hide"
        }`}
      >
        <div className="flex flex-col justify-center items-center text-white">
          <p>
            Este site utiliza cookies para melhorar sua experiência. Ao clicar
            em "Aceitar", você concorda com o uso de cookies para fins
            analíticos.
          </p>
          <div className="flex flex-row justify-center items-center mt-4">
            <button
              className="bg-primary p-2 rounded-3xl cursor-pointer"
              onClick={onAccept}
            >
              Aceitar
            </button>
            <button
              className="ml-6 bg-[#ad6705] p-2 rounded-3xl cursor-pointer"
              onClick={onRefuse}
            >
              Recusar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CookieConsent;
