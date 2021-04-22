import React, { ReactNode } from "react";
import { AuthProvider } from "context/auth-context";
import {QueryClientProvider, QueryClient} from "react-query";
import { BrowserRouter as Router} from "react-router-dom";


export const AppProviders = ({ children }: { children: ReactNode }) => {
    return (
    <QueryClientProvider client={new QueryClient()}>
        <Router>
            <AuthProvider>{children}</AuthProvider>;
        </Router>
    </QueryClientProvider>
    )
};