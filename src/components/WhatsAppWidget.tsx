"use client";

import { useEffect } from "react";

export default function WhatsAppWidget() {
  useEffect(() => {
    // Create WhatsApp badge dynamically
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/@wppconnect/whatsapp-widget@latest/dist/whatsapp-widget.js";
    script.async = true;
    document.body.appendChild(script);

    // Initialize the widget after script loads
    script.onload = () => {
      // @ts-ignore
      if (window.WhatsAppWidget) {
        // @ts-ignore
        window.WhatsAppWidget.init({
          phoneNumber: "+442012345678",
          welcomeMessage: "Hello! How can we help you today?",
          companyName: "ROXATE LTD",
          position: "right",
        });
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
}
