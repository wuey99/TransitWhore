//----------------------------------------------------------------------------------
(function () {
//----------------------------------------------------------------------------------
Ext.application({
    requires: ['Ext.container.Viewport'],
    name: 'TransitWhore',

    appFolder: 'app',

    launch: function() {
    	var _routeGrid = Ext.create('TransitWhore.RouteList', {
    		title: 'Routes',
    		store: Ext.data.StoreManager.lookup('routeNumStore'),
    		height: "100%",
    		width: "25%",
    		renderTo: Ext.getBody()
    	});
    	
    	var _panel = Ext.create('Ext.panel.Panel', {
    	    renderTo: Ext.getBody(),
            title: 'TransitWhore',
            layout:{
                type: 'hbox'
            },
    	    width: window.innerWidth,
    	    height: window.innerHeight,
    	    listeners: {
    	    	destroy: function() {
        			console.log(": event: destroy: panel: ");
    	    	}
    	    },
    		onDestroy: function() {
	    		console.log(": onDestroy: panel: ");
    		},
    	    items: [
    	    ]
    	});

    	_panel.add(_routeGrid);
    	
    	_panel.show();
    }
});

//----------------------------------------------------------------------------------
}());