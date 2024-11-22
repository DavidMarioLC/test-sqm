import React from "react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-sqm-white">
      <img
        className="animate-bounce-slow"
        src="/sqm-loading-logo.svg"
        alt="Loading"
      />
    </div>
  );
}
