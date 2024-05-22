import { useRef } from "react"
import { WORK_EXPERIENCE } from "../../utils/data"
import { ExperienceCard } from "./ExperienceCard/ExperienceCard"
import "./WorkExperience.css"
import Slider from "react-slick"

export const WorkExperience = () => {
	const slideRef = useRef()
	var settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 1,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
                    initialSlide: 1
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
                    initialSlide: 1
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
                    initialSlide: 1
				},
			},
		],
	}
	return (
		<section className="experience-container">
			<h5 className="font-semibold text-3xl mt-10">Experiências</h5>

			<div className="experience-content">
				<Slider ref={slideRef} {...settings}>
					{WORK_EXPERIENCE.map((item) => {
						return (
							<ExperienceCard key={item.title} details={item} />
						)
					})}
				</Slider>
			</div>
		</section>
	)
}
