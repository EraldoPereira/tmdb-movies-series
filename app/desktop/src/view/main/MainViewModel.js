Ext.define("ModernApp.view.main.MainViewModel", {
	extend: "Ext.app.ViewModel",
	alias: "viewmodel.mainviewmodel",
	data: {},
	stores: {
		genres: {
			type: "genres",
		},
		movies: {
			type: "movies",
			proxy: {
				url: "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
			},
		},
	},
});
