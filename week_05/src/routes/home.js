import React, { useEffect, useState } from "react";
import { Layout } from "../components/layout";
import { Products } from "../components/products";
import { SearchBox } from "../components/search-box";
import { Sorting } from "../components/sorting";
import { useDocumentTitle } from "../hooks";

const URL = "http://localhost:4000/api/products";

export function HomePage() {
  useDocumentTitle("React Bootcamp Restaurant Menu | Ana Sayfa");

  const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(false);
	const [notFound, setNotFound] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [selectedSortingOption, setSelectedSortingOption] = useState("asc");
	const [query, setQuery] = useState("");
	useEffect(() => {
		loadData(true);
	}, []);

	const setAppData = (res) => {
		const items = res.map((item) => {
			item.products = item.products.map((p) => {
				p.quantity = 0;
				return p;
			});
			return item;
		});
		setItems(items);
		setNotFound(items.length === 0);
	};

	const loadData = (initial = true) => {
		if (initial) setLoading(true);

		const FULL_URL = decodeURIComponent(
			`${URL}?q=${query}&sorting=${selectedSortingOption}`
		);
		fetch(FULL_URL)
			.then((res) => res.json())
			.then((res) => {
				if (initial) {
					setTimeout(() => {
						setLoading(false);
						setAppData(res);
					}, 1000);
				} else {
					setAppData(res);
				}
			})
			.catch((e) => {
				console.log(e);
				setLoading(false);
			});
	};

	useEffect(() => {
		if (query.length >= 3) {
			loadData(false);
		} else if (query.length === 0) {
			loadData(false);
		}
	}, [query]);

	const search = (query) => {
		setQuery(query);
	};
	return (
    <Layout loading={loading}>
        <div className="row">
				<div className="col-11">
					<SearchBox onChange={(e) => search(e.target.value)} />
				</div>
				<div className="col-1">
					<Sorting
						applyFilter={(e) => {
							loadData(false);
							setShowModal(false);
						}}
						selectedSortingOption={selectedSortingOption}
						setSelectedSortingOption={(e) => {
							setSelectedSortingOption(e.target.value);
						}}
						handleClose={() => setShowModal(false)}
						handleShow={() => setShowModal(true)}
						showModal={showModal}
					/>
				</div>
			</div>
			{notFound && (
				<div className="not-found">
					Arama kriterlerine göre bir ürün bulunamadı.
				</div>
			)}
				<Products items={items}/>
		</Layout>
	);
}
