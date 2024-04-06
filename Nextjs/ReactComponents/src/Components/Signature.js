import React, { useState, useRef } from "react";
import SignatureCanvas from "react-signature-canvas";

const SignatureApp = () => {
  const [bgColor, setBgColor] = useState("#ffffff");
  const [textColor, setTextColor] = useState("#000000");
  const signatureRef = useRef();

  const clearSignature = () => {
    signatureRef.current.clear();
  };

  const downloadSignature = () => {
    const dataUrl = signatureRef.current.toDataURL();
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = "signature.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-200">
      <div className="w-80vw max-w-md border border-gray-300 rounded p-4">
        <div
          className="mb-4"
          style={{ backgroundColor: bgColor, color: textColor }}
        >
          <h2 className="text-lg font-bold mb-2">Signature Pad</h2>
          <SignatureCanvas
            ref={signatureRef}
            penColor={textColor}
            canvasProps={{
              width: "100%",
              height: 200,
              className: "signature-canvas",
            }}
          />
        </div>
        <div className="flex mt-2">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
            onClick={clearSignature}
          >
            Clear
          </button>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
            onClick={downloadSignature}
          >
            Download
          </button>
          <input
            type="color"
            value={bgColor}
            onChange={(e) => setBgColor(e.target.value)}
            className="mr-2"
          />
          <input
            type="color"
            value={textColor}
            onChange={(e) => setTextColor(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default SignatureApp;
