fetch('https://api.github.com/repos/Zeldaboy14/ZPW_2022/commits?per_page=1%27')
	.then(res => res.json())
	.then(res => {
	document.getElementById('sha').innerHTML = res[0].sha
})