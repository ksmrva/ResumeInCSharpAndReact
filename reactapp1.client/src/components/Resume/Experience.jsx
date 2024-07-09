import React, { useState, useEffect } from "react";
import './Experience.css'

function Experience() {

    const [experiences, setExperiences] = useState([]);

    useEffect(() => {
        fetch(`resume/experiences`)
            .then((results) => {
                return results.json();
            })
            .then(data => {
                setExperiences(data);
            })
    }, [])

    function createExperienceSectionTitle() {
        const experienceSectionTitle = [];
      //  experienceSectionTitle.push(<p className="experienceTitleTopPadding">
     //                                   <br></br>
      //                              </p>);

        experienceSectionTitle.push(<h1 className="experienceTitleValue">Professional Experience</h1>);

     //   experienceSectionTitle.push(<p className="experienceTitleBottomPadding">
    //                                </p>);
        return experienceSectionTitle;
    }

    function createExperienceResponsibilityValues(experience) {
        const experienceResponsibilityValues = [];
        experience.responsibilities.map((responsibility) =>
            experienceResponsibilityValues.push(<ul className="experienceResponsibilitiesUnorderedList">
                <li className="experienceResponsibilitiesListItem">
                    <p className="experienceResponsibilitiesValue">{responsibility}</p>
                </li>
            </ul>)
        );
        return experienceResponsibilityValues;
    }

    function createExperienceSection() {
        const experienceSection = [];
        experienceSection.push(<div>
                                    {createExperienceSectionTitle()}
                                </div>
        );
        
        experiences.map((experience) => {

            var numberOfReponsibilities = experience.responsibilities.length;
            var heightForExperienceSection = numberOfReponsibilities * 60;

            experienceSection.push(<div className="experienceSection" style={{ height: heightForExperienceSection }} >
                                      <div className="experienceCompanyNameAndLocation">
                                        <span className="experienceCompanyName">{experience.companyName}</span>
                                        <span className="experienceLocation">{experience.city}, {experience.state}</span>
                                      </div>
                                      <div className="experienceRoleAndDateRange">
                                        <span className="experienceRole">{experience.role}</span>
                                        <span className="experienceDateRange">{experience.fromDate} To {experience.toDate}</span>
                                      </div>
                                      <div className="experienceResponsibilities">
                                        {createExperienceResponsibilityValues(experience)}
                                      </div>
                                    </div>);
        });
        
        return experienceSection;
    }

    return (
        createExperienceSection()
    )

}
export default Experience;