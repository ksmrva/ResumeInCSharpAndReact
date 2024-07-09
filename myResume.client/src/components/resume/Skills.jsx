import React, { useState, useEffect } from "react";
import Images from "./Images.js";
import './Skills.css'

function Skills() {

    const [skills, setSkills] = useState([]);

    useEffect(() => {
        fetch(`resume/skills`)
            .then((results) => {
                return results.json();
            })
            .then(data => {
                setSkills(data);
            })
    }, [])

    function createTableDataItemForSkill(skill) {
        const listItemForSkill = <td className="skillTableData">
                                    <ul className="skillUnorderedList">
                                        <li className="skillListItem">
                                            <p className="skillValue">
                        {skill === "C#" ? 
                            <img src={Images.find(image => image.language === skill)?.image}/> : null}
                        {skill}
                                            </p>
                                        </li>
                                    </ul>
                                 </td>;
        return listItemForSkill;
    }
    
    function createSkillsForRow(skillsLength, rowNumber, numberOfSkillsPerRow) {
        const skillsForRow = [];
        for (var skillNumber = 0; skillNumber < numberOfSkillsPerRow; skillNumber++) {
            var skillIndex = skillNumber + (rowNumber * numberOfSkillsPerRow);
            if (skillIndex < skillsLength) {
                var skill = skills[skillIndex];
                skillsForRow.push(createTableDataItemForSkill(skill));
            } else {
                break;
            }
        }
        return skillsForRow;
    }

    function createRowsForSkills() {
        const numberOfSkillsPerRow = 4;
        const rowsForSkills = [];
        if (skills.length > 0) {

            const skillsLength = skills.length;
            // Create rows of three but adding one additional row if there are any skills left as a remainder
            var numberOfRows = (skillsLength / numberOfSkillsPerRow);
            if (numberOfRows % 1 != 0) {
                numberOfRows++;
            }

            for (var rowNumber = 0; rowNumber < numberOfRows; rowNumber++) {
                rowsForSkills.push(<tr className="skillRow">{createSkillsForRow(skillsLength, rowNumber, numberOfSkillsPerRow)}</tr>);   
            }
        }
        return rowsForSkills;
    }

    function createRowForSkillsSectionTitle() {
        const rowForSkillsSectionTitle = [];
        rowForSkillsSectionTitle.push(<tr className="skillsSectionTitleRow">
                                        <td className="skillsSectionTitleLeftPadding">
                                        </td>
                                        <td className="skillsSectionTitle">
                                            <p className="skillsSectionTitleValue">
                                                Primary Skills
                                            </p>
                                        </td>
                                        <td className="skillsSectionTitleRightPadding1">
                                        </td>
                                        <td className="skillsSectionTitleRightPadding2">
                                        </td>
                                      </tr>);
        return rowForSkillsSectionTitle;
    }

    function createSkillsSection() {
        const skillsSection = [];
        skillsSection.push(createRowForSkillsSectionTitle());
        skillsSection.push(createRowsForSkills());
        return skillsSection;
    }

    return (
        createSkillsSection()
    )

}
export default Skills;