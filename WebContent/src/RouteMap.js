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
		}
	});
	
	//----------------------------------------------------------------------------------
	Ext.define('TransitWhore.RouteMapView', {
	    extend: 'Ext.panel.Panel',
	    
        autoShow: true,
        layout: 'fit',
        
	    initComponent: function () {
	    	this.callParent(); 
	    },
	    
        items: [
        	{
	            xtype: 'gmappanel',
	            center: {
	                geoCodeAddr: '4 Yawkey Way, Boston, MA, 02215-3409, USA',
	                marker: {title: 'Fenway Park'}
	            },
	            markers: [{
	                lat: 42.339641,
	                lng: -71.094224,
	                title: 'Boston Museum of Fine Arts',
	                listeners: {
	                    click: function(e){
	                        Ext.Msg.alert('It\'s fine', 'and it\'s art.');
	                    }
	                }
	            },{
	                lat: 42.339419,
	                lng: -71.09077,
	                title: 'Northeastern University'
	            }]
        	}
        ]
	});
	
//----------------------------------------------------------------------------------
}());