export const products = [
    // Cameras
    {
        id: 1,
        name: "Canon EOS R50 + RF-S 18-45mm f/4.5-6.3 IS STM",
        price: 729.99,
        image: "/second-upgrade/assets/CANON EOS R50 + RF-S 18-45MM F4.5-6.3 IS STM.png",
        category: "Camera"
    },
    {
        id: 2,
        name: "Sony Alpha 7 III - Full-Frame 35mm Image Sensor",
        price: 1299.00,
        image: "/second-upgrade/assets/Sony ILCE-7M3 Alpha 7 III with 35mm full-frame image sensor.png",
        category: "Camera"
    },
    {
        id: 3,
        name: "Sony FX30 - Compact Cinema Line Gateway Camera",
        price: 1599.00,
        image: "/second-upgrade/assets/Sony ILME-FX30 Compact Cinema Line Gateway Camera.png",
        category: "Camera"
    },
    { 
        id: 4,
        name: "Sony ZV-E10 II Mirrorless Camera with 16-50mm Lens",
        price: 998.00,
        image: "/second-upgrade/assets/Sony ZV-E10 II Mirrorless Camera with 16-50mm Lens (ZV-E10M2K).png",
        category: "Camera"
    },

    // Lighting Equipment
    {
        id: 5,
        name: "Patona Premium RGB LED Panel SL-C80R",
        price: 89.99,
        image: "/second-upgrade/assets/LUMIERE PATONA PREMIUM 4245 SL-C80R RGB.png",
        category: "Lighting"
    },
    {
        id: 6,
        name: "RGB LED Panel FT-650R",
        price: 179.99,
        image: "/second-upgrade/assets/PANNEAU LED RGB FT-650R.png",
        category: "Lighting"
    },
    {
        id: 7,
        name: "Lighting Support Stand LS-8008CK",
        price: 45.99,
        image: "/second-upgrade/assets/SUPPORT D'ECLAIRAGE LS-8008CK.png",
        category: "Lighting"
    },

    // Studio Equipment
    {
        id: 8,
        name: "Mini Photo Studio 70x70x70cm",
        price: 39.99,
        image: "/second-upgrade/assets/MINI STUDIO PHOTO 70X70X70CM.png",
        category: "Studio"
    },
    {
        id: 9,
        name: "Black Paper Backdrop",
        price: 24.99,
        image: "/second-upgrade/assets/FOND PAPIER BD BLACK .png",
        category: "Studio"
    },
    {
        id: 10,
        name: "Green Paper Backdrop (Chroma Key)",
        price: 24.99,
        image: "/second-upgrade/assets/FOND PAPIER BD VERI GREEN.png",
        category: "Studio"
    },
    {
        id: 11,
        name: "Removable Background Support VS-B808C",
        price: 69.99,
        image: "/second-upgrade/assets/SUPPORT DE FOND AMOVIBLE VS-B808C.png",
        category: "Studio"
    },
    {
        id: 12,
        name: "Vertical L-Mount Support - E-Image PL01",
        price: 35.99,
        image: "/second-upgrade/assets/SUPPORT EN L VERTICAL E-Image - PL01.png",
        category: "Studio"
    },

    // Accessories & Gimbals
    {
        id: 13,
        name: "DJI Osmo Mobile 7 Pro - Smartphone Gimbal",
        price: 169.00,
        image: "/second-upgrade/assets/DJI OSMO MOBILE 7P.png",
        category: "Gimbal"
    },
    {
        id: 14,
        name: "Manfrotto PIXI Clamp for Smartphone",
        price: 29.99,
        image: "/second-upgrade/assets/PIXI CLAMP MANFROTTO MCPIXI POUR SMARTPHONE.png",
        category: "Accessory"
    },

    // Cables & Connectivity
    {
        id: 15,
        name: "USB-C to Lightning Cable (2m)",
        price: 19.99,
        image: "/second-upgrade/assets/Cable de USB-C a conector Lightning (2 m).png",
        category: "Cable"
    },
    {
        id: 16,
        name: "20W USB-C Power Adapter",
        price: 19.99,
        image: "/second-upgrade/assets/Adaptador de corriente USB-C de 20 W.png",
        category: "Accessory"
    },
    {
        id: 17,
        name: "HDMI to Micro HDMI Cable (2m) - Sbox",
        price: 12.99,
        image: "/second-upgrade/assets/Câble SBOX HDMI mâle vers Micro HDMI mâle 2 mètres - Noir.png",
        category: "Cable"
    },
    {
        id: 18,
        name: "4K HDMI to USB Video Capture Card",
        price: 24.99,
        image: "/second-upgrade/assets/Video Capture Card, HDMI to USB, Audio Video Capture Cards, 4K30fps.png",
        category: "Accessory"
    },

    // Power & Storage
    {
        id: 19,
        name: "EBL 8x AA Rechargeable Batteries (2800mAh) with Charger",
        price: 22.99,
        image: "/second-upgrade/assets/Pack EBL 8 Piles Rechargeables AA 2800mAh Avec Chargeur - Pile.png",
        category: "Power"
    },
    {
        id: 20,
        name: "Patona Dual USB Charger for Sony NP-BN1",
        price: 15.99,
        image: "/second-upgrade/assets/CHARGEUR PATONA DOUBLE USB 1954 POUR SONY NP-BN1.png",
        category: "Power"
    },
    {
        id: 21,
        name: "SanDisk ImageMate PRO USB-C Multi-Card Reader",
        price: 39.99,
        image: "/second-upgrade/assets/Lecteur enregistreur multicartes SanDisk ImageMate PRO USB C.png",
        category: "Accessory"
    },

    // Protection
    {
        id: 22,
        name: "iPhone 13 Pro Max - Air Bag Explosion-Proof Screen Protector",
        price: 12.99,
        image: "/second-upgrade/assets/Protection Ecran pour Iphone 13 Pro Max - AIR BAG GLASS - EEXPLSION -PROOF 2.png",
        category: "Protection"
    },
    {
        id: 23,
        name: "iPhone 13 Pro - Rear Camera Lens Protector (Black)",
        price: 9.99,
        image: "/second-upgrade/assets/Protection caméra arrière iPhone 13 Pro Black.png",
        category: "Protection"
    }
];

export const categories = [...new Set(products.map(p => p.category))].sort();
