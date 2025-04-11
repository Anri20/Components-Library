import React from "react";

import Badge from "./components/Badges/Badge";
import Banner from "./components/Banners/Banner";

export default function App() {
    return (
        <>
            <Badge type="pill" color="pink">Badge</Badge>
            <Banner type="neutral" mode="multi"></Banner>
        </>
    )
}