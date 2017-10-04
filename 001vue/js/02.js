Vue.component("zidingyizujian",{
	props:["btnValue"],
	template:`<ul>
				<input type="button" :value="btnValue" />
				<li>1</li>
				<li>2</li>
				<li>3</li>
			</ul>`
})



new Vue({
	el:"#app1"
})
