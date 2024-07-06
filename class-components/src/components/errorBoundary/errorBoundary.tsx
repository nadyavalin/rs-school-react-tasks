import React, { ReactNode, ErrorInfo } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ error, errorInfo });
    console.log("Error caught by ErrorBoundary:", error, errorInfo);
    if (errorInfo.componentStack) {
      console.log("Error component stack:", errorInfo.componentStack);
    }
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <h1 className="error-message">
          Something went wrong: <br />
          <b>
            <u>{this.state.error && this.state.error.toString()}</u>
          </b>
        </h1>
      );
    }
    return this.props.children;
  }
}
