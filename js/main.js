/**
 * Novelia - Author & Bookstore Portfolio
 * Interactive JavaScript powered by Bootstrap 5
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize standard Bootstrap tooltips & popovers if present
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

  // Bookstore Featured Price Variable (in Indian Rupees - ₹)
  let bookstorePrice = 299;

  // Update bookstore section price displays
  document.querySelectorAll('.bookstore-price-val').forEach(el => {
    el.textContent = bookstorePrice;
  });

  // State Management
  const state = {
    activeFilter: 'all',
    readerFontSize: 18,
    readerTheme: 'ivory'
  };

  // Sample Book Data
  const booksData = [
    {
      id: 'book-1',
      title: 'The Last Chapter',
      genre: 'Contemporary Fiction',
      category: 'contemporary',
      price: bookstorePrice,
      rating: 4.9,
      reviewsCount: 2420,
      cover: 'images/book_last_chapter.jpg',
      badge: 'Bestseller',
      summary: 'A breathtaking story of memory, regret, and the courage to rewrite one’s destiny. When a mysterious manuscript surfaces in a seaside cottage, two estranged siblings must unravel their family’s darkest secrets before time runs out.',
      format: 'Hardcover',
      pages: 432,
      publisher: 'Novelia Publishing',
      isbn: '978-0-123456-78-9'
    },
    {
      id: 'book-2',
      title: 'Whispers of the Heart',
      genre: 'Romance & Drama',
      category: 'romance',
      price: 399,
      rating: 4.8,
      reviewsCount: 1850,
      cover: 'images/book_whispers.jpg',
      badge: 'Popular',
      summary: 'Set against the misty highlands of Scotland, two souls torn apart by circumstance reunite under extraordinary conditions. A heart-wrenching tale about second chances and unspoken truths.',
      format: 'Paperback',
      pages: 368,
      publisher: 'Aurelian Press',
      isbn: '978-0-987654-32-1'
    },
    {
      id: 'book-3',
      title: 'Beyond the Pages',
      genre: 'Inspirational',
      category: 'inspirational',
      price: 549,
      rating: 5.0,
      reviewsCount: 940,
      cover: 'images/book_beyond_pages.jpg',
      badge: 'Editor’s Choice',
      summary: 'An evocative memoir-style exploration of how literature shapes our empathy, sharpens our minds, and connects us across centuries of human experience.',
      format: 'Hardcover',
      pages: 312,
      publisher: 'Novelia Publishing',
      isbn: '978-0-543210-98-7'
    },
    {
      id: 'book-4',
      title: 'The Silent Witness',
      genre: 'Mystery Thriller',
      category: 'mystery',
      price: 449,
      rating: 4.7,
      reviewsCount: 1320,
      cover: 'images/book_silent_witness.jpg',
      badge: 'New Release',
      summary: 'A high-stakes thriller involving a disgraced journalist who stumbles upon an unsolved 1920s cold case buried deep within a forgotten city archive.',
      format: 'Paperback',
      pages: 400,
      publisher: 'Aurelian Press',
      isbn: '978-0-765432-10-9'
    },
    {
      id: 'book-5',
      title: 'Echoes of Empire',
      genre: 'Historical Fiction',
      category: 'historical',
      price: 599,
      rating: 4.9,
      reviewsCount: 2100,
      cover: 'images/book_echoes_empire.jpg',
      badge: 'Award Winner',
      summary: 'An epic saga spanning three generations across turbulent global shifts, celebrating resilience, heritage, and the enduring power of hope.',
      format: 'Hardcover',
      pages: 512,
      publisher: 'Novelia Publishing',
      isbn: '978-0-876543-21-0'
    },
    {
      id: 'book-6',
      title: 'Midnight Musings',
      genre: 'Short Story Collection',
      category: 'contemporary',
      price: 349,
      rating: 4.8,
      reviewsCount: 780,
      cover: 'images/book_midnight_musings.jpg',
      badge: 'Collector’s Edition',
      summary: 'A curated compilation of fifteen intimate short stories that capture the quiet beauty of late-night solitude and fleeting human moments.',
      format: 'Paperback',
      pages: 240,
      publisher: 'Aurelian Press',
      isbn: '978-0-112233-44-5'
    }
  ];

  // Sample Short Stories for Reader Modal
  const storiesData = [
    {
      id: 'story-vidhiyen-586',
      title: 'விதி எண் "586"',
      category: 'Tamil Short Story',
      readTime: '15 min read',
      date: 'August 2026',
      excerpt: 'வேகமாக சென்ற லாரியின் காற்றால் பறந்த ஒரு தேநீர் கடையின் பில்... அதில் எழுதப்பட்ட \'586\' என்ற மர்ம எண்...',
      content: `
        <h4 class="font-serif mb-4 text-center">விதி எண் "586"</h4>
        <p class="lead italic text-center mb-5 text-muted">எழுத்து : மணிகண்டன். பெ</p>
        <p>வேகமாக சென்று கொண்டிருந்த லாரி ஒரு தேநீர் கடையை கடக்க காற்றின் வேகம் காரணமாக தேநீர் கடையின் மேசையின் மேல் இருந்த சிறிய காகிதம் ஒன்று பறக்க ஆரம்பித்தது. அது உயரமாக பறந்து இறங்கி சுழன்றது தூரத்தில் நின்ற ஒரு முதியவரின் தோள் பக்கத்தின் உள்ளே சென்று விழுந்தது.</p>
        <p>அந்த முதியவர் அங்கிருந்து ஒருவரிடம் லிஃப்ட் கேக்க அந்த இருச்சக்கர வாகனத்தில் ஏறி சிறு தூரம் சென்ற பின் ஒரு மளிகை கடையில் வந்து இறங்கினார். அவர் இறங்கியதும் வாகனத்தை ஓட்டியவரிடம் நன்றி கூறிவிட்டு ஒரு மளிகை கடைக்குள் சென்று.</p>
        <p>" ஒரு சீப்பு வாழைப்பழம் தாங்கம்மா "</p>
        <p>"இதா பிச்சு தேரன்"</p>
        <p>அதை வாங்கி பக்குள் போட்டுவிட்டு பணத்தை எடுத்து கொடுக்க அந்த காகிதம் மீண்டும் கீழே விழுந்தது. அந்த நேரத்தில் அங்கே நின்ற டெலிவரி பாய் உணவு பொட்டலங்களை வாங்கி பக்குள் வைக்க கையில் வைத்திருந்த பில் பறந்து செல்ல கீழே குனிந்து எடுத்து கொண்டிருக்கையில் அந்த சிறிய காகிதமும் அவன் கண்ணில் பட்டது அதுவும் ஒரு தேநீர் கடையின் பில் தான் என்றதும் அதையும் சேர்த்து பக்குள் போட்டு கொண்டான்.</p>
        <p>அந்த டெலிவரி பாய் ஒரு காவல் நிலையத்தின் முன்பு வந்து சேர்ந்தான். வாசலுக்கு வந்த காவலாளியிடம் இந்தாங்க சார் உங்க ஆர்டர் என்று உணவு பொட்டலத்துடன் அந்த காகித பில்லையும் சேர்த்து கொடுத்தான்.</p>
        <p>காவலாளி கனகராஜ் உதவி அதை வாங்கி கொண்டு போன inspector அறையின் மேசையில் அந்த ஆய்வாளரின் பொட்டலத்தை வைத்துவிட்டு அங்கே பெஞ்சில் அமர்ந்திருந்த ஒரு ஐம்பத்தைந்து வயது மதிக்கத்தக்க ஆளை பார்த்து " கம்பைளண்ட் கொடுத்துட்டா கெளம்புங்கய்யா உங்க பணம் கிடைக்கும் இங்க எவ்வேளா நேரம் ஓக்காந்துருப்பிங்க" என்று விரட்டாத குறையாக சற்று உயர்ந்த குரலிலே சொல்லிக்கொண்டிருக்க அந்த நேரத்தில் உதவி ஆய்வாளர் (sub inspector)மதன் அங்கே நுழைகிறார்.</p>
        <p>" கனகராஜ் அங்கே என்ன சத்தம் போட்டுட்ருக்கீங்க என்ன பிரச்சைன"</p>
        <p>"ஐயா, இவர் பேர் ராமலிங்கம் இரண்டு லட்சம் ரூவா பணத்தை யாரோ நடு ரோட்டுல பறிச்சிட்டு போய்ட்டாங்களாம் பணம் கிடைக்கிற வர இங்கிருந்து போகமாட்டேன்னு ஆணி அடிச்ச மாறி ஓக்காந்துருக்காரு."</p>
        <p>"எந்த எடத்துல பறிச்சுட்டு போனாங்கலாம் "</p>
        <p>"ஐயா, தேர் வீதில மூணாவது சந்து"</p>
        <p>"அந்த சந்துலயா வீடு இருக்காத cctv கேமரா இருக்காத பாக்க எப்படி இருந்தானாம் "</p>
        <p>"தேப்பி போட்ருந்தனால மூஞ்சி சரியா பாக்கேலங்கிறாரு"</p>
        <p>"CCTV footage இல்ல மூஞ்சி சரியா பாக்கல தேப்பிய வச்சு எப்படி கண்டுபிடிக்கிறது"</p>
        <p>"ஆமாங்கய்ய ஆளு கேமரா பாக்க பாவமா இருக்காரு" என்றதும் மதன் அவரை ஏற இறங்க பார்த்தார் வேதனையுடன் அவர் அமர்ந்திருந்தது மதனுக்கு புரிந்தது.</p>
        <p>"முக்கியமான தெரிலங்கய்ய"</p>
        <p>பணம்</p>
        <p>போல எப்படி புரியைவக்கிறதுன்னு</p>
        <p>"பைழய ஆளுங்க யாராச்சும் இந்த வேலய பாத்திருப்பாங்க விசாரிச்சு பாருங்க".</p>
        <p>" ஐயா நீங்க போயீ சாப்பிடுங்க நான் விசாரிச்சுட்டு தகவல் கெடச்சதும் உங்கள கூப்பிட்டேரன்".</p>
        <p>மதன் மேசையில் இருந்த பொட்டலத்தை பிரித்து பார்க்க அதில் இரண்டு பில் இருந்தது ஒன்று வாங்கிய உணவுக்கானது மற்றொரு சிறிய பில்லையும் பார்த்த மதனுக்கு குழப்பம் அது தவறான பில் என்று புரிந்துகொள்கிறார். அதில் பின்பக்கம் "586" என்ற எண் எழுதி இருப்பதை கவனித்தார் பின்பு அதை குப்பை தொட்டியில் போட்டுவிட்டு "கனகராஜிடம் ஏதும் தகவல் கிடைத்ததா" என்று கேக்க எந்த தகவலும் கிடைக்கவில்லை என்றதும் அருகில் இருக்கும் காவல் நிலையங்களுக்கு தகவைல அனுப்பி செக் பாஸ்ட் இல் சாதனை செய்ய சொல்லிவிட்டு கொண்டிருக்க அங்கே நுழைந்த இன்னொரு காவலாளி குப்பை தொட்டியை தற்செயலாக அவரின் கால்கள் தட்டிவிட அது சாய்ந்து சிதறியது. அந்த காவலாளியை பார்த்து ஒரு முறைவிட "இதா இப்போ கிளீன் பண்ண சொல்லேறன் சார் னு" ஓடி சென்று குப்பையை வாரி தொட்டியில் சேர்த்துவிட்டு அங்கிருந்து சென்றுவிட்டார், அந்த பில் si மதனின் காலின் அடியே வந்து சாருகி நின்றது மீண்டும் அதை எடுத்து பார்க்க வேலவன் தேநீர் கடையின் பில் அது. அதில் நேரம் தேதி குறிப்பிடப்பட்டிருந்தது அது அன்றைய நாளுக்கான பில் அதை பின் பக்கம் திருப்பி பார்க்க "586" என்ற எண்கள் பேனாவால் யாரோ எழுதி வைத்தது போல் இருந்தது. அந்த பில் காகிதம் மீண்டும் மீண்டும் கண்ணில் தென்படுவதை அவன் உள்ளுணர்வு எதையோ கூறுவதை போல் மதனுக்கு தோன்றவே அதை உற்று பார்த்துக்கொண்டிருந்தான் அதை இதற்குமுன் எங்கேயோ அவன் பார்த்திருக்கலாம். அங்கிருந்த கனகராஜை அழைத்து அந்த எண்ணை காட்டினார்</p>
        <p>"உங்களுக்கு ஏதாவது இந்த நம்பைர பாத்த தோணுதா?"</p>
        <p>"அது அந்த கடையில் கொடுக்க வேண்டிய மிச்ச மீதி காச இருக்கலாம் ஐயா"</p>
        <p>மதன் கனகராஜை காரமாக பார்க்க .</p>
        <p>"ஒருவேள codeword அ இருக்கலாம் ஐயா.</p>
        <p>"உங்களுக்கு ஏதாவது தோணுதுங்களா ஐயா"</p>
        <p>"ெரண்டு மூணு நாளா தூக்கமில்ல அந்த சம்பவத்துக்கு அப்பறம் இந்த நம்பர் தான் கனவுல வந்து போகுது"</p>
        <p>மதன் சில வினாடிகள் சிந்தித்து…. தன் காக்கி உடையை மாற்றிவிட்டு சாதாரண ஆளாக அங்கிருந்து கிளம்பினான். பின்னர் வேலவன் தேநீர் கடையில் அமர்ந்து தேநீர் அருந்தி கொண்டிருக்க அங்கே வேலை செய்யும் வாலிபைர உற்று கவனித்தார்</p>
        <p>" டேய் துப்பாக்கி இங்க வாடா " என அவனை அங்கிருந்தவர்கள் "துப்பாக்கி" என்று பெயர் சொல்லி அழைக்க. மதன் அவனிடம் பேச்சு கொடுக்க ஆரம்பித்தான்.</p>
        <p>"உன்ன எல்லாரும் துப்பாக்கி னு கூப்பிடறாங்கேள என்ன விஷயம்"</p>
        <p>"அதல்லாம் அப்டித்தான்" என்று ஒரு தெனாவெட்டாக பதில் கூற மதனின் காலில் அணிந்திருந்த காக்கி ஷூ பார்த்து பின்னர் கவனித்துவிட்டான் "சார் நீங்க போலீசா" என்றதும் மதனும் அவன் தளிவாக ஷூ பார்த்து கூறுவதை புரிந்துகொண்டான்.</p>
        <p>"சார் நீங்க நினைக்கிற மாதிரிலாம் இல்ல நான் வேலைல gun மாரி இருப்பேன் அதனால பசங்க என்ன துப்பாக்கி னு கூப்பிடறாங்க ".</p>
        <p>"சரி அது இருக்கட்டும் " மதன் அந்த பில்லை காட்டி விசாரிக்க.</p>
        <p>அந்த வாலிபர் " சார் இங்க ஏகப்பட்ட பேர் வந்து போறாங்க எல்லாைரயும் நியாபகம் வச்சுக்கமுடியாது". பின்னர் "586" என்ற எண்ணை பார்த்ததும் "சார் நேத்து ஒருத்தன் டீ குடுச்சுட்டு நம்பர யாருக்கேகா போன்ல அழுத்தி இருக்கும்போது இந்த சொல்லிட்ருந்தான்".</p>
        <p>"முழு நம்பர் நியாபகம் இருக்கா யத்நிச்சு பாரு".</p>
        <p>"இல்ல சார் கடசியா அவன் இந்த நம்பர மட்டுந்தான் அழுத்தி சொன்னான் மத்தது நியாபகம் இல்ல "</p>
        <p>கடையாட சிசிடிவி கேமரா பதிவை மதன் கேட்க. "அது ரொம்ப மாசமா வேலை செய்யல சும்மாதான் சார் இருக்கு." மதன் அங்கிருந்து வெளியேறி கடையில் இருக்கும் பாதையில் நடந்து செல்ல அங்கே பணம் எடுக்கும் இயந்திரம் தென்பட்டது ஒருவேளை அதில் பணம் எடுக்க அவன் வந்திருந்தால் முகத்தை அடையாளம் காணலாம் என்ற எண்ணம் பளிச்சிட சட்டென அனைத்து cctv பதிவையும் அங்கிருந்து வாங்கி தேநீர் கடையில் இருந்த வாலிபரிடம் காட்டி அடையாளம் காட்ட சொன்னார் மதன். அதில் தேப்பி நீண்ட தாடியுடன் ஒருவனை அவன் அடையாளம் காண்பித்தான்.</p>
        <p>அதை கனகராஜூக்கு அனுப்பி அலேபசியில் விசாரிக்க.</p>
        <p>"சார் இவன் சுந்தரம் செயின் பறிப்பு கேஸ். மூணு வருசமா ஆளு அமதியா இருந்தான் இப்போ திருப்பி எரங்கிட்டான் போல. "</p>
        <p>அதை கேட்ட அந்த வாலிபர் "சார் அவன்தான் பணத்த அடிச்சிட்டு புது சிம் வாங்கிட்டு டீ கடையில ஒக்காந்து இரைச்சல்ல கேக்கைலனு நம்பைர சத்தமா சொல்லிர்பான். அதுல அந்த நம்பராட கடசி மூணு எழுத்த அவனுக்கேகா தெரியாம பில் மேல அழுத்திட்டு எழுதிட்டு போயிருக்கான்".</p>
        <p>"உண்மையோவ உனக்கு துப்பாக்கினு பேர் வச்சது சரிதான்,ஆனால் எப்படி அந்த பில் சரியாக என் டேபிள் கு வந்துச்சு "</p>
        <p>"அது எப்படி சார் எனக்கு தெரியும் நீங்க போலீஸ் தான் நீங்கேள கண்டுபுடிங்க முதலாளி திட்டுவாரு நான் போனும் சார்"</p>
        <p>"டேய் துப்பாக்கி" என்பதற்குள் அவன் மைறந்துவிட்டான்.</p>
        <p>அலேபசியில் கனகராஜூடன் பேச்சை தொடர… "சரி அது இருக்கட்டும் அந்த "586" லா முடியுற மொபைல் நம்பைர எல்லா சிம் கடலயும் செக் பண்ண சொல்லுங்க வித்தவன் கண்டிப்பா முழு நம்பரும் வச்சிருப்பான். "சரிங்க சார்"</p>
        <p>சிறுது நேரம் கழித்த பின்பு அந்த முழு நம்பரும் கிடைக்க அதற்கு கால் செய்து பார்க்க வெகுநேரம் ஆகியும் எடுக்கவில்லை. மதன் வைஸ்பர் trace செய்ய செல் ப்ரியாவை தொடர்பு கொண்டு அந்த நம்பைர சொல்கிறார். அவன் சொல்லும் இடத்தை அப்படியே அது காட்டிவிடும் என்பதால்.</p>
        <p>"சார் உங்களுக்கு லொகேஷன் அனுப்பிட்டேடன் "</p>
        <p>அதை பார்த்த மதன். அது வளர் நகர் செக்ேபாஸ்ட் தாண்டி நெடுஞ்சாைலயில் சென்று கொண்டிருந்தது. மதன் அந்த செக் போஸ்ட் அருகில் இருக்கும் காவலாளியை அலேபசியில் அழைத்து அந்த லொகேஷைன் பின் தொடர சொன்னார்.</p>
        <p>அவரும் அந்த இடத்தை நோக்கி செல்ல… திடீெரன அந்த லொகேஷன் டிஸ்கெனக்ட் ஆனது ஒருவேளை அவன் சிம் ஐ உடைத்திருக்கலாம் அவன் கடசியாக எங்கே உடைத்தாேனா அந்த இடத்தை அது காட்டியது. அந்த இடத்திற்கு சென்ற அந்த காவலாளி சுற்றி முற்றி பார்த்தார் இரண்டு பக்கமும் காட்டு பகுதி தொடர்ந்து நீண்டு சென்றது. காட்டிற்குள் தேடுவது அவ்வளவு சுலபம் அல்ல. மதன் மீண்டும் பிரியாவிற்கு கால் செய்கிறார் " அவனோட லாஸ்ட கால் யாராடது அந்த நம்பர் trace பண்ணுங்க ".</p>
        <p>"சார் அந்த நம்பரும் அங்கிருந்து கொஞ்ச தூரத்துல டிஸ்கெனக்ட் ஆகியிருக்கு". "அப்போ இரண்டுேபரும் ஒரு எடத்துல மீட் பண்ணி சிம் ah ஒடச்சுட்டு தப்பிச்சிருக்காங்க "என மதன் நினைக்கிறார். மதனுக்கு அழுத்தம் தைலகேகரியது அவன் கத்திகொண்டிருக்க காவல் நிலையத்தின் வெளியே ஒருவன் தன் பைக்கை திருடிவிட்டதாக புலம்பி கொண்டிருந்தான் அந்த சத்தம் காதில் விழ மதன் வேமலும் அழுத்தமைடந்தார் அதை பார்த்த கனகராஜ் அந்த நபரிடம்</p>
        <p>"எதுக்குயா கத்திட்டே இருக்க பைக் எங்கயா தொலச்ச "</p>
        <p>"சார் அண்ணா நகர் மெடிக்கல் ஷாப் லா மாத்திறைர வாங்க பைக் அ நிறுத்திட்டு போயிட்டு வரதுக்குள்ள ஒருத்தன் வண்டிய எடுத்து போய்ட்டான் "</p>
        <p>" சாவியாட வச்சுட்டு போனியா"</p>
        <p>"ஆமா சார் மறந்து வச்சுட்டு போய்ட்டேன்".</p>
        <p>"இதுக்கு பைக் நீயே அவன் கைல குடுத்துருக்கலாேம " அவனை கடிந்துகொள்ள.</p>
        <p>"மொபைல் நம்பைர சொல்லு கெடச்சதும் கூப்பிடேறாம்" .</p>
        <p>"சார் மொபைல் பைக்கு குள்ளேள இருக்கு வீட்டுக்கு கூட போன் பேச முடியல " என்று அவன் சொன்னதும் மதன் காது விரிந்தது.</p>
        <p>" ஆல் பாக்க எப்படி இருந்தான் "</p>
        <p>" சார் தேப்பி போட்ருந்தான் நீளமா தாடி வச்சிருந்தான்" வேமலும் மதன் காது விரிந்தது.</p>
        <p>" உன் மொபைல் நம்பர் சொல்லு". 9*******01 என்று கூற . "பைக் குள்ள மொபைல் இருக்கறது அவனுக்கு தெரியாது அதவச்சு ஈஸியா trace பண்ணி லொகேஷன் தெரிஞ்சுக்கலாம்".</p>
        <p>அந்த நம்பைர உடேன trace செய்ய ப்ரியைவ தொடர்பு கொள்கிறார் மதன்.</p>
        <p>பிரியா, "சார் நல்லூர் தாண்டி ஒரு பாரஸ்ட் ஏரியால காட்டுது. Map la செக் பண்ணதுல உள்ளேள ஒரு பைழய building இருக்கு".</p>
        <p>மதன் அங்கிருந்து காவலாளியுடன் விரைந்து செல்கிறார் அந்த building ஐ சுற்றி வைளத்து திருடைன் வைளத்து பிடிக்கிறார்கள் அவனிடம் இருந்த செல்போன் பைக் மற்றும் இரண்டு லட்சம் பணம் அனைத்தையும் பறிமுதல் செய்து காவல் நிலையத்துக்கு கொண்டு செல்ல உள்ளேள இன்ஸ்பெக்டர் காளிமுத்து அங்கே வந்திருப்பதாக வெளியே நின்ற காவலாளி ஒருவர் கூற மதன் அவரை சந்தித்து அனைத்தையும் கூறிவிட்டு வெளியே வருகிறார். வந்தவர் பணத்தை இழந்த ராமலிங்கத்தை பார்த்து "ஐயா உங்கள் பணம் கிடைத்துவிட்டது இன்ஸ்பெக்டர்ட்ட வாங்கிக்கேகாங்க ".</p>
        <p>"ரொம்ப நன்றிங்கய்ய ".</p>
        <p>பின்னர் மதன் கெளம்பிவிட்டார்.</p>
        <p>ராமலிங்கம் உள்ளேள சென்று கையெழுத்து போட்டுவிட்டு பணத்தை வாங்கி வெளியே வர அதில் ஒரு லட்சம் ரூபாய் மட்டுேம இருந்தது. பதறிப்போயீ என்னெவன்று கேக்க " அவ்வேளாதான்யா கெடச்சுச்சுனு " பதில் மட்டுேம கேட்டது. வருத்தத்துடன் மனம் உடைந்த அவரின் கால்கள் தளர்ந்து போனது. அவர் காவல் நிலையத்தை விட்டு வெளியற அதை பார்த்த மதனுக்கு அவரின் நிலைம புரிந்தது இருந்தாலும் அவனால் ஒன்றும் செய்யமுடியவில்லை அவன் ராமலிங்கத்திடம். "ஐயா உங்கள நாேன் வீட்டுல கொண்டு வந்து விட்டேரன்னு" சொல்லி அவரை பக்கில் ஏற்றிக்கொண்டு வரும் வழியில் வேறெதுவும் பேசாமேல வந்துகொண்டிருந்தார். மதன் அவரை வீட்டின் வாசலில் விட்டு சென்றார். அங்கே வீடு பூட்டப்பட்டிருந்தது அருகில் இருந்தவர்கள் உங்கள் மைனவியும் மகளும் விபத்தில் சிக்கியதாகவும் அவர்கள் ஆஸ்பத்திரியில் இருப்பதாக கூற வேகமாக அவர் அங்கே புறப்பட்டார்.</p>
        <p>அங்கே இருந்த நர்சிடம் மகள் பெயரையும் மைனவி பெயரையும் கூறி அறை எண்ணை கேட்க அவர் "586" என்ற அறை எண்ணை கூறி அனுப்பி வைத்தார். உள்ளேள சென்றவரிடம் மருத்துவர் பேசினார் " உயிருக்கு எந்த ஆபத்தும் இல்லை எலும்பு உடைந்துருக்கிறது ஒரு ஆபேரஷன் செய்தால் போதும் " பணத்தை வேகமாக செலுத்திவிட சொல்லிவிட்டு கெளம்பிவிட்டார். ராமலிங்கம் மிச்சம் இருந்த ஒரு லட்ச ரூபாைய அங்கே செலவு செய்துவிட்டு சோர்விலும் வருத்தத்திலும் ஒரு நாற்காலியில் அமர்ந்து சாய்ந்து நடந்தவற்றைற சிந்தித்து கொண்டிருந்தார்.</p>
        <p>அதேநரத்தில் இன்ஸ்பெக்டர் காளிமுத்து ஒரு வீட்டிற்குள் சென்று தாயையும் மகைளயும் சந்திக்கிறார். உள்ளேள சென்றவர் தாயிடம் பேச ஆரம்பித்தார். "என் புள்ள உயிராட இருக்கானா அதுக்கு உன் வீட்டுக்காரர் தான்மா காரணம் அந்த நெஞ்சு வலில கூட வண்டிய சாமர்த்தியாம ஓரங்கட்டி நிறுத்திட்டு சரியான நேரத்துல அத்தைன ஸ்கூல் புள்ள உசுைரயும் காப்பாத்திட்டுதான் உயிர விட்ருக்காரு. உங்களுக்கு ஏதாவது உதவி செய்யணும்னு தோணுச்சு இந்தங்கம்மா என்னால முடிஞ்ச உதவி"</p>
        <p>அதில் ஒரு லட்ச ருபாய் பணம் இருந்தது முதலில் அவர்கள் மறுக்கேவ பிறகு அதை வாங்கிக்கொண்டார்கள்.</p>
        <p>அங்கே ஆஸ்பத்திரியில் ராமலிங்கம் ஒரு பைழய செய்தி தாளை பார்த்து கொண்டிருக்க அதை எடுத்து படிக்க ஆரம்பித்தார் அதில் " பள்ளி வேன் ஒட்டி சென்ற ஓட்டுநர் மைலயப்பன் மாரைடப்பு ஏற்பட்டப்போதும் குழந்தைகைள பத்திரமாக காப்பாற்றிவிட்டு உயிர் நீத்தார்" என்ற செய்தியை படித்துவிட்டு அதில் இருந்த அந்த வனின் நம்பர் ப்ளேடை கவனித்தார் அதில் கடசி நம்பர் "586" என்றைத பார்த்ததும் அதிர்ச்சியுற்றார். ஏெனனில் அவருக்கு டிரைவைரயும் அவர் இறப்பையும் முன்பே அறிந்திருந்தார் ஆனால் அந்த நம்பைர தற்போழுதுதான் கவனிக்கிறார்.</p>
        <p>இரண்டு நாட்களுக்கு முன்பு நடந்தவற்றைற நினைத்து பார்க்க…. ராமலிங்கம், அந்த டிரைவர் மைலயப்பன் வீட்டிற்கு சென்று அவர் மைனவியிடம் "ஏன்மா உன் கணவர் இறந்துட்டாருன வாங்கிய கடைன கொடுக்கக்கூடாதுனு எதுவும் இருக்க "</p>
        <p>"ஐயா கண்டிப்பா குடுத்துட்டேரன் இப்போ நெலம சரி இல்ல என் மகள் இந்த மாசம்தான் வேலக்கு போன சம்பளம் வந்ததும் கொஞ்ச கொஞ்சமா ஒரு லச்சத்தை குடுத்துட்டேரன்".</p>
        <p>"ஒரு லட்சமா ஏன் இன்னும் கொறச்சு சொல்லேவண்டிதாேன உன் புருஷன் வாங்குனது இரண்டு லட்சம் ரூவாய்".</p>
        <p>"என் கணவர் ஒரு லட்ச ரூபாய் தான் சொன்னாரு "</p>
        <p>"இல்லமா இரண்டு லட்சம் ரூபாய்தான் வாங்குனாரு "</p>
        <p>பணத்தை</p>
        <p>இருவருக்கும் வாக்குவாதம் முற்ற. ராமலிங்கம் பணம் வரும்வைர அங்கிருந்து நகர்வதாக இல்லை ஆணி அடித்தது போல் அங்கேயே அமர்ந்துவிட்டார். அதை பார்த்த மகள் கையில் போட்டிருந்த வைளயல், கம்மைல அடகு வைத்து இரண்டு லட்ச ரூபாைய கொடுத்து எடுத்து அனுப்பினாள். அந்த செல்லும்போதுதான் பணம் திருட்டுப்போனது. அந்த துன்பமான நிலையில் கூட பொய்யாக ஒரு லட்சத்தை அதிகமாக பெற்றதால் தான் தனக்கு இந்த நிலைம எனவும் "586" என்ற எண் தன்னை ஏன் தொடருகிறது என்பதை ராமலிங்கம் உணர தொடங்கினார். அதனால் தான் அந்த பொய்யாக வாங்கிய ஒரு லட்சம் கைய நினைத்து கொண்டிருக்கையில் ராமலிங்கத்துக்கு வேர்த்து கொட்டி தடுமாற்றம் ஏற்பட அங்கிருந்த தண்ணீர் பாட்டியில் எடுத்து தண்ணீரை மடக் மடக் என குடிக்க ஆரம்பித்தார்.</p>
        <p>நைகயாக மாற்ற</p>
        <p>அதையல்லாம்</p>
        <p>போனது.</p>
        <p>விட்டு</p>
        <p>பின்னர் தன்னை ஆசுவாசப்படுத்தி கொண்டு மெல்ல அமதியான attender ராமலிங்கத்தை தூரத்தில் நின்ற நர்ஸ், "ரூம் நம்பர் "586" யாருங்க" என அழைக்க அவர் மெல்ல எழுந்து நடந்து சென்றார்.</p>
        <p>ஒருவரின் கடினமான நிலையிலயிலும் கூட துன்பம் நேரும் செயல்கைள செய்து தமக்கு நன்ைம காண்பவர் கெடிய விஷத்தைன கொண்ட பாமைப விட கெடியவர் அவர் காலத்தின் சுழலில் சிக்கி துன்பப்படுவார்.</p>
        <p class="text-center text-muted mt-4">எழுத்து : மணிகண்டன். பெ</p>
        <p class="text-center text-muted">***************************</p>
      `
    },
    {
      id: 'story-1',
      title: "The Clockmaker's Secret",
      category: 'Historical Fiction',
      readTime: '6 min read',
      date: 'August 2026',
      excerpt: "In the quiet town of Prague, an aging horologist guards a pocket watch that doesn't measure hours, but moments of true clarity...",
      content: `
        <h4 class="font-serif mb-4 text-center">The Clockmaker’s Secret</h4>
        <p class="lead italic text-center mb-5 text-muted">"Time is not a stream that flows away, but an ocean that surrounds us."</p>
        
        <p>Master Josef sat at his heavy oak workbench, his magnifying loupe pressed tight against his right orbit. The brass gears before him were no larger than sesame seeds, yet each teeth had been filed by hand in the winters of 1912.</p>
        
        <p>Outside his window, the snow began to fall over Prague’s Old Town Square. The famous astronomical clock chimed seven heavy beats into the freezing air. Josef did not look up. His focus was fixed on a small silver chronometer that bore no hands upon its porcelain face.</p>
        
        <p>For forty years, collectors had traveled from Vienna and London trying to purchase the handless watch. They called it Josef's madness. But to those who knew how to listen, the watch did not measure seconds. When wound thrice with a rose-gold key, its ticking matched the heartbeat of whoever held it, slowing down during moments of stillness, accelerating in anger or passion.</p>
        
        <p>"A clock should tell you how much life you have felt, not how much you have lost," Josef whispered to the quiet room, setting his fine tweezers down.</p>
      `
    },
    {
      id: 'story-2',
      title: 'Autumn Leaves in Kyoto',
      category: 'Contemporary Fiction',
      readTime: '4 min read',
      date: 'July 2026',
      excerpt: 'A chance meeting at a centuries-old tea house brings together two strangers running from their pasts...',
      content: `
        <h4 class="font-serif mb-4 text-center">Autumn Leaves in Kyoto</h4>
        <p class="lead italic text-center mb-5 text-muted">"Some conversations stay with us long after the tea grows cold."</p>
        
        <p>The maple leaves at Tenryu-ji temple were the color of spun copper. Rain drizzled softly against the wooden verandah where Clara sat with a steaming bowl of matcha.</p>
        
        <p>An elderly man in a dark kimono sat three paces away, sketching the reflection of the garden pond into a leather notebook. Without raising his head, he spoke in measured English.</p>
        
        <p>"You have been staring at the third maple tree for twenty minutes," he observed gently.</p>
        
        <p>Clara smiled faintly. "I was wondering how long a single leaf holds on before giving in to the wind."</p>
        
        <p>The old man turned a page. "It doesn’t give in to the wind, my dear. It simply trusts the ground."</p>
      `
    },
    {
      id: 'story-3',
      title: 'A Letter to Tomorrow',
      category: 'Inspirational',
      readTime: '5 min read',
      date: 'June 2026',
      excerpt: 'Found inside an antique desk, a letter written in 1944 reveals a timeless message of hope...',
      content: `
        <h4 class="font-serif mb-4 text-center">A Letter to Tomorrow</h4>
        <p class="lead italic text-center mb-5 text-muted">"Write down what you love today so tomorrow remembers why it survived."</p>
        
        <p>When Maya restored the 19th-century writing bureau purchased at a countryside auction, she expected hidden drawers. She did not expect a sealed envelope stamped with a faded violet wax emblem.</p>
        
        <p>The handwriting was sharp and precise:</p>
        
        <p><em>"To whoever opens this desk when the storms have passed: Do not measure your worth by the noise of the world outside. Measure it by the silence you protect within your home, and the kindness you offer without expectation."</em></p>
      `
    }
  ];

  // DOM Elements
  const navbar = document.querySelector('.navbar-novelia');
  const booksGrid = document.getElementById('books-grid');
  const filterPills = document.querySelectorAll('.filter-pill');
  const quickViewModal = document.getElementById('quickViewModal');
  const readerModal = document.getElementById('readerModal');
  const newsletterForm = document.getElementById('newsletter-form');

  // Navbar Scroll Effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Filter Catalog Function
  if (filterPills.length > 0) {
    filterPills.forEach(pill => {
      pill.addEventListener('click', (e) => {
        filterPills.forEach(p => p.classList.remove('active'));
        e.target.classList.add('active');

        const category = e.target.getAttribute('data-filter');
        state.activeFilter = category;
        renderBooksGrid();
      });
    });
  }

  // Render Books Grid dynamically
  function renderBooksGrid() {
    if (!booksGrid) return;

    const filtered = state.activeFilter === 'all' 
      ? booksData 
      : booksData.filter(b => b.category === state.activeFilter);

    booksGrid.innerHTML = '';

    if (filtered.length === 0) {
      booksGrid.innerHTML = `
        <div class="col-12 text-center py-5">
          <p class="text-muted font-serif fs-5">No books found in this category.</p>
        </div>
      `;
      return;
    }

    filtered.forEach(book => {
      const col = document.createElement('div');
      col.className = 'col-md-6 col-lg-4 mb-4';

      col.innerHTML = `
        <article class="book-card">
          <div class="book-cover-container">
            <span class="badge bg-dark text-uppercase font-sans position-absolute top-0 start-0 m-3 px-3 py-2 fw-semibold" style="font-size: 0.65rem; letter-spacing: 0.08em;">${book.badge}</span>
            <img src="${book.cover}" alt="${book.title}" class="book-cover-img" loading="lazy">
            <div class="book-actions-overlay">
              <button class="btn-icon-circle btn-quickview" data-book-id="${book.id}" title="Quick View">
                <i class="bi bi-eye"></i>
              </button>
            </div>
          </div>
          <div class="p-4 d-flex flex-column flex-grow-1 justify-content-between">
            <div>
              <div class="d-flex justify-content-between align-items-center mb-2">
                <span class="badge bg-surface-high text-muted font-sans text-uppercase px-2 py-1" style="font-size: 0.65rem; letter-spacing: 0.08em;">${book.genre}</span>
                <span class="fw-bold text-dark font-sans">₹${book.price}</span>
              </div>
              <h3 class="font-serif h5 text-dark mb-2">${book.title}</h3>
              <div class="d-flex align-items-center gap-1 text-gold mb-3" style="font-size: 0.85rem;">
                <i class="bi bi-star-fill"></i>
                <span class="fw-semibold ms-1 text-dark">${book.rating}</span>
                <span class="text-muted ms-1">(${book.reviewsCount})</span>
              </div>
            </div>
            <div class="mt-2">
              <button class="btn btn-novelia-outline w-100 py-2 btn-quickview" data-book-id="${book.id}">Details</button>
            </div>
          </div>
        </article>
      `;

      booksGrid.appendChild(col);
    });

    attachGridEventListeners();
  }

  // Attach Grid Event Listeners
  function attachGridEventListeners() {
    document.querySelectorAll('.btn-quickview').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const bookId = e.currentTarget.getAttribute('data-book-id');
        openQuickViewModal(bookId);
      });
    });
  }

  // Quick View Modal Population
  function openQuickViewModal(bookId) {
    const book = booksData.find(b => b.id === bookId);
    if (!book) return;

    document.getElementById('qv-book-cover').src = book.cover;
    document.getElementById('qv-book-title').textContent = book.title;
    document.getElementById('qv-book-genre').textContent = book.genre;
    document.getElementById('qv-book-price').textContent = `₹${book.price}`;
    document.getElementById('qv-book-rating').textContent = `${book.rating} (${book.reviewsCount} reviews)`;
    document.getElementById('qv-book-summary').textContent = book.summary;
    document.getElementById('qv-book-format').textContent = book.format;
    document.getElementById('qv-book-pages').textContent = `${book.pages} pages`;
    document.getElementById('qv-book-isbn').textContent = book.isbn;

    const bsModal = new bootstrap.Modal(quickViewModal);
    bsModal.show();
  }

  // Story Reader Modal Handler
  document.querySelectorAll('.btn-open-reader').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const storyId = e.currentTarget.getAttribute('data-story-id');
      openReaderModal(storyId);
    });
  });

  function openReaderModal(storyId) {
    const story = storiesData.find(s => s.id === storyId) || storiesData[0];
    const readerContent = document.getElementById('reader-content-body');

    if (readerContent) {
      readerContent.innerHTML = story.content;
      applyReaderStyles();
    }

    const bsModal = new bootstrap.Modal(readerModal);
    bsModal.show();
  }

  // Reader Controls (Theme & Font Size)
  const fontDecreaseBtn = document.getElementById('font-decrease');
  const fontIncreaseBtn = document.getElementById('font-increase');
  const themeButtons = document.querySelectorAll('[data-reader-theme]');

  if (fontDecreaseBtn && fontIncreaseBtn) {
    fontDecreaseBtn.addEventListener('click', () => {
      if (state.readerFontSize > 14) {
        state.readerFontSize -= 2;
        applyReaderStyles();
      }
    });

    fontIncreaseBtn.addEventListener('click', () => {
      if (state.readerFontSize < 26) {
        state.readerFontSize += 2;
        applyReaderStyles();
      }
    });
  }

  if (themeButtons.length > 0) {
    themeButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const theme = e.currentTarget.getAttribute('data-reader-theme');
        state.readerTheme = theme;
        applyReaderStyles();
      });
    });
  }

  function applyReaderStyles() {
    const readerBody = document.getElementById('reader-content-body');
    if (!readerBody) return;

    readerBody.style.fontSize = `${state.readerFontSize}px`;
    readerBody.className = `reader-modal-body theme-${state.readerTheme}`;
  }



  // Newsletter Form Handler
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('newsletter-email').value;
      if (email) {
        showToast(`Welcome to the Novelia Reader's Circle, ${email}! ✉️`);
        newsletterForm.reset();
      }
    });
  }

  // Toast Notification Utility
  function showToast(message, type = 'info') {
    let toastContainer = document.querySelector('.toast-container');
    if (!toastContainer) {
      toastContainer = document.createElement('div');
      toastContainer.className = 'toast-container position-fixed bottom-0 end-0 p-3';
      document.body.appendChild(toastContainer);
    }

    const toastId = 'toast-' + Date.now();
    const toastHtml = `
      <div id="${toastId}" class="toast align-items-center text-white bg-dark border-0 shadow-lg" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="d-flex">
          <div class="toast-body font-sans px-3 py-3">
            ${message}
          </div>
          <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
      </div>
    `;

    toastContainer.insertAdjacentHTML('beforeend', toastHtml);
    const toastEl = document.getElementById(toastId);
    const bsToast = new bootstrap.Toast(toastEl, { delay: 3500 });
    bsToast.show();

    toastEl.addEventListener('hidden.bs.toast', () => {
      toastEl.remove();
    });
  }

  // Custom ScrollSpy - more reliable than Bootstrap's native implementation
  const navLinks = document.querySelectorAll('.navbar-novelia .nav-link');
  const sections = [];
  const sectionIds = [];

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href && href.startsWith('#') && href.length > 1) {
      const section = document.querySelector(href);
      if (section) {
        sections.push(section);
        sectionIds.push(href.substring(1));
      }
    }
  });

  if (sections.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: '-90px 0px -60% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));

    // Handle click on nav links for smooth scroll
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const target = document.querySelector(targetId);
        if (target) {
          const navHeight = document.querySelector('.navbar-novelia').offsetHeight;
          const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  // Close mobile menu when any anchor link inside the collapse is clicked
  const collapseContent = document.getElementById('navbarContent');
  if (collapseContent) {
    collapseContent.addEventListener('click', (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (anchor && collapseContent.classList.contains('show')) {
        const collapseInstance = bootstrap.Collapse.getInstance(collapseContent);
        if (collapseInstance) {
          collapseInstance.hide();
        }
      }
    });
  }

  // Initial Execution
  renderBooksGrid();

  // WhatsApp Order Modal - open WhatsApp with pre-filled message
  const orderNowBtn = document.querySelector('[data-bs-target="#whatsappOrderModal"]');
  if (orderNowBtn) {
    orderNowBtn.addEventListener('click', () => {
      const whatsappLink = document.getElementById('whatsapp-order-link');
      if (whatsappLink) {
        // Ensure the link is correct (security: use encoded text)
        whatsappLink.href = 'https://wa.me/919597211397?text=' + encodeURIComponent('I want to order this book. please send the payment link and confirm.');
      }
    });
  }

  // Video Players - Mutual Pause & Active State Handling
  const videoElements = document.querySelectorAll('video');
  videoElements.forEach(video => {
    const wrapper = video.closest('.video-player-wrapper');

    video.addEventListener('play', () => {
      if (wrapper) wrapper.classList.add('is-playing');
      videoElements.forEach(otherVideo => {
        if (otherVideo !== video && !otherVideo.paused) {
          otherVideo.pause();
        }
      });
    });

    video.addEventListener('pause', () => {
      if (wrapper) wrapper.classList.remove('is-playing');
    });

    video.addEventListener('ended', () => {
      if (wrapper) wrapper.classList.remove('is-playing');
    });
  });

  // Pause videos when modals open
  const allModals = document.querySelectorAll('.modal');
  allModals.forEach(modal => {
    modal.addEventListener('show.bs.modal', () => {
      videoElements.forEach(video => {
        if (!video.paused) {
          video.pause();
        }
      });
    });
  });
});
