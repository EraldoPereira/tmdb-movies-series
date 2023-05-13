Ext.define("ModernApp.view.main.Movie", {
	extend: "Ext.dataview.Component",
	xtype: "movie",
	store: [
		{
			adult: false,
			backdrop_path: "https://image.tmdb.org/t/p/w342/3CxUndGhUcZdt1Zggjdb2HkLLQX.jpg",
			genre_ids: [28, 12, 878],
			id: 640146,
			original_language: "en",
			original_title: "Ant-Man and the Wasp: Quantumania",
			overview:
				"Super-Hero partners Scott Lang and Hope van Dyne, along with with Hope's parents Janet van Dyne and Hank Pym, and Scott's daughter Cassie Lang, find themselves exploring the Quantum Realm, interacting with strange new creatures and embarking on an adventure that will push them beyond the limits of what they thought possible.",
			popularity: 3706.025,
			poster_path: "https://image.tmdb.org/t/p/w342/qnqGbB22YJ7dSs4o6M7exTpNxPz.jpg",
			release_date: "2023-02-15",
			title: "Ant-Man and the Wasp: Quantumania",
			video: false,
			vote_average: 6.5,
			vote_count: 2380,
		},
		{
			adult: false,
			backdrop_path: "https://image.tmdb.org/t/p/w342/hiHGRbyTcbZoLsYYkO4QiCLYe34.jpg",
			genre_ids: [27, 9648, 53],
			id: 758323,
			original_language: "en",
			original_title: "The Pope's Exorcist",
			overview:
				"Father Gabriele Amorth, Chief Exorcist of the Vatican, investigates a young boy's terrifying possession and ends up uncovering a centuries-old conspiracy the Vatican has desperately tried to keep hidden.",
			popularity: 3274.664,
			poster_path: "https://image.tmdb.org/t/p/w342/4IjRR2OW2itjQWQnmlUzvwLz9DQ.jpg",
			release_date: "2023-04-05",
			title: "The Pope's Exorcist",
			video: false,
			vote_average: 7.3,
			vote_count: 770,
		},
		{
			adult: false,
			backdrop_path: "https://image.tmdb.org/t/p/w342/aAgGrfBwna1nO4M2USxwFgK5O0t.jpg",
			genre_ids: [27, 53],
			id: 713704,
			original_language: "en",
			original_title: "Evil Dead Rise",
			overview:
				"Three siblings find an ancient vinyl that gives birth to bloodthirsty demons that run amok in a Los Angeles apartment building and thrusts them into a primal battle for survival as they face the most nightmarish version of family imaginable.",
			popularity: 3039.142,
			poster_path: "https://image.tmdb.org/t/p/w342/5ik4ATKmNtmJU6AYD0bLm56BCVM.jpg",
			release_date: "2023-04-12",
			title: "Evil Dead Rise",
			video: false,
			vote_average: 7.2,
			vote_count: 673,
		},
		{
			adult: false,
			backdrop_path: "https://image.tmdb.org/t/p/w342/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg",
			genre_ids: [16, 12, 10751, 14, 35],
			id: 502356,
			original_language: "en",
			original_title: "The Super Mario Bros. Movie",
			overview:
				"While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.",
			popularity: 2915.871,
			poster_path: "https://image.tmdb.org/t/p/w342/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
			release_date: "2023-04-05",
			title: "The Super Mario Bros. Movie",
			video: false,
			vote_average: 7.5,
			vote_count: 1932,
		},
	],
	inline: true,
	itemConfig: {
		viewModel: true,
		defaultType: "container",
		items: [
			{
				xtype: "container",
				cls: 'card',
				layout: {
					type: "vbox",
					align: "start",
				},
				items: [
					{
						xtype: "image",
						cls: 'image',
						// flex: 0.9,
						bind: {
							src: "{record.poster_path}",
						},
					},
					{
						xtype: 'component',
						cls: 'title',
						flex: 1,
						bind: {
							html: '{record.title}'
						}
					},
					{
						xtype: 'component',
						cls: 'date',
						bind: {
							html: '{record.release_date:date("Y/m/d")}'
						}
					},
				],
			},
		],
	},
});
