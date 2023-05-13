Ext.define("ModernApp.view.main.Filters", {
	extend: "Ext.Container",
	xtype: "filters",
	cls: "filters",
	items: [
		{
			xtype: 'container',
			cls: 'title',
			html: 'Genres'
		},
		{
			xtype: "componentdataview",
			bodyCls: 'data-view',
			bind: {
				store: "{genres}",

			},

			itemConfig: {
				viewModel: true,
				xtype: "button",
				cls: 'button',
				ui: "round",
				margin: "2px",
				handler: 'onFilterByGenres',
				bind: {
					text: "{record.name}",

				}
			},
		},
	],
});
