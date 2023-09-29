const Nav = ({ sectionRefs }: any) => {
	const scrollToSection = (ref: any) => {
		ref.current?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<nav className="flex items-center justify-center bg-gray-200 py-4">
			<a
				onClick={() => {
					scrollToSection(sectionRefs.section1);
				}}
			>
				Go to Section 1
			</a>
			<a
				onClick={() => {
					scrollToSection(sectionRefs.section2);
				}}
			>
				Go to Section 2
			</a>
			<a
				onClick={() => {
					scrollToSection(sectionRefs.section3);
				}}
			>
				Go to Section 3
			</a>
			<a
				onClick={() => {
					scrollToSection(sectionRefs.section4);
				}}
			>
				Go to Section 4
			</a>
		</nav>
	);
};

export default Nav;
