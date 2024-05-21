import "./MobileNavAddtionalStyles.css"
import "../NavBar/NavBarAdditionalStyles.css"

interface MobileNavbarProps {
	isOpen: boolean
	toggleMenuStatus: () => void
}

export const MobileNavBar = ({
	isOpen,
	toggleMenuStatus,
}: MobileNavbarProps) => {
	isOpen

	return (
		<>
			<div
				className={`mobile-menu ${isOpen ? "active" : ""}  md:hidden block `}
				onClick={toggleMenuStatus}
			>
				<div className="mobile-menu-container rounded-sm px-8">
					<h1 className="text-3xl w-48 h-auto">LOGO</h1>

					<ul className="gap-3 list-none my-6 flex flex-col items-start">
						<li className=" text-[1.1rem] relative cursor-pointer ">
							<a href="" className="menu-item">
								Home
							</a>
						</li>
						
						<li className=" text-[1.1rem] relative cursor-pointer ">
							<a href="" className="menu-item">
								Habilidades
							</a>
						</li>
						
						<li className=" text-[1.1rem] relative cursor-pointer ">
							<a href="" className="menu-item">
								Experiências
							</a>
						</li>
						
						<li className=" text-[1.1rem] relative cursor-pointer ">
							<a href="" className="menu-item">
								Contato
							</a>
						</li>
						

						<button className="mt-3 btn text-sm bg-slate-200 text-white px-8 py-2 rounded-sm flex items-center  justify-center bg-gradient-to-l to-[#a993fe] from-[#7e61e7] w-[200px]">
							Conte comigo
						</button>
					</ul>
					
			
				</div>

				
			</div>
		</>
	)
}
