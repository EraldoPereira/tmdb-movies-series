Ext.define("ModernApp.base.proxy.BaseProxy", {
	extend: "Ext.data.proxy.Ajax",
	alias: "proxy.base-proxy",
	headers: {
		"Content-Type": "*/*",
        "Authorization": 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYjZmZGQzNDk4MDBiYjI3YzkzNDY2OTVjYmE2NTMzMiIsInN1YiI6IjYyMzY3NDM3MzNlYzI2MDAxYjQ4NTY0YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2clWH3NxUWGwTWMQRXcSUF__t3vPX7AbLnUOStPBEUs'
	},
});
