import React from 'react'
import { BsDot } from "react-icons/bs";
import Badge from "./../../../Utils/Badge";

const DetailsList = ({ detail, index, size, searchAttrHandler }) => {

    const newBadge = {
        name: "new",
        value: "NEW!",
    };

    const featuredBadge = {
        name: "featured",
        value: "FEATURED",
    };

    return (
        (typeof detail === 'object') ?
            (<li>
                {detail.name} {detail.new ? <Badge type={newBadge} /> : ""}
                {detail.featured ? <Badge type={featuredBadge} /> : ""}
            </li>) :
            (searchAttrHandler ? 
                (<li><span onClick={() => searchAttrHandler(detail)} tabIndex={0}>{detail}</span></li>) :
                ((<><li>{detail}</li> {index < size ? <BsDot /> : ''}</>)))
    )
}

export default DetailsList
