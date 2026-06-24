"use client";

import { useEffect, useState } from "react";
import { IS_NEWS_MOCK_DEV } from "@/lib/news-mock";

const STORAGE_KEY = "bw-dev-news-mock";

/** DEV ONLY — remove before deploy. */
export function useNewsMock() {
  const [showMock, setShowMockState] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    if (IS_NEWS_MOCK_DEV) {
      setShowMockState(sessionStorage.getItem(STORAGE_KEY) === "1");
    }
    setHydrated(true);
  }, []);

  function setShowMock(enabled: boolean) {
    if (!IS_NEWS_MOCK_DEV) return;
    setShowMockState(enabled);
    sessionStorage.setItem(STORAGE_KEY, enabled ? "1" : "0");
  }

  return { showMock, setShowMock, hydrated };
}
