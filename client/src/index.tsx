import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import trpc from "@/services/trpc";
import config from "@/config/config";
import App from "@/components/app/app";
import ErrorBoundary from "@/components/error-boundary/error-boundary";

const root = ReactDOM.createRoot(document.querySelector("#root")!);

const queryClient = new QueryClient();

const trpcClient = trpc.createClient({
  url: `${config.apiUrl}/trpc`,
  fetch(url, options) {
    return fetch(url, { ...options });
  },
});

root.render(
  <ErrorBoundary>
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <App />
        </Router>
      </QueryClientProvider>
    </trpc.Provider>
  </ErrorBoundary>
);
