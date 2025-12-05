document.addEventListener('DOMContentLoaded', function() {
  // Original date code by KiritoDev. Modified by Zeldaboy14
  // Thanks to this answer on stackoverflow for help on executing the file
  // https://stackoverflow.com/questions/41412475/javascript-only-works-in-script-tags-not-js-file
  let date = new Date();
if(date.getMonth() == 0) {
	console.log('DEVELOPER COMMENT');
	console.log('January! Last call for snow! (i wish)');
	document.body.style.background = "url('img/backgrounds/intel2.jpg') no-repeat right top";
	document.body.style.backgroundSize="cover";
	document.body.style.backgroundColor="rgba(100,100,100,.8)";
	document.body.style.backgroundBlendMode="Multiply";
	document.getElementsByClassName("logo")[1].src = "img/logo/ZPW_2024_christmas.png";
	const style = document.createElement('style');
	style.innerHTML = `
	  .banner {
		background-image: url("img/banner/banner_top.png");
		font-size: 20px;
		margin: 0;
		padding: 0;
	  }
	`;
	document.head.appendChild(style);	
    } else if(date.getMonth() == 9) {
	console.log('DEVELOPER COMMENT');
	console.log('Hi! It is october!');
	document.body.style.background = "url('img/backgrounds/halloween_2024.png') no-repeat fixed";
	document.getElementsByClassName(".banner").style = "url('img/backgrounds/halloween_2025.png') no-repeat fixed";
	document.body.style.backgroundSize="cover";
	document.body.style.backgroundColor="rgba(100,100,300,.9)";
	document.body.style.backgroundBlendMode="Multiply";
	document.getElementsByClassName("logo")[1].src = "img/logo/ZPW_2025_Halloween.png";
	const style = document.createElement('style');
	style.innerHTML = `
	  .banner {
		background-image: url("img/banner/banner_halloween.png");
		font-size: 20px;
		margin: 0;
		padding: 0;
	  }
	`;
	document.head.appendChild(style);
    } else if(date.getMonth() == 10) {
	console.log('DEVELOPER COMMENT');
	console.log('You know what they say! Stuffings good!');
	document.body.style.background = "url('img/backgrounds/4muskateers.jpg') no-repeat fixed";
	document.body.style.backgroundSize="cover";
	document.body.style.backgroundColor="rgba(100,100,100,.8)";
	document.body.style.backgroundBlendMode="Multiply";
	document.getElementsByClassName("logo")[1].src = "img/logo/ZPW_2024_christmas.png";
	const style = document.createElement('style');
	style.innerHTML = `
	  .banner {
		background-image: url("img/banner/bannertopgeneral_evening_new.png");
		backgroundColor="rgba(100,100,100,10)";
		font-size: 20px;
		margin: 0;
		padding: 0;
	  }
	`;
	document.head.appendChild(style);
    } else if(date.getMonth() == 11) {
	console.log('DEVELOPER COMMENT');
	console.log('Ho ho ho! It is almost christmas!');
	document.body.style.background = "url('img/backgrounds/72_hour_jam_aarvszb14_2024.jpg') no-repeat fixed";
	document.body.style.backgroundSize="cover";
	document.body.style.backgroundColor="rgba(100,100,100,.8)";
	document.body.style.backgroundBlendMode="Multiply";
	document.getElementsByClassName("logo")[1].src = "img/logo/ZPW_2024_christmas.png";
	const style = document.createElement('style');
	style.innerHTML = `
	  .banner {
		background-image: url("img/banner/banner_christmas_2024.png");
		font-size: 20px;
		margin: 0;
		padding: 0;
	  }
	`;
	document.head.appendChild(style);
	} else {
	console.log('DEVELOPER COMMENT');
	console.log('Oh nyo! Thats not a valid date. Or, if this was intentional, ignore me :3');
	document.body.style.background = "url('img/backgrounds/city17.png') no-repeat fixed";
	document.body.style.backgroundSize="cover";
	document.body.style.backgroundColor="rgba(100,100,100,.8)";
	document.body.style.backgroundBlendMode="Multiply";
	document.getElementsByClassName("logo")[1].src = "img/logo/ZPW_2024.png";
	const style = document.createElement('style');
	style.innerHTML = `
	  .banner {
		background-image: url("img/banner/bannertopgeneral_evening_new.png");
		font-size: 20px;
		margin: 0;
		padding: 0;
	  }
	`;
	document.head.appendChild(style);
	}
}, false);

