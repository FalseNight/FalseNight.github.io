import Rainfall from '../components/Portfolio/Rainfall/Rainfall';
import rainfallImage from '../assets/images/portfolio/rainfall8.png';

import LastHymn from '../components/Portfolio/Last Hymn/LastHymn';
import lastHymnImage from '../assets/images/portfolio/lasthymn.jpg';

import Soulstealer from '../components/Portfolio/Soulstealer/Soulstealer';
import soulstealerImage from '../assets/images/portfolio/soulstealer.jpg';

export default [
    {
        title: "Rainfall ~ Do You Still Like This World?",
        thumbnail: rainfallImage,
        route:  "/rainfall",
        component: Rainfall,
        tags: [ "rainfall" ]
      },
    {
        title: "Last Hymn",
        thumbnail: lastHymnImage,
        route:  "/last-hymn",
        component: LastHymn,
        tags: [ "last hymn" ],
      },
    {
        title: "Soulstealer",
        thumbnail: soulstealerImage,
        route:  "/soulstealer",
        component: Soulstealer,
        tags: [ "soulstealer" ],
      }
    ];