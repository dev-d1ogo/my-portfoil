import "./Hero.css"

export const Hero = () => {
	return (
		<section className="hero-container flex items-center relative">
			<div className="hero-content ">
				<h2 className="font-semibold text-5xl mb-4 text-start ">
					Criando Experiências Digitais Inspiradoras
				</h2>
				<p className="font-normal text-md w-[80%] text-gray-200">
					Diogo Eduardo - Desenvolvedor Fullstack | Apaixonado por tecnologia, transformo ideias em produtos e seus produtos em soluções inovadoras!
				</p>
				
				
				
			</div>

			<div className="hero-image flex flex-col items-center mt-20 ">
				
				<img src={"./src/assets/dev.svg"} alt="" className="w-96" />

				<div className="flex gap-4 mt-6 flex-wrap justify-center">
					<div className="tech-icon">
						<img
							src={"./src/assets/icons/js.svg"}
							alt=""
							className="w-8 h-10"
						/>
					</div>
					<div className="tech-icon">
						<img
							src={"./src/assets/icons/ts.svg"}
							alt=""
							className="w-10 h-10"
						/>
					</div>
					<div className="tech-icon">
						<img
							src={"./src/assets/icons/react.svg"}
							alt=""
							className="w-10 h-10"
						/>
					</div>
					<div className="tech-icon">
						<img
							src={"./src/assets/icons/node.svg"}
							alt=""
							className="w-10 h-10"
						/>
					</div>
					<div className="tech-icon">
						<img
							src={"./src/assets/icons/java.svg"}
							alt=""
							className="w-10 h-10"
						/>
					</div>
					<div className="tech-icon">
						<img
							src={"./src/assets/icons/spring.svg"}
							alt=""
							className="w-10 h-10"
						/>
					</div>
					
				</div>
			</div>
		</section>
	)
}
