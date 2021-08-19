// Example data at the bottom 👇🏼👇🏼👇🏼
/*===================================================================//
   VERSION 8 (current)
//===================================================================*/
import firebase, { analytics } from "./init-firebase";

// Log an event
const logAnalyticsEvent = (logEvent, type, id) => {
  analytics.logEvent(logEvent, {
    content_type: type,
    content_id: id,
  });
};
// Set user properties
analytics.setUserProperties({ favorite_food: "apples" });

// Events
const eventName = firebase.analytics.EventName;
analytics.logEvent(eventName.VIEW_ITEM_LIST, params1); // Viewed item
analytics.logEvent(eventName.SELECT_ITEM, params2); // Selected item
analytics.logEvent(eventName.VIEW_ITEM, params3); // Viewed product details
analytics.logEvent(eventName.ADD_TO_WISHLIST, params4); // Added to a wishlist
analytics.logEvent(eventName.ADD_TO_CART, params4); // Added to the cart
analytics.logEvent(eventName.VIEW_CART, params5); // Viewed the cart
analytics.logEvent(eventName.REMOVE_FROM_CART, params6); // Removed an item from the cart
analytics.logEvent(eventName.BEGIN_CHECKOUT, params7); // Initiated checkout process
analytics.logEvent(eventName.ADD_SHIPPING_INFO, params8); // Added shipping info
analytics.logEvent(eventName.ADD_PAYMENT_INFO, params9); // Added payment info
analytics.logEvent(eventName.PURCHASE, params10); // Made purchase
analytics.logEvent(eventName.REFUND, params11); // Issued refund
analytics.logEvent(eventName.VIEW_PROMOTION, params12); // Promotion viewed
analytics.logEvent(eventName.SELECT_PROMOTION, params12); // Promotion selected

/*===================================================================//
   VERSION 9 (beta)
//===================================================================*/
import { analytics } from "./init-firebase";
import { logEvent, setUserProperties } from "firebase/analytics";

// Log an event
const logAnalyticsEvent = (logEvent, type, id, name) => {
  logEvent(analytics, logEvent, {
    content_type: type,
    content_id: id,
    items: [{ name: name }],
  });
};

// Set user properties
setUserProperties(analytics, { favorite_food: "apples" });

// Log events
logEvent(analytics, "view_item_list", params1); // Viewed item
logEvent(analytics, "select_item", params2); // Selected item
logEvent(analytics, "view_item", params3); // Viewed product details
logEvent(analytics, "add_to_wishlist", params4); // Added to a wishlist
logEvent(analytics, "add_to_cart", params4); // Added to the cart
logEvent(analytics, "view_cart", params5); // Viewed the cart
logEvent(analytics, "remove_from_cart", params6); // Removed an item from the cart
logEvent(analytics, "begin_checkout", params7); // Initiated checkout process
logEvent(analytics, "add_shipping_info", params8); // Added shipping info
logEvent(analytics, "add_payment_info", params9); // Added payment info
logEvent(analytics, "purchase", params10); // Made purchase
logEvent(analytics, "refund", params11); // Issued refund
logEvent(analytics, "view_promotion", params12); // Promotion viewed
logEvent(analytics, "select_promotion", params12); // Promotion selected

/*===================================================================//
  Example data
//===================================================================*/
// Items
const item_jeggings = {
  item_id: "SKU_123",
  item_name: "jeggings",
  item_category: "pants",
  item_variant: "black",
  item_brand: "Google",
  price: 9.99,
};
const item_boots = {
  item_id: "SKU_456",
  item_name: "boots",
  item_category: "shoes",
  item_variant: "brown",
  item_brand: "Google",
  price: 24.99,
};
const item_socks = {
  item_id: "SKU_789",
  item_name: "ankle_socks",
  item_category: "socks",
  item_variant: "red",
  item_brand: "Google",
  price: 5.99,
};

// Params
const params1 = {
  item_list_id: "L001",
  item_list_name: "Related products",
  items: [item_jeggings, item_boots, item_socks],
};
const params2 = {
  item_list_id: "L001",
  item_list_name: "Related products",
  items: [item_jeggings],
};
const params3 = {
  currency: "USD",
  value: 9.99,
  items: [item_jeggings],
};
const params4 = {
  currency: "USD",
  value: 19.98,
  items: [item_jeggings_quantity],
};
const params5 = {
  currency: "USD",
  value: 44.97,
  items: [item_jeggings_quantity, item_boots_quantity],
};
const params6 = {
  currency: "USD",
  value: 24.99,
  items: [item_jeggings],
};
const params7 = {
  currency: "USD",
  value: 14.98, // Total Revenue
  coupon: "SUMMER_FUN",
  items: [item_jeggings],
};
const params8 = {
  currency: "USD",
  value: 14.98, // Total Revenue
  coupon: "SUMMER_FUN",
  shipping_tier: "Ground",
  items: [item_jeggings],
};
const params9 = {
  currency: "USD",
  value: 14.98, // Total Revenue
  coupon: "SUMMER_FUN",
  payment_type: "Visa",
  items: [item_jeggings],
};
const params10 = {
  transaction_id: "T12345",
  affiliation: "Google Store",
  currency: "USD",
  value: 14.98, // Total Revenue
  tax: 2.85,
  shipping: 5.34,
  coupon: "SUMMER_FUN",
  items: [item_jeggings],
};
const params11 = {
  transaction_id: "T12345", // Required
  affiliation: "Google Store",
  currency: "USD",
  value: 9.99,
  items: [],
};
const params12 = {
  promotion_id: "ABC123",
  promotion_name: "Summer Sale",
  creative_name: "summer2020_promo.jpg",
  creative_slot: "featured_app_1",
  location_id: "HERO_BANNER",
  items: [item_jeggings],
};
// Order quantities
const item_jeggings_quantity = {
  ...item_jeggings,
  quantity: 2,
};
const item_boots_quantity = {
  ...item_boots,
  quantity: 1,
};
