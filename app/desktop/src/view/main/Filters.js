Ext.define("ModernApp.view.main.Filters", {
	extend: "Ext.Container",
	xtype: "filters",
	cls: "filters",
	items: [
		{
			xtype: "componentdataview",
			bind: {
				store: "{genres}",

			},

			itemConfig: {
				viewModel: true,
				xtype: "button",
				ui: "round",
				margin: "2px",
				bind: {
					text: "{record.name}",

				}
			},
		},
	],
});
