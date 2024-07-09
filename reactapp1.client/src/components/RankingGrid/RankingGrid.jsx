import './RankingGrid.css';

function RankingGrid({ items, imgArr, drag, allowDrop, drop }) {
    const rankingGrid = [];
    const rgRow1 = [];
    const rgRow2 = [];
    const rgRow3 = [];
    const rgRow4 = [];

    function pushCellMarkupToArr(currentRow, ranking, label) {
        if (ranking > 0) {
            var item = items.find(o => o.ranking === ranking);
            currentRow.push(<div id={`rank-${ranking}`} onDrop={drop} onDragOver={allowDrop} className="rank-cell">
                {(item != null) ? <img id={`item-${item.id}`} src={imgArr.find(o => o.id === item.imageId)?.image} draggable="true" style={{ cursor: "pointer" }} onDragStart={drag} />
                                : null}
                            </div>);
        } else {
            // Since the index is 0, we know this is a label cell, the first one specifically
            currentRow.push(<div className="row-label">
                                <h4>{label}</h4>
                            </div>);
        }
    }

    function createCellsForRow(rowNumber) {
        var ranking = 0;
        var currentRow = [];
        var label = "";
        const cellCount = 5;

        for (var cellIndex = 1; cellIndex <= cellCount; cellIndex++) {
            ranking = (cellIndex === 1) ? 0 : (cellCount * (rowNumber - 1)) + cellIndex - rowNumber;
            console.log("Creating cell for " + ranking);
            if (rowNumber === 1) {
                currentRow = rgRow1;
                label = "Top Tier";
            } else if (rowNumber === 2) {
                currentRow = rgRow2;
                label = "Second Tier";
            } else if (rowNumber === 3) {
                currentRow = rgRow3;
                label = "Third Tier";
            } else if (rowNumber === 4) {
                currentRow = rgRow4;
                label = "Fourth Tier";
            } else {
                // throw exception
            }
            pushCellMarkupToArr(currentRow, ranking, label);
        }
    }

    function createCellsForRows() {
        const rowCount = 4;
        for (var rowNumber = 1; rowNumber <= rowCount; rowNumber++) {
            createCellsForRow(rowNumber);
        }
    }

    function createRowsForGrid() {
        rankingGrid.push(<div className="rank-row first-tier">{rgRow1}</div>);
        rankingGrid.push(<div className="rank-row second-tier">{rgRow2}</div>);
        rankingGrid.push(<div className="rank-row third-tier">{rgRow3}</div>);
        rankingGrid.push(<div className="rank-row fourth-tier">{rgRow4}</div>);

        return rankingGrid;
    }

    function createRankingGrid() {
        createCellsForRows();
        return createRowsForGrid();
    }

    return (
        <div className="rankings">
            {createRankingGrid()}
        </div>
    );
}
export default RankingGrid;