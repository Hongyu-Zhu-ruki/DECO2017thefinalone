      var hU = document.getElementsByClassName("icon-shangyishou")[0]
	    var hDo = document.getElementsByClassName("icon-xiayishou")[0]
			var hTotal = document.getElementsByClassName("total_time")[0]
			var hAudio = document.getElementById("audio")
			var hPlay = document.getElementById("play")
			var hCircle = document.getElementById("circle")
			var hStart = document.getElementById("start_time")
			var hRound = document.getElementById("round")
			var hLoad = document.getElementById("load")
			var hList = document.getElementsByClassName("music_list")[0]
			var hUl = hList.getElementsByTagName("ul")[0]
			
			var _this = null
			var num = 0
			var array = ["song/4.mp3", "song/3.mp3", "song/2.mp3", "song/1.mp3"]
			var arr2 = ["夢の歩みを見上げて", "夏の日の思い出", "白ゆきの独白", "Banana Breeze"]
			var arr3 = ["松本文紀", "金子隆博", "n-buna", "Vexento/Allison"]
			hAudio.src = array[num]
			for(var i = 0; i < array.length; i++) {
				var str= '<li index=' + i + '>' + '<span>' + arr2[i] + '</span>' + arr3[i] + '</li>'
				hUl.innerHTML += str
 
			}
			var hLi = hUl.getElementsByTagName("li")
			hAudio.addEventListener("canplay", function() {
				hTotal.innerHTML = getMin(this.duration)
			})

			for(var i = 0; i < hLi.length; i++) {

			  hLi[i].ondblclick = function() {
					hAudio.src = array[this.getAttribute("index")]
 
					_this = this
				}
 
			}

			hPlay.onclick = function() {
				if(hAudio.paused) {
					hAudio.play()
					hPlay.innerHTML = '<i class="iconfont icon-zanting">Pause</i>'
 
				} else {
					hAudio.pause()
					hPlay.innerHTML = '<i class="iconfont icon-bofang">Play</i>'
				}
			}
 
			//监听进度变化
	hAudio.ontimeupdate = function() {
	var pre = Math.floor(hAudio.currentTime / hAudio.duration * 200)
	hCircle.style.width = pre + "px"
	hStart.innerHTML = getMin(hAudio.currentTime)
	hRound.style.left = hCircle.style.width
			}
 
			//点击进度变化
			hLoad.onclick = function(e) {
				var l = e.clientX - hLoad.offsetLeft
				hAudio.currentTime = (l / 200) * hAudio.duration
 
			}
			//拖拽原点
			hRound.onmousedown = function(e) {
				document.onmousemove = function(e) {
					var l = e.clientX - hLoad.offsetLeft
					hAudio.currentTime = (l / 200) * hAudio.duration
 
				}
				document.onmouseup = function() {
					document.onmousedown = null
					document.onmousemove = null
 
				}
				return false
 
			}
 
			//播放结束
			hAudio.addEventListener("ended", function() {
				num++
				hAudio.src = array[num]
				if(num > array.length) {
					num = 0
				}
				console.log(hAudio.src)
				hAudio.play()
			})
 
			//获取分钟的函数
			function getMin(time) {
				var m = Math.floor(time / 60)
				var s = Math.floor(time % 60)
				if(m <= 9) {
					m = "0" + m
				}
				if(s <= 9) {
					s = "0" + s
				}
				return m + ":" + s
			}
 
			_this = hLi[0]
 
			//上一首
			hU.onclick = function() {
				var now = _this.getAttribute("index")
				now--
				if(now < 0) {
					now = array.length - 1
				}
				console.log(now)
				_this = hLi[now]
				hAudio.src = array[now]
				hAudio.play()
				console.log(hAudio.src)
			}
			//下一首
			hDo.onclick = function() {
				var now = _this.getAttribute("index")
				now++
				if(now > array.length - 1) {
					now = 0
				}
				_this = hLi[now]
				console.log(now)
				hAudio.src = array[now]
				hAudio.play()
				console.log(hAudio.src)
			}