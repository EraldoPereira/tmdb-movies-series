Ext.define("ModernApp.view.main.MainViewController", {
	extend: "Ext.app.ViewController",
	alias: "controller.mainviewcontroller",

	onFilterByGenres: function (button) {
    const me = this;
    const viewModel = me.getViewModel();
    const record = button.lookupViewModel().get('record');
    const movies = viewModel.getStore('movies');
    movies.load({
      params: {
        with_genres: record.get('id')
      }
    })
  },
});
