function getProfile() {
	return{
		name: "Septian Rio Cahya",
		age: "17",
		address: "Jl. Sukarela Timur, Laut Dendang",
		hobbies: ["Bermain basket", "editing video"],	 //Array
		is_married: false,	//Boolean
		list_school: [{
			school: "SMAN 1 Percut Sei Tuan",
			year_in: "2016",
			year_out: "2019"},
			{
			major: null
		}],
		skills: [{
			name: "Menggambar",
			level: "Beginner"},
			{
			name: "Penulis naskah/cerita",
			level: "advanced"
			}],		//Array of Obj
		interest_in_coding: true
	}
}
