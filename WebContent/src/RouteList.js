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
Ext.create('Ext.data.Store', {
	storeId:'routeNumStore',
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

//----------------------------------------------------------------------------------
Ext.define('TransitWhore.RouteList', {
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