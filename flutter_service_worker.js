'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "66b104fc474919b7ea48764c1f29314a",
"version.json": "e83b6c36014e9180763fba3c793471be",
"index.html": "264cce0a674e17ccdda264a88c43d634",
"/": "264cce0a674e17ccdda264a88c43d634",
"main.dart.js": "e6d01369d5b8dabe2c5d1ea2c0337522",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "7cad253b4ed0a2b28f1af3b38ed48a2f",
".git/config": "257155c5f9f2d31591b2d8fd219f3ca1",
".git/objects/61/b3f2745458a7d54625e21591e5ac0553701def": "90eca90051975a11b0a429727a170df6",
".git/objects/0d/bdb6397f0e8ab5f95ab4b94d7bda344cf076b2": "e28d148e09348c46bbf79988e8b1aaa1",
".git/objects/95/09bd8e171523c318bab5d715e862f215271ba8": "da7efce7e3566da147bf3b6287f59fbe",
".git/objects/95/4b02ee5004a09caa78cb34161b934ecaec2da5": "79844f6bc8ef7793b1596b3bc3330d2a",
".git/objects/92/09ccdf776fac0b475cc344e9892b69db2c86a7": "90918281de70263a7a2c964a1ac822ec",
".git/objects/66/21c0a9b69e4080ee9e8382cf1b7438de81dee2": "ba8c6301906635fa90280c238e0f7ef1",
".git/objects/3e/a0ec26d6a821975442732abd6d3990eb372401": "3dfbbc030902fd05b03b6777fda6323d",
".git/objects/68/4ebd569fbeb890b1d8d3ce73cfdf3bb4d78022": "5426d825b86be5392670df2e71e30aa0",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/3b/c774dc2ef5f75d9c38b359c30a87e44652dbe9": "ebe7201075dbb9c42a138dd9c75a78fb",
".git/objects/6f/2645502767b1b066325d26ab4dee9a3af920da": "01c31891641517c350697b70496a5a6a",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/35/75b99af87e026b5d55910b7bc4a7cf6ba9f1e3": "6bb57ba521932a899a55db0415ee1a4e",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/69/cd1742b1fb99fe25cb344523048e5dc4444322": "9cebf8b656c69bf5162c93958de6ad5e",
".git/objects/3c/ddf31c8f6efa4f8bf433aa27656f4e1da00e06": "8764738d87b028ae515b40f0ab50200d",
".git/objects/3c/6106136aad6a74378d6a88d247684574d26cd7": "286e67457ca9b1ef9e00ef774304a292",
".git/objects/56/3263d8a9fff5aa69fcd1e611922bf4d7f20fbe": "4b1f8dab8180e358036be375a95db6b2",
".git/objects/93/5ba31d8012130f00f476a6725dc954ce7c23d5": "f8205a674474b2e8d83d9646c848e80c",
".git/objects/60/2cde24474e427c788ef3688555e74d1528976f": "f86f0496d2da6921d37c7d0fb960be1f",
".git/objects/34/8dc5182b1a28a03b85ff8b6a47ac6359edc26c": "44fcfbbc1125d7cda8cb0112c613dfd0",
".git/objects/34/710f15c81640621069e4987edf578b2ee213c2": "363a9d59facbb781a911fecf9ef23d1b",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/05/19a08874c2ba9344008185854ae97558ef8802": "87e71c9baa46bcc71c3c5790c4fc2734",
".git/objects/02/ba6617970a2c9c9a9046535388e43a380343b5": "f8484bc01573a9806d7bd0304c9d73ef",
".git/objects/a4/dc73af07e90747086399c0cb105c126989e2a2": "896bcae468a443d3a936da29c08ddb7c",
".git/objects/b5/2a6c6b39566297fdbc7d8fa57dd82619ad9824": "d28a1ec2ac9fcbf0b878bafee65242e6",
".git/objects/b5/10f68ddcd1b55167c32605a57df8b6e1cb9334": "95e7d07a12bd1552fac1c847ef4301e3",
".git/objects/b5/235201a963e4d3ca6e469e5a27da268df92468": "4db6aba3f4ebae8822c1e522684b6b03",
".git/objects/b2/65ed4d1aeed8cefebd1168b81a6ffb368b0cdb": "1bb905c1172188cf1c3a2e9fa123dccf",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/d9/e7fe88b95ebc7a993e0d5e514232ffff062d09": "81f8e50b3a89e1f742fa314a4f00f961",
".git/objects/ad/e0e5b537dbabaa4b2f0a1982400621614be116": "0be2e3ada31cc34126592a3608274950",
".git/objects/d7/a9e08bad9278b98e073ba2ecf722c0a2b547b2": "d92541f80bfd78a5ae017fb1d57688b8",
".git/objects/df/aa46fefc6bc41cfca8704db60d01a4c09d24eb": "e1dad6c8734e3d915b40d9f5f337d167",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/bd/6be43d015a2a8a92db341ee519feb383a20cb4": "0df4c80430aff6e9b0cdd970bc215545",
".git/objects/d1/fa725207293979ca953c9e27083c292467f38f": "fba28212aafb93eeeab3b8120f34ec9a",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/7136da757e4d96a139c40c4c4fa3906be26638": "e72b7505f093240e3e8b511d436dd7d7",
".git/objects/ae/61b8b2b0a0cbfe626fb6efe014cf0c404a30d8": "d199f274e8d2485962704a7268e09e24",
".git/objects/ae/64bee11cc837a0cc61b8bfe6118c1c38e16c73": "b96ad2a0f0ffa694263930d9a24690a4",
".git/objects/d8/7515ed0943e4020f6dbddb9be08cd8cbfc620c": "f520aa5caa23abf596988a9ceec8a4ab",
".git/objects/d8/80f38868f8fff480d63c03390e75b467624cba": "a8666b7c77dcd6b5e4f8969ac4c8c271",
".git/objects/ab/35476499b293e2f7e97631d1c2262535a139f7": "a81e0186f670d9e139dc4435b5b8b09a",
".git/objects/ab/dba0076b97758865a4eeb1572efa40adaf6046": "c5310ce2da2a67d4f70fdf9fb7231367",
".git/objects/e5/078a8f3045963c6b50ab1f96b56f818648c5b4": "0979d78b693179dc6a33943a1424b268",
".git/objects/e5/12c838afb19d3dbf99004e3bb0325c42252c20": "1379881ddef5a9ec32944f21ecfc33b0",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/5af6de030ac1d8895723ed8f91649b4a36910a": "4dd54155d33446ade4aead95cb46d9f2",
".git/objects/f2/0a710bca9ab0f7ea68d5abf82e6405e7b7e7bd": "057e8955e56da21a63cd1469d7bb5b6e",
".git/objects/f2/5c4d8881a5880657cb5517a753d790d6994443": "54b029403ebcc29e83030ce5a9040776",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/fe/0808e4961e45298f4adf8fbc8bb45bb81c1543": "46ae0203c59dbe430644f1fbb4b916e0",
".git/objects/ed/2c76c83b3f741655f4ff9c24a5becafc5864ec": "b712bd55254b95a64107f2af692df871",
".git/objects/18/85725ef9e2553eceaeb0ca96a79585fb7cb95d": "611e30a20dde0a97364ca9bcbc92d096",
".git/objects/18/5469eef607a9faeaa402c1f972b299349b16bf": "72ee9611dde6fc03f175f09bb7280b52",
".git/objects/7d/9ffedd212ef54369d7f2ef2e708c23e6822c2b": "516c5519a4f5508028951e6909a67142",
".git/objects/29/d9cbc5c0b500193eb86e2c7cf0385c17e70130": "6e9ba738021974ab5e7b85709b69dec1",
".git/objects/16/cfe1c5a7564ba66b92e9d8487570cf2dc0c1d2": "70f471c409a9408302b9c1f98cc6c8a7",
".git/objects/1f/199ba300c8710d78ac97264d1b4be7c9337512": "c6a0f0fa4be10a653731d99b50e11142",
".git/objects/73/c82dbdd16477d73494e5ab99f3339913eba060": "f65d32bb6bc0d9ffc0ea11ed4ef353f7",
".git/objects/73/6794cdec8f97d685b038d44c3120a4934ddaf5": "e7fe3fe9f9aaeb9b7de35d8cd4295dc7",
".git/objects/73/423230d7efa19700076a88df57d0e6a18d7804": "ad2cb35662005f2d22b117c7bfa45b92",
".git/objects/87/4a550a0bc98d20717fedd63db6a48c2bd69223": "d3be719eb0df0b6506727b089c0a421f",
".git/objects/87/6e7c5227f2fb95a8fca5f04203bf3562c6de12": "4173e62eaeb00737826291f2657cf1fb",
".git/objects/17/83b19a75510c4443a74ba552e56aac893058e4": "fdd8a2a1d840b852baf389500c4dd901",
".git/objects/17/5d9dabfe87a4e7c13ba8dbd4e784336e22894d": "ed967fcf60cce2bd60e96eb8219086a5",
".git/objects/8f/c8be62f202c40e7d3e2e16242fb065cfc4e1a7": "6fda1b80da67a8d96186cf8ab8b24087",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/4d/970b1e233f9270e196570364ca308247dafb66": "8867e8f4f332fcc0dfb108ea88e9f8a9",
".git/objects/75/b986e815045aeeaab6d1b26802270169e76b24": "8d7a74ef8fbe7467c8bd3a4d617a64d0",
".git/objects/86/537a617f6d390a93459cc802b26962e53e8d9f": "6503ec9094706d3bc57df59cc0cee88f",
".git/objects/86/a460093fcaa8b86647977bd0951587d8f2c354": "af4b30ee73d68fd04200d19508e4e968",
".git/objects/72/7c3cb721dd33abd674a8f166628de3f7617646": "f9e1694120b51f1cd6c02d79fc667ab7",
".git/objects/72/5c46ae6639168b928ecc7e34efecc2f760d594": "3857f5fb84ca8fc404f5af45c0e97eb5",
".git/objects/44/6f7d721779ba59d6b6d9f1b76f1ae2ca1c6bcd": "f4e76d0aafa01239b7a089a6ba0980d4",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/38/35e37c137f54e59c2bf53c0439bf902ac49bbd": "b3279ea15ce1481e1b0b1df5e94b95c8",
".git/objects/00/ac810a49599adc6364e7fe0e859d1d0413c362": "1b14d407d123d8e160478800d63ce8a8",
".git/objects/00/0827e56e33951bde2ecf923f190c54cb18861f": "063edce885d07024702836c485ac9b98",
".git/objects/36/5666b28b21929420b878f92e2b31486a2b27c6": "3d2e13953da379c4b2aec15e81c0832e",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/98/7354b2ea703cd1113a4d15aa3fed1aee9c010f": "9d516489249ac4040af8392490198c5c",
".git/objects/98/001f8429113eeb6b474640d286fcdac3e6d09a": "b0cef4b6ce642b182032b96bf952b19e",
".git/objects/98/6d9c24dcb1611d69d59999ea9b0de041c238a5": "2af83b750123bc56268b90959e03cbd6",
".git/objects/53/8bc16f37330791679ebca71f353a7b2d7d977c": "ee392e15670c6e65ec9ef42c3ba261df",
".git/objects/30/6942dc5bda024438722d4da845f397d2b10e14": "682a06660c7a1bece06811374e7444ab",
".git/objects/30/d5b1e7790149f0ab4647337a970a40adb175f0": "915513c149ede53f6ee1c4fc449246fe",
".git/objects/5e/db4f55ab3155c94b88e1624c018fc9086cffa6": "95b75a4785490ff5f337782628d14fe7",
".git/objects/5e/c4fc2ad9b859c42de258b3d7be1b7f8764b39d": "64fbcb283ee38b14a87abfc4bdd499c8",
".git/objects/6d/f2b253603094de7f39886aae03181c686e375b": "4e432986780adf1da707b08f0bc71809",
".git/objects/01/991a7cee752b408121db2c45ae67f9ec242466": "093bffef2e1b840e53e0ba164ad9b840",
".git/objects/06/983401881fc82cc2bca7f93cf2bc9edc0323e3": "29be54cadd76528bbebc18f776864685",
".git/objects/6c/aacc77cd552c0346e71c50416fb9ad541185f8": "db53ee7049a7126b9c982b599934375b",
".git/objects/99/9e67cb207342a92bc3663f441ffd779b60b2b6": "ec2adfbd330dfb73db542d614db40cf6",
".git/objects/97/b6eee463de5e4fcf79c6570e4173f50eca81d5": "b58977ec52e0607f13c5710fd432ef21",
".git/objects/97/3e7ee01eb4f8b4a99a845d34d9cf4ba4734cf5": "09d73eb9c35f39ffc2ec65c9a2a74b1b",
".git/objects/0f/333d8b0f295c668945893e0218f404909d75b5": "57698e833c9272a111aef5b87fb4412a",
".git/objects/0f/b75ef4a4b3eb1311c1bbcd6bf0f25653ae112d": "5c97d3c4382450b995fd2bf0b10b6c42",
".git/objects/90/ee8d2341be951cee807f006835a54f8e1161f8": "a1411e7523c1739c4f4caac070b1e717",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/d660aa4491330723973fbbe8a76bbafda358ec": "dd5480423348676102ee9dc9b8c5d160",
".git/objects/b8/51275cb64b2fa6720a39a5afe3f64bedee9238": "35e1fab0d26c3456dfab78ee3bd043c9",
".git/objects/b1/6a56348f329b0321a42c88a883ff5ea15ba5f8": "35d316c2e8a0fc53fa8f5a8724ce7f79",
".git/objects/dc/f83695f71da8c6278eb914cdd42692c427924e": "9ca7f32e12839dea4610032ada023058",
".git/objects/a9/e4f7b7657ec8616371591545c9df7309ca52e0": "9847c837a8e367d0ade39d80b0235bba",
".git/objects/d5/79a5af3d5a9ca4e66527ae5c1f313f364f3b7e": "84dd39cdea454ffb933e27284fdd67cf",
".git/objects/d5/8533c4de36852603f424f793388d9cabb28687": "09a4fe324463917ee15973a9919c8506",
".git/objects/aa/fe288cafc32bc9d563b9f13a2fd695725be6a3": "f47862962466f0b67e2f0958fec86e70",
".git/objects/b7/da216c89009ceb5fa7f1b4ccb9e5ea584fa5b6": "87b0c4cbc0d8b799df3a50cce3dd305e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/b0/de937f6b0ca949e94ed84996c87ebe024aced5": "ff84483529b9dcfe692ab50988aafe97",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/f3492df2246ac74a35c1cf49ec8590c46f0c37": "89496a3087b2c3dbecc6c6bc2f6dfa53",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/ef/e61a600f5b7780ea5c253587e82e6d139ffcfb": "0ed01d3433a9ae67b218649a6a1c3658",
".git/objects/c3/42991f4c92b662503d120f303e0160934e0b6c": "55839a11793777b1e3d1ebc835f3973f",
".git/objects/e6/744116b12dd484f7aeae43668357e24684f502": "baddff65c37614d0bceb61a1f5690c8a",
".git/objects/e6/cb9d5ba000a8e7bffe07a04b3be25a3b8743db": "11b15bf7da5865ad37d2f2b340989e25",
".git/objects/e6/cc1238dbc0b7ccf7f9688c5ed49177fcfbf8c9": "9cc5a5efdd3c45e2b3243d052fb3b9f1",
".git/objects/f9/64e5aa2c446293af279b557f5fa9b301fbff9e": "ded86b7d4ea1b6940c0bbfa6661857e8",
".git/objects/e8/dda1ecb0e92c8ef646ca46bac3fb56efc4215e": "e133ae98c261491dae3e6a3b85e627e9",
".git/objects/ff/d36d1234beece91d6196569b14370e2acd7826": "fd25270e3e93aee2e0d0cc8a428a1f59",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e0/b73c559614b6bfbe1f2f06eff1a7e3655efc53": "1d5f5dc31c91ec32d3f75b744cda93f2",
".git/objects/e0/a5799df4388deb67a3fa3cba052b9947f8610b": "0f029a4cac25e6d7e91788bd11296d1c",
".git/objects/2c/dd7344c0cca6c51335e17e0b388ee2011e01a2": "53931a1251e777c905b8fb787c880191",
".git/objects/2c/9fab5ca3c8d93e68203455068ae65bc3d51b50": "bb181229641343d11ad54ae41ccd3fc4",
".git/objects/1b/8c854b32ada068349c98049d06fc820e8ee871": "6f87b483e76849d1396e25d80b9abb6a",
".git/objects/1b/550a9c149266ff745a76d1203b168e109c25cf": "a6f1948f2fb8f00b6aa5d23e1820ac1d",
".git/objects/1b/f662e80d9b344de1921cacf5594e7cb186dd81": "edebae00a794b670c5e02ad63abb8e92",
".git/objects/77/fc3c3a7e57b295eb9c0a939931f61fd8d316cb": "28d521e4e889bfc234767be700bb61cc",
".git/objects/70/094161ef052172c9ec784054db7dbd49726b98": "049bf8cef101b55f164280435abff51c",
".git/objects/70/0f3ea85fa19d412cdbe166c91cbda93941ed30": "f4abcf173285420d35f5a49dbde5df74",
".git/objects/1e/5d0ef2e82d667e14509de927243081b52ca576": "14acaf1f308db6cd8f6152a2935cd387",
".git/objects/4a/3f5592a1282032915e73a14b914a235eb19255": "95ce8ec9f16fdbb207427e35e7b8e6ab",
".git/objects/4a/4ca7e7c15baa4f002fd69850cbe1aafae0eae9": "a337dcf4b6ec7f413e1521eb6f7b4b07",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/85/099c8eb9372f88e160e33a8e16e908145a9f49": "e72b9ff0cd77ff6d68331d3951fb4c90",
".git/objects/1d/eeae6c73d08f25e6875e8725fa2b46028ab0de": "31312216f9c1c5c218847cb95c6d552b",
".git/objects/1d/468b85698a60041b450286f31b3264b3bbd6f7": "5c8c497111befde32ac151f14cf92f85",
".git/objects/76/81c5f46749df8955166915d68e9e9da69ff7d0": "0f1b4a1daaec5aea18786fff74aff4fa",
".git/objects/76/3eb81b50e72a9ad587f726e8d66140af398ecc": "9c44e423a4013fb881b4fe7d923555af",
".git/objects/82/d51dafc0a653ac416c485e8982b894e24bd87e": "38674e2b8357804f17db19f600a234bb",
".git/objects/49/21861a2c39556f44897cf48ea2633d45d11bac": "15b499fdfff80403f1e778a6841cf7fe",
".git/objects/40/61324d4100a0e094efc46084c1a765ba428eb0": "07af239bd6a582b415ea32d2ca19ecfe",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/2b/3f7ba879e735333ba68fbc496717c503841bb9": "204f1f1e67d9076334d4934a2a2a93fc",
".git/objects/8b/2f872264c8d4853751f1f8fe32df917a78f43d": "44d00a520b5effc1a5a5e85690f3a1ec",
".git/objects/13/5ff641fdae8eb6a0213c4e16aa4e3e8590ef8f": "5970232fc6ba970bf8b17d91d8ae3080",
".git/objects/7f/e6db5087bda4de9041af54412b86c2b10abb38": "febccd956b02689b5cda83454f0896bb",
".git/objects/14/92bd266a825eeb5da54d347aa4e1914b71d5e1": "dbb72c74161ae403e9fde67c21a27643",
".git/objects/22/6b087409689bc2a688309f7987da5e91b4cf8d": "ca4def507a69e0d1c0487d812057d781",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "789e5b72b9a2987ecedc41ba2af8d569",
".git/logs/refs/heads/main": "789e5b72b9a2987ecedc41ba2af8d569",
".git/logs/refs/remotes/origin/main": "06a743cf9245d8f954d7cb1d4904de3f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "38a5897357aa78fe82f868b9a7b753b5",
".git/refs/remotes/origin/main": "38a5897357aa78fe82f868b9a7b753b5",
".git/index": "5a35f55155ba7229024d3eb9789cbd5d",
".git/COMMIT_EDITMSG": "f98d52f3ca78fef4023dd4cafb6409c2",
"assets/AssetManifest.json": "2be77bfad628e74568029caf11429cee",
"assets/NOTICES": "d363774c3081f805bab1256129552151",
"assets/FontManifest.json": "866b9b20ab0e8c30ffe220d2a2d66abe",
"assets/AssetManifest.bin.json": "ce4e972b9a65347a467a8fa6bed5a245",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/syncfusion_flutter_pdfviewer/assets/squiggly.png": "c9602bfd4aa99590ca66ce212099885f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/strikethrough.png": "cb39da11cd936bd01d1c5a911e429799",
"assets/packages/syncfusion_flutter_pdfviewer/assets/highlight.png": "7384946432b51b56b0990dca1a735169",
"assets/packages/syncfusion_flutter_pdfviewer/assets/underline.png": "c94a4441e753e4744e2857f0c4359bf0",
"assets/packages/syncfusion_flutter_pdfviewer/assets/fonts/RobotoMono-Regular.ttf": "5b04fdfec4c8c36e8ca574e40b7148bb",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "6465793a4d001bed53e8e360cfb21183",
"assets/fonts/MaterialIcons-Regular.otf": "d635b32384817d25847b20ae03dacdeb",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
