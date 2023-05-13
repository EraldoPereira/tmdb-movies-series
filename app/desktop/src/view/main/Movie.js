Ext.define("ModernApp.view.main.Movie", {
	extend: "Ext.dataview.Component",
	xtype: "movie",
	bind: {
		store: "{movies}",
	},
	inline: true,
	itemConfig: {
		viewModel: true,
		defaultType: "container",
		items: [
			{
				xtype: "container",
				cls: "card",
				layout: {
					type: "vbox",
					align: "start",
				},
				items: [
					{
						xtype: "image",
						cls: "image",
						bind: {
							src: "{record.poster_path}",
						},
					},
					{
						xtype: "component",
						cls: "title",
						flex: 1,
						bind: {
							html: "{record.title}",
						},
					},
					{
						xtype: "component",
						cls: "vote",
						bind: {
							html: "{record.vote_average}",
						},
					},
					{
						xtype: "component",
						cls: "date",
						bind: {
							html: '{record.release_date:date("Y/m/d")}',
						},
					},
				],
			},
		],
	},
});
