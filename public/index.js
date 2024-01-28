import sharp from 'sharp'

const paldeck = [
  {
    number: 1,
    name: 'Lamball',
    power: 1470
  },
  {
    number: 2,
    name: 'Cattiva',
    power: 1460
  },
  {
    number: 3,
    name: 'Chikipi',
    power: 1500
  },
  {
    number: 4,
    name: 'Lifmunk',
    power: 1430
  },
  {
    number: 5,
    name: 'Foxparks',
    power: 1400
  },
  {
    number: 6,
    name: 'Fuack',
    power: 1330
  },
  {
    number: 7,
    name: 'Sparkit',
    power: 1410
  },
  {
    number: 8,
    name: 'Tanzee',
    power: 1250
  },
  {
    number: 9,
    name: 'Rooby',
    power: 1155
  },
  {
    number: 10,
    name: 'Pengullet',
    power: 1350
  },
  {
    number: 11,
    name: 'Penking',
    power: 520
  },
  {
    number: 12,
    name: 'Jolthog',
    power: 1370
  },
  {
    number: 12,
    name: 'Jolthog Cryst',
    power: 1360
  },
  {
    number: 13,
    name: 'Gumoss',
    power: 1240
  },
  {
    number: 13,
    name: 'Gumoss (Special)',
    power: 1240
  },
  {
    number: 14,
    name: 'Vixy',
    power: 1450
  },
  {
    number: 15,
    name: 'Hoocrates',
    power: 1390
  },
  {
    number: 16,
    name: 'Teafant',
    power: 1490
  },
  {
    number: 17,
    name: 'Depresso',
    power: 1380
  },
  {
    number: 18,
    name: 'Cremis',
    power: 1455
  },
  {
    number: 19,
    name: 'Daedream',
    power: 1230
  },
  {
    number: 20,
    name: 'Rushoar',
    power: 1130
  },
  {
    number: 21,
    name: 'Nox',
    power: 1180
  },
  {
    number: 22,
    name: 'Fuddler',
    power: 1220
  },
  {
    number: 23,
    name: 'Killamari',
    power: 1290
  },
  {
    number: 24,
    name: 'Mau',
    power: 1480
  },
  {
    number: 24,
    name: 'Mau Cryst',
    power: 1440
  },
  {
    number: 25,
    name: 'Celaray',
    power: 870
  },
  {
    number: 26,
    name: 'Direhowl',
    power: 1060
  },
  {
    number: 27,
    name: 'Tocotoco',
    power: 1340
  },
  {
    number: 28,
    name: 'Flopie',
    power: 1280
  },
  {
    number: 29,
    name: 'Mozzarina',
    power: 910
  },
  {
    number: 30,
    name: 'Bristla',
    power: 1320
  },
  {
    number: 31,
    name: 'Gobfin Ignis',
    power: 1100
  },
  {
    number: 31,
    name: 'Gobfin',
    power: 1090
  },
  {
    number: 32,
    name: 'Hangyu Cryst',
    power: 1422
  },
  {
    number: 32,
    name: 'Hangyu',
    power: 1420
  },
  {
    number: 33,
    name: 'Mossanda',
    power: 430
  },
  {
    number: 33,
    name: 'Mossanda Lux',
    power: 390
  },
  {
    number: 34,
    name: 'Woolipop',
    power: 1190
  },
  {
    number: 35,
    name: 'Caprity',
    power: 930
  },
  {
    number: 36,
    name: 'Melpaca',
    power: 890
  },
  {
    number: 37,
    name: 'Eikthyrdeer',
    power: 920
  },
  {
    number: 37,
    name: 'Eikthyrdeer Terra',
    power: 900
  },
  {
    number: 38,
    name: 'Nitewing',
    power: 420
  },
  {
    number: 39,
    name: 'Ribunny',
    power: 1310
  },
  {
    number: 40,
    name: 'Incineram',
    power: 590
  },
  {
    number: 40,
    name: 'Incineram Noct',
    power: 580
  },
  {
    number: 41,
    name: 'Cinnamoth',
    power: 490
  },
  {
    number: 42,
    name: 'Arsox',
    power: 790
  },
  {
    number: 43,
    name: 'Dumud',
    power: 895
  },
  {
    number: 44,
    name: 'Cawgnito',
    power: 1080
  },
  {
    number: 45,
    name: 'Leezpunk Ignis',
    power: 1140
  },
  {
    number: 45,
    name: 'Leezpunk',
    power: 1120
  },
  {
    number: 46,
    name: 'Loupmoon',
    power: 950
  },
  {
    number: 47,
    name: 'Galeclaw',
    power: 1030
  },
  {
    number: 48,
    name: 'Robinquill',
    power: 1020
  },
  {
    number: 48,
    name: 'Robinquill Terra',
    power: 1000
  },
  {
    number: 49,
    name: 'Gorirat',
    power: 1040
  },
  {
    number: 50,
    name: 'Beegarde',
    power: 1070
  },
  {
    number: 51,
    name: 'Elizabee',
    power: 330
  },
  {
    number: 52,
    name: 'Grintale',
    power: 510
  },
  {
    number: 53,
    name: 'Swee',
    power: 1300
  },
  {
    number: 54,
    name: 'Sweepa',
    power: 410
  },
  {
    number: 55,
    name: 'Chillet',
    power: 800
  },
  {
    number: 56,
    name: 'Univolt',
    power: 680
  },
  {
    number: 57,
    name: 'Foxcicle',
    power: 760
  },
  {
    number: 58,
    name: 'Pyrin',
    power: 360
  },
  {
    number: 58,
    name: 'Pyrin Noct',
    power: 240
  },
  {
    number: 59,
    name: 'Reindrix',
    power: 880
  },
  {
    number: 60,
    name: 'Rayhound',
    power: 740
  },
  {
    number: 61,
    name: 'Kitsun',
    power: 830
  },
  {
    number: 62,
    name: 'Dazzi',
    power: 1210
  },
  {
    number: 63,
    name: 'Lunaris',
    power: 1110
  },
  {
    number: 64,
    name: 'Dinossom',
    power: 820
  },
  {
    number: 64,
    name: 'Dinossom Lux',
    power: 810
  },
  {
    number: 65,
    name: 'Surfent',
    power: 560
  },
  {
    number: 65,
    name: 'Surfent Terra',
    power: 550
  },
  {
    number: 66,
    name: 'Maraith',
    power: 1150
  },
  {
    number: 67,
    name: 'Digtoise',
    power: 850
  },
  {
    number: 68,
    name: 'Tombat',
    power: 750
  },
  {
    number: 69,
    name: 'Lovander',
    power: 940
  },
  {
    number: 70,
    name: 'Flambelle',
    power: 1405
  },
  {
    number: 71,
    name: 'Vanwyrm',
    power: 660
  },
  {
    number: 71,
    name: 'Vanwyrm Cryst',
    power: 620
  },
  {
    number: 72,
    name: 'Bushi',
    power: 640
  },
  {
    number: 73,
    name: 'Beakon',
    power: 220
  },
  {
    number: 74,
    name: 'Ragnahawk',
    power: 380
  },
  {
    number: 75,
    name: 'Katress',
    power: 700
  },
  {
    number: 76,
    name: 'Wixen',
    power: 1160
  },
  {
    number: 77,
    name: 'Verdash',
    power: 990
  },
  {
    number: 78,
    name: 'Vaelet',
    power: 1050
  },
  {
    number: 79,
    name: 'Sibelyx',
    power: 450
  },
  {
    number: 80,
    name: 'Elphidran',
    power: 540
  },
  {
    number: 80,
    name: 'Elphidran Aqua',
    power: 530
  },
  {
    number: 81,
    name: 'Kelpsea Ignis',
    power: 1270
  },
  {
    number: 81,
    name: 'Kelpsea',
    power: 1260
  },
  {
    number: 82,
    name: 'Azurobe',
    power: 500
  },
  {
    number: 83,
    name: 'Cryolinx',
    power: 130
  },
  {
    number: 84,
    name: 'Blazehowl',
    power: 710
  },
  {
    number: 84,
    name: 'Blazehowl Noct',
    power: 670
  },
  {
    number: 85,
    name: 'Relaxaurus',
    power: 280
  },
  {
    number: 85,
    name: 'Relaxaurus Lux',
    power: 270
  },
  {
    number: 86,
    name: 'Broncherry',
    power: 860
  },
  {
    number: 86,
    name: 'Broncherry Aqua',
    power: 840
  },
  {
    number: 87,
    name: 'Petallia',
    power: 780
  },
  {
    number: 88,
    name: 'Reptyro',
    power: 320
  },
  {
    number: 88,
    name: 'Ice Reptyro',
    power: 230
  },
  {
    number: 89,
    name: 'Kingpaca',
    power: 470
  },
  {
    number: 89,
    name: 'Ice Kingpaca',
    power: 440
  },
  {
    number: 90,
    name: 'Mammorest',
    power: 300
  },
  {
    number: 90,
    name: 'Mammorest Cryst',
    power: 290
  },
  {
    number: 91,
    name: 'Wumpo Botan',
    power: 480
  },
  {
    number: 91,
    name: 'Wumpo',
    power: 460
  },
  {
    number: 92,
    name: 'Warsect',
    power: 340
  },
  {
    number: 93,
    name: 'Fenglope',
    power: 980
  },
  {
    number: 94,
    name: 'Felbat',
    power: 1010
  },
  {
    number: 95,
    name: 'Quivern',
    power: 350
  },
  {
    number: 96,
    name: 'Blazamut',
    power: 10
  },
  {
    number: 97,
    name: 'Helzephyr',
    power: 190
  },
  {
    number: 98,
    name: 'Astegon',
    power: 150
  },
  {
    number: 99,
    name: 'Menasting',
    power: 260
  },
  {
    number: 100,
    name: 'Anubis',
    power: 570
  },
  {
    number: 101,
    name: 'Jormuntide Ignis',
    power: 315
  },
  {
    number: 101,
    name: 'Jormuntide',
    power: 310
  },
  {
    number: 102,
    name: 'Suzaku',
    power: 50
  },
  {
    number: 102,
    name: 'Suzaku Aqua',
    power: 30
  },
  {
    number: 103,
    name: 'Grizzbolt',
    power: 200
  },
  {
    number: 104,
    name: 'Lyleen',
    power: 250
  },
  {
    number: 104,
    name: 'Lyleen Noct',
    power: 210
  },
  {
    number: 105,
    name: 'Faleris',
    power: 370
  },
  {
    number: 106,
    name: 'Orserk',
    power: 140
  },
  {
    number: 107,
    name: 'Shadowbeak',
    power: 60
  },
  {
    number: 108,
    name: 'Paladius',
    power: 80
  },
  {
    number: 109,
    name: 'Necromus',
    power: 70
  },
  {
    number: 110,
    name: 'Frostallion',
    power: 120
  },
  {
    number: 110,
    name: 'Frostallion Noct',
    power: 100
  },
  {
    number: 111,
    name: 'Jetragon',
    power: 90
  }
]

paldeck.forEach((pal) => {
  if (pal.name === 'Elphidran Aqua') return

  sharp(`${pal.name}.png`)
    .toFormat('webp')
    .toFile(`${pal.name}.webp`, (err, info) => {
      if (err) {
        console.error('Error occurred:', err)
      } else {
        console.log('Image converted successfully:', info)
      }
    })
})
