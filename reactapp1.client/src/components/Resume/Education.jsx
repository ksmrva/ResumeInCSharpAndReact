import React, { useState, useEffect } from "react";
import './Education.css'

function Education() {

    const [educationData, setEducationData] = useState([]);

    useEffect(() => {
        fetch(`resume/education`)
            .then((results) => {
                return results.json();
            })
            .then(data => {
                console.log(data);
                setEducationData(data);
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
export default Education;