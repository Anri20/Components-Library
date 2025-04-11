import React from "react"
import "./Banner.css"
import clsx from "clsx"

export default function Banner({ children, type, mode }) {
    const bannerType = type != "" && type ? type.toLowerCase() : "success"
    const bannerMode = mode != "" && mode ? mode.toLowerCase() : "multi"

    const classes = clsx(
        "banner",
        bannerType,
        bannerMode,
    )

    let icon
    let title
    switch (bannerType) {
        case "success":
            icon = <i class="fa-solid fa-circle-check" style={{color: "#34D399"}}></i>
            title = "Congratulations!"
            break;

        case "warning":
            icon = <i class="fa-solid fa-triangle-exclamation" style={{color: "#FBBF24"}}></i>
            title = "Attention"
            break;

        case "danger":
            icon = <i class="fa-solid fa-circle-xmark" style={{color: "#F87171"}}></i>
            title = "There is a problem with your application"
            break;

        case "neutral":
            icon = <i class="fa-solid fa-circle-info" style={{color: "#60A5FA"}}></i>
            title = "Update available"
            break;
    }

    const desc = children ?
        children :
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum."

    console.log(desc)

    return (
        <div className={classes}>
            {icon}
            <h1>{title}</h1>
            {bannerMode === "multi" && <p>{desc}</p>}
        </div>
    )
}