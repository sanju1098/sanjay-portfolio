import { Component, type ErrorInfo, type ReactNode } from "react";
import { AlertTriangle, Home, RefreshCw } from "lucide-react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  private handleRefresh = () => {
    window.location.reload();
  };

  private handleGoHome = () => {
    window.location.href = "/";
  };

  public render() {
    if (this.state.hasError) {
      return (
        <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-6 py-20">
          <div
            className="grid-field pointer-events-none absolute inset-0 opacity-60"
            aria-hidden
          />
          <div
            className="glow-accent pointer-events-none absolute inset-x-0 top-0 h-72"
            aria-hidden
          />

          <div className="relative z-10 mx-auto max-w-2xl rounded-md border border-border bg-panel p-8 text-center shadow-panel ring-1 ring-border/80 md:p-12">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-sm border border-border bg-secondary text-accent">
              <AlertTriangle className="size-9" aria-hidden />
            </div>

            <p className="label-mono mt-6">System error</p>
            <h1 className="text-gradient mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl">
              Something went wrong
            </h1>
            <p className="mt-4 text-muted-foreground md:text-lg">
              The app hit an unexpected issue. A quick reset should get things
              back on track.
            </p>

            {process.env.NODE_ENV === "development" && this.state.error && (
              <div className="mt-6 rounded-sm border border-border bg-secondary p-4 text-left font-mono text-sm text-muted-foreground">
                {this.state.error.message}
              </div>
            )}

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <button
                type="button"
                onClick={this.handleRefresh}
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-all hover:brightness-110">
                <RefreshCw className="size-4" aria-hidden />
                Try again
              </button>

              <button
                type="button"
                onClick={this.handleGoHome}
                className="inline-flex items-center justify-center gap-2 rounded-sm border border-border bg-secondary px-5 py-3 text-sm font-medium text-secondary-foreground transition-colors hover:bg-muted">
                <Home className="size-4" aria-hidden />
                Go home
              </button>
            </div>
          </div>
        </main>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
