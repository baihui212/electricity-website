(function () {
	$().ready(function  () {
		var slidewrap=document.getElementsByClassName('slidewrap')[0]
		/*define a handle */
		function handlestart (e) {
			if(e.touches.length!==1){
				return
			}
			startX=e.touches[0].pageX
			startY=e.touches[0].pageY
			slidewrap.addEventListener('touchmove',handlemove,false)
			console.log('123')
		}	

		function handlemove (e) {
			var touches=e.touches
			if (touches&&touches.length) {
				var distanceX=startX-touches[0].pageX
				var slidewrapLoc=parseInt($('.slidewrap').css('left'))
				var nowLoc=-slidewrapLoc-distanceX
				$('.slidewrap').css('left',nowLoc+'px')
				console.log(nowLoc)
				console.log(distanceX)
				// if (distanceX>0) {

				// }
				// else{
				// 	return
				// }
				// var distanceY=startY-touches[0].pageY
				if (distanceX>=50) {
					// $('.main').css('background','red')
				}
				if (distanceX<=-50) {
					// $('.main').css('background','yellow')
				}
				// if (distanceY>=50) {
				// 	$('.main').css('background','green')
				// }
				// if (distanceY<=-50) {
				// 	$('.main').css('background','pink')
				// }
				// if (Math.abs(distanceX)>=50 || Math.abs(distanceY) >= 50) {
				// 	main.removeEventListener('touchmove', handlemove)
				// }
			}
			e.preventDefault()
		}	

		
		slidewrap.addEventListener('touchstart',handlestart,false)

		//banner js
		//function roll up in a single height
		var $verRollPnode=$('.rollInfo-wrap')
		verticalRoll($verRollPnode)
	})//end $().ready()
})()