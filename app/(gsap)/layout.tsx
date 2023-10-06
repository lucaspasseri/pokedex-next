//import "./globals.css";

export default function LandingPageLayout({
	children, // will be a page or nested layout
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<div>{children}</div>
			</body>
		</html>
	);
}
