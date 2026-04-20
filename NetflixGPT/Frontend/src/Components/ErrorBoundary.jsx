import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="w-screen h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center p-4">
          <div className="max-w-2xl w-full bg-gray-800 border-2 border-red-600 rounded-2xl p-8 shadow-2xl">
            {/* Error Icon */}
            <div className="text-6xl text-red-600 mb-4 text-center">⚠️</div>

            {/* Title */}
            <h1 className="text-4xl font-bold text-white mb-4 text-center">
              Oops! Something went wrong
            </h1>

            {/* Error Message */}
            <div className="bg-black/50 rounded-lg p-4 mb-6 border border-red-600/30">
              <p className="text-red-400 text-lg font-mono break-words">
                {this.state.error && this.state.error.toString()}
              </p>
            </div>

            {/* Error Details (Dev Only) */}
            {process.env.NODE_ENV === "development" && this.state.errorInfo && (
              <div className="bg-black/50 rounded-lg p-4 mb-6 max-h-64 overflow-y-auto border border-yellow-600/30">
                <p className="text-yellow-400 text-sm font-mono whitespace-pre-wrap">
                  {this.state.errorInfo.componentStack}
                </p>
              </div>
            )}

            {/* Help Text */}
            <p className="text-gray-300 mb-8 text-center leading-relaxed">
              Don't worry! We've logged this error and our team has been
              notified. Try refreshing the page or navigate to the home page.
            </p>

            {/* Action Buttons */}
            <div className="flex gap-4 flex-col md:flex-row">
              <button
                onClick={() => window.location.reload()}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200"
              >
                🔄 Refresh Page
              </button>
              <button
                onClick={() => (window.location.href = "/")}
                className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition duration-200"
              >
                🏠 Go Home
              </button>
            </div>

            {/* Support Text */}
            <p className="text-gray-400 text-sm text-center mt-6">
              Error ID: {Math.random().toString(36).substr(2, 9).toUpperCase()}
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
