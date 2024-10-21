import { AppFooter, AppHeader, AppMetadata } from "components";
import { ThemeContext } from "context";
import { Suspense } from "react";
import "styles/globals.css";
import Loading from "./loading";

export const metadata = { ...AppMetadata };

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<ThemeContext>
					<AppHeader />
					<Suspense fallback={<Loading />}>{children}</Suspense>
					<AppFooter />
				</ThemeContext>
			</body>
		</html>
	);
}
