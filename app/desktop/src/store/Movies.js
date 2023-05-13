Ext.define('ModernApp.store.Movies', {
    extend: 'Ext.data.Store',
    alias: 'store.movies',
    model: 'ModernApp.model.Movies',
    autoLoad: true,
    proxy: {
        type: 'base-proxy',
        reader: {
            type: 'json',
            rootProperty: 'results',
            totalProperty: 'total_results',
        }
    }
});