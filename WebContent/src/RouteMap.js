//----------------------------------------------------------------------------------
(function () {
	console.log(": defining RouteMap: ");	

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
		}
	});
	
	//----------------------------------------------------------------------------------
	Ext.define('TransitWhore.RouteMapView', {
	    extend: 'Ext.panel.Panel',
	    
	    initComponent: function () {
	    	this.callParent(); 
	    }
	});
	
//----------------------------------------------------------------------------------
}());