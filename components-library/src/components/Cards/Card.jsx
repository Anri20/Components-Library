import React from "react"
import "./Card.css"
import clsx from "clsx"

export default function Card({ children, hover }) {
    const hoverMode = (hover === "hover")

    const classes = clsx(
        "card",
        hoverMode && "hover"
    )

    return (
        <div className={classes}>
            <i className="fa-solid fa-cloud-arrow-up"></i>
            {children}
        </div>
    )
}