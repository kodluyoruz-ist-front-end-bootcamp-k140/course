import React from "react";
import { createPortal } from "react-dom";

export function Modal({
	title = "Modal Title",
	children,
	openModal = false,
	closeModal = () => null,
	modalFooter,
}) {
	// console.log(openModal)
	if (!openModal) return null;

	return (
		<div
			className="modal fade show"
			style={{ display: openModal ? "block" : "none" }}
      tabIndex="-1"
      onClick={closeModal}
		>
			<div className="modal-dialog modal-dialog-centered">
				<div className="modal-content" onClick={e => e.stopPropagation()}>
					<div className="modal-header">
						<h5 className="modal-title" id="exampleModalToggleLabel">
							{title}
						</h5>
						<button
							type="button"
							className="btn-close"
							onClick={closeModal}
						></button>
					</div>
					<div className="modal-body">{children}</div>
					<div className="modal-footer">
						{modalFooter}
						<button className="btn btn-default" onClick={closeModal}>
							Kapat
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
