/* English/Arabic content and direction support. Bootstrap is stored locally. */
(() => {
  'use strict';
  const ar = {
    skip:'انتقل إلى المحتوى الرئيسي',nav:'التنقل الرئيسي',home:'intel. الصفحة الرئيسية لاستدامة إنتل',navGoals:'مجالات التركيز',navNewsletter:'النشرة الإخبارية',language:'اللغة',
    eyebrow:'الابتكار. المسؤولية. مستقبل مشترك.',hero:'الاستدامة<br>عبر العصور.',intro:'استكشف رحلة إنتل في الابتكار والمسؤولية البيئية والتزامها بمستقبل أكثر استدامة.',explore:'استكشف الخط الزمني',
    desktop:'مرّر فوق البطاقات لمعاينة القصص، ثم اختر «القصة الكاملة» لمعرفة المزيد. يمكنك أيضًا التنقل باستخدام لوحة المفاتيح.',mobile:'اضغط على «القصة الكاملة» لاستكشاف كل محطة.',timeline:'محطات في الابتكار والاستدامة',previous:'المحطات السابقة',next:'المحطات التالية',timelineRegion:'خط زمني قابل للتمرير لمحطات إنتل',readStory:'القصة الكاملة',close:'أغلق القصة',source:'المصدر:',
    nextChapter:'الفصل التالي',forward:'تقدّم هادف.',focusIntro:'ثلاث أولويات مترابطة لبناء مستقبل أكثر استدامة.',climate:'العمل المناخي',water:'إدارة المياه',circular:'الاقتصاد الدائري',
    climateText:'الاستثمار في الكهرباء المتجددة وكفاءة الطاقة للعمل نحو صافي انبعاثات صفري من العمليات بحلول عام 2040.',waterText:'ترشيد استهلاك المياه في التصنيع ودعم المشاريع التي تعيد المياه إلى الأحواض المائية المحلية.',circularText:'إبقاء المواد قيد الاستخدام من خلال منع النفايات واسترداد المواد وإعادة استخدامها وتدويرها.',learn:'اعرف المزيد',climateLink:' عن العمل المناخي',waterLink:' عن إدارة المياه',circularLink:' عن الاقتصاد الدائري',
    understand:'فهم الأهداف',faq:'نظرة أقرب.',faq1:'ما المقصود بصافي انبعاثات صفري من العمليات؟',answer1:'يشمل التزام إنتل لعام 2040 انبعاثات النطاق الأول الناتجة عن عملياتها وانبعاثات النطاق الثاني المرتبطة بالطاقة المشتراة. وهذا هدف مستقبلي، وليس ادعاءً بأن هذه الانبعاثات وصلت بالفعل إلى صافي الصفر.',faq2:'لماذا تُعدّ المياه مهمة في تصنيع الرقائق؟',answer2:'تُستخدم المياه لتنظيف رقائق السيليكون وتشغيل مرافق التصنيع. ويساعد استخدامها بكفاءة ودعم استعادة الأحواض المائية على حماية مورد تتشاركه المصانع والمجتمعات.',faq3:'أين يمكنني التحقق من المعلومات؟',answer3:'تتضمن كل قصة في الخط الزمني رابطًا إلى مصدر من إنتل. وتضم قائمة المصادر أدناه التقارير التاريخية التي تستند إليها هذه المحطات.',viewSources:'عرض المصادر',
    stayConnected:'ابقَ على اطلاع',newsletter:'تحديثات صغيرة.<br>صورة أشمل.',newsletterIntro:'استكشف الأفكار التي تشكّل مستقبل التكنولوجيا والاستدامة.',demo:'نموذج تجريبي لمشروع دراسي. لا يرسل هذا النموذج معلوماتك أو يخزّنها، ولا يشترك بك في قائمة بريدية تابعة لإنتل.',name:'الاسم (اختياري)',email:'البريد الإلكتروني (مطلوب)',emailHelp:'استخدم عنوانًا مثل name@example.com.',consent:'أرغب في تلقي تحديثات عن الاستدامة. (مطلوب لهذا النموذج التجريبي.)',subscribe:'اشترك',
    sources:'استكشف المصادر',sourcesIntro:'تستند المحطات التاريخية إلى صفحات تاريخ إنتل وأخبارها وتقارير مسؤوليتها المؤسسية. صور الخط الزمني رسوم توضيحية مولّدة بالذكاء الاصطناعي.',footer:'© 2026 لوكا مزهافانادزه · توطين موقع إنتل',student:'مشروع دراسي مستقل، وليس موقعًا رسميًا لشركة إنتل.',backTop:'العودة إلى الأعلى ↑',
    emailRequired:'أدخل عنوان بريدك الإلكتروني.',emailInvalid:'أدخل عنوان بريد إلكتروني صالحًا، مثل name@example.com.',consentRequired:'حدّد هذا المربع للمتابعة في النموذج التجريبي.',success:'تم التحقق من النموذج بنجاح. هذا عرض تجريبي فقط؛ لم تُرسل معلوماتك ولم يتم إنشاء اشتراك.'
  };
  const messages = {emailRequired:'Enter your email address.',emailInvalid:'Enter a valid email address, such as name@example.com.',consentRequired:'Select this checkbox to continue with the demo.',success:'Your form passed validation. This is a demo only; no information was sent and no subscription was created.'};
  // Each image is identified as an illustration, rather than a documentary photograph.
  const milestones = {
    '1968': ['تأسيس إنتل','أسّس روبرت نويس وغوردون مور شركة إنتل عام 1968 مع التزام بالابتكار المستمر.','أسّس روبرت نويس وغوردون مور مشروعهما في 18 يوليو 1968. حملت الأوراق الأولى اسم «إن إم إلكترونيكس»، ثم اختار المؤسسان اسم إنتل المشتق من «الإلكترونيات المتكاملة». بدأت الشركة عملياتها في أغسطس 1968 بفريق يضم نحو اثني عشر مهندسًا، وجعلت البحث والتطوير محورًا لثقافتها.','رسم توضيحي مولّد بالذكاء الاصطناعي لمهندسين في مختبر لأشباه الموصلات في الستينيات','AI-generated illustration of engineers in a 1960s semiconductor laboratory'],
    '1971': ['المعالج إنتل 4004','صدر إنتل 4004 عام 1971 وساعد على وضع معالج قابل للبرمجة على شريحة واحدة.','بدأ مشروع إنتل 4004 بطلب من شركة بوسيكوم اليابانية عام 1969 لتصميم رقائق لآلات حاسبة. اقترح مهندسو إنتل تصميمًا أصغر يتكون من أربع رقائق، إحداها معالج قابل للبرمجة. اكتمل 4004 عام 1971 وأصبح أول معالج دقيق للأغراض العامة. شارك في تطويره تيد هوف وفيديريكو فاجين وستان مازور من إنتل وماساتوشي شيما من بوسيكوم.','رسم توضيحي مولّد بالذكاء الاصطناعي لمعالج مبكر على طاولة عمل إلكترونية','AI-generated illustration of an early processor on an electronics workbench'],
    '1978': ['ظهور المعالج 8086','قدّمت إنتل المعالج 8086 عام 1978، وأرست معمارية أثّرت في أجيال من الحواسيب الشخصية.','قدّمت إنتل المعالج الدقيق 8086 عام 1978 بعد تطوير استغرق نحو 18 شهرًا. تصفه إنتل بأنه تقدم كبير لدعمه تطبيقات أكثر تطلبًا ومرونة، وأصبحت معماريته أساسًا لمعالجات لاحقة. واختير المعالج 8088، وهو نسخة من 8086، للحاسوب الشخصي من آي بي إم الذي ظهر عام 1981.','رسم توضيحي مولّد بالذكاء الاصطناعي لمعالج ومعدات اختبار من أواخر السبعينيات','AI-generated illustration of a processor and late-1970s test equipment'],
    '1985': ['رفع مستوى الأداء مع 386','قدّم معالج إنتل 386 ذو بنية 32 بت، الذي ظهر عام 1985، أكثر من ضعف أداء المعالج 286.','قدّمت إنتل المعالج 80386 المعروف باسم 386 في 17 أكتوبر 1985. احتوى المعالج ذو بنية 32 بت على نحو 275 ألف ترانزستور، وعمل في البداية بتردد 16 ميغاهرتز. ووفقًا لسجل إنتل التاريخي، قدّم أكثر من ضعف أداء 286. عزّز هذا المعالج عائلة x86 ودعم حواسيب شخصية ومحطات عمل أكثر تطورًا.','رسم توضيحي مولّد بالذكاء الاصطناعي لمعالج ومحطة عمل من الثمانينيات','AI-generated illustration of a processor and a 1980s workstation'],
    '2006': ['أداء موفّر للطاقة','بدأت إنتل عام 2006 شحن معالجات تعتمد على معمارية إنتل كور، مع التركيز على كفاءة الطاقة.','بدأت إنتل شحن معالجات تعتمد على معمارية إنتل كور عام 2006. وصف تقرير المسؤولية المؤسسية لذلك العام المعمارية بأنها تقدم في الأداء الموفر للطاقة. وذكر التقرير أن معالجات كور 2 ديو المكتبية قدّمت أداء أعلى بنسبة تصل إلى 40% وكفاءة طاقة أفضل بأكثر من 40% مقارنة بالجيل السابق من معالجات إنتل المكتبية. وتعاونت إنتل أيضًا مع مؤسسات القطاع لتحسين كفاءة مزودات الطاقة.','رسم توضيحي مولّد بالذكاء الاصطناعي لمرفق أشباه موصلات يتحول نحو طاقة أنظف','AI-generated illustration of a semiconductor facility transitioning toward cleaner energy'],
    '2020': ['استراتيجية RISE','أطلقت إنتل استراتيجية RISE لعام 2030 لتعزيز المسؤولية والشمول والاستدامة والتمكين بالتكنولوجيا.','قدّمت إنتل عام 2020 استراتيجية وأهداف المسؤولية المؤسسية لعام 2030. يرمز إطار RISE إلى المسؤولية والشمول والاستدامة والتمكين. قالت إنتل إن الاستراتيجية تهدف إلى عالم أكثر مسؤولية وشمولًا واستدامة بفضل التكنولوجيا وخبرات الموظفين، وإنها توسّع الأهداف لتشمل التعاون مع المورّدين والعملاء والأطراف الأخرى.','رسم توضيحي مولّد بالذكاء الاصطناعي لمجمّع تقني يجمع المياه والطاقة المتجددة والمساحات الخضراء','AI-generated illustration of a technology campus with water, renewable energy, and green space'],
    '2022': ['صافي انبعاثات صفري بحلول 2040','التزمت إنتل بتحقيق صافي انبعاثات صفري من النطاقين الأول والثاني في عملياتها العالمية بحلول عام 2040.','أعلنت إنتل في 13 أبريل 2022 التزامها بتحقيق صافي انبعاثات صفري من غازات الدفيئة في عملياتها العالمية بحلول 2040. يشمل الالتزام انبعاثات النطاق الأول من العمليات والنطاق الثاني المرتبطة بالطاقة المشتراة. وحددت إنتل إجراءات مرحلية لعام 2030، منها السعي لاستخدام كهرباء متجددة بنسبة 100% والاستثمار في ترشيد طاقة المرافق.','رسم توضيحي مولّد بالذكاء الاصطناعي لمجمّع أشباه موصلات مع ألواح شمسية وتوربينات رياح','AI-generated illustration of a semiconductor campus with solar panels and wind turbines'],
    '2023': ['كهرباء متجددة بنسبة 99%','أفادت إنتل بأنها استخدمت كهرباء متجددة بنسبة 99% في عملياتها العالمية عام 2023.','ذكر تقرير إنتل للمسؤولية المؤسسية 2023–2024 أن الشركة استخدمت كهرباء متجددة بنسبة 99% عالميًا خلال 2023. وبلغت النسبة 100% في مواقعها بالولايات المتحدة وأوروبا وماليزيا وفيتنام والصين، واقتربت منها في كوستاريكا. وذكر التقرير أيضًا انخفاض انبعاثات النطاقين الأول والثاني المطلقة بنسبة 43% مقارنة بخط أساس 2019 في تلك الفترة.','رسم توضيحي مولّد بالذكاء الاصطناعي لمصادر طاقة شمسية ورياح ومياه مرتبطة بالتصنيع','AI-generated illustration of solar, wind, and water power supporting manufacturing'],
    '2024': ['قمة إنتل للاستدامة','جمعت أول قمة عالمية للاستدامة نظمتها إنتل أكثر من 140 مؤسسة عام 2024.','في مارس 2024، جمعت إنتل ورعاة آخرون أكثر من 140 مؤسسة في أول قمة عالمية لإنتل للاستدامة. شمل المشاركون شركات ومؤسسات أكاديمية وممثلين حكوميين ومنظمات غير حكومية وجهات صناعية. تناولت المناقشات كيمياء التصنيع المستدام وطرقًا موحّدة لقياس البصمة الكربونية وخططًا متكاملة للوصول إلى صافي انبعاثات صفري.','رسم توضيحي مولّد بالذكاء الاصطناعي لفريق يتعاون حول نموذج لمجمّع أشباه موصلات مستدام','AI-generated illustration of a team collaborating around a sustainable semiconductor campus model']
  };
  const root = document.documentElement;
  const english = new Map();
  document.querySelectorAll('[data-i18n]').forEach(el => english.set(el, el.innerHTML));
  const englishAria = new Map();
  document.querySelectorAll('[data-i18n-aria]').forEach(el => englishAria.set(el,el.getAttribute('aria-label')));
  const originalCards = new Map();
  document.querySelectorAll('.milestone-card').forEach(card => {
    originalCards.set(card,{title:card.querySelector('h3').textContent,preview:card.querySelector('.card-preview p').textContent});
    const img = card.querySelector('img'); img.alt = milestones[card.dataset.year][4]; img.loading='lazy'; img.width=1400; img.height=933;
  });
  document.querySelectorAll('.sources-list a').forEach(el => el.lang='en');
  let validationAttempted=false, succeeded=false;
  const isArabic=()=>root.lang.toLowerCase().split('-')[0]==='ar';
  const message=key=>isArabic()?ar[key]:messages[key];
  function syncDirection(language) {
    const tag=String(language||'en').toLowerCase().replaceAll('_','-');
    const rtl=/(?:^|-)arab(?:-|$)/.test(tag)||/^(ar|he|iw|fa|ur|ps|sd|ug|yi|dv|ku-arab)(-|$)/.test(tag);
    root.dir=rtl?'rtl':'ltr';
    const css=document.getElementById('bootstrap-css');
    const href=rtl?'vendor/bootstrap.rtl.min.css':'vendor/bootstrap.min.css';
    if(css.getAttribute('href')!==href) css.setAttribute('href',href);
  }
  function applyLanguage(language) {
    const lang=language==='ar'?'ar':'en';
    root.lang=lang;syncDirection(lang);
    document.getElementById('language').value=lang;
    for(const [el,value] of english) el.innerHTML=lang==='ar'?(ar[el.dataset.i18n]||value):value;
    for(const [el,value] of englishAria) el.setAttribute('aria-label',lang==='ar'?(ar[el.dataset.i18nAria]||value):value);
    for(const [card,original] of originalCards) {
      const localized=milestones[card.dataset.year];
      card.querySelector('h3').textContent=lang==='ar'?localized[0]:original.title;
      card.querySelector('.card-preview p').textContent=lang==='ar'?localized[1]:original.preview;
      card.querySelector('img').alt=localized[lang==='ar'?3:4];
    }
    document.title=lang==='ar'?'استدامة إنتل | مستقبل مشترك':'Intel Sustainability | A Shared Future';
    if(validationAttempted) validate(false);
    if(succeeded) document.getElementById('form-status').textContent=message('success');
    try{localStorage.setItem('intel-language',lang);}catch{}
  }
  window.localizeStory=(data,id)=>{
    if(!data)return data;
    const localized=milestones[id];
    return isArabic()?{...data,title:localized[0],story:localized[2],imageAlt:localized[3]}:{...data,imageAlt:localized[4]};
  };
  document.getElementById('language').addEventListener('change',event=>applyLanguage(event.target.value));
  // Translation tools can change html/body lang or Google's language selector.
  const observer=new MutationObserver(records=>{
    for(const record of records){
      if(record.attributeName==='lang') syncDirection(record.target.lang||root.lang);
      else if(record.target===root && root.classList.contains('translated-rtl')) syncDirection('ar');
      else if(record.target===root && root.classList.contains('translated-ltr')) syncDirection('en');
    }
  });
  observer.observe(root,{attributes:true,attributeFilter:['lang','class']});
  observer.observe(document.body,{attributes:true,attributeFilter:['lang']});
  document.addEventListener('change',event=>{
    if(event.target.matches('.goog-te-combo')) syncDirection(event.target.value||root.lang);
  });
  const email=document.getElementById('subscriber-email'),consent=document.getElementById('newsletter-consent');
  function showError(field,id,key){
    const error=document.getElementById(id);
    error.textContent=key?message(key):'';error.hidden=!key;
    if(key)field.setAttribute('aria-invalid','true');else field.removeAttribute('aria-invalid');
  }
  function validate(moveFocus){
    const emailKey=!email.value.trim()?'emailRequired':!email.validity.valid?'emailInvalid':null;
    showError(email,'email-error',emailKey);showError(consent,'consent-error',consent.checked?null:'consentRequired');
    if(moveFocus){if(emailKey)email.focus();else if(!consent.checked)consent.focus();}
    return !emailKey&&consent.checked;
  }
  document.getElementById('newsletter-form').addEventListener('submit',event=>{
    event.preventDefault();validationAttempted=true;succeeded=false;
    const status=document.getElementById('form-status');status.textContent='';
    if(validate(true)){succeeded=true;status.textContent=message('success');}
  });
  [email,consent].forEach(field=>field.addEventListener('input',()=>{
    succeeded=false;document.getElementById('form-status').textContent='';
    if(validationAttempted)validate(false);
  }));
  let saved='';try{saved=localStorage.getItem('intel-language');}catch{}
  const requested=new URLSearchParams(location.search).get('lang');
  applyLanguage(requested||saved||(navigator.language.toLowerCase().startsWith('ar')?'ar':'en'));
})();
