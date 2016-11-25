//----------------------------------------------------------------------------------
(function () {
//----------------------------------------------------------------------------------
console.log(": defining RouteGrid: ");
	
//----------------------------------------------------------------------------------
Ext.define("TransitWhore.RouteGridModel", {
	extend: "Ext.data.Model",
	fields: [
		{name: 'framework', type: 'string'},
		{name: 'rocks', type: 'boolean'}   			
	]
});

//----------------------------------------------------------------------------------
Ext.create('Ext.data.Store', {
	storeId:'sampleStore',
	model: "TransitWhore.RouteGridModel",
	data:{
		'items':[
			{ 'framework': "Ext JS 4",     'rocks': true  },
			{ 'framework': "Sencha Touch", 'rocks': true  },
			{ 'framework': "Ext GWT",      'rocks': true  }, 
			{ 'framework': "Other Guys",   'rocks': false } 
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
Ext.define('TransitWhore.RouteGrid', {
    extend: 'Ext.grid.Panel',
    collapsible: true,
    multiSelect: true,
    columns: [
        {
        	text: 'Framework',
        	dataIndex: 'framework',
        	flex: 1 
		},
        {
            xtype: 'booleancolumn', 
            text: 'Rocks',
            trueText: 'Yes',
            falseText: 'No', 
            dataIndex: 'rocks'
        }
    ],
    
    initComponent: function () {
    	this.callParent();
    }
});

//----------------------------------------------------------------------------------
}());