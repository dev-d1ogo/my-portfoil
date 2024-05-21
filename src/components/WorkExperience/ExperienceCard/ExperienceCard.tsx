import { WorkExperience } from "../../../utils/data"
import "./ExperienceCard.css"
interface ExperienceCardProps {
	details: WorkExperience
}

export const ExperienceCard = ({ details }: ExperienceCardProps) => {
	return (
		<div className="work-experience-card ">
			<h6 className="lg:h-[50px] h-[90px]">{details.title}</h6>

			<div className="work-duration">{details.date}</div>

			<ul>
				{details.responsibilities.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
		</div>
	)
}
