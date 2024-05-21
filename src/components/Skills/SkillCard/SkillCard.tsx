import "./SkillCard.css"
export const SkillCard = ({ title, iconUrl, isActive, onClick }) => {
	return (
		<div
			className={`skills-card ${isActive} ? 'active':''`}
			onClick={() => onClick()}
		>
			<div className="skill-icon">
				<img src={iconUrl} alt={title} className="w-24 h-24"/>
			</div>

			<span>{title}</span>
		</div>
	)
}
