
// Updated interface for multi-language text
export interface LocaleText {
  ar: string;
  en: string;
  transliteration: string;
}

// Updated interface for each Adhkar item
export interface AdhkarItem {
  id: number | string;
  text: LocaleText;
  repetitions: number;
  info?: LocaleText;
  audio?: string;
}

// Updated interface for categories
export interface JameahCategory {
  slug: string;
  title: LocaleText;
  iconType: 'filled' | 'outlined';
  adhkar: AdhkarItem[];
}

// The _i18n versions below are now the primary source of data.
// Initial declarations for jameahAdhkarCategories, sabahAdhkarConcise, sabahAdhkar,
// masaAdhkarConcise, and masaAdhkar have been removed to prevent conflicts.

export const sabahAdhkar_i18n: AdhkarItem[] = [
  {
    id: 1,
    text: {
        ar: "رَّبِّ أَعُوذُ بِكَ مِنْ هَمَزَاتِ الشَّيَاطِينِ ، وَأَعُوذُ بِكَ رَبِّ أَن يَحْضُرُونِ",
        en: "My Lord, I seek refuge in You from the incitements of the devils, and I seek refuge in You, my Lord, lest they be present with me.",
        transliteration: "Rabbi a'oodhu bika min hamazatish-shayateen, wa a'oodhu bika rabbi an yahduroon."
    },
    repetitions: 10,
    info: { ar: "سورة [المؤمنون: 97-98].", en: "Surah [Al-Mu'minun: 97-98].", transliteration: "" },
  },
  {
    id: 2,
    text: {
        ar: "رب اغفر لي وتب علي إنك أنت التواب الرحيم",
        en: "My Lord, forgive me and accept my repentance, verily You are the One who accepts repentance, the Most-Merciful.",
        transliteration: "Rabbi-ghfir lee wa tub 'alayya, innaka Antat-Tawwabur-Raheem."
    },
    repetitions: 10,
    info: { ar: "من حديث عبد الله بن عمر ، رواه أبو داود، والترمذي [صحيح].", en: "From the hadith of Abdullah bin Umar, narrated by Abu Dawud, At-Tirmidhi [Sahih].", transliteration: "" },
  },
  {
    id: 3,
    text: {
        ar: "رب لا إله إلا أنت سبحانك إني كنت من الظالمين",
        en: "My Lord, there is no deity except You; exalted are You. Indeed, I have been of the wrongdoers.",
        transliteration: "Rabbi la ilaha illa Anta, subhanaka, inni kuntu minadh-dhalimeen."
    },
    repetitions: 10,
    info: { ar: "من حديث سعد بن أبي وقاص ، وفيه: «لم يَدْعُ بها رَجُلٌ مُسْلمٌ في شَيْءٍ قَطُّ إلَّا اسْتَجابَ اللهُ لهُ»، رواه الترمذي، والحاكم [حسن].", en: "From the hadith of Sa'd ibn Abi Waqqas, in which it is mentioned: 'No Muslim man supplicates with it for anything whatsoever except that Allah responds to him.' Narrated by At-Tirmidhi, Al-Hakim [Hasan].", transliteration: "" },
  },
  {
    id: 4,
    text: {
        ar: "لا إله إلا الله وحده لا شريك له ، له الملك وله الحمد، يحيي ويميت، وهو على كل شيء قدير",
        en: "None has the right to be worshipped except Allah, alone, without partner. To Him belongs all sovereignty and praise. He gives life and causes death, and He is over all things omnipotent.",
        transliteration: "La ilaha illallahu wahdahu la shareeka lah, lahul-mulku wa lahul-hamd, yuhyi wa yumeet, wa Huwa 'ala kulli shay'in Qadeer."
    },
    repetitions: 10,
    info: { ar: "من حديث أَبِي عَيَّاشٍ الزُّرَقِيِّ ، وفيه أن من قالها إذا أصبح وإذا أمسى: «‌كَانَ ‌لَهُ ‌عِدْلَ ‌رَقَبَةٍ ‌مِنْ ‌وَلَدِ ‌إِسْمَاعِيلَ، وَكُتِبَ لَهُ عَشْرُ حَسَنَاتٍ، وَحُطَّ عَنْهُ عَشْرُ سَيِّئَاتٍ، وَرُفِعَ لَهُ عَشْرُ دَرَجَاتٍ، وَكَانَ فِي حِرْزٍ مِنَ الشَّيْطَانِ»، رواه أبو داود، وابن ماجه [صحيح].", en: "From the hadith of Abi 'Ayyash al-Zurqi, in which it says whoever says it in the morning and evening, 'it will be for him the equivalent of freeing a slave from the descendants of Isma'il, and ten good deeds will be written for him, and ten bad deeds will be erased, and he will be raised ten degrees, and he will be in protection from Satan'. Narrated by Abu Dawud, Ibn Majah [Sahih].", transliteration: "" },
  },
  {
    id: 5,
    text: {
        ar: "رَضِيتُ ‌بِاللهِ رَبًّا، ‌وَبِالْإِسْلَامِ ‌دِينًا، وَبِمُحَمَّدٍ ﷺ نَبِّيًا (وَرَسُولًا)",
        en: "I am pleased with Allah as my Lord, with Islam as my religion, and with Muhammad (peace and blessings of Allah be upon him) as my Prophet.",
        transliteration: "Raḍītu billāhi Rabba, wa bil-Islāmi dīna, wa bi-Muḥammadin (ṣallallāhu `alayhi wa sallama) nabiyya."
    },
    repetitions: 3,
    info: { ar: "عن أبي سعيد الخدري، وفيه أن من قاله: «وجبت له الجنة»، رواه أبو داود [حسن].", en: "From Abu Sa'id Al-Khudri, wherein it is mentioned that for whoever says it, 'Paradise becomes obligatory for him'. Narrated by Abu Dawud [Hasan].", transliteration: "" },
  },
  {
    id: 6,
    text: {
        ar: "سُبْحَانَ ‌اللَّهِ ‌وَبِحَمْدِهِ ‌عَدَدَ ‌خَلْقِهِ، وَرِضَا نَفْسِهِ، وَزِنَةَ عَرْشِهِ، وَمِدَادَ كَلِمَاتِهِ",
        en: "How perfect Allah is and I praise Him by the number of His creation, by His pleasure, by the weight of His throne, and by the ink of His words.",
        transliteration: "Subhan-Allahi wa bihamdihi, 'adada khalqihi, wa rida nafsihi, wa zinata 'arshihi, wa midada kalimatihi."
    },
    repetitions: 3,
    info: { ar: "عَنْ جُوَيْرِيَةَ أَنَّ النبيَّ ﷺ قال لها: «لَقَدْ قُلْتُ بَعْدَكِ أَرْبَعَ كَلِمَاتٍ ثَلَاثَ مَرَّاتٍ لَوْ وُزِنَتْ بِمَا قُلْتِ مُنْذُ الْيَوْمِ لَوَزَنَتْهُنَّ سُبْحَانَ اللَّهِ وَبِحَمْدِهِ عَدَدَ خَلْقِهِ، وَرِضَا نَفْسِهِ، وَزِنَةَ عَرْشِهِ، وَمِدَادَ كَلِمَاتِهِ»، رواه مسلم.", en: "From Juwayriyah that the Prophet ﷺ said to her: 'I have recited four words three times after I left you. If these are weighed against what you have recited since morning, these will be heavier: How perfect Allah is and I praise Him by the number of His creation, by His pleasure, by the weight of His throne, and by the ink of His words.' Narrated by Muslim.", transliteration: "" },
  },
  {
    id: 7,
    text: {
        ar: "رَبِّ لَكَ الْحَمْدُ ‌كَمَا ‌يَنْبَغِي ‌لِجَلَالِ ‌وَجْهِكَ ‌وَعَظِيمِ ‌سُلْطَانِكَ",
        en: "My Lord, for You is all praise as is befitting to the majesty of Your Face and the greatness of Your sovereignty.",
        transliteration: "Rabbi lakal-hamdu kama yanbaghi li-jalali wajhika wa 'adheemi sultanik."
    },
    repetitions: 3,
    info: { ar: "عن عبد الله بن عمر أن رسول الله ﷺ حدَّثهم «أَنَّ عَبْدًا مِنْ عِبَادِ اللهِ قَالَ: يَا رَبِّ! لَكَ الْحَمْدُ ... فَعَضَّلَتْ بِالْمَلَكَيْنِ، فَلَمْ يَدْرِيَا كَيْفَ يَكْتُبَانِهَا...فَقَالَ اللهُ  لَهُمَا: اكْتُبَاهَا كَمَا قَالَ عَبْدِي، حَتَّى يَلْقَانِي فَأَجْزِيَهُ بِهَا»، رواه ابن ماجه [يدخل ضمن المعمول به في فضائل الأعمال].", en: "From Abdullah bin Umar that the Messenger of Allah ﷺ told them 'that a slave from the slaves of Allah said: 'O my Lord! For You is all praise...' and it was too great for the two angels, they did not know how to write it down... so Allah said to them: Write it as My slave has said it, until he meets Me and I shall reward him for it'. Narrated by Ibn Majah [Considered permissible to act upon in virtuous deeds].", transliteration: "" },
  },
  {
    id: 8,
    text: {
        ar: "الْحَمْدُ ‌لِلَّهِ ‌عَدَدَ ‌مَا ‌خَلَقَ، الْحَمْدُ لِلَّهِ مِلْءَ مَا خَلَقَ، الْحَمْدُ لِلَّهِ عَدَدَ مَا فِي السَّمَاءِ وَالْأَرْضِ، الْحَمْدُ لِلَّهِ مِلْءَ مَا فِي السَّمَاءِ وَالْأَرْضِ، الْحَمْدُ لِلَّهِ عَدَدَ مَا أَحْصَى كِتَابُهُ، الْحَمْدُ لِلَّهِ مِلْءَ مَا أَحْصَى كِتَابُهُ، الْحَمْدُ لِلَّهِ عَدَدَ كُلِّ شَيْءٍ، الْحَمْدُ لِلَّهِ مِلْءَ كُلِّ شَيْءٍ",
        en: "Praise be to Allah by the number of what He created. Praise be to Allah by the fullness of what He created. Praise be to Allah by the number of what is in the heavens and the earth. Praise be to Allah by the fullness of what is in the heavens and the earth. Praise be to Allah by the number of what His book has enumerated. Praise be to Allah by the fullness of what His book has enumerated. Praise be to Allah by the number of everything. Praise be to Allah by the fullness of everything.",
        transliteration: "Alhamdu lillahi 'adada ma khalaq, alhamdu lillahi mil'a ma khalaq, alhamdu lillahi 'adada ma fis-sama'i wal-ard, alhamdu lillahi mil'a ma fis-sama'i wal-ard, alhamdu lillahi 'adada ma ahsa kitabuh, alhamdu lillahi mil'a ma ahsa kitabuh, alhamdu lillahi 'adada kulli shay', alhamdu lillahi mil'a kulli shay'."
    },
    repetitions: 1,
    info: { ar: "عنْ أَبِي أُمَامَةَ ، قَالَ: رَآنِي النَّبِيُّ ﷺ وَأَنَا أُحَرِّكُ شَفَتَيَّ، فَقَالَ: مَا تَقُولُ يَا أَبَا أُمَامَةَقُلْتُ: أَذْكُرُ اللَّهَ، قَالَ: «أَفَلا أَدُلُّكَ عَلَى مَا هُوَ أَكْثَرُ مِنْ ذِكْرِكَ اللَّهَ اللَّيْلَ مَعَ النَّهَارِ؟ ... تُعَلِّمُهُنَّ عَقِبَكَ مِنْ بَعْدَكَ»، رواه أحمد، والحاكم [صحيح].", en: "From Abu Umamah, who said: The Prophet ﷺ saw me moving my lips, so he asked, 'What are you saying, O Abu Umamah?' I said, 'I am remembering Allah.' He said, 'Shall I not guide you to something that is more than your remembrance of Allah during the night and day? ... Teach them to your offspring after you'. Narrated by Ahmad, Al-Hakim [Sahih].", transliteration: "" },
  },
  {
    id: 9,
    text: {
        ar: "اللَّهمَّ صَلِّ عَلَى مُحَمَّدٍ وآلِ مُـحَمَّدٍ وبارك وسَلِّمْ تَسْلِيمًا كَثِيرًا (تسع مرات)، ويجعل العاشرة:\n «اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ، وبَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ في العَالَمِينَ إِنَّكَ حَمِيدٌ مَجِيدٌ»، [وَسَلِّمْ تَسْلِيمًا كَثِيرًا] «فِـي كُلِّ لَـحْظَةٍ أَبَدًا عَدَدَ خَلْقِكَ، وَرَضَا نَفْسِكَ، وَزِنَةَ عَرْشِكَ، وَمِدَادَ كَلِمَاتِكَ». ",
        en: "O Allah, bestow prayers upon Muhammad and the family of Muhammad, and bless and grant abundant peace (nine times). And on the tenth time make it: 'O Allah, bestow prayers upon Muhammad and upon the family of Muhammad, as You have bestowed prayers upon Ibrahim and upon the family of Ibrahim. Indeed, You are Praiseworthy, Glorious. And bless Muhammad and the family of Muhammad, as You have blessed Ibrahim and the family of Ibrahim among the worlds. Indeed, You are Praiseworthy, Glorious.' [And grant abundant peace] 'in every moment, forever, by the number of Your creation, the pleasure of Yourself, the weight of Your Throne, and the ink of Your words.'",
        transliteration: "Allahumma salli 'ala Muhammadin wa aali Muhammadin wa barik wa sallim tasleeman katheera. (10th time:) 'Allahumma salli 'ala Muhammadin wa 'ala aali Muhammadin kama sallayta 'ala Ibraheema wa 'ala aali Ibraheema innaka Hameedun Majeed, wa barik 'ala Muhammadin wa 'ala aali Muhammadin kama barakta 'ala Ibraheema wa 'ala aali Ibraheema fil-'alameena innaka Hameedun Majeed', [wa sallim tasleeman katheera] 'fi kulli lahdatin abadan 'adada khalqika, wa rida nafsika, wa zinata 'arshika, wa midada kalimatik.'"
    },
    repetitions: 10,
    info: { ar: "عن كعب بن عُجْرَة ، رواه البخاري", en: "From Ka'b bin 'Ujrah, narrated by Al-Bukhari.", transliteration: "" },
  },
  {
    id: 10,
    text: {
        ar: "بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ\nٱللَّهُ لَا إِلَـٰهَ إِلَّا هُوَ ٱلْحَيُّ ٱلْقَيُّومُ لَا تَأْخُذُهُۥ سِنَةٌ وَلَا نَوْمٌ لَّهُۥ مَا فِي ٱلسَّمَٰوَٰتِ وَمَا فِي ٱلْأَرْضِ مَن ذَا ٱلَّذِي يَشْفَعُ عِندَهُۥ إِلَّا بِإِذْنِهِۦ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَيۡءٍ مِّنۡ عِلۡمِهِۦٓ إِلَّا بِمَا شَآءَ وَسِعَ كُرۡسِيُّهُ ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضَ وَلَا يَـُۧودُهُۥ حِفۡظُهُمَا وَهُوَ ٱلۡعَلِيُّ ٱلۡعَظِيمُ.\n- آية الكرسى (البقرة: 255)",
        en: "بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ\nAllah - there is no deity except Him, the Ever-Living, the Sustainer of all existence. Neither drowsiness overtakes Him nor sleep. To Him belongs whatever is in the heavens and whatever is on the earth. Who is it that can intercede with Him except by His permission? He knows what is [presently] before them and what will be after them, and they encompass not a thing of His knowledge except for what He wills. His Kursi (Throne) extends over the heavens and the earth, and their preservation tires Him not. And He is the Most High, the Most Great.\n- Ayah Al-Kursi (Al-Baqarah: 255)",
        transliteration: "بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ\nAllahu la ilaha illa Huwal-Hayyul-Qayyum, la ta'khudhuhu sinatun wala nawm, lahu ma fis-samawati wama fil-ard, man dhal-ladhi yashfa'u 'indahu illa bi-idhnih, ya'lamu ma bayna aydeehim wama khalfahum, wala yuheetoona bishay'im-min 'ilmihi illa bima sha', wasi'a kursiyyuhus-samawati wal-ard, wala ya'ooduhu hifdhuhuma, wa Huwal-'Aliyyul-'Adheem."
    },
    repetitions: 1,
    info: { ar: "أحاديث فضل آية الكرسي كثيرة، منها حديث أبي هريرة عند البخاري: «إِذَا أَوَيْتَ إِلَى فِرَاشِكَ، فَاقْرَأْ آيَةَ الْكُرْسِيِّ.. فَإِنَّكَ لَنْ ‌يَزَالَ ‌عَلَيْكَ ‌مِنَ ‌اللَّهِ ‌حَافِظٌ، وَلَا يَقْرَبَنَّكَ شَيْطَانٌ حَتَّى تُصْبِحَ»، والنص على أنها تُقرأ في الصباح والمساء رواه الطبراني عن أُبَيِّ بن كَعْبٍ [صحيح].", en: "The hadiths on the virtue of Ayah Al-Kursi are many, among them the hadith of Abu Hurairah in Al-Bukhari: 'When you go to your bed, recite Ayah Al-Kursi... for then a guardian from Allah will be with you, and no devil will come near you until morning.' The text stating it should be read in the morning and evening is narrated by At-Tabarani from Ubayy ibn Ka'b [Sahih].", transliteration: "" },
  },
  {
    id: 11,
    text: {
        ar: "بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ\nقُلْ هُوَ اللَّهُ أَحَدٌ اللَّهُ الصَّمَدُ لَمْ يَلِدْ وَلَمْ يُولَدْ وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ.",
        en: "بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ\nSay, 'He is Allah, the One. Allah, the Eternal Refuge. He neither begets nor is born, Nor is there to Him any equivalent.'",
        transliteration: "بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ\nQul huwa Allahu ahad. Allahus-samad. Lam yalid wa lam yoolad. Wa lam yakun lahu kufuwan ahad."
    },
    repetitions: 3,
    info: { ar: "عن عبد الله بن خبيب أن ﷺ قال له: «قل هو الله أحد، والمعوِّذتين حين تمسي وحين تصبح ثلاث مرَّات تكفيك من كل شيء»، أبو داود، الترمذي [حسن].", en: "From Abdullah bin Khubaib that the Prophet ﷺ said to him: 'Recite 'Say, He is Allah, the One' and the two chapters of refuge (Al-Falaq, An-Nas) when you enter the evening and when you enter the morning three times, they will suffice you against everything.' Abu Dawud, At-Tirmidhi [Hasan].", transliteration: "" },
  },
  {
    id: 12,
    text: {
        ar: "بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ\nقُلْ أَعُوذُ بِرَبِّ الْفَلَقِ مِنْ شَرِّ مَا خَلَقَ وَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ وَمِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ.",
        en: "بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ\nSay, 'I seek refuge in the Lord of daybreak, from the evil of that which He created, and from the evil of darkness when it settles, and from the evil of the blowers in knots, and from the evil of an envier when he envies.'",
        transliteration: "بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ\nQul a'oodhu birabbil-falaq. Min sharri ma khalaq. Wa min sharri ghasiqin idha waqab. Wa min sharrin-naffathati fil-'uqad. Wa min sharri hasidin idha hasad."
    },
    repetitions: 3,
    info: { ar: "عن عبد الله بن خبيب أن ﷺ قال له: «قل هو الله أحد، والمعوِّذتين حين تمسي وحين تصبح ثلاث مرَّات تكفيك من كل شيء»، أبو داود، الترمذي [حسن].", en: "From Abdullah bin Khubaib that the Prophet ﷺ said to him: 'Recite 'Say, He is Allah, the One' and the two chapters of refuge (Al-Falaq, An-Nas) when you enter the evening and when you enter the morning three times, they will suffice you against everything.' Abu Dawud, At-Tirmidhi [Hasan].", transliteration: "" },
  },
  {
    id: 13,
    text: {
        ar: "بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ\nقُلْ أَعُوذُ بِرَبِّ النَّاسِ مَلِكِ النَّاسِ إِلَهِ النَّاسِ مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ مِنَ الْجِنَّةِ وَالنَّاسِ.",
        en: "بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ\nSay, 'I seek refuge in the Lord of mankind, the Sovereign of mankind, the God of mankind, from the evil of the retreating whisperer, who whispers into the breasts of mankind, from among the jinn and mankind.'",
        transliteration: "بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ\nQul a'oodhu birabbin-nas. Malikin-nas. Ilahin-nas. Min sharril-waswasil-khannas. Alladhee yuwaswisu fee sudoorin-nas. Minal-jinnati wan-nas."
    },
    repetitions: 3,
    info: { ar: "عن عبد الله بن خبيب أن ﷺ قال له: «قل هو الله أحد، والمعوِّذتين حين تمسي وحين تصبح ثلاث مرَّات تكفيك من كل شيء»، أبو داود، الترمذي [حسن].", en: "From Abdullah bin Khubaib that the Prophet ﷺ said to him: 'Recite 'Say, He is Allah, the One' and the two chapters of refuge (Al-Falaq, An-Nas) when you enter the evening and when you enter the morning three times, they will suffice you against everything.' Abu Dawud, At-Tirmidhi [Hasan].", transliteration: "" },
  },
  {
    id: 14,
    text: {
        ar: "يَا ‌حَيُّ ‌يَا ‌قَيُّومُ ‌يَا ‌ذَا ‌الْجَلالِ ‌وَالإِكْرَامِ، ‌بِرَحْمَتِكَ ‌أَسْتَغِيثُ، ‌أَصْلِحْ ‌لِي ‌شَأْنِي ‌كُلَّهُ، وَلَا تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ",
        en: "O Ever-Living, O Sustainer, O Lord of Majesty and Honor, by Your mercy I seek assistance, rectify for me all of my affairs and do not leave me to myself, even for the blink of an eye.",
        transliteration: "Ya Hayyu, ya Qayyoom, ya Dhal-Jalali wal-Ikram, birahmatika astagheeth, aslih lee sha'nee kullah, wala takilnee ila nafsee tarfata 'ayn."
    },
    repetitions: 1,
    info: { ar: "هذا دعاء فاطمة علَّمه النَّبي ﷺ إيَّاها، رواه البزار، وزيادة: (يا ذا الجلال والإكرام) وردت عند أحمد وغيره [حسن].", en: "This is the supplication of Fatimah, which the Prophet ﷺ taught her. Narrated by Al-Bazzar. The addition (O Lord of Majesty and Honor) is reported by Ahmad and others [Hasan].", transliteration: "" },
  },
  {
    id: 15,
    text: {
        ar: "اللَّهُمَّ اخْتَرْ لي فإِنِّي لا أُحْسِنُ الاختِيارَ، ودَبِّرْ لي فإِنِّي لا أُحْسِنُ التَّدْبِيرَ",
        en: "O Allah, choose for me, for I do not know how to choose. And manage my affairs for me, for I do not know how to manage.",
        transliteration: "Allahumma-khtar lee fa'innee la uhsinul-ikhtiyar, wa dabbir lee fa'innee la uhsinut-tadbeer."
    },
    repetitions: 1,
    info: { ar: "(دعاء لبعض الصالحين).", en: "(A supplication from some of the righteous).", transliteration: "" },
  },
  {
    id: 16,
    text: {
        ar: "رَبِّ أَجِرْنِي مِنَ النَّارِ",
        en: "My Lord, protect me from the Fire.",
        transliteration: "Rabbi ajirnee minan-nar."
    },
    repetitions: 7,
    info: { ar: "عن أنس قال: قال النبي ﷺ: «من سأل الله الجنة ثلاث مرات، قالت الجنة: اللهم أدخله الجنة، ومن استجار من النار ثلاث مرات، قالت النار: اللهم أجره من النار»، رواه الترمذي، والسبع مرات من حديث أبي هريرة ، كما عند أبي يعلى [صحيح].", en: "From Anas, who said the Prophet ﷺ said: 'Whoever asks Allah for Paradise three times, Paradise says: 'O Allah, admit him to Paradise.' And whoever seeks protection from the Fire three times, the Fire says: 'O Allah, protect him from the Fire.'' Narrated by At-Tirmidhi. The seven times repetition is from a hadith of Abu Hurairah, as reported by Abu Ya'la [Sahih].", transliteration: "" },
  },
  {
    id: 17,
    text: {
        ar: "رَبِّ أَسْأَلُكَ الفِرْدَوسَ الأَعْلَى مِنَ الجَنَّةِ مِنْ غَيْرِ سَابِقَةِ حِسَابٍ إِنَّكَ أَنْتَ الوَهَّابُ",
        en: "My Lord, I ask You for the highest level of Paradise, Al-Firdaws, without a preceding reckoning. Verily, You are the Bestower.",
        transliteration: "Rabbi as'alukal-Firdawsal-A'la minal-Jannah min ghayri sabiqati hisab, innaka Antal-Wahhab."
    },
    repetitions: 7,
    info: { ar: "عَنْ أَنَسِ قَالَ: قَالَ ﷺ: «... فَإِذَا سَأَلْتُمُ اللَّهَ فَسَلُوهُ الْفِرْدَوْسَ»، رواه ابن حبان، وأصله في البخاري.", en: "From Anas, who said the Prophet ﷺ said: '...So when you ask Allah, ask for Al-Firdaws.' Narrated by Ibn Hibban, with its origin in Al-Bukhari.", transliteration: "" },
  },
  {
    id: 18,
    text: {
        ar: "اللهم صب علي الخير صبا، ولا تجعل عيشي كدا",
        en: "O Allah, pour goodness upon me in abundance, and do not make my life one of hardship.",
        transliteration: "Allahumma subba 'alayyal-khayra sabba, wa la taj'al 'ayshee kadda."
    },
    repetitions: 3,
    info: { ar: "عن أبي هريرة، وفيه أنه من دعاء سيدنا أيوب ، رواه البخاري، وأحمد.", en: "From Abu Hurairah, and in it is the supplication of our master Ayyub. Narrated by Al-Bukhari and Ahmad.", transliteration: "" },
  },
  {
    id: 19,
    text: {
        ar: "رَبِّ أَسْأَلُكَ أَعْظَمَ البَرَكَةِ فِي نَفْسِي وَوَلَدِي، وَأَهْلِي وَمَالِي، وَعِلْمِي وَعَمَلِي وَوَقْتِي، يَا أَرْحَمَ الرَّاحِمِينَ",
        en: "My Lord, I ask You for the greatest blessing in myself and my children, my family and my wealth, my knowledge and my deeds, and my time, O Most Merciful of the merciful.",
        transliteration: "Rabbi as'aluka a'dhamal-barakati fi nafsee wa waladee, wa ahlee wa malee, wa 'ilmee wa 'amalee wa waqtee, ya Arhamar-rahimeen."
    },
    repetitions: 1,
    info: { ar: "(دعاء لبعضهم).", en: "(A supplication from some of them).", transliteration: "" },
  },
  {
    id: 20,
    text: {
        ar: "اللهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ وَرَحْمَتِكَ؛ فَإِنَّهُ ‌لَا ‌يَمْلِكُهَا ‌إِلَّا ‌أَنْتَ",
        en: "O Allah, I ask You of Your favor and Your mercy, for indeed, no one possesses them except You.",
        transliteration: "Allahumma innee as'aluka min fadlika wa rahmatik, fa'innahu la yamlikuha illa Anta."
    },
    repetitions: 3,
    info: { ar: "عَنْ ابن مسعود ، رواه الطبراني في المعجم الكبير [صحيح].", en: "From Ibn Mas'ud, narrated by At-Tabarani in Al-Mu'jam Al-Kabeer [Sahih].", transliteration: "" },
  },
  {
    id: 21,
    text: {
        ar: "اللَّهُمَّ آتِنِي مِنْ فَضْلِكَ وَرَحْمَتِكَ بِفَضْلِكَ وَرَحْمَتِكَ أَفْضَلَ مَا تُؤْتِي عِبَادَكَ الصَّالحينَ",
        en: "O Allah, grant me from Your favor and Your mercy, by Your favor and Your mercy, the best of what You grant Your righteous servants.",
        transliteration: "Allahumma atinee min fadlika wa rahmatika bi-fadlika wa rahmatika afdala ma tu'tee 'ibadakas-saliheen."
    },
    repetitions: 3,
    info: { ar: "دعاء لبعض الصالحين، وأصله أنَّ رجلًا جاء النَّبيَّ ﷺ وهو يُصلِّي بنا فقال: اللَّهمَّ آتِني أفضَلَ ما تؤتي عبادَكَ الصَّالحينَ»، رواه ابن حبان، والحاكم [حسن].", en: "A supplication of some of the righteous, its origin is that a man came to the Prophet ﷺ while he was praying with us and said: 'O Allah, grant me the best of what you grant your righteous servants'. Narrated by Ibn Hibban and Al-Hakim [Hasan].", transliteration: "" },
  },
  {
    id: 22,
    text: {
        ar: "‌اللَّهُمَّ ‌مَالِكَ ‌الْمُلْكِ، تُؤْتِي الْمُلْكَ مَنْ تَشَاءُ، وَتَنْزِعُ الْمُلْكَ مِمَّنْ تَشَاءُ، وَتُعِزُّ مَنْ تَشَاءُ، وَتُذِلُّ مَنْ تَشَاءُ، بِيَدِكَ الْخَيْرُ، إِنَّكَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، تُولِجُ اللَّيْلَ فِي النَّهَارِ، وَتُولِجُ النَّهَارَ فِي اللَّيْلِ، وَتُخْرِجُ الْحَيَّ مِنَ الْمَيِّتِ، وَتُخْرِجُ الْمَيِّتَ مِنَ الْحَيِّ، وَتَرْزُقُ مَنْ تَشَاءُ بِغَيْرِ حِسَابٍ، رَحْمَنَ الدُّنْيَا وَالْآخِرَةِ وَرَحِيمَهُمَا، تُعْطِيهِمَا مَنْ تَشَاءُ، وَتَمْنَعُ مِنْهُمَا مَنْ تَشَاءُ، ارْحَمْنِي رَحْمَةً تُغْنِينِي بِهَا عَنْ رَحْمَةِ مَنْ سِوَاكَ، يَا أَرْحَمَ الرَّاحِمِينَ",
        en: "O Allah, Owner of Sovereignty, You give sovereignty to whom You will and You take sovereignty away from whom You will. You honor whom You will and You humble whom You will. In Your hand is [all] good. Indeed, You are over all things competent, You cause the night to enter the day, and You cause the day to enter the night; and You bring the living out of the dead, and You bring the dead out of the living. And You give provision to whom You will without account, O Most-Merciful of this world and the Hereafter, and the Most-Compassionate of them. You give them to whom You will and You withhold them from whom You will. Bestow mercy upon me, a mercy by which I have no need of the mercy of anyone besides you, O Most Merciful of the merciful.",
        transliteration: "Allāhumma mālikal-mulki, tu'til-mulka man tashā'u, wa tanzi'ul-mulka mimman tashā'u, wa tu'izzu man tashā'u, wa tudhillu man tashā'u, biyadikal-khayr, innaka 'alā kulli shay'in qadīr. Tūlijul-layla fīn-nahār, wa tūlijun-nahāra fil-layl, wa tukhrijul-hayya minal-mayyiti, wa tukhrijul-mayyita minal-hayyi, wa tarzuqu man tashā'u bighayri hisāb. Rahmānad-dunyā wal-ākhirati wa rahīmahumā, tu'ṭīhimā man tashā'u, wa tamna'u minhumā man tashā'. Irhamnī rahmatan tughnīnī bihā 'an rahmati man siwāk, yā arhamar-rāhimīn."
    },
    repetitions: 1,
    info: { ar: "عن أنس  قال: قال رسول الله ﷺ لمعاذ : «أَلا أُعلِّمُك دعاءً تدعو به لو كان عليك مثلُ جبلِ أُحُدٍ دَيْنًا لأدَّاه اللهُ عنك؟ قل يا معاذُ: اللهمَّ مالكَ الملكِ ...الحديث»، رواه الطبراني في الصغير [حسن]. ", en: "On the authority of Anas, who said: The Messenger of Allah (ﷺ) said to Mu'adh: Shall I not teach you a supplication with which, if you were to have a debt like the mountain of Uhud, Allah would settle it for you? Say, O Mu'adh: O Allah, Owner of the Kingdom... (and then he recited the rest of the supplication).Narrated by Al-Tabarani in Al-Saghir and classified as Hasan (Good).", transliteration: "An Anas qāla: Qāla Rasūlullāhi (ﷺ) li-Mu'ādh: «A lā u'allimuka du'ā'an tad'ū bihi law kāna 'alayka mithla jabali Uḥudin daynan la-addāhu Allāhu 'anka? Qul yā Mu'ādh: Allāhumma mālikal-mulki... (wa then the rest of the long du'a from the previous message follows)...Al-Ḥadīth». Riwāhu al-Ṭabarānī fī al-Ṣaghīr [Ḥasan]" },
  },
  {
    id: 23,
    text: {
        ar: "اللَّهُمَّ ‌اكْفِنِي ‌بِحَلَالِكَ ‌عَنْ ‌حَرَامِكَ، وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ",
        en: "O Allah, suffice me with Your lawful provision against Your unlawful provision, and make me independent of all those besides You.",
        transliteration: "Allahummak-finee bihalalika 'an haramik, wa aghninee bifadlika 'amman siwak."
    },
    repetitions: 3,
    info: { ar: "عن علِيٍّ ، رواه أحمد، والترمذي [حسن].", en: "From 'Ali, narrated by Ahmad and At-Tirmidhi [Hasan].", transliteration: "" },
  },
  {
    id: 24,
    text: {
        ar: "اللَّهُمَّ ‌مَالِكَ ‌الْمُلْكِ، تُؤْتِي الْمُلْكَ مَنْ تَشَاءُ، وَتَنْزِعُ الْمُلْكَ مِمَّنْ تَشَاءُ، وَتُعِزُّ مَنْ تَشَاءُ، وَتُذِلُّ مَنْ تَشَاءُ، بِيَدِكَ الْخَيْرُ، إِنَّكَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، تُولِجُ اللَّيْلَ فِي النَّهَارِ، وَتُولِجُ النَّهَارَ فِي اللَّيْلِ، وَتُخْرِجُ الْحَيَّ مِنَ الْمَيِّتِ، وَتُخْرِجُ الْمَيِّتَ مِنَ الْحَيِّ، وَتَرْزُقُ مَنْ تَشَاءُ بِغَيْرِ حِسَابٍ، رَحْمَنَ الدُّنْيَا وَالْآخِرَةِ وَرَحِيمَهُمَا، تُعْطِيهِمَا مَنْ تَشَاءُ، وَتَمْنَعُ مِنْهُمَا مَنْ تَشَاءُ، ارْحَمْنِي رَحْمَةً تُغْنِينِي بِهَا عَنْ رَحْمَةِ مَنْ سِوَاكَ، يَا أَرْحَمَ الرَّاحِمِينَ",
        en: "O Allah, Owner of Sovereignty, You give sovereignty to whom You will and You take sovereignty away from whom You will. You honor whom You will and You humble whom You will. In Your hand is all good. Indeed, You are over all things competent. You cause the night to enter the day, and You cause the day to enter the night. You bring the living out of the dead, and You bring the dead out of the living. And You give provision to whom You will without account. O Most-Merciful of this world and the Hereafter, and the Most-Compassionate of them. You give them to whom You will and You withhold them from whom You will. Bestow mercy upon me, a mercy by which I have no need of the mercy of anyone besides you, O Most Merciful of the merciful.",
        transliteration: "Allahumma Malikal-Mulk, tu'til-mulka man tasha', wa tanzi'ul-mulka mimman tasha', wa tu'izzu man tasha', wa tudhillu man tasha', biyadikal-khayr, innaka 'ala kulli shay'in Qadeer. Tulijul-layla fin-nahar, wa tulijun-nahara fil-layl, wa tukhrijul-hayya minal-mayyit, wa tukhrijul-mayyita minal-hayy, wa tarzuqu man tasha'u bighayri hisab. Rahmanad-dunya wal-akhirati wa raheemahuma, tu'teehima man tasha', wa tamna'u minhuma man tasha', irhamnee rahmatan tughneenee biha 'an rahmati man siwak, ya Arhamar-rahimeen."
    },
    repetitions: 1,
    info: { ar: "عن أنس قال: قال رسول الله ﷺ لمعاذ : «أَلا أُعلِّمُك دعاءً تدعو به لو كان عليك مثلُ جبلِ أُحُدٍ دَيْنًا لأدَّاه اللهُ عنك؟ قل يا معاذُ: اللهمَّ مالكَ الملكِ ...الحديث»، رواه الطبراني في الصغير [حسن]. ", en: "From Anas, who said the Messenger of Allah ﷺ said to Mu'adh: 'Shall I not teach you a supplication to say, that if you had a debt like Mount Uhud, Allah would pay it off for you? Say, O Mu'adh: 'O Allah, Owner of Sovereignty...'' the hadith. Narrated by At-Tabarani in As-Saghir [Hasan].", transliteration: "" },
  },
  {
    id: 25,
    text: {
        ar: "اللَّهُمَّ افْتَحْ لِي مِنْ خَزَائِنِ رَحْمَتِكَ رَحْمَةً لا تُعَذْبنِي بَعْدَها أَبَدًا فِي الدُّنْيَا والآخِرَةِ، وَمِنْ فَضْلِكَ الوَاسِعِ رِزْقًا حَلَالًا طَيِّبًا (كَثِيرًا مِدْرَارًا، مُبَاركًا فِيْهِ، مُبَاركًا عَلَيْهِ) لا تُفْقِرْنِي بَعْدَهُ إِلَى أَحَدٍ سِوَاكَ أَبَدًا، تَزِيدُنِي لَكَ بِهِمَا شُكْرًا، ‌وَإِلَيْكَ ‌فَاقَةً ‌وَفَقْرًا، وَبِكَ عَمَّنْ سِوَاكَ غِنًى وَتَعَفُّفًا، يَا أَرْحَمَ الرَّاحِمِينَ",
        en: "O Allah, open for me from the treasures of Your mercy, a mercy after which You will never punish me in this world or the Hereafter. And from Your vast favor, a lawful, good provision (abundant, flowing, blessed within it, blessed upon it) after which I will never be in need of anyone besides You, ever. That it may increase me in gratitude to You, and in neediness and poverty towards You, and by You, I am free from need and self-sufficient from all besides You, O Most Merciful of the merciful.",
        transliteration: "Allahumma-ftah lee min khaza'ini rahmatika rahmatan la tu'adh-dhibanee ba'daha abadan fid-dunya wal-akhirah, wa min fadlikal-wasi'i rizqan halalan tayyiban (katheeran midraran, mubarakan feehi, mubarakan 'alayhi) la tufqirnee ba'dahu ila ahadin siwaka abada, tazeedunee laka bihima shukra, wa ilayka faqatan wa faqra, wa bika 'amman siwaka ghinan wa ta'affufa, ya Arhamar-rahimeen."
    },
    repetitions: 1,
    info: { ar: "دعاء بكر بن عبد الله المزني بتصرف.", en: "Supplication of Bakr bin Abdullah Al-Muzani, with some adaptation.", transliteration: "" },
  },
  {
    id: 26,
    text: {
        ar: "رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا",
        en: "Our Lord, grant us from among our wives and offspring comfort to our eyes and make us an example for the righteous.",
        transliteration: "Rabbana hab lana min azwajina wa dhurriyyatina qurrata a'yunin waj'alna lil-muttaqeena imama."
    },
    repetitions: 1,
    info: { ar: "سورة [الفرقان: 74].", en: "Surah [Al-Furqan: 74].", transliteration: "" },
  },
  {
    id: 27,
    text: {
        ar: "رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ وَعَلَى وَالِدَيَّ وَأَنْ أَعْمَلَ صَالِحًا تَرْضَاهُ وَأَصْلِحْ لِي فِي ذُرِّيَّتِي إِنِّي تُبْتُ إِلَيْكَ وَإِنِّي مِنَ الْمُسْلِمِينَ",
        en: "My Lord, enable me to be grateful for Your favor which You have bestowed upon me and upon my parents and to do righteousness of which You approve. And make righteous for me my offspring. Indeed, I have repented to You, and indeed, I am of the Muslims.",
        transliteration: "Rabbi awzi'nee an ashkura ni'matakal-latee an'amta 'alayya wa 'ala walidayya wa an a'mala salihan tardahu wa aslih lee fee dhurriyyatee, innee tubtu ilayka wa innee minal-muslimeen."
    },
    repetitions: 1,
    info: { ar: "سورة [الأحقاف: 15].", en: "Surah [Al-Ahqaf: 15].", transliteration: "" },
  },
  {
    id: 28,
    text: {
        ar: "ربِّ اهْدِنِي لأَحْسَنِ الأَخْلاقِ والأَقْوَالِ والأَعْمَالِ، لا يَهْدِي لأَحْسَنِهَا إِلَّا أَنْتَ، وَاصْرِفْ عَنِّي سَيِّئَهَا، لا يَصْرِفُ عَنِّي سَيِّئَهَا إِلا أَنْتَ",
        en: "My Lord, guide me to the best of character, speech, and deeds; no one guides to the best of them except You. And turn away from me the worst of them; no one turns away from me the worst of them except You.",
        transliteration: "Rabbi-hdinee li-ahsanil-akhlaqi wal-aqwali wal-a'mal, la yahdee li-ahsaniha illa Anta, wasrif 'annee sayyi'aha, la yasrifu 'annee sayyi'aha illa Anta."
    },
    repetitions: 1,
    info: { ar: "عنْ عَلِيِّ بْنِ أَبِي طَالِبٍ ، رواه مسلم.", en: "From 'Ali ibn Abi Talib, narrated by Muslim.", transliteration: "" },
  },
  {
    id: 29,
    text: {
        ar: "اللَّهُمَّ ‌آتِ ‌نَفْسِي ‌تَقْوَاهَا، زَكِّهَا أَنْتَ خَيْرُ مَنْ زَكَّاهَا، أَنْتَ وَلِيُّهَا وَمَوْلَاهَا",
        en: "O Allah, grant my soul its piety, and purify it, You are the best to purify it. You are its protector and its master.",
        transliteration: "Allahumma ati nafsee taqwaha, zakkiha Anta khayru man zakkaha, Anta waliyyuha wa mawlaha."
    },
    repetitions: 1,
    info: { ar: "عَنْ زَيْدِ بْنِ أَرْقَمَ، رواه مسلم.", en: "From Zayd ibn Arqam, narrated by Muslim.", transliteration: "" },
  },
  {
    id: 30,
    text: {
        ar: "اللَّهُمَّ ‌احْفَظْنِي ‌بِالْإِسْلَامِ ‌قَائِمًا، وَاحْفَظْنِي بِالْإِسْلَامِ قَاعِدًا، وَاحْفَظْنِي بِالْإِسْلَامِ رَاقِدًا، وَلَا تُشْمِتْ بِي عَدُوًّا وَلَا حَاسِدًا، اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ كُلِّ خَيْرٍ خَزَائِنُهُ بِيَدِكَ، وأعوذُ بِكَ مِنْ كُلِّ شَرٍّ خَزَائِنُهُ بِيَدِكَ",
        en: "O Allah, protect me with Islam while standing, and protect me with Islam while sitting, and protect me with Islam while lying down, and do not let an enemy or an envier rejoice at my expense. O Allah, I ask You for all good whose treasures are in Your hand, and I seek refuge in You from all evil whose treasures are in Your hand.",
        transliteration: "Allahumma-hfazni bil-islami qa'iman, wahfazni bil-islami qa'idan, wahfazni bil-islami raqidan, wa la tushmit bee 'aduwwan wala hasida. Allahumma inni as'aluka min kulli khayrin khaza'inuhu biyadik, wa a'oodhu bika min kulli sharrin khaza'inuhu biyadik."
    },
    repetitions: 1,
    info: { ar: "عن ابن مسعود، رواه الحاكم [حسن].", en: "From Ibn Mas'ud, narrated by Al-Hakim [Hasan].", transliteration: "" },
  },
  {
    id: 31,
    text: {
        ar: "اللَّهُمَّ إِنِّي أَسْأَلُكَ فِعْلَ الْخَيْرَاتِ، وَتَرْكَ الْمُنْكَرَاتِ، وَحُبَّ الْمَسَاكِينِ، وَأَنْ تَغْفِرَ لِي وَتَرْحَمَنِي، وَإِذَا أَرَدْتَ بِقَوْمٍ فِتْنَةً فَتَوَفَّنِي إِلَيْكَ، وَأَنَا غَيْرُ مَفْتُونٍ، اللَّهُمَّ إِنِّي أَسْأَلُكَ حُبَّكَ، وَحُبَّ مَنْ يُحِبُّكَ، وَحُبًّا يُبَلِّغُنِي حُبَّكَ -يَا أَرْحَمَ الرَّاحِمِينَ",
        en: "O Allah, I ask You for the performance of good deeds, the avoidance of evil deeds, and the love of the poor. And that You forgive me and have mercy on me. And if You intend a trial for a people, then take me to You without being tested. O Allah, I ask You for Your love, the love of those who love You, and a love that will bring me to Your love - O Most Merciful of the merciful.",
        transliteration: "Allahumma inni as'aluka fi'lal-khayrat, wa tarkal-munkarat, wa hubbal-masakeen, wa an taghfira lee wa tarhamanee, wa idha aradta biqawmin fitnatan fatawaffanee ilayka, wa ana ghayru maftoon. Allahumma inni as'aluka hubbak, wa hubba man yuhibbuk, wa hubban yuballighunee hubbak - ya Arhamar-rahimeen."
    },
    repetitions: 1,
    info: { ar: "عنْ ثَوْبَانَ، رواه البزار [صحيح لغيره].", en: "From Thawban, narrated by Al-Bazzar [Sahih li-ghayrihi].", transliteration: "" },
  },
  {
    id: 32,
    text: {
        ar: "اللهُمَّ إِنِّي أَسْأَلُكَ الثَّبَاتَ فِي الْأَمْرِ، ‌وَالْعَزِيمَةَ ‌عَلَى ‌الرُّشْدِ، وَأَسْأَلُكَ شُكْرَ نِعْمَتِكَ، وحُسْنَ عِبَادَتِكَ، وأَسْأَلُكَ مُوجِبَاتِ رَحْمَتِكَ، وَعَزَائِمَ مَغْفِرَتِكَ، وَأَسْأَلُكَ قَلْبًا سَلِيمًا، وَلِسَانًا صَادِقًا، (‌وَخُلُقًا ‌مُسْتَقِيمًا)، وَأَسْأَلُكَ مِنْ خَيْرِ مَا تَعْلَمُ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا تَعْلَمُ، وَأَسْتَغْفِرُكَ لِمَا تَعْلَمُ، إِنَّكَ أَنْتَ عَلَّامُ الْغُيوبِ",
        en: "O Allah, I ask You for firmness in the affair, and determination in guidance. I ask You for gratitude for Your blessings, and excellence in Your worship. I ask You for the causes of Your mercy, and the resolves of Your forgiveness. I ask You for a sound heart, and a truthful tongue, (and upright character). I ask You for the good of what You know, and I seek refuge in You from the evil of what You know, and I seek Your forgiveness for what You know. Indeed, You are the Knower of the unseen.",
        transliteration: "Allahumma inni as'alukat-thabata fil-amr, wal-'azeemata 'alar-rushd, wa as'aluka shukra ni'matik, wa husna 'ibadatik, wa as'aluka mujibati rahmatik, wa 'aza'ima maghfiratik, wa as'aluka qalban saleema, wa lisanan sadiqa, (wa khuluqan mustaqeema), wa as'aluka min khayri ma ta'lam, wa a'oodhu bika min sharri ma ta'lam, wa astaghfiruka lima ta'lam, innaka Anta 'Allamul-ghuyoob."
    },
    repetitions: 1,
    info: { ar: "عن شداد بن أوس، رواه أحمد، الطبراني في الكبير، وما بين القوسين زيادة من المستدرك [حسن].", en: "From Shaddad bin Aws, narrated by Ahmad, At-Tabarani in Al-Kabeer. The addition in brackets is from Al-Mustadrak [Hasan].", transliteration: "" },
  },
  {
    id: 33,
    text: {
        ar: "اللَّهُمَّ فَاطِرَ السَّمَوَاتِ وَالْأَرْضِ، عَالِمَ الْغَيْبِ وَالشَّهَادَةِ، رَبَّ كُلِّ شَيْءٍ وَمَلِيكَهُ، أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا أَنْتَ، أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي، ‌وَشَرِّ ‌الشَّيْطَانِ ‌وَشَرَكِهِ، وَأَنْ أَقْتَرِفَ عَلَى نَفْسِي سُوءًا، أَوْ أَجُرَّهُ إِلَى مُسْلِمٍ",
        en: "O Allah, Originator of the heavens and the earth, Knower of the unseen and the witnessed, Lord and Sovereign of all things. I bear witness that there is no deity but You. I seek refuge in You from the evil of my own self, and from the evil of Satan and his snares, and from inflicting evil upon myself or bringing it upon any Muslim.",
        transliteration: "Allahumma Fatiras-samawati wal-ard, 'Alimal-ghaybi wash-shahadah, Rabba kulli shay'in wa maleekah, ash-hadu an la ilaha illa Ant, a'oodhu bika min sharri nafsee, wa sharri-shaytani wa sharakihi, wa an aqtarifa 'ala nafsee soo'an, aw ajurrahu ila muslim."
    },
    repetitions: 1,
    info: { ar: "عن أبي بكر الصديق، رواه الترمذي [صحيح].", en: "From Abu Bakr As-Siddiq, narrated by At-Tirmidhi [Sahih].", transliteration: "" },
  },
  {
    id: 34,
    text: {
        ar: "اللَّهُمَّ إِنِّى أَسْأَلُكَ الْهُدَى وَالتُّقَى، وَالْعَفَافَ وَالْغِنَى",
        en: "O Allah, I ask You for guidance, piety, chastity, and self-sufficiency.",
        transliteration: "Allahumma inni as'alukal-huda wat-tuqa, wal-'afafa wal-ghina."
    },
    repetitions: 1,
    info: { ar: "عن عبد الله بن مسعود، رواه مسلم.", en: "From Abdullah bin Mas'ud, narrated by Muslim.", transliteration: "" },
  },
  {
    id: 35,
    text: {
        ar: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ ، وَالْحَمْدُ لِلَّهِ، وَالْكِبْرِيَاءُ وَالْعَظَمَةُ لِلَّهِ، وَالْخَلْقُ وَالْأَمْرُ، وَاللَّيْلُ وَالنَّهَارُ وَمَا سَكَنَ فِيهِمَا لِلَّهِ عَزَّ وَجَلَّ، اللَّهُمَّ اجْعَلْ أَوَّلَ هَذَا النَّهَارِ صَلَاحًا، وَأَوْسَطَهُ نَجَاحًا، وَآخِرَهُ فَلَاحًا، أَسْأَلُكَ ‌خَيْرَ ‌الدُّنْيَا وَالْآخِرَةِ، يَا أَرْحَمَ الرَّاحِمِينَ",
        en: "We have entered the morning and at this very time all sovereignty belongs to Allah. All praise is for Allah. All greatness and magnificence belong to Allah. The creation and the command, the night and the day and all that dwells within them belong to Allah, the Mighty and Majestic. O Allah, make the beginning of this day righteous, its middle successful, and its end prosperous. I ask You for the good of this world and the Hereafter, O Most Merciful of the merciful.",
        transliteration: "Asbahna wa asbahal-mulku lillah, wal-hamdu lillah, wal-kibriya'u wal-'adhamatu lillah, wal-khalqu wal-amru, wal-laylu wan-naharu wama sakana feehima lillahi 'azza wa jall. Allahumma-j'al awwala hadhan-nahari salaha, wa awsatahu najaha, wa akhirahu falaha. As'aluka khayrad-dunya wal-akhirah, ya Arhamar-rahimeen."
    },
    repetitions: 1,
    info: { ar: "عن عبد الله بْنِ أَبِي أَوْفَى، رواه ابن السني في عمل اليوم والليلة، والطبراني في الدعاء [يدخل ضمن المعمول به في فضائل الأعمال].", en: "From Abdullah ibn Abi Awfa, narrated by Ibn As-Sunni in 'Amal Al-Yawm wa Al-Laylah' and At-Tabarani in 'Ad-Du'a' [Considered permissible to act upon in virtuous deeds].", transliteration: "" },
  },
  {
    id: 36,
    text: {
        ar: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ رَبِّ الْعَالَمِينَ، اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ هَذَا الْيَوْمِ ‌فَتْحَهُ، ‌وَنَصْرَهُ، وَنُورَهُ، وَبَرَكَتَهُ، وَهُدَاهُ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِيهِ، وَشَرِّ مَا قَبْلَهُ، وَشَرِّ مَا بَعْدَهُ",
        en: "We have entered the morning and at this time all sovereignty belongs to Allah, Lord of the worlds. O Allah, I ask You for the good of this day: its victory, its help, its light, its blessings, and its guidance. I seek refuge in You from the evil that is in it and from the evil that came before it and the evil that comes after it.",
        transliteration: "Asbahna wa asbahal-mulku lillahi Rabbil-'alameen. Allahumma inni as'aluka khayra hadhal-yawm: fat-hahu, wa nasrahu, wa noorahu, wa barakatahu, wa hudahu. Wa a'oodhu bika min sharri ma feehi, wa sharri ma qablahu, wa sharri ma ba'dah."
    },
    repetitions: 1,
    info: { ar: "عن أبي هريرة، رواه أبو داود [إسناده ضعيف].", en: "From Abu Hurairah, narrated by Abu Dawud [Its chain of narration is weak].", transliteration: "" },
  },
  {
    id: 37,
    text: {
        ar: "اللَّهُمَّ اجْعَلْنِي مِنْ أَوْفَـِر عِبَادِكَ حظًّا فِي كُلِّ خَيْرٍ ‌تَقْسِمُهُ ‌الْغَدَاةَ، ونُوْرٍ يَهْدِي، وَرَحْمَةٍ تَنْشُرُهَا، ورِزْقٍ تَبْسُطُهُ، وبَلَاءٍ تَرْفَعُهُ، وَفِتْنَةٍ تَصْرِفُهَا",
        en: "O Allah, make me among Your servants who have the most abundant share of every good that You distribute this morning, of a light that guides, a mercy that You spread, a provision that You extend, a trial that You lift, and a tribulation that You avert.",
        transliteration: "Allahumma-j'alnee min awfari 'ibadika hadhdhan fee kulli khayrin taqsimuhul-ghadah, wa noorin yahdee, wa rahmatin tanshuruha, wa rizqin tabsutuh, wa balaa'in tarfa'uh, wa fitnatin tasrifuha."
    },
    repetitions: 1,
    info: { ar: "عن ابن عباس، رواه الطبراني في الكبير والأوسط [إسناده ضعيف].", en: "From Ibn 'Abbas, narrated by At-Tabarani in Al-Kabeer and Al-Awsat [Its chain of narration is weak].", transliteration: "" },
  },
  {
    id: 38,
    text: {
        ar: "اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ النُّشُورُ",
        en: "O Allah, by You we enter the morning and by You we enter the evening, by You we live and by You we die, and to You is the resurrection.",
        transliteration: "Allahumma bika asbahna, wa bika amsayna, wa bika nahya, wa bika namoot, wa ilaykan-nushoor."
    },
    repetitions: 1,
    info: { ar: "عَنْ أَبِي هُرَيْرَةَ، رواه البخاري في الأدب المفرد، وأبو داود، والترمذي [صحيح].", en: "From Abu Hurairah, narrated by Al-Bukhari in Al-Adab Al-Mufrad, Abu Dawud, and At-Tirmidhi [Sahih].", transliteration: "" },
  },
  {
    id: 39,
    text: {
        ar: "أَصْبَحْنَا ‌وَأَصْبَحَ ‌الْمُلْكُ ‌لِلَّهِ، وَالْحَمْدُ لِلَّهِ لَا شَرِيكَ لَهُ، لَا إِلَهَ إِلَّا هُوَ، وَإِلَيْهِ النُّشُورُ",
        en: "We have entered the morning and at this time all sovereignty belongs to Allah. Praise is to Allah, He has no partner. There is no deity but Him and to Him is the resurrection.",
        transliteration: "Asbahna wa asbahal-mulku lillah, wal-hamdu lillahi la shareeka lah, la ilaha illa Huwa, wa ilayhin-nushoor."
    },
    repetitions: 3,
    info: { ar: "عن أبي هريرة، رواه ابن السني في عمل اليوم والليلة [إسناده حسن].", en: "From Abu Hurairah, narrated by Ibn As-Sunni in 'Amal Al-Yawm wa Al-Laylah' [Its chain of narration is Hasan].", transliteration: "" },
  },
  {
    id: 40,
    text: {
        ar: "أَصْبَحْنَا ‌عَلَى ‌فِطْرَةِ ‌الْإِسْلَامِ، وَكَلِمَةِ الْإِخْلَاصِ، وَعَلَى دِينِ نَبِيِّنَا مُحَمَّدٍ ﷺ، وَعَلَى مِلَّةِ أَبِينَا إِبْرَاهِيمَ حَنِيفًا مُسْلِمًا، وَمَا كَانَ مِنَ الْمُشْرِكِينَ",
        en: "We have entered the morning upon the natural disposition of Islam, the word of sincere devotion, the religion of our Prophet Muhammad ﷺ, and the faith of our father Ibrahim, inclining toward truth, a Muslim, and he was not of those who associate others with Allah.",
        transliteration: "Asbahna 'ala fitratil-islam, wa 'ala kalimatil-ikhlas, wa 'ala deeni nabiyyina Muhammadin ﷺ, wa 'ala millati abeena Ibraheema Haneefan Muslima, wama kana minal-mushrikeen."
    },
    repetitions: 1,
    info: { ar: "عن عبد الرحمن بن أبزى، رواه أحمد، والنسائي في عمل اليوم والليلة [صحيح].", en: "From 'Abd al-Rahman ibn Abza, narrated by Ahmad and An-Nasa'i in 'Amal Al-Yawm wa Al-Laylah' [Sahih].", transliteration: "" },
  },
  {
    id: 41,
    text: {
        ar: "اللَّهُمَّ أَصْبَحْتُ مِنْكَ فِي نِعْمَةٍ وَعَافِيَةٍ وَسِتْرٍ؛ فَأَتِمَّ عَلَيَّ نِعْمَتَكَ وَعَافِيَتَكَ وَسِتْرَكَ فِي الدُّنْيَا وَالْآخِرَةِ",
        en: "O Allah, I have entered the morning with Your blessings, well-being, and protection. So perfect Your blessings, well-being, and protection for me in this world and the Hereafter.",
        transliteration: "Allahumma asbahtu minka fee ni'matin wa 'afiyatin wa sitr; fa'atimma 'alayya ni'mataka wa 'afiyataka wa sitraka fid-dunya wal-akhirah."
    },
    repetitions: 3,
    info: { ar: "عن ابن عباس، رواه ابن السني في عمل اليوم والليلة [إسناده ضعيف].", en: "From Ibn 'Abbas, narrated by Ibn As-Sunni in 'Amal Al-Yawm wa Al-Laylah' [Its chain of narration is weak].", transliteration: "" },
  },
  {
    id: 42,
    text: {
        ar: "اللَّهُمَّ ما ‌أصْبَحَ ‌بِي ‌مِنْ ‌نِعْمَةٍ، أَوْ بِأَحَدٍ مِنْ خَلْقِكَ، فَمِنْكَ وَحْدَكَ لَا شَرِيكَ لَكَ، فلك الحَمْدُ، وَلَكَ الشُّكْرُ",
        en: "O Allah, whatever blessing has come to me or to any of Your creation this morning is from You alone, without partner. So for You is all praise, and to You is all gratitude.",
        transliteration: "Allahumma ma asbaha bee min ni'matin, aw bi-ahadin min khalqik, faminka wahdaka la shareeka lak, falakal-hamdu, wa lakash-shukr."
    },
    repetitions: 3,
    info: { ar: "عن عبد الله بن غنام البياضي وفيه: من قال ذلك فقد أدى شكر يومه، رواه أبو داود [حسن].", en: "From 'Abdullah bin Ghannam Al-Bayadi, in which it is mentioned: 'Whoever says this has fulfilled the gratitude of his day.' Narrated by Abu Dawud [Hasan].", transliteration: "" },
  },
  {
    id: 43,
    text: {
        ar: "اللَّهُمَّ إِنِّي أصْبَحْتُ ‌أُشْهِدُكَ ‌وأُشْهِدُ ‌حَمَلَةَ ‌عَرْشِكَ وَمَلائِكَتَكَ وَجَمِيعَ خَلْقِكَ أنَّكَ أنتَ الله لا إِلهَ إِلَّا أنْتَ، وَحْدَكَ لَا شَرِيكَ لَكَ، وأنَّ مُحَمَّداً ﷺ عَبْدُكَ وَرَسُولُكَ",
        en: "O Allah, I have entered the morning and I call upon You and upon the bearers of Your Throne, Your angels, and all of Your creation to bear witness that surely You are Allah, there is no deity but You, You are alone and have no partner, and that Muhammad ﷺ is Your slave and Your Messenger.",
        transliteration: "Allahumma innee asbahtu ush-hiduka wa ush-hidu hamalata 'arshik, wa mala'ikatak, wa jamee'a khalqik, annaka Antallahu la ilaha illa Ant, wahdaka la shareeka lak, wa anna Muhammadan ﷺ 'abduka wa rasooluk."
    },
    repetitions: 4,
    info: { ar: "عن أنس بن مالك وفيه: من قال ذلك أربعًا، أَعتَقَه الله من النار»، رواه أبو داود [حسن].", en: "From Anas bin Malik, wherein it is mentioned: 'Whoever says that four times, Allah will free him from the Fire.' Narrated by Abu Dawud [Hasan].", transliteration: "" },
  },
  {
    id: 44,
    text: {
        ar: "أَصْبَحْتُ ‌أُثْنِي ‌عَلَيْكَ ‌حَمْدًا، وَأَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللهُ",
        en: "I have entered the morning praising You with gratitude, and I bear witness that there is no deity but Allah.",
        transliteration: "Asbahtu uthnee 'alayka hamda, wa ash-hadu an la ilaha illallah."
    },
    repetitions: 3,
    info: { ar: "عن أبي هريرة، رواه النسائي في السنن الكبرى، وفي عمل اليوم والليلة [حسن].", en: "From Abu Hurairah, narrated by An-Nasa'i in As-Sunan Al-Kubra and in 'Amal Al-Yawm wa Al-Laylah' [Hasan].", transliteration: "" },
  },
  {
    id: 45,
    text: {
        ar: "حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ",
        en: "Allah is sufficient for me. There is no deity but Him. In Him I have placed my trust, and He is the Lord of the Magnificent Throne.",
        transliteration: "Hasbiyallahu la ilaha illa Huwa, 'alayhi tawakkaltu, wa Huwa Rabbul-'Arshil-'Adheem."
    },
    repetitions: 7,
    info: { ar: "عن أبي الدرداء، وفيه أن من قاله سبع مرات كفاه الله ما أهمَّه، رواه أبو داود موقوفًا، وابن السني مرفوعًا [صحيح].", en: "From Abu Ad-Darda', wherein it is mentioned that whoever says it seven times, Allah will suffice him in what worries him. Narrated by Abu Dawud (mawquf) and Ibn As-Sunni (marfu') [Sahih].", transliteration: "" },
  },
  {
    id: 46,
    text: {
        ar: "رَبِّ أَعُوذُ بِكَ مِنْ شَرِّ الْفِتَنِ مَا ظَهَرَ مِنْهَا وَمَا بَطَنَ",
        en: "My Lord, I seek refuge in You from the evil of tribulations, both apparent and hidden.",
        transliteration: "Rabbi a'oodhu bika min sharril-fitani ma dhahara minha wama batan."
    },
    repetitions: 3,
    info: { ar: "عن زيد بن ثابت، رواه البخاري ومسلم.", en: "From Zayd ibn Thabit, narrated by Al-Bukhari and Muslim.", transliteration: "" },
  },
  {
    id: 47,
    text: {
        ar: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ",
        en: "I seek refuge in the perfect words of Allah from the evil of that which He has created.",
        transliteration: "A'oodhu bikalimatil-lahit-tammati min sharri ma khalaq."
    },
    repetitions: 3,
    info: { ar: "عن أبي هريرة، وفيه أن النبي ﷺ قال للديغ أنه لو قاله في المساء لم يضرَّه، رواه مسلم، والترمذي.", en: "From Abu Hurairah, wherein the Prophet ﷺ told a person who was stung that if he had said it in the evening, it would not have harmed him. Narrated by Muslim and At-Tirmidhi.", transliteration: "" },
  },
  {
    id: 48,
    text: {
        ar: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ، وَهُوَ السَّمِيعُ الْعَلِيمُ",
        en: "In the name of Allah, with whose name nothing can cause harm on earth or in the heavens, and He is the All-Hearing, the All-Knowing.",
        transliteration: "Bismillahil-ladhee la yadurru ma'asmihi shay'un fil-ardi wala fis-sama', wa Huwas-Samee'ul-'Aleem."
    },
    repetitions: 3,
    info: { ar: "عنْ عُثْمَانَ بْنِ عَفَّانَ وفيه أن من قاله لم َيَضُرَّهُ شَىْءٌ، رواه أبو داود، والترمذي، وابن ماجه [حسن].", en: "From 'Uthman bin 'Affan, wherein it is mentioned that whoever says it, nothing will harm him. Narrated by Abu Dawud, At-Tirmidhi, and Ibn Majah [Hasan].", transliteration: "" },
  },
  {
    id: 49,
    text: {
        ar: "ربِّ أَعُوذُ بِكَ مِنَ الهَمِّ والحزن، وأَعُوذُ بِكَ مِنَ الْعَجْزِ وَالْكَسَلِ، وأَعُوذُ بِكَ مِنَ الجُبْنِ والبُخْلِ، وأَعُوذُ بِكَ مِنْ غَلَبَةِ الدَّينِ وقَهْرِ الرِّجَالِ، وأَعُوذُ بِكَ مِنْ ‌سُوءِ ‌الْكِبَرِ والهَرَمِ، وأَعُوذُ بِكَ مِنَ الـمَأْثَمِ والـمَغْرَمِ، وأَعُوذُ بِكَ مِنَ الشِّرْكِ وَالنِّفَاقِ، والسُّمْعَةِ وَالرِّيَاءِ، وأَعُوذُ بِكَ مِنَ القَسْوَةِ والغَفْلَةِ، والذِّلَّةِ والـمَسْكَنَةِ، وأَعُوذُ بِكَ مِنَ الصَّمَمِ والْبَكَمِ، والْجُنُونِ وَالْبَرَصِ، وَالْجُذَامِ وسَيِّئِ الأَسْقَامِ",
        en: "O Allah, I seek refuge in You from worry and grief, and I seek refuge in You from helplessness and laziness, and I seek refuge in You from cowardice and miserliness, and I seek refuge in You from being overwhelmed by debt and the oppression of men. And I seek refuge in You from the bad state of old age and senility, and I seek refuge in You from sin and financial burden, and I seek refuge in You from shirk (associating partners with Allah) and hypocrisy, and from (seeking) reputation and show (riyaa'). And I seek refuge in You from hardness of heart and negligence, and from humiliation and poverty. And I seek refuge in You from deafness and dumbness, and from madness and leprosy, and from leucoderma (vitiligo) and from evil diseases.",
        transliteration: "bika minal-hammi wal-ḥuzn, wa a'ūdhu bika minal-'ajzi wal-kasal, wa a'ūdhu bika minal-jubni wal-bukhl, wa a'ūdhu bika min ghalabatid-dayni wa qahrir-rijāl, wa a'ūdhu bika min sū'il-kibari wal-haram, Wa a'ūdhu bika minal-ma'thami wal-maghram, wa a'ūdhu bika minash-shirki wan-nifāq, was-sum'ati war-riyā', wa a'ūdhu bika minal-qaswati wal-ghaflah, wadh-dhillati wal-maskanah, Wa a'ūdhu bika minaṣ-ṣamam wal-bakam, wal-junūn wal-barṣ, wal-judhāmi wa sayyi'il-asqām."
    },
    repetitions: 1,
    info: { ar: "عَنْ أَنَسٍ، رواه البخاري.", en: "From Anas, narrated by Al-Bukhari.", transliteration: "" },
  },
  {
    id: 50,
    text: {
        ar: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ زَوَالِ نِعْمَتِكَ، وَتَحَوُّلِ عَافِيَتِكَ، وَفُجَاءَةِ نِقْمَتِكَ، وَجَمِيعِ سَخَطِكَ",
        en: "O Allah, I seek refuge in You from the decline of Your blessing, the removal of Your protection, the suddenness of Your vengeance, and from all of Your wrath.",
        transliteration: "Allahumma inni a'oodhu bika min zawali ni'matik, wa tahawwuli 'afiyatik, wa fuja'ati niqmatik, wa jamee'i sakhatik."
    },
    repetitions: 3,
    info: { ar: "عَنْ عَبْدِ اللَّهِ بْنِ عُمَرَ، رواه مسلم.", en: "From 'Abdullah ibn 'Umar, narrated by Muslim.", transliteration: "" },
  },
  {
    id: 51,
    text: {
        ar: "اللَّهُمَّ إِنِّى أَعُوذُ بِكَ مِنْ جَهْدِ الْبَلَاءِ، وَدَرَكِ الشَّقَاءِ، وَسُوءِ الْقَضَاءِ، وَشَمَاتَةِ الْأَعْدَاءِ",
        en: "O Allah, I seek refuge in You from the severity of calamity, from being overtaken by destruction, from the evil of what is decreed, and from the gloating of enemies.",
        transliteration: "Allahumma inni a'oodhu bika min jahdil-bala', wa darakish-shaqa', wa soo'il-qada', wa shamatatil-a'da'."
    },
    repetitions: 3,
    info: { ar: "عن أَبي هريرة، رواه البخاري، ومسلم.", en: "From Abu Hurairah, narrated by Al-Bukhari and Muslim.", transliteration: "" },
  },
  {
    id: 52,
    text: {
        ar: "أَعُوذُ بِكَلِمَاتِ اللهِ التَّامَّاتِ الَّتِي لَا ‌يُجَاوِزُهُنَّ ‌بَرٌّ ‌وَلَا ‌فَاجِرٌ مِنْ شَرِّ مَا ‌خَلَقَ، ‌وَذَرَأَ ‌وَبَرَأَ، ومِنْ شَرِّ مَا يَنْزِلُ مِنَ السَّمَاءِ وَمِنْ شَرِّ مَا يَعْرُجُ فِيهَا، ‌وَمِنْ ‌شَرِّ ‌مَا ‌ذَرَأَ ‌فِي ‌الْأَرْضِ، وَمِنْ شَرِّ مَا يَخْرُجُ مِنْهَا، ‌وَمِنْ ‌شَرِّ ‌فِتَنِ ‌اللَّيْلِ ‌وَالنَّهَارِ، ‌وَمِنْ ‌شَرِّ ‌كُلِّ ‌طَارِقٍ ‌إِلَّا ‌طَارِقًا ‌يَطْرُقُ ‌بِخَيْرٍ ‌يَا ‌رَحْمَنُ",
        en: "I seek refuge in the perfect words of Allah, which neither the righteous nor the wicked can overcome, from the evil of what He has created, brought into existence, and made. And from the evil of what descends from the sky and the evil of what ascends therein. And from the evil of what is created in the earth and the evil of what emerges from it. And from the evil of the tribulations of the night and day, and from the evil of every visitor except one who comes with good, O Most Merciful.",
        transliteration: "A'oodhu bikalimatil-lahit-tamma-tillatee la yujawizuhunna barrun wala fajir, min sharri ma khalaqa, wa dhara'a wa bara'a, wa min sharri ma yanzilu minas-sama'i wa min sharri ma ya'ruju feeha, wa min sharri ma dhara'a fil-ard, wa min sharri ma yakhruju minha, wa min sharri fitanil-layli wan-nahar, wa min sharri kulli tariqin illa tariqan yatruqu bikhayrin ya Rahman."
    },
    repetitions: 1,
    info: { ar: "عن عبد الرحمن بن خَنْبَش، رواه أحمد [صحيح].", en: "From 'Abd al-Rahman ibn Khanbash, narrated by Ahmad [Sahih].", transliteration: "" },
  },
  {
    id: 53,
    text: {
        ar: "أَعُوذُ بِوَجْهِ اللهِ الْعَظِيمِ، ‌الَّذِي ‌لَيْسَ ‌شَيْءٌ ‌أَعْظَمَ ‌مِنْهُ، وَبِكَلِمَاتِ اللهِ التَّامَّاتِ الَّتِي لَا يُجَاوِزُهُنَّ بَرٌّ وَلَا فَاجِرٌ، وَبِأَسْمَاءِ اللهِ الْحُسْنَى كُلِّهَا، مَا عَلِمْتُ مِنْهَا وَمَا لَمْ أَعْلَمْ، مِنْ شَرِّ مَا خَلَقَ وَذَرَأَ وَبَرَأَ",
        en: "I seek refuge in the magnificent Face of Allah, than which there is nothing greater, and in the perfect words of Allah, which neither the righteous nor the wicked can overcome, and in all of Allah's most beautiful names, those of which I know and those of which I do not know, from the evil of what He created, brought into existence, and made.",
        transliteration: "A'oodhu biwajhil-lahil-'adheem, alladhee laysa shay'un a'dhamu minhu, wa bikalimatil-lahit-tamma-tillatee la yujawizuhunna barrun wala fajir, wa bi-asma'il-lahil-husna kulliha, ma 'alimtu minha wama lam a'lam, min sharri ma khalaqa wa dhara'a wa bara'a."
    },
    repetitions: 1,
    info: { ar: "عَنْ كَعْبَ الأَحْبَارِ أنه قَالَ: لَوْلا كَلِمَاتٌ أَقُولُهُنَّ لَجَعَلَتْنِي يَهُودُ حِمَارًا...، رواه مالك في الموطأ [صحيح موقوف].", en: "From Ka'b al-Ahbar, who said: 'Were it not for some words that I say, the Jews would have made me into a donkey...' Narrated by Malik in Al-Muwatta [Sahih Mawquf].", transliteration: "" },
  },
  {
    id: 54,
    text: {
        ar: "اللَّهُمَّ عَافِنِي فِي بَدَنِي، ‌اللهُمَّ ‌عَافِنِي ‌فِي ‌سَمْعِي، اللهُمَّ عَافِنِي فِي بَصَرِي، لَا إِلَهَ إِلَّا أَنْتَ",
        en: "O Allah, grant me well-being in my body. O Allah, grant me well-being in my hearing. O Allah, grant me well-being in my sight. There is no deity but You.",
        transliteration: "Allahumma 'afinee fee badanee, Allahumma 'afinee fee sam'ee, Allahumma 'afinee fee basaree, la ilaha illa Anta."
    },
    repetitions: 3,
    info: { ar: "عن عبد الرحمن بن أبي بكرة عن أبيه، رواه أحمد وأبو داود [حسن].", en: "From 'Abd al-Rahman ibn Abi Bakra from his father, narrated by Ahmad and Abu Dawud [Hasan].", transliteration: "" },
  },
  {
    id: 55,
    text: {
        ar: "اللَّهُمَّ ‌إِنِّي ‌أَعُوذُ ‌بِكَ ‌مِنَ ‌الْكُفْرِ ‌وَالْفَقْرِ، ‌اللَّهُمَّ ‌إِنِّي ‌أَعُوذُ ‌بِكَ ‌مِنْ ‌عَذَابِ ‌الْقَبْرِ، لَا إِلَهَ إِلَّا أَنْتَ",
        en: "O Allah, I seek refuge in You from disbelief and poverty. O Allah, I seek refuge in You from the punishment of the grave. There is no deity but You.",
        transliteration: "Allahumma inni a'oodhu bika minal-kufri wal-faqr, Allahumma inni a'oodhu bika min 'adhabil-qabr, la ilaha illa Anta."
    },
    repetitions: 3,
    info: { ar: "عن أبي بكرة، رواه أحمد وأبو داود [حسن].", en: "From Abu Bakrah, narrated by Ahmad and Abu Dawud [Hasan].", transliteration: "" },
  },
  {
    id: 56,
    text: {
        ar: "رَبِّ ‌أَعُوذُ ‌بِكَ أَنْ أُشْرِكَ بِكَ شَيْئًا أَعْلَمُهُ، وَأَسْتَغْفِرُكَ لـِمَا لَا أَعْلَمُهُ",
        en: "My Lord, I seek refuge in You from knowingly associating anything with You, and I seek Your forgiveness for what I do not know.",
        transliteration: "Rabbi a'oodhu bika an ushrika bika shay'an a'lamuh, wa astaghfiruka lima la a'lamuh."
    },
    repetitions: 3,
    info: { ar: "عن أبي موسى الأشعري، رواه أحمد والطبراني [حسن].", en: "From Abu Musa Al-Ash'ari, narrated by Ahmad and At-Tabarani [Hasan].", transliteration: "" },
  },
  {
    id: 57,
    text: {
        ar: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ، اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي دِينِي وَدُنْيَايَ وَأَهْلِي وَمَالِي، اللَّهُمَّ اسْتُرْ عَوْرَاتِي وَآمِنْ رَوْعَاتِي، اللَّهُمَّ احْفَظْنِي مِنْ بَيْنِ يَدَيَّ وَمِنْ خَلْفِي، وَعَنْ يَمِينِي وَعَنْ شِمَالِي وَمِنْ فَوْقِي، وَأَعُوذُ بِعَظَمَتِكَ أَنْ أُغْتَالَ مِنْ تَحْتِي",
        en: "O Allah, I ask You for well-being in this world and the Hereafter. O Allah, I ask You for pardon and well-being in my religion, my worldly affairs, my family and my wealth. O Allah, conceal my faults and preserve me from fear. O Allah, protect me from before me and from behind me, from my right and from my left, and from above me, and I seek refuge in Your greatness from being destroyed from beneath me.",
        transliteration: "Allahumma inni as'alukal-'afiyata fid-dunya wal-akhirah. Allahumma inni as'alukal-'afwa wal-'afiyata fee deenee wa dunyaya wa ahlee wa malee. Allahumma-stur 'awratee wa aamin raw'atee. Allahumma-hfazni min bayni yadayya wa min khalfee, wa 'an yameenee wa 'an shimalee wa min fawqee, wa a'oodhu bi'adhamatika an ughtala min tahtee."
    },
    repetitions: 1,
    info: { ar: "عن ابن عمر، رواه أبو داود وابن ماجه [صحيح].", en: "From Ibn 'Umar, narrated by Abu Dawud and Ibn Majah [Sahih].", transliteration: "" },
  },
  {
    id: 58,
    text: {
        ar: "اللهُمَّ ‌أَنْتَ ‌رَبِّي ‌لَا ‌إِلَهَ ‌إِلَّا ‌أَنْتَ، ‌خَلَقْتَنِي، ‌وَأَنَا ‌عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ ‌بِنِعْمَتِكَ ‌عَلَيَّ، ‌وَأَبُوءُ ‌بِذَنْبِي، ‌فَاغْفِرْ ‌لِي، ‌فَإِنَّهُ ‌لَا ‌يَغْفِرُ ‌الذُّنُوبَ ‌إِلا ‌أَنْتَ",
        en: "O Allah, You are my Lord, there is no deity but You. You created me and I am Your slave. I am upon Your covenant and Your promise as much as I am able. I seek refuge in You from the evil of what I have done. I acknowledge Your favor upon me, and I acknowledge my sin, so forgive me, for verily no one forgives sins except You.",
        transliteration: "Allahumma Anta Rabbee la ilaha illa Ant, khalaqtanee, wa ana 'abduk, wa ana 'ala 'ahdika wa wa'dika mastata't. A'oodhu bika min sharri ma sana't, aboo'u laka bini'matika 'alayya, wa aboo'u bidhanbee, faghfir lee, fa'innahu la yaghfirudh-dhunooba illa Ant."
    },
    repetitions: 3,
    info: { ar: "عن شداد بن أوس وفيه أَنَّ من قاله موقنًا فمات فهوَ مِن أهلِ الجنة، رواه البخاري. (سيد الاستغفار)", en: "From Shaddad bin Aws, wherein it says that whoever says it with certainty and dies on that day, he will be from the people of Paradise. Narrated by Al-Bukhari. (The Master of Supplications for Forgiveness).", transliteration: "" },
  },
  {
    id: 59,
    text: {
        ar: "أَسْتَغْفِرُ ‌اللَّهَ ‌الْعَظِيمَ ‌الَّذِي ‌لَا ‌إِلَهَ ‌إِلَّا ‌هُوَ ‌الْحَيَّ ‌الْقَيُّومَ، ‌وَأَتُوبُ ‌إِلَيْهِ",
        en: "I seek the forgiveness of Allah the Magnificent, Whom there is none worthy of worship but Him, the Ever-Living, the Sustainer of all, and I repent to Him.",
        transliteration: "Astaghfirullahal-'Adheemal-ladhee la ilaha illa Huwal-Hayyul-Qayyum, wa atoobu ilayh."
    },
    repetitions: 3,
    info: { ar: "عن زيد مولى النبي ﷺ، وفيه أَنَّ من قاله غُفِرت ذنوبه، وإن كان فارًّا من الزَّحْف، رواه الترمذي وأبو داود [صحيح].", en: "From Zayd, the freed slave of the Prophet ﷺ, wherein it says that for whoever says it, his sins will be forgiven even if he has fled from the battlefield. Narrated by At-Tirmidhi and Abu Dawud [Sahih].", transliteration: "" },
  },
  {
    id: 60,
    text: {
        ar: "اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنَ الْخَيْرِ كُلِّهِ عَاجِلِهِ وَآجِلِهِ مَا عَلِمْتُ مِنْهُ وَمَا لَمْ أَعْلَمْ، وَأَعُوذُ بِكَ مِنَ الشَّرِّ كُلِّهِ، عَاجِلِهِ وَآجِلِهِ مَا عَلِمْتُ مِنْهُ، وَمَا لَمْ أَعْلَمْ.\nاللَّهُمَّ إِنِّي أَسْأَلُكَ الْجَنَّةَ وَمَا قَرَّبَ إِلَيْهَا مِنْ قَوْلٍ أَوْ عَمَلٍ، وَأَعُوذُ بِكَ مِنَ النَّارِ وَمَا قَرَّبَ إِلَيْهَا مِنْ قَوْلٍ أَوْ عَمَلٍ.\nاللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ خَيْرِ مَا ‌سَأَلَكَ ‌عَبْدُكَ وَنَبِيُّكَ ‌مُحَمَّدٌ ﷺ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا استعاذك مِنْهُ عَبْدُكَ وَنَبِيُّكَ ‌مُحَمَّدٌ ﷺ، ومَا قَضَيْتَ لِي مِنْ قَضَاءٍ فَاجْعَلْ عَاقِبَتَهُ لِي رَشَدًا",
        en: "O Allah, I ask You for all good, both sooner and later, what I know of it and what I do not know. And I seek refuge in You from all evil, both sooner and later, what I know of it and what I do not know.\nO Allah, I ask You for Paradise and for that which brings one closer to it, in word or deed. And I seek refuge in You from the Fire and from that which brings one closer to it, in word or deed.\nO Allah, I ask You for the best of what Your slave and Prophet Muhammad ﷺ asked You for, and I seek refuge in You from the evil of what Your slave and Prophet Muhammad ﷺ sought refuge from. And whatever You have decreed for me, make its outcome good for me.",
        transliteration: "Allahumma inni as'aluka minal-khayri kullihi, 'ajilihi wa ajilih, ma 'alimtu minhu wama lam a'lam. Wa a'oodhu bika minash-sharri kullihi, 'ajilihi wa ajilih, ma 'alimtu minhu wama lam a'lam.\nAllahumma inni as'alukal-jannata wama qarraba ilayha min qawlin aw 'amal, wa a'oodhu bika minan-nari wama qarraba ilayha min qawlin aw 'amal.\nAllahumma inni as'aluka min khayri ma sa'alaka 'abduka wa nabiyyuk Muhammadun ﷺ, wa a'oodhu bika min sharri masta'adhaka minhu 'abduka wa nabiyyuk Muhammadun ﷺ, wama qadayta lee min qadaa'in faj'al 'aqibatahu lee rashada."
    },
    repetitions: 1,
    info: { ar: "عَنْ عَائِشَةَ، رواه ابن ماجه وأحمد [صحيح].", en: "From 'Aisha, narrated by Ibn Majah and Ahmad [Sahih].", transliteration: "" },
  },
  {
    id: 61,
    text: {
        ar: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
        en: "Our Lord, give us in this world [that which is] good and in the Hereafter [that which is] good and protect us from the punishment of the Fire.",
        transliteration: "Rabbana atina fid-dunya hasanatan wa fil-akhirati hasanatan waqina 'adhaban-nar."
    },
    repetitions: 3,
    info: { ar: "عن أنس بن مالك، رواه البخاري، ومسلم.", en: "From Anas bin Malik, narrated by Al-Bukhari and Muslim.", transliteration: "" },
  },
  {
    id: 62,
    text: {
        ar: "سُبْحَانَكَ ‌اللَّهُمَّ ‌وَبِحَمْدِكَ...أَشْهَدُ أَلَّا إِلَهَ إِلَّا أَنْتَ... أَسْتَغْفِرُكَ وَأَتُوبُ إلَيْكَ...\nوصَلَى اللهُ وسَلَّمَ عَلَى سَيِّدِنا مُحمَّدٍ وعَلَى آلِهِ وصَحْبِهِ أَجْمَعِينَ\n والحُمْدُ للهِ رَبِّ العَالَمِينَ.\n [نِهَايَةُ أَذْكَارِ الصَّبَاحِ ، قَبْلَ شُرُوقِ الشَّمْسِ، الـمُفَصَّلَة]",
        en: "How perfect You are, O Allah, and I praise You... I bear witness that there is no deity but You... I seek Your forgiveness and repent to You...\nMay Allah's peace and blessings be upon our Master Muhammad, his family, and all his companions.\nAnd praise be to Allah, Lord of the worlds.\n[End of the detailed morning remembrances, before sunrise]",
        transliteration: "Subhanakallahumma wa bihamdik... Ash-hadu an la ilaha illa Ant... Astaghfiruka wa atoobu ilayk...\nWa sallallahu wa sallama 'ala sayyidina Muhammadin wa 'ala aalihi wa sahbihi ajma'een.\nWal-hamdu lillahi Rabbil-'alameen.\n[Nihayatu Adhkar-is-Sabah, qabla shurooq-ish-shams, al-mufassalah]"
    },
    repetitions: 1,
    info: {ar: "كفارة المجلس.", en: "Expiation of the gathering.", transliteration: ""},
  }
];

export const sabahAdhkarConcise_i18n: AdhkarItem[] = [
  {
    id: 1,
    text: {
        ar: "بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ \n ٱللَّهُ لَا إِلَـٰهَ إِلَّا هُوَ ٱلْحَيُّ ٱلْقَيُّومُ لَا تَأْخُذُهُۥ سِنَةٌ وَلَا نَوْمٌ لَّهُۥ مَا فِي ٱلسَّمَٰوَٰتِ وَمَا فِي ٱلْأَرْضِ مَن ذَا ٱلَّذِي يَشْفَعُ عِندَهُۥ إِلَّا بِإِذْنِهِۦ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَيۡءٍ مِّنۡ عِلۡمِهِۦٓ إِلَّا بِمَا شَآءَ وَسِعَ كُرۡسِيُّهُ ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضَ وَلَا يَـُۧودُهُۥ حِفۡظُهُمَا وَهُوَ ٱلۡعَلِيُّ ٱلۡعَظِيمُ.\n- آية الكرسى (البقرة: 255)",
        en: "بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ\nAllah - there is no deity except Him, the Ever-Living, the Sustainer of all existence. Neither drowsiness overtakes Him nor sleep. To Him belongs whatever is in the heavens and whatever is on the earth. Who is it that can intercede with Him except by His permission? He knows what is [presently] before them and what will be after them, and they encompass not a thing of His knowledge except for what He wills. His Kursi (Throne) extends over the heavens and the earth, and their preservation tires Him not. And He is the Most High, the Most Great.\n- Ayah Al-Kursi (Al-Baqarah: 255)",
        transliteration: "بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ\nAllahu la ilaha illa Huwal-Hayyul-Qayyum, la ta'khudhuhu sinatun wala nawm, lahu ma fis-samawati wama fil-ard, man dhal-ladhi yashfa'u 'indahu illa bi-idhnih, ya'lamu ma bayna aydeehim wama khalfahum, wala yuheetoona bishay'im-min 'ilmihi illa bima sha', wasi'a kursiyyuhus-samawati wal-ard, wala ya'ooduhu hifdhuhuma, wa Huwal-'Aliyyul-'Adheem."
    },
    repetitions: 1,
    info: { ar: "أحاديث فضل آية الكرسي كثيرة...", en: "The hadiths on the virtue of Ayah Al-Kursi are many...", transliteration: "Ahadith fadl Ayat al-Kursi katheera..." },
  },
  {
    id: 2,
    text: {
        ar: "بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ\nقُلْ هُوَ اللَّهُ أَحَدٌ اللَّهُ الصَّمَدُ لَمْ يَلِدْ وَلَمْ يُولَدْ وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ.",
        en: "بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ\nSay, 'He is Allah, the One. Allah, the Eternal Refuge. He neither begets nor is born, Nor is there to Him any equivalent.'",
        transliteration: "بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ\nQul huwa Allahu ahad. Allahus-samad. Lam yalid wa lam yoolad. Wa lam yakun lahu kufuwan ahad."
    },
    repetitions: 3,
    info: { ar: "عن عبد الله بن خبيب...", en: "From Abdullah bin Khubaib...", transliteration: "'An 'Abdillah ibn Khubayb..." },
  },
  {
    id: 3,
    text: {
        ar: "بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ\nقُلْ أَعُوذُ بِرَبِّ الْفَلَقِ مِنْ شَرِّ مَا خَلَقَ وَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ وَمِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ.",
        en: "بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ\nSay, 'I seek refuge in the Lord of daybreak, from the evil of that which He created, and from the evil of darkness when it settles, and from the evil of the blowers in knots, and from the evil of an envier when he envies.'",
        transliteration: "بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ\nQul a'oodhu birabbil-falaq. Min sharri ma khalaq. Wa min sharri ghasiqin idha waqab. Wa min sharrin-naffathati fil-'uqad. Wa min sharri hasidin idha hasad."
    },
    repetitions: 3,
    info: { ar: "عن عبد الله بن خبيب...", en: "From Abdullah bin Khubaib...", transliteration: "'An 'Abdillah ibn Khubayb..." },
  },
  {
    id: 4,
    text: {
        ar: "بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ\nقُلْ أَعُوذُ بِرَبِّ النَّاسِ مَلِكِ النَّاسِ إِلَهِ النَّاسِ مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ مِنَ الْجِنَّةِ وَالنَّاسِ.",
        en: "بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ\nSay, 'I seek refuge in the Lord of mankind, the Sovereign of mankind, the God of mankind, from the evil of the retreating whisperer, who whispers into the breasts of mankind, from among the jinn and mankind.'",
        transliteration: "بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ\nQul a'oodhu birabbin-nas. Malikin-nas. Ilahin-nas. Min sharril-waswasil-khannas. Alladhee yuwaswisu fee sudoorin-nas. Minal-jinnati wan-nas."
    },
    repetitions: 3,
    info: { ar: "عن عبد الله بن خبيب...", en: "From Abdullah bin Khubaib...", transliteration: "'An 'Abdillah ibn Khubayb..." },
  },
   {
    id: 5,
    text: {
        ar: "رَضِيتُ ‌بِاللهِ رَبًّا، ‌وَبِالْإِسْلَامِ ‌دِينًا، وَبِمُحَمَّدٍ ﷺ نَبِّيًا (وَرَسُولًا)",
        en: "I am pleased with Allah as a Lord, with Islam as a religion, and with Muhammad ﷺ as a Prophet (and Messenger).",
        transliteration: "Radheetu billahi Rabba, wa bil-islami deena, wa bi-Muhammadin ﷺ Nabiyya (wa Rasoola)."
    },
    repetitions: 3,
    info: { ar: "عن أبي سعيد الخدري ...", en: "From Abu Sa'id Al-Khudri...", transliteration: "'An Abi Sa'eed al-Khudri..." },
  },
  {
    id: 6,
    text: {
        ar: "اللهم صل على محمد وعلى آل محمد و سلم تسليما كثيرًا ) ويجعل العاشرة اللهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيم وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ وَبَارِكَ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ فِي العالمين إِنَّكَ حَمِيدٌ مَجِيدٌ ، ]وسلم تسليما كثيرًا",
        en: "O Allah, bestow your prayers upon Muhammad and the family of Muhammad and grant him peace in abundance. (And on the tenth time, say:) O Allah, bestow your prayers upon Muhammad and the family of Muhammad, as You have bestowed your prayers upon Ibrahim and the family of Ibrahim, indeed You are Praiseworthy and Glorious. And bless Muhammad and the family of Muhammad as You have blessed Ibrahim and the family of Ibrahim in the worlds, indeed You are Praiseworthy and Glorious. And grant him peace in abundance.",
        transliteration: "Allahumma salli 'ala Muhammadin wa 'ala aali Muhammadin wa sallim tasleeman katheera. (10th time:) Allahumma salli 'ala Muhammadin wa 'ala aali Muhammadin kama sallayta 'ala Ibraheema wa 'ala aali Ibraheema innaka Hameedun Majeed, wa barik 'ala Muhammadin wa 'ala aali Muhammadin kama barakta 'ala Ibraheema wa 'ala aali Ibraheema fil-'alameena innaka Hameedun Majeed, wa sallim tasleeman katheera."
    },
    repetitions: 10,
    info: { ar: "عن كعب بن عُجْرَة...", en: "From Ka'b bin 'Ujrah...", transliteration: "'An Ka'b ibn 'Ujrah..." },
  },
  {
    id: 7,
    text: {
        ar: "يَا ‌حَيُّ ‌يَا ‌قَيُّومُ ‌يَا ‌ذَا ‌الْجَلالِ ‌وَالإِكْرَامِ، ‌بِرَحْمَتِكَ ‌أَسْتَغِيثُ، ‌أَصْلِحْ ‌لِي ‌شَأْنِي ‌كُلَّهُ، وَلَا تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ",
        en: "O Ever-Living, O Sustainer, O Lord of Majesty and Honor, by Your mercy I seek assistance, rectify for me all of my affairs and do not leave me to myself, even for the blink of an eye.",
        transliteration: "Ya Hayyu, ya Qayyoom, ya Dhal-Jalali wal-Ikram, birahmatika astagheeth, aslih lee sha'nee kullah, wala takilnee ila nafsee tarfata 'ayn."
    },
    repetitions: 1,
    info: { ar: "هذا دعاء فاطمة...", en: "This is the supplication of Fatimah...", transliteration: "Hadha du'a Fatimah..." },
  },
  {
    id: 8,
    text: { ar: "رَبِّ أَجِرْنِي مِنَ النَّارِ", en: "My Lord, protect me from the Fire.", transliteration: "Rabbi ajirnee minan-nar." },
    repetitions: 7,
    info: { ar: "عن أنس...", en: "From Anas...", transliteration: "'An Anas..." },
  },
  {
    id: 9,
    text: { ar: "رَبِّ أَسْأَلُكَ الفِرْدَوسَ الأَعْلَى مِنَ الجَنَّةِ مِنْ غَيْرِ سَابِقَةِ حِسَابٍ إِنَّكَ أَنْتَ الوَهَّابُ", en: "My Lord, I ask You for the highest level of Paradise, Al-Firdaws, without a preceding reckoning. Verily, You are the Bestower.", transliteration: "Rabbi as'alukal-Firdawsal-A'la minal-Jannah min ghayri sabiqati hisab, innaka Antal-Wahhab." },
    repetitions: 7,
    info: { ar: "عَنْ أَنَسِ...", en: "From Anas...", transliteration: "'An Anas..." },
  },
   {
    id: 10,
    text: { ar: "اللَّهُمَّ صُبَّ عَليَّ الخَيْرَ صَبًّا، وَلَا تَجْعَلْ عَيْشِي كَدًّا", en: "O Allah, pour goodness upon me in abundance, and do not make my life one of hardship.", transliteration: "Allahumma subba 'alayyal-khayra sabba, wa la taj'al 'ayshee kadda." },
    repetitions: 1,
    info: { ar: "هذا دعاء النبي ﷺ لامرأة جُلَيبيب...", en: "This is the supplication of the Prophet ﷺ for the wife of Julaybib...", transliteration: "Hadha du'a an-Nabiyyi..." },
  },
  {
    id: 11,
    text: { ar: "اللَّهُمَّ ‌اكْفِنِي ‌بِحَلَالِكَ ‌عَنْ ‌حَرَامِكَ، وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ", en: "O Allah, suffice me with Your lawful provision against Your unlawful provision, and make me independent of all those besides You.", transliteration: "Allahummak-finee bihalalika 'an haramik, wa aghninee bifadlika 'amman siwak." },
    repetitions: 1,
    info: { ar: "عن علِيٍّ...", en: "From 'Ali...", transliteration: "'An 'Aliyyin..." },
  },
  {
    id: 12,
    text:{
    ar: "اللهُمَّ إِنِّي أَسْأَلُكَ الثَّبَاتَ فِي الْأَمرِ وَالْعَزِيمَةَ ‌عَلَى ‌الرُّشْدِ، وَأَسْأَلُكَ شُكْرَ نِعْمَتِكَ، وحُسْنَ عِبَادَتِكَ، وأَسْأَلُكَ مُوجِبَاتِ رَحْمَتِكَ، وَعَزَائِمَ مَغْفِرَتِكَ، وَأَسْأَلُكَ قَلْبًا سَلِيمًا، وَلِسَانًا صَادِقًا، (‌وَخُلُقًا ‌مُسْتَقِيمًا)، وَأَسْأَلُكَ مِنْ خَيْرِ مَا تَعْلَمُ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا تَعْلَمُ، وَأَسْتَغْفِرُكَ لِمَا تَعْلَمُ، إِنَّكَ أَنْتَ عَلَّامُ الْغُيوبِ",
    en: "O Allah, I ask You for firmness in the affair, and determination in guidance. I ask You for gratitude for Your blessings, and excellence in Your worship. I ask You for the causes of Your mercy, and the resolves of Your forgiveness. I ask You for a sound heart, and a truthful tongue, (and upright character). I ask You for the good of what You know, and I seek refuge in You from the evil of what You know, and I seek Your forgiveness for what You know. Indeed, You are the Knower of the unseen.",
       transliteration: "Allahumma inni as'alukat-thabata fil-amr, wal-'azeemata 'alar-rushd, wa as'aluka shukra ni'matik, wa husna 'ibadatik, wa as'aluka mujibati rahmatik, wa 'aza'ima maghfiratik, wa as'aluka qalban saleema, wa lisanan sadiqa, (wa khuluqan mustaqeema), wa as'aluka min khayri ma ta'lam, wa a'oodhu bika min sharri ma ta'lam, wa astaghfiruka lima ta'lam, innaka Anta 'Allamul-ghuyoob."
    },
       repetitions: 1,
       info: { ar: "عن شداد بن أوس، رواه أحمد، الطبراني في الكبير، وما بين القوسين زيادة من المستدرك [حسن].", en: "From Shaddad bin Aws, narrated by Ahmad, At-Tabarani in Al-Kabeer. The addition in brackets is from Al-Mustadrak [Hasan].", transliteration: "" },   
  },
       {
    id: 13,
    text: {
      ar: "أَصْبَحْنَا ‌عَلَى ‌فِطْرَةِ ‌الْإِسْلَامِ، وَكَلِمَةِ الْإِخْلَاصِ، وَعَلَى دِينِ نَبِيِّنَا مُحَمَّدٍ ﷺ، وَعَلَى مِلَّةِ أَبِينَا إِبْرَاهِيمَ حَنِيفًا مُسْلِمًا، وَمَا كَانَ مِنَ الْمُشْرِكِينَ",
      en: "We have entered the morning upon the natural disposition of Islam, the word of sincere devotion, the religion of our Prophet Muhammad ﷺ, and the faith of our father Ibrahim, inclining toward truth, a Muslim, and he was not of those who associate others with Allah.",
      transliteration: "Asbahna 'ala fitratil-islam, wa 'ala kalimatil-ikhlas, wa 'ala deeni nabiyyina Muhammadin ﷺ, wa 'ala millati abeena Ibraheema Haneefan Muslima, wama kana minal-mushrikeen."
  },
    repetitions: 1,
    info: { ar: "عَنِ ابْنِ عَبَّاسٍ...", en: "From Ibn 'Abbas...", transliteration: "'An Ibn 'Abbas..." },
  },
  {
    id: 14,
    text:{
      ar: "اللَّهُمَّ ما ‌أصْبَحَ ‌بِي ‌مِنْ ‌نِعْمَةٍ، أَوْ بِأَحَدٍ مِنْ خَلْقِكَ، فَمِنْكَ وَحْدَكَ لَا شَرِيكَ لَكَ، فلك الحَمْدُ، وَلَكَ الشُّكْرُ",
      en: "O Allah, whatever blessing has come to me or to any of Your creation this morning is from You alone, without partner. So for You is all praise, and to You is all gratitude.",
      transliteration: "Allahumma ma asbaha bee min ni'matin, aw bi-ahadin min khalqik, faminka wahdaka la shareeka lak, falakal-hamdu, wa lakash-shukr."
  },
    repetitions: 3,
    info: { ar: "عن أنس بن مالك...", en: "From Anas bin Malik...", transliteration: "'An Anas ibn Malik..." },
  },
  {
    id: 15,
    text: {
      ar: "اللَّهُمَّ إِنِّي أصْبَحْتُ ‌أُشْهِدُكَ ‌وأُشْهِدُ ‌حَمَلَةَ ‌عَرْشِكَ وَمَلائِكَتَكَ وَجَمِيعَ خَلْقِكَ أنَّكَ أنتَ الله لا إِلهَ إِلَّا أنْتَ، وَحْدَكَ لَا شَرِيكَ لَكَ، وأنَّ مُحَمَّداً ﷺ عَبْدُكَ وَرَسُولُكَ",
      en: "O Allah, I have entered the morning and I call upon You and upon the bearers of Your Throne, Your angels, and all of Your creation to bear witness that surely You are Allah, there is no deity but You, You are alone and have no partner, and that Muhammad ﷺ is Your slave and Your Messenger.",
      transliteration: "Allahumma innee asbahtu ush-hiduka wa ush-hidu hamalata 'arshik, wa mala'ikatak, wa jamee'a khalqik, annaka Antallahu la ilaha illa Ant, wahdaka la shareeka lak, wa anna Muhammadan ﷺ 'abduka wa rasooluk."
  },
    repetitions: 4,
    info: { ar: "عن أبي هريرة...", en: "From Abu Hurairah...", transliteration: "'An Abi Hurayrah..." },
  },
  {
    id: 16,
    text: { ar: "حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ", en: "Allah is sufficient for me. There is no deity but Him. In Him I have placed my trust, and He is the Lord of the Magnificent Throne.", transliteration: "Hasbiyallahu la ilaha illa Huwa, 'alayhi tawakkaltu, wa Huwa Rabbul-'Arshil-'Adheem." },
    repetitions: 7,
    info: { ar: "عن زيد بن ثابت...", en: "From Zayd ibn Thabit...", transliteration: "'An Zayd ibn Thabit..." },
  },
  {
    id: 17,
    text: { ar: "رب أعوذ بك من شر الفتن ما ظهر منها وما بطن", en: "My Lord, I seek refuge in You from the evil of tribulations, both apparent and hidden.", transliteration: "Rabbi a'oodhu bika min sharril-fitani ma dhahara minha wama batan." },
    repetitions: 3,
    info: { ar: "عن أبي هريرة...", en: "From Abu Hurairah...", transliteration: "'An Abi Hurayrah..." },
  },
  {
    id: 18,
    text: { ar: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ", en: "I seek refuge in the perfect words of Allah from the evil of that which He has created.", transliteration: "A'oodhu bikalimatil-lahit-tammati min sharri ma khalaq." },
    repetitions: 3,
    info: { ar: "عن أبي هريرة...", en: "From Abu Hurairah...", transliteration: "'An Abi Hurayrah..." },
  },
  {
    id: 19,
    text: { ar: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ، وَهُوَ السَّمِيعُ الْعَلِيمُ", en: "In the name of Allah, with whose name nothing can cause harm on earth or in the heavens, and He is the All-Hearing, the All-Knowing.", transliteration: "Bismillahil-ladhee la yadurru ma'asmihi shay'un fil-ardi wala fis-sama', wa Huwas-Samee'ul-'Aleem." },
    repetitions: 3,
    info: { ar: "عنْ عُثْمَانَ بْنِ عَفَّانَ...", en: "From 'Uthman bin 'Affan...", transliteration: "'An 'Uthman ibn 'Affan..." },
  },
  {
    id: 20,
    text: {
      ar: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ زَوَالِ نِعْمَتِكَ، وَتَحَوُّلِ عَافِيَتِكَ، وَفُجَاءَةِ نِقْمَتِكَ، وَجَمِيعِ سَخَطِكَ",
      en: "O Allah, I seek refuge in You from the decline of Your blessing, the removal of Your protection, the suddenness of Your vengeance, and from all of Your wrath.",
      transliteration: "Allahumma inni a'oodhu bika min zawali ni'matik, wa tahawwuli 'afiyatik, wa fuja'ati niqmatik, wa jamee'i sakhatik."
  },
    repetitions: 3,
    info: { ar: "عَنْ عَبْدِ اللَّهِ بْنِ عُمَرَ...", en: "From 'Abdullah ibn 'Umar...", transliteration: "'An 'Abdillah ibn 'Umar..." },
  },
  {
    id: 21,
    text: {
      ar: "أَعُوذُ بِكَلِمَاتِ اللهِ التَّامَّاتِ الَّتِي لَا ‌يُجَاوِزُهُنَّ ‌بَرٌّ ‌وَلَا ‌فَاجِرٌ مِنْ شَرِّ مَا ‌خَلَقَ، ‌وَذَرَأَ ‌وَبَرَأَ، ومِنْ شَرِّ مَا يَنْزِلُ مِنَ السَّمَاءِ وَمِنْ شَرِّ مَا يَعْرُجُ فِيهَا، ‌وَمِنْ ‌شَرِّ ‌مَا ‌ذَرَأَ ‌فِي ‌الْأَرْضِ، وَمِنْ شَرِّ مَا يَخْرُجُ مِنْهَا، ‌وَمِنْ ‌شَرِّ ‌فِتَنِ ‌اللَّيْلِ ‌وَالنَّهَارِ، ‌وَمِنْ ‌شَرِّ ‌كُلِّ ‌طَارِقٍ ‌إِلَّا ‌طَارِقًا ‌يَطْرُقُ ‌بِخَيْرٍ ‌يَا ‌رَحْمَنُ",
      en: "I seek refuge in the perfect words of Allah, which neither the righteous nor the wicked can overcome, from the evil of what He has created, brought into existence, and made. And from the evil of what descends from the sky and the evil of what ascends therein. And from the evil of what is created in the earth and the evil of what emerges from it. And from the evil of the tribulations of the night and day, and from the evil of every visitor except one who comes with good, O Most Merciful.",
      transliteration: "A'oodhu bikalimatil-lahit-tamma-tillatee la yujawizuhunna barrun wala fajir, min sharri ma khalaqa, wa dhara'a wa bara'a, wa min sharri ma yanzilu minas-sama'i wa min sharri ma ya'ruju feeha, wa min sharri ma dhara'a fil-ard, wa min sharri ma yakhruju minha, wa min sharri fitanil-layli wan-nahar, wa min sharri kulli tariqin illa tariqan yatruqu bikhayrin ya Rahman."
  },
    repetitions: 1,
    info: { ar: "عن عبد الرحمن بن خَنْبَش...", en: "From 'Abd al-Rahman ibn Khanbash...", transliteration: "'An 'Abdir-Rahman ibn Khanbash..." },
  },
  {
    id: 22,
    text: {
      ar: "اللَّهُمَّ عَافِنِي فِي بَدَنِي، ‌اللهُمَّ ‌عَافِنِي ‌فِي ‌سَمْعِي، اللهُمَّ عَافِنِي فِي بَصَرِي، لَا إِلَهَ إِلَّا أَنْتَ",
      en: "O Allah, grant me well-being in my body. O Allah, grant me well-being in my hearing. O Allah, grant me well-being in my sight. There is no deity but You.",
      transliteration: "Allahumma 'afinee fee badanee, Allahumma 'afinee fee sam'ee, Allahumma 'afinee fee basaree, la ilaha illa Anta."
  },
    repetitions: 3,
    info: { ar: "عن عبد الرحمن بن أبي بكرة...", en: "From 'Abd al-Rahman ibn Abi Bakra...", transliteration: "'An 'Abdir-Rahman ibn Abi Bakrah..." },
  },
  {
    id: 23,
    text:{
      ar: "اللَّهُمَّ ‌إِنِّي ‌أَعُوذُ ‌بِكَ ‌مِنَ ‌الْكُفْرِ ‌وَالْفَقْرِ، ‌اللَّهُمَّ ‌إِنِّي ‌أَعُوذُ ‌بِكَ ‌مِنْ ‌عَذَابِ ‌الْقَبْرِ، لَا إِلَهَ إِلَّا أَنْتَ",
      en: "O Allah, I seek refuge in You from disbelief and poverty. O Allah, I seek refuge in You from the punishment of the grave. There is no deity but You.",
      transliteration: "Allahumma inni a'oodhu bika minal-kufri wal-faqr, Allahumma inni a'oodhu bika min 'adhabil-qabr, la ilaha illa Anta."
  },
    repetitions: 3,
    info: { ar: "عن أبي بكر...", en: "From Abu Bakr...", transliteration: "'An Abi Bakr..." },
  },
  {
    id: 24,
    text: {
      ar: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ، اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي دِينِي وَدُنْيَايَ وَأَهْلِي وَمَالِي، اللَّهُمَّ اسْتُرْ عَوْرَاتِي وَآمِنْ رَوْعَاتِي، اللَّهُمَّ احْفَظْنِي مِنْ بَيْنِ يَدَيَّ وَمِنْ خَلْفِي، وَعَنْ يَمِينِي وَعَنْ شِمَالِي وَمِنْ فَوْقِي، وَأَعُوذُ بِعَظَمَتِكَ أَنْ أُغْتَالَ مِنْ تَحْتِي",
      en: "O Allah, I ask You for well-being in this world and the Hereafter. O Allah, I ask You for pardon and well-being in my religion, my worldly affairs, my family and my wealth. O Allah, conceal my faults and preserve me from fear. O Allah, protect me from before me and from behind me, from my right and from my left, and from above me, and I seek refuge in Your greatness from being destroyed from beneath me.",
      transliteration: "Allahumma inni as'alukal-'afiyata fid-dunya wal-akhirah. Allahumma inni as'alukal-'afwa wal-'afiyata fee deenee wa dunyaya wa ahlee wa malee. Allahumma-stur 'awratee wa aamin raw'atee. Allahumma-hfazni min bayni yadayya wa min khalfee, wa 'an yameenee wa 'an shimalee wa min fawqee, wa a'oodhu bi'adhamatika an ughtala min tahtee."
  },
    repetitions: 1,
    info: { ar: "عن شداد بن أوس...", en: "From Shaddad bin Aws...", transliteration: "'An Shaddad ibn Aws..." },
  },
  {
    id: 25,
    text: {
      ar: "اللهُمَّ ‌أَنْتَ ‌رَبِّي ‌لَا ‌إِلَهَ ‌إِلَّا ‌أَنْتَ، ‌خَلَقْتَنِي، ‌وَأَنَا ‌عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ ‌بِنِعْمَتِكَ ‌عَلَيَّ، ‌وَأَبُوءُ ‌بِذَنْبِي، ‌فَاغْفِرْ ‌لِي، ‌فَإِنَّهُ ‌لَا ‌يَغْفِرُ ‌الذُّنُوبَ ‌إِلا ‌أَنْتَ",
      en: "O Allah, You are my Lord, there is no deity but You. You created me and I am Your slave. I am upon Your covenant and Your promise as much as I am able. I seek refuge in You from the evil of what I have done. I acknowledge Your favor upon me, and I acknowledge my sin, so forgive me, for verily no one forgives sins except You.",
      transliteration: "Allahumma Anta Rabbee la ilaha illa Ant, khalaqtanee, wa ana 'abduk, wa ana 'ala 'ahdika wa wa'dika mastata't. A'oodhu bika min sharri ma sana't, aboo'u laka bini'matika 'alayya, wa aboo'u bidhanbee, faghfir lee, fa'innahu la yaghfirudh-dhunooba illa Ant."
  },
    repetitions: 1,
    info: { ar: "عن شداد بن أوس... (سيد الاستغفار)", en: "From Shaddad bin Aws... (The Master of Supplications for Forgiveness).", transliteration: "'An Shaddad ibn Aws... (Sayyid al-Istighfar)" },
  },
  {
    id: 26,
    text: { ar: "أَسْتَغْفِرُ ‌اللَّهَ ‌الْعَظِيمَ ‌الَّذِي ‌لَا ‌إِلَهَ ‌إِلَّا ‌هُوَ ‌الْحَيَّ ‌الْقَيُّومَ، ‌وَأَتُوبُ ‌إِلَيْهِ", en: "I seek the forgiveness of Allah the Magnificent, Whom there is none worthy of worship but Him, the Ever-Living, the Sustainer of all, and I repent to Him.", transliteration: "Astaghfirullahal-'Adheemal-ladhee la ilaha illa Huwal-Hayyul-Qayyum, wa atoobu ilayh." },
    repetitions: 3,
    info: { ar: "عن ابن مسعود...", en: "From Ibn Mas'ud...", transliteration: "'An Ibn Mas'ood..." },
  },
  {
    id: 27,
    text: {
      ar: "اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنَ الْخَيْرِ كُلِّهِ عَاجِلِهِ وَآجِلِهِ مَا عَلِمْتُ مِنْهُ وَمَا لَمْ أَعْلَمْ، وَأَعُوذُ بِكَ مِنَ الشَّرِّ كُلِّهِ، عَاجِلِهِ وَآجِلِهِ مَا عَلِمْتُ مِنْهُ، وَمَا لَمْ أَعْلَمْ.\nاللَّهُمَّ إِنِّي أَسْأَلُكَ الْجَنَّةَ وَمَا قَرَّبَ إِلَيْهَا مِنْ قَوْلٍ أَوْ عَمَلٍ، وَأَعُوذُ بِكَ مِنَ النَّارِ وَمَا قَرَّبَ إِلَيْهَا مِنْ قَوْلٍ أَوْ عَمَلٍ.\nاللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ خَيْرِ مَا ‌سَأَلَكَ ‌عَبْدُكَ وَنَبِيُّكَ ‌مُحَمَّدٌ ﷺ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا استعاذك مِنْهُ عَبْدُكَ وَنَبِيُّكَ ‌مُحَمَّدٌ ﷺ، ومَا قَضَيْتَ لِي مِنْ قَضَاءٍ فَاجْعَلْ عَاقِبَتَهُ لِي رَشَدًا",
      en: "O Allah, I ask You for all good, both sooner and later, what I know of it and what I do not know. And I seek refuge in You from all evil, both sooner and later, what I know of it and what I do not know.\nO Allah, I ask You for Paradise and for that which brings one closer to it, in word or deed. And I seek refuge in You from the Fire and from that which brings one closer to it, in word or deed.\nO Allah, I ask You for the best of what Your slave and Prophet Muhammad ﷺ asked You for, and I seek refuge in You from the evil of what Your slave and Prophet Muhammad ﷺ sought refuge from. And whatever You have decreed for me, make its outcome good for me.",
      transliteration: "Allahumma inni as'aluka minal-khayri kullihi, 'ajilihi wa ajilih, ma 'alimtu minhu wama lam a'lam. Wa a'oodhu bika minash-sharri kullihi, 'ajilihi wa ajilih, ma 'alimtu minhu wama lam a'lam.\nAllahumma inni as'alukal-jannata wama qarraba ilayha min qawlin aw 'amal, wa a'oodhu bika minan-nari wama qarraba ilayha min qawlin aw 'amal.\nAllahumma inni as'aluka min khayri ma sa'alaka 'abduka wa nabiyyuk Muhammadun ﷺ, wa a'oodhu bika min sharri masta'adhaka minhu 'abduka wa nabiyyuk Muhammadun ﷺ, wama qadayta lee min qadaa'in faj'al 'aqibatahu lee rashada."
  },
    repetitions: 1,
    info: { ar: "عَنْ عَائِشَةَ...", en: "From 'Aisha...", transliteration: "'An 'Aishah..." },
  },
  {
    id: 28,
    text: { ar: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ", en: "Our Lord, give us in this world [that which is] good and in the Hereafter [that which is] good and protect us from the punishment of the Fire.", transliteration: "Rabbana atina fid-dunya hasanatan wa fil-akhirati hasanatan waqina 'adhaban-nar." },
    repetitions: 1,
    info: { ar: "عن أنس بن مالك...", en: "From Anas bin Malik...", transliteration: "'An Anas ibn Malik..." },
  },
  {
    id: 29,
    text: {
        ar: "سُبْحَانَكَ ‌اللَّهُمَّ ‌وَبِحَمْدِكَ...أَشْهَدُ أَلَّا إِلَهَ إِلَّا أَنْتَ... أَسْتَغْفِرُكَ وَأَتُوبُ إلَيْكَ...\nوصَلَى اللهُ وسَلَّمَ عَلَى سَيِّدِنا مُحمَّدٍ وعَلَى آلِهِ وصَحْبِهِ أَجْمَعِينَ\n والحُمْدُ للهِ رَبِّ العَالَمِينَ.\n [نِهَايَةُ أَذْكَارِ الصَّبَاحِ، قَبْلَ شُرُوقِ الشَّمْسِ, الـمُخْتَصَرَة]",
        en: "How perfect You are, O Allah, and I praise You... I bear witness that there is no deity but You... I seek Your forgiveness and repent to You...\nMay Allah's peace and blessings be upon our Master Muhammad, his family, and all his companions.\nAnd praise be to Allah, Lord of the worlds.\n[End of the concise morning remembrances, before sunrise]",
        transliteration: "Subhanakallahumma wa bihamdik... Ash-hadu an la ilaha illa Ant... Astaghfiruka wa atoobu ilayk...\nWa sallallahu wa sallama 'ala sayyidina Muhammadin wa 'ala aalihi wa sahbihi ajma'een.\nWal-hamdu lillahi Rabbil-'alameen.\n[Nihayatu Adhkar-is-Sabah, qabla shurooq-ish-shams, al-mukhtasarah]"
    },
    repetitions: 1,
    info: { ar: "كفارة المجلس.", en: "Expiation of the gathering.", transliteration: "Kaffaratul-majlis." },
  }
];

export const masaAdhkar_i18n: AdhkarItem[] = [
  {
    id: 1,
    text: {
        ar: "رَّبِّ أَعُوذُ بِكَ مِنْ هَمَزَاتِ الشَّيَاطِينِ ، وَأَعُوذُ بِكَ رَبِّ أَن يَحْضُرُونِ",
        en: "My Lord, I seek refuge in You from the incitements of the devils, and I seek refuge in You, my Lord, lest they be present with me.",
        transliteration: "Rabbi a'oodhu bika min hamazatish-shayateen, wa a'oodhu bika rabbi an yahduroon."
    },
    repetitions: 10,
    info: { ar: "سورة [المؤمنون: 97-98].", en: "Surah [Al-Mu'minun: 97-98].", transliteration: "" },
  },
  {
    id: 2,
    text: {
        ar: "رب اغفر لي وتب علي إنك أنت التواب الرحيم",
        en: "My Lord, forgive me and accept my repentance, verily You are the One who accepts repentance, the Most-Merciful.",
        transliteration: "Rabbi-ghfir lee wa tub 'alayya, innaka Antat-Tawwabur-Raheem."
    },
    repetitions: 10,
    info: { ar: "من حديث عبد الله بن عمر ، رواه أبو داود، والترمذي [صحيح].", en: "From the hadith of Abdullah bin Umar, narrated by Abu Dawud, At-Tirmidhi [Sahih].", transliteration: "" },
  },
  {
    id: 3,
    text: {
        ar: "رب لا إله إلا أنت سبحانك إني كنت من الظالمين",
        en: "My Lord, there is no deity except You; exalted are You. Indeed, I have been of the wrongdoers.",
        transliteration: "Rabbi la ilaha illa Anta, subhanaka, inni kuntu minadh-dhalimeen."
    },
    repetitions: 10,
    info: { ar: "من حديث سعد بن أبي وقاص ، وفيه: «لم يَدْعُ بها رَجُلٌ مُسْلمٌ في شَيْءٍ قَطُّ إلَّا اسْتَجابَ اللهُ لهُ»، رواه الترمذي، والحاكم [حسن].", en: "From the hadith of Sa'd ibn Abi Waqqas, in which it is mentioned: 'No Muslim man supplicates with it for anything whatsoever except that Allah responds to him.' Narrated by At-Tirmidhi, Al-Hakim [Hasan].", transliteration: "" },
  },
  {
    id: 4,
    text: {
        ar: "لا إله إلا الله وحده لا شريك له ، له الملك وله الحمد، يحيي ويميت، وهو على كل شيء قدير",
        en: "None has the right to be worshipped except Allah, alone, without partner. To Him belongs all sovereignty and praise. He gives life and causes death, and He is over all things omnipotent.",
        transliteration: "La ilaha illallahu wahdahu la shareeka lah, lahul-mulku wa lahul-hamd, yuhyi wa yumeet, wa Huwa 'ala kulli shay'in Qadeer."
    },
    repetitions: 10,
    info: { ar: "من حديث أَبِي عَيَّاشٍ الزُّرَقِيِّ ، وفيه أن من قالها إذا أصبح وإذا أمسى: «‌كَانَ ‌لَهُ ‌عِدْلَ ‌رَقَبَةٍ ‌مِنْ ‌وَلَدِ ‌إِسْمَاعِيلَ، وَكُتِبَ لَهُ عَشْرُ حَسَنَاتٍ، وَحُطَّ عَنْهُ عَشْرُ سَيِّئَاتٍ، وَرُفِعَ لَهُ عَشْرُ دَرَجَاتٍ، وَكَانَ فِي حِرْزٍ مِنَ الشَّيْطَانِ»، رواه أبو داود، وابن ماجه [صحيح].", en: "From the hadith of Abi 'Ayyash al-Zurqi, in which it says whoever says it in the morning and evening, 'it will be for him the equivalent of freeing a slave from the descendants of Isma'il, and ten good deeds will be written for him, and ten bad deeds will be erased, and he will be raised ten degrees, and he will be in protection from Satan'. Narrated by Abu Dawud, Ibn Majah [Sahih].", transliteration: "" },
  },
  {
    id: 5,
    text: {
        ar: "رَضِيتُ ‌بِاللهِ رَبًّا، ‌وَبِالْإِسْلَامِ ‌دِينًا، وَبِمُحَمَّدٍ ﷺ نَبِّيًا (وَرَسُولًا)",
        en: "I am pleased with Allah as my Lord, with Islam as my religion, and with Muhammad (peace and blessings of Allah be upon him) as my Prophet.",
        transliteration: "Raḍītu billāhi Rabba, wa bil-Islāmi dīna, wa bi-Muḥammadin (ṣallallāhu `alayhi wa sallama) nabiyya."
    },
    repetitions: 3,
    info: { ar: "عن أبي سعيد الخدري، وفيه أن من قاله: «وجبت له الجنة»، رواه أبو داود [حسن].", en: "From Abu Sa'id Al-Khudri, wherein it is mentioned that for whoever says it, 'Paradise becomes obligatory for him'. Narrated by Abu Dawud [Hasan].", transliteration: "" },
  },
  {
    id: 6,
    text: {
        ar: "سُبْحَانَ ‌اللَّهِ ‌وَبِحَمْدِهِ ‌عَدَدَ ‌خَلْقِهِ، وَرِضَا نَفْسِهِ، وَزِنَةَ عَرْشِهِ، وَمِدَادَ كَلِمَاتِهِ",
        en: "How perfect Allah is and I praise Him by the number of His creation, by His pleasure, by the weight of His throne, and by the ink of His words.",
        transliteration: "Subhan-Allahi wa bihamdihi, 'adada khalqihi, wa rida nafsihi, wa zinata 'arshihi, wa midada kalimatihi."
    },
    repetitions: 3,
    info: { ar: "عَنْ جُوَيْرِيَةَ أَنَّ النبيَّ ﷺ قال لها: «لَقَدْ قُلْتُ بَعْدَكِ أَرْبَعَ كَلِمَاتٍ ثَلَاثَ مَرَّاتٍ لَوْ وُزِنَتْ بِمَا قُلْتِ مُنْذُ الْيَوْمِ لَوَزَنَتْهُنَّ سُبْحَانَ اللَّهِ وَبِحَمْدِهِ عَدَدَ خَلْقِهِ، وَرِضَا نَفْسِهِ، وَزِنَةَ عَرْشِهِ، وَمِدَادَ كَلِمَاتِهِ»، رواه مسلم.", en: "From Juwayriyah that the Prophet ﷺ said to her: 'I have recited four words three times after I left you. If these are weighed against what you have recited since morning, these will be heavier: How perfect Allah is and I praise Him by the number of His creation, by His pleasure, by the weight of His throne, and by the ink of His words.' Narrated by Muslim.", transliteration: "" },
  },
  {
    id: 7,
    text: {
        ar: "رَبِّ لَكَ الْحَمْدُ ‌كَمَا ‌يَنْبَغِي ‌لِجَلَالِ ‌وَجْهِكَ ‌وَعَظِيمِ ‌سُلْطَانِكَ",
        en: "My Lord, for You is all praise as is befitting to the majesty of Your Face and the greatness of Your sovereignty.",
        transliteration: "Rabbi lakal-hamdu kama yanbaghi li-jalali wajhika wa 'adheemi sultanik."
    },
    repetitions: 3,
    info: { ar: "عن عبد الله بن عمر أن رسول الله ﷺ حدَّثهم «أَنَّ عَبْدًا مِنْ عِبَادِ اللهِ قَالَ: يَا رَبِّ! لَكَ الْحَمْدُ ... فَعَضَّلَتْ بِالْمَلَكَيْنِ، فَلَمْ يَدْرِيَا كَيْفَ يَكْتُبَانِهَا...فَقَالَ اللهُ  لَهُمَا: اكْتُبَاهَا كَمَا قَالَ عَبْدِي، حَتَّى يَلْقَانِي فَأَجْزِيَهُ بِهَا»، رواه ابن ماجه [يدخل ضمن المعمول به في فضائل الأعمال].", en: "From Abdullah bin Umar that the Messenger of Allah ﷺ told them 'that a slave from the slaves of Allah said: 'O my Lord! For You is all praise...' and it was too great for the two angels, they did not know how to write it down... so Allah said to them: Write it as My slave has said it, until he meets Me and I shall reward him for it'. Narrated by Ibn Majah [Considered permissible to act upon in virtuous deeds].", transliteration: "" },
  },
  {
    id: 8,
    text: {
        ar: "الْحَمْدُ ‌لِلَّهِ ‌عَدَدَ ‌مَا ‌خَلَقَ، الْحَمْدُ لِلَّهِ مِلْءَ مَا خَلَقَ، الْحَمْدُ لِلَّهِ عَدَدَ مَا فِي السَّمَاءِ وَالْأَرْضِ، الْحَمْدُ لِلَّهِ مِلْءَ مَا فِي السَّمَاءِ وَالْأَرْضِ، الْحَمْدُ لِلَّهِ عَدَدَ مَا أَحْصَى كِتَابُهُ، الْحَمْدُ لِلَّهِ مِلْءَ مَا أَحْصَى كِتَابُهُ، الْحَمْدُ لِلَّهِ عَدَدَ كُلِّ شَيْءٍ، الْحَمْدُ لِلَّهِ مِلْءَ كُلِّ شَيْءٍ",
        en: "Praise be to Allah by the number of what He created. Praise be to Allah by the fullness of what He created. Praise be to Allah by the number of what is in the heavens and the earth. Praise be to Allah by the fullness of what is in the heavens and the earth. Praise be to Allah by the number of what His book has enumerated. Praise be to Allah by the fullness of what His book has enumerated. Praise be to Allah by the number of everything. Praise be to Allah by the fullness of everything.",
        transliteration: "Alhamdu lillahi 'adada ma khalaq, alhamdu lillahi mil'a ma khalaq, alhamdu lillahi 'adada ma fis-sama'i wal-ard, alhamdu lillahi mil'a ma fis-sama'i wal-ard, alhamdu lillahi 'adada ma ahsa kitabuh, alhamdu lillahi mil'a ma ahsa kitabuh, alhamdu lillahi 'adada kulli shay', alhamdu lillahi mil'a kulli shay'."
    },
    repetitions: 1,
    info: { ar: "عنْ أَبِي أُمَامَةَ ، قَالَ: رَآنِي النَّبِيُّ ﷺ وَأَنَا أُحَرِّكُ شَفَتَيَّ، فَقَالَ: مَا تَقُولُ يَا أَبَا أُمَامَةَقُلْتُ: أَذْكُرُ اللَّهَ، قَالَ: «أَفَلا أَدُلُّكَ عَلَى مَا هُوَ أَكْثَرُ مِنْ ذِكْرِكَ اللَّهَ اللَّيْلَ مَعَ النَّهَارِ؟ ... تُعَلِّمُهُنَّ عَقِبَكَ مِنْ بَعْدَكَ»، رواه أحمد، والحاكم [صحيح].", en: "From Abu Umamah, who said: The Prophet ﷺ saw me moving my lips, so he asked, 'What are you saying, O Abu Umamah?' I said, 'I am remembering Allah.' He said, 'Shall I not guide you to something that is more than your remembrance of Allah during the night and day? ... Teach them to your offspring after you'. Narrated by Ahmad, Al-Hakim [Sahih].", transliteration: "" },
  },
  {
    id: 9,
    text: {
        ar: "اللَّهمَّ صَلِّ عَلَى مُحَمَّدٍ وآلِ مُـحَمَّدٍ وبارك وسَلِّمْ تَسْلِيمًا كَثِيرًا (تسع مرات)، ويجعل العاشرة:\n «اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ، وبَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ في العَالَمِينَ إِنَّكَ حَمِيدٌ مَجِيدٌ»، [وَسَلِّمْ تَسْلِيمًا كَثِيرًا] «فِـي كُلِّ لَـحْظَةٍ أَبَدًا عَدَدَ خَلْقِكَ، وَرَضَا نَفْسِكَ، وَزِنَةَ عَرْشِكَ، وَمِدَادَ كَلِمَاتِكَ». ",
        en: "O Allah, bestow prayers upon Muhammad and the family of Muhammad, and bless and grant abundant peace (nine times). And on the tenth time make it: 'O Allah, bestow prayers upon Muhammad and upon the family of Muhammad, as You have bestowed prayers upon Ibrahim and upon the family of Ibrahim. Indeed, You are Praiseworthy, Glorious. And bless Muhammad and the family of Muhammad, as You have blessed Ibrahim and the family of Ibrahim among the worlds. Indeed, You are Praiseworthy, Glorious.' [And grant abundant peace] 'in every moment, forever, by the number of Your creation, the pleasure of Yourself, the weight of Your Throne, and the ink of Your words.'",
        transliteration: "Allahumma salli 'ala Muhammadin wa aali Muhammadin wa barik wa sallim tasleeman katheera. (10th time:) 'Allahumma salli 'ala Muhammadin wa 'ala aali Muhammadin kama sallayta 'ala Ibraheema wa 'ala aali Ibraheema innaka Hameedun Majeed, wa barik 'ala Muhammadin wa 'ala aali Muhammadin kama barakta 'ala Ibraheema wa 'ala aali Ibraheema fil-'alameena innaka Hameedun Majeed', [wa sallim tasleeman katheera] 'fi kulli lahdatin abadan 'adada khalqika, wa rida nafsika, wa zinata 'arshika, wa midada kalimatik.'"
    },
    repetitions: 10,
    info: { ar: "عن كعب بن عُجْرَة ، رواه البخاري", en: "From Ka'b bin 'Ujrah, narrated by Al-Bukhari.", transliteration: "" },
  },
  {
    id: 10,
    text: {
        ar: "بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ\nٱللَّهُ لَا إِلَـٰهَ إِلَّا هُوَ ٱلْحَيُّ ٱلْقَيُّومُ لَا تَأْخُذُهُۥ سِنَةٌ وَلَا نَوْمٌ لَّهُۥ مَا فِي ٱلسَّمَٰوَٰتِ وَمَا فِي ٱلْأَرْضِ مَن ذَا ٱلَّذِي يَشْفَعُ عِندَهُۥ إِلَّا بِإِذْنِهِۦ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَيۡءٍ مِّنۡ عِلۡمِهِۦٓ إِلَّا بِمَا شَآءَ وَسِعَ كُرۡسِيُّهُ ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضَ وَلَا يَـُۧودُهُۥ حِفۡظُهُمَا وَهُوَ ٱلۡعَلِيُّ ٱلۡعَظِيمُ.\n- آية الكرسى (البقرة: 255)",
        en: "I seek refuge in Allah from Satan, the expelled.\nAllah - there is no deity except Him, the Ever-Living, the Sustainer of all existence. Neither drowsiness overtakes Him nor sleep. To Him belongs whatever is in the heavens and whatever is on the earth. Who is it that can intercede with Him except by His permission? He knows what is [presently] before them and what will be after them, and they encompass not a thing of His knowledge except for what He wills. His Kursi (Throne) extends over the heavens and the earth, and their preservation tires Him not. And He is the Most High, the Most Great.\n- Ayah Al-Kursi (Al-Baqarah: 255)",
        transliteration: "بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ\nAllahu la ilaha illa Huwal-Hayyul-Qayyum, la ta'khudhuhu sinatun wala nawm, lahu ma fis-samawati wama fil-ard, man dhal-ladhi yashfa'u 'indahu illa bi-idhnih, ya'lamu ma bayna aydeehim wama khalfahum, wala yuheetoona bishay'im-min 'ilmihi illa bima sha', wasi'a kursiyyuhus-samawati wal-ard, wala ya'ooduhu hifdhuhuma, wa Huwal-'Aliyyul-'Adheem."
    },
    repetitions: 1,
    info: { ar: "أحاديث فضل آية الكرسي كثيرة، منها حديث أبي هريرة عند البخاري: «إِذَا أَوَيْتَ إِلَى فِرَاشِكَ، فَاقْرَأْ آيَةَ الْكُرْسِيِّ.. فَإِنَّكَ لَنْ ‌يَزَالَ ‌عَلَيْكَ ‌مِنَ ‌اللَّهِ ‌حَافِظٌ، وَلَا يَقْرَبَنَّكَ شَيْطَانٌ حَتَّى تُصْبِحَ»، والنص على أنها تُقرأ في الصباح والمساء رواه الطبراني عن أُبَيِّ بن كَعْبٍ [صحيح].", en: "The hadiths on the virtue of Ayah Al-Kursi are many, among them the hadith of Abu Hurairah in Al-Bukhari: 'When you go to your bed, recite Ayah Al-Kursi... for then a guardian from Allah will be with you, and no devil will come near you until morning.' The text stating it should be read in the morning and evening is narrated by At-Tabarani from Ubayy ibn Ka'b [Sahih].", transliteration: "" },
  },
  {
    id: 11,
    text: {
        ar: "بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ\nقُلْ هُوَ اللَّهُ أَحَدٌ اللَّهُ الصَّمَدُ لَمْ يَلِدْ وَلَمْ يُولَدْ وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ.",
        en: "بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ\nSay, 'He is Allah, the One. Allah, the Eternal Refuge. He neither begets nor is born, Nor is there to Him any equivalent.'",
        transliteration: "بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ\nQul huwa Allahu ahad. Allahus-samad. Lam yalid wa lam yoolad. Wa lam yakun lahu kufuwan ahad."
    },
    repetitions: 3,
    info: { ar: "عن عبد الله بن خبيب أن ﷺ قال له: «قل هو الله أحد، والمعوِّذتين حين تمسي وحين تصبح ثلاث مرَّات تكفيك من كل شيء»، أبو داود، الترمذي [حسن].", en: "From Abdullah bin Khubaib that the Prophet ﷺ said to him: 'Recite 'Say, He is Allah, the One' and the two chapters of refuge (Al-Falaq, An-Nas) when you enter the evening and when you enter the morning three times, they will suffice you against everything.' Abu Dawud, At-Tirmidhi [Hasan].", transliteration: "" },
  },
  {
    id: 12,
    text: {
        ar: "بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ\nقُلْ أَعُوذُ بِرَبِّ الْفَلَقِ مِنْ شَرِّ مَا خَلَقَ وَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ وَمِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ.",
        en: "بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ\nSay, 'I seek refuge in the Lord of daybreak, from the evil of that which He created, and from the evil of darkness when it settles, and from the evil of the blowers in knots, and from the evil of an envier when he envies.'",
        transliteration: "بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ\nQul a'oodhu birabbil-falaq. Min sharri ma khalaq. Wa min sharri ghasiqin idha waqab. Wa min sharrin-naffathati fil-'uqad. Wa min sharri hasidin idha hasad."
    },
    repetitions: 3,
    info: { ar: "عن عبد الله بن خبيب أن ﷺ قال له: «قل هو الله أحد، والمعوِّذتين حين تمسي وحين تصبح ثلاث مرَّات تكفيك من كل شيء»، أبو داود، الترمذي [حسن].", en: "From Abdullah bin Khubaib that the Prophet ﷺ said to him: 'Recite 'Say, He is Allah, the One' and the two chapters of refuge (Al-Falaq, An-Nas) when you enter the evening and when you enter the morning three times, they will suffice you against everything.' Abu Dawud, At-Tirmidhi [Hasan].", transliteration: "" },
  },
  {
    id: 13,
    text: {
        ar: "بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ\nقُلْ أَعُوذُ بِرَبِّ النَّاسِ مَلِكِ النَّاسِ إِلَهِ النَّاسِ مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ مِنَ الْجِنَّةِ وَالنَّاسِ.",
        en: "بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ\nSay, 'I seek refuge in the Lord of mankind, the Sovereign of mankind, the God of mankind, from the evil of the retreating whisperer, who whispers into the breasts of mankind, from among the jinn and mankind.'",
        transliteration: "بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ\nQul a'oodhu birabbin-nas. Malikin-nas. Ilahin-nas. Min sharril-waswasil-khannas. Alladhee yuwaswisu fee sudoorin-nas. Minal-jinnati wan-nas."
    },
    repetitions: 3,
    info: { ar: "عن عبد الله بن خبيب أن ﷺ قال له: «قل هو الله أحد، والمعوِّذتين حين تمسي وحين تصبح ثلاث مرَّات تكفيك من كل شيء»، أبو داود، الترمذي [حسن].", en: "From Abdullah bin Khubaib that the Prophet ﷺ said to him: 'Recite 'Say, He is Allah, the One' and the two chapters of refuge (Al-Falaq, An-Nas) when you enter the evening and when you enter the morning three times, they will suffice you against everything.' Abu Dawud, At-Tirmidhi [Hasan].", transliteration: "" },
  },
  {
    id: 14,
    text: {
        ar: "يَا ‌حَيُّ ‌يَا ‌قَيُّومُ ‌يَا ‌ذَا ‌الْجَلالِ ‌وَالإِكْرَامِ، ‌بِرَحْمَتِكَ ‌أَسْتَغِيثُ، ‌أَصْلِحْ ‌لِي ‌شَأْنِي ‌كُلَّهُ، وَلَا تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ",
        en: "O Ever-Living, O Sustainer, O Lord of Majesty and Honor, by Your mercy I seek assistance, rectify for me all of my affairs and do not leave me to myself, even for the blink of an eye.",
        transliteration: "Ya Hayyu, ya Qayyoom, ya Dhal-Jalali wal-Ikram, birahmatika astagheeth, aslih lee sha'nee kullah, wala takilnee ila nafsee tarfata 'ayn."
    },
    repetitions: 1,
    info: { ar: "هذا دعاء فاطمة علَّمه النَّبي ﷺ إيَّاها، رواه البزار، وزيادة: (يا ذا الجلال والإكرام) وردت عند أحمد وغيره [حسن].", en: "This is the supplication of Fatimah, which the Prophet ﷺ taught her. Narrated by Al-Bazzar. The addition (O Lord of Majesty and Honor) is reported by Ahmad and others [Hasan].", transliteration: "" },
  },
  {
    id: 15,
    text: {
        ar: "اللَّهُمَّ اخْتَرْ لي فإِنِّي لا أُحْسِنُ الاختِيارَ، ودَبِّرْ لي فإِنِّي لا أُحْسِنُ التَّدْبِيرَ",
        en: "O Allah, choose for me, for I do not know how to choose. And manage my affairs for me, for I do not know how to manage.",
        transliteration: "Allahumma-khtar lee fa'innee la uhsinul-ikhtiyar, wa dabbir lee fa'innee la uhsinut-tadbeer."
    },
    repetitions: 1,
    info: { ar: "(دعاء لبعض الصالحين).", en: "(A supplication from some of the righteous).", transliteration: "" },
  },
  {
    id: 16,
    text: {
        ar: "رَبِّ أَجِرْنِي مِنَ النَّارِ",
        en: "My Lord, protect me from the Fire.",
        transliteration: "Rabbi ajirnee minan-nar."
    },
    repetitions: 7,
    info: { ar: "عن أنس قال: قال النبي ﷺ: «من سأل الله الجنة ثلاث مرات، قالت الجنة: اللهم أدخله الجنة، ومن استجار من النار ثلاث مرات، قالت النار: اللهم أجره من النار»، رواه الترمذي، والسبع مرات من حديث أبي هريرة ، كما عند أبي يعلى [صحيح].", en: "From Anas, who said the Prophet ﷺ said: 'Whoever asks Allah for Paradise three times, Paradise says: 'O Allah, admit him to Paradise.' And whoever seeks protection from the Fire three times, the Fire says: 'O Allah, protect him from the Fire.'' Narrated by At-Tirmidhi. The seven times repetition is from a hadith of Abu Hurairah, as reported by Abu Ya'la [Sahih].", transliteration: "" },
  },
  {
    id: 17,
    text: {
        ar: "رَبِّ أَسْأَلُكَ الفِرْدَوسَ الأَعْلَى مِنَ الجَنَّةِ مِنْ غَيْرِ سَابِقَةِ حِسَابٍ إِنَّكَ أَنْتَ الوَهَّابُ",
        en: "My Lord, I ask You for the highest level of Paradise, Al-Firdaws, without a preceding reckoning. Verily, You are the Bestower.",
        transliteration: "Rabbi as'alukal-Firdawsal-A'la minal-Jannah min ghayri sabiqati hisab, innaka Antal-Wahhab."
    },
    repetitions: 7,
    info: { ar: "عَنْ أَنَسِ قَالَ: قَالَ ﷺ: «... فَإِذَا سَأَلْتُمُ اللَّهَ فَسَلُوهُ الْفِرْدَوْسَ»، رواه ابن حبان، وأصله في البخاري.", en: "From Anas, who said the Prophet ﷺ said: '...So when you ask Allah, ask for Al-Firdaws.' Narrated by Ibn Hibban, with its origin in Al-Bukhari.", transliteration: "" },
  },
  {
    id: 18,
    text: {
        ar: "اللهم صب علي الخير صبا، ولا تجعل عيشي كدا",
        en: "O Allah, pour goodness upon me in abundance, and do not make my life one of hardship.",
        transliteration: "Allahumma subba 'alayyal-khayra sabba, wa la taj'al 'ayshee kadda."
    },
    repetitions: 3,
    info: { ar: "عن أبي هريرة، وفيه أنه من دعاء سيدنا أيوب ، رواه البخاري، وأحمد.", en: "From Abu Hurairah, and in it is the supplication of our master Ayyub. Narrated by Al-Bukhari and Ahmad.", transliteration: "" },
  },
  {
    id: 19,
    text: {
        ar: "رَبِّ أَسْأَلُكَ أَعْظَمَ البَرَكَةِ فِي نَفْسِي وَوَلَدِي، وَأَهْلِي وَمَالِي، وَعِلْمِي وَعَمَلِي وَوَقْتِي، يَا أَرْحَمَ الرَّاحِمِينَ",
        en: "My Lord, I ask You for the greatest blessing in myself and my children, my family and my wealth, my knowledge and my deeds, and my time, O Most Merciful of the merciful.",
        transliteration: "Rabbi as'aluka a'dhamal-barakati fi nafsee wa waladee, wa ahlee wa malee, wa 'ilmee wa 'amalee wa waqtee, ya Arhamar-rahimeen."
    },
    repetitions: 1,
    info: { ar: "(دعاء لبعضهم).", en: "(A supplication from some of them).", transliteration: "" },
  },
  {
    id: 20,
    text: {
        ar: "اللهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ وَرَحْمَتِكَ؛ فَإِنَّهُ ‌لَا ‌يَمْلِكُهَا ‌إِلَّا ‌أَنْتَ",
        en: "O Allah, I ask You of Your favor and Your mercy, for indeed, no one possesses them except You.",
        transliteration: "Allahumma innee as'aluka min fadlika wa rahmatik, fa'innahu la yamlikuha illa Anta."
    },
    repetitions: 3,
    info: { ar: "عَنْ ابن مسعود ، رواه الطبراني في المعجم الكبير [صحيح].", en: "From Ibn Mas'ud, narrated by At-Tabarani in Al-Mu'jam Al-Kabeer [Sahih].", transliteration: "" },
  },
  {
    id: 21,
    text: {
        ar: "اللَّهُمَّ آتِنِي مِنْ فَضْلِكَ وَرَحْمَتِكَ بِفَضْلِكَ وَرَحْمَتِكَ أَفْضَلَ مَا تُؤْتِي عِبَادَكَ الصَّالحينَ",
        en: "O Allah, grant me from Your favor and Your mercy, by Your favor and Your mercy, the best of what You grant Your righteous servants.",
        transliteration: "Allahumma atinee min fadlika wa rahmatika bi-fadlika wa rahmatika afdala ma tu'tee 'ibadakas-saliheen."
    },
    repetitions: 3,
    info: { ar: "دعاء لبعض الصالحين، وأصله أنَّ رجلًا جاء النَّبيَّ ﷺ وهو يُصلِّي بنا فقال: اللَّهمَّ آتِني أفضَلَ ما تؤتي عبادَكَ الصَّالحينَ»، رواه ابن حبان، والحاكم [حسن].", en: "A supplication of some of the righteous, its origin is that a man came to the Prophet ﷺ while he was praying with us and said: 'O Allah, grant me the best of what you grant your righteous servants'. Narrated by Ibn Hibban and Al-Hakim [Hasan].", transliteration: "" },
  },
  {
    id: 22,
    text: {
        ar: "‌اللَّهُمَّ ‌مَالِكَ ‌الْمُلْكِ، تُؤْتِي الْمُلْكَ مَنْ تَشَاءُ، وَتَنْزِعُ الْمُلْكَ مِمَّنْ تَشَاءُ، وَتُعِزُّ مَنْ تَشَاءُ، وَتُذِلُّ مَنْ تَشَاءُ، بِيَدِكَ الْخَيْرُ، إِنَّكَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، تُولِجُ اللَّيْلَ فِي النَّهَارِ، وَتُولِجُ النَّهَارَ فِي اللَّيْلِ، وَتُخْرِجُ الْحَيَّ مِنَ الْمَيِّتِ، وَتُخْرِجُ الْمَيِّتَ مِنَ الْحَيِّ، وَتَرْزُقُ مَنْ تَشَاءُ بِغَيْرِ حِسَابٍ، رَحْمَنَ الدُّنْيَا وَالْآخِرَةِ وَرَحِيمَهُمَا، تُعْطِيهِمَا مَنْ تَشَاءُ، وَتَمْنَعُ مِنْهُمَا مَنْ تَشَاءُ، ارْحَمْنِي رَحْمَةً تُغْنِينِي بِهَا عَنْ رَحْمَةِ مَنْ سِوَاكَ، يَا أَرْحَمَ الرَّاحِمِينَ",
        en: "O Allah, Owner of Sovereignty, You give sovereignty to whom You will and You take sovereignty away from whom You will. You honor whom You will and You humble whom You will. In Your hand is [all] good. Indeed, You are over all things competent, You cause the night to enter the day, and You cause the day to enter the night; and You bring the living out of the dead, and You bring the dead out of the living. And You give provision to whom You will without account, O Most-Merciful of this world and the Hereafter, and the Most-Compassionate of them. You give them to whom You will and You withhold them from whom You will. Bestow mercy upon me, a mercy by which I have no need of the mercy of anyone besides you, O Most Merciful of the merciful.",
        transliteration: "Allāhumma mālikal-mulki, tu'til-mulka man tashā'u, wa tanzi'ul-mulka mimman tashā'u, wa tu'izzu man tashā'u, wa tudhillu man tashā'u, biyadikal-khayr, innaka 'alā kulli shay'in qadīr. Tūlijul-layla fīn-nahār, wa tūlijun-nahāra fil-layl, wa tukhrijul-hayya minal-mayyiti, wa tukhrijul-mayyita minal-hayyi, wa tarzuqu man tashā'u bighayri hisāb. Rahmānad-dunyā wal-ākhirati wa rahīmahumā, tu'ṭīhimā man tashā'u, wa tamna'u minhumā man tashā'. Irhamnī rahmatan tughnīnī bihā 'an rahmati man siwāk, yā arhamar-rāhimīn."
    },
    repetitions: 1,
    info: { ar: "عن أنس  قال: قال رسول الله ﷺ لمعاذ : «أَلا أُعلِّمُك دعاءً تدعو به لو كان عليك مثلُ جبلِ أُحُدٍ دَيْنًا لأدَّاه اللهُ عنك؟ قل يا معاذُ: اللهمَّ مالكَ الملكِ ...الحديث»، رواه الطبراني في الصغير [حسن]. ", en: "On the authority of Anas, who said: The Messenger of Allah (ﷺ) said to Mu'adh: Shall I not teach you a supplication with which, if you were to have a debt like the mountain of Uhud, Allah would settle it for you? Say, O Mu'adh: O Allah, Owner of the Kingdom... (and then he recited the rest of the supplication).Narrated by Al-Tabarani in Al-Saghir and classified as Hasan (Good).", transliteration: "An Anas qāla: Qāla Rasūlullāhi (ﷺ) li-Mu'ādh: «A lā u'allimuka du'ā'an tad'ū bihi law kāna 'alayka mithla jabali Uḥudin daynan la-addāhu Allāhu 'anka? Qul yā Mu'ādh: Allāhumma mālikal-mulki... (wa then the rest of the long du'a from the previous message follows)...Al-Ḥadīth». Riwāhu al-Ṭabarānī fī al-Ṣaghīr [Ḥasan]" },
  },
  {
    id: 23,
    text: {
        ar: "اللَّهُمَّ ‌اكْفِنِي ‌بِحَلَالِكَ ‌عَنْ ‌حَرَامِكَ، وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ",
        en: "O Allah, suffice me with Your lawful provision against Your unlawful provision, and make me independent of all those besides You.",
        transliteration: "Allahummak-finee bihalalika 'an haramik, wa aghninee bifadlika 'amman siwak."
    },
    repetitions: 3,
    info: { ar: "عن علِيٍّ ، رواه أحمد، والترمذي [حسن].", en: "From 'Ali, narrated by Ahmad and At-Tirmidhi [Hasan].", transliteration: "" },
  },
  {
    id: 24,
    text: {
        ar: "اللَّهُمَّ ‌مَالِكَ ‌الْمُلْكِ، تُؤْتِي الْمُلْكَ مَنْ تَشَاءُ، وَتَنْزِعُ الْمُلْكَ مِمَّنْ تَشَاءُ، وَتُعِزُّ مَنْ تَشَاءُ، وَتُذِلُّ مَنْ تَشَاءُ، بِيَدِكَ الْخَيْرُ، إِنَّكَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، تُولِجُ اللَّيْلَ فِي النَّهَارِ، وَتُولِجُ النَّهَارَ فِي اللَّيْلِ، وَتُخْرِجُ الْحَيَّ مِنَ الْمَيِّتِ، وَتُخْرِجُ الْمَيِّتَ مِنَ الْحَيِّ، وَتَرْزُقُ مَنْ تَشَاءُ بِغَيْرِ حِسَابٍ، رَحْمَنَ الدُّنْيَا وَالْآخِرَةِ وَرَحِيمَهُمَا، تُعْطِيهِمَا مَنْ تَشَاءُ، وَتَمْنَعُ مِنْهُمَا مَنْ تَشَاءُ، ارْحَمْنِي رَحْمَةً تُغْنِينِي بِهَا عَنْ رَحْمَةِ مَنْ سِوَاكَ، يَا أَرْحَمَ الرَّاحِمِينَ",
        en: "O Allah, Owner of Sovereignty, You give sovereignty to whom You will and You take sovereignty away from whom You will. You honor whom You will and You humble whom You will. In Your hand is all good. Indeed, You are over all things competent. You cause the night to enter the day, and You cause the day to enter the night. You bring the living out of the dead, and You bring the dead out of the living. And You give provision to whom You will without account. O Most-Merciful of this world and the Hereafter, and the Most-Compassionate of them. You give them to whom You will and You withhold them from whom You will. Bestow mercy upon me, a mercy by which I have no need of the mercy of anyone besides you, O Most Merciful of the merciful.",
        transliteration: "Allahumma Malikal-Mulk, tu'til-mulka man tasha', wa tanzi'ul-mulka mimman tasha', wa tu'izzu man tasha', wa tudhillu man tasha', biyadikal-khayr, innaka 'ala kulli shay'in Qadeer. Tulijul-layla fin-nahar, wa tulijun-nahara fil-layl, wa tukhrijul-hayya minal-mayyit, wa tukhrijul-mayyita minal-hayy, wa tarzuqu man tasha'u bighayri hisab. Rahmanad-dunya wal-akhirati wa raheemahuma, tu'teehima man tasha', wa tamna'u minhuma man tasha', irhamnee rahmatan tughneenee biha 'an rahmati man siwak, ya Arhamar-rahimeen."
    },
    repetitions: 1,
    info: { ar: "عن أنس قال: قال رسول الله ﷺ لمعاذ : «أَلا أُعلِّمُك دعاءً تدعو به لو كان عليك مثلُ جبلِ أُحُدٍ دَيْنًا لأدَّاه اللهُ عنك؟ قل يا معاذُ: اللهمَّ مالكَ الملكِ ...الحديث»، رواه الطبراني في الصغير [حسن]. ", en: "From Anas, who said the Messenger of Allah ﷺ said to Mu'adh: 'Shall I not teach you a supplication to say, that if you had a debt like Mount Uhud, Allah would pay it off for you? Say, O Mu'adh: 'O Allah, Owner of Sovereignty...'' the hadith. Narrated by At-Tabarani in As-Saghir [Hasan].", transliteration: "" },
  },
  {
    id: 25,
    text: {
        ar: "اللَّهُمَّ افْتَحْ لِي مِنْ خَزَائِنِ رَحْمَتِكَ رَحْمَةً لا تُعَذْبنِي بَعْدَها أَبَدًا فِي الدُّنْيَا والآخِرَةِ، وَمِنْ فَضْلِكَ الوَاسِعِ رِزْقًا حَلَالًا طَيِّبًا (كَثِيرًا مِدْرَارًا، مُبَاركًا فِيْهِ، مُبَاركًا عَلَيْهِ) لا تُفْقِرْنِي بَعْدَهُ إِلَى أَحَدٍ سِوَاكَ أَبَدًا، تَزِيدُنِي لَكَ بِهِمَا شُكْرًا، ‌وَإِلَيْكَ ‌فَاقَةً ‌وَفَقْرًا، وَبِكَ عَمَّنْ سِوَاكَ غِنًى وَتَعَفُّفًا، يَا أَرْحَمَ الرَّاحِمِينَ",
        en: "O Allah, open for me from the treasures of Your mercy, a mercy after which You will never punish me in this world or the Hereafter. And from Your vast favor, a lawful, good provision (abundant, flowing, blessed within it, blessed upon it) after which I will never be in need of anyone besides You, ever. That it may increase me in gratitude to You, and in neediness and poverty towards You, and by You, I am free from need and self-sufficient from all besides You, O Most Merciful of the merciful.",
        transliteration: "Allahumma-ftah lee min khaza'ini rahmatika rahmatan la tu'adh-dhibanee ba'daha abadan fid-dunya wal-akhirah, wa min fadlikal-wasi'i rizqan halalan tayyiban (katheeran midraran, mubarakan feehi, mubarakan 'alayhi) la tufqirnee ba'dahu ila ahadin siwaka abada, tazeedunee laka bihima shukra, wa ilayka faqatan wa faqra, wa bika 'amman siwaka ghinan wa ta'affufa, ya Arhamar-rahimeen."
    },
    repetitions: 1,
    info: { ar: "دعاء بكر بن عبد الله المزني بتصرف.", en: "Supplication of Bakr bin Abdullah Al-Muzani, with some adaptation.", transliteration: "" },
  },
  {
    id: 26,
    text: {
        ar: "رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا",
        en: "Our Lord, grant us from among our wives and offspring comfort to our eyes and make us an example for the righteous.",
        transliteration: "Rabbana hab lana min azwajina wa dhurriyyatina qurrata a'yunin waj'alna lil-muttaqeena imama."
    },
    repetitions: 1,
    info: { ar: "سورة [الفرقان: 74].", en: "Surah [Al-Furqan: 74].", transliteration: "" },
  },
  {
    id: 27,
    text: {
        ar: "رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ وَعَلَى وَالِدَيَّ وَأَنْ أَعْمَلَ صَالِحًا تَرْضَاهُ وَأَصْلِحْ لِي فِي ذُرِّيَّتِي إِنِّي تُبْتُ إِلَيْكَ وَإِنِّي مِنَ الْمُسْلِمِينَ",
        en: "My Lord, enable me to be grateful for Your favor which You have bestowed upon me and upon my parents and to do righteousness of which You approve. And make righteous for me my offspring. Indeed, I have repented to You, and indeed, I am of the Muslims.",
        transliteration: "Rabbi awzi'nee an ashkura ni'matakal-latee an'amta 'alayya wa 'ala walidayya wa an a'mala salihan tardahu wa aslih lee fee dhurriyyatee, innee tubtu ilayka wa innee minal-muslimeen."
    },
    repetitions: 1,
    info: { ar: "سورة [الأحقاف: 15].", en: "Surah [Al-Ahqaf: 15].", transliteration: "" },
  },
  {
    id: 28,
    text: {
        ar: "ربِّ اهْدِنِي لأَحْسَنِ الأَخْلاقِ والأَقْوَالِ والأَعْمَالِ، لا يَهْدِي لأَحْسَنِهَا إِلَّا أَنْتَ، وَاصْرِفْ عَنِّي سَيِّئَهَا، لا يَصْرِفُ عَنِّي سَيِّئَهَا إِلا أَنْتَ",
        en: "My Lord, guide me to the best of character, speech, and deeds; no one guides to the best of them except You. And turn away from me the worst of them; no one turns away from me the worst of them except You.",
        transliteration: "Rabbi-hdinee li-ahsanil-akhlaqi wal-aqwali wal-a'mal, la yahdee li-ahsaniha illa Anta, wasrif 'annee sayyi'aha, la yasrifu 'annee sayyi'aha illa Anta."
    },
    repetitions: 1,
    info: { ar: "عنْ عَلِيِّ بْنِ أَبِي طَالِبٍ ، رواه مسلم.", en: "From 'Ali ibn Abi Talib, narrated by Muslim.", transliteration: "" },
  },
  {
    id: 29,
    text: {
        ar: "اللَّهُمَّ ‌آتِ ‌نَفْسِي ‌تَقْوَاهَا، زَكِّهَا أَنْتَ خَيْرُ مَنْ زَكَّاهَا، أَنْتَ وَلِيُّهَا وَمَوْلَاهَا",
        en: "O Allah, grant my soul its piety, and purify it, You are the best to purify it. You are its protector and its master.",
        transliteration: "Allahumma ati nafsee taqwaha, zakkiha Anta khayru man zakkaha, Anta waliyyuha wa mawlaha."
    },
    repetitions: 1,
    info: { ar: "عَنْ زَيْدِ بْنِ أَرْقَمَ، رواه مسلم.", en: "From Zayd ibn Arqam, narrated by Muslim.", transliteration: "" },
  },
  {
    id: 30,
    text: {
        ar: "اللَّهُمَّ ‌احْفَظْنِي ‌بِالْإِسْلَامِ ‌قَائِمًا، وَاحْفَظْنِي بِالْإِسْلَامِ قَاعِدًا، وَاحْفَظْنِي بِالْإِسْلَامِ رَاقِدًا، وَلَا تُشْمِتْ بِي عَدُوًّا وَلَا حَاسِدًا، اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ كُلِّ خَيْرٍ خَزَائِنُهُ بِيَدِكَ، وأعوذُ بِكَ مِنْ كُلِّ شَرٍّ خَزَائِنُهُ بِيَدِكَ",
        en: "O Allah, protect me with Islam while standing, and protect me with Islam while sitting, and protect me with Islam while lying down, and do not let an enemy or an envier rejoice at my expense. O Allah, I ask You for all good whose treasures are in Your hand, and I seek refuge in You from all evil whose treasures are in Your hand.",
        transliteration: "Allahumma-hfazni bil-islami qa'iman, wahfazni bil-islami qa'idan, wahfazni bil-islami raqidan, wa la tushmit bee 'aduwwan wala hasida. Allahumma inni as'aluka min kulli khayrin khaza'inuhu biyadik, wa a'oodhu bika min kulli sharrin khaza'inuhu biyadik."
    },
    repetitions: 1,
    info: { ar: "عن ابن مسعود، رواه الحاكم [حسن].", en: "From Ibn Mas'ud, narrated by Al-Hakim [Hasan].", transliteration: "" },
  },
  {
    id: 31,
    text: {
        ar: "اللَّهُمَّ إِنِّي أَسْأَلُكَ فِعْلَ الْخَيْرَاتِ، وَتَرْكَ الْمُنْكَرَاتِ، وَحُبَّ الْمَسَاكِينِ، وَأَنْ تَغْفِرَ لِي وَتَرْحَمَنِي، وَإِذَا أَرَدْتَ بِقَوْمٍ فِتْنَةً فَتَوَفَّنِي إِلَيْكَ، وَأَنَا غَيْرُ مَفْتُونٍ، اللَّهُمَّ إِنِّي أَسْأَلُكَ حُبَّكَ، وَحُبَّ مَنْ يُحِبُّكَ، وَحُبًّا يُبَلِّغُنِي حُبَّكَ -يَا أَرْحَمَ الرَّاحِمِينَ",
        en: "O Allah, I ask You for the performance of good deeds, the avoidance of evil deeds, and the love of the poor. And that You forgive me and have mercy on me. And if You intend a trial for a people, then take me to You without being tested. O Allah, I ask You for Your love, the love of those who love You, and a love that will bring me to Your love - O Most Merciful of the merciful.",
        transliteration: "Allahumma inni as'aluka fi'lal-khayrat, wa tarkal-munkarat, wa hubbal-masakeen, wa an taghfira lee wa tarhamanee, wa idha aradta biqawmin fitnatan fatawaffanee ilayka, wa ana ghayru maftoon. Allahumma inni as'aluka hubbak, wa hubba man yuhibbuk, wa hubban yuballighunee hubbak - ya Arhamar-rahimeen."
    },
    repetitions: 1,
    info: { ar: "عنْ ثَوْبَانَ، رواه البزار [صحيح لغيره].", en: "From Thawban, narrated by Al-Bazzar [Sahih li-ghayrihi].", transliteration: "" },
  },
  {
    id: 32,
    text: {
        ar: "اللهُمَّ إِنِّي أَسْأَلُكَ الثَّبَاتَ فِي الْأَمْرِ، ‌وَالْعَزِيمَةَ ‌عَلَى ‌الرُّشْدِ، وَأَسْأَلُكَ شُكْرَ نِعْمَتِكَ، وحُسْنَ عِبَادَتِكَ، وأَسْأَلُكَ مُوجِبَاتِ رَحْمَتِكَ، وَعَزَائِمَ مَغْفِرَتِكَ، وَأَسْأَلُكَ قَلْبًا سَلِيمًا، وَلِسَانًا صَادِقًا، (‌وَخُلُقًا ‌مُسْتَقِيمًا)، وَأَسْأَلُكَ مِنْ خَيْرِ مَا تَعْلَمُ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا تَعْلَمُ، وَأَسْتَغْفِرُكَ لِمَا تَعْلَمُ، إِنَّكَ أَنْتَ عَلَّامُ الْغُيُوبِ",
        en: "O Allah, I ask You for firmness in the affair, and determination in guidance. I ask You for gratitude for Your blessings, and excellence in Your worship. I ask You for the causes of Your mercy, and the resolves of Your forgiveness. I ask You for a sound heart, and a truthful tongue, (and upright character). I ask You for the good of what You know, and I seek refuge in You from the evil of what You know, and I seek Your forgiveness for what You know. Indeed, You are the Knower of the unseen.",
        transliteration: "Allahumma inni as'alukat-thabata fil-amr, wal-'azeemata 'alar-rushd, wa as'aluka shukra ni'matik, wa husna 'ibadatik, wa as'aluka mujibati rahmatik, wa 'aza'ima maghfiratik, wa as'aluka qalban saleema, wa lisanan sadiqa, (wa khuluqan mustaqeema), wa as'aluka min khayri ma ta'lam, wa a'oodhu bika min sharri ma ta'lam, wa astaghfiruka lima ta'lam, innaka Anta 'Allamul-ghuyoob."
    },
    repetitions: 1,
    info: { ar: "عن شداد بن أوس، رواه أحمد، الطبراني في الكبير، وما بين القوسين زيادة من المستدرك [حسن].", en: "From Shaddad bin Aws, narrated by Ahmad, At-Tabarani in Al-Kabeer. The addition in brackets is from Al-Mustadrak [Hasan].", transliteration: "" },
  },
  {
    id: 33,
    text: {
        ar: "اللَّهُمَّ فَاطِرَ السَّمَوَاتِ وَالْأَرْضِ، عَالِمَ الْغَيْبِ وَالشَّهَادَةِ، رَبَّ كُلِّ شَيْءٍ وَمَلِيكَهُ، أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا أَنْتَ، أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي، ‌وَشَرِّ ‌الشَّيْطَانِ ‌وَشَرَكِهِ، وَأَنْ أَقْتَرِفَ عَلَى نَفْسِي سُوءًا، أَوْ أَجُرَّهُ إِلَى مُسْلِمٍ",
        en: "O Allah, Originator of the heavens and the earth, Knower of the unseen and the witnessed, Lord and Sovereign of all things. I bear witness that there is no deity but You. I seek refuge in You from the evil of my own self, and from the evil of Satan and his snares, and from inflicting evil upon myself or bringing it upon any Muslim.",
        transliteration: "Allahumma Fatiras-samawati wal-ard, 'Alimal-ghaybi wash-shahadah, Rabba kulli shay'in wa maleekah, ash-hadu an la ilaha illa Ant, a'oodhu bika min sharri nafsee, wa sharri-shaytani wa sharakihi, wa an aqtarifa 'ala nafsee soo'an, aw ajurrahu ila muslim."
    },
    repetitions: 1,
    info: { ar: "عن أبي بكر الصديق، رواه الترمذي [صحيح].", en: "From Abu Bakr As-Siddiq, narrated by At-Tirmidhi [Sahih].", transliteration: "" },
  },
  {
    id: 34,
    text: {
        ar: "اللَّهُمَّ إِنِّى أَسْأَلُكَ الْهُدَى وَالتُّقَى، وَالْعَفَافَ وَالْغِنَى",
        en: "O Allah, I ask You for guidance, piety, chastity, and self-sufficiency.",
        transliteration: "Allahumma inni as'alukal-huda wat-tuqa, wal-'afafa wal-ghina."
    },
    repetitions: 1,
    info: { ar: "عن عبد الله بن مسعود، رواه مسلم.", en: "From Abdullah bin Mas'ud, narrated by Muslim.", transliteration: "" },
  },
  {
    id: 35,
    text: {
        ar: "أَمْسَيْنَا ‌وَأَمْسَى الْمُلْكُ لِلَّهِ ، وَالْحَمْدُ لِلَّهِ، وَالْكِبْرِيَاءُ وَالْعَظَمَةُ لِلَّهِ، وَالْخَلْقُ وَالْأَمْرُ، وَاللَّيْلُ وَالنَّهَارُ وَمَا سَكَنَ فِيهِمَا لِلَّهِ عَزَّ وَجَلَّ، اللَّهُمَّ اجْعَلْ أَوَّلَ هَذَا اللَّيْلِ صَلَاحًا، وَأَوْسَطَهُ نَجَاحًا، وَآخِرَهُ فَلَاحًا، أَسْأَلُكَ ‌خَيْرَ ‌الدُّنْيَا وَالْآخِرَةِ، يَا أَرْحَمَ الرَّاحِمِينَ",
        en: "We have entered the evening and at this very time all sovereignty belongs to Allah. All praise is for Allah. All greatness and magnificence belong to Allah. The creation and the command, the night and the day and all that dwells within them belong to Allah, the Mighty and Majestic. O Allah, make the beginning of this night righteous, its middle successful, and its end prosperous. I ask You for the good of this world and the Hereafter, O Most Merciful of the merciful.",
        transliteration: "Amsayna wa amsal-mulku lillah, wal-hamdu lillah, wal-kibriya'u wal-'adhamatu lillah, wal-khalqu wal-amru, wal-laylu wan-naharu wama sakana feehima lillahi 'azza wa jall. Allahumma-j'al awwala hadhal-layli salaha, wa awsatahu najaha, wa akhirahu falaha. As'aluka khayrad-dunya wal-akhirah, ya Arhamar-rahimeen."
    },
    repetitions: 1,
    info: { ar: "عن عبد الله بْنِ أَبِي أَوْفَى، رواه ابن السني في عمل اليوم والليلة، والطبراني في الدعاء [يدخل ضمن المعمول به في فضائل الأعمال].", en: "From Abdullah ibn Abi Awfa, narrated by Ibn As-Sunni in 'Amal Al-Yawm wa Al-Laylah' and At-Tabarani in 'Ad-Du'a' [Considered permissible to act upon in virtuous deeds].", transliteration: "" },
  },
  {
    id: 36,
    text: {
        ar: "أَمْسَيْنَا ‌وَأَمْسَى الْمُلْكُ لِلَّهِ رَبِّ الْعَالَمِينَ، اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ هذه اللَّيْلَةِ: فَتْحَهَا، ‌وَنَصْرَهَا، وَنُورَهَا، وَبَرَكَتَهَا، وَهُدَاهَا، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِيهَا، وَشَرِّ مَا قَبْلَهَا، وَشَرِّ مَا بَعْدَهَا",
        en: "We have entered the evening and at this time all sovereignty belongs to Allah, Lord of the worlds. O Allah, I ask You for the good of this night: its victory, its help, its light, its blessings, and its guidance. I seek refuge in You from the evil that is in it, and from the evil that was before it, and the evil that comes after it.",
        transliteration: "Amsayna wa amsal-mulku lillahi Rabbil-'alameen. Allahumma inni as'aluka khayra hadhihil-laylah: fat-haha, wa nasraha, wa nooraha, wa barakataha, wa hudaha. Wa a'oodhu bika min sharri ma feeha, wa sharri ma qablaha, wa sharri ma ba'daha."
    },
    repetitions: 1,
    info: { ar: "عن ابن عمر، رواه الطبراني في المعجم الكبير، وقال في مجمع الزوائد: «رَوَاهُ الطَّبَرَانِيُّ، وَرِجَالُهُ رِجَالُ الصَّحِيحِ» [يدخل ضمن المعمول به في فضائل الأعمال].", en: "From Ibn 'Umar, narrated by At-Tabarani in Al-Mu'jam Al-Kabeer. Al-Haythami said in Majma' Az-Zawa'id: 'Narrated by At-Tabarani, and its narrators are those of the Sahih.' [Considered permissible to act upon in virtuous deeds].", transliteration: "" },
  },
  {
    id: 37,
    text: {
        ar: "اللَّهُمَّ اجْعَلْنِي مِنْ أَوْفَـِر عِبَادِكَ حظًّا فِي كُلِّ خَيْرٍ ‌تَقْسِمُهُ ‌اللَّيْلَةَ، ونُوْرٍ يَهْدِي، وَرَحْمَةٍ تَنْشُرُهَا، ورِزْقٍ تَبْسُطُهُ، وبَلَاءٍ تَرْفَعُهُ، وَفِتْنَةٍ تَصْرِفُهَا",
        en: "O Allah, make me among Your servants who have the most abundant share of every good that You distribute this night, of a light that guides, a mercy that You spread, a provision that You extend, a trial that You lift, and a tribulation that You avert.",
        transliteration: "Allahumma-j'alnee min awfari 'ibadika hadhdhan fee kulli khayrin taqsimuhul-laylah, wa noorin yahdee, wa rahmatin tanshuruha, wa rizqin tabsutuh, wa balaa'in tarfa'uh, wa fitnatin tasrifuha."
    },
    repetitions: 1,
    info: { ar: "عَنْ أَبِي هُرَيْرَةَ، رواه البخاري في الأدب المفرد، وأبو داود [حسن].", en: "From Abu Hurairah, narrated by Al-Bukhari in Al-Adab Al-Mufrad, and Abu Dawud [Hasan].", transliteration: "" },
  },
  {
    id: 38,
    text: {
        ar: "أَمْسَيْنَا ‌عَلَى ‌فِطْرَةِ ‌الْإِسْلَامِ، وَكَلِمَةِ الْإِخْلَاصِ، وَعَلَى دِينِ نَبِيِّنَا مُحَمَّدٍ ﷺ، وَعَلَى مِلَّةِ أَبِينَا إِبْرَاهِيمَ حَنِيفًا مُسْلِمًا، وَمَا كَانَ مِنَ الْمُشْرِكِينَ",
        en: "We have entered the evening upon the natural disposition of Islam, the word of sincere devotion, the religion of our Prophet Muhammad ﷺ, and the faith of our father Ibrahim, inclining toward truth, a Muslim, and he was not of those who associate others with Allah.",
        transliteration: "Amsayna 'ala fitratil-islam, wa 'ala kalimatil-ikhlas, wa 'ala deeni nabiyyina Muhammadin ﷺ, wa 'ala millati abeena Ibraheema Haneefan Muslima, wama kana minal-mushrikeen."
    },
    repetitions: 1,
    info: { ar: "عَنْ أَبِي هُرَيْرَةَ، رواه البخاري في الأدب المفرد، والبزار [حسن].", en: "From Abu Hurairah, narrated by Al-Bukhari in Al-Adab Al-Mufrad, and Al-Bazzar [Hasan].", transliteration: "" },
  },
  {
    id: 39,
    text: {
        ar: "اللَّهُمَّ أَمْسَيْتُ مِنْكَ فِي نِعْمَةٍ وَعَافِيَةٍ وَسِتْرٍ؛ فَأَتِمَّ عَلَيَّ نِعْمَتَكَ وَعَافِيَتَكَ وَسِتْرَكَ فِي الدُّنْيَا وَالْآخِرَةِ",
        en: "O Allah, I have entered the evening with Your blessings, well-being, and protection. So perfect Your blessings, well-being, and protection for me in this world and the Hereafter.",
        transliteration: "Allahumma amsaytu minka fee ni'matin wa 'afiyatin wa sitr; fa'atimma 'alayya ni'mataka wa 'afiyataka wa sitraka fid-dunya wal-akhirah."
    },
    repetitions: 1,
    info: { ar: "عن عبد الرحمن بن أبزى، رواه أحمد، وابن السني في عمل اليوم والليلة [صحيح].", en: "From 'Abd al-Rahman ibn Abza, narrated by Ahmad, and Ibn As-Sunni in 'Amal Al-Yawm wa Al-Laylah' [Sahih].", transliteration: "" },
  },
  {
    id: 40,
    text: {
        ar: "اللَّهُمَّ مَا أَمْسَى ‌بِي ‌مِنْ ‌نِعْمَةٍ، أَوْ بِأَحَدٍ مِنْ خَلْقِكَ، فَمِنْكَ وَحْدَكَ لَا شَرِيكَ لَكَ، فَلَكَ الْحَمْدُ وَلَكَ الشُّكْرُ",
        en: "O Allah, whatever blessing has come to me or to any of Your creation this evening is from You alone, without partner. So for You is all praise, and to You is all gratitude.",
        transliteration: "Allahumma ma amsa bee min ni'matin, aw bi-ahadin min khalqik, faminka wahdaka la shareeka lak, falakal-hamdu wa lakash-shukr."
    },
    repetitions: 1,
    info: { ar: "عَنِ ابْنِ عَبَّاسٍ، رواه ابن السني في عمل اليوم والليلة [يدخل ضمن المعمول به في فضائل الأعمال].", en: "From Ibn 'Abbas, narrated by Ibn As-Sunni in 'Amal Al-Yawm wa Al-Laylah' [Considered permissible to act upon in virtuous deeds].", transliteration: "" },
  },
  {
    id: 41,
    text: {
        ar: "اللَّهُمَّ أَمْسَيْتُ مِنْكَ فِي نِعْمَةٍ وَعَافِيَةٍ وَسِتْرٍ؛ فَأَتِمَّ عَلَيَّ نِعْمَتَكَ وَعَافِيَتَكَ وَسِتْرَكَ فِي الدُّنْيَا وَالْآخِرَةِ",
        en: "O Allah, I have entered the evening with Your blessings, well-being, and protection. So perfect Your blessings, well-being, and protection for me in this world and the Hereafter.",
        transliteration: "Allahumma amsaytu minka fee ni'matin wa 'afiyatin wa sitr; fa'atimma 'alayya ni'mataka wa 'afiyataka wa sitraka fid-dunya wal-akhirah."
    },
    repetitions: 3,
    info: { ar: "عن عبد الله بن غَنَّام البياضي وفيه: من قال ذلك فقد أدى شكر يومه وليلته، رواه أبو داود، والنسائي في عمل اليوم والليلة [حسن].", en: "From 'Abdullah bin Ghannam Al-Bayadi, in which it is mentioned: 'Whoever says this has fulfilled the gratitude of his day and night.' Narrated by Abu Dawud, and An-Nasa'i in 'Amal Al-Yawm wa Al-Laylah' [Hasan].", transliteration: "" },
  },
  {
    id: 42,
    text: {
        ar: "اللَّهُمَّ مَا أَمْسَى ‌بِي ‌مِنْ ‌نِعْمَةٍ، أَوْ بِأَحَدٍ مِنْ خَلْقِكَ، فَمِنْكَ وَحْدَكَ لَا شَرِيكَ لَكَ، فَلَكَ الْحَمْدُ وَلَكَ الشُّكْرُ",
        en: "O Allah, whatever blessing has come to me or to any of Your creation this evening is from You alone, without partner. So for You is all praise, and to You is all gratitude.",
        transliteration: "Allahumma ma amsa bee min ni'matin, aw bi-ahadin min khalqik, faminka wahdaka la shareeka lak, falakal-hamdu wa lakash-shukr."
    },
    repetitions: 3,
    info: { ar: "عن أنس بن مالك وفيه: من قال ذلك أربعًا، أَعتَقَه الله من النار»، رواه أبو داود [حسن].", en: "From Anas bin Malik, wherein it is mentioned: 'Whoever says that four times, Allah will free him from the Fire.' Narrated by Abu Dawud [Hasan].", transliteration: "" },
  },
  {
    id: 43,
    text: {
        ar: "اللَّهُمَّ إِنِّي أَمْسَيْتُ ‌أُشْهِدُكَ ‌وأُشْهِدُ ‌حَمَلَةَ ‌عَرْشِكَ وَمَلائِكَتَكَ وَجَمِيعَ خَلْقِكَ أنَّكَ أنتَ الله لا إِلهَ إِلَّا أنْتَ، وَحْدَكَ لَا شَرِيكَ لَكَ، وأنَّ مُحَمَّداً ﷺ عَبْدُكَ وَرَسُولُكَ",
        en: "O Allah, I have entered the evening and I call upon You and upon the bearers of Your Throne, Your angels, and all of Your creation to bear witness that surely You are Allah, there is no deity but You, You are alone and have no partner, and that Muhammad ﷺ is Your slave and Your Messenger.",
        transliteration: "Allahumma innee amsaytu ush-hiduka wa ush-hidu hamalata 'arshik, wa mala'ikatak, wa jamee'a khalqik, annaka Antallahu la ilaha illa Ant, wahdaka la shareeka lak, wa anna Muhammadan ﷺ 'abduka wa rasooluk."
    },
    repetitions: 4,
    info: { ar: "عن أبي هريرة، رواه النسائي في السنن الكبرى، وفي عمل اليوم والليلة [حسن].", en: "From Abu Hurairah, narrated by An-Nasa'i in As-Sunan Al-Kubra and in 'Amal Al-Yawm wa Al-Laylah' [Hasan].", transliteration: "" },
  },
  {
    id: 44,
    text: {
        ar: "أَمْسَيْتُ ‌أُثْنِي ‌عَلَيْكَ ‌حَمْدًا، وَأَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللهُ",
        en: "I have entered the evening praising You with gratitude, and I bear witness that there is no deity but Allah.",
        transliteration: "Amsaytu uthnee 'alayka hamda, wa ash-hadu an la ilaha illallah."
    },
    repetitions: 3,
    info: { ar: "عن أبي الدرداء، وفيه أن من قاله سبع مرات كفاه الله ما أهمَّه، رواه أبو داود، موقوفًا، وابن السني مرفوعًا [صحيح].", en: "From Abu Ad-Darda', wherein it is mentioned that whoever says it seven times, Allah will suffice him in what worries him. Narrated by Abu Dawud (mawquf) and Ibn As-Sunni (marfu') [Sahih].", transliteration: "" },
  },
  {
    id: 45,
    text: {
        ar: "حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ",
        en: "Allah is sufficient for me. There is no deity but Him. In Him I have placed my trust, and He is the Lord of the Magnificent Throne.",
        transliteration: "Hasbiyallahu la ilaha illa Huwa, 'alayhi tawakkaltu, wa Huwa Rabbul-'Arshil-'Adheem."
    },
    repetitions: 7,
    info: { ar: "عن زيد بن ثابت، رواه البخاري ومسلم.", en: "From Zayd ibn Thabit, narrated by Al-Bukhari and Muslim.", transliteration: "" },
  },
  {
    id: 46,
    text: {
        ar: "رب أعوذ بك من شر الفتن ما ظهر منها وما بطن",
        en: "My Lord, I seek refuge in You from the evil of tribulations, both apparent and hidden.",
        transliteration: "Rabbi a'oodhu bika min sharril-fitani ma dhahara minha wama batan."
    },
    repetitions: 3,
    info: { ar: "عن أبي هريرة، وفيه أن النبي ﷺ قال للديغ أنه لو قاله في المساء لم يضرَّه، رواه مسلم، والترمذي.", en: "From Abu Hurairah, wherein the Prophet ﷺ told a person who was stung that if he had said it in the evening, it would not have harmed him. Narrated by Muslim and At-Tirmidhi.", transliteration: "" },
  },
  {
    id: 47,
    text: {
        ar: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ",
        en: "I seek refuge in the perfect words of Allah from the evil of that which He has created.",
        transliteration: "A'oodhu bikalimatil-lahit-tammati min sharri ma khalaq."
    },
    repetitions: 3,
    info: { ar: "عن أبي هريرة، وفيه أن النبي ﷺ قال للديغ أنه لو قاله في المساء لم يضرَّه، رواه مسلم، والترمذي.", en: "From Abu Hurairah, wherein the Prophet ﷺ told a person who was stung that if he had said it in the evening, it would not have harmed him. Narrated by Muslim and At-Tirmidhi.", transliteration: "" },
  },
  {
    id: 48,
    text: {
        ar: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ، وَهُوَ السَّمِيعُ الْعَلِيمُ",
        en: "In the name of Allah, with whose name nothing can cause harm on earth or in the heavens, and He is the All-Hearing, the All-Knowing.",
        transliteration: "Bismillahil-ladhee la yadurru ma'asmihi shay'un fil-ardi wala fis-sama', wa Huwas-Samee'ul-'Aleem."
    },
    repetitions: 3,
    info: { ar: "عنْ عُثْمَانَ بْنِ عَفَّانَ وفيه أن من قاله لم َيَضُرَّهُ شَىْءٌ، رواه أبو داود، والترمذي، وابن ماجه [حسن].", en: "From 'Uthman bin 'Affan, wherein it is mentioned that whoever says it, nothing will harm him. Narrated by Abu Dawud, At-Tirmidhi, and Ibn Majah [Hasan].", transliteration: "" },
  },
  {
    id: 49,
    text: {
        ar: "ربِّ أَعُوذُ بِكَ مِنَ الهَمِّ والحزن، وأَعُوذُ بِكَ مِنَ الْعَجْزِ وَالْكَسَلِ، وأَعُوذُ بِكَ مِنَ الجُبْنِ والبُخْلِ، وأَعُوذُ بِكَ مِنْ غَلَبَةِ الدَّينِ وقَهْرِ الرِّجَالِ، وأَعُوذُ بِكَ مِنْ ‌سُوءِ ‌الْكِبَرِ والهَرَمِ، وأَعُوذُ بِكَ مِنَ الـمَأْثَمِ والـمَغْرَمِ، وأَعُوذُ بِكَ مِنَ الشِّرْكِ وَالنِّفَاقِ، والسُّمْعَةِ وَالرِّيَاءِ، وأَعُوذُ بِكَ مِنَ القَسْوَةِ والغَفْلَةِ، والذِّلَّةِ والـمَسْكَنَةِ، وأَعُوذُ بِكَ مِنَ الصَّمَمِ والْبَكَمِ، والْجُنُونِ وَالْبَرَصِ، وَالْجُذَامِ وسَيِّئِ الأَسْقَامِ",
        en: "O Allah, I seek refuge in You from worry and grief, and I seek refuge in You from helplessness and laziness, and I seek refuge in You from cowardice and miserliness, and I seek refuge in You from being overwhelmed by debt and the oppression of men. And I seek refuge in You from the bad state of old age and senility, and I seek refuge in You from sin and financial burden, and I seek refuge in You from shirk (associating partners with Allah) and hypocrisy, and from (seeking) reputation and show (riyaa'). And I seek refuge in You from hardness of heart and negligence, and from humiliation and poverty. And I seek refuge in You from deafness and dumbness, and from madness and leprosy, and from leucoderma (vitiligo) and from evil diseases.",
        transliteration: "bika minal-hammi wal-ḥuzn, wa a'ūdhu bika minal-'ajzi wal-kasal, wa a'ūdhu bika minal-jubni wal-bukhl, wa a'ūdhu bika min ghalabatid-dayni wa qahrir-rijāl, wa a'ūdhu bika min sū'il-kibari wal-haram, Wa a'ūdhu bika minal-ma'thami wal-maghram, wa a'ūdhu bika minash-shirki wan-nifāq, was-sum'ati war-riyā', wa a'ūdhu bika minal-qaswati wal-ghaflah, wadh-dhillati wal-maskanah, Wa a'ūdhu bika minaṣ-ṣamam wal-bakam, wal-junūn wal-barṣ, wal-judhāmi wa sayyi'il-asqām."
    },
    repetitions: 1,
    info: { ar: "عَنْ أَنَسٍ، رواه البخاري.", en: "From Anas, narrated by Al-Bukhari.", transliteration: "" },
  },
  {
    id: 50,
    text: {
        ar: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ زَوَالِ نِعْمَتِكَ، وَتَحَوُّلِ عَافِيَتِكَ، وَفُجَاءَةِ نِقْمَتِكَ، وَجَمِيعِ سَخَطِكَ",
        en: "O Allah, I seek refuge in You from the decline of Your blessing, the removal of Your protection, the suddenness of Your vengeance, and from all of Your wrath.",
        transliteration: "Allahumma inni a'oodhu bika min zawali ni'matik, wa tahawwuli 'afiyatik, wa fuja'ati niqmatik, wa jamee'i sakhatik."
    },
    repetitions: 3,
    info: { ar: "عَنْ عَبْدِ اللَّهِ بْنِ عُمَرَ، رواه مسلم.", en: "From 'Abdullah ibn 'Umar, narrated by Muslim.", transliteration: "" },
  },
  {
    id: 51,
    text: {
        ar: "اللَّهُمَّ إِنِّى أَعُوذُ بِكَ مِنْ جَهْدِ الْبَلَاءِ، وَدَرَكِ الشَّقَاءِ، وَسُوءِ الْقَضَاءِ، وَشَمَاتَةِ الْأَعْدَاءِ",
        en: "O Allah, I seek refuge in You from the severity of calamity, from being overtaken by destruction, from the evil of what is decreed, and from the gloating of enemies.",
        transliteration: "Allahumma inni a'oodhu bika min jahdil-bala', wa darakish-shaqa', wa soo'il-qada', wa shamatatil-a'da'."
    },
    repetitions: 3,
    info: { ar: "عن أَبي هريرة، رواه البخاري، ومسلم.", en: "From Abu Hurairah, narrated by Al-Bukhari and Muslim.", transliteration: "" },
  },
  {
    id: 52,
    text: {
        ar: "أَعُوذُ بِكَلِمَاتِ اللهِ التَّامَّاتِ الَّتِي لَا ‌يُجَاوِزُهُنَّ ‌بَرٌّ ‌وَلَا ‌فَاجِرٌ مِنْ شَرِّ مَا ‌خَلَقَ، ‌وَذَرَأَ ‌وَبَرَأَ، ومِنْ شَرِّ مَا يَنْزِلُ مِنَ السَّمَاءِ وَمِنْ شَرِّ مَا يَعْرُجُ فِيهَا، ‌وَمِنْ ‌شَرِّ ‌مَا ‌ذَرَأَ ‌فِي ‌الْأَرْضِ، وَمِنْ شَرِّ مَا يَخْرُجُ مِنْهَا، ‌وَمِنْ ‌شَرِّ ‌فِتَنِ ‌اللَّيْلِ ‌وَالنَّهَارِ، ‌وَمِنْ ‌شَرِّ ‌كُلِّ ‌طَارِقٍ ‌إِلَّا ‌طَارِقًا ‌يَطْرُقُ ‌بِخَيْرٍ ‌يَا ‌رَحْمَنُ",
        en: "I seek refuge in the perfect words of Allah, which neither the righteous nor the wicked can overcome, from the evil of what He has created, brought into existence, and made. And from the evil of what descends from the sky and the evil of what ascends therein. And from the evil of what is created in the earth and the evil of what emerges from it. And from the evil of the tribulations of the night and day, and from the evil of every visitor except one who comes with good, O Most Merciful.",
        transliteration: "A'oodhu bikalimatil-lahit-tamma-tillatee la yujawizuhunna barrun wala fajir, min sharri ma khalaqa, wa dhara'a wa bara'a, wa min sharri ma yanzilu minas-sama'i wa min sharri ma ya'ruju feeha, wa min sharri ma dhara'a fil-ard, wa min sharri ma yakhruju minha, wa min sharri fitanil-layli wan-nahar, wa min sharri kulli tariqin illa tariqan yatruqu bikhayrin ya Rahman."
    },
    repetitions: 1,
    info: { ar: "عن عبد الرحمن بن خَنْبَش، رواه أحمد [صحيح].", en: "From 'Abd al-Rahman ibn Khanbash, narrated by Ahmad [Sahih].", transliteration: "" },
  },
  {
    id: 53,
    text: {
        ar: "أَعُوذُ بِوَجْهِ اللهِ الْعَظِيمِ، ‌الَّذِي ‌لَيْسَ ‌شَيْءٌ ‌أَعْظَمَ ‌مِنْهُ، وَبِكَلِمَاتِ اللهِ التَّامَّاتِ الَّتِي لَا يُجَاوِزُهُنَّ بَرٌّ وَلَا فَاجِرٌ، وَبِأَسْمَاءِ اللهِ الْحُسْنَى كُلِّهَا، مَا عَلِمْتُ مِنْهَا وَمَا لَمْ أَعْلَمْ، مِنْ شَرِّ مَا خَلَقَ وَذَرَأَ وَبَرَأَ",
        en: "I seek refuge in the magnificent Face of Allah, than which there is nothing greater, and in the perfect words of Allah, which neither the righteous nor the wicked can overcome, and in all of Allah's most beautiful names, those of which I know and those of which I do not know, from the evil of what He created, brought into existence, and made.",
        transliteration: "A'oodhu biwajhil-lahil-'adheem, alladhee laysa shay'un a'dhamu minhu, wa bikalimatil-lahit-tamma-tillatee la yujawizuhunna barrun wala fajir, wa bi-asma'il-lahil-husna kulliha, ma 'alimtu minha wama lam a'lam, min sharri ma khalaqa wa dhara'a wa bara'a."
    },
    repetitions: 1,
    info: { ar: "عَنْ كَعْبَ الأَحْبَارِ أنه قَالَ: لَوْلا كَلِمَاتٌ أَقُولُهُنَّ لَجَعَلَتْنِي يَهُودُ حِمَارًا...، رواه مالك في الموطأ [صحيح موقوف].", en: "From Ka'b al-Ahbar, who said: 'Were it not for some words that I say, the Jews would have made me into a donkey...' Narrated by Malik in Al-Muwatta [Sahih Mawquf].", transliteration: "" },
  },
  {
    id: 54,
    text: {
        ar: "اللَّهُمَّ عَافِنِي فِي بَدَنِي، ‌اللهُمَّ ‌عَافِنِي ‌فِي ‌سَمْعِي، اللهُمَّ عَافِنِي فِي بَصَرِي، لَا إِلَهَ إِلَّا أَنْتَ",
        en: "O Allah, grant me well-being in my body. O Allah, grant me well-being in my hearing. O Allah, grant me well-being in my sight. There is no deity but You.",
        transliteration: "Allahumma 'afinee fee badanee, Allahumma 'afinee fee sam'ee, Allahumma 'afinee fee basaree, la ilaha illa Anta."
    },
    repetitions: 3,
    info: { ar: "عن عبد الرحمن بن أبي بكرة عن أبيه، رواه أحمد وأبو داود [حسن].", en: "From 'Abd al-Rahman ibn Abi Bakra from his father, narrated by Ahmad and Abu Dawud [Hasan].", transliteration: "" },
  },
  {
    id: 55,
    text: {
        ar: "اللَّهُمَّ ‌إِنِّي ‌أَعُوذُ ‌بِكَ ‌مِنَ ‌الْكُفْرِ ‌وَالْفَقْرِ، ‌اللَّهُمَّ ‌إِنِّي ‌أَعُوذُ ‌بِكَ ‌مِنْ ‌عَذَابِ ‌الْقَبْرِ، لَا إِلَهَ إِلَّا أَنْتَ",
        en: "O Allah, I seek refuge in You from disbelief and poverty. O Allah, I seek refuge in You from the punishment of the grave. There is no deity but You.",
        transliteration: "Allahumma inni a'oodhu bika minal-kufri wal-faqr, Allahumma inni a'oodhu bika min 'adhabil-qabr, la ilaha illa Anta."
    },
    repetitions: 3,
    info: { ar: "عن أبي بكرة، رواه أحمد وأبو داود [حسن].", en: "From Abu Bakrah, narrated by Ahmad and Abu Dawud [Hasan].", transliteration: "" },
  },
  {
    id: 56,
    text: {
        ar: "رَبِّ ‌أَعُوذُ ‌بِكَ أَنْ أُشْرِكَ بِكَ شَيْئًا أَعْلَمُهُ، وَأَسْتَغْفِرُكَ لـِمَا لَا أَعْلَمُهُ",
        en: "My Lord, I seek refuge in You from knowingly associating anything with You, and I seek Your forgiveness for what I do not know.",
        transliteration: "Rabbi a'oodhu bika an ushrika bika shay'an a'lamuh, wa astaghfiruka lima la a'lamuh."
    },
    repetitions: 3,
    info: { ar: "عن أبي موسى الأشعري، رواه أحمد والطبراني [حسن].", en: "From Abu Musa Al-Ash'ari, narrated by Ahmad and At-Tabarani [Hasan].", transliteration: "" },
  },
  {
    id: 57,
    text: {
        ar: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ، اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي دِينِي وَدُنْيَايَ وَأَهْلِي وَمَالِي، اللَّهُمَّ اسْتُرْ عَوْرَاتِي وَآمِنْ رَوْعَاتِي، اللَّهُمَّ احْفَظْنِي مِنْ بَيْنِ يَدَيَّ وَمِنْ خَلْفِي، وَعَنْ يَمِينِي وَعَنْ شِمَالِي وَمِنْ فَوْقِي، وَأَعُوذُ بِعَظَمَتِكَ أَنْ أُغْتَالَ مِنْ تَحْتِي",
        en: "O Allah, I ask You for well-being in this world and the Hereafter. O Allah, I ask You for pardon and well-being in my religion, my worldly affairs, my family and my wealth. O Allah, conceal my faults and preserve me from fear. O Allah, protect me from before me and from behind me, from my right and from my left, and from above me, and I seek refuge in Your greatness from being destroyed from beneath me.",
        transliteration: "Allahumma inni as'alukal-'afiyata fid-dunya wal-akhirah. Allahumma inni as'alukal-'afwa wal-'afiyata fee deenee wa dunyaya wa ahlee wa malee. Allahumma-stur 'awratee wa aamin raw'atee. Allahumma-hfazni min bayni yadayya wa min khalfee, wa 'an yameenee wa 'an shimalee wa min fawqee, wa a'oodhu bi'adhamatika an ughtala min tahtee."
    },
    repetitions: 1,
    info: { ar: "عن ابن عمر، رواه أبو داود وابن ماجه [صحيح].", en: "From Ibn 'Umar, narrated by Abu Dawud and Ibn Majah [Sahih].", transliteration: "" },
  },
  {
    id: 58,
    text: {
        ar: "اللهُمَّ ‌أَنْتَ ‌رَبِّي ‌لَا ‌إِلَهَ ‌إِلَّا ‌أَنْتَ، ‌خَلَقْتَنِي، ‌وَأَنَا ‌عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ ‌بِنِعْمَتِكَ ‌عَلَيَّ، ‌وَأَبُوءُ ‌بِذَنْبِي، ‌فَاغْفِرْ ‌لِي، ‌فَإِنَّهُ ‌لَا ‌يَغْفِرُ ‌الذُّنُوبَ ‌إِلا ‌أَنْتَ",
        en: "O Allah, You are my Lord, there is no deity but You. You created me and I am Your slave. I am upon Your covenant and Your promise as much as I am able. I seek refuge in You from the evil of what I have done. I acknowledge Your favor upon me, and I acknowledge my sin, so forgive me, for verily no one forgives sins except You.",
        transliteration: "Allahumma Anta Rabbee la ilaha illa Ant, khalaqtanee, wa ana 'abduk, wa ana 'ala 'ahdika wa wa'dika mastata't. A'oodhu bika min sharri ma sana't, aboo'u laka bini'matika 'alayya, wa aboo'u bidhanbee, faghfir lee, fa'innahu la yaghfirudh-dhunooba illa Ant."
    },
    repetitions: 3,
    info: { ar: "عن شداد بن أوس وفيه أَنَّ من قاله موقنًا فمات فهوَ مِن أهلِ الجنة، رواه البخاري. (سيد الاستغفار)", en: "From Shaddad bin Aws, wherein it says that whoever says it with certainty and dies on that day, he will be from the people of Paradise. Narrated by Al-Bukhari. (The Master of Supplications for Forgiveness).", transliteration: "" },
  },
  {
    id: 59,
    text: {
        ar: "أَسْتَغْفِرُ ‌اللَّهَ ‌الْعَظِيمَ ‌الَّذِي ‌لَا ‌إِلَهَ ‌إِلَّا ‌هُوَ ‌الْحَيَّ ‌الْقَيُّومَ، ‌وَأَتُوبُ ‌إِلَيْهِ",
        en: "I seek the forgiveness of Allah the Magnificent, Whom there is none worthy of worship but Him, the Ever-Living, the Sustainer of all, and I repent to Him.",
        transliteration: "Astaghfirullahal-'Adheemal-ladhee la ilaha illa Huwal-Hayyul-Qayyum, wa atoobu ilayh."
    },
    repetitions: 3,
    info: { ar: "عن زيد مولى النبي ﷺ، وفيه أَنَّ من قاله غُفِرت ذنوبه، وإن كان فارًّا من الزَّحْف، رواه الترمذي وأبو داود [صحيح].", en: "From Zayd, the freed slave of the Prophet ﷺ, wherein it says that for whoever says it, his sins will be forgiven even if he has fled from the battlefield. Narrated by At-Tirmidhi and Abu Dawud [Sahih].", transliteration: "" },
  },
  {
    id: 60,
    text: {
        ar: "اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنَ الْخَيْرِ كُلِّهِ عَاجِلِهِ وَآجِلِهِ مَا عَلِمْتُ مِنْهُ وَمَا لَمْ أَعْلَمْ، وَأَعُوذُ بِكَ مِنَ الشَّرِّ كُلِّهِ، عَاجِلِهِ وَآجِلِهِ مَا عَلِمْتُ مِنْهُ، وَمَا لَمْ أَعْلَمْ.\nاللَّهُمَّ إِنِّي أَسْأَلُكَ الْجَنَّةَ وَمَا قَرَّبَ إِلَيْهَا مِنْ قَوْلٍ أَوْ عَمَلٍ، وَأَعُوذُ بِكَ مِنَ النَّارِ وَمَا قَرَّبَ إِلَيْهَا مِنْ قَوْلٍ أَوْ عَمَلٍ.\nاللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ خَيْرِ مَا ‌سَأَلَكَ ‌عَبْدُكَ وَنَبِيُّكَ ‌مُحَمَّدٌ ﷺ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا استعاذك مِنْهُ عَبْدُكَ وَنَبِيُّكَ ‌مُحَمَّدٌ ﷺ، ومَا قَضَيْتَ لِي مِنْ قَضَاءٍ فَاجْعَلْ عَاقِبَتَهُ لِي رَشَدًا",
        en: "O Allah, I ask You for all good, both sooner and later, what I know of it and what I do not know. And I seek refuge in You from all evil, both sooner and later, what I know of it and what I do not know.\nO Allah, I ask You for Paradise and for that which brings one closer to it, in word or deed. And I seek refuge in You from the Fire and from that which brings one closer to it, in word or deed.\nO Allah, I ask You for the best of what Your slave and Prophet Muhammad ﷺ asked You for, and I seek refuge in You from the evil of what Your slave and Prophet Muhammad ﷺ sought refuge from. And whatever You have decreed for me, make its outcome good for me.",
        transliteration: "Allahumma inni as'aluka minal-khayri kullihi, 'ajilihi wa ajilih, ma 'alimtu minhu wama lam a'lam. Wa a'oodhu bika minash-sharri kullihi, 'ajilihi wa ajilih, ma 'alimtu minhu wama lam a'lam.\nAllahumma inni as'alukal-jannata wama qarraba ilayha min qawlin aw 'amal, wa a'oodhu bika minan-nari wama qarraba ilayha min qawlin aw 'amal.\nAllahumma inni as'aluka min khayri ma sa'alaka 'abduka wa nabiyyuk Muhammadun ﷺ, wa a'oodhu bika min sharri masta'adhaka minhu 'abduka wa nabiyyuk Muhammadun ﷺ, wama qadayta lee min qadaa'in faj'al 'aqibatahu lee rashada."
    },
    repetitions: 1,
    info: { ar: "عَنْ عَائِشَةَ، رواه ابن ماجه وأحمد [صحيح].", en: "From 'Aisha, narrated by Ibn Majah and Ahmad [Sahih].", transliteration: "" },
  },
  {
    id: 61,
    text: {
        ar: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
        en: "Our Lord, give us in this world [that which is] good and in the Hereafter [that which is] good and protect us from the punishment of the Fire.",
        transliteration: "Rabbana atina fid-dunya hasanatan wa fil-akhirati hasanatan waqina 'adhaban-nar."
    },
    repetitions: 3,
    info: { ar: "عن أنس بن مالك، رواه البخاري، ومسلم.", en: "From Anas bin Malik, narrated by Al-Bukhari and Muslim.", transliteration: "" },
  },
  {
    id: 62,
    text: {
        ar: "سُبْحَانَكَ ‌اللَّهُمَّ ‌وَبِحَمْدِكَ...أَشْهَدُ أَلَّا إِلَهَ إِلَّا أَنْتَ... أَسْتَغْفِرُكَ وَأَتُوبُ إلَيْكَ...\nوصَلَى اللهُ وسَلَّمَ عَلَى سَيِّدِنا مُحمَّدٍ وعَلَى آلِهِ وصَحْبِهِ أَجْمَعِينَ\n والحُمْدُ للهِ رَبِّ العَالَمِينَ.\n [نِهَايَةُ أَذْكَارِ الـمَسَاءِ، قَبْلَ غُرُوبِ الشِّمْسِ، الـمُفَصَّلَة]",
        en: "How perfect You are, O Allah, and I praise You... I bear witness that there is no deity but You... I seek Your forgiveness and repent to You...\nMay Allah's peace and blessings be upon our Master Muhammad, his family, and all his companions.\nAnd praise be to Allah, Lord of the worlds.\n[End of the detailed evening remembrances, before sunset]",
        transliteration: "Subhanakallahumma wa bihamdik... Ash-hadu an la ilaha illa Ant... Astaghfiruka wa atoobu ilayk...\nWa sallallahu wa sallama 'ala sayyidina Muhammadin wa 'ala aalihi wa sahbihi ajma'een.\nWal-hamdu lillahi Rabbil-'alameen.\n[Nihayatu Adhkar-il-Masa', qabla ghuroob-ish-shams, al-mufassalah]"
    },
    repetitions: 1,
    info: {ar: "كفارة المجلس.", en: "Expiation of the gathering.", transliteration: ""},
  }
];

export const masaAdhkarConcise_i18n: AdhkarItem[] = [
  {
    id: 1,
    text: {
        ar: "بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ\nٱللَّهُ لَا إِلَـٰهَ إِلَّا هُوَ ٱلْحَيُّ ٱلْقَيُّومُ لَا تَأْخُذُهُۥ سِنَةٌ وَلَا نَوْمٌ لَّهُۥ مَا فِي ٱلسَّمَٰوَٰتِ وَمَا فِي ٱلْأَرْضِ مَن ذَا ٱلَّذِي يَشْفَعُ عِندَهُۥ إِلَّا بِإِذْنِهِۦ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَيۡءٍ مِّنۡ عِلۡمِهِۦٓ إِلَّا بِمَا شَآءَ وَسِعَ كُرۡسِيُّهُ ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضَ وَلَا يَـُۧودُهُۥ حِفۡظُهُمَا وَهُوَ ٱلۡعَلِيُّ ٱلۡعَظِيمُ.\n- آية الكرسى (البقرة: 255)",
        en: "I seek refuge in Allah from Satan, the expelled.\nAllah - there is no deity except Him, the Ever-Living, the Sustainer of all existence. Neither drowsiness overtakes Him nor sleep. To Him belongs whatever is in the heavens and whatever is on the earth. Who is it that can intercede with Him except by His permission? He knows what is [presently] before them and what will be after them, and they encompass not a thing of His knowledge except for what He wills. His Kursi (Throne) extends over the heavens and the earth, and their preservation tires Him not. And He is the Most High, the Most Great.\n- Ayah Al-Kursi (Al-Baqarah: 255)",
        transliteration: "بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ\nAllahu la ilaha illa Huwal-Hayyul-Qayyum, la ta'khudhuhu sinatun wala nawm, lahu ma fis-samawati wama fil-ard, man dhal-ladhi yashfa'u 'indahu illa bi-idhnih, ya'lamu ma bayna aydeehim wama khalfahum, wala yuheetoona bishay'im-min 'ilmihi illa bima sha', wasi'a kursiyyuhus-samawati wal-ard, wala ya'ooduhu hifdhuhuma, wa Huwal-'Aliyyul-'Adheem."
    },
    repetitions: 1,
    info: { ar: "أحاديث فضل آية الكرسي كثيرة، منها حديث أبي هريرة عند البخاري: «إِذَا أَوَيْتَ إِلَى فِرَاشِكَ، فَاقْرَأْ آيَةَ الْكُرْسِيِّ.. فَإِنَّكَ لَنْ ‌يَزَالَ ‌عَلَيْكَ ‌مِنَ ‌اللَّهِ ‌حَافِظٌ، وَلَا يَقْرَبَنَّكَ شَيْطَانٌ حَتَّى تُصْبِحَ»، والنص على أنها تُقرأ في الصباح والمساء رواه الطبراني عن أُبَيِّ بن كَعْبٍ [صحيح].", en: "The hadiths on the virtue of Ayah Al-Kursi are many, among them the hadith of Abu Hurairah in Al-Bukhari: 'When you go to your bed, recite Ayah Al-Kursi... for then a guardian from Allah will be with you, and no devil will come near you until morning.' The text stating it should be read in the morning and evening is narrated by At-Tabarani from Ubayy ibn Ka'b [Sahih].", transliteration: "" },
  },
  {
    id: 2,
    text: {
        ar: "بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ\nقُلْ هُوَ اللَّهُ أَحَدٌ اللَّهُ الصَّمَدُ لَمْ يَلِدْ وَلَمْ يُولَدْ وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ.",
        en: "بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ\nSay, 'He is Allah, the One. Allah, the Eternal Refuge. He neither begets nor is born, Nor is there to Him any equivalent.'",
        transliteration: "بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ\nQul huwa Allahu ahad. Allahus-samad. Lam yalid wa lam yoolad. Wa lam yakun lahu kufuwan ahad."
    },
    repetitions: 3,
    info: { ar: "عن عبد الله بن خبيب أن ﷺ قال له: «قل هو الله أحد، والمعوِّذتين حين تمسي وحين تصبح ثلاث مرَّات تكفيك من كل شيء»، أبو داود، الترمذي [حسن].", en: "From Abdullah bin Khubaib that the Prophet ﷺ said to him: 'Recite 'Say, He is Allah, the One' and the two chapters of refuge (Al-Falaq, An-Nas) when you enter the evening and when you enter the morning three times, they will suffice you against everything.' Abu Dawud, At-Tirmidhi [Hasan].", transliteration: "" },
  },
  {
    id: 3,
    text: {
        ar: "بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ\nقُلْ أَعُوذُ بِرَبِّ الْفَلَقِ مِنْ شَرِّ مَا خَلَقَ وَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ وَمِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ.",
        en: "بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ\nSay, 'I seek refuge in the Lord of daybreak, from the evil of that which He created, and from the evil of darkness when it settles, and from the evil of the blowers in knots, and from the evil of an envier when he envies.'",
        transliteration: "بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ\nQul a'oodhu birabbil-falaq. Min sharri ma khalaq. Wa min sharri ghasiqin idha waqab. Wa min sharrin-naffathati fil-'uqad. Wa min sharri hasidin idha hasad."
    },
    repetitions: 3,
    info: { ar: "عن عبد الله بن خبيب أن ﷺ قال له: «قل هو الله أحد، والمعوِّذتين حين تمسي وحين تصبح ثلاث مرَّات تكفيك من كل شيء»، أبو داود، الترمذي [حسن].", en: "From Abdullah bin Khubaib that the Prophet ﷺ said to him: 'Recite 'Say, He is Allah, the One' and the two chapters of refuge (Al-Falaq, An-Nas) when you enter the evening and when you enter the morning three times, they will suffice you against everything.' Abu Dawud, At-Tirmidhi [Hasan].", transliteration: "" },
  },
  {
    id: 4,
    text: {
        ar: "بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ\nقُلْ أَعُوذُ بِرَبِّ النَّاسِ مَلِكِ النَّاسِ إِلَهِ النَّاسِ مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ مِنَ الْجِنَّةِ وَالنَّاسِ.",
        en: "بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ\nSay, 'I seek refuge in the Lord of mankind, the Sovereign of mankind, the God of mankind, from the evil of the retreating whisperer, who whispers into the breasts of mankind, from among the jinn and mankind.'",
        transliteration: "بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ\nQul a'oodhu birabbin-nas. Malikin-nas. Ilahin-nas. Min sharril-waswasil-khannas. Alladhee yuwaswisu fee sudoorin-nas. Minal-jinnati wan-nas."
    },
    repetitions: 3,
    info: { ar: "عن عبد الله بن خبيب أن ﷺ قال له: «قل هو الله أحد، والمعوِّذتين حين تمسي وحين تصبح ثلاث مرَّات تكفيك من كل شيء»، أبو داود، الترمذي [حسن].", en: "From Abdullah bin Khubaib that the Prophet ﷺ said to him: 'Recite 'Say, He is Allah, the One' and the two chapters of refuge (Al-Falaq, An-Nas) when you enter the evening and when you enter the morning three times, they will suffice you against everything.' Abu Dawud, At-Tirmidhi [Hasan].", transliteration: "" },
  },
  {
    id: 5,
    text: {
        ar: "رَضِيتُ ‌بِاللهِ رَبًّا، ‌وَبِالْإِسْلَامِ ‌دِينًا، وَبِمُحَمَّدٍ ﷺ نَبِّيًا (وَرَسُولًا)",
        en: "I am pleased with Allah as a Lord, with Islam as a religion, and with Muhammad ﷺ as a Prophet (and Messenger).",
        transliteration: "Radheetu billahi Rabba, wa bil-islami deena, wa bi-Muhammadin ﷺ Nabiyya (wa Rasoola)."
    },
    repetitions: 3,
    info: { ar: "عن أبي سعيد الخدري ، وفيه أن من قاله: «وجبت له الجنة»، رواه أبو داود [حسن].", en: "From Abu Sa'id Al-Khudri, wherein it is mentioned that for whoever says it, 'Paradise becomes obligatory for him'. Narrated by Abu Dawud [Hasan].", transliteration: "" },
  },
  {
    id: 6,
    text: {
        ar: "اللَّهمَّ صَلِّ عَلَى مُحَمَّدٍ وآلِ مُـحَمَّدٍ وبارك وسَلِّمْ تَسْلِيمًا كَثِيرًا (تسع مرات)، ويجعل العاشرة:\n «اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ، وبَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ في العَالَمِينَ إِنَّكَ حَمِيدٌ مَجِيدٌ»، [وَسَلِّمْ تَسْلِيمًا كَثِيرًا] «فِـي كُلِّ لَـحْظَةٍ أَبَدًا عَدَدَ خَلْقِكَ، وَرَضَا نَفْسِكَ، وَزِنَةَ عَرْشِكَ، وَمِدَادَ كَلِمَاتِكَ». ",
        en: "O Allah, bestow prayers upon Muhammad and the family of Muhammad, and bless and grant abundant peace (nine times). And on the tenth time make it: 'O Allah, bestow prayers upon Muhammad and upon the family of Muhammad, as You have bestowed prayers upon Ibrahim and upon the family of Ibrahim. Indeed, You are Praiseworthy, Glorious. And bless Muhammad and the family of Muhammad, as You have blessed Ibrahim and the family of Ibrahim among the worlds. Indeed, You are Praiseworthy, Glorious.' [And grant abundant peace] 'in every moment, forever, by the number of Your creation, the pleasure of Yourself, the weight of Your Throne, and the ink of Your words.'",
        transliteration: "Allahumma salli 'ala Muhammadin wa aali Muhammadin wa barik wa sallim tasleeman katheera. (10th time:) 'Allahumma salli 'ala Muhammadin wa 'ala aali Muhammadin kama sallayta 'ala Ibraheema wa 'ala aali Ibraheema innaka Hameedun Majeed, wa barik 'ala Muhammadin wa 'ala aali Muhammadin kama barakta 'ala Ibraheema wa 'ala aali Ibraheema fil-'alameena innaka Hameedun Majeed', [wa sallim tasleeman katheera] 'fi kulli lahdatin abadan 'adada khalqika, wa rida nafsika, wa zinata 'arshika, wa midada kalimatik.'"
    },
    repetitions: 10,
    info: { ar: "عن كعب بن عُجْرَة ، رواه البخاري", en: "From Ka'b bin 'Ujrah, narrated by Al-Bukhari.", transliteration: "" },
  },
  {
    id: 7,
    text: {
        ar: "يَا ‌حَيُّ ‌يَا ‌قَيُّومُ ‌يَا ‌ذَا ‌الْجَلالِ ‌وَالإِكْرَامِ، ‌بِرَحْمَتِكَ ‌أَسْتَغِيثُ، ‌أَصْلِحْ ‌لِي ‌شَأْنِي ‌كُلَّهُ، وَلَا تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ",
        en: "O Ever-Living, O Sustainer, O Lord of Majesty and Honor, by Your mercy I seek assistance, rectify for me all of my affairs and do not leave me to myself, even for the blink of an eye.",
        transliteration: "Ya Hayyu, ya Qayyoom, ya Dhal-Jalali wal-Ikram, birahmatika astagheeth, aslih lee sha'nee kullah, wala takilnee ila nafsee tarfata 'ayn."
    },
    repetitions: 1,
    info: { ar: "هذا دعاء فاطمة علَّمه النَّبي ﷺ إيَّاها، رواه البزار، وزيادة: (يا ذا الجلال والإكرام) وردت عند أحمد وغيره [حسن].", en: "This is the supplication of Fatimah, which the Prophet ﷺ taught her. Narrated by Al-Bazzar. The addition (O Lord of Majesty and Honor) is reported by Ahmad and others [Hasan].", transliteration: "" },
  },
  {
    id: 8,
    text: {
        ar: "رَبِّ أَجِرْنِي مِنَ النَّارِ",
        en: "My Lord, protect me from the Fire.",
        transliteration: "Rabbi ajirnee minan-nar."
    },
    repetitions: 7,
    info: { ar: "عن أنس قال: قال النبي ﷺ: «من سأل الله الجنة ثلاث مرات، قالت الجنة: اللهم أدخله الجنة، ومن استجار من النار ثلاث مرات، قالت النار: اللهم أجره من النار»، رواه الترمذي، والسبع مرات من حديث أبي هريرة ، كما عند أبي يعلى [صحيح].", en: "From Anas, who said the Prophet ﷺ said: 'Whoever asks Allah for Paradise three times, Paradise says: 'O Allah, admit him to Paradise.' And whoever seeks protection from the Fire three times, the Fire says: 'O Allah, protect him from the Fire.'' Narrated by At-Tirmidhi. The seven times repetition is from a hadith of Abu Hurairah, as reported by Abu Ya'la [Sahih].", transliteration: "" },
  },
  {
    id: 9,
    text: {
        ar: "رَبِّ أَسْأَلُكَ الفِرْدَوسَ الأَعْلَى مِنَ الجَنَّةِ مِنْ غَيْرِ سَابِقَةِ حِسَابٍ إِنَّكَ أَنْتَ الوَهَّابُ",
        en: "My Lord, I ask You for the highest level of Paradise, Al-Firdaws, without a preceding reckoning. Verily, You are the Bestower.",
        transliteration: "Rabbi as'alukal-Firdawsal-A'la minal-Jannah min ghayri sabiqati hisab, innaka Antal-Wahhab."
    },
    repetitions: 7,
    info: { ar: "عَنْ أَنَسِ قَالَ: قَالَ ﷺ: «... فَإِذَا سَأَلْتُمُ اللَّهَ فَسَلُوهُ الْفِرْدَوْسَ»، رواه ابن حبان، وأصله في البخاري.", en: "From Anas, who said the Prophet ﷺ said: '...So when you ask Allah, ask for Al-Firdaws.' Narrated by Ibn Hibban, with its origin in Al-Bukhari.", transliteration: "" },
  },
  {
    id: 10,
    text: {
        ar: "اللَّهُمَّ صُبَّ عَليَّ الخَيْرَ صَبًّا، وَلَا تَجْعَلْ عَيْشِي كَدًّا",
        en: "O Allah, pour goodness upon me in abundance, and do not make my life one of hardship.",
        transliteration: "Allahumma subba 'alayyal-khayra sabba, wa la taj'al 'ayshee kadda."
    },
    repetitions: 1,
    info: { ar: "هذا دعاء النبي ﷺ لامرأة جُلَيبيب فيما رواه أبو برزة ، رواه البيهقي في شعب الإيمان[صحيح].", en: "This is the supplication of the Prophet ﷺ for the wife of Julaybib, as narrated by Abu Barzah. Narrated by Al-Bayhaqi in Shu'ab Al-Iman [Sahih].", transliteration: "" },
  },
  {
    id: 11,
    text: {
        ar: "اللَّهُمَّ ‌اكْفِنِي ‌بِحَلَالِكَ ‌عَنْ ‌حَرَامِكَ، وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ",
        en: "O Allah, suffice me with Your lawful provision against Your unlawful provision, and make me independent of all those besides You.",
        transliteration: "Allahummak-finee bihalalika 'an haramik, wa aghninee bifadlika 'amman siwak."
    },
    repetitions: 1,
    info: { ar: "عن علِيٍّ ، رواه أحمد، والترمذي [حسن].", en: "From 'Ali, narrated by Ahmad and At-Tirmidhi [Hasan].", transliteration: "" },
  },
  {
    id: 12,
    text: {
        ar: "اللهُمَّ إِنِّي أَسْأَلُكَ الثَّبَاتَ فِي الْأَمْرِ، ‌وَالْعَزِيمَةَ ‌عَلَى ‌الرُّشْدِ، وَأَسْأَلُكَ شُكْرَ نِعْمَتِكَ، وحُسْنَ عِبَادَتِكَ، وأَسْأَلُكَ مُوجِبَاتِ رَحْمَتِكَ، وَعَزَائِمَ مَغْفِرَتِكَ، وَأَسْأَلُكَ قَلْبًا سَلِيمًا، وَلِسَانًا صَادِقًا، (‌وَخُلُقًا ‌مُسْتَقِيمًا)، وَأَسْأَلُكَ مِنْ خَيْرِ مَا تَعْلَمُ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا تَعْلَمُ، وَأَسْتَغْفِرُكَ لِمَا تَعْلَمُ، إِنَّكَ أَنْتَ عَلَّامُ الْغُيُوبِ",
        en: "O Allah, I ask You for firmness in the affair, and determination in guidance. I ask You for gratitude for Your blessings, and excellence in Your worship. I ask You for the causes of Your mercy, and the resolves of Your forgiveness. I ask You for a sound heart, and a truthful tongue, (and upright character). I ask You for the good of what You know, and I seek refuge in You from the evil of what You know, and I seek Your forgiveness for what You know. Indeed, You are the Knower of the unseen.",
        transliteration: "Allahumma inni as'alukat-thabata fil-amr, wal-'azeemata 'alar-rushd, wa as'aluka shukra ni'matik, wa husna 'ibadatik, wa as'aluka mujibati rahmatik, wa 'aza'ima maghfiratik, wa as'aluka qalban saleema, wa lisanan sadiqa, (wa khuluqan mustaqeema), wa as'aluka min khayri ma ta'lam, wa a'oodhu bika min sharri ma ta'lam, wa astaghfiruka lima ta'lam, innaka Anta 'Allamul-ghuyoob."
    },
    repetitions: 1,
    info: { ar: "عن شداد بن أوس، رواه أحمد، الطبراني في الكبير، وما بين القوسين زيادة من المستدرك [حسن].", en: "From Shaddad bin Aws, narrated by Ahmad, At-Tabarani in Al-Kabeer. The addition in brackets is from Al-Mustadrak [Hasan].", transliteration: "" },
  },
  {
    id: 13,
    text: {
        ar: "أَمْسَيْنَا ‌عَلَى ‌فِطْرَةِ ‌الْإِسْلَامِ، وَكَلِمَةِ الْإِخْلَاصِ، وَعَلَى دِينِ نَبِيِّنَا مُحَمَّدٍ ﷺ، وَعَلَى مِلَّةِ أَبِينَا إِبْرَاهِيمَ حَنِيفًا مُسْلِمًا، وَمَا كَانَ مِنَ الْمُشْرِكِينَ",
        en: "We have entered the evening upon the natural disposition of Islam, the word of sincere devotion, the religion of our Prophet Muhammad ﷺ, and the faith of our father Ibrahim, inclining toward truth, a Muslim, and he was not of those who associate others with Allah.",
        transliteration: "Amsayna 'ala fitratil-islam, wa 'ala kalimatil-ikhlas, wa 'ala deeni nabiyyina Muhammadin ﷺ, wa 'ala millati abeena Ibraheema Haneefan Muslima, wama kana minal-mushrikeen."
    },
    repetitions: 1,
    info: { ar: "عَنِ ابْنِ عَبَّاسٍ، رواه ابن السني في عمل اليوم والليلة [يدخل ضمن المعمول به في فضائل الأعمال].", en: "From Ibn 'Abbas, narrated by Ibn As-Sunni in 'Amal Al-Yawm wa Al-Laylah' [Considered permissible to act upon in virtuous deeds].", transliteration: "" },
  },
  {
    id: 14,
    text: {
        ar: "اللَّهُمَّ ما أَمْسَى ‌بِي ‌مِنْ ‌نِعْمَةٍ، أَوْ بِأَحَدٍ مِنْ خَلْقِكَ، فَمِنْكَ وَحْدَكَ لَا شَرِيكَ لَكَ، فَلَكَ الْحَمْدُ، وَلَكَ الشُّكْرُ",
        en: "O Allah, whatever blessing has come to me or to any of Your creation this evening is from You alone, without partner. So for You is all praise, and to You is all gratitude.",
        transliteration: "Allahumma ma amsa bee min ni'matin, aw bi-ahadin min khalqik, faminka wahdaka la shareeka lak, falakal-hamdu wa lakash-shukr."
    },
    repetitions: 3,
    info: { ar: "عن أنس بن مالك وفيه: من قال ذلك أربعًا، أَعتَقَه الله من النار»، رواه أبو داود [حسن].", en: "From Anas bin Malik, wherein it is mentioned: 'Whoever says that four times, Allah will free him from the Fire.' Narrated by Abu Dawud [Hasan].", transliteration: "" },
  },
  {
    id: 15,
    text: { ar: "اللَّهُمَّ إِنِّي أَمْسَيْتُ ‌أُشْهِدُكَ ‌وأُشْهِدُ ‌حَمَلَةَ ‌عَرْشِكَ وَمَلائِكَتَكَ وَجَمِيعَ خَلْقِكَ أنَّكَ أنتَ الله لا إِلهَ إِلَّا أنْتَ، وَحْدَكَ لَا شَرِيكَ لَكَ، وأنَّ مُحَمَّداً ﷺ عَبْدُكَ وَرَسُولُكَ", en: "O Allah, I have entered the evening and I call upon You and upon the bearers of Your Throne, Your angels, and all of Your creation to bear witness that surely You are Allah, there is no deity but You, You are alone and have no partner, and that Muhammad ﷺ is Your slave and Your Messenger.", transliteration: "Allahumma innee amsaytu ush-hiduka wa ush-hidu hamalata 'arshik, wa mala'ikatak, wa jamee'a khalqik, annaka Antallahu la ilaha illa Ant, wahdaka la shareeka lak, wa anna Muhammadan ﷺ 'abduka wa rasooluk." },
    repetitions: 4,
    info: { ar: "عن أبي هريرة، رواه النسائي في السنن الكبرى، وفي عمل اليوم والليلة [حسن].", en: "From Abu Hurairah, narrated by An-Nasa'i in As-Sunan Al-Kubra and in 'Amal Al-Yawm wa Al-Laylah' [Hasan].", transliteration: "" },
  },
  {
    id: 16,
    text: {
        ar: "حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ",
        en: "Allah is sufficient for me. There is no deity but Him. In Him I have placed my trust, and He is the Lord of the Magnificent Throne.",
        transliteration: "Hasbiyallahu la ilaha illa Huwa, 'alayhi tawakkaltu, wa Huwa Rabbul-'Arshil-'Adheem."
    },
    repetitions: 7,
    info: { ar: "عن زيد بن ثابت، رواه البخاري ومسلم.", en: "From Zayd ibn Thabit, narrated by Al-Bukhari and Muslim.", transliteration: "" },
  },
  {
    id: 17,
    text: {
        ar: "رب أعوذ بك من شر الفتن ما ظهر منها وما بطن",
        en: "My Lord, I seek refuge in You from the evil of tribulations, both apparent and hidden.",
        transliteration: "Rabbi a'oodhu bika min sharril-fitani ma dhahara minha wama batan."
    },
    repetitions: 3,
    info: { ar: "عن أبي هريرة، وفيه أن النبي ﷺ قال للديغ أنه لو قاله في المساء لم يضرَّه، رواه مسلم، والترمذي.", en: "From Abu Hurairah, wherein the Prophet ﷺ told a person who was stung that if he had said it in the evening, it would not have harmed him. Narrated by Muslim and At-Tirmidhi.", transliteration: "" },
  },
  {
    id: 18,
    text: {
        ar: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ",
        en: "I seek refuge in the perfect words of Allah from the evil of that which He has created.",
        transliteration: "A'oodhu bikalimatil-lahit-tammati min sharri ma khalaq."
    },
    repetitions: 3,
    info: { ar: "عن أبي هريرة، وفيه أن النبي ﷺ قال للديغ أنه لو قاله في المساء لم يضرَّه، رواه مسلم، والترمذي.", en: "From Abu Hurairah, wherein the Prophet ﷺ told a person who was stung that if he had said it in the evening, it would not have harmed him. Narrated by Muslim and At-Tirmidhi.", transliteration: "" },
  },
  {
    id: 19,
    text: {
        ar: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ، وَهُوَ السَّمِيعُ الْعَلِيمُ",
        en: "In the name of Allah, with whose name nothing can cause harm on earth or in the heavens, and He is the All-Hearing, the All-Knowing.",
        transliteration: "Bismillahil-ladhee la yadurru ma'asmihi shay'un fil-ardi wala fis-sama', wa Huwas-Samee'ul-'Aleem."
    },
    repetitions: 3,
    info: { ar: "عنْ عُثْمَانَ بْنِ عَفَّانَ وفيه أن من قاله لم َيَضُرَّهُ شَىْءٌ، رواه أبو داود، والترمذي، وابن ماجه [حسن].", en: "From 'Uthman bin 'Affan, wherein it is mentioned that whoever says it, nothing will harm him. Narrated by Abu Dawud, At-Tirmidhi, and Ibn Majah [Hasan].", transliteration: "" },
  },
  {
    id: 20,
    text: {
        ar: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ زَوَالِ نِعْمَتِكَ، وَتَحَوُّلِ عَافِيَتِكَ، وَفُجَاءَةِ نِقْمَتِكَ، وَجَمِيعِ سَخَطِكَ",
        en: "O Allah, I seek refuge in You from the decline of Your blessing, the removal of Your protection, the suddenness of Your vengeance, and from all of Your wrath.",
        transliteration: "Allahumma inni a'oodhu bika min zawali ni'matik, wa tahawwuli 'afiyatik, wa fuja'ati niqmatik, wa jamee'i sakhatik."
    },
    repetitions: 3,
    info: { ar: "عَنْ عَبْدِ اللَّهِ بْنِ عُمَرَ، رواه مسلم.", en: "From 'Abdullah ibn 'Umar, narrated by Muslim.", transliteration: "" },
  },
  {
    id: 21,
    text: {
        ar: "أَعُوذُ بِكَلِمَاتِ اللهِ التَّامَّاتِ الَّتِي لَا ‌يُجَاوِزُهُنَّ ‌بَرٌّ ‌وَلَا ‌فَاجِرٌ مِنْ شَرِّ مَا ‌خَلَقَ، ‌وَذَرَأَ ‌وَبَرَأَ، ومِنْ شَرِّ مَا يَنْزِلُ مِنَ السَّمَاءِ وَمِنْ شَرِّ مَا يَعْرُجُ فِيهَا، ‌وَمِنْ ‌شَرِّ ‌مَا ‌ذَرَأَ ‌فِي ‌الْأَرْضِ، وَمِنْ شَرِّ مَا يَخْرُجُ مِنْهَا، ‌وَمِنْ ‌شَرِّ ‌فِتَنِ ‌اللَّيْلِ ‌وَالنَّهَارِ، ‌وَمِنْ ‌شَرِّ ‌كُلِّ ‌طَارِقٍ ‌إِلَّا ‌طَارِقًا ‌يَطْرُقُ ‌بِخَيْرٍ ‌يَا ‌رَحْمَنُ",
        en: "I seek refuge in the perfect words of Allah, which neither the righteous nor the wicked can overcome, from the evil of what He has created, brought into existence, and made. And from the evil of what descends from the sky and the evil of what ascends therein. And from the evil of what is created in the earth and the evil of what emerges from it. And from the evil of the tribulations of the night and day, and from the evil of every visitor except one who comes with good, O Most Merciful.",
        transliteration: "A'oodhu bikalimatil-lahit-tamma-tillatee la yujawizuhunna barrun wala fajir, min sharri ma khalaqa, wa dhara'a wa bara'a, wa min sharri ma yanzilu minas-sama'i wa min sharri ma ya'ruju feeha, wa min sharri ma dhara'a fil-ard, wa min sharri ma yakhruju minha, wa min sharri fitanil-layli wan-nahar, wa min sharri kulli tariqin illa tariqan yatruqu bikhayrin ya Rahman."
    },
    repetitions: 1,
    info: { ar: "عن عبد الرحمن بن خَنْبَش، رواه أحمد [صحيح].", en: "From 'Abd al-Rahman ibn Khanbash, narrated by Ahmad [Sahih].", transliteration: "" },
  },
  {
    id: 22,
    text: {
        ar: "اللهُمَّ عَافِنِي فِي بَدَنِي، ‌اللهُمَّ ‌عَافِنِي ‌فِي ‌سَمْعِي، اللهُمَّ عَافِنِي فِي بَصَرِي، لَا إِلَهَ إِلَّا أَنْتَ",
        en: "O Allah, grant me well-being in my body. O Allah, grant me well-being in my hearing. O Allah, grant me well-being in my sight. There is no deity but You.",
        transliteration: "Allahumma 'afinee fee badanee, Allahumma 'afinee fee sam'ee, Allahumma 'afinee fee basaree, la ilaha illa Anta."
    },
    repetitions: 3,
    info: { ar: "عن عبد الرحمن بن أبي بكرة عن أبيه ، رواه أحمد [حسن].", en: "From 'Abd al-Rahman ibn Abi Bakra from his father, narrated by Ahmad [Hasan].", transliteration: "" },
  },
  {
    id: 23,
    text: {
        ar: "اللَّهُمَّ ‌إِنِّي ‌أَعُوذُ ‌بِكَ ‌مِنَ ‌الْكُفْرِ ‌وَالْفَقْرِ، ‌اللَّهُمَّ ‌إِنِّي ‌أَعُوذُ ‌بِكَ ‌مِنْ ‌عَذَابِ ‌الْقَبْرِ، لَا إِلَهَ إِلَّا أَنْتَ",
        en: "O Allah, I seek refuge in You from disbelief and poverty. O Allah, I seek refuge in You from the punishment of the grave. There is no deity but You.",
        transliteration: "Allahumma inni a'oodhu bika minal-kufri wal-faqr, Allahumma inni a'oodhu bika min 'adhabil-qabr, la ilaha illa Anta."
    },
    repetitions: 3,
    info: { ar: "عن أبي بكر، رواه البخاري في الأدب المفرد، والضياء المقدسي [صحيح].", en: "From Abu Bakr, narrated by Al-Bukhari in Al-Adab Al-Mufrad, and Ad-Diya' Al-Maqdisi [Sahih].", transliteration: "" },
  },
  {
    id: 24,
    text: {
        ar: "اللهم إني أسألك العافية في الدنيا والآخرة، اللهم إني أسألك العفو والعافية في ديني ودنياي وأهلي ومالي، اللهم استر عوراتي وفي رواية عورتي، وآمن روعاتي، اللهم احفظني من بين يدي ومن خلفي، وعن يميني وعن شمالي ومن فوقي وأعوذ بعظمتك من أن أغتال من تحتي",
        en: "O Allah, I ask You for well-being in this world and the Hereafter. O Allah, I ask You for pardon and well-being in my religion, my worldly affairs, my family and my wealth. O Allah, conceal my faults and preserve me from fear. O Allah, protect me from before me and from behind me, from my right and from my left, and from above me, and I seek refuge in Your greatness from being destroyed from beneath me.",
        transliteration: "Allahumma inni as'alukal-'afiyata fid-dunya wal-akhirah. Allahumma inni as'alukal-'afwa wal-'afiyata fee deenee wa dunyaya wa ahlee wa malee. Allahumma-stur 'awratee wa aamin raw'atee. Allahumma-hfazni min bayni yadayya wa min khalfee, wa 'an yameenee wa 'an shimalee wa min fawqee, wa a'oodhu bi'adhamatika an ughtala min tahtee."
    },
    repetitions: 1,
    info: { ar: "عن شداد بن أوس وفيه أَنَّ من قاله موقنًا فمات فهوَ مِن أهلِ الجنة، رواه البخاري، والترمذي، والنسائي.", en: "From Shaddad bin Aws, wherein it says that whoever says it with certainty and dies on that day, he will be from the people of Paradise. Narrated by Al-Bukhari, At-Tirmidhi, and An-Nasa'i.", transliteration: "" },
  },
  {
    id: 25,
    text: {
        ar: "اللهُمَّ ‌أَنْتَ ‌رَبِّي ‌لَا ‌إِلَهَ ‌إِلَّا ‌أَنْتَ، ‌خَلَقْتَنِي، ‌وَأَنَا ‌عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ ‌بِنِعْمَتِكَ ‌عَلَيَّ، ‌وَأَبُوءُ ‌بِذَنْبِي، ‌فَاغْفِرْ ‌لِي، ‌فَإِنَّهُ ‌لَا ‌يَغْفِرُ ‌الذُّنُوبَ ‌إِلا ‌أَنْتَ",
        en: "O Allah, You are my Lord, there is no deity but You. You created me and I am Your slave. I am upon Your covenant and Your promise as much as I am able. I seek refuge in You from the evil of what I have done. I acknowledge Your favor upon me, and I acknowledge my sin, so forgive me, for verily no one forgives sins except You.",
        transliteration: "Allahumma Anta Rabbee la ilaha illa Ant, khalaqtanee, wa ana 'abduk, wa ana 'ala 'ahdika wa wa'dika mastata't. A'oodhu bika min sharri ma sana't, aboo'u laka bini'matika 'alayya, wa aboo'u bidhanbee, faghfir lee, fa'innahu la yaghfirudh-dhunooba illa Ant."
    },
    repetitions: 1,
    info: { ar: "عن شداد بن أوس وفيه أَنَّ من قاله موقنًا فمات فهوَ مِن أهلِ الجنة، رواه البخاري، والترمذي، والنسائي. (سيد الاستغفار)", en: "From Shaddad bin Aws, wherein it says that whoever says it with certainty and dies on that day, he will be from the people of Paradise. Narrated by Al-Bukhari, At-Tirmidhi, and An-Nasa'i. (The Master of Supplications for Forgiveness).", transliteration: "" },
  },
  {
    id: 26,
    text: {
        ar: "أَسْتَغْفِرُ ‌اللَّهَ ‌الْعَظِيمَ ‌الَّذِي ‌لَا ‌إِلَهَ ‌إِلَّا ‌هُوَ ‌الْحَيَّ ‌الْقَيُّومَ، ‌وَأَتُوبُ ‌إِلَيْهِ",
        en: "I seek the forgiveness of Allah the Magnificent, Whom there is none worthy of worship but Him, the Ever-Living, the Sustainer of all, and I repent to Him.",
        transliteration: "Astaghfirullahal-'Adheemal-ladhee la ilaha illa Huwal-Hayyul-Qayyum, wa atoobu ilayh."
    },
    repetitions: 3,
    info: { ar: "عن ابن مسعود، وفيه أَنَّ من قاله ثلاثًا غُفِرت ذنوبه، وإن كان فارًّا من الزَّحْف، رواه الحاكم [صحيح].", en: "From Ibn Mas'ud, wherein it says that for whoever says it three times, his sins will be forgiven even if he has fled from the battlefield. Narrated by Al-Hakim [Sahih].", transliteration: "" },
  },
  {
    id: 27,
    text: {
        ar: "اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنَ الْخَيْرِ كُلِّهِ عَاجِلِهِ وَآجِلِهِ مَا عَلِمْتُ مِنْهُ وَمَا لَمْ أَعْلَمْ، وَأَعُوذُ بِكَ مِنَ الشَّرِّ كُلِّهِ، عَاجِلِهِ وَآجِلِهِ مَا عَلِمْتُ مِنْهُ، وَمَا لَمْ أَعْلَمْ.\nاللَّهُمَّ إِنِّي أَسْأَلُكَ الْجَنَّةَ وَمَا قَرَّبَ إِلَيْهَا مِنْ قَوْلٍ أَوْ عَمَلٍ، وَأَعُوذُ بِكَ مِنَ النَّارِ وَمَا قَرَّبَ إِلَيْهَا مِنْ قَوْلٍ أَوْ عَمَلٍ.\nاللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ خَيْرِ مَا ‌سَأَلَكَ ‌عَبْدُكَ وَنَبِيُّكَ ‌مُحَمَّدٌ ﷺ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا استعاذك مِنْهُ عَبْدُكَ وَنَبِيُّكَ ‌مُحَمَّدٌ ﷺ، ومَا قَضَيْتَ لِي مِنْ قَضَاءٍ فَاجْعَلْ عَاقِبَتَهُ لِي رَشَدًا",
        en: "O Allah, I ask You for all good, both sooner and later, what I know of it and what I do not know. And I seek refuge in You from all evil, both sooner and later, what I know of it and what I do not know.\nO Allah, I ask You for Paradise and for that which brings one closer to it, in word or deed. And I seek refuge in You from the Fire and from that which brings one closer to it, in word or deed.\nO Allah, I ask You for the best of what Your slave and Prophet Muhammad ﷺ asked You for, and I seek refuge in You from the evil of what Your slave and Prophet Muhammad ﷺ sought refuge from. And whatever You have decreed for me, make its outcome good for me.",
        transliteration: "Allahumma inni as'aluka minal-khayri kullihi, 'ajilihi wa ajilih, ma 'alimtu minhu wama lam a'lam. Wa a'oodhu bika minash-sharri kullihi, 'ajilihi wa ajilih, ma 'alimtu minhu wama lam a'lam.\nAllahumma inni as'alukal-jannata wama qarraba ilayha min qawlin aw 'amal, wa a'oodhu bika minan-nari wama qarraba ilayha min qawlin aw 'amal.\nAllahumma inni as'aluka min khayri ma sa'alaka 'abduka wa nabiyyuk Muhammadun ﷺ, wa a'oodhu bika min sharri masta'adhaka minhu 'abduka wa nabiyyuk Muhammadun ﷺ, wama qadayta lee min qadaa'in faj'al 'aqibatahu lee rashada."
    },
    repetitions: 1,
    info: { ar: "عَنْ عَائِشَةَ، رواه البخاري في الأدب المفرد، وأحمد [صحيح].", en: "From 'Aisha, narrated by Al-Bukhari in Al-Adab Al-Mufrad, and Ahmad [Sahih].", transliteration: "" },
  },
  {
    id: 28,
    text: {
        ar: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
        en: "Our Lord, give us in this world [that which is] good and in the Hereafter [that which is] good and protect us from the punishment of the Fire.",
        transliteration: "Rabbana atina fid-dunya hasanatan wa fil-akhirati hasanatan waqina 'adhaban-nar."
    },
    repetitions: 1,
    info: { ar: "عن أنس بن مالك، رواه البخاري، ومسلم.", en: "From Anas bin Malik, narrated by Al-Bukhari and Muslim.", transliteration: "" },
  },
  {
    id: 29,
    text: {
        ar: "سُبْحَانَكَ ‌اللَّهُمَّ ‌وَبِحَمْدِكَ...أَشْهَدُ أَلَّا إِلَهَ إِلَّا أَنْتَ... أَسْتَغْفِرُكَ وَأَتُوبُ إلَيْكَ...\nوصَلَى اللهُ وسَلَّمَ عَلَى سَيِّدِنا مُحمَّدٍ وعَلَى آلِهِ وصَحْبِهِ أَجْمَعِينَ\n والحُمْدُ للهِ رَبِّ العَالَمِينَ.\n [نِهَايَةُ أَذْكَارِ الـمَسَاءِ، قَبْلَ غُرُوبِ الشِّمْسِ، المُخْتَصَرَة]",
        en: "How perfect You are, O Allah, and I praise You... I bear witness that there is no deity but You... I seek Your forgiveness and repent to You...\nMay Allah's peace and blessings be upon our Master Muhammad, his family, and all his companions.\nAnd praise be to Allah, Lord of the worlds.\n[End of the concise evening remembrances, before sunset]",
        transliteration: "Subhanakallahumma wa bihamdik... Ash-hadu an la ilaha illa Ant... Astaghfiruka wa atoobu ilayk...\nWa sallallahu wa sallama 'ala sayyidina Muhammadin wa 'ala aalihi wa sahbihi ajma'een.\nWal-hamdu lillahi Rabbil-'alameen.\n[Nihayatu Adhkar-il-Masa', qabla ghuroob-ish-shams, al-mukhtasarah]"
    },
    repetitions: 1,
    info: { ar: "كفارة المجلس.", en: "Expiation of the gathering.", transliteration: "" },
  }
];
export const jameahAdhkarCategories_i18n: JameahCategory[] = [
  {
    slug: "istiyqath-min-alnoom",
    title: { ar: "أَذْكَارُ الاسْتِيقَاطِ مِنَ النَّومِ", en: "Remembrances for Waking Up", transliteration: "Adhkar al-Istiqath min an-Nawm" },
    iconType: 'filled',
    adhkar: [
      { id: '1', text: { ar: "الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ.", en: "All praise is for Allah who gave us life after having taken it from us and unto Him is the resurrection.", transliteration: "Alhamdu lillahil-ladhi ahyana ba'da ma amatana wa ilayhin-nushoor." }, repetitions: 1, info: { ar: "رواه البخاري ومسلم.", en: "Narrated by Al-Bukhari and Muslim.", transliteration: "Rawahu Al-Bukhari wa Muslim." } },
      { id: '2', text: { ar: "لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ. سُبْحَانَ اللَّهِ، وَالْحَمْدُ لِلَّهِ، وَلاَ إِلَهَ إِلاَّ اللَّهُ، وَاللَّهُ أَكْبَرُ، وَلاَ حَوْلَ وَلاَ قُوَّةَ إِلاَّ بِاللَّهِ الْعَلِيِّ الْعَظِيمِ، رَبِّ اغْفِرْ لِي.", en: "None has the right to be worshipped except Allah, alone, without partner, to Him belongs all sovereignty and praise, and He is over all things omnipotent. How perfect Allah is, and all praise is for Allah, and none has the right to be worshipped except Allah, and Allah is the greatest, and there is no might nor power except with Allah, the Most High, the Most Great. My Lord, forgive me.", transliteration: "La ilaha illallahu wahdahu la shareeka lah, lahul-mulku wa lahul-hamd, wa Huwa 'ala kulli shay'in Qadeer. Subhanallah, walhamdulillah, wa la ilaha illallah, wallahu Akbar, wa la hawla wa la quwwata illa billahil-'Aliyyil-'Adheem. Rabbighfir lee." }, repetitions: 1, info: { ar: "رواه البخاري.", en: "Narrated by Al-Bukhari.", transliteration: "Rawahu Al-Bukhari." } },
      { id: '3', text: { ar: "الْحَمْدُ لِلَّهِ الَّذِي عَافَانِي فِي جَسَدِي، وَرَدَّ عَلَيَّ رُوحِي، وَأَذِنَ لِي بِذِكْرِهِ.", en: "All praise is for Allah who restored to me my health and returned my soul and has allowed me to remember Him.", transliteration: "Alhamdu lillahil-ladhi 'afani fee jasadi, wa radda 'alayya roohee, wa adhina lee bi dhikrih." }, repetitions: 1, info: { ar: "رواه الترمذي وحسنه الألباني.", en: "Narrated by At-Tirmidhi, graded Hasan by Al-Albani.", transliteration: "Rawahu At-Tirmidhi wa hassanahu Al-Albani." } },
    ]
  },
  {
    slug: "lobs-thobe",
    title: { ar: "دُعَاءُ لُبْسِ الثَّوْبِ", en: "Supplication for Wearing a Garment", transliteration: "Du'a Lubs ath-Thawb" },
    iconType: 'outlined',
    adhkar: [
      { id: '1', text: { ar: "الْحَمْدُ لِلَّهِ الَّذِي كَسَانِي هَذَا (الثَّوْبَ) وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلاَ قُوَّةٍ.", en: "Praise is to Allah Who has clothed me with this (garment) and provided it for me, without any power or might on my part.", transliteration: "Alhamdu lillahil-ladhi kasani hadha (ath-thawba) wa razaqaneehi min ghayri hawlin minni wa la quwwah." }, repetitions: 1, info: { ar: "رواه أصحاب السنن إلا النسائي.", en: "Narrated by the authors of Sunan except An-Nasa'i.", transliteration: "Rawahu Ashab as-Sunan illa An-Nasa'i." } },
    ]
  },
  {
    slug: "Traveling-Supplication",
    title: { ar: "دعاء السفر", en: "Traveling Supplication", transliteration: "Du'a al-safar" },
    iconType: 'outlined',
    adhkar: [
      { id: '1', text: { ar: "الله أكبر ، الله أكبر، سبحان الذي سخرلنا هذا وما كنا له مقرنين وإنا إلى ربنا لمنقلبون، اللهم إنا نسألك في سفرنا هذا البر والتقوى، ومن العمل ما ترضى، اللهم هون علينا سفرنا هذا وطوي عنا بعده، اللهم أنت الصاحب في السفر، والخليفة في الأهل، اللهم اني أعوذبك من وعثاء السفر، وكابة المنظر وسوء المنقلب في المال والاهل، وإذا رجع قالهن وزاد فيهن: ايبون، تائبون، عابدون، لربنا حامدون.", en: "Allah is the Most Great. Allah is the Most Great. Allah is the Most Great. Glory is to Him Who has provided this for us though we could never have had it by our efforts. Surely, unto our Lord we are returning. O Allah, we ask You on this our journey for goodness and piety, and for works that are pleasing to You. O Allah, lighten this journey for us and make its distance easy for us. O Allah, You are our Companion on the road and the One in Whose care we leave our family. O Allah, I seek refuge in You from this journey's hardships, and from the wicked sights in store and from finding our family and property in misfortune upon returning.", transliteration: "Allāhu Akbar, Allāhu Akbar, Allāhu Akbar, Subḥāna ‘l-ladhi sakhkhara lanā hādhā wa mā kunnā lahu muqrinīn. Wa innā ilā Rabbinā lamunqalibūn. Allāhumma innā nas'aluka fī safarinā hādha ‘l-birra wat-taqwā, Wa mina ‘l-`amali mā tarḍā, Allāhumma hawwin `alaynā safaranā hādhā waṭwi `annā bu`dah, Allāhumma antas-sāḥibu fis-safar, wa ‘l-khalīfatu fil-ahl, Allāhumma innī a`ūdhu bika min wa`thā'is-safar, wa ka'ābati ‘l-manẓar, wa sū'il-munqalabi fil-māli wa ‘l-ahl." }, repetitions: 1, info: { ar: "رواه مسلم", en: "Narrated by muslim.", transliteration: "Rawahu muslim." } },
      { id: '2', text: { ar: "دعاء دخول القرية/nأللّـهُمَّ رَبَّ السَّـمواتِ السّـبْعِ وَما أَظْلَلَـن، وَرَبَّ الأَراضيـنَ السّـبْعِ وَما أقْلَلْـن، وَرَبَّ الشَّيـاطينِ وَما أَضْلَلْـن، وَرَبَّ الرِّياحِ وَما ذَرَيْـن، أَسْـأَلُـكَ خَيْـرَ هذهِ الْقَـرْيَةِ وَخَيْـرَ أَهْلِـها، وَخَيْـرَ ما فيها، وَأَعـوذُ بِكَ مِنْ شَـرِّها وَشَـرِّ أَهْلِـها، وَشَـرِّ ما فيها.", en: "Supplication for entering a city/n O Allah, Lord of the seven heavens and all they overshadow, Lord of the seven worlds and all they uphold, Lord of the devils and all they lead astray, Lord of the winds and all they scatter. I ask You for the goodness of this town, and for the goodness of its people, and for the goodness it contains. I seek refuge in You from its evil, from the evil of its people, and from the evil it contains.", transliteration: "Supplication for entering a city/n Allāhumma Rabbas-samāwātis-sab`i wa mā aẓlaln, Wa Rabba ‘l-arāḍīnas-sab`i wa mā aqlaln, wa Rabbash-shayāṭīni wa mā aḍlaln, wa Rabbar-riyāḥi wa mā dharayn. As'aluka khayra hādhihi ‘l-qaryah, wa khayra ahlihā, wa khayra māfīhā, wa a`ūdhu bika min sharrihā, wa sharri ahlihā, wa sharri mā fīhā." }, repetitions: 1, info: { ar:"رواه", en: "Narrated by ", transliteration: "Rawahu " } },
    ]
  },
  {
    slug: "ma-yaqool-itha-wadaa-thobah",
    title: { ar: "مَا يَقُولُ إِذَا وَضَعَ ثَوْبَهُ", en: "What to Say When Undressing", transliteration: "Ma Yaqoolu idha Wada'a Thawbah" },
    iconType: 'outlined',
    adhkar: [
      { id: '1', text: { ar: "بِسْمِ اللَّهِ.", en: "In the name of Allah.", transliteration: "Bismillah." }, repetitions: 1, info: { ar: "رواه الترمذي وغيره.", en: "Narrated by At-Tirmidhi and others.", transliteration: "Rawahu At-Tirmidhi wa ghayruh." } },
    ]
  },
  {
    slug: "dukhool-al-khala",
    title: { ar: "دُعَاءُ دُخُولِ الْخَلَاءِ", en: "Supplication for Entering the Restroom", transliteration: "Du'a Dukhool al-Khala'" },
    iconType: 'outlined',
    adhkar: [
      { id: '1', text: { ar: "[بِسْمِ اللَّهِ] اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبُثِ وَالْخَبَائِثِ.", en: "[In the name of Allah] O Allah, I seek protection in You from the male and female evil spirits.", transliteration: "[Bismillah] Allahumma inni a'oodhu bika minal-khubuthi wal-khaba'ith." }, repetitions: 1, info: { ar: "رواه البخاري ومسلم. الزيادة بين المعقوفين للترمذي.", en: "Narrated by Al-Bukhari and Muslim. The addition in brackets is from At-Tirmidhi.", transliteration: "Rawahu Al-Bukhari wa Muslim. Az-ziyadah baynal-ma'qoofayn lit-Tirmidhi." } },
    ]
  },
  {
    slug: "khurooj-min-al-khala",
    title: { ar: "دُعَاءُ الْخُرُوجِ مِنَ الْخَلَاءِ", en: "Supplication for Leaving the Restroom", transliteration: "Du'a al-Khurooj min al-Khala'" },
    iconType: 'outlined',
    adhkar: [
      { id: '1', text: { ar: "غُفْرَانَكَ.", en: "I seek your forgiveness.", transliteration: "Ghufranak." }, repetitions: 1, info: { ar: "رواه أصحاب السنن إلا النسائي.", en: "Narrated by the authors of Sunan except An-Nasa'i.", transliteration: "Rawahu Ashab as-Sunan illa An-Nasa'i." } },
    ]
  },
  {
    slug: "dhikr-qabl-al-wudu",
    title: { ar: "الذِّكْرُ قَبْلَ الْوُضُوءِ", en: "Remembrance Before Wudu (Ablution)", transliteration: "Adh-Dhikr Qabl al-Wudu'" },
    iconType: 'outlined',
    adhkar: [
      { id: '1', text: { ar: "بِسْمِ اللَّهِ.", en: "In the name of Allah.", transliteration: "Bismillah." }, repetitions: 1, info: { ar: "رواه أبو داود، ابن ماجه والترمذي.", en: "Narrated by Abu Dawud, Ibn Majah, and At-Tirmidhi.", transliteration: "Rawahu Abu Dawud, Ibn Majah wa At-Tirmidhi." } },
    ]
  },
  {
    slug: "dhikr-bad-al-faragh-min-al-wudu",
    title: { ar: "الذِّكْرُ بَعْدَ الْفَرَاغِ مِنَ الْوُضُوءِ", en: "Remembrance After Completing Wudu", transliteration: "Adh-Dhikr Ba'd al-Faragh min al-Wudu'" },
    iconType: 'outlined',
    adhkar: [
      { id: '1', text: { ar: "أَشْهَدُ أَنْ لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ وَأَشْهَدُ أَنَّ مُحَمَّداً عَبْدُهُ وَرَسُولُهُ.", en: "I bear witness that none has the right to be worshipped but Allah, alone, without partner, and I bear witness that Muhammad is His slave and His Messenger.", transliteration: "Ash-hadu an la ilaha illallahu wahdahu la shareeka lah, wa ash-hadu anna Muhammadan 'abduhu wa rasooluh." }, repetitions: 1, info: { ar: "رواه مسلم.", en: "Narrated by Muslim.", transliteration: "Rawahu Muslim." } },
      { id: '2', text: { ar: "اللَّهُمَّ اجْعَلْنِي مِنَ التَّوَّابِينَ وَاجْعَلْنِي مِنَ الْمُتَطَهِّرِينَ.", en: "O Allah, make me of those who return to You often in repentance and make me of those who remain clean and pure.", transliteration: "Allahummaj-'alni minat-tawwabeena waj-'alni minal-mutatahhireen." }, repetitions: 1, info: { ar: "رواه الترمذي.", en: "Narrated by At-Tirmidhi.", transliteration: "Rawahu At-Tirmidhi." } },
      { id: '3', text: { ar: "سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ، أَشْهَدُ أَنْ لاَ إِلَهَ إِلاَّ أَنْتَ، أَسْتَغْفِرُكَ وَأَتُوبُ إِلَيْكَ.", en: "How perfect You are, O Allah, and I praise You. I bear witness that none has the right to be worshipped but You. I seek Your forgiveness and turn to You in repentance.", transliteration: "Subhanakallahumma wa bihamdik, ash-hadu an la ilaha illa Ant, astaghfiruka wa atoobu ilayk." }, repetitions: 1, info: { ar: "رواه النسائي في عمل اليوم والليلة.", en: "Narrated by An-Nasa'i in 'Amal Al-Yawm wa Al-Laylah.", transliteration: "Rawahu An-Nasa'i fi 'Amal Al-Yawm wa Al-Laylah." } },
    ]
  },
  {
    slug: "dhikr-ind-al-khurooj-min-al-manzil",
    title: { ar: "الذِّكْرُ عِنْدَ الْخُرُوجِ مِنَ الْمَنْزِلِ", en: "Remembrance When Leaving the House", transliteration: "Adh-Dhikr 'Inda al-Khurooj min al-Manzil" },
    iconType: 'filled',
    adhkar: [
      { id: '1', text: { ar: "بِسْمِ اللَّهِ، تَوَكَّلْتُ عَلَى اللَّهِ، وَلاَ حَوْلَ وَلاَ قُوَّةَ إِلاَّ بِاللَّهِ.", en: "In the name of Allah, I have placed my trust in Allah, there is no might and no power except with Allah.", transliteration: "Bismillah, tawakkaltu 'alallah, wa la hawla wa la quwwata illa billah." }, repetitions: 1, info: { ar: "رواه أبو داود والترمذي.", en: "Narrated by Abu Dawud and At-Tirmidhi.", transliteration: "Rawahu Abu Dawud wa At-Tirmidhi." } },
      { id: '2', text: { ar: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ أَنْ أَضِلَّ، أَوْ أُضَلَّ، أَوْ أَزِلَّ، أَوْ أُزَلَّ، أَوْ أَظْلِمَ، أَوْ أُظْلَمَ، أَوْ أَجْهَلَ، أَوْ يُجْهَلَ عَلَيَّ.", en: "O Allah, I seek refuge in You lest I misguide or be misguided, or slip or be caused to slip, or do wrong or be wronged, or behave foolishly or be treated foolishly.", transliteration: "Allahumma inni a'oodhu bika an adilla, aw udalla, aw azilla, aw uzalla, aw adhlima, aw udhlama, aw ajhala, aw yujhala 'alayy." }, repetitions: 1, info: { ar: "رواه أصحاب السنن.", en: "Narrated by the authors of Sunan.", transliteration: "Rawahu Ashab as-Sunan." } },
    ]
  },
  {
    slug: "dhikr-ind-dukhool-al-manzil",
    title: { ar: "الذِّكْرُ عِنْدَ دُخُولِ المَنْزِلِ", en: "Remembrance When Entering the House", transliteration: "Adh-Dhikr 'Inda Dukhool al-Manzil" },
    iconType: 'filled',
    adhkar: [
      { id: '1', text: { ar: "بِسْمِ اللَّهِ وَلَجْنَا، وَبِسْمِ اللَّهِ خَرَجْنَا، وَعَلَى اللَّهِ رَبِّنَا تَوَكَّلْنَا، ثُمَّ لِيُسَلِّمْ عَلَى أَهْلِهِ.", en: "In the name of Allah we enter, and in the name of Allah we leave, and upon our Lord we depend [then say As-Salāmu 'Alaykum to your family].", transliteration: "Bismillahi walajna, wa bismillahi kharajna, wa 'alallahi Rabbina tawakkalna, thumma liyusallim 'ala ahlih." }, repetitions: 1, info: { ar: "رواه أبو داود.", en: "Narrated by Abu Dawud.", transliteration: "Rawahu Abu Dawud." } },
    ]
  },
  {
    slug: "dua-thahab-ila-almasjid",
    title: { ar: "دُعَاءُ الذَّهَابِ إِلَى الْمَسْجِدِ", en: "Supplication for Going to the Mosque", transliteration: "Du'a adh-Dhahab ila al-Masjid" },
    iconType: 'outlined',
    adhkar: [
      { id: '1', text: { ar: "اللَّهُمَّ اجْعَلْ فِي قَلْبِي نُورًا، وَفِي لِسَانِي نُورًا، وَفِي سَمْعِي نُورًا، وَفِي بَصَرِي نُورًا، وَمِنْ فَوْقِي نُورًا، وَمِنْ تَحْتِي نُورًا، وَعَنْ يَمِينِي نُورًا، وَعَنْ شِمَالِي نُورًا، وَمِنْ أَمَامِي نُورًا، وَمِنْ خَلْفِي نُورًا، وَاجْعَلْ فِي نَفْسِي نُورًا، وَأَعْظِمْ لِي نُورًا.", en: "O Allah, place within my heart light, and upon my tongue light, and within my ears light, and within my eyes light, and above me light, and beneath me light, and to my right light, and to my left light, and before me light and behind me light, and place in my soul light, and magnify for me light.", transliteration: "Allahummaj'al fee qalbee noora, wa fee lisanee noora, wa fee sam'ee noora, wa fee basaree noora, wa min fawqee noora, wa min tahtee noora, wa 'an yameenee noora, wa 'an shimalee noora, wa min amamee noora, wa min khalfee noora, waj'al fee nafsee noora, wa a'dhim lee noora." }, repetitions: 1, info: { ar: "رواه مسلم.", en: "Narrated by Muslim.", transliteration: "Rawahu Muslim." } }
    ]
  },
  {
    slug: "dua-dukhool-almasjid",
    title: { ar: "دُعَاءُ دُخُولِ المَسْجِدِ", en: "Supplication for Entering the Mosque", transliteration: "Du'a Dukhool al-Masjid" },
    iconType: 'outlined',
    adhkar: [
      { id: '1', text: { ar: "أَعُوذُ بِاللَّهِ الْعَظِيمِ، وَبِوَجْهِهِ الْكَرِيمِ، وَسُلْطَانِهِ الْقَدِيمِ، مِنَ الشَّيْطَانِ الرَّجِيمِ. [بِسْمِ اللَّهِ، وَالصَّلَاةُ وَالسَّلَامُ عَلَى رَسُولِ اللَّهِ]. اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ.", en: "I seek refuge in Allah, the Magnificent, and in His noble Face, and in His eternal authority, from the accursed devil. [In the name of Allah, and blessings and peace be upon the Messenger of Allah]. O Allah, open the gates of Your mercy for me.", transliteration: "A'oodhu billahil-'adheem, wa biwajhihil-kareem, wa sultanihil-qadeem, minash-shaytanir-rajeem. [Bismillah, was-salatu was-salamu 'ala rasoolillah]. Allahummaftah lee abwaba rahmatik." }, repetitions: 1, info: { ar: "رواه أبو داود. الزيادة بين المعقوفين للطبراني.", en: "Narrated by Abu Dawud. The addition in brackets is from At-Tabarani.", transliteration: "Rawahu Abu Dawud. Az-ziyadah baynal-ma'qoofayn lit-Tabarani." } }
    ]
  },
  {
    slug: "dua-khurooj-min-almasjid",
    title: { ar: "دُعَاءُ الْخُرُوجِ مِنَ الْمَسْجِدِ", en: "Supplication for Leaving the Mosque", transliteration: "Du'a al-Khurooj min al-Masjid" },
    iconType: 'outlined',
    adhkar: [
      { id: '1', text: { ar: "بِسْمِ اللَّهِ، وَالصَّلَاةُ وَالسَّلَامُ عَلَى رَسُولِ اللَّهِ، اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ، اللَّهُمَّ اعْصِمْنِي مِنَ الشَّيْطَانِ الرَّجِيمِ.", en: "In the name of Allah, and prayers and peace be upon the Messenger of Allah. O Allah, I ask You from Your favor. O Allah, protect me from the accursed devil.", transliteration: "Bismillah, was-salatu was-salamu 'ala rasoolillah. Allahumma inni as'aluka min fadlik. Allahumma'simni minash-shaytanir-rajeem." }, repetitions: 1, info: { ar: "رواه ابن ماجه.", en: "Narrated by Ibn Majah.", transliteration: "Rawahu Ibn Majah." } }
    ]
  },
  {
    slug: "adhkar-alathan",
    title: { ar: "أَذْكَارُ الْأَذَانِ", en: "Remembrances for the Adhan (Call to Prayer)", transliteration: "Adhkar al-Adhan" },
    iconType: 'outlined',
    adhkar: [
      { id: '1', text: { ar: "يَقُولُ مِثْلَ مَا يَقُولُ الْمُؤَذِّنُ إِلَّا فِي \"حَيَّ عَلَى الصَّلَاةِ\" وَ \"حَيَّ عَلَى الْفَلَاحِ\" فَيَقُولُ: \"لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ\".", en: "Repeat what the Mu'adhin says, except for 'Hayya 'alas-Salah' and 'Hayya 'alal-Falah', for which one should say: 'There is no might nor power except with Allah'.", transliteration: "Yaqoolu mithla ma yaqoolul-mu'adhdhin illa fee 'Hayya 'alas-Salah' wa 'Hayya 'alal-Falah' fayaqoolu: 'La hawla wa la quwwata illa billah'." }, repetitions: 1, info: { ar: "رواه البخاري ومسلم.", en: "Narrated by Al-Bukhari and Muslim.", transliteration: "Rawahu Al-Bukhari wa Muslim." } },
      { id: '2', text: { ar: "يَقُولُ: \"وَأَنَا أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، وَأَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ، رَضِيتُ بِاللَّهِ رَبًّا، وَبِمُحَمَّدٍ رَسُولًا، وَبِالْإِسْلَامِ دِينًا\"، (يَقُولُ ذَلِكَ عَقِبَ تَشَهُّدِ الْمُؤَذِّنِ).", en: "Say: 'And I too bear witness that none has the right to be worshipped except Allah, alone, without partner, and that Muhammad is His slave and Messenger. I am pleased with Allah as a Lord, and with Muhammad as a Messenger, and with Islam as a religion.' (To be said after the Mu'adhin's tashahhud).", transliteration: "Yaqool: 'Wa ana ash-hadu an la ilaha illallahu wahdahu la shareeka lah, wa anna Muhammadan 'abduhu wa rasooluh. Radeetu billahi Rabban, wa bi Muhammadin Rasoolan, wa bil-islami deenan.' (Yaqoolu dhalika 'aqiba tashahhudil-mu'adhdhin)." }, repetitions: 1, info: { ar: "رواه مسلم.", en: "Narrated by Muslim.", transliteration: "Rawahu Muslim." } },
      { id: '3', text: { ar: "يُصَلِّي عَلَى النَّبِيِّ ﷺ بَعْدَ فَرَاغِهِ مِنْ إِجَابَةِ الْمُؤَذِّنِ.", en: "Send prayers upon the Prophet (ﷺ) after answering the call of the Mu'adhin.", transliteration: "Yusalli 'alan-Nabiyyi ﷺ ba'da faraghihi min ijabatil-mu'adhdhin." }, repetitions: 1, info: { ar: "رواه مسلم.", en: "Narrated by Muslim.", transliteration: "Rawahu Muslim." } },
      { id: '4', text: { ar: "اللَّهُمَّ رَبَّ هَذِهِ الدَّعْوَةِ التَّامَّةِ، وَالصَّلَاةِ الْقَائِمَةِ، آتِ مُحَمَّدًا الْوَسِيلَةَ وَالْفَضِيلَةَ، وَابْعَثْهُ مَقَامًا مَحْمُودًا الَّذِي وَعَدْتَهُ، [إِنَّكَ لَا تُخْلِفُ الْمِيعَادَ].", en: "O Allah, Lord of this perfect call and established prayer, grant Muhammad the intercession and favor, and raise him to the honored station You have promised him, [verily You do not neglect promises].", transliteration: "Allahumma Rabba hadhihid-da'watit-tammah, was-salatil-qa'imah, ati Muhammadanil-waseelata wal-fadeelah, wab'ath-hu maqaman mahmoodanil-ladhi wa'adtah, [innaka la tukhliful-mee'aad]." }, repetitions: 1, info: { ar: "رواه البخاري. الزيادة بين المعقوفين للبيهقي.", en: "Narrated by Al-Bukhari. The addition in brackets is from Al-Bayhaqi.", transliteration: "Rawahu Al-Bukhari. Az-ziyadah baynal-ma'qoofayn lil-Bayhaqi." } },
      { id: '5', text: { ar: "يَدْعُو لِنَفْسِهِ بَيْنَ الْأَذَانِ وَالْإِقَامَةِ فَإِنَّ الدُّعَاءَ حِينَئِذٍ لَا يُرَدُّ.", en: "Supplicate for oneself between the Adhan and the Iqamah, for the supplication at that time is not rejected.", transliteration: "Yad'oo linafsihi baynal-adhani wal-iqamah fa'innad-du'a'a heena'idhin la yurad." }, repetitions: 1, info: { ar: "رواه الترمذي وأبو داود.", en: "Narrated by At-Tirmidhi and Abu Dawud.", transliteration: "Rawahu At-Tirmidhi wa Abu Dawud." } }
    ]
  },
  {
    slug: "dua-alistiftah",
    title: { ar: "دُعَاءُ الاسْتِفْتَاحِ", en: "Supplication at the Start of Prayer", transliteration: "Du'a al-Istiftah" },
    iconType: 'outlined',
    adhkar: [
      { id: '1', text: { ar: "اللَّهُمَّ بَاعِدْ بَيْنِي وَبَيْنَ خَطَايَايَ كَمَا بَاعَدْتَ بَيْنَ الْمَشْرِقِ وَالْمَغْرِبِ، اللَّهُمَّ نَقِّنِي مِنْ خَطَايَايَ كَمَا يُنَقَّى الثَّوْبُ الْأَبْيَضُ مِنَ الدَّنَسِ، اللَّهُمَّ اغْسِلْنِي مِنْ خَطَايَايَ بِالثَّلْجِ وَالْمَاءِ وَالْبَرَدِ.", en: "O Allah, separate me from my sins as You have separated the East from the West. O Allah, cleanse me of my sins as a white garment is cleansed of filth. O Allah, wash away my sins with snow, water, and hail.", transliteration: "Allahumma ba'id bayni wa bayna khatayaya kama ba'adta baynal-mashriqi wal-maghrib. Allahumma naqqini min khatayaya kama yunaqqath-thawbul-abyadu minad-danas. Allahummaghsilni min khatayaya bith-thalji wal-ma'i wal-barad." }, repetitions: 1, info: { ar: "رواه البخاري ومسلم.", en: "Narrated by Al-Bukhari and Muslim.", transliteration: "Rawahu Al-Bukhari wa Muslim." } },
      { id: '2', text: { ar: "سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ، وَتَبَارَكَ اسْمُكَ، وَتَعَالَى جَدُّكَ، وَلَا إِلَهَ غَيْرُكَ.", en: "How perfect You are, O Allah, and I praise You. Blessed is Your name, and exalted is Your majesty. There is no god but You.", transliteration: "Subhanakallahumma wa bihamdik, wa tabarakasmuk, wa ta'ala jadduk, wa la ilaha ghayruk." }, repetitions: 1, info: { ar: "رواه أصحاب السنن الأربعة واللفظ لأبي داود.", en: "Narrated by the four authors of Sunan, wording is from Abu Dawud.", transliteration: "Rawahu Ashab as-Sunan al-arba'ah wal-lafdh li Abi Dawud." } }
    ]
  },
  {
    slug: "dua-arrukoo",
    title: { ar: "دُعَاءُ الرُّكُوعِ", en: "Supplication During Ruku' (Bowing)", transliteration: "Du'a ar-Ruku'" },
    iconType: 'outlined',
    adhkar: [
      { id: '1', text: { ar: "سُبْحَانَ رَبِّيَ الْعَظِيمِ.", en: "How perfect is my Lord, the Magnificent.", transliteration: "Subhana Rabbiyal-'Adheem." }, repetitions: 3, info: { ar: "رواه أصحاب السنن وأحمد.", en: "Narrated by the authors of Sunan and Ahmad.", transliteration: "Rawahu Ashab as-Sunan wa Ahmad." } },
      { id: '2', text: { ar: "سُبْحَانَكَ اللَّهُمَّ رَبَّنَا وَبِحَمْدِكَ، اللَّهُمَّ اغْفِرْ لِي.", en: "How perfect You are, O Allah, our Lord, and I praise You. O Allah, forgive me.", transliteration: "Subhanakallahumma Rabbana wa bihamdik, Allahummaghfir lee." }, repetitions: 1, info: { ar: "رواه البخاري ومسلم.", en: "Narrated by Al-Bukhari and Muslim.", transliteration: "Rawahu Al-Bukhari wa Muslim." } },
      { id: '3', text: { ar: "سُبُّوحٌ قُدُّوسٌ، رَبُّ الْمَلَائِكَةِ وَالرُّوحِ.", en: "Perfect, Holy, Lord of the angels and the Spirit.", transliteration: "Subboohun Quddoos, Rabbul-mala'ikati war-rooh." }, repetitions: 1, info: { ar: "رواه مسلم.", en: "Narrated by Muslim.", transliteration: "Rawahu Muslim." } }
    ]
  },
  {
    slug: "dua-arraf-min-arrukoo",
    title: { ar: "دُعَاءُ الرَّفْعِ مِنَ الرُّكُوعِ", en: "Supplication When Rising from Ruku'", transliteration: "Du'a ar-Raf' min ar-Ruku'" },
    iconType: 'outlined',
    adhkar: [
      { id: '1', text: { ar: "سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ.", en: "Allah hears those who praise Him.", transliteration: "Sami'allahu liman hamidah." }, repetitions: 1, info: { ar: "رواه البخاري.", en: "Narrated by Al-Bukhari.", transliteration: "Rawahu Al-Bukhari." } },
      { id: '2', text: { ar: "رَبَّنَا وَلَكَ الْحَمْدُ، حَمْدًا كَثِيرًا طَيِّبًا مُبَارَكًا فِيهِ.", en: "Our Lord, praise is Yours, abundant, good, and blessed praise.", transliteration: "Rabbana wa lakal-hamd, hamdan katheeran tayyiban mubarakan feeh." }, repetitions: 1, info: { ar: "رواه البخاري.", en: "Narrated by Al-Bukhari.", transliteration: "Rawahu Al-Bukhari." } }
    ]
  },
  {
    slug: "dua-assujood",
    title: { ar: "دُعَاءُ السُّجُودِ", en: "Supplication During Sujood (Prostration)", transliteration: "Du'a as-Sujood" },
    iconType: 'outlined',
    adhkar: [
      { id: '1', text: { ar: "سُبْحَانَ رَبِّيَ الْأَعْلَى.", en: "How perfect is my Lord, the Most High.", transliteration: "Subhana Rabbiyal-A'la." }, repetitions: 3, info: { ar: "رواه أصحاب السنن وأحمد.", en: "Narrated by the authors of Sunan and Ahmad.", transliteration: "Rawahu Ashab as-Sunan wa Ahmad." } },
      { id: '2', text: { ar: "سُبْحَانَكَ اللَّهُمَّ رَبَّنَا وَبِحَمْدِكَ، اللَّهُمَّ اغْفِرْ لِي.", en: "How perfect You are, O Allah, our Lord, and I praise You. O Allah, forgive me.", transliteration: "Subhanakallahumma Rabbana wa bihamdik, Allahummaghfir lee." }, repetitions: 1, info: { ar: "رواه البخاري ومسلم.", en: "Narrated by Al-Bukhari and Muslim.", transliteration: "Rawahu Al-Bukhari wa Muslim." } }
    ]
  },
  {
    slug: "dua-aljalsa-baina-assajdatain",
    title: { ar: "دُعَاءُ الْجِلْسَةِ بَيْنَ السَّجْدَتَيْنِ", en: "Supplication for the Sitting Between Prostrations", transliteration: "Du'a al-Jalsa bayna as-Sajdatayn" },
    iconType: 'outlined',
    adhkar: [
      { id: '1', text: { ar: "رَبِّ اغْفِرْ لِي، رَبِّ اغْفِرْ لِي.", en: "My Lord, forgive me. My Lord, forgive me.", transliteration: "Rabbighfir lee, Rabbighfir lee." }, repetitions: 1, info: { ar: "رواه أبو داود وابن ماجه.", en: "Narrated by Abu Dawud and Ibn Majah.", transliteration: "Rawahu Abu Dawud wa Ibn Majah." } },
      { id: '2', text: { ar: "اللَّهُمَّ اغْفِرْ لِي، وَارْحَمْنِي، وَاهْدِنِي، وَاجْبُرْنِي، وَعَافِنِي، وَارْزُقْنِي، وَارْفَعْنِي.", en: "O Allah, forgive me, have mercy on me, guide me, support me, protect me, provide for me, and elevate me.", transliteration: "Allahummaghfir lee, warhamni, wahdini, wajburni, wa 'afini, warzuqni, warfa'ni." }, repetitions: 1, info: { ar: "رواه أصحاب السنن إلا النسائي.", en: "Narrated by the authors of Sunan except An-Nasa'i.", transliteration: "Rawahu Ashab as-Sunan illa An-Nasa'i." } }
    ]
  },
  {
    slug: "dua-sujood-attilawa",
    title: { ar: "دُعَاءُ سُجُودِ التَّلَاوَةِ", en: "Supplication for the Prostration of Recitation", transliteration: "Du'a Sujood at-Tilawah" },
    iconType: 'outlined',
    adhkar: [
      { id: '1', text: { ar: "سَجَدَ وَجْهِيَ لِلَّذِي خَلَقَهُ، وَشَقَّ سَمْعَهُ وَبَصَرَهُ بِحَوْلِهِ وَقُوَّتِهِ، {فَتَبَارَكَ اللَّهُ أَحْسَنُ الْخَالِقِينَ}.", en: "My face has prostrated to the One Who created it, and brought forth its hearing and sight by His might and power. {So blessed is Allah, the best of creators}.", transliteration: "Sajada wajhiya lilladhee khalaqah, wa shaqqa sam'ahu wa basarahu bihawlihi wa quwwatih, {fatabarakallahu ahsanul-khaliqeen}." }, repetitions: 1, info: { ar: "رواه الترمذي وأبو داود. الزيادة بين القوسين للحاكم.", en: "Narrated by At-Tirmidhi and Abu Dawud. The addition in brackets is from Al-Hakim.", transliteration: "Rawahu At-Tirmidhi wa Abu Dawud. Az-ziyadah baynal-qawsayn lil-Hakim." } },
      { id: '2', text: { ar: "اللَّهُمَّ اكْتُبْ لِي بِهَا عِنْدَكَ أَجْرًا، وَضَعْ عَنِّي بِهَا وِزْرًا، وَاجْعَلْهَا لِي عِنْدَكَ ذُخْرًا، وَتَقَبَّلْهَا مِنِّي كَمَا تَقَبَّلْتَهَا مِنْ عَبْدِكَ دَاوُدَ.", en: "O Allah, record for me a reward for it with You, and remove from me a sin for it. Make it a treasure for me with You, and accept it from me as you accepted it from your servant Dawud (David).", transliteration: "Allahummak-tub lee biha 'indaka ajra, wa da' 'anni biha wizra, waj'alha lee 'indaka dhukhra, wa taqabbalha minni kama taqabbaltaha min 'abdika Dawood." }, repetitions: 1, info: { ar: "رواه الترمذي والحاكم.", en: "Narrated by At-Tirmidhi and Al-Hakim.", transliteration: "Rawahu At-Tirmidhi wal-Hakim." } }
    ]
  },
  {
    slug: "attashahhud",
    title: { ar: "التَّشَهدُ", en: "The Tashahhud", transliteration: "At-Tashahhud" },
    iconType: 'outlined',
    adhkar: [
      { id: '1', text: { ar: "التَّحِيَّاتُ لِلَّهِ، وَالصَّلَوَاتُ، وَالطَّيِّبَاتُ، السَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ، السَّلَامُ عَلَيْنَا وَعَلَى عِبَادِ اللَّهِ الصَّالِحِينَ، أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ، وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ.", en: "All greetings, prayers and good things are for Allah. Peace be upon you, O Prophet, and the mercy of Allah and His blessings. Peace be upon us and upon the righteous slaves of Allah. I bear witness that there is no god but Allah, and I bear witness that Muhammad is His slave and Messenger.", transliteration: "At-tahiyyatu lillah, was-salawatu, wat-tayyibat. As-salamu 'alayka ayyuhan-Nabiyyu wa rahmatullahi wa barakatuh. As-salamu 'alayna wa 'ala 'ibadillahis-saliheen. Ash-hadu an la ilaha illallah, wa ash-hadu anna Muhammadan 'abduhu wa rasooluh." }, repetitions: 1, info: { ar: "رواه البخاري ومسلم.", en: "Narrated by Al-Bukhari and Muslim.", transliteration: "Rawahu Al-Bukhari wa Muslim." } }
    ]
  }
  // Ensure all categories and their adhkar items are fully populated here.
];

// Export the i18n versions with the original names used by the app
export const sabahAdhkar = sabahAdhkar_i18n;
export const sabahAdhkarConcise = sabahAdhkarConcise_i18n;
export const masaAdhkar = masaAdhkar_i18n;
export const masaAdhkarConcise = masaAdhkarConcise_i18n;
export const jameahAdhkarCategories = jameahAdhkarCategories_i18n;

