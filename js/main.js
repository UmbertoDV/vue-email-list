const { createApp } = Vue;

createApp({
	data() {
		return {
			randomMailsList: [],
		};
	},
	methods: {
		getRandomMail() {
			for (i = 0; i < 10; i++) {
				axios
					.get("https://flynn.boolean.careers/exercises/api/random/mail")
					.then((response) => {
						if (this.randomMailsList.length < 10) {
							this.randomMailsList.push(response.data.response);
						}
					});
			}
		},
	},
	created() {
		this.getRandomMail();
	},
}).mount("#app");
