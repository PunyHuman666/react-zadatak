import React from "react";

export default function Komponenta4() {
    const animals = ["pas", "mačak", "bubašvaba"];
    return <ul>Živine: {animals.map((a => <li>{a}</li>))}</ul>
}