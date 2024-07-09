import React, { useState, useEffect } from "react";
import './Internships.css'

function Internships() {

    const [internshipsData, setInternshipsData] = useState([]);

    useEffect(() => {
        fetch(`resume/internships`)
            .then((results) => {
                return results.json();
            })
            .then(data => {
                console.log(data);
                setInternshipsData(data);
            })
    }, [])

    return (
        <tr className="">
            <td className="">
                <p className="">
                    <br></br>
                </p>
            </td>
            <td className="">
                <p className="">
                    Primary Skills
                </p>
            </td>
            <td className="">
                <p className="">
                    <br></br>
                </p>
            </td>
            <td className="">
                <p className="">
                    <br></br>
                </p>
            </td>
        </tr>
    )

}
export default Internships;