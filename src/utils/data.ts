import {} from "../assets/icons/java.svg"

export interface Skill {
	skill: string
	percentage: string
}

export interface SKILLSProps {
	title: string
	icon: string
	skills: Skill[]
}

export const SKILLS: SKILLSProps[] = [
	{
		title: "Frontend",
		icon: "./src/assets/icons/react.svg",
		skills: [
			{ skill: "React", percentage: "85%" },
			{ skill: "Next", percentage: "70%" },
			{ skill: "JavaScript", percentage: "95%" },
			{ skill: "TypeScript", percentage: "90%" },
			{ skill: "HTML e CSS", percentage: "95%" },
		],
	},
	{
		title: "Backend",
		icon: "./src/assets/icons/node.svg",
		skills: [
			{ skill: "Node", percentage: "80%" },
			{ skill: "Springboot", percentage: "60%" },
			{ skill: "Nest", percentage: "50%" },
			{ skill: "SQL", percentage: "80%" },
			{ skill: "NoSQL", percentage: "60%" },
		],
	},
	{
		title: "Ferramentas",
		icon: "./src/assets/icons/ts.svg",
		skills: [
			{ skill: "Node", percentage: "100%" },
			{ skill: "React", percentage: "80%" },
			{ skill: "Next", percentage: "60%" },
			{ skill: "JavaScript", percentage: "90%" },
			{ skill: "TypeScript", percentage: "90%" },
		]
	},
	{
		title: "Soft Skills",
		icon: "./src/assets/icons/ts.svg",
		skills: [
			{ skill: "Node", percentage: "100%" },
			{ skill: "React", percentage: "90%" },
			{ skill: "Next", percentage: "20%" },
			{ skill: "JavaScript", percentage: "30%" },
			{ skill: "TypeScript", percentage: "40%" },
		]
	},
]

export interface WorkExperience{
	title: string
	date: string
	responsibilities: string[]
}
export const WORK_EXPERIENCE:WorkExperience[] = [
	{
		title: "Desenvolvedor de Software no Instituto de Pesquisas em Tecnologia e Inovação",
		date: "Abril 2023 - Atualmente",
		responsibilities: [
			"Participando ativamente de um time de desenvolvedores onde aplicava era aplicado a metodologia SCRUM, juntamente do desenvolvimento de tecnologia para melhorar a condição social da comunidade de Santa Luzia do Itanhy",
			"Desenvolvendo aplicações web e mobile, utilizando tecnologias como Flutter, Node, PHP, Firebase, PostgreSQL, React e Next",
			"Colaborando com UI/UX juntamente do time de design para criar aplicações responsivas, bastante intuitivas e agradavéis"
		]
	},
	{
		title: "Desenvolvedor Freelancer para uma pizzaria da região na Workana ",
		date: "Abril 2023 - Atualmente",
		responsibilities: [
			"Participando ativamente de um time de desenvolvedores onde aplicava era aplicado a metodologia SCRUM, juntamente do desenvolvimento de tecnologia para melhorar a condição social da comunidade de Santa Luzia do Itanhy",
			"Desenvolvendo aplicações web e mobile, utilizando tecnologias como Flutter, Node, PHP, Firebase, PostgreSQL, React e Next",
			"Colaborando com UI/UX juntamente do time de design para criar aplicações responsivas, bastante intuitivas e agradavéis",
		]
	},
	{
		title: "Desenvolvedor de Erick ",
		date: "Abril 2023 - Atualmente",
		responsibilities: [
			"Participando ativamente de um time de desenvolvedores onde aplicava era aplicado a metodologia SCRUM, juntamente do desenvolvimento de tecnologia para melhorar a condição social da comunidade de Santa Luzia do Itanhy",
			"Desenvolvendo aplicações web e mobile, utilizando tecnologias como Flutter, Node, PHP, Firebase, PostgreSQL, React e Next",
			"Colaborando com UI/UX juntamente do time de design para criar aplicações responsivas, bastante intuitivas e agradavéis"
		]
	},
]