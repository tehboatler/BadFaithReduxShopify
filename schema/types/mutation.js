
const Mutation = {
  "name": "Mutation",
  "kind": "OBJECT",
  "fieldBaseTypes": {
    "checkoutAttributesUpdate": "CheckoutAttributesUpdatePayload",
    "checkoutCompleteFree": "CheckoutCompleteFreePayload",
    "checkoutCompleteWithCreditCard": "CheckoutCompleteWithCreditCardPayload",
    "checkoutCompleteWithTokenizedPayment": "CheckoutCompleteWithTokenizedPaymentPayload",
    "checkoutCreate": "CheckoutCreatePayload",
    "checkoutCustomerAssociate": "CheckoutCustomerAssociatePayload",
    "checkoutCustomerDisassociate": "CheckoutCustomerDisassociatePayload",
    "checkoutDiscountCodeApply": "CheckoutDiscountCodeApplyPayload",
    "checkoutEmailUpdate": "CheckoutEmailUpdatePayload",
    "checkoutGiftCardApply": "CheckoutGiftCardApplyPayload",
    "checkoutGiftCardRemove": "CheckoutGiftCardRemovePayload",
    "checkoutLineItemsAdd": "CheckoutLineItemsAddPayload",
    "checkoutLineItemsRemove": "CheckoutLineItemsRemovePayload",
    "checkoutLineItemsUpdate": "CheckoutLineItemsUpdatePayload",
    "checkoutShippingAddressUpdate": "CheckoutShippingAddressUpdatePayload",
    "checkoutShippingLineUpdate": "CheckoutShippingLineUpdatePayload",
    "customerAccessTokenCreate": "CustomerAccessTokenCreatePayload",
    "customerAccessTokenDelete": "CustomerAccessTokenDeletePayload",
    "customerAccessTokenRenew": "CustomerAccessTokenRenewPayload",
    "customerActivate": "CustomerActivatePayload",
    "customerAddressCreate": "CustomerAddressCreatePayload",
    "customerAddressDelete": "CustomerAddressDeletePayload",
    "customerAddressUpdate": "CustomerAddressUpdatePayload",
    "customerCreate": "CustomerCreatePayload",
    "customerDefaultAddressUpdate": "CustomerDefaultAddressUpdatePayload",
    "customerRecover": "CustomerRecoverPayload",
    "customerReset": "CustomerResetPayload",
    "customerUpdate": "CustomerUpdatePayload"
  },
  "implementsNode": false,
  "relayInputObjectBaseTypes": {
    "checkoutAttributesUpdate": "CheckoutAttributesUpdateInput",
    "checkoutCreate": "CheckoutCreateInput",
    "customerAccessTokenCreate": "CustomerAccessTokenCreateInput",
    "customerActivate": "CustomerActivateInput",
    "customerCreate": "CustomerCreateInput",
    "customerReset": "CustomerResetInput"
  }
};
export default Mutation;