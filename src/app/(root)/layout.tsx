"use client";

import Alert from "@/components/Alert";
import Footer from "@/components/Footer";
import AppProvider from "@/context/AppContext";
import React, { useState } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
    const [isFtrInView, setFtrInView] = useState(false);

    return (
        <AppProvider>
            {children}
            <Alert isInView={isFtrInView} />
            <Footer setIsInView={setFtrInView} />
        </AppProvider>
    );
};

export default Layout;
