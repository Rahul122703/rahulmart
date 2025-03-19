import React, { useEffect, useState } from "react";
import {
  IoDownload,
  IoClose,
  IoInformationCircleOutline,
} from "react-icons/io5";

const InstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem("visited");

    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      if (!hasVisited) {
        setShowModal(true);
        localStorage.setItem("visited", "true");
      } else {
        setShowButton(true);
      }
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then(() => {
        setDeferredPrompt(null);
        setShowModal(false);
        setShowButton(true);
      });
    }
  };

  return (
    <>
      {showModal && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={() => setShowModal(false)}>
          <div
            className="bg-white rounded-2xl shadow-2xl w-[90%] max-w-sm p-6 relative animate-fadeIn"
            onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition">
              <IoClose className="text-xl" />
            </button>

            <div className="flex flex-col items-center text-center">
              <IoInformationCircleOutline className="text-black text-4xl mb-2" />
              <h2 className="text-xl font-semibold text-gray-800 mb-1">
                Install RahulMart
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                Quickly access this app from your home screen.
              </p>

              <div className="flex gap-3 w-full justify-center mt-2">
                <button
                  onClick={handleInstallClick}
                  className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-black transition">
                  <IoDownload className="text-lg" />
                  Install
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showButton && (
        <button
          onClick={() => setShowModal(true)}
          className="fixed bottom-4 right-4 bg-gray-800 text-white px-4 py-3 rounded-full shadow-xl hover:bg-black transition z-50 flex items-center gap-2">
          <IoDownload className="text-lg" />
        </button>
      )}
    </>
  );
};

export default InstallPrompt;
