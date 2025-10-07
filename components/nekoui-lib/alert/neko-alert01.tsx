import React, { useState, useEffect } from "react";
import { AlertCircle, CheckCircle, X } from "lucide-react";

export function NekoAlert01() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="w-full max-w-xl space-y-4">
      <h3 className="text-sm font-semibold text-gray-500 mb-4">
        01 - Slide In Gradient
      </h3>

      <div
        className={`relative overflow-hidden rounded-xl border border-red-200 bg-gradient-to-r from-red-50 via-pink-50 to-red-50 p-4 shadow-lg transition-all duration-500 ${
          isVisible
            ? "translate-x-0 opacity-100"
            : "-translate-x-full opacity-0"
        }`}
      >
        <div className="flex gap-3">
          <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 animate-pulse" />
          <div className="flex-1">
            <h5 className="font-semibold text-red-900 mb-1">Error Alert</h5>
            <p className="text-sm text-red-800">
              Something went wrong. Please try again.
            </p>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="text-red-600 hover:text-red-800 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div
        className={`relative overflow-hidden rounded-xl border border-green-200 bg-gradient-to-r from-green-50 via-emerald-50 to-green-50 p-4 shadow-lg transition-all duration-500 delay-100 ${
          isVisible
            ? "translate-x-0 opacity-100"
            : "-translate-x-full opacity-0"
        }`}
      >
        <div className="flex gap-3">
          <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
          <div className="flex-1">
            <h5 className="font-semibold text-green-900 mb-1">Success Alert</h5>
            <p className="text-sm text-green-800">
              Your changes have been saved successfully.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
