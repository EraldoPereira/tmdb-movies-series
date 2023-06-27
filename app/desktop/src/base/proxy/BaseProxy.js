Ext.define("ModernApp.base.proxy.BaseProxy", {
	extend: "Ext.data.proxy.Ajax",
	alias: "proxy.base-proxy",
	headers: {
		"Content-Type": "*/*",
	},
});
