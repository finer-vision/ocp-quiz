import React from "react";
import { ErrorBoundaryWrapper } from "@/components/error-boundary/error-boundary.styles";
import { AppReset } from "@/components/app/app.styles";

type Props = {
  children?: React.ReactNode;
};

type State = {
  hasError: boolean;
};

export default class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <ErrorBoundaryWrapper>
          <AppReset />
          <h1>Sorry, you've ran out of time</h1>
          <button
            onClick={() => {
              window.location.href = "/";
            }}
          >
            Reset
          </button>
        </ErrorBoundaryWrapper>
      );
    }

    return this.props.children;
  }
}
