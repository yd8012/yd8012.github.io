function initData() {
  jimData.datamasters["invoice_line"] = [
  ];

  jimData.datamasters["Items"] = [
    {
      "id": 1,
      "datamaster": "Items",
      "userdata": {
        "name": "더블버거",
        "price": "5200"
      }
    },
    {
      "id": 2,
      "datamaster": "Items",
      "userdata": {
        "name": "치킨버거",
        "price": "3300"
      }
    },
    {
      "id": 3,
      "datamaster": "Items",
      "userdata": {
        "name": "새우버거",
        "price": "3100"
      }
    }
  ];

  jimData.isInitialized = true;
}