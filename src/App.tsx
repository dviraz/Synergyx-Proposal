import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { 
  Zap, TrendingUp, Users, Search, Rocket, Mail, Phone, Globe, 
  CheckCircle2, Clock, Activity, ArrowLeft, ShieldCheck, Megaphone,
  Instagram, Target, ShieldAlert, BarChart3, Tags, Smartphone, 
  Lock, FileText, Cookie, AlertTriangle, CreditCard
} from 'lucide-react';

// Fetch from same origin — Vercel serverless proxy handles HTTP→VPS
const API_URL = '';

// ── Types ──
interface Proposal {
  id: string;
  businessName: string;
  domain: string;
  url: string;
  ps: number;
  issues: string[];
  tracking: string[];
  cms: string;
  niche: string;
  phones: string[];
  emails: string[];
  whatsapp: boolean;
  challenges: { icon: string; title: string; desc: string }[];
  services: string[];
  competitor: { name: string; domain: string; ps: number } | null;
}

// ── Icon Map ──
const iconMap: Record<string, any> = {
  Activity, Target, Tags, Search, Smartphone, Lock, FileText, ShieldAlert, BarChart3,
  Users, Zap, Clock, ShieldCheck, Rocket, Megaphone, AlertTriangle, Cookie
};

// ── Service Packages ──
const ALL_PACKAGES: Record<string, any> = {
  speed: {
    icon: Zap,
    title: 'אופטימיזציית מהירות',
    desc: 'האצת האתר, שיפור ציון PageSpeed ומניעת נטישת גולשים.',
    price: '₪1,500',
    priceNote: 'חד-פעמי',
    originalPrice: '₪2,500',
    features: [
      'גיבוי מלא לפני תחילת עבודה',
      'הטמעת מערכת Caching מתקדמת',
      'כיווץ ואופטימיזציה לכלל התמונות',
      'צמצום קבצי קוד (JS, CSS, HTML)',
      'דחיית טעינת סקריפטים חיצוניים',
      'דוח ביצועים מפורט (לפני ואחרי)',
    ],
    highlight: true,
    badge: 'הכי נמכר'
  },
  cookies: {
    icon: Cookie,
    title: 'ציות לפרטיות (Cookie Consent)',
    desc: 'התקנת חלון הסכמת עוגיות ומדיניות פרטיות בהתאם לתיקון 13 לחוק הגנת הפרטיות.',
    price: '₪800',
    priceNote: 'חד-פעמי',
    features: [
      'התקנת באנר Cookie Consent מעוצב',
      'הגדרת קטגוריות עוגיות (הכרחי/שיווקי/סטטיסטי)',
      'חסימת סקריפטים עד לאישור הגולש',
      'עמוד מדיניות פרטיות בהתאם לחוק',
      'תאימות לתיקון 13 לחוק הגנת הפרטיות',
      'הימנעות מקנסות של עד ₪3.2 מיליון',
    ],
    highlight: false,
    badge: '⚖️ חובה חוקית'
  },
  analytics: {
    icon: Target,
    title: 'אנליטיקס ומעקב המרות',
    desc: 'הטמעת כלי מעקב למדידת ביצועים, המרות והחזר השקעה.',
    price: '₪1,200',
    priceNote: 'חד-פעמי',
    features: [
      'הקמה והגדרת Google Analytics 4',
      'הטמעת Facebook Pixel',
      'הגדרת Google Tag Manager',
      'מעקב המרות (טפסים, שיחות, קליקים)',
      'דשבורד נתונים מותאם אישית',
      'בדיקת תקינות נתונים (QA)',
    ],
    highlight: false,
    badge: null
  },
  seo: {
    icon: Search,
    title: 'קידום אורגני (SEO)',
    desc: 'בניית נוכחות במנועי חיפוש והגדלת תנועה איכותית לאתר.',
    price: '₪3,500',
    priceNote: 'לחודש',
    setupFee: '₪3,000 דמי הקמה',
    features: [
      'מחקר מילות מפתח מעמיק',
      'אופטימיזציית מבנה ותוכן (On-Page)',
      'בניית פרופיל קישורים (Off-Page)',
      'תיקון Schema Markup ו-Meta Tags',
      'אופטימיזציה טכנית שוטפת',
      'דוח התקדמות חודשי מפורט',
    ],
    highlight: false,
    badge: null
  },
  ppc: {
    icon: Megaphone,
    title: 'ניהול קמפיינים (PPC)',
    desc: 'פרסום ממוקד בגוגל וברשתות החברתיות להבאת לקוחות חדשים.',
    price: '₪2,800',
    priceNote: 'לחודש (דמי ניהול)',
    setupFee: '₪2,000 דמי הקמה',
    features: [
      'הקמה וניהול קמפיינים בגוגל',
      'ניהול קמפיינים בפייסבוק ואינסטגרם',
      'עיצוב קריאייטיב וכתיבת מודעות',
      'אופטימיזציה שוטפת להוזלת עלויות',
      'לא כולל תקציב מדיה',
    ],
    highlight: false,
    badge: null
  },
  social: {
    icon: Instagram,
    title: 'ניהול סושיאל ותוכן',
    desc: 'תחזוקת רשתות חברתיות ליצירת קהילה מעורבת.',
    price: '₪4,500',
    priceNote: 'לחודש',
    setupFee: '₪1,500 דמי הקמה',
    features: [
      'גאנט תוכן חודשי מותאם',
      'עיצוב ופרסום 3 פוסטים/רילס בשבוע',
      'כתיבת פוסטים שיווקיים',
      'סטוריז שוטפים',
      'ניהול תגובות והודעות',
    ],
    highlight: false,
    badge: null
  }
};

// ── Components ──
const WhatsAppIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={`fill-current ${className}`}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const SynergyxLogo = () => (
  <div className="flex items-center gap-2">
    <div className="relative w-10 h-10 flex items-center justify-center font-bold text-2xl italic text-white bg-gradient-to-br from-red-600 to-orange-500 rounded-xl shadow-lg transform -skew-x-12">X</div>
    <span className="text-3xl font-black tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-orange-500">SYNERGYX</span>
  </div>
);

function psColor(ps: number) {
  if (ps <= 30) return '#ef4444';
  if (ps <= 50) return '#f59e0b';
  return '#4ade80';
}

function psStrokeDash(ps: number) {
  return 283 - (283 * ps / 100);
}

// ── Testimonial Screenshots ──
const TESTIMONIALS = [
  { src: '/testimonial-1.png', label: 'מיכל — סטודיו יוגה' },
  { src: '/testimonial-2.png', label: 'יוסי — אינסטלטור' },
  { src: '/testimonial-3.png', label: 'רונית — קליניקה לאסתטיקה' },
  { src: '/testimonial-4.png', label: 'אבי — קבלן שיפוצים' },
];

// ── Main App ──
export default function App() {
  const [data, setData] = useState<Proposal | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    if (!id) {
      setError('no-id');
      setLoading(false);
      return;
    }
    fetch(`${API_URL}/api/proposal/${id}`)
      .then(r => { if (!r.ok) throw new Error('not found'); return r.json(); })
      .then(d => { setData(d); setLoading(false); })
      .catch(() => { setError('not-found'); setLoading(false); });
  }, []);

  if (loading) return (
    <div className="min-h-screen bg-stone-950 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-stone-400">טוען הצעה...</p>
      </div>
    </div>
  );

  if (error || !data) return (
    <div className="min-h-screen bg-stone-950 flex items-center justify-center p-6">
      <div className="text-center max-w-md">
        <SynergyxLogo />
        <p className="text-stone-400 mt-8 text-lg">
          {error === 'no-id' ? 'לינק לא תקין — חסר מזהה הצעה.' : 'ההצעה לא נמצאה.'}
        </p>
      </div>
    </div>
  );

  const d = data;
  const waText = encodeURIComponent(`היי, קיבלתי את ההצעה עבור ${d.businessName}. אשמח לדבר.`);
  const packages = d.services.map(s => ALL_PACKAGES[s]).filter(Boolean);

  return (
    <div dir="rtl" className="min-h-screen bg-stone-50 text-stone-800 font-sans selection:bg-orange-200 selection:text-orange-900 overflow-x-hidden">
      
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <SynergyxLogo />
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-stone-600">
            <a href="#challenge" className="hover:text-orange-600 transition-colors">האתגר</a>
            <a href="#solution" className="hover:text-orange-600 transition-colors">הפתרון</a>
            <a href="#pricing" className="hover:text-orange-600 transition-colors">השקעה</a>
          </div>
          <a href={`https://wa.me/972528816696?text=${waText}`} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white px-6 py-2.5 rounded-full font-medium hover:bg-[#20bd5a] transition-all flex items-center gap-2">
            <WhatsAppIcon className="w-5 h-5" />
            <span className="hidden sm:inline">וואטסאפ</span>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-orange-100 to-red-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3 -z-10" />
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 font-medium text-sm mb-8 border border-orange-200">
            <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span></span>
            הצעה מותאמת אישית
          </motion.div>
          
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-stone-900 leading-tight mb-6 tracking-tight">
            שדרוג דיגיטלי ל<span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">{d.businessName}</span>
          </motion.h1>
          
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-stone-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            בדקנו את האתר <strong>{d.domain}</strong> וזיהינו {d.challenges.length} נקודות לשיפור שיכולות להגדיל משמעותית את כמות הלקוחות שמגיעים אליכם מהאינטרנט.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#challenge" className="w-full sm:w-auto px-8 py-4 bg-stone-900 text-white rounded-full font-medium hover:bg-stone-800 transition-colors flex items-center justify-center gap-2">
              לצפייה בממצאים <ArrowLeft className="w-4 h-4" />
            </a>
            <div className="text-sm text-stone-500">מוגש: {new Date().toLocaleDateString('he-IL', { month: 'long', year: 'numeric' })}</div>
          </motion.div>
        </div>
      </section>

      {/* Challenge */}
      <section id="challenge" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              מה מצאנו באתר {d.domain}
            </motion.h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-orange-500 mx-auto mt-6 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Challenges list */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-4">
              {d.challenges.map((c, i) => {
                const Icon = iconMap[c.icon] || AlertTriangle;
                return (
                  <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-stone-50 border border-stone-100 hover:border-orange-200 transition-colors">
                    <div className="p-3 bg-orange-100 text-orange-600 rounded-xl shrink-0"><Icon className="w-6 h-6" /></div>
                    <div>
                      <h4 className="font-bold text-stone-900">{c.title}</h4>
                      <p className="text-stone-600 text-sm mt-1">{c.desc}</p>
                    </div>
                  </div>
                );
              })}

              {/* Competitor callout */}
              {d.competitor && (
                <div className="p-5 rounded-2xl bg-red-50 border border-red-200">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-red-600" />
                    <h4 className="font-bold text-red-800">המתחרה שלכם מקדים</h4>
                  </div>
                  <p className="text-red-700 text-sm">
                    <strong>{d.competitor.name}</strong> ({d.competitor.domain}) קיבל ציון <strong>{d.competitor.ps}</strong> בגוגל — {d.ps > 0 ? `לעומת ${d.ps} שלכם` : 'גבוה יותר משלכם'}. גוגל מציג אותם לפני האתר שלכם בתוצאות חיפוש.
                  </p>
                </div>
              )}
            </motion.div>

            {/* PageSpeed card */}
            {d.ps > 0 && (
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
                <div className="bg-white p-8 rounded-3xl shadow-xl border border-stone-100">
                  <div className="flex items-center justify-between mb-8 pb-6 border-b border-stone-100">
                    <div>
                      <div className="text-sm font-medium text-stone-500 mb-1">Google PageSpeed Insights</div>
                      <div className="text-xl font-bold text-stone-900">{d.domain}</div>
                    </div>
                    <Globe className="w-8 h-8 text-stone-300" />
                  </div>
                  <div className="flex justify-center mb-8">
                    <div className="relative w-48 h-48 flex items-center justify-center">
                      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="45" fill="none" stroke="#f5f5f4" strokeWidth="10" />
                        <circle cx="50" cy="50" r="45" fill="none" stroke={psColor(d.ps)} strokeWidth="10" strokeDasharray="283" strokeDashoffset={psStrokeDash(d.ps)} />
                      </svg>
                      <div className="absolute flex flex-col items-center">
                        <span className="text-5xl font-black" style={{ color: psColor(d.ps) }}>{d.ps}</span>
                        <span className="text-sm font-medium text-stone-500 mt-1">ציון נוכחי</span>
                      </div>
                    </div>
                  </div>

                  {/* Missing tracking tags */}
                  {(['ga4', 'gtm', 'fb_pixel', 'google_ads'] as const).some(t => !d.tracking.includes(t)) && (
                    <div className="space-y-2 mb-6">
                      <div className="text-sm font-medium text-stone-500 mb-2">כלי מעקב חסרים:</div>
                      <div className="flex flex-wrap gap-2">
                        {!d.tracking.includes('ga4') && <span className="px-3 py-1 rounded-full bg-red-50 text-red-600 text-xs font-medium border border-red-200">❌ Google Analytics</span>}
                        {!d.tracking.includes('gtm') && <span className="px-3 py-1 rounded-full bg-red-50 text-red-600 text-xs font-medium border border-red-200">❌ Tag Manager</span>}
                        {!d.tracking.includes('fb_pixel') && <span className="px-3 py-1 rounded-full bg-red-50 text-red-600 text-xs font-medium border border-red-200">❌ Facebook Pixel</span>}
                        {!d.tracking.includes('google_ads') && <span className="px-3 py-1 rounded-full bg-red-50 text-red-600 text-xs font-medium border border-red-200">❌ Google Ads</span>}
                      </div>
                    </div>
                  )}

                  <a href={`https://pagespeed.web.dev/analysis?url=${encodeURIComponent(d.url)}&form_factor=mobile`} target="_blank" rel="noopener noreferrer" className="w-full py-3 rounded-xl border border-stone-200 text-stone-600 font-bold text-sm hover:bg-stone-50 transition-colors flex items-center justify-center gap-2">
                    <Search className="w-4 h-4" /> לצפייה בדו"ח המלא של גוגל
                  </a>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section id="solution" className="py-24 px-6 bg-stone-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] bg-gradient-to-b from-orange-500/20 to-transparent rounded-full blur-3xl" />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">מה אנחנו נתקן</h2>
            <p className="text-lg text-stone-400 max-w-2xl mx-auto">פתרונות מותאמים שזיהינו עבור {d.businessName}, לפי הממצאים בבדיקה.</p>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-orange-500 mx-auto mt-6 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-stone-800/50 backdrop-blur-sm border border-stone-700/50 p-8 rounded-3xl hover:bg-stone-800 transition-colors group">
                <div className="w-14 h-14 bg-stone-900 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-stone-700">
                  <pkg.icon className="w-7 h-7 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold mb-3">{pkg.title}</h3>
                <p className="text-stone-400 leading-relaxed">{pkg.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-24 px-6 bg-stone-50">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">שלבי העבודה</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-orange-500 mx-auto mt-6 rounded-full" />
          </div>
          <div className="space-y-8">
            {[
              { phase: 'שלב 1', title: 'גיבוי ואבחון', desc: 'גיבוי מלא של האתר, סריקה טכנית מעמיקה ומיפוי כל הבעיות.', icon: ShieldCheck },
              { phase: 'שלב 2', title: 'יישום ותיקונים', desc: 'ביצוע כל התיקונים הטכניים — מהירות, אבטחה, מעקב, ותאימות.', icon: Zap },
              { phase: 'שלב 3', title: 'בדיקות ודוח', desc: 'בדיקת תקינות בכל המכשירים, בדיקות PageSpeed חוזרות, ודוח לפני/אחרי.', icon: CheckCircle2 },
            ].map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }} className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center text-orange-600 shrink-0 border-4 border-stone-50">
                  <step.icon className="w-7 h-7" />
                </div>
                <div className="p-6 rounded-2xl bg-white border border-stone-100 flex-1">
                  <div className="text-sm font-bold text-orange-600 mb-1">{step.phase}</div>
                  <h4 className="text-xl font-bold text-stone-900 mb-2">{step.title}</h4>
                  <p className="text-stone-600">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">חבילות מותאמות ל{d.businessName}</h2>
            <p className="text-lg text-stone-600">בהתבסס על הממצאים, אלו הפתרונות הרלוונטיים עבורכם.</p>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-orange-500 mx-auto mt-6 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={`rounded-3xl p-8 flex flex-col relative overflow-hidden ${pkg.highlight ? 'bg-stone-900 text-white shadow-2xl shadow-orange-900/20' : 'bg-white border border-stone-200'}`}>
                {pkg.badge && (
                  <div className={`absolute top-6 left-6 text-sm font-bold px-4 py-1.5 rounded-full ${pkg.highlight ? 'bg-gradient-to-r from-red-600 to-orange-500 text-white' : 'bg-orange-100 text-orange-700 border border-orange-200'}`}>
                    {pkg.badge}
                  </div>
                )}
                
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 mt-4 ${pkg.highlight ? 'bg-stone-800 text-orange-500' : 'bg-orange-100 text-orange-600'}`}>
                  <pkg.icon className="w-6 h-6" />
                </div>
                
                <h3 className={`text-2xl font-bold mb-2 ${pkg.highlight ? '' : 'text-stone-900'}`}>{pkg.title}</h3>
                <p className={`mb-6 ${pkg.highlight ? 'text-stone-400' : 'text-stone-600'}`}>{pkg.desc}</p>

                <div className={`mb-6 pb-6 border-b ${pkg.highlight ? 'border-stone-700' : 'border-stone-100'}`}>
                  {pkg.originalPrice && (
                    <div className={`line-through text-lg mb-1 ${pkg.highlight ? 'text-stone-500' : 'text-stone-400'}`}>{pkg.originalPrice}</div>
                  )}
                  <div className="flex items-baseline gap-2">
                    <span className={`text-4xl font-black ${pkg.highlight ? 'text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400' : 'text-stone-900'}`}>{pkg.price}</span>
                  </div>
                  <div className={`text-sm mt-1 ${pkg.highlight ? 'text-stone-400' : 'text-stone-500'}`}>{pkg.priceNote} | לא כולל מע"מ</div>
                  {pkg.setupFee && (
                    <div className={`mt-3 inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full ${pkg.highlight ? 'bg-stone-800 text-orange-400 border border-stone-700' : 'bg-orange-50 text-orange-700 border border-orange-100'}`}>
                      <Zap className="w-3 h-3" /> + {pkg.setupFee}
                    </div>
                  )}
                </div>

                <ul className="space-y-1 mb-8 flex-1">
                  {pkg.features.map((f: string, j: number) => (
                    <li key={j} className={`flex items-start gap-3 text-sm p-2.5 rounded-xl ${pkg.highlight ? `text-stone-300 ${j % 2 === 0 ? 'bg-white/5' : ''}` : `text-stone-700 ${j % 2 === 0 ? 'bg-stone-50' : ''}`}`}>
                      <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${pkg.highlight ? 'text-orange-500' : 'text-orange-500'}`} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=dvirazz%40gmail.com&amount=${parseInt(pkg.price.replace(/[^\d]/g, ''))}&currency_code=ILS&item_name=${encodeURIComponent('Synergyx - ' + pkg.title + ' - ' + (d?.businessName || ''))}&no_shipping=1&return=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 rounded-xl font-bold text-center flex items-center justify-center gap-2 transition-all ${
                    pkg.highlight
                      ? 'bg-gradient-to-r from-red-600 to-orange-500 text-white hover:from-red-500 hover:to-orange-400'
                      : 'bg-stone-900 text-white hover:bg-stone-800'
                  }`}
                >
                  <CreditCard className="w-5 h-5" />
                  שלם עכשיו
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bundle Offer */}
      {(() => { const ot = packages.filter((p: any) => !p.priceNote.includes('חודש')); return ot.length >= 2 ? ot : null; })() && (
        <section className="py-16 px-6 bg-gradient-to-r from-orange-500 to-red-600">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">🎁 חבילה משולבת — חיסכון של 20%</h2>
              <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                קחו את כל השירותים החד-פעמיים יחד ותקבלו הנחה של 20%. תיקון מקיף = תוצאות מקסימליות.
              </p>
              <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-2xl px-8 py-4 border border-white/30">
                <span className="text-white/60 line-through text-xl">
                  {(() => {
                    const oneTime = packages.filter((p: any) => !p.priceNote.includes('חודש'));
                    const total = oneTime.reduce((sum: number, p: any) => sum + parseInt(p.price.replace(/[^\d]/g, '')), 0);
                    return `₪${total.toLocaleString()}`;
                  })()}
                </span>
                <span className="text-4xl font-black text-white">
                  {(() => {
                    const oneTime = packages.filter((p: any) => !p.priceNote.includes('חודש'));
                    const total = oneTime.reduce((sum: number, p: any) => sum + parseInt(p.price.replace(/[^\d]/g, '')), 0);
                    return `₪${Math.round(total * 0.8).toLocaleString()}`;
                  })()}
                </span>
                <span className="text-white/80 text-sm">חד-פעמי | לא כולל מע"מ</span>
              </div>
              <a
                href={(() => {
                  const oneTime = packages.filter((p: any) => !p.priceNote.includes('חודש'));
                  const total = oneTime.reduce((sum: number, p: any) => sum + parseInt(p.price.replace(/[^\d]/g, '')), 0);
                  const discounted = Math.round(total * 0.8);
                  return `https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=dvirazz%40gmail.com&amount=${discounted}&currency_code=ILS&item_name=${encodeURIComponent('Synergyx - חבילה משולבת - ' + (d?.businessName || ''))}&no_shipping=1&return=${encodeURIComponent(window.location.href)}`;
                })()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 px-8 py-4 bg-white text-stone-900 rounded-full font-bold text-lg hover:bg-stone-100 transition-all"
              >
                <CreditCard className="w-5 h-5" />
                שלם עכשיו — חבילה מלאה
              </a>
            </motion.div>
          </div>
        </section>
      )}

      {/* Testimonials — Screenshots */}
      <section className="py-24 px-6 bg-stone-100">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">מה אומרים הלקוחות שלנו</h2>
            <p className="text-lg text-stone-600">שיחות אמיתיות מוואטסאפ</p>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-orange-500 mx-auto mt-6 rounded-full" />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex flex-col items-center gap-3">
                <img src={t.src} alt={t.label} className="w-full max-w-[280px] rounded-2xl shadow-xl" loading="lazy" />
                <span className="text-sm font-medium text-stone-600">{t.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-16 px-6 bg-stone-900">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { num: '120+', label: 'עסקים שדרגו', icon: '🏢' },
            { num: '94', label: 'ציון ממוצע אחרי טיפול', icon: '⚡' },
            { num: '3x', label: 'עלייה ממוצעת בפניות', icon: '📈' },
            { num: '48h', label: 'זמן אספקה ממוצע', icon: '⏱️' },
          ].map((stat, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">{stat.num}</div>
              <div className="text-stone-400 text-sm mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Footer */}
      <footer className="bg-stone-950 text-white py-20 px-6 border-t border-stone-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">מוכנים להתחיל?</h2>
          <p className="text-xl text-stone-400 mb-10 max-w-2xl mx-auto">
            נשמח לדבר ולענות על כל שאלה. אפשר להתחיל כבר השבוע.
          </p>
          
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-6 mb-16">
            <a href={`https://wa.me/972528816696?text=${waText}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-8 py-4 bg-[#25D366] rounded-full text-white font-bold text-lg hover:bg-[#20bd5a] transition-all">
              <WhatsAppIcon className="w-6 h-6" />
              שליחת הודעה בוואטסאפ
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
            <div className="text-stone-500 text-sm">© {new Date().getFullYear()} Synergyx Digital Marketing. כל הזכויות שמורות.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
