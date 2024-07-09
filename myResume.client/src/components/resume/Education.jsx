import React, { useState, useEffect } from "react";
import './Education.css'

function Education() {

    const [education, setEducation] = useState([]);

    useEffect(() => {
        fetch(`resume/education`)
            .then((results) => {
                return results.json();
            })
            .then(data => {
                setEducation(data);
            })
    }, [])

    function createEducationSectionTitle() {
        const educationSectionTitle = [];
        educationSectionTitle.push(<p className="educationTitleTopPadding">
            <br></br>
        </p>);

        educationSectionTitle.push(<h1 className="educationTitleValue">Education</h1>);

        educationSectionTitle.push(<p className="educationTitleBottomPadding">
        </p>);
        return educationSectionTitle;
    }
 
    function createEducationSection() {
        const educationSection = [];
        educationSection.push(<div>
            {createEducationSectionTitle()}
        </div>
        );

        educationSection.push(<div className="educationSection">
                                  <div className="educationSchoolNameAndLocation">
                                      <span className="educationSchoolName">{education.schoolName}</span>
                                      <span className="educationLocation">{education.city}, {education.state}</span>
                                  </div>
                                  <div className="educationDegreeAndGraduationDate">
                                      <span className="educationDegree">{education.degree}</span>
                                      <span className="educationGraduationDate">{education.graduationDate}</span>
                                  </div>
                                  <div className="educationGpa">
                                        <span className="educationGpaValue">GPA: {education.gpa}/4.0</span>
                                  </div>
                              </div>);
        
        return educationSection;
    }

    return (
        createEducationSection()
    )

}
export default Education;