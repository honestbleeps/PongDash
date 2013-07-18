/*
 * File: app/store/Customers.js
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

Ext.define('MyApp.store.Customers', {
    extend: 'Ext.data.Store',

    requires: [
        'MyApp.model.Customer'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: true,
            model: 'MyApp.model.Customer',
            storeId: 'Customers',
            proxy: {
                type: 'jsonp',
                url: 'http://localhost:8080/customers',
                reader: {
                    type: 'json'
                }
            }
        }, cfg)]);
    }
});