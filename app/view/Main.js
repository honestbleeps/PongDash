/*
 * File: app/view/Main.js
 *
 * This file was generated by Sencha Architect version 3.0.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.Main', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.main',

    requires: [
        'MyApp.view.BreadCrumbs'
    ],

    padding: '20 10 10',
    layout: {
        align: 'stretch',
        padding: '20 10 10',
        type: 'vbox'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'container',
                    flex: 1,
                    margins: '10 0 0',
                    frame: true,
                    itemId: 'cardCt',
                    layout: {
                        type: 'card'
                    }
                },
                {
                    xtype: 'breadcrumbs'
                }
            ]
        });

        me.callParent(arguments);
    },

    updateBreadCrumbs: function() {
        var cmp = this.child('#cardCt').getLayout().getActiveItem(),
            titles = [];
        while (cmp) {
            titles.unshift(cmp.title);
            cmp = cmp.previousSibling();
        }
        
        //one-off: first item is always "Home"
        titles[0] = "Home";
        
        this.child('breadcrumbs').update(titles);
    }

});