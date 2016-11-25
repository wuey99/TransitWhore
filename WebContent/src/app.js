//----------------------------------------------------------------------------------
(function () {
//----------------------------------------------------------------------------------
Ext.application({
    requires: ['Ext.container.Viewport'],
    name: 'TransitWhore',

    appFolder: 'app',

    launch: function() {  
    	app$ = TransitWhore;
    	
    	app$.routeList = Ext.create("TransitWhore.RouteListController", {});
    	app$.routeList.init();

    	console.log(": RouteList: ", app$.routeList.storeId);

    	console.log(": storeId: ", app$.routeList.storeId, Ext.data.StoreManager.lookup(app$.routeList.storeId));
    	
    	var _routeGrid = Ext.create('TransitWhore.RouteList', {
    		title: 'Routes',
    		store: app$.routeList.storeId, // Ext.data.StoreManager.lookup('routeNumStore'),
    		height: "100%",
    		width: "25%",
    		renderTo: Ext.getBody()
    	});
    	
    	app$.mainPanel = Ext.create('Ext.panel.Panel', {
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

    	app$.mainPanel.add(_routeGrid);
    	
    	app$.mainPanel.show();
    }
});

//----------------------------------------------------------------------------------
}());