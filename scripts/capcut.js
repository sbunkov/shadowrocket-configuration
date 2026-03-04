let obj = JSON.parse($response.body);

obj = {
  "subscriber": {
    "subscriptions": {
      "com.capcut.pro.yearly": {
        "billing_issues_detected_at": null,
        "expires_date": "2099-12-31T23:59:59Z",
        "is_sandbox": false,
        "original_purchase_date": "2021-01-01T00:00:00Z",
        "period_type": "active",
        "purchase_date": "2021-01-01T00:00:00Z",
        "store": "app_store",
        "unsubscribe_detected_at": null
      }
    },
    "entitlements": {
      "pro": {
        "expires_date": "2099-12-31T23:59:59Z",
        "product_identifier": "com.capcut.pro.yearly",
        "purchase_date": "2021-01-01T00:00:00Z"
      }
    }
  }
};

$done({body: JSON.stringify(obj)});
