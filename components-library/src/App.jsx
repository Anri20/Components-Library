import React from "react";

import Badge from "./components/Badges/Badge";
import Banner from "./components/Banners/Banner";
import Card from "./components/Cards/Card";

export default function App() {
    return (
        <>
            <Badge type="pill" color="green ">Badge</Badge>
            <Banner type="neutral" mode="multi"></Banner>
            <Card hover="">
                <h1 style={{
                    color: "#111827",
                    fontSize: "1.25rem",
                    margin: "0"
                }}>Easy Deployment</h1>
                <p style={{
                    color: "#6B7280",
                    fontSize: "1rem",
                    margin: "20px 0 0 0"
                }}>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</p>
            </Card >
        </>
    )
}