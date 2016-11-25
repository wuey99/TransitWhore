//----------------------------------------------------------------------------------
(function () {
//----------------------------------------------------------------------------------
console.log(": defining RouteList: ");

	//----------------------------------------------------------------------------------
	Ext.define("TransitWhore.RouteListModel", {
		extend: "Ext.data.Model",
		fields: [
			{name: 'routeNum', type: 'string'},
			{name: 'desc', type: 'string'}   			
		]
	});

	//----------------------------------------------------------------------------------
	Ext.define("TransitWhore.RouteListController", {
		extend: 'Ext.app.Controller',
		
		storeId: Ext.id(),
		
		init: function() {
			this.store = Ext.create('Ext.data.Store', {
				storeId: this.storeId,
				model: "TransitWhore.RouteListModel",
				data:{
					items:[
						{ routeNum: "Expo", desc: "Santa Monica - 7th Street Metro"  },
						{ routeNum: "190", desc: "El Monte Station - Cal Poly Pomona"  },
						{ routeNum: "209", desc: "Crenshaw Green Line - Western/Wilshire"  }, 
						{ routeNum: "720", desc: "Santa Monica - Montebello" } 
				]},
				proxy: {
					type: 'memory',
					reader: {
						type: 'json',
						root: 'items'
					}
				}
			});  
	
	    	this.routeListPanel = Ext.create('TransitWhore.RouteListView', {
	    		title: 'Routes',
	    		store: this.store,
	    		height: "100%",
	    		width: "25%",
	    		renderTo: Ext.getBody()
	    	});
	    	
	    	
	    	this.callParent(); 
		}
	});

	//----------------------------------------------------------------------------------
	Ext.define('TransitWhore.RouteListView', {
	    extend: 'Ext.grid.Panel',
	    collapsible: true,
	    multiSelect: true,
	    columns: [
	        {
	        	text: 'Route #',
	        	dataIndex: 'routeNum',
	        	flex: 1 
			},
	        {
	            text: 'Desc',
	            dataIndex: 'desc',
	            flex: 1
	        }
	    ],
	    
	    initComponent: function () {
	    	this.callParent(); 
	    }
	});

//----------------------------------------------------------------------------------
}());