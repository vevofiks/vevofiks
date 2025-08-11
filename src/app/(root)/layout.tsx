"use client";

import Alert from "@/components/Alert";
import Footer from "@/components/Footer";
import AppProvider from "@/context/AppContext";
import React, { useState } from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
    const [isFtrInView, setFtrInView] = useState(false);
    const [shouldItView] = useState(true);

    return (
        <AppProvider>
            {children}
            <Alert shouldIt={shouldItView} isInView={isFtrInView} />
            <Footer setIsInView={setFtrInView} />
        </AppProvider>
    );
};

export default layout;
