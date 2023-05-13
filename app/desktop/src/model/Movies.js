Ext.define("ModernApp.model.Movies", {
	extend: "Ext.data.Model",
	fields: [
		{
			name: "adult",
			type: "boolean",
		},
		{
			name: "backdrop_path",
			type: "string",
			convert: function (value, record) {
				return "https://image.tmdb.org/t/p/w342" + value;
			},
		},
		{
			name: "genre_ids",
			type: "auto",
		},
		{
			name: "id",
			type: "int",
		},
		{
			name: "original_language",
			type: "string",
		},
		{
			name: "original_title",
			type: "string",
		},
		{
			name: "overview",
			type: "string",
		},
		{
			name: "popularity",
			type: "float",
		},
		{
			name: "poster_path",
			type: "string",
			convert: function (value, record) {
				return "https://image.tmdb.org/t/p/w342" + value;
			},
		},
		{
			name: "release_date",
			type: "date",
		},
		{
			name: "title",
			type: "string",
		},
		{
			name: "video",
			type: "boolean",
		},
		{
			name: "vote_average",
			type: "float",
		},
		{
			name: "vote_count",
			type: "int",
		},
	],
});
