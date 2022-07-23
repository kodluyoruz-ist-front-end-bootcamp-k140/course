import React from "react"
import { useNavigate } from "react-router-dom";
import { AddToCart } from "../add-to-cart";
import "./style.css"

export function Product({ item }) {
  const navigate = useNavigate()
	if (!item) return null
	
	return (
		<div
			onClick={() => {
				navigate(`/product/${item.id}`);
			}}
			className="card"
		>
			<img
				src={item.image_url}
				className="card-img-top product-image"
				alt={item.name}
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
	);
}
