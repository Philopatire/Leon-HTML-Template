// Menu
{
	let openBtn = document.querySelector('nav .container .icon'),
		closeBtn = document.querySelector('.menu .close'),
		menu = document.querySelector('.menu'),
		pageHolder = document.querySelector('.page-holder'),
		allClicks = document.querySelectorAll('.menu ul li a');

	openBtn.addEventListener('click', () => {
		pageHolder.classList.add('active');
		menu.style.right = 0;
	});
	for (let i = 0; i < allClicks.length; i++) {
		allClicks[i].addEventListener('click', () => {
			pageHolder.classList.remove('active');
			menu.style.right = -300 + 'px';
		});
	}
	closeBtn.addEventListener('click', () => {
		pageHolder.classList.remove('active');
		menu.style.right = -300 + 'px';
	});
}
// End Menu

// Portfolio
{
	let picShowed = 3;
	let posts = document.querySelectorAll('.portfolio .container .all-content .all-port .port');
	let interval = 3;
	let btn = document.querySelector('.portfolio .container .all-content button');
	btn.addEventListener('click', () => {
		if (picShowed < posts.length) showMore();
		else showLess();
	});
	function showLess() {
		picShowed = 3;
		btn.textContent = 'Show Me More';
		showHide(picShowed);
	}
	function showMore() {
		picShowed += interval;
		if (picShowed >= posts.length) btn.textContent = 'Show Me Less';
		showHide(picShowed);
	}
	function showHide(n) {
		posts.forEach((post) => post.classList.remove('active'));
		for (let i = 0; i < n; i++) {
			posts[i].classList.add('active');
		}
	}
}
// End Portfolio
