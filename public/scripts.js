import { demoData } from "./data/index.js";

// Event Demos
const configurator = document.querySelector('onfigr');

configurator.addEventListener('save-design', e => {
  console.log('SAVE DESIGN -- Save Design Button Pressed');
});

configurator.addEventListener('nav-back', e => {
  console.log('BACK -- Back button Pressed');
});

configurator.addEventListener('activate-summary', e => {
  console.log('SUMMARY -- Summary / Continue Button Pressed');
  const summary = configurator.api.getSummary()

  // const camInfo = configurator.api.getCameraPosition()
  console.log(summary);
  // console.log(camInfo);

  const newCam = {
    "theta": 0.810225651880699,
    "phi": 1.5827982974824453,
    "zoom": 0.5
  }

  // configurator.api.setCameraPosition(newCam.theta, newCam.phi, newCam.zoom)
});

configurator.addEventListener('design-team', e => {
  console.log('DESIGN TEAM -- Design Team Button Pressed');
});

// handling key presses 1, 2 & 3 to set different presets
const roomPresets = [
  {
    key: '074E06070Z0B0407AF1E0M090M491D020I04AF00',
    design: 'One Time Paradise',
    room: 'Primary bathroom'
  },
  {
    key: '0A320H3U340400055R0C0N0H0N471D020J055R0C',
    design: 'Modern Geometry',
    room: 'Guest bathroom'
  },
  {
    key: '0A3W0G1S0Z020006C5160K150K481D020G07C505',
    design: 'Heirloom',
    room: 'Downstairs bathroom'
  }
];

// For number 7, 8, 9 call sku related api calls
const skuApiCalls = {
  6: [
    'KAI-VS61-NT',
    'FRM1033251',
    'K-14406-4-BL',
    {
      zone: 'fwt',
      sku: 'MA712424MZ1L',
      pattern: 'Stacked',
      colour: 'Polished'
    }
  ],
  7: {
    zone: 'fwt',
    sku: 'TLCFRZZGRN',
    type: 'fwt',
    pattern: 'Hexagon'
  },
  8: ['K-14406-4-BN', '507845']
};

// listen for key press for numbers 1-9
document.addEventListener('keydown', e => {
  if (e.keyCode >= 49 && e.keyCode <= 57) {
    const index = e.keyCode - 49;
    console.log(index);

    if (roomPresets[index]) {
      configurator.api.setConfiguration(roomPresets[index].key);
      configurator.api.setDefaultConfig(roomPresets[index].key);

      configurator.api.setRoomName(roomPresets[index].room);

      configurator.api.setDesignName(roomPresets[index].design);
    }

    // For number 7,8,9 call sku related api calls
    if (index === 6) {
      configurator.api.setSkuList(skuApiCalls[index]);
    }
    if (index === 7) {
      // configurator.api.setSku(skuApiCalls[index]);

      const showerWall = { zone: 'Shower_Wall_Tiles', sku: 'DECMAKMIG2510M', pattern: 'Stacked Horizontal' };
      const showerFloor = { zone: 'Shower_Floor_Tiles', sku: 'DECMAKMIG2RMOM', pattern: 'Hexagon' };
      // const wallLights = { sku: 'FLO782856', placement: 'Above' };
      const wallLights = { zone: 'Wall_Lights', sku: 'FLO782856', placement: "Above" }
      // configurator.api.setSku(showerWall);
      // configurator.api.setSku(showerFloor);

      // configurator.api.setSku(wallLights);

      configurator.api.setSku('355e7ff2-a3bd-4aab-b44f-b98f52cc28f3');
    }
    if (index === 8) {
      // configurator.api.setSkuList(skuApiCalls[index]);

      const panels = [
        "Vanity",
        "Mirrors",
        "Lighting",
        "Fixtures",
        "Toilet",
        "Tub",
        "Walls",
        "Floor",
        "Shower tile",
        "Storage"
      ]

      configurator.api.openPanel(panels[9])
    }
  }
});


const skuListNWP = [
  '210-V59D-WW-GW', // 59" Vanity
  '531395', // Infinity Black Rectangular Wall Mirror 24"x36"
  'TLG813007', // Joni Wall Light 13" Matte Black
  'K-14402-4A-BL', // Purist® Single-handle Bathroom Sink Faucet with Straight Lever Handle
  { zone: 'Shower_Wall_Tiles', sku: 'DECMAKMIG2510M', pattern: 'Stacked Horizontal' },
  { zone: 'Shower_Floor_Tiles', sku: 'DECMAKMIG2RMOM', pattern: 'Hexagon' }
]

configurator.addEventListener('scene-data-loaded', e => {
  console.log('scene-data-loaded', e);

  const summary = configurator.api.setSkuPricesLeadTime(demoData);

  configurator.api.setDesignName("Northwest Passage");
  configurator.api.setRoomName("Master Bath");
  // configurator.api.setConfiguration(roomPresets[0].key);
  // configurator.api.setDefaultConfig(roomPresets[0].key);
  // configurator.api.setSkuList(skuListNWP);

  const wallLights = { zone: 'Wall_Lights', sku: 'TLG813007', placement: "Above" };

  configurator.api.setSku(wallLights);

  console.log(summary);
  console.log('SCENE DATA LOADED');
});