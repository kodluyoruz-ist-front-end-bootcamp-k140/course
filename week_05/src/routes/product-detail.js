import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Layout } from "../components/layout";
import { Product } from "../components/product/product";
import { useDocumentTitle } from "../hooks";

const URL = "http://localhost:4000/api/product";

export function ProductPage() {
	const { id } = useParams();
	const [title, setTitle] = useState("");
	useDocumentTitle(title);

	const [item, setItem] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		fetch(`${URL}/${id}`)
			.then((resp) => resp.json())
			.then((resp) => {
				setLoading(false);
				setTitle(`React Bootcamp Restaurant Menu | ${resp?.name}`);
				setItem(resp);
			})
			.catch((e) => {
				console.log(e);
				setLoading(false);
			});
	}, []);
	return (
		<Layout loading={loading}>
			<div className="row">
				<div className="col-12 col-xs-12 d-flex justify-content-center">
					<div className="col-md-4 col-sm-12 col-xs-12">
						<Product item={item} />
					</div>
				</div>
			</div>
		</Layout>
	);
}
