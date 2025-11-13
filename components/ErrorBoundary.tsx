import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertCircle } from './icons.tsx';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  // Fix: Reverted to using a constructor to initialize state. While class fields are a
  // modern approach, this resolves the TypeScript error where 'props' was not being
  // found on the component instance in this specific environment.
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center h-screen bg-warm-gray-50 text-warm-gray-700 p-4" role="alert">
          <AlertCircle className="w-16 h-16 text-red-500 mb-4" />
          <h1 className="text-2xl font-serif font-bold mb-2">Algo salió mal.</h1>
          <p className="text-center mb-4">
            Lo sentimos, la aplicación ha encontrado un error inesperado. Por favor, intenta refrescar la página.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-accent text-warm-gray-900 font-medium rounded-md hover:bg-accent-dark transition-colors"
          >
            Refrescar Página
          </button>
          {process.env.NODE_ENV === 'development' && this.state.error && (
            <details className="mt-6 p-4 bg-warm-gray-100 rounded-lg text-left w-full max-w-2xl">
              <summary className="font-medium cursor-pointer">Detalles del error (solo desarrollo)</summary>
              <pre className="mt-2 text-sm text-red-700 whitespace-pre-wrap">
                {this.state.error.toString()}
                <br />
                {this.state.error.stack}
              </pre>
            </details>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
