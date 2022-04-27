

postHeadText = () => {

	const text = document.querySelector('.post-head-text');
	const btn = document.querySelector('.post-head-text-btn');
	const defText = text.innerHTML;
	const defBtnHTML = btn.innerHTML;

	toggle = () => { 

		const fullText = btn.getAttribute('full-text');

		if (fullText == "true") {

			btn.innerHTML = defBtnHTML;
			btn.setAttribute('full-text', 'false');
		}

		else {

			btn.innerHTML = "- less";
			btn.setAttribute('full-text', 'true');

		}

		text.classList.toggle('full-text');
	}

	btn.addEventListener('click', toggle);

}

postHeadText();
