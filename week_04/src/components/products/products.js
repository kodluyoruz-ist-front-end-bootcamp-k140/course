import React, { useEffect, useState } from "react";
import { useCartStorage, useDocumentTitle } from "../../hooks";
import { AddToCart } from "../add-to-cart";
import { Loading } from "../loading";
import { Modal } from "../modal";
import { ErrorBoundary } from "../error-boundary";
import "./style.css";

const URL = "http://localhost:4000/api/products";

const sortingOptions = [
	{ title: "Ürün adına göre [A-Z]", value: "asc" },
	{ title: "Ürün adına göre [Z-A]", value: "desc" },
	{ title: "Fiyata göre artan", value: "price_asc" },
	{ title: "Fiyata göre azalan", value: "price_desc" },
];

export function Products() {
  useDocumentTitle("React Bootcamp Restaurant Menu | Ürünler")
	useCartStorage();
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
		<>
			<Loading show={loading} />
			<div className="row">
				<div className="col-11">
					<div className="searchbox">
						<input
							className="searchbox-input"
							placeholder="Ürünlerde veya kategorilerde ara..."
							onChange={(e) => search(e.target.value)}
						/>
						<span className="material-symbols-outlined">search</span>
					</div>
				</div>
				<div className="col-1">
					<div className="filter-icon" onClick={() => setShowModal(true)}>
						<span className="material-symbols-outlined">filter_alt</span>
					</div>
				</div>
			</div>
			<ErrorBoundary>
				<Modal
					openModal={showModal}
					closeModal={() => setShowModal(false)}
					title="Sırala"
					modalFooter={
						<button
							onClick={(e) => {
								loadData(false);
								setShowModal(false);
							}}
							className="btn btn-primary"
						>
							Uygula
						</button>
					}
				>
					{sortingOptions.map((o, index) => (
						<div className="form-check" key={index}>
							<input
								className="form-check-input"
								checked={o.value === selectedSortingOption}
								value={o.value}
								onChange={(e) => {
									setSelectedSortingOption(e.target.value);
								}}
								type="radio"
								id={o.value}
							/>
							<label className="form-check-label" htmlFor={o.value}>
								{o.title}
							</label>
						</div>
					))}
				</Modal>
			</ErrorBoundary>
			{notFound && (
				<div className="not-found">
					Arama kriterlerine göre bir ürün bulunamadı.
				</div>
			)}
			{items.map((category, index) => (
				<div className="row" key={index}>
					<h4>{category.name}</h4>
					{category.products.map((item, i) => (
						<div className="col-sm-3" key={i}>
							<div
								className="card"
								style={{
									width: "18rem",
								}}
							>
								<img
									src={item.image_url}
									className="card-img-top product-image"
									alt="..."
								/>
								<div className="card-body">
									<h5 className="card-title">{item.name}</h5>
									<div>
										<AddToCart item={item} />
										<span className="price">
											{item.price.toFixed(2)} {"TL"}
										</span>
									</div>
								</div>
							</div>
						</div>
					))}
					<hr />
				</div>
			))}
		</>
	);
}
