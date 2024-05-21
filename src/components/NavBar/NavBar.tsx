import { List, X } from "@phosphor-icons/react"
import "./NavBarAdditionalStyles.css"
import { useState } from "react"
import { MobileNavBar } from "../MobileNavBar/MobileNavBar"

const NavBar = () => {
	const [openMenu, setOpenMenu] = useState(false)

	const toggleMenuStatus = () => {
		setOpenMenu((isOpen) => !isOpen)
	}
	return (
		<>
			<MobileNavBar isOpen={openMenu} toggleMenuStatus={toggleMenuStatus}/>
		
			<nav className="nav-wrapper px-2 sticky top-0 z-30 backdrop-blur-[50px] bg-black/10 md:mt-0 md:py-0 py-4 ">
				<div className="nav-content max-w-[1300px] flex items-center justify-between px-4 mx-auto">
					<h1 className="text-3xl w-48 h-auto">Dev-D1ogo</h1>

					<ul className="items-center gap-2 list-none my-6 hidden md:flex">
						<li className="lg:mx-6  mx-3  text-[0.9rem] relative cursor-pointer hover:text-purple-200">
							<a href="" className="menu-item">
								Home
							</a>
						</li>
						<li className="lg:mx-6 mx-3 text-[0.9rem] relative cursor-pointer hover:text-purple-200">
							<a href="" className="menu-item">
								Habilidades
							</a>
						</li>
						<li className="lg:mx-6 mx-3  text-[0.9rem] relative cursor-pointer text-center hover:text-purple-200">
							<a href="" className="menu-item">
								Experiências
							</a>
						</li>
						<li className="lg:mx-6 mx-3  text-[0.9rem] relative cursor-pointer hover:text-purple-200">
							<a href="" className="menu-item">
								Contato
							</a>
						</li>

						<button className=" btn text-sm bg-slate-200 text-white md:w-[120px] lg:w-[160px] py-2 rounded-sm flex justify-center items-center bg-gradient-to-l to-[#a993fe] from-[#7e61e7]">
							Conte comigo
						</button>
					</ul>
					<button className="btn-menu flex md:hidden items-center justify-center text-lg" onClick={toggleMenuStatus}>
						{!openMenu ? <List size={32} />: <X size={32} />}
					</button>
				</div>
			</nav>
		</>
	)
}

export default NavBar
