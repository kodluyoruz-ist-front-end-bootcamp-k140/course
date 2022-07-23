import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { Product } from "../product/product";

export function Products({ items = [] }) {
	return (
		<>
			{items.map((category, index) => (
				<div className="row" key={index}>
					<div className="row catagory-title-row">
						<div className="col-10">
							<h4>{category.name}</h4>
						</div>
						<div className="col-2">
							<Link
								className="btn btn-primary show-category"
								to={`/products/${category.id}`}
							>
								Tümünü Göster
							</Link>
						</div>
					</div>
					{category.products.map((item, i) => (
						<div className="col-sm-3" key={i}>
							<Product item={item} key={i} />
						</div>
					))}
					<hr />
				</div>
			))}
		</>
	);
}
