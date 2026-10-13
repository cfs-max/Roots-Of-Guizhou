/* =====================================================================
 * ROOTS OF GUIZHOU — 数据层
 * 6 个贵州真实景点，每个景点关联 2 种道地药用植物。
 * 植物图片与纹路样式当前为 SVG 占位生成（见 app.js），
 * 后续可把 plant.img / plant.patterns 替换为真实图片路径。
 * ===================================================================== */

const ATTRACTIONS = [
  {
    id: 'fanjingshan',
    img: 'assets/fanjingshan-attraction.webp',
    name: '梵净山',
    nameEn: 'Fanjingshan',
    x: 91.36, y: 21.00,         // 图中"梵净山"文字下方的墨圈圆心
    nameEnOnly: true,           // 弹窗标题只显示英文名（占据原中文名位置）
    hidePlantHead: true,        // 右侧植物弹窗去掉标题行，直接展示植物卡片
    plantEnOnly: true,          // 植物卡片只显示英文名，不显示中文名
    intro: 'Fanjingshan, located in Tongren, Guizhou, is a major mountain of the Wuling Range and a UNESCO World Heritage Site. Known for mist-covered peaks, dramatic rock formations, and rich biodiversity, it represents Guizhou’s high-mountain forest environment.',
    plants: [
      {
        id: 'yuxingcao', name: '鱼腥草', nameEn: 'Yuxingcao / Zhe’ergen / Fish Mint', latin: 'Houttuynia cordata Thunb.', pinyin: 'Yu Xing Cao',
        cardImg: 'assets/yuxingcao-card.webp',
        img: 'assets/yuxingcao-plant.webp',
        nameImg: 'assets/yuxingcao-name.png',
        patternImages: ['assets/yuxingcao-pattern-1.jpg', 'assets/yuxingcao-pattern-2.jpg', 'assets/yuxingcao-pattern-3.jpg'],
        descL: '三白草科多年生草本，叶心形、揉之有鱼腥气，喜生于溪边湿地与田埂阴处，黔地山野处处可见。',
        descR: '全草清热解毒、消痈排脓、利尿通淋，黔人采嫩根叶凉拌生食，谓之“折耳根”，为最具地方风味的药食两用之品。',
        blocksL: [
          ['Chinese Name', 'Yuxingcao / Zhe’ergen / Fish Mint'],
          ['Scientific Name', 'Houttuynia cordata'],
          ['Medicinal Nature', 'Pungent and slightly cold.'],
          ['Habitat & Distribution', 'Found along streams, ditches, wetlands, field margins, and other humid habitats in Guizhou.'],
          ['Family & Genus', 'Saururaceae; Genus: Houttuynia.']
        ],
        blocksR: [
          ['Miao / Dong Medicinal Use', 'Common in the everyday plant knowledge and traditional practice of both Miao and Dong communities.'],
          ['Fresh-Herb Use', 'Traditionally associated with clearing heat, detoxifying, reducing abscesses, promoting drainage, and urination; it also has a strong local food culture in Guizhou.'],
          ['Folk Experience', 'Fresh use can highlight the leaves, stems, underground rhizomes, and whole plant.'],
          ['Cultural Symbol', 'Water / fish visual association.'],
          ['Pattern', 'Heart-shaped leaf motifs, fish motifs, and water-wave patterns.']
        ],
        /* L4 轮播图下方两行说明（缺省时使用通用文案） */
        footL: 'CULTURAL SYMBOL | FISH VISUAL ASSOCIATION.',
        footR: 'PATTERN | HEART-SHAPED LEAF MOTIFS, FISH MOTIFS, AND WATER-WAVE PATTERNS.',
        patternCount: 3
      },
      {
        id: 'gouteng', name: '钩藤', nameEn: 'Gouteng / Uncaria', latin: 'Uncaria rhynchophylla (Miq.) Miq. ex Havil.', pinyin: 'Gou Teng',
        cardImg: 'assets/gouteng-card.webp',
        img: 'assets/gouteng-plant.webp',
        nameImg: 'assets/gouteng-name.png',
        patternImages: ['assets/gouteng-pattern-1.jpg', 'assets/gouteng-pattern-2.jpg', 'assets/gouteng-pattern-3.jpg'],
        descL: '茜草科藤本，枝节具钩状刺，攀援于山野灌木丛间，黔地为其传统产区，采收带钩茎枝入药。',
        descR: '钩茎息风止痉、清热平肝，苗医用以安神定惊、治小儿惊风，亦是黔地大宗外销药材。',
        blocksL: [
          ['Chinese Name', 'Gouteng / Uncaria'],
          ['Scientific Name', 'Uncaria spp. (representative medicinal species include Uncaria rhynchophylla and related species)'],
          ['Medicinal Nature', 'Sweet and cool.'],
          ['Habitat & Distribution', 'Found in valleys, forest edges, ditch sides, and humid thickets in Guizhou.'],
          ['Family & Genus', 'Rubiaceae; Genus: Uncaria.']
        ],
        blocksR: [
          ['Miao / Dong Medicinal Use', 'Traditional use is found in both Miao and Dong communities.'],
          ['Fresh-Herb Use', 'The hooked stems are traditionally used, commonly associated with calming internal wind, easing convulsions, and clearing heat from the liver.'],
          ['Folk Experience', 'The key fresh material is the hooked stem rather than the flowers or leaves.'],
          ['Cultural Symbol', 'Dragon / spiral life motif.'],
          ['Pattern', 'Hook motifs, S-shaped patterns, spiral motifs, and vine patterns.']
        ],
        /* L4 轮播图下方两行说明（缺省时使用通用文案） */
        footL: 'CULTURAL SYMBOL | DRAGON / SPIRAL LIFE MOTIF.',
        footR: 'PATTERN | HOOK MOTIFS, S-SHAPED PATTERNS, SPIRAL MOTIFS, AND VINE PATTERNS.',
        patternCount: 3
      },
      {
        id: 'banxia', name: '半夏', nameEn: 'Banxia / Pinellia', latin: 'Pinellia ternata (Thunb.) Makino', pinyin: 'Ban Xia',
        cardImg: 'assets/banxia-card.webp',
        img: 'assets/banxia-plant.webp',
        nameImg: 'assets/banxia-name.png',
        patternImages: ['assets/banxia-pattern-1.jpg', 'assets/banxia-pattern-2.jpg'],
        descL: '天南星科，块茎小如枣核、叶三裂，喜湿润坡地与林下阴处。',
        descR: '块茎燥湿化痰、降逆止呕，生品有毒须炮制；为黔地常用草药，亦用于跌打外敷。',
        blocksL: [
          ['Chinese Name', 'Banxia / Pinellia'],
          ['Scientific Name', 'Pinellia ternata'],
          ['Medicinal Nature', 'Pungent and warm; toxic in its raw state and traditionally processed before medicinal use.'],
          ['Habitat & Distribution', 'Found on slopes, forest edges, fields, ditch sides, and humid habitats in Guizhou.'],
          ['Family & Genus', 'Araceae; Genus: Pinellia.']
        ],
        blocksR: [
          ['Miao / Dong Medicinal Use', 'Related traditional medicinal knowledge exists in both Miao and Dong communities.'],
          ['Fresh-Herb Use', 'The underground tuber is the main medicinal part, traditionally associated with drying dampness, transforming phlegm, redirecting rebellious qi, and relieving nausea.'],
          ['Folk Experience', 'An important part of folk knowledge lies in identifying, handling, and processing irritating plants safely.'],
          ['Cultural Symbol', 'Sun / circular life symbol.'],
          ['Pattern', 'Spherical tuber motifs, circular geometric patterns, and radial motifs.']
        ],
        /* L4 轮播图下方两行说明（缺省时使用通用文案） */
        footL: 'CULTURAL SYMBOL | SUN / CIRCULAR LIFE SYMBOL.',
        footR: 'PATTERN | SPHERICAL TUBER MOTIFS, CIRCULAR GEOMETRIC PATTERNS, AND RADIAL MOTIFS.',
        patternCount: 3
      }
    ]
  },
  {
    id: 'xijiang',
    img: 'assets/xijiang-attraction.webp',
    name: '西江千户苗寨',
    nameEn: 'Xijiang Qianhu Miao Village',
    x: 88.33, y: 63.25,         // 图中"西江千户苗寨"文字下方的墨圈圆心
    nameEnOnly: true,           // 弹窗标题只显示英文名（占据原中文名位置）
    hidePlantHead: true,        // 右侧植物弹窗去掉标题行，直接展示植物卡片
    plantEnOnly: true,          // 植物卡片只显示英文名，不显示中文名
    intro: 'Xijiang Qianhu Miao Village, in southeastern Guizhou, is one of China’s largest Miao settlements. Its hillside wooden stilt houses, terraced fields, festivals, costumes, and traditional crafts form a distinctive cultural landscape.',
    plants: [
      {
        id: 'dawupao', name: '大乌泡', nameEn: 'Dawupao / Rubus', latin: 'Rubus multibracteatus H. Lév. & Vaniot', pinyin: 'Da Wu Pao',
        cardImg: 'assets/dawupao-card.webp',
        img: 'assets/dawupao-plant.webp',
        nameImg: 'assets/dawupao-name.png',
        patternImages: ['assets/dawupao-pattern-1.jpg', 'assets/dawupao-pattern-2.jpg', 'assets/dawupao-pattern-3.jpg'],
        descL: '蔷薇科悬钩子属灌木，枝密生皮刺，叶背灰白，果熟紫黑可食，常见于山野灌丛与溪边。',
        descR: '根与叶活血止血、祛风除湿，苗医外用治跌打损伤与疮疡肿痛，果实亦可食。',
        blocksL: [
          ['Chinese Name', 'Dawupao / Rubus'],
          ['Scientific Name', 'Rubus multibracteatus'],
          ['Medicinal Nature', 'Local traditional sources often describe it as bitter and cool, with differences depending on the plant part used.'],
          ['Habitat & Distribution', 'Found in mountains, thickets, forest margins, and woodland edges in Guizhou.'],
          ['Family & Genus', 'Rosaceae; Genus: Rubus.']
        ],
        blocksR: [
          ['Miao / Dong Medicinal Use', 'Strongly associated with local plant knowledge in Miao communities.'],
          ['Fresh-Herb Use', 'The fruit changes colour from green to red to dark purple, and the fresh fruit, fresh stems and leaves, and roots each have different uses.'],
          ['Folk Experience', 'Folk knowledge centres largely on harvesting techniques and determining ripeness.'],
          ['Cultural Symbol', 'Bird / butterfly.'],
          ['Pattern', 'Berry-grain motifs, clustered dot patterns, and branch-and-vine motifs.']
        ],
        /* L4 轮播图下方两行说明（缺省时使用通用文案） */
        footL: 'CULTURAL SYMBOL | BIRD / BUTTERFLY.',
        footR: 'PATTERN | BERRY-GRAIN MOTIFS, CLUSTERED DOT PATTERNS, AND BRANCH-AND-VINE MOTIFS.',
        patternCount: 3
      },
      {
        id: 'yunshi', name: '云实', nameEn: 'Yunshi', latin: 'Caesalpinia decapetala (Roth) Alston', pinyin: 'Yun Shi',
        cardImg: 'assets/yunshi-card.webp',
        img: 'assets/yunshi-plant.webp',
        nameImg: 'assets/yunshi-name.png',
        patternImages: ['assets/yunshi-pattern-1.jpg', 'assets/yunshi-pattern-2.jpg'],
        descL: '豆科攀援灌木，枝散生倒钩刺，羽状复叶、黄花繁密，荚果长圆形，多生于山坡灌丛与路旁。',
        descR: '种子与根清热除湿、杀虫止痒，民间用以治痢疾与皮肤瘙痒；茎皮亦可作染料。',
        blocksL: [
          ['Chinese Name', 'Yunshi'],
          ['Scientific Name', 'Caesalpinia decapetala; some current taxonomic sources use Biancaea decapetala.'],
          ['Medicinal Nature', 'Traditional descriptions vary by plant part, commonly including bitter, astringent, and warm qualities.'],
          ['Habitat & Distribution', 'Found in mountain areas, forest edges, thickets, and woodland margins in Guizhou.'],
          ['Family & Genus', 'Fabaceae; traditionally placed in the genus Caesalpinia.']
        ],
        blocksR: [
          ['Miao / Dong Medicinal Use', 'Associated with traditional plant-use knowledge in Miao communities of Guizhou.'],
          ['Fresh-Herb Use', 'Roots, stems, fruits, and other parts have recorded uses in local traditional plant knowledge.'],
          ['Folk Experience', 'The four stages—flowers, leaves, pods and seeds—correspond to the stages of collection, sorting, sun-drying and processing in traditional practice.'],
          ['Cultural Symbol', 'Butterfly / plant-life motif.'],
          ['Pattern', 'Pod motifs, pinnate-leaf motifs, seed-dot patterns, and continuous botanical patterns.']
        ],
        /* L4 轮播图下方两行说明（缺省时使用通用文案） */
        footL: 'CULTURAL SYMBOL | BUTTERFLY / PLANT-LIFE MOTIF.',
        footR: 'PATTERN | POD MOTIFS, PINNATE-LEAF MOTIFS, SEED-DOT PATTERNS, AND CONTINUOUS BOTANICAL PATTERNS.',
        patternCount: 3
      }
    ]
  },
  {
    id: 'huangguoshu',
    img: 'assets/huangguoshu-attraction.webp',
    name: '黄果树瀑布',
    nameEn: 'Huangguoshu Waterfall',
    x: 27.69, y: 22.36,         // 图中"黄果树瀑布"文字下方的墨圈圆心（像素级检测）
    nameEnOnly: true,           // 弹窗标题只显示英文名（占据原中文名位置）
    hidePlantHead: true,        // 右侧植物弹窗去掉标题行，直接展示植物卡片
    plantEnOnly: true,          // 植物卡片只显示英文名，不显示中文名
    intro: 'Located in Anshun, Guizhou, Huangguoshu Waterfall is one of China’s most famous large waterfall systems. Its powerful main cascade is surrounded by karst cliffs, caves, and lush vegetation, making it an iconic landscape of Guizhou.',
    plants: [
      {
        id: 'tianma', name: '天麻', nameEn: 'Tianma / Gastrodia', latin: 'Gastrodia elata Bl.', pinyin: 'Tian Ma',
        cardImg: 'assets/tianma-card.webp',
        /* 真实素材（提供时优先使用，否则回退 SVG 占位） */
        img: 'assets/tianma-plant.webp',   // 透明底 PNG 转 WebP（原图 3.6MB → 0.3MB）
        nameImg: 'assets/tianma-name.png',
        patternImages: ['assets/tianma-pattern-1.jpg', 'assets/tianma-pattern-2.jpg', 'assets/tianma-pattern-3.jpg'],
        descL: '兰科腐生草本，全株无绿叶，以蜜环菌供给养分，块茎肥厚。古人称之为“定风草”，喜生于阴湿林下腐殖土中。',
        descR: '块茎富含天麻素，平肝息风、止痉通络，为黔地苗医、土家医常用的镇惊之品，亦入药膳炖汤。',
        /* 植物页结构化字段块（字段名加粗展示），存在时优先于 descL / descR */
        blocksL: [
          ['Chinese Name', 'Tianma / Gastrodia'],
          ['Scientific Name', 'Gastrodia elata Blume'],
          ['Medicinal Nature', 'Sweet in taste and neutral in nature.'],
          ['Habitat & Distribution', 'Found in mountainous forests and shaded, humid understories in Guizhou. Gastrodia lacks green leaves and obtains nutrients through fungal symbiosis, making it closely dependent on the underground forest ecosystem.'],
          ['Family & Genus', 'Orchidaceae; Genus: Gastrodia.']
        ],
        blocksR: [
          ['Miao / Dong Medicinal Use', 'Traditional medicinal knowledge related to Gastrodia can be found in both Miao and Dong communities in Guizhou.'],
          ['Fresh-Herb Use', 'The underground tuber is the key medicinal part. The underground tuber is traditionally used medicinally, commonly associated with calming internal wind and relieving spasms in traditional practice.'],
          ['Folk Experience', 'Experiential knowledge of underground growth, fungal symbiosis, forest ecology, and invisible biological relationships.'],
          ['Cultural Symbol', 'Maple tree / forest-life motif.'],
          ['Pattern', 'Tuber motifs, fungal-thread patterns, branching root-like lines, and continuous maple-leaf motifs.']
        ],
        /* L4 轮播图下方两行说明（缺省时使用通用文案） */
        footL: 'CULTURAL SYMBOL | MAPLE TREE / FOREST-LIFE MOTIF.',
        footR: 'PATTERN | TUBER MOTIFS, FUNGAL-THREAD PATTERNS, BRANCHING ROOT-LIKE LINES, AND CONTINUOUS MAPLE-LEAF MOTIFS.',
        patternCount: 3
      },
      {
        id: 'chonglou', name: '重楼', nameEn: 'Chonglou / Seven-leaf Paris', latin: 'Paris polyphylla Sm.', pinyin: 'Chong Lou',
        cardImg: 'assets/chonglou-card.webp',
        img: 'assets/chonglou-plant.webp',
        nameImg: 'assets/chonglou-name.png',
        patternImages: ['assets/chonglou-pattern-1.jpg', 'assets/chonglou-pattern-2.jpg', 'assets/chonglou-pattern-3.jpg'],
        descL: '百合科，轮生叶顶托一花、又名“七叶一枝花”，多生于林下阴湿处，采挖需护其根。',
        descR: '根茎清热解毒、消肿止痛，为黔地蛇伤与痈肿要药，亦是现代抗肿瘤方剂的重要组成。',
        blocksL: [
          ['Chinese Name', 'Chonglou / Seven-leaf Paris'],
          ['Scientific Name', 'Paris polyphylla'],
          ['Medicinal Nature', 'Bitter and slightly cold; traditional materia medica records it as mildly toxic.'],
          ['Habitat & Distribution', 'Occurs in mountainous forests, shaded understories, and damp slopes in Guizhou.'],
          ['Family & Genus', 'Melanthiaceae; Genus: Paris.']
        ],
        blocksR: [
          ['Miao / Dong Medicinal Use', 'Paris polyphylla has a relatively clear association with traditional Miao medicinal practice in Guizhou.'],
          ['Fresh-Herb Use', 'The rhizome is the principal medicinal part, traditionally associated with clearing heat, detoxifying, reducing swelling, and relieving pain. Fresh rhizome is recorded in some external folk applications; because the plant is toxic.'],
          ['Folk Experience', 'The visible radial leaf structure can be contrasted with the thick underground rhizome to express visible and invisible layers of medicinal knowledge.'],
          ['Cultural Symbol', 'Butterfly Mother / life-and-reproduction motif.'],
          ['Pattern', 'Seven-leaf radial motif: seven whorled leaves transformed into a centered, radial, symmetrical geometric pattern.']
        ],
        /* L4 轮播图下方两行说明（缺省时使用通用文案） */
        footL: 'CULTURAL SYMBOL | BUTTERFLY MOTHER / LIFE-AND-REPRODUCTION MOTIF.',
        footR: 'PATTERN | SEVEN-LEAF RADIAL MOTIF: SEVEN WHORLED LEAVES TRANSFORMED INTO A CENTERED, RADIAL, SYMMETRICAL GEOMETRIC PATTERN.',
        patternCount: 3
      },
      {
        id: 'bajiaolian', name: '八角莲', nameEn: 'Bajiaolian', latin: 'Dysosma versipellis (Hance) M. Cheng ex T. H. Ying', pinyin: 'Ba Jiao Lian',
        cardImg: 'assets/bajiaolian-card.webp',
        img: 'assets/bajiaolian-plant.webp',
        nameImg: 'assets/bajiaolian-name.png',
        patternImages: ['assets/bajiaolian-pattern-1.jpg', 'assets/bajiaolian-pattern-2.jpg', 'assets/bajiaolian-pattern-3.jpg'],
        descL: '小檗科八角莲属，叶盾状多裂如伞，喜生于阔叶林下阴湿腐殖土中，瀑周林荫处可见。',
        descR: '根茎清热解毒、化痰散结，民间外用治痈肿疮毒与蛇虫咬伤；为黔地珍稀草药，采挖宜慎。',
        blocksL: [
          ['Chinese Name', 'Bajiaolian'],
          ['Scientific Name', 'Dysosma versipellis'],
          ['Medicinal Nature', 'Sweet and slightly bitter, with a cool nature; the entire plant has some toxicity.'],
          ['Habitat & Distribution', 'Found in mountain understories, thickets, bamboo groves, rocky sites, and shaded damp slopes in Guizhou.'],
          ['Family & Genus', 'Berberidaceae; Genus: Dysosma.']
        ],
        blocksR: [
          ['Miao / Dong Medicinal Use', 'Associated with traditional plant-medicine knowledge in Miao communities of Guizhou.'],
          ['Fresh-Herb Use', 'The rhizome is traditionally used medicinally, commonly associated with clearing heat, detoxifying, promoting circulation, and dispersing stasis. Some traditional records mention external use of fresh rhizome; because the plant is toxic.'],
          ['Folk Experience', 'Its large shield-like, palmately lobed leaves are its strongest visual feature and can evoke shelter, shadow, and humidity in mountain environments.'],
          ['Cultural Symbol', 'Butterfly / central floral life motif.'],
          ['Pattern', 'Eight-direction radial leaf motifs, palmate-leaf motifs, and central rotational patterns.']
        ],
        /* L4 轮播图下方两行说明（缺省时使用通用文案） */
        footL: 'CULTURAL SYMBOL | CENTRAL FLORAL LIFE MOTIF',
        footR: 'PATTERN | EIGHT-DIRECTION RADIAL LEAF MOTIFS, PALMATE-LEAF MOTIFS, AND CENTRAL ROTATIONAL PATTERNS',
        patternCount: 3
      }
    ]
  },
  {
    id: 'libo',
    img: 'assets/libo-attraction.webp',
    name: '荔波小七孔',
    nameEn: 'Libo Xiaoqikong',
    x: 33.59, y: 36.82,         // 图中"荔波小七孔"文字下方的墨圈圆心
    nameEnOnly: true,           // 弹窗标题只显示英文名（占据原中文名位置）
    hidePlantHead: true,        // 右侧植物弹窗去掉标题行，直接展示植物卡片
    plantEnOnly: true,          // 植物卡片只显示英文名，不显示中文名
    intro: 'Libo Xiaoqikong, in southern Guizhou, is known for its emerald rivers, ancient stone bridge, waterfalls, forests, and karst scenery. Its dense waterways and humid, tranquil environment create one of Guizhou’s most distinctive natural landscapes.',
    plants: [
      {
        id: 'tiepishihu', name: '铁皮石斛', nameEn: 'Shihu / Dendrobium', latin: 'Dendrobium officinale Kimura & Migo', pinyin: 'Shihu',
        cardImg: 'assets/tiepishihu-card.webp',
        img: 'assets/dendrobium-plant.webp',
        nameImg: 'assets/dendrobium-name.png',
        patternImages: ['assets/dendrobium-pattern-1.jpg', 'assets/dendrobium-pattern-2.jpg', 'assets/dendrobium-pattern-3.jpg'],
        descL: '兰科附生，茎条铁灰、节环明显，附生于荔波原始森林的古树岩壁，国家一级保护、极为珍稀。',
        descR: '茎多糖丰盈，益胃生津、滋阴清热，布依族夏日采鲜条嚼食以解暑，亦作高档滋补。',
        blocksL: [
          ['Chinese Name', 'Shihu / Dendrobium'],
          ['Scientific Name', 'Dendrobium spp'],
          ['Medicinal Nature', 'Sweet and slightly cold'],
          ['Habitat & Distribution', 'Found in humid mountains, forests, rocky cliffs, and epiphytic habitats on tree trunks in Guizhou.'],
          ['Family & Genus', 'Orchidaceae; Genus: Dendrobium.']
        ],
        blocksR: [
          ['Miao / Dong Medicinal Use', 'Related traditional medicinal knowledge exists in both Miao and Dong mountain communities.'],
          ['Fresh-Herb Use', 'The stem is traditionally used medicinally, commonly associated with nourishing the stomach, promoting body fluids, nourishing yin, and clearing heat.'],
          ['Folk Experience', 'Its epiphytic growth on cliffs and tree trunks highlights experiential knowledge of how plants occupy surfaces within mountain forests.'],
          ['Cultural Symbol', 'Butterfly'],
          ['Pattern', 'Orchid-flower motifs, butterfly-wing patterns, epiphytic root lines, and vine motifs.']
        ],
        /* L4 轮播图下方两行说明（缺省时使用通用文案） */
        footL: 'CULTURAL SYMBOL | BUTTERFLY',
        footR: 'PATTERN | ORCHID-FLOWER MOTIFS, BUTTERFLY-WING PATTERNS, EPIPHYTIC ROOT LINES, AND VINE MOTIFS.',
        patternCount: 3
      },
      {
        id: 'jinguolan', name: '金果榄', nameEn: 'Jinguolan', latin: 'Tinospora sagittata (Oliv.) Gagnep.', pinyin: 'Jin Guo Lan',
        cardImg: 'assets/jinguolan-card.webp',
        img: 'assets/jinguolan-plant.webp',
        nameImg: 'assets/jinguolan-name.png',
        patternImages: ['assets/jinguolan-pattern-1.jpg', 'assets/jinguolan-pattern-2.jpg', 'assets/jinguolan-pattern-3.jpg'],
        descL: '防己科缠绕藤本，块根串生如连珠、色黄味极苦，多生于林缘灌丛与石灰岩山地。',
        descR: '块根清热解毒、利咽止痛，黔地民间用以治咽喉肿痛与热毒疮疡，为苗岭常用苦寒之品。',
        blocksL: [
          ['Chinese Name', 'Jinguolan'],
          ['Scientific Name', 'Tinospora sagittata'],
          ['Medicinal Nature', 'Bitter and cold.'],
          ['Habitat & Distribution', 'Found in mountain forests, forest edges, thickets, and shaded humid environments in Guizhou.'],
          ['Family & Genus', 'Menispermaceae; Genus: Tinospora.']
        ],
        blocksR: [
          ['Miao / Dong Medicinal Use', 'Associated with traditional plant-medicine knowledge in Miao communities of Guizhou.'],
          ['Fresh-Herb Use', 'The underground tuberous root is traditionally used, commonly associated with clearing heat, detoxifying, and soothing the throat. Use primarily centers on the fresh or processed underground tuberous root.'],
          ['Folk Experience', 'A strong contrast can be drawn between the continuously climbing vine above ground and the heavy, thick tuberous root below ground.'],
          ['Cultural Symbol', 'Bird / spirit-bird motif.'],
          ['Pattern', 'Vine motifs, continuous S-shaped patterns, and heart-shaped leaf motifs.']
        ],
        /* L4 轮播图下方两行说明（缺省时使用通用文案） */
        footL: 'CULTURAL SYMBOL | BIRD',
        footR: 'PATTERN | SPIRIT-BIRD MOTIF. VINE MOTIFS, CONTINUOUS S-SHAPED PATTERNS, AND HEART-SHAPED LEAF MOTIFS.',
        patternCount: 3
      },
      {
        id: 'guoluhuang', name: '过路黄', nameEn: 'Guoluhuang / Chinese Moneywort', latin: 'Lysimachia christinae Hance', pinyin: 'Guo Lu Huang',
        cardImg: 'assets/guoluhuang-card.webp',
        img: 'assets/guoluhuang-plant.webp',
        nameImg: 'assets/guoluhuang-name.png',
        patternImages: ['assets/guoluhuang-pattern-1.jpg', 'assets/guoluhuang-pattern-2.jpg', 'assets/guoluhuang-pattern-3.jpg'],
        descL: '报春花科匍匐草本，茎蔓地而生、叶对生如钱，常成片铺于溪边湿地与林下阴处，初夏开黄花。',
        descR: '全草清热利湿、通淋排石，民间用以治肝胆结石与小便涩痛，亦作外用消肿解毒。',
        blocksL: [
          ['Chinese Name', 'Guoluhuang / Chinese Moneywort'],
          ['Scientific Name', 'Lysimachia christinae'],
          ['Medicinal Nature', 'Sweet and salty, slightly cold.'],
          ['Habitat & Distribution', 'Found along streams, ditches, damp slopes, grasslands, and forest understories in Guizhou.'],
          ['Family & Genus', 'Primulaceae; Genus: Lysimachia.']
        ],
        blocksR: [
          ['Miao / Dong Medicinal Use', 'It has a clear role in traditional Dong medicine.'],
          ['Fresh-Herb Use', 'Traditionally associated with promoting urination, resolving dampness, and related applications. Traditional preparations include fresh herbal juice, fresh poultices, compound decoctions, medicinal wine preparations, and ointments.'],
          ['Folk Experience', 'Closely connected with Dong folk knowledge of fresh-herb collection, preparation, and use.'],
          ['Cultural Symbol', 'Sun / circular life symbol.'],
          ['Pattern', 'Round-leaf motifs, sun motifs, and continuous water-wave patterns.']
        ],
        /* L4 轮播图下方两行说明（缺省时使用通用文案） */
        footL: 'CULTURAL SYMBOL | SUN / CIRCULAR LIFE SYMBOL.',
        footR: 'PATTERN | ROUND-LEAF MOTIFS, SUN MOTIFS, AND CONTINUOUS WATER-WAVE PATTERNS.',
        patternCount: 3
      }
    ]
  },
  {
    id: 'wanfenglin',
    img: 'assets/wanfenglin-attraction.webp',
    name: '万峰林',
    nameEn: 'Wanfenglin',
    x: 33.94, y: 54.13,         // 图中"万峰林"文字下方的墨圈圆心
    nameEnOnly: true,           // 弹窗标题只显示英文名（占据原中文名位置）
    hidePlantHead: true,        // 右侧植物弹窗去掉标题行，直接展示植物卡片
    plantEnOnly: true,          // 植物卡片只显示英文名，不显示中文名
    intro: 'Wanfenglin, near Xingyi in southwestern Guizhou, is a vast karst landscape formed by thousands of limestone peaks. The peaks blend with fields, villages, and waterways, creating a distinctive rural panorama.',
    plants: [
      {
        id: 'jinqiaomai', name: '金荞麦', nameEn: 'Jinqiaomai / Golden Buckwheat', latin: 'Fagopyrum dibotrys (D. Don) H. Hara', pinyin: 'Jin Qiao Mai',
        cardImg: 'assets/jinqiaomai-card.webp',
        img: 'assets/jinqiaomai-plant.webp',
        nameImg: 'assets/jinqiaomai-name.png',
        patternImages: ['assets/jinqiaomai-pattern-1.jpg', 'assets/jinqiaomai-pattern-2.jpg', 'assets/jinqiaomai-pattern-3.jpg'],
        descL: '蓼科多年生草本，根茎粗壮、断面黄赤，叶如戟形，多生于山坡草地与田边路旁。',
        descR: '根茎清热解毒、活血消痈、祛风除湿，苗医用以治肺痈疮毒与风湿痹痛，嫩茎叶亦可作野菜。',
        blocksL: [
          ['Chinese Name', 'Jinqiaomai / Golden Buckwheat'],
          ['Scientific Name', 'Fagopyrum dibotrys'],
          ['Medicinal Nature', 'Traditionally described as slightly pungent, astringent, and cool.'],
          ['Habitat & Distribution', 'Found on slopes, forest margins, grasslands, and damp valleys in Guizhou.'],
          ['Family & Genus', 'Polygonaceae; Genus: Fagopyrum.']
        ],
        blocksR: [
          ['Miao / Dong Medicinal Use', 'Associated with traditional use in both Miao and Dong communities.'],
          ['Fresh-Herb Use', 'The rhizome is the main medicinal part, traditionally associated with clearing heat, detoxifying, promoting drainage, and dispersing stasis.'],
          ['Folk Experience', 'Fresh use mainly concerns the roots and rhizomes.'],
          ['Cultural Symbol', 'Bird / floral-bird life motif.'],
          ['Pattern', 'Five-petal floral motifs, triangular leaf forms, and continuous inflorescence patterns.']
        ],
        /* L4 轮播图下方两行说明（缺省时使用通用文案） */
        footL: 'CULTURAL SYMBOL | BIRD / FLORAL-BIRD LIFE MOTIF.',
        footR: 'PATTERN | FIVE-PETAL FLORAL MOTIFS, TRIANGULAR LEAF FORMS, AND CONTINUOUS INFLORESCENCE PATTERNS.',
        patternCount: 3
      },
      {
        id: 'ainaxiang', name: '艾纳香', nameEn: 'Ainaxiang / Blumea', latin: 'Blumea balsamifera (L.) DC.', pinyin: 'Ai Na Xiang',
        cardImg: 'assets/ainaxiang-card.webp',
        img: 'assets/ainaxiang-plant.webp',
        nameImg: 'assets/ainaxiang-name.png',
        patternImages: ['assets/ainaxiang-pattern-1.jpg', 'assets/ainaxiang-pattern-2.jpg', 'assets/ainaxiang-pattern-3.jpg'],
        descL: '菊科大型草本，叶背密被白色绒毛，揉碎气息清凉，多生于向阳坡地与疏林边缘。',
        descR: '提炼所得艾片开窍醒神、清热止痛，苗医外用消肿散瘀，亦为黔地重要的天然香料与药材。',
        blocksL: [
          ['Chinese Name', 'Ainaxiang / Blumea'],
          ['Scientific Name', 'Blumea balsamifera'],
          ['Medicinal Nature', 'Pungent, slightly bitter, and warm.'],
          ['Habitat & Distribution', 'Found in warmer, humid areas of southern and southeastern Guizhou, including slopes, forest margins, and thickets.'],
          ['Family & Genus', 'Asteraceae; Genus: Blumea.']
        ],
        blocksR: [
          ['Miao / Dong Medicinal Use', 'Blumea balsamifera has a relatively well-documented place in traditional Miao medicinal practice in Guizhou.'],
          ['Fresh-Herb Use', 'Traditional applications include dispelling wind-dampness, warming the middle, and promoting circulation.'],
          ['Folk Experience', 'Fresh leaves and whole plants can illustrate traditional preparation methods such as decoction, external washing, and pounding for topical application.'],
          ['Cultural Symbol', 'Butterfly Mother.'],
          ['Pattern', 'Butterfly motifs, dotted inflorescence patterns, and botanical branch-and-leaf motifs.']
        ],
        /* L4 轮播图下方两行说明（缺省时使用通用文案） */
        footL: 'CULTURAL SYMBOL | BUTTERFLY MOTHER.',
        footR: 'PATTERN | BUTTERFLY MOTIFS, DOTTED INFLORESCENCE PATTERNS, AND BOTANICAL BRANCH-AND-LEAF MOTIFS.',
        patternCount: 3
      }
    ]
  },
  {
    id: 'malinghe',
    img: 'assets/malinghe-attraction.webp',
    name: '马岭河峡谷',
    nameEn: 'Maling River Canyon',
    x: 27.88, y: 79.85,         // 图中"马岭河峡谷"文字下方的墨圈圆心
    nameEnOnly: true,           // 弹窗标题只显示英文名（占据原中文名位置）
    hidePlantHead: true,        // 右侧植物弹窗去掉标题行，直接展示植物卡片
    plantEnOnly: true,          // 植物卡片只显示英文名，不显示中文名
    intro: 'Maling River Canyon, located in Xingyi, is known for its deep gorge, steep cliffs, and numerous waterfalls. Dense vegetation and fast-flowing water give the canyon a dramatic vertical landscape and a humid ecological character.',
    plants: [
      {
        id: 'duzhong', name: '杜仲', nameEn: 'Duzhong / Eucommia', latin: 'Eucommia ulmoides Oliv.', pinyin: 'Du Zhong',
        cardImg: 'assets/duzhong-card.webp',
        img: 'assets/duzhong-plant.webp',
        nameImg: 'assets/duzhong-name.png',
        patternImages: ['assets/duzhong-pattern-1.jpg', 'assets/duzhong-pattern-2.jpg', 'assets/duzhong-pattern-3.jpg'],
        descL: '杜仲科落叶乔木，树皮折断有银白胶丝相连，黔地山地多有栽培，剥皮入药需护其树。',
        descR: '树皮补肝肾、强筋骨、安胎，为黔地道地药材之一，亦常浸酒作滋补强身之用。',
        blocksL: [
          ['Chinese Name', 'Duzhong / Eucommia'],
          ['Scientific Name', 'Eucommia ulmoides'],
          ['Medicinal Nature', 'Sweet and warm.'],
          ['Habitat & Distribution', 'Cultivated widely in Guizhou and suited to mountain areas, valleys, and open woodland habitats.'],
          ['Family & Genus', 'Eucommiaceae; Genus: Eucommia.']
        ],
        blocksR: [
          ['Miao / Dong Medicinal Use', 'Traditional knowledge of Eucommia and other bark medicines exists in both Miao and Dong communities in Guizhou.'],
          ['Fresh-Herb Use', 'The bark is the principal medicinal part, traditionally associated with supporting the liver and kidneys and strengthening tendons and bones.'],
          ['Folk Experience', 'Use focuses mainly on bark harvesting and processing rather than the leaves.'],
          ['Cultural Symbol', 'Maple tree / tree-life motif.'],
          ['Pattern', 'Bark-crack motifs, branching vein patterns, and thread-like fiber motifs.']
        ],
        /* L4 轮播图下方两行说明（缺省时使用通用文案） */
        footL: 'CULTURAL SYMBOL | MAPLE TREE / TREE-LIFE MOTIF.',
        footR: 'PATTERN | BARK-CRACK MOTIFS, BRANCHING VEIN PATTERNS, AND THREAD-LIKE FIBER MOTIFS',
        patternCount: 3
      },
      {
        id: 'xuduan', name: '续断', nameEn: 'Xuduan / Dipsacus', latin: 'Dipsacus asper Wall. ex C. B. Clarke', pinyin: 'Xu Duan',
        cardImg: 'assets/xuduan-card.webp',
        img: 'assets/xuduan-plant.webp',
        nameImg: 'assets/xuduan-name.png',
        patternImages: ['assets/xuduan-pattern-1.jpg', 'assets/xuduan-pattern-2.jpg', 'assets/xuduan-pattern-3.jpg'],
        descL: '川续断科多年生草本，根单一粗壮、断面墨绿，多生于山坡草丛与林缘湿润处。',
        descR: '根补肝肾、强筋骨、续折伤，民间用于跌打损伤与腰膝酸软，为伤科常用之品。',
        blocksL: [
          ['Chinese Name', 'Xuduan / Dipsacus'],
          ['Scientific Name', 'Dipsacus asper'],
          ['Medicinal Nature', 'Bitter, sweet, pungent, and slightly warm.'],
          ['Habitat & Distribution', 'Found in mountain areas, grassy slopes, forest margins, and relatively humid habitats in Guizhou.'],
          ['Family & Genus', 'Caprifoliaceae; Genus: Dipsacus. Older medicinal literature may also retain the former family name Dipsacaceae.']
        ],
        blocksR: [
          ['Miao / Dong Medicinal Use', 'Related traditional medicinal use is found in Miao and Dong communities.'],
          ['Fresh-Herb Use', 'The root is the main medicinal part, traditionally associated with supporting the liver and kidneys, strengthening tendons and bones, and treating traumatic injuries.'],
          ['Folk Experience', 'Some traditional external applications use freshly pounded plant material.'],
          ['Cultural Symbol', 'Dragon / bodily-connection motif.'],
          ['Pattern', 'Broken-line motifs, reconnection patterns, stitch-like motifs, and continuous borders.']
        ],
        /* L4 轮播图下方两行说明（缺省时使用通用文案） */
        footL: 'CULTURAL SYMBOL | DRAGON / BODILY-CONNECTION MOTIF.',
        footR: 'PATTERN | BROKEN-LINE MOTIFS, RECONNECTION PATTERNS, STITCH-LIKE MOTIFS, AND CONTINUOUS BORDERS.',
        patternCount: 3
      }
    ]
  }
];

/* 展平为全局植物序列（供四级页面“上一种/下一种”导航使用） */
const PLANT_SEQUENCE = [];
ATTRACTIONS.forEach(a => a.plants.forEach(p => PLANT_SEQUENCE.push({ attraction: a, plant: p })));
