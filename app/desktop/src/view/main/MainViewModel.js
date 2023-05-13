Ext.define('ModernApp.view.main.MainViewModel', {
  extend: 'Ext.app.ViewModel',
  alias: 'viewmodel.mainviewmodel',
  data: {
  },
  stores: {
    genres: {
      type: 'genres'
    }
  }
})
