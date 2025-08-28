sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel",
  "sap/m/MessageToast",
  "sap/m/MessageBox",
  "sap/m/MessagePopover",
  "sap/m/MessageItem",
  "sap/ui/core/library",
  "sap/ui/core/UIComponent"
], function (Controller, JSONModel, MessageToast, MessageBox, MessagePopover, MessageItem, coreLibrary, UIComponent) {
  "use strict";

  // Shortcut for sap.ui.core.MessageType
  var MessageType = coreLibrary.MessageType;

  /**
   * @class converted.customerfeedbackview.controller.CustomerFeedbackView
   * @extends sap.ui.core.mvc.Controller
   * CustomerFeedbackView controller
   */
  return Controller.extend("converted.customerfeedbackview.controller.CustomerFeedbackView", {

    /**
     * Called when the view is initialized.
     * @public
     */
    onInit: function () {
      // Load customer data from mock data
      var oCustomerModel = new JSONModel();
      oCustomerModel.loadData("model/mockData/customers.json");
      this.getView().setModel(oCustomerModel, "customer"); // Changed model name to "customer"

      // Initialize message model for MessageArea/MessagePopover
      var oMessageModel = new JSONModel({
        messages: [
          {
            type: MessageType.Success,
            title: "System Information",
            description: "Application converted successfully, Use AI optimize for better result",
            subtitle: "Conversion complete",
            counter: 1
          }
        ]
      });
      this.getView().setModel(oMessageModel, "messages");

      // Converted from WebDynpro: 2025-08-28T04:30:34.677Z
    },

    /**
     * Called before the view is rendered.
     * @public
     */
    onBeforeRendering: function () {
      // Prepare data before rendering
    },

    /**
     * Called after the view is rendered.
     * @public
     */
    onAfterRendering: function () {
      // Adjust UI after rendering
    },


    /**
     * Handles the submission of the feedback form.
     * @public
     * @param {sap.ui.base.Event} oEvent The event object.
     */
    onSubmit: function (oEvent) {
      // Implement data persistence logic here.
      MessageToast.show("Thank you for your feedback!");

      // Assuming a boolean flag exists in the model to indicate feedback submission
      var oModel = this.getView().getModel("customer"); // Make sure the model name matches
      if (oModel) {
        var oData = oModel.getData();
        oData.feedbackSubmitted = true; // Assuming the property is named 'feedbackSubmitted'
        oModel.setData(oData);
      }

      // Additional logic can be added here, such as clearing the form.
    }
  });
});
