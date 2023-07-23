import React from "react";
import ReactDOM  from "react-dom/client";
import "./App.css";

const Header = () => {
    return ( 
        <div className="head">
            
            <div className="logo">
            <img src="https://img.freepik.com/premium-vector/restaurant-logo-design-template_79169-56.jpg" alt="image here"></img>
            </div>
            <div className="navbar">
            <ul className="nav-list">
                <li>Home</li>
                <li>About</li>
                <li>contact</li>
                <li>Cart</li>
            </ul>
            </div>            
        </div>
    );
};



const resobj = [
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "561848",
        "name": "Makers of Milkshakes",
        "uuid": "30fe3e20-80c7-415b-8c79-113943f85f17",
        "city": "120",
        "area": "Nellore",
        "totalRatingsString": "100+ ratings",
        "cloudinaryImageId": "f4rs5b0vqdaavaazdzjx",
        "cuisines": [
          "Beverages",
          "Desserts",
          "Ice Cream"
        ],
        "tags": [
          
        ],
        "costForTwo": 40000,
        "costForTwoString": "₹400 FOR TWO",
        "deliveryTime": 21,
        "minDeliveryTime": 21,
        "maxDeliveryTime": 21,
        "slaString": "21 MINS",
        "lastMileTravel": 0.20000000298023224,
        "slugs": {
          "restaurant": "makers-of-milkshakes-nellore-area-nellore-area",
          "city": "nellore"
        },
        "cityState": "120",
        "address": "H No: 16-8-116, 3rd Floor Back Side Ramalingapuram Main Road, Nellore ,Upputur,Nellore,Nellore,Andhra Pradesh-524003",
        "locality": "Ramalingapuram Road",
        "parentId": 5632,
        "unserviceable": true,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "distance",
              "fee": 2100,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 2100,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2100",
          "icon": ""
        },
        "availability": {
          "opened": false,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "0.2 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "561848",
          "deliveryTime": 21,
          "minDeliveryTime": 21,
          "maxDeliveryTime": 21,
          "lastMileTravel": 0.20000000298023224,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE_WITH_BANNER",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.6",
        "totalRatings": 100,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "656210",
        "name": "IAS Fast Foods",
        "uuid": "726db37c-8e87-43e2-92fd-c68542b68975",
        "city": "120",
        "area": "Nellore Area",
        "totalRatingsString": "Too Few Ratings",
        "cloudinaryImageId": "391ae5a740b83461afd8868ddbde3124",
        "cuisines": [
          "Chinese",
          "Fast Food",
          "Snacks"
        ],
        "tags": [
          
        ],
        "costForTwo": 16000,
        "costForTwoString": "₹160 FOR TWO",
        "deliveryTime": 24,
        "minDeliveryTime": 24,
        "maxDeliveryTime": 24,
        "slaString": "24 MINS",
        "lastMileTravel": 1.600000023841858,
        "slugs": {
          "restaurant": "ias-fast-foods-nellore-area-nellore-area",
          "city": "nellore"
        },
        "cityState": "120",
        "address": "alankar centre, near potti sriramulu statue, Konda Dibba, R L Nagar, Nellore, Andhra Pradesh 524003, India",
        "locality": "Santhapeta Patta",
        "parentId": 394503,
        "unserviceable": true,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 2100,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 2100,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2100",
          "icon": ""
        },
        "availability": {
          "opened": false,
          "nextOpenMessage": "Opens next at 11:30 am, today",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1.6 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "656210",
          "deliveryTime": 24,
          "minDeliveryTime": 24,
          "maxDeliveryTime": 24,
          "lastMileTravel": 1.600000023841858,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE_WITH_BANNER",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "--",
        "totalRatings": 0,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "568754",
        "name": "SVR Foods",
        "uuid": "6ae20ba2-1077-452d-840c-1c82bdf55f27",
        "city": "120",
        "area": "Nellore",
        "totalRatingsString": "20+ ratings",
        "cloudinaryImageId": "v5yiaw7j7zetz1bzwbj1",
        "cuisines": [
          "South Indian",
          "North Indian"
        ],
        "tags": [
          
        ],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 31,
        "minDeliveryTime": 31,
        "maxDeliveryTime": 31,
        "slaString": "31 MINS",
        "lastMileTravel": 3,
        "slugs": {
          "restaurant": "svr-foods-nellore-area-nellore-area",
          "city": "nellore"
        },
        "cityState": "120",
        "address": "H No: 154, Street No. 421, Near Vemala  Shetty Bavi, Sri Potti Sriramulu Nellore,  Nellore, Upputur, Nellore, Nellore, Andhra  Pradesh - 524001",
        "locality": "Pinakini Avenue",
        "parentId": 341511,
        "unserviceable": true,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 2100,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 2100,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2100",
          "icon": ""
        },
        "availability": {
          "opened": false,
          "nextOpenMessage": "Opens next at 7:30 am, today",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "3 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "568754",
          "deliveryTime": 31,
          "minDeliveryTime": 31,
          "maxDeliveryTime": 31,
          "lastMileTravel": 3,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE_WITH_BANNER",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.0",
        "totalRatings": 20,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "603251",
        "name": "Beyond Bajji",
        "uuid": "c60cb8e4-6c07-4b26-8679-8a2fceed87e1",
        "city": "120",
        "area": "Nellore",
        "totalRatingsString": "20+ ratings",
        "cloudinaryImageId": "bbpqzrma9q4jzergjmyn",
        "cuisines": [
          "Snacks",
          "Pizzas",
          "Burgers"
        ],
        "tags": [
          
        ],
        "costForTwo": 25000,
        "costForTwoString": "₹250 FOR TWO",
        "deliveryTime": 25,
        "minDeliveryTime": 25,
        "maxDeliveryTime": 25,
        "slaString": "25 MINS",
        "lastMileTravel": 2.5,
        "slugs": {
          "restaurant": "beyond-bajji-nellore-area-nellore-area",
          "city": "nellore"
        },
        "cityState": "120",
        "address": "PROP: MANIKANTI SARITHA, DOOR NO.  24-2-579, GNT MAIN ROAD, NEAR KVR PETROL  BUNK, SARASWATHI NAGAR, DARGAMITTA,  Nellore, Nellore, Andhra Pradesh-524003",
        "locality": "Saraswathi Nagar",
        "parentId": 43780,
        "unserviceable": true,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 2100,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 2100,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2100",
          "icon": ""
        },
        "availability": {
          "opened": false,
          "nextOpenMessage": "Opens next at 11 am, today",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "2.5 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "603251",
          "deliveryTime": 25,
          "minDeliveryTime": 25,
          "maxDeliveryTime": 25,
          "lastMileTravel": 2.5,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE_WITH_BANNER",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.3",
        "totalRatings": 20,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "679102",
        "name": "Bawarchi Magunta Layout",
        "uuid": "425fe0cd-5830-47eb-b65e-bf659d0ad0d4",
        "city": "120",
        "area": "Nellore Area",
        "totalRatingsString": "20+ ratings",
        "cloudinaryImageId": "697f82a44ce19e4ef51c9c93dd38bdf3",
        "cuisines": [
          "South Indian"
        ],
        "tags": [
          
        ],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 18,
        "minDeliveryTime": 18,
        "maxDeliveryTime": 18,
        "slaString": "18 MINS",
        "lastMileTravel": 1.100000023841858,
        "slugs": {
          "restaurant": "r-bawarchi-nellore-area-nellore-area",
          "city": "nellore"
        },
        "cityState": "120",
        "address": "PROP: HARIBABU INGALURI, 23/4/114, MAIN ROAD, KINGS COURT AVENUE, MAGUNTA LAYOUT, NELLORE ,Nellore,SPSR Nellore,Andhra Pradesh-524003",
        "locality": "Magunta Layout",
        "parentId": 405761,
        "unserviceable": true,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 2100,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 2100,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2100",
          "icon": ""
        },
        "availability": {
          "opened": false,
          "nextOpenMessage": "Opens next at 11:30 am, today",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1.1 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "679102",
          "deliveryTime": 18,
          "minDeliveryTime": 18,
          "maxDeliveryTime": 18,
          "lastMileTravel": 1.100000023841858,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE_WITH_BANNER",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.7",
        "totalRatings": 20,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "288268",
        "name": "Surya hot foods",
        "uuid": "21d34dfc-c445-4f86-8cf8-15e63d53001a",
        "city": "120",
        "area": "Nellore",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "rjaq8pel3wyr9cuiylya",
        "cuisines": [
          "Indian"
        ],
        "tags": [
          
        ],
        "costForTwo": 10000,
        "costForTwoString": "₹100 FOR TWO",
        "deliveryTime": 20,
        "minDeliveryTime": 20,
        "maxDeliveryTime": 20,
        "slaString": "20 MINS",
        "lastMileTravel": 1,
        "slugs": {
          "restaurant": "surya-hot-foods-magunta-layout-magunta-layout",
          "city": "nellore"
        },
        "cityState": "120",
        "address": "SVS complex, Achari St, near Madras bustand, Nellore, Andhra Pradesh 524001",
        "locality": "Achari Street",
        "parentId": 12552,
        "unserviceable": true,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 2100,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 2100,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2100",
          "icon": ""
        },
        "availability": {
          "opened": false,
          "nextOpenMessage": "Opens next at 6:45 am, today",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "288268",
          "deliveryTime": 20,
          "minDeliveryTime": 20,
          "maxDeliveryTime": 20,
          "lastMileTravel": 1,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE_WITH_BANNER",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.1",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "488922",
        "name": "The Legendairy Milkshakes",
        "uuid": "1c83934b-586e-46c0-9c6d-a3735cd87e76",
        "city": "120",
        "area": "Nellore",
        "totalRatingsString": "500+ ratings",
        "cloudinaryImageId": "956110eb839d2102bc27956bdbeb4080",
        "cuisines": [
          "Beverages"
        ],
        "tags": [
          
        ],
        "costForTwo": 25000,
        "costForTwoString": "₹250 FOR TWO",
        "deliveryTime": 22,
        "minDeliveryTime": 22,
        "maxDeliveryTime": 22,
        "slaString": "22 MINS",
        "lastMileTravel": 2.5,
        "slugs": {
          "restaurant": "the-legendairy-milkshakes-nellore-area-nellore-area",
          "city": "nellore"
        },
        "cityState": "120",
        "address": "Santhapet, Nellore, Andhra Pradesh 524001",
        "locality": "Santhapet Road",
        "parentId": 13330,
        "unserviceable": true,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 2100,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 2100,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2100",
          "icon": ""
        },
        "availability": {
          "opened": false,
          "nextOpenMessage": "Opens next at 7:30 am, today",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "2.5 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "488922",
          "deliveryTime": 22,
          "minDeliveryTime": 22,
          "maxDeliveryTime": 22,
          "lastMileTravel": 2.5,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE_WITH_BANNER",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.1",
        "totalRatings": 500,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "320507",
        "name": "A2B - Adyar Ananda Bhavan",
        "uuid": "72f018f2-dd37-4c8b-98a5-79d54d731ec9",
        "city": "120",
        "area": "Nellore",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "fkuk6qliqdvbq2aaqtxo",
        "cuisines": [
          "South Indian",
          "North Indian",
          "Sweets",
          "Chinese"
        ],
        "tags": [
          
        ],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 20,
        "minDeliveryTime": 20,
        "maxDeliveryTime": 20,
        "slaString": "20 MINS",
        "lastMileTravel": 1.2000000476837158,
        "slugs": {
          "restaurant": "a2b-veg-chinna-bazar-chinna-bazar",
          "city": "nellore"
        },
        "cityState": "120",
        "address": "W/23S,DR MALL,GNT ROAD, NELLORE,ANDHRA PRADESH-524003, Nellore, Nellore(Andhra Pradesh) -524003",
        "locality": "Dr Mall",
        "parentId": 22,
        "unserviceable": true,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 2100,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 2100,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2100",
          "icon": ""
        },
        "availability": {
          "opened": false,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1.2 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "320507",
          "deliveryTime": 20,
          "minDeliveryTime": 20,
          "maxDeliveryTime": 20,
          "lastMileTravel": 1.2000000476837158,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE_WITH_BANNER",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.1",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "627375",
        "name": "Spicy Food Court(Sfc)",
        "uuid": "8c5c9a99-9995-42c1-9f58-339739f95996",
        "city": "120",
        "area": "Nellore",
        "totalRatingsString": "Too Few Ratings",
        "cloudinaryImageId": "fungsbc6ub8jkp39wpmg",
        "cuisines": [
          "Snacks"
        ],
        "tags": [
          
        ],
        "costForTwo": 10000,
        "costForTwoString": "₹100 FOR TWO",
        "deliveryTime": 26,
        "minDeliveryTime": 26,
        "maxDeliveryTime": 26,
        "slaString": "26 MINS",
        "lastMileTravel": 2.299999952316284,
        "slugs": {
          "restaurant": "spicy-food-court(sfc)-nellore-area-nellore-area",
          "city": "nellore"
        },
        "cityState": "120",
        "address": "Magunta Layout, Nellore, Andhra Pradesh 524003, India",
        "locality": "Magunta Layout",
        "parentId": 373010,
        "unserviceable": true,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 2100,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 2100,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2100",
          "icon": ""
        },
        "availability": {
          "opened": false,
          "nextOpenMessage": "Opens next at 11 am, today",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "2.2 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "627375",
          "deliveryTime": 26,
          "minDeliveryTime": 26,
          "maxDeliveryTime": 26,
          "lastMileTravel": 2.299999952316284,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE_WITH_BANNER",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "--",
        "totalRatings": 0,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "699712",
        "name": "AL-BAWARCHI",
        "uuid": "1991fb69-f592-43a9-9ff5-8cf94d991cd4",
        "city": "120",
        "area": "Nellore Area",
        "totalRatingsString": "Too Few Ratings",
        "cloudinaryImageId": "1f3572c2cba8b5c690ce395f40da39f4",
        "cuisines": [
          "Indian",
          "Street Food",
          "South Indian",
          "Punjabi",
          "Sweets",
          "Desserts"
        ],
        "tags": [
          
        ],
        "costForTwo": 15000,
        "costForTwoString": "₹150 FOR TWO",
        "deliveryTime": 26,
        "minDeliveryTime": 26,
        "maxDeliveryTime": 26,
        "slaString": "26 MINS",
        "lastMileTravel": 2.299999952316284,
        "slugs": {
          "restaurant": "al-bawarchi-nellore-area-nellore-area",
          "city": "nellore"
        },
        "cityState": "120",
        "address": "01, Magunta Layout, Nellore, Andhra Pradesh 524003, India",
        "locality": "Magunta Layout",
        "parentId": 16666,
        "unserviceable": true,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "distance",
              "fee": 2100,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 2100,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2100",
          "icon": ""
        },
        "availability": {
          "opened": false,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "2.2 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "699712",
          "deliveryTime": 26,
          "minDeliveryTime": 26,
          "maxDeliveryTime": 26,
          "lastMileTravel": 2.299999952316284,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE_WITH_BANNER",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "--",
        "totalRatings": 0,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "166610",
        "name": "Just Kulfi",
        "uuid": "b01bab12-ba8e-48ad-9cfc-04ecd75193bb",
        "city": "120",
        "area": "Nellore",
        "totalRatingsString": "100+ ratings",
        "cloudinaryImageId": "djzwnd3pcnnul4y9s1t0",
        "cuisines": [
          "Beverages",
          "Desserts"
        ],
        "tags": [
          
        ],
        "costForTwo": 10000,
        "costForTwoString": "₹100 FOR TWO",
        "deliveryTime": 18,
        "minDeliveryTime": 18,
        "maxDeliveryTime": 18,
        "slaString": "18 MINS",
        "lastMileTravel": 0.6000000238418579,
        "slugs": {
          "restaurant": "just-kulfi-aditya-nagar-aditya-nagar",
          "city": "nellore"
        },
        "cityState": "120",
        "address": "27/1/71/2, Aditya Nagar, Ramji Nagar, Nellore",
        "locality": "Aditya Nagar",
        "parentId": 112414,
        "unserviceable": true,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 2100,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 2100,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2100",
          "icon": ""
        },
        "availability": {
          "opened": false,
          "nextOpenMessage": "Opens next at 11:10 am, today",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "0.6 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "166610",
          "deliveryTime": 18,
          "minDeliveryTime": 18,
          "maxDeliveryTime": 18,
          "lastMileTravel": 0.6000000238418579,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE_WITH_BANNER",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.2",
        "totalRatings": 100,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "629409",
        "name": "Dum Safar Biryani",
        "uuid": "28ae37c1-2fa4-48e3-8a84-eb51a86aacce",
        "city": "120",
        "area": "Saraswathi Nagar",
        "totalRatingsString": "20+ ratings",
        "cloudinaryImageId": "1154cffac2453eb0bf7fdda7e5ea1659",
        "cuisines": [
          "Biryani",
          "Kebabs",
          "Tandoor",
          "Indian",
          "Desserts"
        ],
        "tags": [
          
        ],
        "costForTwo": 50000,
        "costForTwoString": "₹500 FOR TWO",
        "deliveryTime": 30,
        "minDeliveryTime": 30,
        "maxDeliveryTime": 30,
        "slaString": "30 MINS",
        "lastMileTravel": 2.799999952316284,
        "slugs": {
          "restaurant": "dum-safar-biryani-nvr-central-nellore-area",
          "city": "nellore"
        },
        "cityState": "120",
        "address": "NVR Central, 4th Floor, Grand Trunk Road, above Dr. Agarwal Eye Hospital, Saraswathi Nagar, Rajajipuram, Nellore, Andhra Pradesh 524004",
        "locality": "Grand Trunk Road",
        "parentId": 351013,
        "unserviceable": true,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 2100,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 2100,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2100",
          "icon": ""
        },
        "availability": {
          "opened": false,
          "nextOpenMessage": "Opens next at 11 am, today",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "2.7 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹549",
          "discountTag": "FLAT DEAL",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "629409",
          "deliveryTime": 30,
          "minDeliveryTime": 30,
          "maxDeliveryTime": 30,
          "lastMileTravel": 2.799999952316284,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE_WITH_BANNER",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.5",
        "totalRatings": 20,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "385297",
        "name": "Tea Time",
        "uuid": "06aa6766-1898-44fc-a8f4-712de92d6148",
        "city": "120",
        "area": "Nellore",
        "totalRatingsString": "100+ ratings",
        "cloudinaryImageId": "wxzwfqvmkjtfo3hhefqu",
        "cuisines": [
          "Beverages",
          "Ice Cream"
        ],
        "tags": [
          
        ],
        "costForTwo": 10000,
        "costForTwoString": "₹100 FOR TWO",
        "deliveryTime": 18,
        "minDeliveryTime": 18,
        "maxDeliveryTime": 18,
        "slaString": "18 MINS",
        "lastMileTravel": 0.5,
        "slugs": {
          "restaurant": "tea-time-nellore-area-nellore-area",
          "city": "nellore"
        },
        "cityState": "120",
        "address": "Childrens Park Rd, Ramji Nagar, Nellore, Ramji Nagar, Nellore, Andhra Pradesh 524002",
        "locality": "Childrens Park Road",
        "parentId": 202784,
        "unserviceable": true,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 2100,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 2100,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2100",
          "icon": ""
        },
        "availability": {
          "opened": false,
          "nextOpenMessage": "Opens next at 7 am, today",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "0.5 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "385297",
          "deliveryTime": 18,
          "minDeliveryTime": 18,
          "maxDeliveryTime": 18,
          "lastMileTravel": 0.5,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE_WITH_BANNER",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.6",
        "totalRatings": 100,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "578675",
        "name": "Simhapuri Family Dhaba",
        "uuid": "5f290ee4-5433-487b-8212-d8f499c26ae4",
        "city": "120",
        "area": "Nellore",
        "totalRatingsString": "100+ ratings",
        "cloudinaryImageId": "r4c1lc3xnbaxjknbfmsf",
        "cuisines": [
          "North Indian",
          "Indian",
          "Biryani",
          "Seafood",
          "Tandoor",
          "Snacks"
        ],
        "tags": [
          
        ],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 23,
        "minDeliveryTime": 23,
        "maxDeliveryTime": 23,
        "slaString": "23 MINS",
        "lastMileTravel": 3.700000047683716,
        "slugs": {
          "restaurant": "simhapuri-family-dhaba-stonehouse-pet-stonehouse-pet",
          "city": "nellore"
        },
        "cityState": "120",
        "address": "NO.654/3,SRI SAI KRISHNA  NAGAR, OPP: NTR NAGAR BHARAT PETROL  BUNK, Nellore, Nellore, Andhra  Pradesh-524002",
        "locality": "Sri Sai Krishna Nagar",
        "parentId": 264992,
        "unserviceable": true,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 2100,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 2100,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2100",
          "icon": ""
        },
        "availability": {
          "opened": false,
          "nextOpenMessage": "Opens next at 12 noon, today",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "3.7 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "578675",
          "deliveryTime": 23,
          "minDeliveryTime": 23,
          "maxDeliveryTime": 23,
          "lastMileTravel": 3.700000047683716,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE_WITH_BANNER",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.0",
        "totalRatings": 100,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "172889",
        "name": "SivaPriya Hot Foods",
        "uuid": "8f17d57e-7105-4923-a1a7-fc50d9a39282",
        "city": "120",
        "area": "Nellore",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "wuw6zwc3rks9voq0af93",
        "cuisines": [
          "South Indian"
        ],
        "tags": [
          
        ],
        "costForTwo": 10000,
        "costForTwoString": "₹100 FOR TWO",
        "deliveryTime": 24,
        "minDeliveryTime": 24,
        "maxDeliveryTime": 24,
        "slaString": "24 MINS",
        "lastMileTravel": 1.100000023841858,
        "slugs": {
          "restaurant": "sivapriya-hot-foods-chinna-bazar-chinna-bazar",
          "city": "nellore"
        },
        "cityState": "120",
        "address": "17/1/235, Yadlavari Street, Near Sivapriya Center, Nellore",
        "locality": "Yadlavari Street",
        "parentId": 12583,
        "unserviceable": true,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 2100,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 2100,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2100",
          "icon": ""
        },
        "availability": {
          "opened": false,
          "nextOpenMessage": "Opens next at 7 am, today",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1.1 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "172889",
          "deliveryTime": 24,
          "minDeliveryTime": 24,
          "maxDeliveryTime": 24,
          "lastMileTravel": 1.100000023841858,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE_WITH_BANNER",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.9",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    }
  ];

const RestCard = (props) => {
    const {resList} = props;
    return(
        <div className="res-conatiner">
        <img className="image" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+resList.data.cloudinaryImageId} alt="image here"></img>
        <h3>{resList.data.name}</h3>
        <h4>{resList.data.cuisines.join(",")}</h4>
        <h4>{resList.data.avgRating}</h4>
        </div>
    );
};

const Body = () => {
    return (
        <div className="res-cards">
           {resobj.map((restaurant) => (<RestCard key ={restaurant.data.id} resList={restaurant}/>))}
       </div>      
    );
   
};

const App = () => {
    return(        
        <div>
         <Header/>   
         <Body/>   
        </div>  
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);