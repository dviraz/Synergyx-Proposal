import React from 'react';
import { motion } from 'motion/react';
import { 
  Zap, 
  TrendingUp, 
  Users, 
  Search, 
  Rocket, 
  Mail, 
  Phone, 
  Globe, 
  CheckCircle2, 
  Clock, 
  Activity,
  ArrowLeft,
  ShieldCheck,
  Megaphone,
  Instagram,
  Target
} from 'lucide-react';

const WhatsAppIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={`fill-current ${className}`}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const SynergyxLogo = () => (
  <div className="flex items-center gap-2">
    <div className="relative w-10 h-10 flex items-center justify-center font-bold text-2xl italic text-white bg-gradient-to-br from-red-600 to-orange-500 rounded-xl shadow-lg transform -skew-x-12">
      X
    </div>
    <span className="text-3xl font-black tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-orange-500">
      SYNERGYX
    </span>
  </div>
);

const SectionHeading = ({ title, subtitle }: { title: string, subtitle?: string }) => (
  <div className="mb-12 text-center">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-4xl font-bold text-stone-900 mb-4"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-lg text-stone-600 max-w-2xl mx-auto"
      >
        {subtitle}
      </motion.p>
    )}
    <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-orange-500 mx-auto mt-6 rounded-full" />
  </div>
);

export default function App() {
  return (
    <div dir="rtl" className="min-h-screen bg-stone-50 text-stone-800 font-sans selection:bg-orange-200 selection:text-orange-900 overflow-x-hidden">
      
      {/* Navigation / Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <SynergyxLogo />
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-stone-600">
            <a href="#challenge" className="hover:text-orange-600 transition-colors">האתגר</a>
            <a href="#solution" className="hover:text-orange-600 transition-colors">הפתרון שלנו</a>
            <a href="#roadmap" className="hover:text-orange-600 transition-colors">שלבי עבודה</a>
            <a href="#pricing" className="hover:text-orange-600 transition-colors">השקעה</a>
            <a href="#services" className="hover:text-orange-600 transition-colors">שירותים משלימים</a>
          </div>
          <a href="https://wa.me/972528816696?text=היי%20דביר,%20אשמח%20לדבר%20איתך%20על%20ההצעה%20ליוגה%20לב" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white px-6 py-2.5 rounded-full font-medium hover:bg-[#20bd5a] hover:shadow-lg hover:shadow-[#25D366]/30 transition-all transform hover:-translate-y-0.5 flex items-center gap-2">
            <WhatsAppIcon className="w-5 h-5" />
            <span className="hidden sm:inline">וואטסאפ</span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-orange-100 to-red-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3 -z-10" />
        
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 font-medium text-sm mb-8 border border-orange-200"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            הצעת אופטימיזציה ושיפור ביצועים
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-stone-900 leading-tight mb-6 tracking-tight"
          >
            מזניקים את ביצועי האתר של <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">יוגה לב</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-stone-600 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            אופטימיזציה טכנית מקיפה לשיפור דרמטי במהירות האתר (yogalev.co.il), שדרוג חוויית המשתמש ומניעת נטישת גולשים עקב זמני טעינה ארוכים.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="#challenge" className="w-full sm:w-auto px-8 py-4 bg-stone-900 text-white rounded-full font-medium hover:bg-stone-800 transition-colors flex items-center justify-center gap-2">
              לצפייה בהצעה <ArrowLeft className="w-4 h-4" />
            </a>
            <div className="text-sm text-stone-500 font-medium">
              מוגש בתאריך: {new Date().toLocaleDateString('he-IL', { month: 'long', year: 'numeric' })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Challenge */}
      <section id="challenge" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeading 
            title="האתגר המרכזי: זמני טעינה וביצועי האתר" 
            subtitle="בבדיקה טכנית שערכנו לאתר yogalev.co.il, זיהינו פוטנציאל עסקי רב שמתפספס עקב חסמים טכניים."
          />

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-stone-900">מדוע מהירות האתר קריטית להצלחת הסטודיו?</h3>
              <p className="text-stone-600 text-lg leading-relaxed">
                אתר איטי פוגע ישירות ביחסי ההמרה ובשורת הרווח. בבדיקות PageSpeed של גוגל, האתר מציג זמני טעינה הדורשים שיפור מיידי.
              </p>
              
              <ul className="space-y-4 mt-8">
                {[
                  { icon: Users, title: 'נטישת גולשים', desc: 'מעל 50% מהגולשים נוטשים אתר שזמן הטעינה שלו עולה על 3 שניות.' },
                  { icon: Search, title: 'פגיעה בדירוג האורגני (SEO)', desc: 'גוגל מתעדפת אתרים מהירים ודוחקת מטה אתרים בעלי ביצועים ירודים.' },
                  { icon: Activity, title: 'חוויית משתמש (UX)', desc: 'אתר איטי משדר חוסר מקצועיות ופוגע בתדמית האיכותית של "יוגה לב".' }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-stone-50 border border-stone-100 hover:border-orange-200 transition-colors">
                    <div className="p-3 bg-orange-100 text-orange-600 rounded-xl shrink-0">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-stone-900">{item.title}</h4>
                      <p className="text-stone-600 text-sm mt-1">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-orange-500/5 rounded-3xl transform rotate-3 scale-105 -z-10" />
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-stone-100">
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-stone-100">
                  <div>
                    <div className="text-sm font-medium text-stone-500 mb-1">Google PageSpeed Insights</div>
                    <div className="text-xl font-bold text-stone-900">yogalev.co.il</div>
                  </div>
                  <Globe className="w-8 h-8 text-stone-300" />
                </div>

                <div className="flex justify-center mb-8">
                  <div className="relative w-48 h-48 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="45" fill="none" stroke="#f5f5f4" strokeWidth="10" />
                      <circle cx="50" cy="50" r="45" fill="none" stroke="#ef4444" strokeWidth="10" strokeDasharray="283" strokeDashoffset="180" className="transition-all duration-1000" />
                    </svg>
                    <div className="absolute flex flex-col items-center">
                      <span className="text-5xl font-black text-red-500">36</span>
                      <span className="text-sm font-medium text-stone-500 mt-1">ציון נוכחי (מובייל)</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  <div className="flex justify-between text-sm">
                    <span className="text-stone-500">זמן תגובה ראשוני (TTFB)</span>
                    <span className="font-bold text-red-500">2.4s (איטי)</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-stone-500">טעינת תוכן מרכזי (LCP)</span>
                    <span className="font-bold text-red-500">4.8s (דורש שיפור)</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-stone-500">יציבות ויזואלית (CLS)</span>
                    <span className="font-bold text-orange-500">0.15 (סביר)</span>
                  </div>
                </div>

                <a 
                  href="https://pagespeed.web.dev/analysis/https-yogalev-co-il/667v70p880?form_factor=mobile" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl border border-stone-200 text-stone-600 font-bold text-sm hover:bg-stone-50 transition-colors flex items-center justify-center gap-2"
                >
                  <Search className="w-4 h-4" />
                  לצפייה בדו"ח המלא של גוגל
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section id="solution" className="py-24 px-6 bg-stone-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] bg-gradient-to-b from-orange-500/20 to-transparent rounded-full blur-3xl" />
          <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] bg-gradient-to-t from-red-600/20 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">הפתרון הטכנולוגי שלנו</h2>
            <p className="text-lg text-stone-400 max-w-2xl mx-auto">טיפול שורש מעמיק בקוד ובשרת שיאיץ את האתר שלכם משמעותית וישפר את הדירוג במנועי החיפוש.</p>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-orange-500 mx-auto mt-6 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Zap,
                title: 'מערכת מטמון (Caching)',
                desc: 'הגדרת מערכת Caching מתקדמת ברמת השרת והדפדפן להגשה מיידית של עמודי האתר למבקרים חוזרים וחדשים.'
              },
              {
                icon: Activity,
                title: 'אופטימיזציית תמונות',
                desc: 'דחיסת תמונות והמרתן לפורמט WebP קל משקל, לצד הטמעת מנגנון Lazy Loading לטעינה חכמה.'
              },
              {
                icon: ShieldCheck,
                title: 'מיניפיקציה (Minification)',
                desc: 'ניקוי ודחיסה של קבצי CSS, JavaScript ו-HTML להקטנת משקל העמודים והאצת זמן התגובה הראשוני.'
              },
              {
                icon: Clock,
                title: 'דחיית סקריפטים',
                desc: 'טעינה אסינכרונית של סקריפטים חיצוניים (כמו פיקסלים ופונטים) כדי למנוע עיכוב בתצוגת התוכן המרכזי.'
              },
              {
                icon: Search,
                title: 'שיפור Core Web Vitals',
                desc: 'טיפול במדדי הליבה של גוגל (LCP, FID, CLS) להבטחת חוויית גלישה חלקה ומניעת קפיצות תוכן.'
              },
              {
                icon: Rocket,
                title: 'ייעול מסד הנתונים',
                desc: 'ניקוי מסד הנתונים (Database) של האתר, הסרת שאריות קוד מתוספים ישנים וייעול שאילתות.'
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-stone-800/50 backdrop-blur-sm border border-stone-700/50 p-8 rounded-3xl hover:bg-stone-800 transition-colors group"
              >
                <div className="w-14 h-14 bg-stone-900 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-stone-700">
                  <feature.icon className="w-7 h-7 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-stone-400 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="py-24 px-6 bg-stone-50">
        <div className="max-w-4xl mx-auto">
          <SectionHeading 
            title="שלבי העבודה (Roadmap)" 
            subtitle="תהליך עבודה מובנה ושקוף, המבטיח שיפור ניכר ומדיד בביצועי האתר."
          />

          <div className="space-y-8 relative before:hidden md:before:block before:absolute before:inset-0 md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-stone-200 before:to-transparent">
            {[
              {
                phase: 'שלב 1',
                title: 'גיבוי מלא ואבחון מעמיק',
                desc: 'לפני ביצוע שינויים כלשהם, ניצור גיבוי מלא של האתר ומסד הנתונים. לאחר מכן נבצע סריקה טכנית לאיתור כל צווארי הבקבוק.',
                icon: ShieldCheck
              },
              {
                phase: 'שלב 2',
                title: 'יישום טכני ואופטימיזציה',
                desc: 'ביצוע כל הפעולות הטכניות בשרת ובאתר: כיווץ תמונות, הגדרת מטמון, צמצום קוד ודחיית סקריפטים.',
                icon: Zap
              },
              {
                phase: 'שלב 3',
                title: 'בדיקות QA והגשת דוח',
                desc: 'בדיקה מקיפה של תקינות האתר בכל המכשירים, הרצת בדיקות PageSpeed חוזרות והגשת דוח ביצועים מפורט (לפני ואחרי).',
                icon: CheckCircle2
              }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative flex flex-col md:flex-row items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active gap-4 md:gap-0"
              >
                <div className="flex items-center justify-center w-16 h-16 md:w-14 md:h-14 rounded-full border-4 border-stone-50 bg-white shadow-lg text-orange-600 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 mb-2 md:mb-0">
                  <step.icon className="w-7 h-7 md:w-6 md:h-6" />
                </div>
                <div className="w-full md:w-[calc(50%-3rem)] p-6 md:p-8 rounded-3xl bg-white border border-stone-100 shadow-sm hover:shadow-md transition-shadow text-center md:text-right">
                  <div className="text-sm font-bold text-orange-600 mb-1">{step.phase}</div>
                  <h4 className="text-xl font-bold text-stone-900 mb-2">{step.title}</h4>
                  <p className="text-stone-600">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing (Speed) */}
      <section id="pricing" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeading 
            title="ההשקעה שלכם" 
            subtitle="הצעה מיוחדת לטיפול בביצועי האתר."
          />

          <div className="max-w-2xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-stone-900 rounded-3xl p-6 sm:p-8 md:p-12 border border-stone-800 flex flex-col relative overflow-hidden shadow-2xl shadow-orange-900/20"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-red-600 to-orange-500 blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2" />
              
              <div className="absolute top-6 left-6 bg-gradient-to-r from-red-600 to-orange-500 text-white text-sm font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                הטבת חודש מרץ
              </div>

              <div className="mb-8 relative z-10 text-center mt-8 sm:mt-0">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">אופטימיזציית מהירות מקיפה</h3>
                <p className="text-stone-400 text-base sm:text-lg">פרויקט חד-פעמי להאצת האתר ושיפור חוויית המשתמש.</p>
              </div>
              
              <div className="mb-10 relative z-10 flex flex-col items-center">
                <div className="text-stone-500 line-through text-xl sm:text-2xl mb-1 font-medium">₪2,500</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">₪1,500</span>
                </div>
                <div className="text-xs sm:text-sm text-stone-400 mt-3 bg-stone-800/50 px-4 py-1.5 rounded-full border border-stone-700">תשלום חד-פעמי | לא כולל מע"מ</div>
              </div>

              <ul className="space-y-1 mb-10 flex-1 relative z-10 max-w-md mx-auto w-full">
                {[
                  'גיבוי מלא של האתר טרם תחילת העבודה',
                  'הטמעת מערכת Caching מתקדמת',
                  'כיווץ ואופטימיזציה לכלל התמונות באתר',
                  'צמצום קבצי קוד (JS, CSS, HTML)',
                  'דחיית טעינת סקריפטים חיצוניים',
                  'דוח ביצועים מפורט (לפני ואחרי)'
                ].map((feature, i) => (
                  <li key={i} className={`flex items-start gap-3 text-stone-300 p-3 rounded-xl transition-colors hover:bg-white/10 ${i % 2 === 0 ? 'bg-white/5' : ''}`}>
                    <CheckCircle2 className="w-6 h-6 text-orange-500 shrink-0" />
                    <span className="text-lg">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4 relative z-10">
                <a href="https://wa.me/972528816696?text=היי%20דביר,%20אני%20רוצה%20להתקדם%20עם%20האצת%20האתר" target="_blank" rel="noopener noreferrer" className="flex-1 py-4 rounded-2xl font-bold text-lg text-center bg-[#25D366] text-white hover:bg-[#20bd5a] hover:shadow-lg hover:shadow-[#25D366]/25 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
                  <WhatsAppIcon className="w-6 h-6" />
                  שליחת הודעה לתיאום
                </a>
                <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=dvirazz@gmail.com&item_name=Website%20Speed%20Optimization&amount=1500&currency_code=ILS" target="_blank" rel="noopener noreferrer" className="flex-1 py-4 rounded-2xl font-bold text-lg text-center bg-[#003087] text-white hover:bg-[#00205c] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                    <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zM19.349 6.53c-.11-.53-.34-1.01-.68-1.42-.64-.78-1.74-1.15-3.21-1.15H8.01L5.89 17.3h3.28l.96-6.07c.08-.52.52-.9 1.05-.9h2.19c3.16 0 5.81-1.28 6.54-5.05.02-.1.04-.2.06-.31.02-.14.03-.29.04-.44z"/>
                  </svg>
                  תשלום ב-PayPal
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Marketing Services */}
      <section id="services" className="py-24 px-6 bg-stone-100 border-t border-stone-200">
        <div className="max-w-6xl mx-auto">
          <SectionHeading 
            title="שירותי שיווק משלימים לצמיחה דיגיטלית" 
            subtitle="מעבר לשיפור מהירות האתר, אנו מציעים חבילות ליווי חודשיות להגדלת נפח הפניות והנרשמים לסטודיו."
          />

          <div className="grid md:grid-cols-2 gap-8">
            {/* SEO Package */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 border border-stone-200 flex flex-col hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6 text-orange-600">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-stone-900 mb-2">קידום אורגני (SEO)</h3>
              <p className="text-stone-600 mb-6 min-h-[48px]">בניית נוכחות ארוכת טווח במנועי החיפוש והזרמת תנועה איכותית לאתר.</p>
              
              <div className="mb-8 pb-8 border-b border-stone-100">
                <div className="text-3xl font-black text-stone-900">₪3,500</div>
                <div className="text-sm text-stone-500 mt-1">לחודש | לא כולל מע"מ</div>
                <div className="mt-4 inline-flex items-center gap-1.5 bg-orange-50 text-orange-700 text-xs font-bold px-3 py-1.5 rounded-full border border-orange-100">
                  <Zap className="w-3 h-3" />
                  + ₪3,000 דמי הקמה (חודש ראשון)
                </div>
              </div>

              <ul className="space-y-1 mb-8 flex-1">
                {[
                  'מחקר מילות מפתח מעמיק',
                  'אופטימיזציית מבנה ותוכן (On-Page)',
                  'בניית פרופיל קישורים איכותי (Off-Page)',
                  'אופטימיזציה טכנית שוטפת',
                  'דוח התקדמות חודשי מפורט'
                ].map((feature, i) => (
                  <li key={i} className={`flex items-start gap-3 text-stone-700 text-sm p-2.5 rounded-xl transition-colors hover:bg-orange-50 ${i % 2 === 0 ? 'bg-stone-50' : ''}`}>
                    <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* PPC Package */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-3xl p-8 border border-stone-200 flex flex-col hover:shadow-xl transition-shadow relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-red-600 to-orange-500" />
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6 text-orange-600">
                <Megaphone className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-stone-900 mb-2">ניהול קמפיינים (PPC)</h3>
              <p className="text-stone-600 mb-6 min-h-[48px]">פרסום ממוקד בגוגל וברשתות החברתיות להבאת מתאמנים חדשים באופן מיידי.</p>
              
              <div className="mb-8 pb-8 border-b border-stone-100">
                <div className="text-3xl font-black text-stone-900">₪2,800</div>
                <div className="text-sm text-stone-500 mt-1">לחודש (דמי ניהול) | לא כולל מע"מ</div>
                <div className="mt-4 inline-flex items-center gap-1.5 bg-orange-50 text-orange-700 text-xs font-bold px-3 py-1.5 rounded-full border border-orange-100">
                  <Zap className="w-3 h-3" />
                  + ₪2,000 דמי הקמה (הקמת קמפיינים)
                </div>
              </div>

              <ul className="space-y-1 mb-8 flex-1">
                {[
                  'הקמה וניהול קמפיינים בגוגל',
                  'ניהול קמפיינים בפייסבוק ואינסטגרם',
                  'עיצוב קריאייטיב וכתיבת מודעות',
                  'אופטימיזציה שוטפת להוזלת עלויות ליד',
                  'לא כולל תקציב מדיה (תשלום לפלטפורמות)'
                ].map((feature, i) => (
                  <li key={i} className={`flex items-start gap-3 text-stone-700 text-sm p-2.5 rounded-xl transition-colors hover:bg-orange-50 ${i % 2 === 0 ? 'bg-stone-50' : ''}`}>
                    <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Social Media Package */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl p-8 border border-stone-200 flex flex-col hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6 text-orange-600">
                <Instagram className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-stone-900 mb-2">ניהול סושיאל ותוכן</h3>
              <p className="text-stone-600 mb-6 min-h-[48px]">תחזוקת עמודי הפייסבוק והאינסטגרם ליצירת קהילה מעורבת ונאמנה.</p>
              
              <div className="mb-8 pb-8 border-b border-stone-100">
                <div className="text-3xl font-black text-stone-900">₪4,500</div>
                <div className="text-sm text-stone-500 mt-1">לחודש | לא כולל מע"מ</div>
                <div className="mt-4 inline-flex items-center gap-1.5 bg-orange-50 text-orange-700 text-xs font-bold px-3 py-1.5 rounded-full border border-orange-100">
                  <Zap className="w-3 h-3" />
                  + ₪1,500 דמי הקמה (אסטרטגיה ושפה)
                </div>
              </div>

              <ul className="space-y-1 mb-8 flex-1">
                {[
                  'יצירת גאנט תוכן חודשי מותאם אישית',
                  'עיצוב ופרסום של 3 פוסטים/רילס בשבוע',
                  'כתיבת פוסטים שיווקיים ובעלי ערך',
                  'עיצוב והעלאת סטוריז שוטפים',
                  'ניהול תגובות והודעות (מענה ראשוני)'
                ].map((feature, i) => (
                  <li key={i} className={`flex items-start gap-3 text-stone-700 text-sm p-2.5 rounded-xl transition-colors hover:bg-orange-50 ${i % 2 === 0 ? 'bg-stone-50' : ''}`}>
                    <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Analytics & Tracking Package */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-3xl p-8 border border-stone-200 flex flex-col hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6 text-orange-600">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-stone-900 mb-2">אנליטיקס והמרות</h3>
              <p className="text-stone-600 mb-6 min-h-[48px]">הטמעה מדויקת של קודי מעקב למדידת המרות, אירועי משתמש והחזר השקעה (ROI).</p>
              
              <div className="mb-8 pb-8 border-b border-stone-100">
                <div className="text-3xl font-black text-stone-900">₪1,200</div>
                <div className="text-sm text-stone-500 mt-1">תשלום חד-פעמי | לא כולל מע"מ</div>
              </div>

              <ul className="space-y-1 mb-8 flex-1">
                {[
                  'הקמה והגדרת Google Analytics 4',
                  'הטמעת Facebook Pixel ו-Conversions API',
                  'הגדרת המרות (Conversions) ואירועי רכישה',
                  'מעקב אחרי טפסים, שיחות והקלקות',
                  'ניהול תגיות דרך Google Tag Manager',
                  'בדיקת תקינות נתונים (QA)'
                ].map((feature, i) => (
                  <li key={i} className={`flex items-start gap-3 text-stone-700 text-sm p-2.5 rounded-xl transition-colors hover:bg-orange-50 ${i % 2 === 0 ? 'bg-stone-50' : ''}`}>
                    <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer / CTA */}
      <footer id="contact" className="bg-stone-950 text-white py-20 px-6 border-t border-stone-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">מוכנים לקחת את יוגה לב לשלב הבא?</h2>
          <p className="text-xl text-stone-400 mb-10 max-w-2xl mx-auto">
            נשמח לקבוע פגישת היכרות קצרה (בזום או פרונטלית) כדי לעבור על ההצעה, לענות על שאלות ולהתחיל לעבוד יחד.
          </p>
          
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-6 mb-16">
            <a href="https://wa.me/972528816696?text=היי%20דביר,%20אשמח%20לדבר%20איתך%20על%20ההצעה%20ליוגה%20לב" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-stone-300 hover:text-[#25D366] transition-colors group">
              <div className="w-12 h-12 rounded-full bg-stone-900 flex items-center justify-center border border-stone-800 group-hover:border-[#25D366] transition-colors">
                <WhatsAppIcon className="w-5 h-5" />
              </div>
              <span className="font-medium text-lg" dir="ltr">052-8816696</span>
            </a>
            <a href="mailto:dvir@synergyx.pro" className="flex items-center gap-3 text-stone-300 hover:text-white transition-colors group">
              <div className="w-12 h-12 rounded-full bg-stone-900 flex items-center justify-center border border-stone-800 group-hover:border-white transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <span className="font-medium text-lg">dvir@synergyx.pro</span>
            </a>
          </div>

          <div className="pt-10 border-t border-stone-900 flex flex-col md:flex-row items-center justify-between gap-4">
            <SynergyxLogo />
            <div className="text-stone-500 text-sm">
              © {new Date().getFullYear()} Synergyx Digital Marketing. כל הזכויות שמורות.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
