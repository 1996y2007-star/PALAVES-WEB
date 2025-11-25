import { useState, useEffect } from 'react';

export function useCMSContent<T>(filePath: string, fallback?: T): T | null {
  const [data, setData] = useState<T | null>(fallback || null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Agregamos un timestamp para evitar cache agresivo en navegadores
    // durante la edición, aunque en producción Vite gestiona los assets.
    // Al usar fetch a /content/..., leemos el archivo servido estáticamente.
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
        // Si hay error (ej. archivo no existe aun), usamos fallback
        if (fallback) {
          setData(fallback);
        }
        setLoading(false);
      });
  }, [filePath]);

  // Si está cargando y no tenemos datos aún, retornamos fallback si existe
  return loading ? (fallback || null) : data;
}