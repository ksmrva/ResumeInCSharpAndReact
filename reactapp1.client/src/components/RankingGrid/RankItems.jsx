import React, { useState, useEffect } from "react";
import MovieImageArr from "./RankingGrid/MovieImages.js";
import RankingGrid from "./RankingGrid.jsx"
import './RankItems.css'

function RankItems() {

    const [items, setItems] = useState([]);
    const itemType = 1;

    function drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
    }

    function allowDrop(ev) {
        ev.preventDefault();
    }

    function drop(ev) {
        ev.preventDefault();
        const targetElement = ev.target;
        if (targetElement.nodeName === "IMG") {
            return false;
        }
        if (targetElement.childNodes.length === 0) {
            var data = parseInt(ev.dataTransfer.getData("text").substring(5));
            const transformedCollection = items.map((item) => (item.id === parseInt(data)) ?
                { ...item, ranking: parseInt(targetElement.id.substring(5)) } : { ...item, ranking: item.ranking }

            );
            setItems(transformedCollection);
        }
    }

    useEffect(() => {
        fetch(`item/${itemType}`)
            .then((results) => {
                return results.json();
            })
            .then(data => {
                setItems(data);
            })
    }, [])

    return (
        <main>
            <RankingGrid items={items} imgArr={MovieImageArr} drag={drag} allowDrop={allowDrop} drop={drop} />
            <div className = "unranked-items">
                {
                    (items.length > 0) ? items.map((item) => {
                        <div className="unranked-cell">
                        <img id={`item-${item.id}`} src={MovieImageArr.find(o => o.id === item.imageId)?.image}
                            style={{ cursor: "pointer" }} draggable="true" onDragStart={drag} />
                    </div>
                    }
                    ) : <div>Loading...</div>
                }
            </div>
        </main>

    )

}

export default RankItems;