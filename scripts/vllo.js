var obj = JSON.parse($response.body);

obj={
  "environment": "Production",
  "receipt": {
    "receipt_type": "Production",
    "adam_id": 952050883,
    "app_item_id": 952050883,
    "bundle_id": "com.darinsoft.vimo",
    "application_version": "2",
    "download_id": 72080793970849,
    "version_external_identifier": 840121681,
    "receipt_creation_date": "2021-03-28 04:28:21 Etc/GMT",
    "receipt_creation_date_ms": "1616905701000",
    "receipt_creation_date_pst": "2021-03-27 21:28:21 America/Los_Angeles",
    "request_date": "2021-03-28 04:28:23 Etc/GMT",
    "request_date_ms": "1616905703632",
    "request_date_pst": "2021-03-27 21:28:23 America/Los_Angeles",
    "original_purchase_date": "2021-01-30 03:49:31 Etc/GMT",
    "original_purchase_date_ms": "1611978571000",
    "original_purchase_date_pst": "2021-01-29 19:49:31 America/Los_Angeles",
    "original_application_version": "2",
    "in_app": [
      {
        "quantity": "1",
        "product_id": "com.vimosoft.premium.annually.subscription",
        "transaction_id": "320000828583807",
        "original_transaction_id": "320000828583807",
        "purchase_date": "2026-03-04 12:00:00 Etc/GMT",
        "purchase_date_ms": "1741392000000",
        "purchase_date_pst": "2026-03-04 04:00:00 America/Los_Angeles",
        "original_purchase_date": "2026-03-04 12:00:00 Etc/GMT",
        "original_purchase_date_ms": "1741392000000",
        "original_purchase_date_pst": "2026-03-04 04:00:00 America/Los_Angeles",
        "expires_date": "2099-12-01 01:11:32 Etc/GMT",
        "expires_date_ms": "4099770692000",
        "expires_date_pst": "2099-11-30 17:11:32 America/Los_Angeles",
        "web_order_line_item_id": "320000332783614",
        "is_trial_period": "false",
        "is_in_intro_offer_period": "false",
        "in_app_ownership_type": "PURCHASED"
      }
    ]
  },
  "latest_receipt_info": [
    {
      "quantity": "1",
      "product_id": "com.vimosoft.premium.annually.subscription",
      "transaction_id": "320000828583807",
      "original_transaction_id": "320000828583807",
      "purchase_date": "2026-03-04 12:00:00 Etc/GMT",
      "purchase_date_ms": "1741392000000",
      "purchase_date_pst": "2026-03-04 04:00:00 America/Los_Angeles",
      "original_purchase_date": "2026-03-04 12:00:00 Etc/GMT",
      "original_purchase_date_ms": "1741392000000",
      "original_purchase_date_pst": "2026-03-04 04:00:00 America/Los_Angeles",
      "expires_date": "2099-12-01 01:11:32 Etc/GMT",
      "expires_date_ms": "4099770692000",
      "expires_date_pst": "2099-11-30 17:11:32 America/Los_Angeles",
      "web_order_line_item_id": "320000332783614",
      "is_trial_period": "false",
      "is_in_intro_offer_period": "false",
      "in_app_ownership_type": "PURCHASED",
      "subscription_group_identifier": "20573990"
    }
  ],
  "latest_receipt": "MIIT...твоя_base64_receipt...=", // сократил, используй свою
  "pending_renewal_info": [
    {
      "auto_renew_product_id": "com.vimosoft.premium.annually.subscription",
      "product_id": "com.vimosoft.premium.annually.subscription",
      "original_transaction_id": "320000828583807",
      "auto_renew_status": "1"  // ← КЛЮЧЕВОЕ ИЗМЕНЕНИЕ!
    }
  ],
  "status": 0
}

$done({body: JSON.stringify(obj)});
