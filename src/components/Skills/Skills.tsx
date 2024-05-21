import { useState } from "react"
import { SKILLS } from "../../utils/data"
import { SkillCard } from "./SkillCard/SkillCard"
import "./Skills.css"
import { SkillsInfoCard } from "./SkillsInfoCard.tsx/SkillsInfoCard"

export const Skills = () => {
	const [selectedSkill, setSelectedSkill] = useState(SKILLS[0])

	const handleSelectSkill = (data) => {
		setSelectedSkill(data)
	}

	return (
		<section className="lg:mx-auto mx-8">
			<h5 className="font-semibold text-3xl mt-10">
				Habilidades técnicas
			</h5>
			<div className="skills-container">
				<div className="skills-content">
					<div className="skills">
						{SKILLS.map((skill) => {
							return (
								<SkillCard
									iconUrl={skill.icon}
									title={skill.title}
									key={skill.title}
									isActive={
										selectedSkill.title === skill.title
									}
									onClick={() => {
										handleSelectSkill(skill)
									}}
								/>
							)
						})}
					</div>

					<div className="skills-info lg:mt-0 mt-8">
						<SkillsInfoCard
							header={selectedSkill.title}
							skills={selectedSkill.skills}
						/>
					</div>
				</div>
			</div>
		</section>
	)
}
