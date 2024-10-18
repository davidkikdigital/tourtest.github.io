var APP_DATA = {
  "scenes": [
    {
      "id": "0-360_photo_originalmaxres",
      "name": "360_Photo_OriginalMaxRes",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "yaw": 0.8860292560016347,
        "pitch": 0.06386028397066212,
        "fov": 1.5284933332634072
      },
      "linkHotspots": [
        {
          "yaw": 1.53449443497877,
          "pitch": 0.039901744351555024,
          "rotation": 0,
          "target": "1-test_room"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.021346631968795,
          "pitch": 0.0846610113230355,
          "title": "Vietnamese Restaurant<br>",
          "text": "Soups and food<br>"
        }
      ]
    },
    {
      "id": "1-test_room",
      "name": "test_room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 2.933237510619607,
        "pitch": 0.24744304339446366,
        "fov": 1.5284933332634072
      },
      "linkHotspots": [
        {
          "yaw": -0.1752891002259993,
          "pitch": 0.19413797126453325,
          "rotation": 0,
          "target": "0-360_photo_originalmaxres"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.5240044350782593,
          "pitch": 0.15490747253856796,
          "title": "Mark",
          "text": "This is Mark<br>"
        }
      ]
    }
  ],
  "name": "Test Tour",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
