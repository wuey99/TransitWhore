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

    	app$.mainPanel.add(app$.routeList.routeListPanel);
    	
    	app$.mainPanel.show();
    }
});

//----------------------------------------------------------------------------------
}());