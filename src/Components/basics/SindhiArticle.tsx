const SindhiArticle = () => {
  return (
    <main className="min-h-screen bg-gray-100 py-10">
      <article
        dir="rtl"
        lang="sd"
        className="mx-auto max-w-4xl rounded-2xl bg-white p-8 shadow-lg"
        style={{ fontFamily: "MBSindhiWeb" }}
      >
        {/* Title */}
        <header className="mb-8 border-b border-gray-200 pb-6">
          <h1 className="text-right text-4xl font-bold text-gray-900">
            سنڌي ٻولي جي اهميت
          </h1>

          <p className="mt-3 text-right text-sm text-gray-500">
            شايع ٿيل: 17 جولاءِ 2026
            ABCDEFGHI
          </p>
        </header>

        {/* Article */}
        <section className="space-y-6 text-right text-xl leading-loose text-gray-800">
          <p>
            سنڌي دنيا جي قديم ۽ شاهوڪار ٻولين مان هڪ آهي. هن ٻوليءَ ۾
            هزارين سالن جي تاريخ، ادب، شاعري ۽ ثقافت محفوظ ٿيل آهي. سنڌي
            صرف ڳالهائڻ جي ٻولي نه پر هڪ مڪمل تهذيب جي نمائندگي ڪري ٿي.
          </p>

          <p>
            جديد دور ۾ ٽيڪنالاجي جي واڌ سان گڏ سنڌي ٻولي کي به انٽرنيٽ،
            ويب سائيٽن، موبائل ايپليڪيشنن ۽ سوشل ميڊيا تي وڌيڪ استعمال ڪرڻ
            جي ضرورت آهي ته جيئن نئين نسل پنهنجي ٻولي سان ڳنڍيل رهي.
          </p>

          <h2 className="pt-4 text-2xl font-bold text-gray-900">
            سنڌي ٻولي جا فائدا
          </h2>

          <ul className="list-inside list-disc space-y-2">
            <li>ثقافت ۽ سڃاڻپ کي محفوظ رکي ٿي.</li>
            <li>ادب، شاعري ۽ تاريخ کي ايندڙ نسل تائين پهچائي ٿي.</li>
            <li>تعليم ۽ تحقيق ۾ اهم ڪردار ادا ڪري ٿي.</li>
            <li>مقامي ماڻهن جي وچ ۾ رابطي کي مضبوط بڻائي ٿي.</li>
          </ul>

          <h2 className="pt-4 text-2xl font-bold text-gray-900">
            نتيجو
          </h2>

          <p>
            جيڪڏهن اسان سنڌي ٻولي کي روزمره جي زندگي، تعليم ۽ ٽيڪنالاجي ۾
            استعمال ڪنداسين ته اها مستقبل ۾ وڌيڪ مضبوط ٿيندي. هر فرد جي
            ذميواري آهي ته پنهنجي مادري ٻوليءَ جي واڌ ويجهه ۾ پنهنجو ڪردار
            ادا ڪري.
          </p>

          <blockquote className="border-r-4 border-blue-500 bg-blue-50 p-4 italic text-blue-800">
            "پنهنجي مادري ٻولي سان محبت، پنهنجي سڃاڻپ سان محبت آهي."
          </blockquote>
        </section>

        {/* Footer */}
        <footer className="mt-10 border-t border-gray-200 pt-6 text-right text-sm text-gray-500">
          ليکڪ: عبدالشڪور
        </footer>
      </article>
    </main>
  );
};

export default SindhiArticle;