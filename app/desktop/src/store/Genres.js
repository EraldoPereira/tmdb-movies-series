Ext.define('ModernApp.store.Genres', {
    extend: 'Ext.data.Store',
    alias: 'store.genres',
    model: 'ModernApp.model.Genres',
    autoLoad: true,
    proxy: {
        type: 'base-proxy',
        url: 'https://api.themoviedb.org/3/genre/movie/list?language=en',
        reader: {
            type: 'json',
            rootProperty: 'genres'
        }
    }
});