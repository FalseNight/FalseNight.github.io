"use strict";var precacheConfig=[["/index.html","86ef5206e98935d1410a01f1e460abed"],["/static/css/main.281571e7.css","51e9b2cab6132bb4ca60382b048def0c"],["/static/js/main.31a99a3e.js","685a9df31e90296d6cab5ed53d2ba9a7"],["/static/media/City at Night.cd293861.png","cd2938614bb430c864eae88e13558771"],["/static/media/Dragon_Class.2c460439.png","2c460439498ff528ce3c44397d0c76f6"],["/static/media/Dragon_Test.b53413a6.png","b53413a6707047e58efacf5ab5d158d4"],["/static/media/Dragon_Test_Final.867d24c9.png","867d24c9514acc5203ea4917ef6e0bb1"],["/static/media/Game_Class.f3e19f6c.png","f3e19f6ccc15fa7d1ea0981d2f9be721"],["/static/media/Goal.8751f3a8.png","8751f3a8b5863521a58ffddcacdbfd2a"],["/static/media/New Map.07679c49.png","07679c4909912b1104bbfed24723f5d4"],["/static/media/Playable Mari.06b62c8c.png","06b62c8c2b00e6639aa643996c7082af"],["/static/media/Title Screen.3f2770d4.png","3f2770d40fcd79eace0dd2e40d95a72b"],["/static/media/active_choice_context.0e62b673.png","0e62b67385bd65c6c85fdeef99856203"],["/static/media/active_choice_example.077a4968.png","077a4968d6bef5ce61e88de4156a88f4"],["/static/media/active_choice_start.3576ab0d.png","3576ab0dbefeb821e27a4e968fff16a3"],["/static/media/active_choice_timer.58667556.png","58667556b6090d105bb77e907d6718e7"],["/static/media/akane.7ccb5848.png","7ccb58483344aa511b23741dbf4d6fce"],["/static/media/alley.08831265.png","088312650ef77f6fa500cac38e3b7c8d"],["/static/media/apartment.dc5e766c.png","dc5e766c647ee65e7c14ef2bdaebbb47"],["/static/media/bad-pixel-perfection.40ff97fb.png","40ff97fb3dc8702ae8fda18fb1d76171"],["/static/media/bad-sprite-boundary.576f96b2.png","576f96b2120d132b93730df6c11818e8"],["/static/media/block.5d932d67.png","5d932d678b795c497944d2bb6de0c541"],["/static/media/block2.15e8194e.png","15e8194ea209e143201227db12eeb5a5"],["/static/media/block3.8415df7d.png","8415df7d0291197fd24e18bd04ede145"],["/static/media/block4.480d7b34.png","480d7b345405681424bfa165d80e97d5"],["/static/media/bookdown.07177a78.png","07177a78daadf53d2cf3f87cfc0d9396"],["/static/media/bookdowninside.35b7f8c5.png","35b7f8c54666165afffb715be36225fb"],["/static/media/bullettime.2926ae4b.png","2926ae4b35dbcbd99d18fe1ec0cd7d89"],["/static/media/bunny-girl-senpai.5fdfe138.png","5fdfe138d5dceac5f29e62bb011b0041"],["/static/media/card-game-archetypes.7ede1ac8.png","7ede1ac8bf3bf4f82c0e3f485b8df631"],["/static/media/celeste.a9573377.png","a9573377511092436d199b5c59ee661d"],["/static/media/cherryblossom.8d36eaae.png","8d36eaae7760c77400077cc7ee56cd92"],["/static/media/choices.3e40a52e.jpg","3e40a52ee23cbe2710bd55a06e140bb9"],["/static/media/chuuni.05e70c29.png","05e70c29bfbbb8fc995997a74ee9c549"],["/static/media/city-rework.e08b9940.png","e08b9940199acd5545947715b9826e5b"],["/static/media/classroom.bb2a929e.png","bb2a929efb69095adeda9b6f2dd8e4ea"],["/static/media/coffeeshop.e2e7112c.png","e2e7112c55cf40843ae95aca7a8b4d53"],["/static/media/combat-intro.7f1ebaf2.png","7f1ebaf22066faa40c788c767eb47d64"],["/static/media/combat.0c4da337.png","0c4da33710de7323c3858e363defbe3f"],["/static/media/current-city-lights.6c5faaf3.png","6c5faaf3c431c296888f32e53a865ab8"],["/static/media/decklist.6c436cbb.png","6c436cbb8b38bb00f263d0ee72ba3921"],["/static/media/decorator-pattern.97b1bc42.png","97b1bc42678f3dd246c5df37994bef91"],["/static/media/deltarune.da25dcf0.png","da25dcf022f1cb7971ffdfecc58504fd"],["/static/media/dungeon.b87401fe.png","b87401fe24bdb472c16d99b952ae790c"],["/static/media/final busts.4de65489.png","4de65489d2d75b43d75c469c3ec9f888"],["/static/media/final implementation.95436596.png","9543659629e8d79cdce15646f1400a1a"],["/static/media/finalTest.97b1bc42.png","97b1bc42678f3dd246c5df37994bef91"],["/static/media/flavor.2491ae28.png","2491ae2826b41930e3703608ee4334e1"],["/static/media/flourish.ff9952f9.png","ff9952f9da7b25a8320e7200de470f7f"],["/static/media/frappuccino.3fa54f30.png","3fa54f3007258bf1d654754386eab02e"],["/static/media/fridge.041aea4f.jpg","041aea4f445527f50bf91bd443321906"],["/static/media/goldennoodleinside.5f2bcc22.png","5f2bcc2229de31273e79ef9fa344c11b"],["/static/media/goldennoodleoutside.8a5acae6.png","8a5acae6d6ef7345f699bcc66c24c44b"],["/static/media/how-we-design-rainfall-characters.95436596.png","9543659629e8d79cdce15646f1400a1a"],["/static/media/initial busts.6ea132e7.png","6ea132e7cdcafdc7aad42405fbc96461"],["/static/media/initial implementation.34e3faee.png","34e3faeeebc5665252699d107699eb65"],["/static/media/initialTest.d88175d2.png","d88175d20fbb29bfa7154b28c741d52e"],["/static/media/intro.2d3893b1.jpg","2d3893b11e948237b15089e5d71080a4"],["/static/media/investigations.9c5a8d57.png","9c5a8d57995485857866e3fb3d23d2a0"],["/static/media/izakaya.7d3498ae.png","7d3498aebabf1756f1c802038ae08275"],["/static/media/karaoke.71345fcf.png","71345fcf6f094ce1f1fbbcdd20f9c7cd"],["/static/media/lanterns.b6a38be1.png","b6a38be104710ca06961157c37735cb1"],["/static/media/lasthymn.0386c332.jpg","0386c332f1a4ceb35bb417ea38bb155a"],["/static/media/light-comparison.79e33615.png","79e33615a31e307f842a9758a3e70c0d"],["/static/media/lilith.66f1e6f5.png","66f1e6f5d0df97b954dcd404903d2287"],["/static/media/litclub.52a72269.png","52a72269bf497dae44bb6349eeb44fd8"],["/static/media/lockon.9f0f5f0f.png","9f0f5f0f38338866b44ff1cf047ced17"],["/static/media/madame.9d44e8c1.png","9d44e8c138ade646c3e4424b1ee7233d"],["/static/media/male-idol.4698e0df.png","4698e0df919a45e75b6721e55e469bc8"],["/static/media/mari-dungeon.817b32ce.png","817b32ce66a84e1dbd86787ab8d9ad5e"],["/static/media/mari-dungeon.d226a6d5.png","d226a6d5343c82f9b8ed6889ae3d2a00"],["/static/media/mariapartmentinside.ecc0b2e5.png","ecc0b2e5545f02a5548e201bc1e4f954"],["/static/media/mariapartmentoutside.42680fe7.png","42680fe79430db18e7303147eb0034d8"],["/static/media/mcroom.adeba507.png","adeba507ac22db7d0d858d318144ada1"],["/static/media/megaclub.6754df12.png","6754df1283a70e63161f8173cb767141"],["/static/media/menu.5a2307af.png","5a2307aff2d9ed65081f46a6aed2f4eb"],["/static/media/menu.9c432199.png","9c432199ede4f6b5dd89560132be5c71"],["/static/media/metatron.6adb19ea.png","6adb19eaec2d8f36a201a688a1590237"],["/static/media/modular-card-effect.31893dfa.png","31893dfa1186e02223ba17964cd7ac7e"],["/static/media/monster-hunter-world.f817c66f.jpg","f817c66f68e358f063e4a8f5879d6bcd"],["/static/media/my-favorite-things-2018.da25dcf0.png","da25dcf022f1cb7971ffdfecc58504fd"],["/static/media/night-market.2f7d11b8.png","2f7d11b84fab49cdf21bff4751478b0f"],["/static/media/observer-pattern.f3e19f6c.png","f3e19f6ccc15fa7d1ea0981d2f9be721"],["/static/media/oneshot.657d4003.jpg","657d4003871d2d4c31c20a97d333b59f"],["/static/media/orthographic-lookup.b44b1bab.png","b44b1bab501bf59e6d733a42bcf094d1"],["/static/media/parttime.5830e690.png","5830e690001f695c9f87b384123bfb60"],["/static/media/pixel-perfection.a2e21d1d.png","a2e21d1d4b81b82becada6df6ac5b043"],["/static/media/portraits.f561fa18.png","f561fa18c7493c6fa068aec1988bdb83"],["/static/media/profile.8f08a198.jpg","8f08a19880339f39193ff611040761a5"],["/static/media/rainfall-2018.817b32ce.png","817b32ce66a84e1dbd86787ab8d9ad5e"],["/static/media/rainfall-active-choice.077a4968.png","077a4968d6bef5ce61e88de4156a88f4"],["/static/media/rainfall-active-social-system.3e40a52e.jpg","3e40a52ee23cbe2710bd55a06e140bb9"],["/static/media/rainfall-characters.7ccb5848.png","7ccb58483344aa511b23741dbf4d6fce"],["/static/media/rainfall-dev-1.e2e7112c.png","e2e7112c55cf40843ae95aca7a8b4d53"],["/static/media/rainfall-dev-2.8a5acae6.png","8a5acae6d6ef7345f699bcc66c24c44b"],["/static/media/rainfall-dev-3.f561fa18.png","f561fa18c7493c6fa068aec1988bdb83"],["/static/media/rainfall-dev-4.7f1ebaf2.png","7f1ebaf22066faa40c788c767eb47d64"],["/static/media/rainfall-dev-5.d226a6d5.png","d226a6d5343c82f9b8ed6889ae3d2a00"],["/static/media/rainfall-dev-6.cd293861.png","cd2938614bb430c864eae88e13558771"],["/static/media/rainfall-dev-7.9d44e8c1.png","9d44e8c138ade646c3e4424b1ee7233d"],["/static/media/rainfall-mari-dungeon.d39f8cb9.png","d39f8cb9ecdfe8d8b84869d6b36f6c5c"],["/static/media/rainfall3.f561fa18.png","f561fa18c7493c6fa068aec1988bdb83"],["/static/media/rainfall6.7f1ebaf2.png","7f1ebaf22066faa40c788c767eb47d64"],["/static/media/rainfall7.d226a6d5.png","d226a6d5343c82f9b8ed6889ae3d2a00"],["/static/media/rainfall8.cd293861.png","cd2938614bb430c864eae88e13558771"],["/static/media/return-of-the-obra-dinn.4d6e0131.png","4d6e0131e08a566bf242d291816984da"],["/static/media/rough drafts.7f9bd544.png","7f9bd544154c3ba6c6d6f096300bc3a5"],["/static/media/rumors.b1b390b0.png","b1b390b0ed5bc63d39503ae1b10d6023"],["/static/media/school.a7326b3a.png","a7326b3ad5b1c347a237206bd9c0fadf"],["/static/media/schoolriver.5aca0bdf.png","5aca0bdf7b2a21c65c3985dee6b32e6f"],["/static/media/screenplay.4a6cf0bf.png","4a6cf0bf45dd48b15ab5b52f30e54b02"],["/static/media/sidearea.d39f8cb9.png","d39f8cb9ecdfe8d8b84869d6b36f6c5c"],["/static/media/size.964e5605.png","964e5605e3aca34adbb1b38ae3e69361"],["/static/media/slay-the-spire.b4accc12.jpg","b4accc12463ff87658d1b7c5cc93f299"],["/static/media/snap.be4a784e.png","be4a784e626998086bd0fe654ad027a9"],["/static/media/soulstealer.30ad3198.jpg","30ad319830204a32abc935384acbee67"],["/static/media/stats.88a96730.png","88a967304777f4ae777ce6e4501d5dee"],["/static/media/texts.3e9e420d.png","3e9e420d9bb6ac123da054278644f5ac"],["/static/media/toro.409c5b2a.png","409c5b2ad509d9365962e6bad91da349"],["/static/media/trainplaza.76ea1613.png","76ea1613f3f8035eb0edc52ec4784cac"],["/static/media/tutorialdungeon.a29843a2.png","a29843a27acaa75cdba94e6cd4960c2a"],["/static/media/ubw-pursuing-an-ideal.6355cb6e.jpg","6355cb6e3eed81a97c3149a8101172f5"],["/static/media/ubw.6a64e624.gif","6a64e6242035370509c55bf7018b783e"],["/static/media/wcdonaldsinside.1fd1e1df.png","1fd1e1dfa0bc67aa2d4e81975175a2c5"],["/static/media/withFlavor.02551292.png","025512923c0e021b452dc050bfee8177"],["/static/media/yumeko.7d75f1d3.png","7d75f1d358c696447ddafc65bcd3fea3"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=a),c.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,c,t){var d=new URL(e);return t&&d.pathname.match(t)||(d.search+=(d.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(c)),d.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var c=new URL(a).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,c){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return c.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],c=e[1],t=new URL(a,self.location),d=createCacheKey(t,hashParamName,c,/\.\w{8}\./);return[t.toString(),d]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(t){return setOfCachedUrls(t).then(function(c){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!c.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return t.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var c=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!c.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,c=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),t="index.html";(e=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,t),e=urlsToCacheKeys.has(c));var d="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(c=new URL(d,self.location).toString(),e=urlsToCacheKeys.has(c)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});