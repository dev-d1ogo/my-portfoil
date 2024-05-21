import React from "react"
import { Skill } from "../../../utils/data"
import "./SkillsInfoCard.css"

interface SkillsInfoCardProps {
	header: string
	skills: Skill[]
}

export const SkillsInfoCard = ({ header, skills }: SkillsInfoCardProps) => {
	return (
		<div className="skills-info-card">
			<h6>{header}</h6>

			<div className="skills-info-content">
				{skills.map((item, index) => {
					return (
						<React.Fragment key={`skill_${index}`}>
                            <div className="skill-info">
                                <p>{item.skill}</p>
                                <p className="percentage">{item.percentage}</p>
                            </div>

                            <div className="skill-progress-bg">
                                <div className="skill-progress" style={{width: item.percentage}}></div>
                            </div>
                        </React.Fragment>
					)
				})}
			</div>
		</div>
	)
}
