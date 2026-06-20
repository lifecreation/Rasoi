// ===== RECIPE DATA =====
const RECIPES = [
  // INDIAN BREAKFAST
  {id:1,name:'Aloo Paratha',cat:'breakfast',cuisine:'Indian',time:'30 min',diff:'Easy',emoji:'🥞',img:'aloo paratha.jpg',tags:['Punjabi','Filling','Classic'],desc:'Golden crispy flatbreads stuffed with spiced mashed potatoes — the quintessential Punjabi breakfast served with white butter and pickle.',ingredients:['2 cups wheat flour','3 boiled potatoes','1 tsp cumin seeds','1 tsp red chili powder','½ tsp garam masala','2 green chilies','Fresh coriander','Salt','Ghee for cooking'],steps:['Knead soft dough, rest 20 min.','Mash potatoes with spices and coriander.','Roll dough, stuff with filling, seal and flatten.','Cook on hot tawa with generous ghee until golden both sides.','Serve with white butter, curd and pickle.'],video:'https://www.youtube.com/embed/c1tu0mfoc9A'},
  {id:2,name:'Masala Dosa',cat:'breakfast',cuisine:'Indian',time:'45 min',diff:'Medium',emoji:'🫓',img:'masala dosa.jpg',tags:['South Indian','Crispy','Fermented'],desc:'Paper-thin crispy crepes from fermented rice-lentil batter filled with turmeric potato filling. A South Indian masterpiece.',ingredients:['2 cups rice','½ cup urad dal','½ tsp fenugreek seeds','4 potatoes boiled','Curry leaves','Mustard seeds','1 tsp turmeric','Coconut chutney','Sambar'],steps:['Soak and grind rice + dal to smooth batter. Ferment overnight.','Temper mustard seeds, add onion and turmeric.','Mix in mashed potatoes, season well.','Spread thin crepe on hot griddle, add filling, fold.','Serve with coconut chutney and sambar.'],video:'https://www.youtube.com/embed/MpJz6i3XqU8'},
  {id:3,name:'Poha',cat:'breakfast',cuisine:'Indian',time:'15 min',diff:'Easy',emoji:'🍜',img:'poha.jpg',tags:['Quick','Light','Maharashtrian'],desc:'Flattened rice with onions, mustard seeds, turmeric and peanuts — a light satisfying breakfast in 15 minutes.',ingredients:['2 cups thick poha','1 onion','½ cup peanuts','Mustard seeds','Curry leaves','1 tsp turmeric','Lemon juice','Fresh coriander','Salt & sugar'],steps:['Wash poha, drain and soften 5 min.','Splutter mustard seeds, add curry leaves and onion.','Add peanuts, roast. Add turmeric and poha.','Toss gently, season with salt and sugar.','Squeeze lemon, garnish with coriander.'],video:'https://www.youtube.com/embed/xRYuopk57SM'},
  {id:4,name:'Idli Sambar',cat:'breakfast',cuisine:'Indian',time:'40 min',diff:'Easy',emoji:'🫓',img:'idali sambar.jpg',tags:['South Indian','Steamed','  Healthy'],desc:'Soft steamed rice cakes served with aromatic lentil vegetable stew and coconut chutney.',ingredients:['2 cups idli rice','1 cup urad dal','Toor dal for sambar','Tamarind','Drumstick','Tomatoes','Sambar powder','Coconut for chutney'],steps:['Soak rice and dal, grind and ferment batter.','Steam in idli moulds 10-12 minutes.','Cook toor dal with tamarind, vegetables and spices.','Prepare coconut chutney by grinding fresh coconut.','Serve hot idlis with piping hot sambar and chutney.'],video:'https://www.youtube.com/embed/C_HqlzkWHo0?si=B3OV8PIKv5rvZpVR'},
  {id:5,name:'Chole Bhature',cat:'breakfast',cuisine:'Indian',time:'60 min',diff:'Medium',emoji:'🥙',img:'chole bhature.jpeg',tags:['Punjabi','Hearty','Spicy'],desc:'Fluffy deep-fried bread with spiced chickpea curry — a royal Punjabi breakfast that doubles as a feast.',ingredients:['2 cups chickpeas','2 cups maida','1 tbsp yogurt','Onion-tomato masala','Garam masala','Amchur','Kashmiri chili','Oil for frying'],steps:['Soak chickpeas overnight, pressure cook until soft.','Make dough with maida, yogurt, baking soda, rest 2 hrs.','Cook chickpeas in spiced onion-tomato gravy.','Roll and deep fry bhaturas until puffed and golden.','Serve with chole, onion, green chili and pickle.'],video:'https://www.youtube.com/embed/FEwCfwa2H6Y?si=FSqKx21mvqvYACUQ'},
  // INDIAN LUNCH
  {id:6,name:'Dal Tadka',cat:'lunch',cuisine:'Indian',time:'40 min',diff:'Easy',emoji:'🍛',img:'dal tadka.jpg',tags:['Comfort','Protein','Everyday'],desc:'Yellow lentils cooked soft and finished with smoky ghee tempering of cumin, garlic and dried red chilies.',ingredients:['1 cup toor dal','2 tomatoes','1 onion','4 garlic cloves','Cumin seeds','Dry red chilies','Turmeric','Ghee','Coriander'],steps:['Pressure cook dal with tomatoes and turmeric.','Mash until creamy, adjust consistency.','Heat ghee, add cumin and garlic until golden.','Add red chilies, pour tadka over dal.','Garnish with coriander, serve with rice or roti.'],video:'https://www.youtube.com/embed/DCwPnw3oTIg'},
  {id:7,name:'Rajma Chawal',cat:'lunch',cuisine:'Indian',time:'60 min',diff:'Medium',emoji:'🧆',img:'rajma chwal.jpeg',tags:['Punjabi','Hearty','Classic'],desc:'Kidney beans in luscious tomato-onion gravy with warm spices — North Indian soul food served with steamed rice.',ingredients:['2 cups kidney beans','2 onions','3 tomatoes','Ginger-garlic paste','Garam masala','Kashmiri chili','Cream','Oil'],steps:['Soak and pressure cook rajma.','Blend onion to paste, fry until deep golden.','Add ginger-garlic, tomatoes, and spices.','Add rajma with water, simmer 20 min.','Finish with cream, serve over steamed rice.'],video:'https://www.youtube.com/embed/87stp3_232U'},
  {id:8,name:'Paneer Butter Masala',cat:'lunch',cuisine:'Indian',time:'35 min',diff:'Medium',emoji:'🥘',img:'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500&q=80',tags:['Mughlai','Creamy','Vegetarian'],desc:'Soft cottage cheese in velvety tomato-cashew-cream sauce — the most beloved Indian vegetarian curry.',ingredients:['250g paneer','4 tomatoes','1 onion','10 cashews','Kashmiri chili','Garam masala','Heavy cream','Butter','Kasuri methi'],steps:['Blanch and blend tomatoes, onion, cashews smooth.','Heat butter, add spices and blended paste.','Cook until oil separates, about 10 min.','Add water, bring to boil, add paneer.','Simmer 5 min, stir in cream and kasuri methi.'],video:'https://www.youtube.com/embed/3ARWi3v_9wA'},
  {id:9,name:'Biryani',cat:'lunch',cuisine:'Indian',time:'90 min',diff:'Hard',emoji:'🍲',img:'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500&q=80',tags:['Hyderabadi','Royal','Aromatic'],desc:'Fragrant basmati rice layered with spiced chicken, caramelized onions and saffron — the crown jewel of Indian cuisine.',ingredients:['500g chicken','2 cups basmati rice','Whole spices','Fried onions','Saffron milk','Yogurt','Mint','Ghee','Rose water'],steps:['Marinate chicken in yogurt and spices.','Par-cook basmati rice with whole spices.','Layer rice and chicken in heavy pot.','Pour saffron milk and ghee, seal with dough.','Dum cook on very low heat 25-30 minutes.'],video:'https://www.youtube.com/embed/lZ82XmPnlZo'},
  {id:10,name:'Sambar Rice',cat:'lunch',cuisine:'Indian',time:'35 min',diff:'Easy',emoji:'🫙',img:'sambar rice.jpeg',tags:['South Indian','Tangy','Wholesome'],desc:'Comfort food at its finest — rice mixed with tangy lentil-vegetable stew tempered with mustard and curry leaves.',ingredients:['1 cup rice','1 cup toor dal','Tamarind','Mixed vegetables','Sambar powder','Mustard seeds','Curry leaves','Dry red chili','Ghee'],steps:['Cook rice and dal separately until soft.','Pressure cook tamarind, vegetables and dal.','Add sambar powder, cook until thick.','Prepare tempering with mustard, curry leaves.','Mix rice into sambar or serve together.'],video:'https://www.youtube.com/embed/9P9jpu6Ov6g'},
  {id:11,name:'Kadai Paneer',cat:'lunch',cuisine:'Indian',time:'30 min',diff:'Medium',emoji:'🍳',img:'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=500&q=80',tags:['Spicy','Dhaba Style','Bell Pepper'],desc:'Paneer and bell peppers tossed in freshly ground kadai masala — bold, rustic and incredibly flavourful.',ingredients:['250g paneer','2 bell peppers','Onions','Tomatoes','Coriander seeds','Kashmiri chili','Cumin','Ginger-garlic','Kasuri methi'],steps:['Dry roast and grind coriander seeds and red chilies.','Sauté onions and tomatoes with spices.','Add ground masala, cook 5 min.','Add bell peppers and paneer, toss well.','Finish with kasuri methi and coriander.'],video:'https://www.youtube.com/embed/tRmPvydCOGM'},
  {id:12,name:'Fish Curry',cat:'lunch',cuisine:'Indian',time:'35 min',diff:'Medium',emoji:'🐟',img:'fish chruy.jpg',tags:['Kerala','Coconut','Tangy'],desc:'Tender fish in a tangy coconut-based curry with kokum or tamarind and fragrant curry leaves.',ingredients:['500g fish fillets','Coconut milk','Kokum or tamarind','Mustard seeds','Curry leaves','Green chilies','Ginger','Turmeric','Red chili powder'],steps:['Marinate fish with turmeric and salt.','Temper mustard seeds, curry leaves in coconut oil.','Add ginger, green chili, then turmeric and chili powder.','Add coconut milk and kokum, simmer.','Add fish, cook gently until just done.'],video:'https://www.youtube.com/embed/lhdmRlwnSvs'},
  // INDIAN DINNER
  {id:13,name:'Butter Chicken',cat:'dinner',cuisine:'Indian',time:'60 min',diff:'Medium',emoji:'🍗',img:'butter chicenk.jpg',tags:['Mughlai','Iconic','Creamy'],desc:'Tandoor-kissed chicken in silky tomato-butter-cream sauce — the dish that conquered the world.',ingredients:['500g chicken','Yogurt for marinade','4 tomatoes','Butter','Heavy cream','Kashmiri chili','Garam masala','Kasuri methi','Ginger-garlic paste'],steps:['Marinate chicken with yogurt and spices 4 hours.','Grill or pan-fry until charred and cooked.','Blend roasted tomatoes with cashews smooth.','Cook sauce in butter with spices until rich.','Add chicken and cream, simmer 10 min.'],video:'https://www.youtube.com/embed/v2oMBDGSyoI'},
  {id:14,name:'Mutton Rogan Josh',cat:'dinner',cuisine:'Indian',time:'90 min',diff:'Hard',emoji:'🫕',img:'Mutton Rogan Josh.jpeg',tags:['Kashmiri','Aromatic','Royal'],desc:'Crown jewel of Kashmiri cuisine — tender mutton slow-cooked with whole spices and Kashmiri chilies.',ingredients:['750g mutton','Yogurt','Kashmiri dry chilies','Whole spices','Fennel powder','Ginger powder','Mustard oil','Saffron'],steps:['Heat mustard oil, add hing and whole spices.','Add mutton and sear until browned.','Add yogurt mixed with Kashmiri chili paste.','Add fennel and ginger powder.','Simmer covered 1 hour until tender.'],video:'https://www.youtube.com/embed/NDemUhU13M0?si=8IH58DVDRHVm_Qef'},
  {id:15,name:'Palak Paneer',cat:'dinner',cuisine:'Indian',time:'35 min',diff:'Easy',emoji:'🥗',img:'pala paneer.jpg',tags:['Healthy','Iron-rich','Vegetarian'],desc:'Vibrant spinach purée with golden paneer cubes — nutritious, colourful and deeply satisfying.',ingredients:['500g spinach','250g paneer','2 onions','Garlic','Ginger','Green chilies','Garam masala','Cream','Butter'],steps:['Blanch spinach, shock in ice water, purée.','Fry paneer golden in butter, set aside.','Sauté onion, ginger, garlic with spices.','Add spinach purée, cook 5 min.','Add paneer, stir in cream and butter.'],video:'https://www.youtube.com/embed/Fh39hdOeV3k'},
  {id:16,name:'Lamb Korma',cat:'dinner',cuisine:'Indian',time:'75 min',diff:'Hard',emoji:'🍖',img:'https://images.unsplash.com/photo-1574484284002-952d92456975?w=500&q=80',tags:['Mughlai','Rich','Festive'],desc:'Melt-in-the-mouth lamb in a rich aromatic sauce of onions, cream and warm spices from Mughal royal kitchens.',ingredients:['600g lamb','Fried onion paste','Heavy cream','Yogurt','Cashews','Cardamom','Saffron','Rose water','Ghee','Whole spices'],steps:['Marinate lamb with yogurt and spices overnight.','Fry onions until deep brown, blend smooth.','Cook lamb until browned.','Add onion paste, cashew paste and spices.','Add cream and saffron, slow cook until tender.'],video:'https://www.youtube.com/embed/jBJnDXcUxQk'},
  {id:17,name:'Dal Makhani',cat:'dinner',cuisine:'Indian',time:'8 hr',diff:'Medium',emoji:'🫙',img:'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500&q=80',tags:['Punjabi','Slow Cooked','Luxurious'],desc:'Black lentils slow-cooked overnight with butter and cream — the pinnacle of Punjabi comfort food.',ingredients:['1 cup black urad dal','¼ cup kidney beans','2 tbsp butter','Tomato purée','Heavy cream','Ginger-garlic paste','Kashmiri chili','Garam masala'],steps:['Soak dal and beans overnight.','Pressure cook until very soft.','Mash half the dal, cook with tomato purée.','Add butter and spices, simmer 2+ hours.','Finish with generous cream. Repeat cream and butter for luxury.'],video:'https://www.youtube.com/embed/DH5KrmmugIY'},
  {id:18,name:'Tandoori Chicken',cat:'dinner',cuisine:'Indian',time:'50 min',diff:'Medium',emoji:'🍗',img:'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500&q=80',tags:['Tandoor','Smoky','Classic'],desc:'Chicken marinated in yogurt and aromatic spices, charred to perfection in a blazing hot oven.',ingredients:['1 whole chicken cut','1 cup yogurt','Kashmiri chili','Tandoori masala','Lemon juice','Mustard oil','Ginger-garlic paste','Chaat masala'],steps:['Score chicken, rub with salt and lemon.','Mix yogurt with all spices, coat chicken well.','Marinate minimum 4 hours, ideally overnight.','Cook at 240°C until charred at edges.','Serve with mint chutney and onion rings.'],video:'https://www.youtube.com/embed/YGRTCWMfgzQ'},
  // INDIAN SNACKS
  {id:19,name:'Samosa',cat:'snacks',cuisine:'Indian',time:'50 min',diff:'Medium',emoji:'🫙',img:'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&q=80',tags:['Street Food','Crispy','Classic'],desc:'Golden triangular pastries with spiced potato-pea filling — India\'s most beloved street snack.',ingredients:['2 cups maida','3 boiled potatoes','½ cup green peas','Cumin seeds','Amchur','Garam masala','Ginger','Green chilies','Oil for frying'],steps:['Make stiff dough, rest 30 min.','Cook cumin, peas, potatoes with spices.','Shape dough into cones, fill, seal well.','Deep fry on medium heat until golden.','Serve with mint and tamarind chutney.'],video:'https://www.youtube.com/embed/ZsTMhSVtKDI?si=eSFa-09X4S869XSs'},
  {id:20,name:'Pani Puri',cat:'snacks',cuisine:'Indian',time:'30 min',diff:'Easy',emoji:'🔵',img:'pani puri.jpg',tags:['Street Food','Tangy','Refreshing'],desc:'Hollow crispy spheres filled with mashed potato and explosive mint-tamarind water — fireworks in your mouth.',ingredients:['Ready puris','2 boiled potatoes','Mint leaves','Tamarind pulp','Black salt','Cumin powder','Chaat masala','Green chilies','Jal jeera'],steps:['Blend mint, coriander, tamarind with water.','Strain and season with black salt and cumin.','Mash potatoes with chaat masala.','Make hole in puri, fill with potatoes.','Dip in mint water, eat immediately.'],video:'https://www.youtube.com/embed/fOu3wB0Inx8?si=mZEC-4BrNr0zJiG1'},
  {id:21,name:'Vada Pav',cat:'snacks',cuisine:'Indian',time:'40 min',diff:'Easy',emoji:'🫔',img:'bada pav.jpeg',tags:['Mumbai','Street Food','Addictive'],desc:'The Mumbai burger — spicy potato vada in soft bread with layers of chutneys.',ingredients:['4 pav buns','3 boiled potatoes','Besan for batter','Mustard seeds','Curry leaves','Turmeric','Garlic chutney','Green chutney','Tamarind chutney'],steps:['Season mashed potatoes with tempered spices.','Shape into balls, dip in besan batter.','Deep fry until golden brown.','Toast pav with butter on griddle.','Assemble with all three chutneys.'],video:'https://www.youtube.com/embed/LE-58cHgDaw?si=fT_ddNsG4mzw5zhj'},
  {id:22,name:'Bhel Puri',cat:'snacks',cuisine:'Indian',time:'15 min',diff:'Easy',emoji:'🥗',img:'Bhel Puri .jpeg',tags:['Mumbai','Crunchy','Street Food'],desc:'Puffed rice tossed with onions, tomatoes, potatoes and tangy chutneys — a symphony of textures.',ingredients:['3 cups puffed rice','½ cup sev','2 boiled potatoes','1 onion','2 tomatoes','Tamarind chutney','Green chutney','Chaat masala','Coriander','Pomegranate'],steps:['Dice potatoes, onion and tomatoes.','Mix puffed rice with all vegetables.','Add sev and chutneys.','Season with chaat masala.','Toss, garnish with coriander and serve immediately.'],video:'https://www.youtube.com/embed/aEfsPFCW87Y?si=vj1q7NQgcVb4oTcD'},
  {id:23,name:'Pakora',cat:'snacks',cuisine:'Indian',time:'25 min',diff:'Easy',emoji:'🧅',img:'pakore.jpg',tags:['Monsoon','Crispy','Comfort'],desc:'Vegetables dipped in spiced chickpea batter and deep fried to golden perfection — perfect monsoon snack.',ingredients:['1 cup besan','Onions','Potatoes','Spinach','Cauliflower','Cumin seeds','Ajwain','Chili powder','Salt','Oil for frying'],steps:['Make thick besan batter with spices.','Slice vegetables thin.','Dip or mix vegetables in batter.','Deep fry until golden and crispy.','Drain, serve hot with mint chutney and chai.'],video:'https://www.youtube.com/embed/poinpy7kt0A?si=Knkvh4ll7Qezd8Kp'},
  // INDIAN DESSERTS
  {id:24,name:'Gulab Jamun',cat:'desserts',cuisine:'Indian',time:'45 min',diff:'Medium',emoji:'🍮',img:'gulab jamun.jpg',tags:['Festive','Syrupy','Classic'],desc:'Soft milk-solid dumplings fried golden and soaked in rose-cardamom sugar syrup — king of Indian sweets.',ingredients:['1 cup milk powder','3 tbsp maida','2 tbsp semolina','Ghee for frying','2 cups sugar','Rose water','Cardamom','Saffron'],steps:['Mix milk powder, maida, ghee to soft dough.','Roll into smooth crack-free balls.','Fry on lowest heat, stirring constantly.','Make rose-cardamom sugar syrup.','Drop hot jamuns into warm syrup, soak 30 min.'],video:'https://www.youtube.com/embed/ts-aD_NMON8?si=_azSWxiQUkSsa0HK'},
  {id:25,name:'Kheer',cat:'desserts',cuisine:'Indian',time:'60 min',diff:'Easy',emoji:'🍨',img:'kheer.jpeg',tags:['Creamy','Festive','Traditional'],desc:'Slow-cooked rice pudding in full-fat milk with saffron, cardamom and garnished with pistachios.',ingredients:['¼ cup basmati rice','1 litre full-fat milk','½ cup sugar','Cardamom','Saffron','Pistachios','Almonds','Rose water'],steps:['Soak rice, lightly crush.','Simmer milk, add rice, cook 45 min stirring.','Add sugar, saffron, cardamom.','Cool, refrigerate.','Garnish with nuts and serve chilled.'],video:'https://www.youtube.com/embed/9aP9y2LHEIA?si=Yyym-d4BXJ1yRlaV'},
  {id:26,name:'Gajar Halwa',cat:'desserts',cuisine:'Indian',time:'60 min',diff:'Easy',emoji:'🥕',img:'Gajar Ka Halwa.jpeg',tags:['Winter','Slow Cooked','Traditional'],desc:'Grated carrots slow-cooked in milk with ghee, sugar and cardamom — a winter celebration in a bowl.',ingredients:['500g red carrots','500ml full-fat milk','½ cup sugar','3 tbsp ghee','Cardamom','Khoya','Cashews','Raisins','Almonds'],steps:['Grate carrots finely.','Cook in milk on medium heat stirring often.','Once milk absorbs, add ghee and sugar.','Cook until mixture leaves pan sides.','Add cardamom, khoya, and dry fruits.'],video:'https://www.youtube.com/embed/LKzDV94y4p4?si=dpdboZQ3mq3GBCT9'},
  {id:27,name:'Rasmalai',cat:'desserts',cuisine:'Indian',time:'75 min',diff:'Hard',emoji:'🧁',img:'Rasmalai.jpeg',tags:['Bengali','Royal','Festive'],desc:'Soft cottage cheese discs soaked in saffron-cardamom rabdi cream — Bengali sweetness at its finest.',ingredients:['1 litre full-fat milk for chenna','1 litre milk for rabdi','Sugar','Saffron','Cardamom','Rose water','Pistachios'],steps:['Curdle milk with lemon, drain to make chenna.','Knead smooth, shape into flat discs.','Cook in sugar syrup until doubled.','Reduce 1 litre milk to half for rabdi.','Add saffron and cardamom, soak rasmalai.'],video:'https://www.youtube.com/embed/znefLMNyVE8?si=1d1895g4kboivHHU'},
  // WESTERN BREAKFAST
  {id:28,name:'Classic Pancakes',cat:'breakfast',cuisine:'Western',time:'20 min',diff:'Easy',emoji:'🥞',img:'https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=500&q=80',tags:['American','Fluffy','Comfort'],desc:'Fluffy golden pancakes stacked high with maple syrup and fresh berries — the quintessential American breakfast.',ingredients:['2 cups flour','2 eggs','1½ cups milk','3 tbsp butter','2 tbsp sugar','2 tsp baking powder','1 tsp vanilla','Salt','Maple syrup','Fresh berries'],steps:['Whisk dry ingredients in one bowl.','Beat wet ingredients separately.','Fold wet into dry until just combined.','Pour onto buttered griddle, flip when bubbles form.','Stack and serve with maple syrup and berries.'],video:'https://www.youtube.com/embed/4QcK3MXl9sg?si=FPt_vuKjqxTS0_Bo'},
  {id:29,name:'Avocado Toast',cat:'breakfast',cuisine:'Western',time:'10 min',diff:'Easy',emoji:'🥑',img:'https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?w=500&q=80',tags:['Trendy','Healthy','Quick'],desc:'Creamy mashed avocado on sourdough with poached eggs, chili flakes and microgreens.',ingredients:['2 slices sourdough','2 ripe avocados','2 eggs','Lemon juice','Red chili flakes','Microgreens','Olive oil','Flaky salt','Black pepper'],steps:['Toast sourdough until golden and crispy.','Mash avocado with lemon, salt and pepper.','Poach eggs in simmering water 3 min.','Spread avocado on toast.','Top with poached egg, chili flakes and greens.'],video:'https://www.youtube.com/embed/dP6btliLGy4?si=4H7bLpLJc1tbpq2V'},
  {id:30,name:'Eggs Benedict',cat:'breakfast',cuisine:'Western',time:'30 min',diff:'Hard',emoji:'🍳',img:'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=500&q=80',tags:['Brunch','Classic','Luxurious'],desc:'Poached eggs and Canadian bacon on English muffins with rich silky hollandaise — the ultimate brunch.',ingredients:['4 eggs','2 English muffins','4 slices Canadian bacon','3 egg yolks for hollandaise','½ cup butter','Lemon juice','White wine vinegar','Cayenne'],steps:['Make hollandaise by whisking yolks over bain-marie with butter.','Add lemon, cayenne, keep warm.','Toast muffins, warm bacon.','Poach eggs in acidulated water.','Assemble: muffin, bacon, egg, drizzle hollandaise.'],video:'https://www.youtube.com/embed/6bDoFO7NgI8?si=hFkRRK9BHTiFyeUz'},
  {id:31,name:'French Omelette',cat:'breakfast',cuisine:'Western',time:'10 min',diff:'Medium',emoji:'🍳',img:'Omelette.jpeg',tags:['French','Classic','Quick'],desc:'The perfect soft French omelette — silky, pale gold, and barely set — with herbed butter filling.',ingredients:['3 large eggs','2 tbsp butter','Fresh herbs','Salt','White pepper','Gruyère cheese','Chives'],steps:['Beat eggs with salt and pepper.','Heat butter in non-stick pan until foaming.','Add eggs, stir vigorously with spatula.','Tilt and roll into oval shape.','Slide onto plate, pale yellow outside.'],video:'https://www.youtube.com/embed/bF4bp-lRbDg?si=B7OofCeawZn9jpt1'},
  // WESTERN LUNCH
  {id:32,name:'Caesar Salad',cat:'lunch',cuisine:'Western',time:'20 min',diff:'Easy',emoji:'🥗',img:'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=500&q=80',tags:['American','Classic','Fresh'],desc:'Crisp romaine lettuce with creamy Caesar dressing, croutons and parmesan — a timeless classic.',ingredients:['2 heads romaine','1 cup croutons','Parmesan','2 cloves garlic','2 anchovies','1 egg yolk','Dijon mustard','Lemon','Worcestershire','Olive oil'],steps:['Blend garlic, anchovies, egg yolk and mustard.','Drizzle in olive oil to emulsify.','Add lemon and Worcestershire to taste.','Toss romaine with dressing.','Top with croutons and shaved parmesan.'],video:'https://www.youtube.com/embed/pZFNuEwX8yo?si=3pd73ih-yQsguwF0'},
  {id:33,name:'Club Sandwich',cat:'lunch',cuisine:'Western',time:'15 min',diff:'Easy',emoji:'🥪',img:'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500&q=80',tags:['American','Hearty','Classic'],desc:'Triple-decker sandwich with chicken, bacon, lettuce, tomato and mayo — the ultimate lunch.',ingredients:['3 slices toasted bread','Grilled chicken breast','4 strips crispy bacon','Lettuce','Tomato','Mayo','Avocado','Cheddar'],steps:['Toast all bread slices.','Layer first slice with mayo, lettuce, tomato.','Add second toast, layer with chicken and bacon.','Add avocado and cheese.','Top with third toast, cut diagonally and skewer.'],video:'https://www.youtube.com/embed/XkX2NgT0QZA?si=hh7g_Ozx_fFa2M5n'},
  {id:34,name:'Tom Yum Soup',cat:'lunch',cuisine:'Western',time:'25 min',diff:'Medium',emoji:'🍜',img:'Tom Yum Soup.jpeg',tags:['Thai','Spicy','Aromatic'],desc:'Hot and sour Thai soup with lemongrass, kaffir lime, galangal and plump prawns.',ingredients:['500g prawns','Lemongrass','Kaffir lime leaves','Galangal','Fish sauce','Lime juice','Thai chili','Mushrooms','Coconut milk','Coriander'],steps:['Simmer lemongrass, galangal and lime leaves in broth.','Add mushrooms and cook 5 min.','Add prawns and fish sauce.','Season with lime juice and chili.','Serve garnished with coriander.'],video:'https://www.youtube.com/embed/cahtdM_TP00?si=k60Oi7xFGE04U6t6'},
  {id:35,name:'Minestrone',cat:'lunch',cuisine:'Italian',time:'40 min',diff:'Easy',emoji:'🥣',img:'Minestrone.jpg',tags:['Italian','Healthy','Vegetarian'],desc:'Thick Italian vegetable soup with pasta, cannellini beans and parmesan — Italian grandmother\'s hug in a bowl.',ingredients:['Onion, carrot, celery','Tomatoes','Cannellini beans','Zucchini','Small pasta','Parmesan rind','Basil','Olive oil','Vegetable stock'],steps:['Sauté onion, carrot, celery in olive oil.','Add tomatoes and stock, simmer 15 min.','Add beans, zucchini and pasta.','Cook until pasta is al dente.','Serve with parmesan and drizzle of olive oil.'],video:'https://www.youtube.com/embed/yuvW3L8uJlA?si=ZTFromR0ILa7dTT4'},
  {id:36,name:'BLT Sandwich',cat:'lunch',cuisine:'Western',time:'15 min',diff:'Easy',emoji:'🥓',img:'BLT with Avocado.jpeg',tags:['American','Quick','Classic'],desc:'The perfect bacon, lettuce and tomato sandwich — simple, satisfying and impossible to improve.',ingredients:['4 slices thick bacon','Sourdough bread','Butter lettuce','Heirloom tomato','Good mayonnaise','Lemon','Salt','Black pepper'],steps:['Cook bacon until crispy on both sides.','Toast bread until golden.','Spread generous mayo on both slices.','Layer lettuce, tomato and bacon.','Season tomato with salt, pepper and close.'],video:'https://www.youtube.com/embed/qaHWDmFtBl0?si=1P5WvUOxbyMuNrU0'},
  // WESTERN DINNER
  {id:37,name:'Pasta Carbonara',cat:'dinner',cuisine:'Italian',time:'25 min',diff:'Medium',emoji:'🍝',img:'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=500&q=80',tags:['Italian','Creamy','Classic'],desc:'Silky egg-and-cheese pasta with crispy guanciale — no cream needed, just technique.',ingredients:['400g spaghetti','150g guanciale','4 egg yolks','1 whole egg','80g Pecorino Romano','80g Parmigiano','Black pepper','Salt'],steps:['Cook guanciale until crispy, reserve fat.','Whisk egg yolks with grated cheese and pepper.','Cook pasta al dente, reserve pasta water.','Toss pasta with guanciale off heat.','Add egg mixture with pasta water to emulsify.'],video:'https://www.youtube.com/embed/CG1Yzk_F0P8?si=BpGQmBnZggvYOrkQ'},
  {id:38,name:'Non veg Burger',cat:'dinner',cuisine:'Western',time:'25 min',diff:'Easy',emoji:'🍔',img:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&q=80',tags:['American','Juicy','Classic'],desc:'Smashed patties with American cheese, caramelized onions and secret sauce on a brioche bun.',ingredients:['500g 80/20 ground ','Brioche buns','American cheese','Onion','Lettuce','Tomato','Pickles','Secret sauce ingredients','Butter'],steps:['Season  loosely, form into balls.','Smash onto hot griddle, season generously.','Flip when crust forms, add cheese.','Caramelize onions in butter slowly.','Build: sauce, lettuce, patties, onions, pickles.'],video:'https://www.youtube.com/embed/_q5GKCNZcHI?si=oh0BERnErka-8KtT'},
  {id:39,name:'Roast Chicken',cat:'dinner',cuisine:'Western',time:'90 min',diff:'Medium',emoji:'🍗',img:'Roasted Chicken.jpeg',tags:['French','Sunday Roast','Classic'],desc:'Herb-butter roasted whole chicken with crispy golden skin — the French classic that never fails.',ingredients:['1 whole chicken','100g softened butter','Garlic','Thyme','Rosemary','Lemon','Olive oil','White wine','Potatoes'],steps:['Rub herb butter under skin and all over.','Stuff cavity with lemon, garlic and herbs.','Roast at 200°C for 1 hour 20 min.','Rest 15 min before carving.','Serve with pan juices and roast potatoes.'],video:'https://www.youtube.com/embed/Vq18z5eN1W8?si=634ml8pPnEa8O9K2'},
  {id:40,name:'Grilled Salmon',cat:'dinner',cuisine:'Western',time:'20 min',diff:'Easy',emoji:'🐟',img:'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=500&q=80',tags:['Healthy','Quick','Protein'],desc:'Pan-seared salmon with lemon-butter-caper sauce — elegant, healthy and ready in 20 minutes.',ingredients:['4 salmon fillets','Butter','Capers','Lemon','Garlic','Dill','Olive oil','Salt','White pepper'],steps:['Season salmon, pan sear skin side 4 min.','Flip, cook 3 more min.','Make lemon-butter sauce in same pan.','Add capers and garlic.','Plate and drizzle sauce, garnish with dill.'],video:'https://www.youtube.com/embed/j7BkpjD-HZ0?si=67_wnMtL-Fe9d1DA'},
  {id:41,name:'Lasagne',cat:'dinner',cuisine:'Italian',time:'90 min',diff:'Hard',emoji:'🫕',img:'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=500&q=80',tags:['Italian','Comfort','Hearty'],desc:'Layers of pasta, rich Bolognese, creamy béchamel and melted cheese — the ultimate Italian comfort dish.',ingredients:['Lasagne sheets','500g  mince','2 tins tomatoes','Onion, carrot, celery','500ml milk for béchamel','Butter, flour','Mozzarella','Parmesan','Red wine'],steps:['Make Bolognese with meat, vegetables, tomatoes, wine. Simmer 1 hour.','Make béchamel by cooking butter-flour roux with milk.','Layer: pasta, Bolognese, béchamel, cheese.','Repeat layers, finish with cheese top.','Bake at 180°C for 45 min until golden.'],video:'https://www.youtube.com/embed/LLWqK4cgki8?si=niUMcEx7VFjBD_Kc'},
  {id:42,name:'Steak & Fries',cat:'dinner',cuisine:'Western',time:'25 min',diff:'Medium',emoji:'🥩',img:'Steak & Fries.jpeg',tags:['French','Classic','Indulgent'],desc:'Perfectly seared ribeye steak with herb butter and crispy golden fries — bistro perfection.',ingredients:['2 ribeye steaks','Garlic','Thyme','Butter','Potatoes for fries','Flaky salt','Black pepper','Dijon','Shallots'],steps:['Salt steak 1 hour before cooking.','Sear in hot cast iron 3 min per side.','Add butter, garlic and thyme, baste.','Rest 5 min, then slice.','Serve with golden fried potatoes and salad.'],video:'https://www.youtube.com/embed/r61t3usFRdA?si=o1sQKujQuH4MXAqd'},
  // WESTERN SNACKS
  {id:43,name:'Bruschetta',cat:'snacks',cuisine:'Italian',time:'15 min',diff:'Easy',emoji:'🍅',img:'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=500&q=80',tags:['Italian','Fresh','Appetizer'],desc:'Grilled bread rubbed with garlic and topped with fresh tomatoes, basil and olive oil.',ingredients:['Sourdough baguette','4 ripe tomatoes','2 garlic cloves','Fresh basil','Good olive oil','Flaky salt','Black pepper','Balsamic glaze'],steps:['Grill or toast bread slices.','Rub hot bread with cut garlic clove.','Mix diced tomatoes with basil and olive oil.','Season generously with salt and pepper.','Top bread and drizzle balsamic glaze.'],video:'https://www.youtube.com/embed/Q3xg35pcLyo?si=oHlikAYWt9euEheD'},
  {id:44,name:'Nachos',cat:'snacks',cuisine:'Mexican',time:'20 min',diff:'Easy',emoji:'🌽',img:'Nachos lovers.jpeg',tags:['Mexican','Cheesy','Party Food'],desc:'Crispy tortilla chips loaded with cheese, jalapeños, salsa, guacamole and sour cream.',ingredients:['Tortilla chips','Cheddar cheese','Jalapeños','Black beans','Corn','Salsa','Guacamole','Sour cream','Lime'],steps:['Spread chips on baking tray.','Layer with beans, corn and cheese.','Bake at 200°C until cheese melts.','Top with jalapeños, salsa, guacamole.','Add sour cream and lime juice.'],video:'https://www.youtube.com/embed/ZKVYlS4QnEY?si=fZcZbPVkxxDaLW0h'},
  {id:45,name:'Tacos',cat:'snacks',cuisine:'Mexican',time:'25 min',diff:'Easy',emoji:'🌮',img:'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=500&q=80',tags:['Mexican','Street Food','Fresh'],desc:'Soft flour tortillas filled with spiced chicken, avocado, pico de gallo and lime crema.',ingredients:['Flour tortillas','500g chicken thighs','Cumin, paprika, chili','Avocado','Tomatoes, onion, cilantro','Lime','Sour cream','Cheddar','Lettuce'],steps:['Season chicken with cumin, paprika, chili, salt.','Grill or pan fry until charred.','Make pico de gallo with tomatoes, onion, cilantro, lime.','Warm tortillas.','Fill with chicken, avocado, pico and lime crema.'],video:'https://www.youtube.com/embed/dwwqoU7nN-E?si=aQbQPoPxlsADMkD4'},
  {id:46,name:'Pizza Margherita',cat:'snacks',cuisine:'Italian',time:'30 min',diff:'Medium',emoji:'🍕',img:'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=500&q=80',tags:['Italian','Classic','Vegetarian'],desc:'Neapolitan-style pizza with tomato sauce, fresh mozzarella and fragrant basil on a crispy thin base.',ingredients:['Pizza dough','San Marzano tomatoes','Fresh mozzarella','Fresh basil','Olive oil','Sea salt','Garlic'],steps:['Stretch dough thin on floured surface.','Spread crushed San Marzano tomatoes.','Tear fresh mozzarella over sauce.','Bake in hottest oven possible 8-10 min.','Finish with fresh basil and olive oil.'],video:'https://www.youtube.com/embed/vcfNpDtVqOw?si=wka80Im5iQJ6SGGs'},
  // WESTERN DESSERTS
  {id:47,name:'Crème Brûlée',cat:'desserts',cuisine:'Western',time:'60 min',diff:'Hard',emoji:'🍮',img:'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=500&q=80',tags:['French','Elegant','Classic'],desc:'Rich vanilla custard with a perfectly caramelized sugar crust — the sound of the crack is pure joy.',ingredients:['6 egg yolks','600ml heavy cream','1 vanilla pod','100g caster sugar','Extra sugar for brûlée'],steps:['Heat cream with vanilla until simmering.','Whisk yolks with sugar until pale.','Pour cream into yolks, strain into ramekins.','Bake bain-marie at 150°C for 35-40 min.','Chill, then brûlée sugar top with blowtorch.'],video:'https://www.youtube.com/embed/6tSdlo0r0Io?si=IK0ja7D0fbulISMQ'},
  {id:48,name:'Chocolate Lava Cake',cat:'desserts',cuisine:'Western',time:'20 min',diff:'Medium',emoji:'🍫',img:'Chocolate Lava Cake.jpeg',tags:['French','Indulgent','Showstopper'],desc:'Warm chocolate cake with a molten flowing center — serve with vanilla ice cream for ultimate indulgence.',ingredients:['200g dark chocolate','200g butter','4 eggs','4 egg yolks','120g caster sugar','60g flour','Cocoa powder','Vanilla ice cream'],steps:['Melt chocolate and butter together.','Whisk eggs, yolks and sugar until thick.','Fold in chocolate mixture and flour.','Pour into buttered ramekins.','Bake at 200°C exactly 12 minutes.'],video:'https://www.youtube.com/embed/gW3JtHpuzrk?si=BEsNO3Fw4LiYm2VU'},
  {id:49,name:'Tiramisu',cat:'desserts',cuisine:'Italian',time:'30 min',diff:'Medium',emoji:'🧁',img:'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500&q=80',tags:['Italian','Coffee','No-bake'],desc:'Espresso-soaked ladyfingers layered with mascarpone cream and dusted with cocoa — Italian perfection.',ingredients:['400g mascarpone','4 eggs separated','100g caster sugar','200ml espresso','Savoiardi biscuits','Marsala wine','Cocoa powder'],steps:['Whisk yolks with sugar until pale and thick.','Beat whites stiff.','Fold mascarpone into yolk mixture, fold in whites.','Dip biscuits briefly in espresso-marsala.','Layer biscuits and cream, chill overnight, dust cocoa.'],video:'https://www.youtube.com/embed/87V4nizNJiE?si=5plVJua2EyWt_NYn'},
  {id:50,name:'Apple Pie',cat:'desserts',cuisine:'Western',time:'90 min',diff:'Medium',emoji:'🥧',img:'Apple Pie.jpeg',tags:['American','Classic','Comfort'],desc:'Flaky buttery pastry filled with cinnamon-spiced apples — as American as it gets, served with vanilla ice cream.',ingredients:['2 pie crusts','6 Granny Smith apples','150g caster sugar','2 tsp cinnamon','½ tsp nutmeg','2 tbsp butter','Lemon juice','Egg wash'],steps:['Make shortcrust pastry, rest 30 min.','Peel and slice apples, toss with sugar, spices, lemon.','Line pie dish, fill with apples, dot butter.','Top with second crust, crimp edges, egg wash.','Bake at 200°C for 45-50 min until golden.'],video:'https://www.youtube.com/embed/PzFo8G6YNz0?si=6PEggtLqgtXoDeSk'},
  // MORE INDIAN SNACKS
  {id:51,name:'Aloo Tikki',cat:'snacks',cuisine:'Indian',time:'30 min',diff:'Easy',emoji:'🥔',img:'aloo taki.jpeg',tags:['Street Food','Crispy','North Indian'],desc:'Crispy potato patties spiced with cumin and amchur, pan-fried golden — Delhi\'s most beloved street snack.',ingredients:['4 boiled potatoes','Cumin seeds','Amchur','Green chili','Coriander','Breadcrumbs','Oil','Garam masala','Ginger'],steps:['Mash potatoes with all spices.','Shape into round patties.','Coat lightly with breadcrumbs.','Shallow fry in oil until golden both sides.','Serve with three chutneys and yogurt.'],video:'https://www.youtube.com/embed/2qq5fmo54SE?si=dZQ9JY1X1MXegPdl'},
  {id:52,name:'Medu Vada',cat:'snacks',cuisine:'Indian',time:'30 min',diff:'Medium',emoji:'🍩',img:'Medu Vada.jpeg',tags:['South Indian','Crispy','Protein'],desc:'Crispy ring-shaped fritters from urad dal batter — South India\'s favourite breakfast snack.',ingredients:['1 cup urad dal','Ginger','Green chilies','Curry leaves','Black pepper','Coconut pieces','Salt','Oil for frying'],steps:['Soak dal 4 hours, grind to thick smooth batter.','Add ginger, chilies, curry leaves and pepper.','Wet hands, shape into rings with hole in centre.','Deep fry in hot oil until golden and crispy.','Serve hot with sambar and coconut chutney.'],video:'https://www.youtube.com/embed/6MH76dIOgUQ?si=GWiB4kY9xB9oeIzc'}
];
window.addEventListener("load", function () {
    document.querySelectorAll(".skeleton").forEach(function (el) {
        el.style.display = "none";
    });

    document.querySelectorAll(".real-content").forEach(function (el) {
        el.style.display = "block";
    });
});
// ===== STATE =====
let activeCat = 'all';
let activeCuisine = 'all';
let liked = new Set();
let logoCt = 0;

// ===== HELPERS =====
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function filterCat(c) {
  activeCat = c;
  activeCuisine = 'all';
  updatePills();
  renderRecipes();
}

function filterCuisine(c) {
  activeCat = 'all';
  activeCuisine = c;
  updatePills();
  renderRecipes();
  scrollToSection('recipes');
}

function filterCatAndCuisine(c, cu) {
  activeCat = c;
  activeCuisine = cu;
  updatePills();
  renderRecipes();
}

function updatePills() {
  document.querySelectorAll('.cat-pill').forEach(p => {
    const matchCat = p.dataset.cat === activeCat;
    const matchCuisine = p.dataset.cuisine === activeCuisine;
    p.classList.toggle('active', matchCat && matchCuisine);
  });
}

function getDiffDot(d) {
  if (d === 'Easy') return '#4a7c59';
  if (d === 'Medium') return '#e8a020';
  return '#c4622d';
}

// ===== RENDER RECIPES =====
function renderRecipes() {
  const grid = document.getElementById('recipesGrid');
  const noRes = document.getElementById('noRes');

  const filtered = RECIPES.filter(r => {
    const mc = activeCat === 'all' || r.cat === activeCat;
    const mcu = activeCuisine === 'all' || r.cuisine === activeCuisine;
    return mc && mcu;
  });

  Array.from(grid.children).forEach(child => {
    if (!child.classList.contains('no-res')) grid.removeChild(child);
  });

  if (filtered.length === 0) {
    noRes.classList.add('show');
    return;
  }
  noRes.classList.remove('show');

  filtered.forEach(r => {
    const card = document.createElement('div');
    card.className = 'rcard';
    const isLiked = liked.has(r.id);

    card.innerHTML = `
      <div class="rcard-img">
        <img src="${r.img}" alt="${r.name}" loading="lazy"
          onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"/>
        <div class="rcard-emoji-fallback" style="display:none">${r.emoji}</div>
        <div class="rcard-badge">${r.cuisine}</div>
        <button class="rcard-fav ${isLiked ? 'liked' : ''}" data-id="${r.id}"
          aria-label="${isLiked ? 'Remove from' : 'Add to'} favourites">
          ${isLiked ? '❤️' : '🤍'}
        </button>
        <div class="rcard-view">View Recipe <span>→</span></div>
      </div>
      <div class="rcard-body">
        <div class="rcard-meta">
          <span class="rcard-cat">${r.cat}</span>
          <span class="rcard-dot"></span>
          <span class="rcard-time">⏱ ${r.time}</span>
        </div>
        <div class="rcard-title">${r.name}</div>
        <div class="rcard-desc">${r.desc}</div>
        <div class="rcard-tags">${r.tags.slice(0, 3).map(t => `<span class="rcard-tag">${t}</span>`).join('')}</div>
        <div class="rcard-footer">
          <span class="rcard-diff">
            <span class="diff-dot" style="background:${getDiffDot(r.diff)}"></span>${r.diff}
          </span>
          <span class="rcard-cuisine">${r.emoji} ${r.cuisine}</span>
        </div>
      </div>`;

    card.querySelector('.rcard-fav').addEventListener('click', e => {
      e.stopPropagation();
      toggleLike(r.id, e.currentTarget);
    });
    card.addEventListener('click', () => openModal(r));

    // Mobile touch: ripple + shimmer
    card.addEventListener('touchstart', function(e) {
      const rect = this.getBoundingClientRect();
      const touch = e.touches[0];
      const x = touch.clientX - rect.left;
      const y = touch.clientY - rect.top;
      const size = Math.max(rect.width, rect.height) * 0.6;

      // Ripple
      const ripple = document.createElement('div');
      ripple.className = 'rcard-ripple';
      ripple.style.cssText = `width:${size}px;height:${size}px;left:${x - size/2}px;top:${y - size/2}px`;
      this.appendChild(ripple);
      ripple.addEventListener('animationend', () => ripple.remove());

      // Shimmer
      let shimmer = this.querySelector('.rcard-shimmer');
      if (!shimmer) {
        shimmer = document.createElement('div');
        shimmer.className = 'rcard-shimmer';
        this.appendChild(shimmer);
      }
      shimmer.classList.remove('shimmer-go');
      void shimmer.offsetWidth;
      shimmer.classList.add('shimmer-go');
    }, { passive: true });

    grid.insertBefore(card, noRes);
  });

  // Staggered card entrance via IntersectionObserver
  observeCards();
}

// ===== TOGGLE LIKE =====
function toggleLike(id, btnEl) {
  if (liked.has(id)) {
    liked.delete(id);
    showToast('Removed from favourites');
    // Update just this button
    if (btnEl) {
      btnEl.classList.remove('liked');
      btnEl.textContent = '🤍';
      btnEl.setAttribute('aria-label', 'Add to favourites');
    }
  } else {
    liked.add(id);
    showToast('Added to favourites ❤️');
    if (btnEl) {
      btnEl.classList.add('liked');
      btnEl.textContent = '❤️';
      btnEl.setAttribute('aria-label', 'Remove from favourites');

      // Heart pop animation
      btnEl.classList.remove('pop-anim');
      void btnEl.offsetWidth;
      btnEl.classList.add('pop-anim');
      btnEl.addEventListener('animationend', () => btnEl.classList.remove('pop-anim'), { once: true });

      // Floating emoji burst
      const emojis = ['❤️', '🔥', '😍', '🍛'];
      emojis.forEach((em, i) => {
        const burst = document.createElement('div');
        burst.className = 'fav-burst';
        burst.textContent = em;
        burst.style.cssText = `top:${btnEl.offsetTop}px;right:${12 + (i - 1.5) * 18}px`;
        btnEl.closest('.rcard').appendChild(burst);
        burst.addEventListener('animationend', () => burst.remove());
      });
    }
  }
  // No full re-render needed — button updated inline
}

// ===== MODAL =====
function openModal(r) {
  document.getElementById('modalContent').innerHTML = `
    <div class="modal-hero">
      <img src="${r.img}" alt="${r.name}"
        onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"/>
      <div class="modal-hero-fallback" style="display:none">${r.emoji}</div>
      <div class="modal-hero-overlay"></div>
      <button class="modal-close-btn" onclick="closeModal()" aria-label="Close">✕</button>
      <div class="modal-title-area">
        <h2>${r.name}</h2>
        <div class="modal-pills">
          <span class="modal-pill green">${r.cuisine}</span>
          <span class="modal-pill">${r.cat}</span>
          <span class="modal-pill">⏱ ${r.time}</span>
          <span class="modal-pill">${r.diff}</span>
          ${r.tags.map(t => `<span class="modal-pill">${t}</span>`).join('')}
        </div>
      </div>
    </div>
    <div class="modal-body">
      <p class="modal-desc">${r.desc}</p>
      <div class="modal-section">🧂 Ingredients</div>
      <ul class="ingr-grid">
        ${r.ingredients.map(i => `<li class="ingr-item">${i}</li>`).join('')}
      </ul>
      <div class="modal-section">👨‍🍳 Method</div>
      <ol class="steps-list">
        ${r.steps.map((s, i) => `
          <li class="step-row">
            <span class="step-n">${i + 1}</span>
            <span class="step-t">${s}</span>
          </li>`).join('')}
      </ol>
   <div class="modal-section">📱 Quick Recipe Short</div>

${r.video ? `
<div class="shorts-wrapper">
  <iframe
    src="${r.video}"
    title="Recipe Short"
    frameborder="0"
    allowfullscreen>
  </iframe>
</div>
` : ''}
    </div>`;

  document.getElementById('modalOv').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOv').classList.remove('open');
  document.body.style.overflow = '';
}

// ===== SEARCH =====
function openSearch() {
  document.getElementById('searchOverlay').classList.add('open');
  setTimeout(() => document.getElementById('searchInput').focus(), 100);
}

function closeSearch() {
  document.getElementById('searchOverlay').classList.remove('open');
  document.getElementById('searchInput').value = '';
  document.getElementById('searchResults').innerHTML = '';
}

function handleSearch(query) {
  const q = query.toLowerCase().trim();
  const res = document.getElementById('searchResults');
  if (!q) { res.innerHTML = ''; return; }

  const found = RECIPES.filter(r =>
    r.name.toLowerCase().includes(q) ||
    r.desc.toLowerCase().includes(q) ||
    r.cuisine.toLowerCase().includes(q) ||
    r.cat.toLowerCase().includes(q) ||
    r.tags.some(t => t.toLowerCase().includes(q))
  );

  if (found.length === 0) {
    res.innerHTML = `<div class="no-sr">No results for "${q}" 🔍</div>`;
    return;
  }

  res.innerHTML = found.slice(0, 8).map(r => `
    <div class="sr-item" data-id="${r.id}" role="button" tabindex="0">
      <img class="sr-img" src="${r.img}" alt="${r.name}" onerror="this.style.display='none'">
      <div class="sr-info">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:3px">
          <span class="sr-cat">${r.cuisine}</span>
          <span style="font-size:.7rem;color:var(--text3)">${r.cat} · ${r.time}</span>
        </div>
        <h4>${r.name}</h4>
        <p>${r.desc.slice(0, 70)}...</p>
      </div>
    </div>`).join('');

  res.querySelectorAll('.sr-item').forEach(el => {
    el.addEventListener('click', () => {
      const recipe = RECIPES.find(x => x.id === parseInt(el.dataset.id));
      if (recipe) { closeSearch(); openModal(recipe); }
    });
  });
}

// ===== TOAST =====
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}

// ===== TYPING EFFECT =====
const WORDS = ['Flavors of India', 'Magic of Spices', 'Art of Cooking', 'Best of World', 'Soul of Rasoi'];
let wordIdx = 0, charIdx = 0, deleting = false;

function type() {
  const el = document.getElementById('typingText');
  if (!el) return;
  const word = WORDS[wordIdx];
  if (!deleting) {
    el.textContent = word.slice(0, ++charIdx);
    if (charIdx === word.length) { deleting = true; setTimeout(type, 2000); return; }
  } else {
    el.textContent = word.slice(0, --charIdx);
    if (charIdx === 0) { deleting = false; wordIdx = (wordIdx + 1) % WORDS.length; }
  }
  setTimeout(type, deleting ? 45 : 85);
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  renderRecipes();

  // Category pills
  document.querySelectorAll('.cat-pill').forEach(p => {
    p.addEventListener('click', () => {
      activeCat = p.dataset.cat;
      activeCuisine = p.dataset.cuisine;
      updatePills();
      renderRecipes();
      scrollToSection('recipes');
    });
  });

  // Navbar scroll
  const navbar = document.getElementById('navbar');
  const btt = document.getElementById('btt');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 30);
    btt.classList.toggle('show', window.scrollY > 400);
  }, { passive: true });

  // Back to top
  btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // Dark mode
  const darkBtn = document.getElementById('darkBtn');
  darkBtn.addEventListener('click', () => {
    const html = document.documentElement;
    const isDark = html.getAttribute('data-theme') === 'dark';
    html.setAttribute('data-theme', isDark ? 'light' : 'dark');
    darkBtn.textContent = isDark ? '☀️' : '🌙';
  });

  // Hamburger / drawer
  document.getElementById('hamburger').addEventListener('click', openDrawer);
  document.getElementById('drawerOverlay').addEventListener('click', closeDrawer);

  // Search
  document.getElementById('searchOverlay').addEventListener('click', e => {
    if (e.target.id === 'searchOverlay') closeSearch();
  });
  document.getElementById('searchInput').addEventListener('input', e => handleSearch(e.target.value));

  // Modal backdrop
  document.getElementById('modalOv').addEventListener('click', e => {
    if (e.target.id === 'modalOv') closeModal();
  });

  // Keyboard
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { closeModal(); closeSearch(); }
  });

  // Easter egg
  document.getElementById('navLogo').addEventListener('click', () => {
    if (++logoCt >= 5) {
      document.getElementById('easterEgg').classList.add('show');
      logoCt = 0;
    }
  });

  // Newsletter
  const subBtn = document.querySelector('.ft-sub-btn');
  if (subBtn) subBtn.addEventListener('click', () => showToast('Subscribed! 🎉'));

  // Reveal on scroll
  const revEls = document.querySelectorAll('.reveal');
  const revObs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
  }, { threshold: 0.1 });
  revEls.forEach(el => revObs.observe(el));

  // Loader
  window.addEventListener('load', () => {
    setTimeout(() => {
      document.getElementById('loader').classList.add('out');
      type();
    }, 1800);
  });
});

// ===== CARD SCROLL OBSERVER =====
let cardObserver = null;
function observeCards() {
  if (cardObserver) cardObserver.disconnect();

  cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const card = entry.target;
        // Determine stagger index among siblings currently not visible
        const allCards = Array.from(card.parentNode.querySelectorAll('.rcard:not(.card-visible)'));
        const idx = allCards.indexOf(card);
        const delay = Math.min(idx * 100, 400); // max 400ms stagger

        setTimeout(() => {
          card.classList.add('card-visible');

          // Auto shimmer on first appear (mobile feel)
          if ('ontouchstart' in window) {
            setTimeout(() => {
              let shimmer = card.querySelector('.rcard-shimmer');
              if (!shimmer) {
                shimmer = document.createElement('div');
                shimmer.className = 'rcard-shimmer';
                card.appendChild(shimmer);
              }
              shimmer.classList.remove('shimmer-go');
              void shimmer.offsetWidth;
              shimmer.classList.add('shimmer-go');
            }, 300);
          }
        }, delay);

        cardObserver.unobserve(card);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

  document.querySelectorAll('.rcard:not(.card-visible)').forEach(card => {
    cardObserver.observe(card);
  });
}

// Drawer
function openDrawer() {
  document.getElementById('mobileDrawer').classList.add('open');
  document.getElementById('drawerOverlay').classList.add('open');
  document.getElementById('hamburger').classList.add('open');
  document.getElementById('hamburger').setAttribute('aria-expanded', 'true');
}

function closeDrawer() {
  document.getElementById('mobileDrawer').classList.remove('open');
  document.getElementById('drawerOverlay').classList.remove('open');
  document.getElementById('hamburger').classList.remove('open');
  document.getElementById('hamburger').setAttribute('aria-expanded', 'false');
}
