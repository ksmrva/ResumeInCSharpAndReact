import React, { useState, useEffect } from "react";
import './Header.css'

function Header() {

    const [headerData, setHeaderData] = useState([]);

    useEffect(() => {
        fetch(`resume/header`)
            .then((results) => {
                return results.json();
            })
            .then(data => {
                setHeaderData(data);
            })
    }, [])

    function createRowForHeaderSectionValue() {
        const rowForHeaderSectionValue = [];
        rowForHeaderSectionValue.push(
            <tr className="headerMain">
                <td className="phoneSection">
                    <p className="phoneSectionTopPadding">
                        <br></br>
                    </p>
                    <p className="phoneSectionValue">
                        {headerData.phoneNumber}
                    </p>
                </td>
                <td className="addressSection">
                    <p className="addressSectionValue">
                        {headerData.address1}
                        <br></br>
                        {headerData.city}, {headerData.state} {headerData.zipCode}
                    </p>
                </td>
                <td className="emailSectionLeftPadding">
                    <p className="emailSectionLeftPaddingInner">
                        <br></br>
                    </p>
                </td>
                <td className="emailSection">
                    <p className="emailSectionTopPadding">
                    </p>
                    <p className="emailSectionValue">
                        <a className="emailValueAnchor" href='mailto:${headerData.email}'>{headerData.email}</a>
                    </p>
                </td>
            </tr>
        );
        return rowForHeaderSectionValue;
    }

    function createRowForHeaderSectionTitle() {
        const rowForHeaderSectionTitle = [];
        rowForHeaderSectionTitle.push(<tr className="headerSectionTitleRow">
            <td className="headerSectionTitleLeftPadding">
            </td>
            <td className="headerSectionTitle">
                <p className="headerSectionTitleValue">
                    Kevin S. Mark
                </p>
            </td>
            <td className="headerSectionTitleRightPadding1">
            </td>
            <td className="headerSectionTitleRightPadding2">
            </td>
        </tr>);
        return rowForHeaderSectionTitle;
    }

    function createHeaderSectionRows() {
        const headerSectionRows = [];
        headerSectionRows.push(
            createRowForHeaderSectionTitle(),
            createRowForHeaderSectionValue()
        );
        return headerSectionRows;
    }

    return (
        createHeaderSectionRows()
    )

}
export default Header;