import { Component, ReactNode, ErrorInfo } from "react";

type ErrorBoundaryProps = {
  children: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
  errorMessage: string;
};

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, errorMessage: "" };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, errorMessage: error.message };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ hasError: true, errorMessage: error.message });
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h1 className="error-message">
          Something went wrong:{" "}
          <b>
            <u>{this.state.errorMessage}</u>
          </b>
        </h1>
      );
    }

    return this.props.children;
  }
}
