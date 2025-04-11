import React from "react"
import "./Badge.css"
import clsx from "clsx"

export default function Badge({ children, type, color }) {
    const classes = clsx(
        "badge",
        type != "" && type ? type.toLowerCase() : "square",
        color != "" && color ? color.toLowerCase() : "gray",
    )

    return (
        <div className={classes}>
            {children}
        </div>
    )
}