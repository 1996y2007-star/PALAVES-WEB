import { useState, useEffect } from 'react';

export function useCMSContent<T>(filePath: string, fallback?: T): T | null {
  const [data, setData] = useState<T | null>(fallback || null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/content/${filePath}`)
      .then(res => {
        if (!res.ok) {
          throw new Error(`Failed to load ${filePath}`);
        }
        return res.json();
      })
      .then(jsonData => {
        setData(jsonData);
        setLoading(false);
      })
      .catch(err => {
        console.error(`Error loading ${filePath}:`, err);
        // If there is a fallback, use it on error
        if (fallback) {
          setData(fallback);
        }
        setLoading(false);
      });
  }, [filePath]);

  // Return fallback data during the loading phase to prevent layout shifts
  return loading ? (fallback || null) : data;
}
