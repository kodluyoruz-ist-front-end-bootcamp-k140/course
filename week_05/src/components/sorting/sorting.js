import { ErrorBoundary } from "../error-boundary";
import { Modal } from "../modal";
const sortingOptions = [
	{ title: "Ürün adına göre [A-Z]", value: "asc" },
	{ title: "Ürün adına göre [Z-A]", value: "desc" },
	{ title: "Fiyata göre artan", value: "price_asc" },
	{ title: "Fiyata göre azalan", value: "price_desc" },
];
export function Sorting({
	handleShow,
	handleClose,
	applyFilter,
	selectedSortingOption,
  setSelectedSortingOption,
  showModal
}) {
	return (
		<>
			<div className="filter-icon" onClick={handleShow}>
				<span className="material-symbols-outlined">filter_alt</span>
			</div>

			<ErrorBoundary>
				<Modal
					openModal={showModal}
					closeModal={handleClose}
					title="Sırala"
					modalFooter={
						<button onClick={applyFilter} className="btn btn-primary">
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
								onChange={setSelectedSortingOption}
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
		</>
	);
}
