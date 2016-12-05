//----------------------------------------------------------------------------------
(function () {
	console.log(": defining RouteMap: ");	

	Ext.require([
	    'Ext.ux.GMapPanel'
	]);
	
	//----------------------------------------------------------------------------------
	Ext.define("TransitWhore.RouteMapController", {
		extend: 'Ext.app.Controller',
		
		init: function() {
	    	this.callParent(); 
	    	
	    	this.routeMapPanel = Ext.create("TransitWhore.RouteMapView", {
	    		title: 'Map',
	    		height: "100%",
	    		width: "75%",
	    		renderTo: Ext.getBody()
	    	})
		},
	
		getRouteMapPanel: function() {
			return this.routeMapPanel
		},
		
		getGMapPanel: function() {
			return this.routeMapPanel.getGMapPanel();
		}
	});
	
	//----------------------------------------------------------------------------------
	Ext.define('TransitWhore.RouteMapView', {
	    extend: 'Ext.panel.Panel',
	    
        autoShow: true,
        layout:{
            type: 'fit'
        },
        
	    initComponent: function () {
	    	this.callParent(); 
	    },
	    
	    getGMapPanel: function() {
	    	return this.getComponent("gmappanel");
	    },
	    
        items: [
        	{
	            xtype: 'gmappanel',
	            itemId: "gmappanel",
	            center: {
	                geoCodeAddr: 'Los Angeles',
	                marker: {title: 'Los Angeles'}
	            },
	            markers: [{
	            }]
        	}
        ]
	});
	
//----------------------------------------------------------------------------------
}());