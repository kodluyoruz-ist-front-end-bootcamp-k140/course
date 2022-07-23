import { ErrorBoundary } from "../error-boundary";
import { Header } from "../header";
import { Loading } from "../loading";
import { ShoppingCart } from "../shopping-cart";

export function Layout({ children, loading = false }) {
	return (
		<>
			<Header />
			<Loading show={loading} />
			<ErrorBoundary>
				<ShoppingCart />
			</ErrorBoundary>
			
			<div className="container example-app">
				<ErrorBoundary>
					{children}
				</ErrorBoundary>
			</div>
		</>
	);
}
