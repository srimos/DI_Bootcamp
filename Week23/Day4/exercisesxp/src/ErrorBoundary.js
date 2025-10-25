import React from 'react'
import { useLocation } from "react-router-dom";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hasError: false, error:null}
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  
  componentDidCatch(error,errorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="alert alert-danger mt-4">
          <h4>Something went wrong.</h4>
          <p>{this.state.error?.message}</p>
        </div>
      )
    }

    return this.props.children; 
  }
}

function ErrorBoundaryWithReset({ children }) {
  const location = useLocation();
  return <ErrorBoundary key={location.pathname}>{children}</ErrorBoundary>;
}

export { ErrorBoundaryWithReset };
