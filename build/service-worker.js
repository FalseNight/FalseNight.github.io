"use strict";var precacheConfig=[["/index.html","cf9db96097fa3d8e253fb036d5181f47"],["/static/css/main.281571e7.css","51e9b2cab6132bb4ca60382b048def0c"],["/static/js/main.bcb8e7b9.js","6807ef28b2b7758c37224413129ba275"],["/static/media/3-lessons-learned-from-classic-wow.31710da7.jpg","31710da78b7e581777cd046f8200d396"],["/static/media/City at Night.cd293861.png","cd2938614bb430c864eae88e13558771"],["/static/media/Deck Building.e5d36ea6.jpg","e5d36ea6c1d5e03bd8f8be1f00cab12f"],["/static/media/Dragon_Class.2c460439.png","2c460439498ff528ce3c44397d0c76f6"],["/static/media/Dragon_Test.b53413a6.png","b53413a6707047e58efacf5ab5d158d4"],["/static/media/Dragon_Test_Final.867d24c9.png","867d24c9514acc5203ea4917ef6e0bb1"],["/static/media/Game_Class.f3e19f6c.png","f3e19f6ccc15fa7d1ea0981d2f9be721"],["/static/media/Goal.8751f3a8.png","8751f3a8b5863521a58ffddcacdbfd2a"],["/static/media/Height Chart.4290f7fe.png","4290f7feac1dfe4eb1b5c196d702e1b1"],["/static/media/New Map.07679c49.png","07679c4909912b1104bbfed24723f5d4"],["/static/media/Playable Mari.06b62c8c.png","06b62c8c2b00e6639aa643996c7082af"],["/static/media/Title Screen.3f2770d4.png","3f2770d40fcd79eace0dd2e40d95a72b"],["/static/media/active_choice_context.0e62b673.png","0e62b67385bd65c6c85fdeef99856203"],["/static/media/active_choice_example.077a4968.png","077a4968d6bef5ce61e88de4156a88f4"],["/static/media/active_choice_start.3576ab0d.png","3576ab0dbefeb821e27a4e968fff16a3"],["/static/media/active_choice_timer.58667556.png","58667556b6090d105bb77e907d6718e7"],["/static/media/akane.7ccb5848.png","7ccb58483344aa511b23741dbf4d6fce"],["/static/media/akane.d56bb845.png","d56bb84577744b14292a0a43e4595e71"],["/static/media/alley.08831265.png","088312650ef77f6fa500cac38e3b7c8d"],["/static/media/an-admirals-pride.753ee3a5.jpg","753ee3a5bfa63a77cdaaadfcddf8af95"],["/static/media/apartment.dc5e766c.png","dc5e766c647ee65e7c14ef2bdaebbb47"],["/static/media/arifureta.e4f3b48e.jpg","e4f3b48e16e7b79862a65531697eab89"],["/static/media/autochess.b9c177c0.jpg","b9c177c0b945092b8db553bbdf86b6ca"],["/static/media/bad-pixel-perfection.40ff97fb.png","40ff97fb3dc8702ae8fda18fb1d76171"],["/static/media/bad-sprite-boundary.576f96b2.png","576f96b2120d132b93730df6c11818e8"],["/static/media/block.5d932d67.png","5d932d678b795c497944d2bb6de0c541"],["/static/media/block2.15e8194e.png","15e8194ea209e143201227db12eeb5a5"],["/static/media/block3.8415df7d.png","8415df7d0291197fd24e18bd04ede145"],["/static/media/block4.480d7b34.png","480d7b345405681424bfa165d80e97d5"],["/static/media/bookdown.07177a78.png","07177a78daadf53d2cf3f87cfc0d9396"],["/static/media/bookdowninside.35b7f8c5.png","35b7f8c54666165afffb715be36225fb"],["/static/media/bullettime.2926ae4b.png","2926ae4b35dbcbd99d18fe1ec0cd7d89"],["/static/media/bunny-girl-senpai.5fdfe138.png","5fdfe138d5dceac5f29e62bb011b0041"],["/static/media/busts.83b7c2fc.png","83b7c2fc3adf8bb4e69d9203c0839f50"],["/static/media/card-game-archetypes.7ede1ac8.png","7ede1ac8bf3bf4f82c0e3f485b8df631"],["/static/media/cards.cf1d03e9.jpg","cf1d03e947f153d81d9e8cf4f2e47b2c"],["/static/media/celeste.a9573377.png","a9573377511092436d199b5c59ee661d"],["/static/media/cherryblossom.8d36eaae.png","8d36eaae7760c77400077cc7ee56cd92"],["/static/media/chicken.31710da7.jpg","31710da78b7e581777cd046f8200d396"],["/static/media/choices.3e40a52e.jpg","3e40a52ee23cbe2710bd55a06e140bb9"],["/static/media/chuuni.05e70c29.png","05e70c29bfbbb8fc995997a74ee9c549"],["/static/media/city-rework.e08b9940.png","e08b9940199acd5545947715b9826e5b"],["/static/media/city.201ec7a1.png","201ec7a11197132c9d0a937d10220acd"],["/static/media/city.dbdb5fe8.png","dbdb5fe8cf736f1aff205297f4fa40ca"],["/static/media/classroom.bb2a929e.png","bb2a929efb69095adeda9b6f2dd8e4ea"],["/static/media/clinic.565a7b42.png","565a7b42d957e7a418e30ba2b116b2c9"],["/static/media/coffeeshop.e2e7112c.png","e2e7112c55cf40843ae95aca7a8b4d53"],["/static/media/combat idle.a7cdb53c.gif","a7cdb53c73ce4397b684a20906434de5"],["/static/media/combat-intro.7f1ebaf2.png","7f1ebaf22066faa40c788c767eb47d64"],["/static/media/combat.0c4da337.png","0c4da33710de7323c3858e363defbe3f"],["/static/media/combat.3b636162.png","3b63616262fb790678befbfab82373c8"],["/static/media/current-city-lights.6c5faaf3.png","6c5faaf3c431c296888f32e53a865ab8"],["/static/media/darwin.a773c384.jpg","a773c3843e6ff92c025bfa8e105f1d86"],["/static/media/decklist.6c436cbb.png","6c436cbb8b38bb00f263d0ee72ba3921"],["/static/media/decorator-pattern.97b1bc42.png","97b1bc42678f3dd246c5df37994bef91"],["/static/media/deltarune.da25dcf0.png","da25dcf022f1cb7971ffdfecc58504fd"],["/static/media/detention.6b1c4014.png","6b1c401455aa0b452163b719ee836607"],["/static/media/discoelysium.1e770df8.jpg","1e770df89a845e80c25090edc41e40c8"],["/static/media/dungeon.b87401fe.png","b87401fe24bdb472c16d99b952ae790c"],["/static/media/emi apartment.cdfd4126.png","cdfd41268fe9e074f45e92c1ef2e77e6"],["/static/media/end.e9b01112.png","e9b011125d0762f232501b80016dd52b"],["/static/media/equip.0e894265.png","0e89426538bfda2646635bc38ff6d472"],["/static/media/final busts.4de65489.png","4de65489d2d75b43d75c469c3ec9f888"],["/static/media/final implementation.95436596.png","9543659629e8d79cdce15646f1400a1a"],["/static/media/finalTest.97b1bc42.png","97b1bc42678f3dd246c5df37994bef91"],["/static/media/flavor.2491ae28.png","2491ae2826b41930e3703608ee4334e1"],["/static/media/flourish.ff9952f9.png","ff9952f9da7b25a8320e7200de470f7f"],["/static/media/frappuccino.3fa54f30.png","3fa54f3007258bf1d654754386eab02e"],["/static/media/fridge.041aea4f.jpg","041aea4f445527f50bf91bd443321906"],["/static/media/gab.a40313e4.png","a40313e4098e20ea138b138957ee7d91"],["/static/media/gekkou.f3ab35c1.png","f3ab35c1c443b61f28a7e9240afb822f"],["/static/media/goldennoodleinside.5f2bcc22.png","5f2bcc2229de31273e79ef9fa344c11b"],["/static/media/goldennoodleoutside.8a5acae6.png","8a5acae6d6ef7345f699bcc66c24c44b"],["/static/media/hole.e2f8f027.png","e2f8f027384f049419fbe6e16f27205c"],["/static/media/horizon.dc6aec4d.png","dc6aec4d368360203c08415545fa6c20"],["/static/media/how-we-design-rainfall-characters.95436596.png","9543659629e8d79cdce15646f1400a1a"],["/static/media/initial busts.6ea132e7.png","6ea132e7cdcafdc7aad42405fbc96461"],["/static/media/initial implementation.34e3faee.png","34e3faeeebc5665252699d107699eb65"],["/static/media/initialTest.d88175d2.png","d88175d20fbb29bfa7154b28c741d52e"],["/static/media/insights.80fde08b.png","80fde08b58de09d61c67d8eca4d6dbe5"],["/static/media/intro.0f64046c.png","0f64046cc2fd15741ff8892dd4c3e424"],["/static/media/intro.2d3893b1.jpg","2d3893b11e948237b15089e5d71080a4"],["/static/media/investigations.9c5a8d57.png","9c5a8d57995485857866e3fb3d23d2a0"],["/static/media/izakaya.7d3498ae.png","7d3498aebabf1756f1c802038ae08275"],["/static/media/jin apartment.56b0493e.png","56b0493e14fb416f6e90edcecfa28bd8"],["/static/media/jump.b1bef226.png","b1bef226f2e3d8db745357ef83e8cc09"],["/static/media/kancolle.e5d36ea6.jpg","e5d36ea6c1d5e03bd8f8be1f00cab12f"],["/static/media/karaoke.71345fcf.png","71345fcf6f094ce1f1fbbcdd20f9c7cd"],["/static/media/kny.290d3cfe.png","290d3cfebf9fde5f4700ef7b021b689e"],["/static/media/krita.88d2916f.png","88d2916f946e91a468491df55ae38130"],["/static/media/lanterns.b6a38be1.png","b6a38be104710ca06961157c37735cb1"],["/static/media/lasthymn.0386c332.jpg","0386c332f1a4ceb35bb417ea38bb155a"],["/static/media/light-comparison.79e33615.png","79e33615a31e307f842a9758a3e70c0d"],["/static/media/lilith.66f1e6f5.png","66f1e6f5d0df97b954dcd404903d2287"],["/static/media/litclub.52a72269.png","52a72269bf497dae44bb6349eeb44fd8"],["/static/media/lockon.9f0f5f0f.png","9f0f5f0f38338866b44ff1cf047ced17"],["/static/media/madame.9d44e8c1.png","9d44e8c138ade646c3e4424b1ee7233d"],["/static/media/male-idol.4698e0df.png","4698e0df919a45e75b6721e55e469bc8"],["/static/media/mari-dungeon.817b32ce.png","817b32ce66a84e1dbd86787ab8d9ad5e"],["/static/media/mari-dungeon.d226a6d5.png","d226a6d5343c82f9b8ed6889ae3d2a00"],["/static/media/mariapartmentinside.ecc0b2e5.png","ecc0b2e5545f02a5548e201bc1e4f954"],["/static/media/mariapartmentoutside.42680fe7.png","42680fe79430db18e7303147eb0034d8"],["/static/media/mcroom.adeba507.png","adeba507ac22db7d0d858d318144ada1"],["/static/media/megaclub.6754df12.png","6754df1283a70e63161f8173cb767141"],["/static/media/menu.5a2307af.png","5a2307aff2d9ed65081f46a6aed2f4eb"],["/static/media/menu.9c432199.png","9c432199ede4f6b5dd89560132be5c71"],["/static/media/metatron.6adb19ea.png","6adb19eaec2d8f36a201a688a1590237"],["/static/media/mo.cb790838.jpg","cb790838856ada6d21f54047ad2846ab"],["/static/media/modal.48daf919.png","48daf9196b2b777ed506a45a8cbd5ac7"],["/static/media/modular-card-effect.31893dfa.png","31893dfa1186e02223ba17964cd7ac7e"],["/static/media/monster-hunter-world.f817c66f.jpg","f817c66f68e358f063e4a8f5879d6bcd"],["/static/media/my-favorite-things-2018.da25dcf0.png","da25dcf022f1cb7971ffdfecc58504fd"],["/static/media/my-favorite-things-2019.1e770df8.jpg","1e770df89a845e80c25090edc41e40c8"],["/static/media/my-favorite-things-2020.28115626.jpg","2811562617f69534f77435337b7823ba"],["/static/media/newakane.1fef59ab.png","1fef59ab7efd78aced4931721748b1d8"],["/static/media/night-market.2f7d11b8.png","2f7d11b84fab49cdf21bff4751478b0f"],["/static/media/observer-pattern.f3e19f6c.png","f3e19f6ccc15fa7d1ea0981d2f9be721"],["/static/media/oneshot.657d4003.jpg","657d4003871d2d4c31c20a97d333b59f"],["/static/media/orthographic-lookup.b44b1bab.png","b44b1bab501bf59e6d733a42bcf094d1"],["/static/media/parttime.5830e690.png","5830e690001f695c9f87b384123bfb60"],["/static/media/phone.c2eff8e2.png","c2eff8e23090a7f1d19b1d9bb16efc10"],["/static/media/pixel-perfection.a2e21d1d.png","a2e21d1d4b81b82becada6df6ac5b043"],["/static/media/portraits.f561fa18.png","f561fa18c7493c6fa068aec1988bdb83"],["/static/media/profile.8f08a198.jpg","8f08a19880339f39193ff611040761a5"],["/static/media/rainfall-2018.817b32ce.png","817b32ce66a84e1dbd86787ab8d9ad5e"],["/static/media/rainfall-2019.83b7c2fc.png","83b7c2fc3adf8bb4e69d9203c0839f50"],["/static/media/rainfall-active-choice.077a4968.png","077a4968d6bef5ce61e88de4156a88f4"],["/static/media/rainfall-active-social-system.3e40a52e.jpg","3e40a52ee23cbe2710bd55a06e140bb9"],["/static/media/rainfall-characters.7ccb5848.png","7ccb58483344aa511b23741dbf4d6fce"],["/static/media/rainfall-dev-1.e2e7112c.png","e2e7112c55cf40843ae95aca7a8b4d53"],["/static/media/rainfall-dev-10.d56bb845.png","d56bb84577744b14292a0a43e4595e71"],["/static/media/rainfall-dev-11.11bfc97d.png","11bfc97d193bb01ff3fa4a8ad26ab884"],["/static/media/rainfall-dev-12.48daf919.png","48daf9196b2b777ed506a45a8cbd5ac7"],["/static/media/rainfall-dev-13.75e0238d.png","75e0238dd06e1af140c19ef72f0ab19d"],["/static/media/rainfall-dev-2.8a5acae6.png","8a5acae6d6ef7345f699bcc66c24c44b"],["/static/media/rainfall-dev-3.f561fa18.png","f561fa18c7493c6fa068aec1988bdb83"],["/static/media/rainfall-dev-4.7f1ebaf2.png","7f1ebaf22066faa40c788c767eb47d64"],["/static/media/rainfall-dev-5.d226a6d5.png","d226a6d5343c82f9b8ed6889ae3d2a00"],["/static/media/rainfall-dev-6.cd293861.png","cd2938614bb430c864eae88e13558771"],["/static/media/rainfall-dev-7.9d44e8c1.png","9d44e8c138ade646c3e4424b1ee7233d"],["/static/media/rainfall-dev-8.f3ab35c1.png","f3ab35c1c443b61f28a7e9240afb822f"],["/static/media/rainfall-dev-9.88d2916f.png","88d2916f946e91a468491df55ae38130"],["/static/media/rainfall-mari-dungeon.d39f8cb9.png","d39f8cb9ecdfe8d8b84869d6b36f6c5c"],["/static/media/rainfall8.6818e023.png","6818e023522ce44b362007fa4580d810"],["/static/media/rematch.d6a9c673.jpg","d6a9c6738602280808d075a7132b41a7"],["/static/media/return-of-the-obra-dinn.4d6e0131.png","4d6e0131e08a566bf242d291816984da"],["/static/media/rough drafts.7f9bd544.png","7f9bd544154c3ba6c6d6f096300bc3a5"],["/static/media/rumors.b1b390b0.png","b1b390b0ed5bc63d39503ae1b10d6023"],["/static/media/sanae.b0c2dfd3.png","b0c2dfd3748cf0e7b0b392b5df50f4b2"],["/static/media/scan.b33abea7.jpg","b33abea7b80246ec67f97b801a0df5ad"],["/static/media/school.8f0d8375.png","8f0d83757525993d3ef9842becb61639"],["/static/media/school.a7326b3a.png","a7326b3ad5b1c347a237206bd9c0fadf"],["/static/media/schoolriver.5aca0bdf.png","5aca0bdf7b2a21c65c3985dee6b32e6f"],["/static/media/screenplay.4a6cf0bf.png","4a6cf0bf45dd48b15ab5b52f30e54b02"],["/static/media/sfk.2919a0a4.jpg","2919a0a4ed8c5dbb078df41853700141"],["/static/media/shadowlands.a54ff4d8.jpg","a54ff4d8a8cd03574f96a85f3234e75f"],["/static/media/shimakaze.753ee3a5.jpg","753ee3a5bfa63a77cdaaadfcddf8af95"],["/static/media/sidearea.d39f8cb9.png","d39f8cb9ecdfe8d8b84869d6b36f6c5c"],["/static/media/size.964e5605.png","964e5605e3aca34adbb1b38ae3e69361"],["/static/media/slay-the-spire.b4accc12.jpg","b4accc12463ff87658d1b7c5cc93f299"],["/static/media/slime.d79a5737.jpg","d79a57375188c5b51ff590d04cc9290e"],["/static/media/smile.310f0560.jpg","310f05604e2cefc894b646cd0b14dfe3"],["/static/media/snap.be4a784e.png","be4a784e626998086bd0fe654ad027a9"],["/static/media/solo.ae0fface.jpg","ae0fface6f814415519026390848da69"],["/static/media/soulstealer.30ad3198.jpg","30ad319830204a32abc935384acbee67"],["/static/media/start.fd192d83.png","fd192d83adc259c7f05fe602ec63ac3d"],["/static/media/stats.75e0238d.png","75e0238dd06e1af140c19ef72f0ab19d"],["/static/media/stats.88a96730.png","88a967304777f4ae777ce6e4501d5dee"],["/static/media/test screen.11bfc97d.png","11bfc97d193bb01ff3fa4a8ad26ab884"],["/static/media/texts.3e9e420d.png","3e9e420d9bb6ac123da054278644f5ac"],["/static/media/toro.409c5b2a.png","409c5b2ad509d9365962e6bad91da349"],["/static/media/trainplaza.76ea1613.png","76ea1613f3f8035eb0edc52ec4784cac"],["/static/media/tutorialdungeon.a29843a2.png","a29843a27acaa75cdba94e6cd4960c2a"],["/static/media/ubw-pursuing-an-ideal.6355cb6e.jpg","6355cb6e3eed81a97c3149a8101172f5"],["/static/media/ubw.6a64e624.gif","6a64e6242035370509c55bf7018b783e"],["/static/media/underground.fa411c94.png","fa411c94ac1f9b980a3bc3e6ca39e55a"],["/static/media/vallhalla.28115626.jpg","2811562617f69534f77435337b7823ba"],["/static/media/valorant-headshot.26f48c5d.png","26f48c5db9baaf2ebb32aaacdc21c541"],["/static/media/violet.b5793ad2.png","b5793ad298bbbc797736af38a8cec0dd"],["/static/media/wcdonaldsinside.1fd1e1df.png","1fd1e1dfa0bc67aa2d4e81975175a2c5"],["/static/media/withFlavor.02551292.png","025512923c0e021b452dc050bfee8177"],["/static/media/yumeko.7d75f1d3.png","7d75f1d358c696447ddafc65bcd3fea3"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(a,e){var c=new URL(a);return"/"===c.pathname.slice(-1)&&(c.pathname+=e),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(a,e,c,d){var t=new URL(a);return d&&t.pathname.match(d)||(t.search+=(t.search?"&":"")+encodeURIComponent(e)+"="+encodeURIComponent(c)),t.toString()},isPathWhitelisted=function(a,e){if(0===a.length)return!0;var c=new URL(e).pathname;return a.some(function(a){return c.match(a)})},stripIgnoredUrlParameters=function(a,c){var e=new URL(a);return e.hash="",e.search=e.search.slice(1).split("&").map(function(a){return a.split("=")}).filter(function(e){return c.every(function(a){return!a.test(e[0])})}).map(function(a){return a.join("=")}).join("&"),e.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(a){var e=a[0],c=a[1],d=new URL(e,self.location),t=createCacheKey(d,hashParamName,c,/\.\w{8}\./);return[d.toString(),t]}));function setOfCachedUrls(a){return a.keys().then(function(a){return a.map(function(a){return a.url})}).then(function(a){return new Set(a)})}self.addEventListener("install",function(a){a.waitUntil(caches.open(cacheName).then(function(d){return setOfCachedUrls(d).then(function(c){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(e){if(!c.has(e)){var a=new Request(e,{credentials:"same-origin"});return fetch(a).then(function(a){if(!a.ok)throw new Error("Request for "+e+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return d.put(e,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(a){var c=new Set(urlsToCacheKeys.values());a.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!c.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),d="index.html";(a=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,d),a=urlsToCacheKeys.has(c));var t="/index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL(t,self.location).toString(),a=urlsToCacheKeys.has(c)),a&&e.respondWith(caches.open(cacheName).then(function(a){return a.match(urlsToCacheKeys.get(c)).then(function(a){if(a)return a;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});