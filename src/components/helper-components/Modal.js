import React from 'react';

const Modal = () => {
	// When the user clicks on <span> (x), close the modal
	const hideModal = () => {
		// Get the modal
		let modal = document.getElementById('myModal');
		modal.style.display = 'none';
	};

	return (
		<div id="myModal" className="modal">
			<span onClick={hideModal} className="close">
				&times;
			</span>
			<img className="modal-content" id="img01" alt="modal" />
			<div id="caption" />
		</div>
	);
};

export default Modal;
