import React from "react";

export default function Valeur(props) {
    return (
        <div className="valeur">
            <span className={props.class}>{props.counter}</span>
        </div>
    )
}