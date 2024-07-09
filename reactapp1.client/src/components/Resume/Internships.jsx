import React, { useState, useEffect } from "react";
import './Internships.css'

function Internships() {

    const [internships, setInternships] = useState([]);

    useEffect(() => {
        fetch(`resume/internships`)
            .then((results) => {
                return results.json();
            })
            .then(data => {
                setInternships(data);
            })
    }, [])

    function createInternshipSectionTitle() {
        const internshipSectionTitle = [];
          internshipSectionTitle.push(<p className="internshipTitleTopPadding">
                                           <br></br>
                                      </p>);

        internshipSectionTitle.push(<h1 className="internshipTitleValue">Internships</h1>);

           internshipSectionTitle.push(<p className="internshipTitleBottomPadding">
                                        </p>);
        return internshipSectionTitle;
    }

    function createInternshipResponsibilityValues(internship) {
        const internshipResponsibilityValues = [];
        internship.responsibilities.map((responsibility) =>
            internshipResponsibilityValues.push(<ul className="internshipResponsibilitiesUnorderedList">
                <li className="internshipResponsibilitiesListItem">
                    <p className="internshipResponsibilitiesValue">{responsibility}</p>
                </li>
            </ul>)
        );
        return internshipResponsibilityValues;
    }
    function createInternshipSection() {
        const internshipSection = [];
        internshipSection.push(<div>
            {createInternshipSectionTitle()}
        </div>
        );

        internships.map((internship) => {

            var numberOfReponsibilities = internship.responsibilities.length;
            var heightForExperienceSection = numberOfReponsibilities * 60;

            internshipSection.push(<div className="internshipSection" style={{ height: heightForExperienceSection }} >
                <div className="internshipCompanyNameAndLocation">
                    <span className="internshipCompanyName">{internship.schoolName}</span>
                    <span className="internshipLocation">{internship.city}, {internship.state}</span>
                </div>
                <div className="internshipRoleAndDateRange">
                    <span className="internshipRole">{internship.role}</span>
                    <span className="internshipDateRange">{internship.fromDate} To {internship.toDate}</span>
                </div>
                <div className="internshipResponsibilities">
                    {createInternshipResponsibilityValues(internship)}
                </div>
            </div>);
        });

        return internshipSection;
    }

    return (
        createInternshipSection()
    )

}
export default Internships;