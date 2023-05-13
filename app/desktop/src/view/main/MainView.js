Ext.define("ModernApp.view.main.MainView", {
	extend: "Ext.Container",
	xtype: "mainview",
	cls: "mainview",
	controller: "mainviewcontroller",
	viewModel: {
		type: "mainviewmodel",
	},
	layout: {
		type: "vbox",
		align: "start",
	},
	items: [
		{
			xtype: "container",
			cls: "header",
			layout: {
				type: "hbox",
				align: "center",
			},
			items: [
				{
					xtype: "image",
					cls: "logo",
					src: "https://ncdn0.infojobs.com.br/logos/2015/01/18/354178.jpg",
				},
				{
					xtype: "component",
					cls: "title",
					html: "Movies",
				},
				{
					xtype: "component",
					cls: "title",
					html: "Series",
				},
			],
		},
		{
			xtype: "container",
			flex: 1,
			layout: {
				type: "hbox",
				align: "stretch",
			},
			items: [
        {
          xtype: "filters",
          // height: 600,
				},
				{
          xtype: "container",
          flex: 1,
          scrollable: 'y',
					layout: {
            type: "vbox",
						align: "stretch",
            wrap: true,
					},
					items: {
						xtype: "movie",
            scrollable: 'y'
					},
				},
			],
		},
	],
});
