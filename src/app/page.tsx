"use client";
import { ShaderAnimation } from "@/components/ui/shader-lines";
import DisplayCards from "@/components/ui/display-cards";
import {
  Sparkles, Zap, Star, Rocket, Brain, Shield, Heart, Code, Monitor,
  Smartphone, MessageCircle, Palette, GraduationCap, Trophy, Gift,
  Clock, Users, ChevronDown, Mail, Phone, Globe, CheckCircle,
  ArrowRight, Target, BookOpen, Gamepad2, TrendingDown, AlertTriangle,
  BatteryLow, Eye, TimerOff, Lightbulb, DollarSign, Flame, Award,
  FolderOpen, Video, Bot, Laptop, BarChart3, CircleDot,
  Pen, Lock, MapPin, Calendar, Megaphone, FileText, Hash,
  PinIcon, Briefcase, UserCheck, HeartHandshake, X, Wifi
} from "lucide-react";
import { useState, useEffect, useRef, type ReactNode } from "react";

/* ===================== ICON WRAPPER ===================== */
function IconBox({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${className}`}>
      {children}
    </div>
  );
}

/* ===================== DISPLAY CARDS CONFIG ===================== */
const heroCards = [
  {
    icon: <Rocket className="size-4 text-cyan-300" />,
    title: "IT-продукт",
    description: "Игра, сайт или бот за 1 месяц",
    date: "Результат сразу",
    iconClassName: "text-cyan-500",
    titleClassName: "text-cyan-400",
    className:
      "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <Brain className="size-4 text-purple-300" />,
    title: "ИИ навыки",
    description: "ChatGPT, Midjourney, Cursor",
    date: "Инструменты будущего",
    iconClassName: "text-purple-500",
    titleClassName: "text-purple-400",
    className:
      "[grid-area:stack] translate-x-12 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <Star className="size-4 text-amber-300" />,
    title: "Портфолио",
    description: "3+ рабочих проекта",
    date: "За 1 спринт",
    iconClassName: "text-amber-500",
    titleClassName: "text-amber-400",
    className:
      "[grid-area:stack] translate-x-24 translate-y-20 hover:translate-y-10",
  },
];

/* ===================== FAQ COMPONENT ===================== */
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`border border-white/[0.08] rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? "border-purple-500/30 bg-white/[0.03]" : "hover:border-white/[0.15]"}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 sm:px-6 py-4 sm:py-5 text-left font-semibold text-sm sm:text-[0.95rem]"
      >
        <span>{question}</span>
        <ChevronDown className={`size-5 text-purple-400 transition-transform duration-300 flex-shrink-0 ml-3 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-400 ${isOpen ? "max-h-[500px]" : "max-h-0"}`}>
        <p className="px-4 sm:px-6 pb-4 sm:pb-5 text-sm sm:text-[0.92rem] text-white/60 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

/* ===================== PROGRAM TABS ===================== */
function ProgramTabs() {
  const [active, setActive] = useState(0);
  return (
    <div>
      <div className="flex justify-center gap-3 mb-8 sm:mb-12 flex-wrap">
        <button
          onClick={() => setActive(0)}
          className={`px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm font-semibold transition-all duration-300 ${active === 0 ? "bg-gradient-to-r from-purple-600 to-violet-600 text-white shadow-lg shadow-purple-500/25" : "border border-white/[0.08] text-white/60 hover:border-white/[0.2] hover:text-white"}`}
        >
          8-12 лет
        </button>
        <button
          onClick={() => setActive(1)}
          className={`px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm font-semibold transition-all duration-300 ${active === 1 ? "bg-gradient-to-r from-purple-600 to-violet-600 text-white shadow-lg shadow-purple-500/25" : "border border-white/[0.08] text-white/60 hover:border-white/[0.2] hover:text-white"}`}
        >
          13-17 лет
        </button>
      </div>

      {active === 0 && (
        <div className="animate-in fade-in-0 duration-500">
          <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl sm:rounded-3xl p-5 sm:p-10 mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl font-extrabold mb-3">Креаторы цифровых миров</h3>
            <p className="text-sm sm:text-base text-white/60 max-w-xl">Для детей, которые любят Minecraft, Roblox и YouTube --- и хотят создавать, а не только потреблять.</p>
            <div className="flex flex-wrap gap-2 mt-4 sm:mt-5">
              {["Minecraft фанаты", "Roblox игроки", "YouTube зрители", "Новички"].map((t) => (
                <span key={t} className="text-xs font-medium text-purple-300 bg-purple-500/10 border border-purple-500/20 rounded-full px-3 sm:px-4 py-1.5">{t}</span>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 mb-6 sm:mb-8">
            {[
              { num: "1", title: "Генератор идей", period: "Неделя 1-4", items: ["Персонажи через Midjourney/DALL-E", "Дизайн для игр (скины, текстуры)", "Сюжеты с ChatGPT"], project: "3D-игра про приключения пирата с ИИ-графикой" },
              { num: "2", title: "Видеомонтажёр из будущего", period: "Месяц 2", items: ["Midjourney для анимации", "Shorts/Reels с ИИ-видео", "Монтаж в CapCut + AI Voice"], project: "YouTube-канал с ИИ-контентом (10+ видео)" },
              { num: "3", title: "Мой первый чат-бот", period: "Месяц 3", items: ["ChatGPT через Telegram API", "Интерактивный бот-помощник", "Настройка личности бота"], project: "Рабочий Telegram-бот для помощи по школе" },
            ].map((s) => (
              <div key={s.num} className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-5 sm:p-7 hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-1">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-violet-600 text-white font-extrabold text-sm mb-4">{s.num}</div>
                <h4 className="text-base sm:text-lg font-bold mb-1">{s.title}</h4>
                <p className="text-xs text-white/40 mb-3 sm:mb-4">{s.period}</p>
                <ul className="space-y-2 sm:space-y-2.5 mb-4 sm:mb-5">
                  {s.items.map((item, i) => (
                    <li key={i} className="text-sm text-white/60 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400/60 mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="bg-cyan-500/[0.06] border border-cyan-500/[0.15] rounded-xl p-3 sm:p-3.5 text-sm text-cyan-400">
                  <span className="text-[0.7rem] uppercase tracking-wider opacity-70 font-bold block mb-1">Проект</span>
                  {s.project}
                </div>
              </div>
            ))}
          </div>
          <div className="bg-gradient-to-r from-cyan-500/5 to-purple-500/5 border border-white/[0.08] rounded-2xl p-5 sm:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {[
              { icon: <FolderOpen className="size-5 text-purple-400" />, text: "Портфолио из 3+ проектов" },
              { icon: <Video className="size-5 text-purple-400" />, text: "10+ видео для YouTube" },
              { icon: <Bot className="size-5 text-purple-400" />, text: "Рабочий Telegram-бот" },
              { icon: <Flame className="size-5 text-purple-400" />, text: "Вера в себя как создателя" },
            ].map((r, i) => (
              <div key={i} className="flex items-center gap-3">
                {r.icon}
                <span className="text-sm text-white/60">{r.text}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {active === 1 && (
        <div className="animate-in fade-in-0 duration-500">
          <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl sm:rounded-3xl p-5 sm:p-10 mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl font-extrabold mb-3">AI-стартаперы</h3>
            <p className="text-sm sm:text-base text-white/60 max-w-xl">Для подростков, которые хотят выделяться, заработать первые деньги и создать реальный продукт.</p>
            <div className="flex flex-wrap gap-2 mt-4 sm:mt-5">
              {["Хотят зарабатывать", "Интересуются IT", "Хотят действовать", "Бизнес-мышление"].map((t) => (
                <span key={t} className="text-xs font-medium text-purple-300 bg-purple-500/10 border border-purple-500/20 rounded-full px-3 sm:px-4 py-1.5">{t}</span>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 mb-6 sm:mb-8">
            {[
              { num: "1", title: "Мой первый веб-продукт", period: "Неделя 1-4", items: ["Веб-приложения через Cursor", "React/JavaScript (ИИ пишет 80% кода)", "Развёртывание на Vercel"], project: "Веб-приложение «Анализатор расходов»" },
              { num: "2", title: "Telegram-бот --- путь к доходу", period: "Месяц 2", items: ["Полнофункциональный бот с ChatGPT", "Монетизация: платные функции", "Интеграция с платёжными системами"], project: "Бот для продажи на фриланс-бирже" },
              { num: "3", title: "Фриланс-портфолио", period: "Месяц 3", items: ["Дизайн в Figma с ИИ-плагинами", "Личный сайт-портфолио", "Обработка изображений"], project: "Портфолио на GitHub для первых заказов" },
            ].map((s) => (
              <div key={s.num} className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-5 sm:p-7 hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-1">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-violet-600 text-white font-extrabold text-sm mb-4">{s.num}</div>
                <h4 className="text-base sm:text-lg font-bold mb-1">{s.title}</h4>
                <p className="text-xs text-white/40 mb-3 sm:mb-4">{s.period}</p>
                <ul className="space-y-2 sm:space-y-2.5 mb-4 sm:mb-5">
                  {s.items.map((item, i) => (
                    <li key={i} className="text-sm text-white/60 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400/60 mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="bg-cyan-500/[0.06] border border-cyan-500/[0.15] rounded-xl p-3 sm:p-3.5 text-sm text-cyan-400">
                  <span className="text-[0.7rem] uppercase tracking-wider opacity-70 font-bold block mb-1">Проект</span>
                  {s.project}
                </div>
              </div>
            ))}
          </div>
          <div className="bg-gradient-to-r from-cyan-500/5 to-purple-500/5 border border-white/[0.08] rounded-2xl p-5 sm:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {[
              { icon: <Laptop className="size-5 text-purple-400" />, text: "3+ веб-приложения и ботов" },
              { icon: <BarChart3 className="size-5 text-purple-400" />, text: "Портфолио с реальными проектами" },
              { icon: <DollarSign className="size-5 text-purple-400" />, text: "Готовность к заказам ($50-500)" },
              { icon: <Rocket className="size-5 text-purple-400" />, text: "Старт в техпредпринимательстве" },
            ].map((r, i) => (
              <div key={i} className="flex items-center gap-3">
                {r.icon}
                <span className="text-sm text-white/60">{r.text}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* ===================== PROJECT TABS ===================== */
function ProjectTabs() {
  const [active, setActive] = useState(0);

  const projectIcon = (idx: number, group: number) => {
    const icons8 = [
      <Gamepad2 key="g" className="size-7 text-purple-400" />,
      <Video key="v" className="size-7 text-cyan-400" />,
      <Bot key="b" className="size-7 text-green-400" />,
    ];
    const icons13 = [
      <DollarSign key="d" className="size-7 text-amber-400" />,
      <GraduationCap key="gr" className="size-7 text-purple-400" />,
      <Briefcase key="br" className="size-7 text-cyan-400" />,
    ];
    return group === 0 ? icons8[idx] : icons13[idx];
  };

  const renderProjects = (projects: { tags: string[]; title: string; author: string; desc: string; features: string[]; quote: string; stat: string }[], group: number) => (
    <div className="space-y-5 sm:space-y-7 animate-in fade-in-0 duration-500">
      {projects.map((p, i) => (
        <div key={i} className="bg-white/[0.03] border border-white/[0.08] rounded-2xl sm:rounded-3xl p-5 sm:p-10 relative overflow-hidden hover:border-white/[0.12] transition-all duration-300">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-cyan-500 to-pink-500" />
          <div className="flex items-start justify-between flex-wrap gap-4 mb-5">
            <IconBox className="bg-white/[0.05]">
              {projectIcon(i, group)}
            </IconBox>
            <div className="flex gap-2 flex-wrap">
              {p.tags.map((t) => (
                <span key={t} className="text-xs font-medium text-purple-300 bg-purple-500/10 border border-purple-500/20 rounded-full px-3 py-1">{t}</span>
              ))}
            </div>
          </div>
          <h3 className="text-lg sm:text-xl font-extrabold mb-1">{p.title}</h3>
          <p className="text-sm text-white/40 mb-3 sm:mb-4">{p.author}</p>
          <p className="text-sm sm:text-[0.95rem] text-white/60 mb-4 sm:mb-5 leading-relaxed">{p.desc}</p>
          {p.features.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-4 sm:mb-5">
              {p.features.map((f, j) => (
                <span key={j} className="text-sm text-white/60 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                  {f}
                </span>
              ))}
            </div>
          )}
          {p.stat && (
            <div className="inline-flex items-center gap-2 bg-cyan-500/[0.08] border border-cyan-500/[0.15] rounded-full px-4 py-2 text-sm text-cyan-400 mb-4">
              <CheckCircle className="size-4" /> {p.stat}
            </div>
          )}
          <div className="bg-purple-500/[0.06] border-l-[3px] border-purple-500 rounded-r-xl p-3 sm:p-4 text-sm text-purple-300 italic">
            &laquo;{p.quote}&raquo;
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div>
      <div className="flex justify-center gap-3 mb-8 sm:mb-10 flex-wrap">
        <button onClick={() => setActive(0)} className={`px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm font-semibold transition-all duration-300 ${active === 0 ? "bg-gradient-to-r from-purple-600 to-violet-600 text-white shadow-lg shadow-purple-500/25" : "border border-white/[0.08] text-white/60 hover:border-white/[0.2] hover:text-white"}`}>8-12 лет</button>
        <button onClick={() => setActive(1)} className={`px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm font-semibold transition-all duration-300 ${active === 1 ? "bg-gradient-to-r from-purple-600 to-violet-600 text-white shadow-lg shadow-purple-500/25" : "border border-white/[0.08] text-white/60 hover:border-white/[0.2] hover:text-white"}`}>13-17 лет</button>
      </div>
      {active === 0 && renderProjects([
        { tags: ["3D-игра", "1-й месяц"], title: "3D-квест «Приключения пирата»", author: "Максим, 10 лет", desc: "Интерактивная 3D-игра, где игрок управляет пиратом. Персонажа создали в Midjourney (70+ вариантов), код написал Cursor, звук сгенерировали через ИИ.", features: ["Запуск в браузере", "Можно поделиться", "4 учебных занятия"], quote: "Я не ленюсь больше, потому что я создатель!", stat: "" },
        { tags: ["YouTube", "2-й месяц"], title: "YouTube-канал на ИИ", author: "Таня, 12 лет", desc: "YouTube-канал с 15 видео --- персонажи в Midjourney, сценарий из ChatGPT, монтаж в CapCut.", features: [], quote: "Я уверена, что могу создавать видео лучше, чем смотреть их", stat: "3,200 просмотров за месяц" },
        { tags: ["Telegram-бот", "3-й месяц"], title: "Помощник по домашке", author: "Миша, 9 лет", desc: "Telegram-бот, который помогает решать задачи по математике и английскому.", features: [], quote: "Я создал что-то полезное, а не просто играл в игру", stat: "30+ одноклассников используют" },
      ], 0)}
      {active === 1 && renderProjects([
        { tags: ["Веб-приложение", "1-й спринт"], title: "Приложение для отслеживания расходов", author: "Даша, 15 лет", desc: "Веб-приложение на React + Cursor с графиками и статистикой. 6 часов на занятиях.", features: [], quote: "Спасибо курсу --- я не волнуюсь о будущем. Я знаю, что смогу зарабатывать.", stat: "3 заказа на фриланс, $500 за месяц" },
        { tags: ["Telegram-бот", "Бизнес"], title: "Бот для помощи учителям", author: "Арсений, 16 лет", desc: "Бот для создания тестов и опросов в Telegram. Учителя пишут вопросы, ученики проходят тесты.", features: ["47 учителей", "8 платных подписчиков", "$40/мес доход"], quote: "Технология может решать реальные проблемы", stat: "" },
        { tags: ["Портфолио", "Фриланс"], title: "Фриланс-портфолио", author: "Кира, 17 лет", desc: "Полнофункциональный сайт-портфолио с 5 проектами. На Upwork/Fiverr: рейтинг 4.9/5, 12 завершённых проектов.", features: [], quote: "Благодаря курсу я не волнуюсь о будущем.", stat: "$2,100 за 2 месяца" },
      ], 1)}
    </div>
  );
}

/* ===================== MARQUEE TICKER ===================== */
function MarqueeTicker({ direction = "left", items, className = "" }: { direction?: "left" | "right"; items: { icon: ReactNode; text: string }[]; className?: string }) {
  const doubled = [...items, ...items];
  return (
    <div className={`overflow-hidden py-5 sm:py-7 ${className}`}>
      <div className={`flex gap-6 sm:gap-10 whitespace-nowrap ${direction === "left" ? "animate-marquee-left" : "animate-marquee-right"}`} style={{ width: "max-content" }}>
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-2 sm:gap-3 text-sm sm:text-lg font-semibold text-white/20 hover:text-white/40 transition-colors select-none">
            <span className="text-purple-500/40">{item.icon}</span>
            {item.text}
            <span className="text-white/[0.06] mx-1 sm:mx-3">|</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ===================== SCROLL REVEAL ===================== */
function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}>
      {children}
    </div>
  );
}

/* ===================== MAIN PAGE ===================== */
export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [showFloat, setShowFloat] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowFloat(window.scrollY > 800);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#06060b] text-[#eeeef5] overflow-x-hidden font-sans">
      {/* ====== BG EFFECTS ====== */}
      <div className="fixed inset-0 z-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(124,108,240,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(124,108,240,0.025) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
      <div className="fixed w-[650px] h-[650px] rounded-full top-[-250px] right-[-200px] bg-purple-500/[0.07] blur-[130px] pointer-events-none z-0 animate-pulse" />
      <div className="fixed w-[550px] h-[550px] rounded-full bottom-[20%] left-[-200px] bg-cyan-500/[0.05] blur-[130px] pointer-events-none z-0" />

      {/* ====== NAVIGATION ====== */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#06060b]/92 border-b border-white/[0.06] backdrop-blur-2xl" : "bg-[#06060b]/75 backdrop-blur-xl"}`}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-3 sm:py-3.5 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 sm:gap-2.5 text-base sm:text-lg font-extrabold tracking-tight no-underline text-white">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-xs sm:text-sm text-white shadow-lg shadow-purple-500/25">VC</div>
            <span className="hidden sm:inline">Vibe Coding</span>
            <span className="sm:hidden">VC</span>
          </a>
          <div className="hidden lg:flex items-center gap-7">
            {[
              { href: "#problems", label: "Проблема" },
              { href: "#solution", label: "Решение" },
              { href: "#programs", label: "Программы" },
              { href: "#projects", label: "Проекты" },
              { href: "#pricing", label: "Цены" },
              { href: "#faq", label: "FAQ" },
            ].map((l) => (
              <a key={l.href} href={l.href} className="text-[0.88rem] font-medium text-white/50 hover:text-white transition-colors no-underline">{l.label}</a>
            ))}
            <a href="#trial" className="bg-gradient-to-r from-purple-600 to-violet-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:-translate-y-0.5 transition-all no-underline">
              Пробный урок
            </a>
          </div>
          <button className="lg:hidden flex flex-col gap-1.5 p-2" onClick={() => setMobileMenu(!mobileMenu)} aria-label="Menu">
            {mobileMenu ? <X className="size-6 text-white" /> : (
              <>
                <span className="block w-6 h-0.5 bg-white rounded" />
                <span className="block w-6 h-0.5 bg-white rounded" />
                <span className="block w-6 h-0.5 bg-white rounded" />
              </>
            )}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {mobileMenu && (
        <div className="fixed inset-0 top-[52px] sm:top-[60px] z-40 bg-[#06060b]/97 backdrop-blur-2xl flex flex-col items-center gap-5 pt-8 animate-in fade-in-0 duration-300">
          {[
            { href: "#problems", label: "Проблема" },
            { href: "#solution", label: "Решение" },
            { href: "#programs", label: "Программы" },
            { href: "#projects", label: "Проекты" },
            { href: "#pricing", label: "Цены" },
            { href: "#faq", label: "FAQ" },
          ].map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMobileMenu(false)} className="text-lg font-semibold text-white no-underline py-1">{l.label}</a>
          ))}
          <a href="#trial" onClick={() => setMobileMenu(false)} className="bg-gradient-to-r from-purple-600 to-violet-600 text-white px-8 py-3.5 rounded-full font-bold shadow-lg shadow-purple-500/25 no-underline mt-2">
            Пробный урок
          </a>
        </div>
      )}

      {/* ====== HERO WITH SHADER ====== */}
      <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0">
          <ShaderAnimation />
          <div className="absolute inset-0 bg-gradient-to-b from-[#06060b]/30 via-transparent to-[#06060b]" />
        </div>
        <div className="relative z-10 px-4 sm:px-6 py-24 sm:py-32 max-w-[950px] mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/[0.05] border border-white/[0.08] rounded-full px-4 sm:px-5 py-2 text-xs sm:text-sm text-white/60 mb-6 sm:mb-9">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Набор открыт --- старт 1 апреля
          </div>
          <h1 className="text-[clamp(2rem,6.5vw,4.8rem)] font-black leading-[1.06] tracking-[-0.04em] mb-5 sm:mb-7">
            Превратите ребёнка<br />
            <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-300 bg-clip-text text-transparent">из потребителя в создателя</span>
          </h1>
          <p className="text-[clamp(0.95rem,2.5vw,1.3rem)] text-white/50 max-w-[700px] mx-auto mb-8 sm:mb-10 leading-relaxed px-2">
            За 1 месяц он создаст реальный IT-продукт (игру, сайт или бота) с помощью ИИ --- и забудет о бесполезном скроллинге
          </p>
          <div className="flex items-center justify-center gap-3 sm:gap-4 flex-wrap mb-4">
            <a href="#trial" className="bg-gradient-to-r from-purple-600 to-violet-600 text-white px-6 sm:px-10 py-3.5 sm:py-4 rounded-full text-base sm:text-lg font-bold shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:-translate-y-0.5 transition-all no-underline inline-flex items-center gap-2">
              Записаться на пробный урок
              <ArrowRight className="size-4 sm:size-5" />
            </a>
            <a href="#programs" className="border border-white/[0.1] text-white/60 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-base sm:text-lg font-medium hover:border-purple-400/40 hover:text-white transition-all no-underline">
              Узнать больше
            </a>
          </div>
          <p className="text-xs sm:text-sm text-white/30 mb-8 sm:mb-12">Пробный урок бесплатный --- 1.5 часа, первый мини-проект</p>

          <div className="flex items-center justify-center gap-6 sm:gap-12 flex-wrap mb-8 sm:mb-10">
            {[
              { num: "8-17", label: "Возраст" },
              { num: "4-8", label: "Детей в группе" },
              { num: "1-2", label: "Месяца спринт" },
              { num: "0", label: "Опыт нужен" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-xl sm:text-2xl font-extrabold text-purple-300 font-mono">{s.num}</div>
                <div className="text-[0.65rem] sm:text-[0.78rem] text-white/30 uppercase tracking-widest mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {[
              { icon: <Wifi className="size-3.5 text-purple-300" />, text: "Онлайн (Zoom + Discord)" },
              { icon: <Clock className="size-3.5 text-purple-300" />, text: "Спринты по 1-2 мес." },
              { icon: <Lightbulb className="size-3.5 text-purple-300" />, text: "Для новичков" },
            ].map((t) => (
              <span key={t.text} className="inline-flex items-center gap-2 bg-white/[0.04] border border-white/[0.06] rounded-full px-3 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm text-white/50">
                {t.icon} {t.text}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ====== MARQUEE 1 ====== */}
      <div className="border-y border-white/[0.04] bg-[#08080f] relative overflow-hidden">
        <MarqueeTicker
          direction="left"
          items={[
            { icon: <Code className="size-4 sm:size-5" />, text: "ChatGPT" },
            { icon: <Palette className="size-4 sm:size-5" />, text: "Midjourney" },
            { icon: <Rocket className="size-4 sm:size-5" />, text: "Cursor" },
            { icon: <Globe className="size-4 sm:size-5" />, text: "React" },
            { icon: <Bot className="size-4 sm:size-5" />, text: "Telegram Bot" },
            { icon: <Pen className="size-4 sm:size-5" />, text: "Figma" },
            { icon: <Video className="size-4 sm:size-5" />, text: "YouTube" },
            { icon: <Brain className="size-4 sm:size-5" />, text: "Claude AI" },
            { icon: <Laptop className="size-4 sm:size-5" />, text: "Vercel" },
            { icon: <Gamepad2 className="size-4 sm:size-5" />, text: "3D Games" },
            { icon: <Sparkles className="size-4 sm:size-5" />, text: "DALL-E" },
            { icon: <BarChart3 className="size-4 sm:size-5" />, text: "Replit" },
          ]}
        />
        <MarqueeTicker
          direction="right"
          items={[
            { icon: <Flame className="size-4 sm:size-5" />, text: "Vibe Coding" },
            { icon: <Target className="size-4 sm:size-5" />, text: "Спринты" },
            { icon: <Users className="size-4 sm:size-5" />, text: "4-8 детей" },
            { icon: <Star className="size-4 sm:size-5" />, text: "Портфолио" },
            { icon: <Trophy className="size-4 sm:size-5" />, text: "Результат" },
            { icon: <DollarSign className="size-4 sm:size-5" />, text: "Фриланс" },
            { icon: <Shield className="size-4 sm:size-5" />, text: "Гарантия" },
            { icon: <Heart className="size-4 sm:size-5" />, text: "Творчество" },
            { icon: <GraduationCap className="size-4 sm:size-5" />, text: "8-17 лет" },
            { icon: <Lightbulb className="size-4 sm:size-5" />, text: "Без опыта" },
            { icon: <Zap className="size-4 sm:size-5" />, text: "1 месяц" },
            { icon: <BookOpen className="size-4 sm:size-5" />, text: "Онлайн" },
          ]}
          className="border-t border-white/[0.03]"
        />
      </div>

      {/* ====== PROBLEMS ====== */}
      <section id="problems" className="py-16 sm:py-28 px-4 sm:px-6 bg-[#0a0a14] relative">
        <div className="max-w-[1200px] mx-auto">
          <Reveal className="text-center mb-8 sm:mb-12">
            <span className="inline-flex items-center gap-2 text-[0.78rem] font-semibold tracking-[0.14em] uppercase text-purple-300 bg-purple-500/[0.08] border border-purple-500/[0.12] rounded-full px-5 py-2 mb-5">Знакомо?</span>
            <h2 className="text-[clamp(1.6rem,5vw,3.4rem)] font-extrabold leading-tight tracking-[-0.03em] px-2">
              Вы дарили ребёнку возможность развиваться, но <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-300 bg-clip-text text-transparent">что получилось?</span>
            </h2>
          </Reveal>

          <Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {[
                { icon: <Smartphone className="size-6 text-red-400" />, title: "Бесконечный скроллинг", desc: "Ребёнок часами сидит в TikTok, YouTube, Roblox --- развивает клиповое мышление вместо полезных навыков." },
                { icon: <TrendingDown className="size-6 text-red-400" />, title: "Курсы не работают", desc: "Месяц учит циклы for, не видит ни одного результата, выгорает и бросает. Деньги потрачены впустую." },
                { icon: <AlertTriangle className="size-6 text-red-400" />, title: "Страх за будущее", desc: "Без навыков работы с ИИ ребёнок отстанет от сверстников. Мир меняется, а подготовки нет." },
                { icon: <BatteryLow className="size-6 text-red-400" />, title: "Зависимость от экранов", desc: "Вы пытаетесь ограничить время в интернете, но это только вызывает конфликты." },
                { icon: <Eye className="size-6 text-red-400" />, title: "Потеря интереса", desc: "«Скучно», «неинтересно», «зачем это мне нужно?» --- обычная реакция на школьное обучение." },
                { icon: <TimerOff className="size-6 text-red-400" />, title: "Курсы тянутся годами", desc: "12 месяцев обучения, а ребёнок выгорает за 2 недели. Нет быстрого результата --- нет мотивации." },
              ].map((p, i) => (
                <div key={i} className="bg-[#12122a] border border-white/[0.06] rounded-2xl p-5 sm:p-7 hover:border-red-500/30 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-red-500 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <IconBox className="bg-red-500/[0.1] mb-4">
                    {p.icon}
                  </IconBox>
                  <h3 className="text-sm sm:text-base font-bold mb-2">{p.title}</h3>
                  <p className="text-xs sm:text-sm text-white/50 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="mt-10 sm:mt-16">
            <div className="bg-[#10101c] border border-white/[0.06] rounded-2xl sm:rounded-3xl p-5 sm:p-12 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-orange-400 to-purple-500" />
              <h3 className="text-lg sm:text-2xl font-extrabold mb-6 sm:mb-8 text-center">Почему обычные курсы программирования не работают?</h3>
              <div className="max-w-[720px] mx-auto space-y-4 sm:space-y-5">
                {[
                  "Дети месяцами учат сухой синтаксис, не создавая ничего стоящего",
                  "Нет немедленного результата --- это убивает мотивацию",
                  "Материал не связан с жизнью --- «зачем мне нужен цикл while?»",
                  "Учителя не знают ИИ --- преподают устаревшие методы 2015 года",
                  "Курсы тянут 12 месяцев --- ребёнок теряет интерес за первые недели",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 sm:gap-4">
                    <span className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-red-500/[0.12] text-red-400 flex items-center justify-center text-xs sm:text-sm font-bold">{i + 1}</span>
                    <span className="text-sm sm:text-[0.95rem] text-white/60">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ====== SOLUTION ====== */}
      <section id="solution" className="py-16 sm:py-28 px-4 sm:px-6 relative">
        <div className="max-w-[1200px] mx-auto">
          <Reveal className="text-center mb-8 sm:mb-12">
            <span className="inline-flex items-center gap-2 text-[0.78rem] font-semibold tracking-[0.14em] uppercase text-purple-300 bg-purple-500/[0.08] border border-purple-500/[0.12] rounded-full px-5 py-2 mb-5">Решение</span>
            <h2 className="text-[clamp(1.6rem,5vw,3.4rem)] font-extrabold leading-tight tracking-[-0.03em] px-2">
              Представьте, что через 1 месяц <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-300 bg-clip-text text-transparent">ваш ребёнок</span>
            </h2>
          </Reveal>

          <Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {[
                { icon: <Rocket className="size-6 text-cyan-400" />, bg: "bg-cyan-500/[0.1]", title: "Создаст IT-продукт", desc: "Реальный проект --- игру, сайт или бота --- который работает и которым можно поделиться с друзьями." },
                { icon: <Bot className="size-6 text-cyan-400" />, bg: "bg-cyan-500/[0.1]", title: "Освоит ИИ как суперсилу", desc: "Научится управлять ChatGPT, Midjourney, Cursor --- инструменты, которые меняют мир прямо сейчас." },
                { icon: <Brain className="size-6 text-cyan-400" />, bg: "bg-cyan-500/[0.1]", title: "Разовьёт критическое мышление", desc: "Научится проверять факты, не доверять ИИ слепо и думать самостоятельно." },
                { icon: <DollarSign className="size-6 text-cyan-400" />, bg: "bg-cyan-500/[0.1]", title: "Получит первый доход", desc: "Для подростков --- готовое портфолио и навыки для первых фриланс-заказов." },
                { icon: <Heart className="size-6 text-cyan-400" />, bg: "bg-cyan-500/[0.1]", title: "Полюбит учиться", desc: "Потому что видит живой результат каждое занятие. Не теория, а практика." },
                { icon: <Flame className="size-6 text-cyan-400" />, bg: "bg-cyan-500/[0.1]", title: "Обретёт уверенность", desc: "Вместо «я это не могу» --- «я это создал сам!». Трансформация мышления." },
              ].map((s, i) => (
                <div key={i} className="bg-[#12122a] border border-white/[0.06] rounded-2xl p-5 sm:p-7 hover:border-cyan-500/30 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <IconBox className={`${s.bg} mb-4`}>
                    {s.icon}
                  </IconBox>
                  <h3 className="text-sm sm:text-base font-bold mb-2">{s.title}</h3>
                  <p className="text-xs sm:text-sm text-white/50 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* DISPLAY CARDS SECTION */}
          <Reveal className="mt-10 sm:mt-16">
            <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12">
              <div className="flex-1 w-full">
                <h3 className="text-xl sm:text-3xl font-extrabold mb-5 sm:mb-6">Трансформация мышления</h3>
                <div className="space-y-3 sm:space-y-4">
                  {[
                    { from: "Потребитель контента", to: "Создатель контента" },
                    { from: "Скучный учебник", to: "Живые проекты" },
                    { from: "Скроллинг TikTok", to: "Своё творчество" },
                    { from: "«Я не могу»", to: "«Я это создал!»" },
                  ].map((t, i) => (
                    <div key={i} className="bg-gradient-to-r from-purple-500/[0.06] to-cyan-500/[0.04] border border-white/[0.06] rounded-xl p-4 sm:p-5 flex items-center gap-3 sm:gap-4 hover:border-white/[0.12] transition-all">
                      <Sparkles className="size-5 text-purple-400 flex-shrink-0" />
                      <div>
                        <span className="text-xs sm:text-sm text-white/30 line-through block">{t.from}</span>
                        <span className="text-sm sm:text-[0.95rem] text-cyan-400 font-semibold">{t.to}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1 hidden lg:flex items-center justify-center min-h-[350px]">
                <DisplayCards cards={heroCards} />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ====== PROGRAMS ====== */}
      <section id="programs" className="py-16 sm:py-28 px-4 sm:px-6 bg-[#0a0a14] relative">
        <div className="max-w-[1200px] mx-auto">
          <Reveal className="text-center mb-8 sm:mb-12">
            <span className="inline-flex items-center gap-2 text-[0.78rem] font-semibold tracking-[0.14em] uppercase text-purple-300 bg-purple-500/[0.08] border border-purple-500/[0.12] rounded-full px-5 py-2 mb-5">Программы</span>
            <h2 className="text-[clamp(1.6rem,5vw,3.4rem)] font-extrabold leading-tight tracking-[-0.03em]">
              Выберите программу <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-300 bg-clip-text text-transparent">для вашего ребёнка</span>
            </h2>
          </Reveal>
          <Reveal><ProgramTabs /></Reveal>
        </div>
      </section>

      {/* ====== MARQUEE 2 ====== */}
      <div className="border-y border-white/[0.04] bg-[#07070d] relative overflow-hidden">
        <MarqueeTicker
          direction="right"
          items={[
            { icon: <Rocket className="size-4 sm:size-5" />, text: "Создай игру" },
            { icon: <Bot className="size-4 sm:size-5" />, text: "Запусти бота" },
            { icon: <Video className="size-4 sm:size-5" />, text: "Сними видео" },
            { icon: <Code className="size-4 sm:size-5" />, text: "Напиши код" },
            { icon: <Palette className="size-4 sm:size-5" />, text: "Нарисуй дизайн" },
            { icon: <Globe className="size-4 sm:size-5" />, text: "Задеплой сайт" },
            { icon: <DollarSign className="size-4 sm:size-5" />, text: "Заработай" },
            { icon: <Brain className="size-4 sm:size-5" />, text: "Освой ИИ" },
            { icon: <Briefcase className="size-4 sm:size-5" />, text: "Собери портфолио" },
            { icon: <Sparkles className="size-4 sm:size-5" />, text: "Твори" },
          ]}
        />
      </div>

      {/* ====== HOW IT WORKS ====== */}
      <section className="py-16 sm:py-28 px-4 sm:px-6 relative">
        <div className="max-w-[1200px] mx-auto">
          <Reveal className="text-center mb-8 sm:mb-12">
            <span className="inline-flex items-center gap-2 text-[0.78rem] font-semibold tracking-[0.14em] uppercase text-purple-300 bg-purple-500/[0.08] border border-purple-500/[0.12] rounded-full px-5 py-2 mb-5">Модель спринтов</span>
            <h2 className="text-[clamp(1.6rem,5vw,3.4rem)] font-extrabold leading-tight tracking-[-0.03em]">
              Как работает <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-300 bg-clip-text text-transparent">наша система</span>
            </h2>
            <p className="text-sm sm:text-lg text-white/50 max-w-[660px] mx-auto mt-4 sm:mt-5">Мы не продаём бесконечные годовые курсы. Мы продаём быстрые, видимые результаты.</p>
          </Reveal>

          <Reveal>
            <div className="relative max-w-[800px] mx-auto">
              <div className="absolute left-[20px] sm:left-[28px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-cyan-500 to-purple-500 opacity-20" />
              {[
                { num: "1", title: "Бесплатный старт", tag: "День 1 --- Пробный урок (1.5 часа)", desc: "Ребёнок знакомится с куратором, выбирает мини-проект и за 45-60 минут создаёт первый результат.", details: ["8-12 лет: создаст персонажа в Midjourney", "13-17 лет: создаст Telegram-бот в 5 строк кода", "Уходит с чувством «Я это могу!»"] },
                { num: "2", title: "Проектный спринт", tag: "1-2 месяца --- 4 занятия (1x в неделю)", desc: "Ребёнок работает над реальным продуктом. Куратор даёт задания, проверяет, даёт обратную связь.", details: ["5 мин --- планёрка", "80 мин --- живая работа над проектом", "5 мин --- проверка и задание на неделю"] },
                { num: "3", title: "Отчёт и результаты", tag: "Конец спринта", desc: "PDF-отчёт с проектами ребёнка, пополненное портфолио, рекомендации для следующего спринта.", details: [] },
                { num: "4", title: "Выбор следующего шага", tag: "После спринта", desc: "Продолжить обучение со следующей программой или закончить. Мы не заставляем --- но большинство продолжают.", details: [] },
              ].map((step, i) => (
                <div key={i} className="relative pl-[56px] sm:pl-[76px] mb-8 sm:mb-12 last:mb-0">
                  <div className="absolute left-[2px] sm:left-[8px] top-0 w-[36px] h-[36px] sm:w-[42px] sm:h-[42px] rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center font-extrabold text-white text-sm sm:text-base shadow-lg shadow-purple-500/30">
                    {step.num}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-1">{step.title}</h3>
                  <span className="text-xs sm:text-sm text-purple-300 block mb-2 sm:mb-3">{step.tag}</span>
                  <p className="text-sm sm:text-[0.92rem] text-white/60 leading-relaxed">{step.desc}</p>
                  {step.details.length > 0 && (
                    <div className="mt-3 sm:mt-4 bg-white/[0.03] border border-white/[0.06] rounded-xl p-4 sm:p-5">
                      <ul className="space-y-2 sm:space-y-2.5">
                        {step.details.map((d, j) => (
                          <li key={j} className="text-xs sm:text-sm text-white/60 flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/60 mt-1.5 flex-shrink-0" />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ====== TOOLS ====== */}
      <section className="py-16 sm:py-28 px-4 sm:px-6 bg-[#0a0a14] relative">
        <div className="max-w-[1200px] mx-auto">
          <Reveal className="text-center mb-8 sm:mb-12">
            <span className="inline-flex items-center gap-2 text-[0.78rem] font-semibold tracking-[0.14em] uppercase text-purple-300 bg-purple-500/[0.08] border border-purple-500/[0.12] rounded-full px-5 py-2 mb-5">Инструменты</span>
            <h2 className="text-[clamp(1.6rem,5vw,3.4rem)] font-extrabold leading-tight tracking-[-0.03em]">
              Работаем с инструментами <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-300 bg-clip-text text-transparent">будущего</span>
            </h2>
            <p className="text-sm sm:text-lg text-white/50 max-w-[660px] mx-auto mt-4 sm:mt-5">Всё работает в браузере --- ничего не нужно скачивать.</p>
          </Reveal>
          <Reveal>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
              {[
                { icon: <Brain className="size-6 text-purple-400" />, title: "ChatGPT / Claude", desc: "ИИ через промпты" },
                { icon: <Code className="size-6 text-purple-400" />, title: "Cursor", desc: "ИИ-помощник для кода" },
                { icon: <Globe className="size-6 text-purple-400" />, title: "Replit / Lovable", desc: "Сайты в браузере" },
                { icon: <Palette className="size-6 text-purple-400" />, title: "Midjourney", desc: "Генерация картинок" },
                { icon: <Smartphone className="size-6 text-purple-400" />, title: "Telegram API", desc: "Свои боты" },
                { icon: <Pen className="size-6 text-purple-400" />, title: "Figma", desc: "Дизайн и прототипы" },
              ].map((tool, i) => (
                <div key={i} className="bg-[#12122a] border border-white/[0.06] rounded-2xl p-4 sm:p-5 text-center hover:border-purple-500/30 hover:-translate-y-1 transition-all duration-300">
                  <IconBox className="bg-purple-500/[0.1] mx-auto mb-3">
                    {tool.icon}
                  </IconBox>
                  <h4 className="text-xs sm:text-sm font-bold mb-1">{tool.title}</h4>
                  <p className="text-[0.65rem] sm:text-xs text-white/40">{tool.desc}</p>
                  <span className="inline-flex items-center gap-1 mt-2 text-[0.6rem] sm:text-[0.7rem] text-cyan-400/70">
                    <Lock className="size-2.5 sm:size-3" /> Безопасно
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ====== PROJECTS ====== */}
      <section id="projects" className="py-16 sm:py-28 px-4 sm:px-6 relative">
        <div className="max-w-[1200px] mx-auto">
          <Reveal className="text-center mb-8 sm:mb-12">
            <span className="inline-flex items-center gap-2 text-[0.78rem] font-semibold tracking-[0.14em] uppercase text-purple-300 bg-purple-500/[0.08] border border-purple-500/[0.12] rounded-full px-5 py-2 mb-5">Проекты учеников</span>
            <h2 className="text-[clamp(1.6rem,5vw,3.4rem)] font-extrabold leading-tight tracking-[-0.03em]">
              Что создают <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-300 bg-clip-text text-transparent">наши ученики</span>
            </h2>
          </Reveal>
          <Reveal><ProjectTabs /></Reveal>
        </div>
      </section>

      {/* ====== PRICING ====== */}
      <section id="pricing" className="py-16 sm:py-28 px-4 sm:px-6 bg-[#0a0a14] relative">
        <div className="max-w-[1200px] mx-auto">
          <Reveal className="text-center mb-8 sm:mb-12">
            <span className="inline-flex items-center gap-2 text-[0.78rem] font-semibold tracking-[0.14em] uppercase text-purple-300 bg-purple-500/[0.08] border border-purple-500/[0.12] rounded-full px-5 py-2 mb-5">Стоимость</span>
            <h2 className="text-[clamp(1.6rem,5vw,3.4rem)] font-extrabold leading-tight tracking-[-0.03em]">
              Прозрачные цены, <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-300 bg-clip-text text-transparent">никаких скрытых платежей</span>
            </h2>
          </Reveal>

          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-7 max-w-[900px] mx-auto">
              <div className="bg-[#12122a] border border-white/[0.06] rounded-2xl sm:rounded-3xl p-6 sm:p-10 hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-lg sm:text-xl font-bold mb-2">Базовый спринт</h3>
                <p className="text-xs sm:text-sm text-white/40 mb-4 sm:mb-5">Украина, Россия, СНГ</p>
                <div className="flex items-baseline gap-1 mb-5 sm:mb-6">
                  <span className="text-3xl sm:text-4xl font-black font-mono bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">$50-80</span>
                  <span className="text-xs sm:text-sm text-white/30">/месяц</span>
                </div>
                <ul className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-7">
                  {["4 живых занятия (1x в неделю, 1.5-2 часа)", "Доступ в Discord-комьюнити", "1 полнофункциональный проект", "Портфолио с результатом", "Месячный отчёт для родителей"].map((f, i) => (
                    <li key={i} className="text-xs sm:text-sm text-white/60 flex items-start gap-2.5">
                      <CheckCircle className="size-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#trial" className="w-full block text-center border border-white/[0.1] text-white/60 px-6 py-3 sm:py-3.5 rounded-full text-sm font-semibold hover:border-purple-400/40 hover:text-white transition-all no-underline">
                  Записаться на пробный урок
                </a>
              </div>

              <div className="bg-[#12122a] border border-purple-500/30 rounded-2xl sm:rounded-3xl p-6 sm:p-10 relative overflow-hidden hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-purple-500/[0.08]">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-cyan-500" />
                <span className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-[0.65rem] sm:text-[0.72rem] font-bold px-3 py-1 rounded-full uppercase tracking-wider">Популярный</span>
                <h3 className="text-lg sm:text-xl font-bold mb-2">Интенсивный курс</h3>
                <p className="text-xs sm:text-sm text-white/40 mb-4 sm:mb-5">Европа, США, Канада, Австралия</p>
                <div className="flex items-baseline gap-1 mb-5 sm:mb-6">
                  <span className="text-3xl sm:text-4xl font-black font-mono bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">$75-200</span>
                  <span className="text-xs sm:text-sm text-white/30">/3 месяца</span>
                </div>
                <ul className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-7">
                  {["Всё из базового спринта", "Более глубокое погружение", "Индивидуальный подход", "Фокус на монетизацию (для подростков)", "Вебинары про фриланс и стартапы"].map((f, i) => (
                    <li key={i} className="text-xs sm:text-sm text-white/60 flex items-start gap-2.5">
                      <CheckCircle className="size-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#trial" className="w-full block text-center bg-gradient-to-r from-purple-600 to-violet-600 text-white px-6 py-3 sm:py-3.5 rounded-full text-sm font-semibold shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all no-underline">
                  Записаться на пробный урок
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal className="mt-8 sm:mt-12">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 max-w-[900px] mx-auto">
              {[
                { icon: <UserCheck className="size-5 text-purple-400" />, title: "1:1 с куратором", desc: "Помощь с домашним заданием, разбор сложного места", price: "$20 / час" },
                { icon: <Users className="size-5 text-purple-400" />, title: "Мини-группа (2-3 ребёнка)", desc: "Больше внимания на каждого ребёнка", price: "+30% к цене" },
                { icon: <Star className="size-5 text-purple-400" />, title: "VIP пакет", desc: "Всё включено + еженедельные звонки с родителем", price: "$150 / месяц" },
              ].map((e, i) => (
                <div key={i} className="bg-[#12122a] border border-white/[0.06] rounded-2xl p-5 sm:p-6 hover:border-purple-500/20 transition-all">
                  <div className="flex items-center gap-2 mb-2">
                    {e.icon}
                    <h4 className="text-sm font-bold">{e.title}</h4>
                  </div>
                  <p className="text-xs sm:text-sm text-white/50 mb-2">{e.desc}</p>
                  <span className="font-bold text-purple-300 font-mono text-sm">{e.price}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="mt-10 sm:mt-16">
            <h3 className="text-lg sm:text-xl font-extrabold text-center mb-5 sm:mb-7">Сравнение с альтернативами</h3>
            <div className="overflow-x-auto max-w-[900px] mx-auto -mx-2 px-2">
              <table className="w-full bg-[#12122a] border border-white/[0.06] rounded-2xl overflow-hidden min-w-[500px]">
                <thead>
                  <tr className="bg-[#10101c]">
                    <th className="px-3 sm:px-5 py-3 sm:py-4 text-left text-[0.72rem] sm:text-[0.82rem] uppercase tracking-wider text-white/30 font-bold">Вариант</th>
                    <th className="px-3 sm:px-5 py-3 sm:py-4 text-left text-[0.72rem] sm:text-[0.82rem] uppercase tracking-wider text-white/30 font-bold">Цена</th>
                    <th className="px-3 sm:px-5 py-3 sm:py-4 text-left text-[0.72rem] sm:text-[0.82rem] uppercase tracking-wider text-white/30 font-bold">Результат</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { v: "Школа программирования (12 мес.)", p: "$360-600/год", r: "Выучит синтаксис, может быть", hl: false },
                    { v: "Репетитор (1 час/нед.)", p: "$240-480/год", r: "Помощь без структуры", hl: false },
                    { v: "Видеокурс Udemy", p: "$15-50", r: "Посмотрит и забудет", hl: false },
                    { v: "Vibe Coding (4 занятия/мес.)", p: "$50-80/мес.", r: "Работающий проект в портфолио", hl: true },
                  ].map((row, i) => (
                    <tr key={i} className={`border-t border-white/[0.04] ${row.hl ? "bg-purple-500/[0.06]" : ""}`}>
                      <td className={`px-3 sm:px-5 py-3 sm:py-4 text-xs sm:text-sm ${row.hl ? "text-white font-semibold" : "text-white/50"}`}>{row.v}</td>
                      <td className={`px-3 sm:px-5 py-3 sm:py-4 text-xs sm:text-sm ${row.hl ? "text-white font-semibold" : "text-white/50"}`}>{row.p}</td>
                      <td className={`px-3 sm:px-5 py-3 sm:py-4 text-xs sm:text-sm ${row.hl ? "text-cyan-400 font-semibold" : "text-white/50"}`}>{row.r}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>

          <Reveal className="mt-8 sm:mt-12">
            <div className="bg-[#12122a] border border-purple-500/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 max-w-[700px] mx-auto text-center">
              <div className="flex items-center justify-center gap-2 mb-3">
                <PinIcon className="size-5 text-purple-400" />
                <h3 className="text-base sm:text-lg font-extrabold">Заморозьте цену</h3>
              </div>
              <p className="text-xs sm:text-[0.95rem] text-white/50">Запишитесь на пробный урок в течение 5 дней --- зафиксируете цену на весь период обучения, даже если мы её поднимем.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ====== TESTIMONIALS ====== */}
      <section className="py-16 sm:py-28 px-4 sm:px-6 relative">
        <div className="max-w-[1200px] mx-auto">
          <Reveal className="text-center mb-8 sm:mb-12">
            <span className="inline-flex items-center gap-2 text-[0.78rem] font-semibold tracking-[0.14em] uppercase text-purple-300 bg-purple-500/[0.08] border border-purple-500/[0.12] rounded-full px-5 py-2 mb-5">Отзывы</span>
            <h2 className="text-[clamp(1.6rem,5vw,3.4rem)] font-extrabold leading-tight tracking-[-0.03em]">
              Что говорят <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-300 bg-clip-text text-transparent">родители и дети</span>
            </h2>
          </Reveal>
          <Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {[
                { text: "Записала сына в отчаянии --- он просто сидел в Roblox. На первом занятии он создал свою игру, и я не узнала своего ребёнка! Теперь он каждый день думает о следующем проекте.", name: "Анна К.", role: "Мама Максима, 10 лет", letter: "А" },
                { text: "Кира за 2 месяца создала портфолио и получила первый заказ на Upwork. Это $300 --- её собственные деньги! Она теперь совсем другая, уверенная.", name: "Сергей О.", role: "Папа Киры, 16 лет", letter: "С" },
                { text: "Иван всегда казался медленным в учёбе. Но за месяц на вашем курсе он сделал больше, чем за год в школе. Учителя спросили, откуда такие навыки.", name: "Мария П.", role: "Мама Ивана, 12 лет", letter: "М" },
                { text: "До курса я даже не знала, что можно создавать приложения. Думала, это только для гениев. Теперь точно хочу поступить в технический вуз.", name: "Даша", role: "Ученица, 15 лет", letter: "Д" },
              ].map((t, i) => (
                <div key={i} className="bg-[#12122a] border border-white/[0.06] rounded-2xl p-5 sm:p-7 relative hover:border-purple-500/20 hover:-translate-y-0.5 transition-all duration-300">
                  <div className="absolute top-4 sm:top-5 right-5 sm:right-6 text-4xl sm:text-5xl text-purple-500/10 font-serif leading-none">&ldquo;</div>
                  <div className="flex gap-0.5 mb-3 sm:mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="size-4 text-orange-400 fill-orange-400" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-[0.95rem] text-white/60 leading-relaxed mb-4 sm:mb-5">{t.text}</p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm">{t.letter}</div>
                    <div>
                      <div className="font-bold text-xs sm:text-sm">{t.name}</div>
                      <div className="text-[0.65rem] sm:text-xs text-white/30">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ====== URGENCY ====== */}
      <section className="py-16 sm:py-28 px-4 sm:px-6 bg-gradient-to-r from-red-500/[0.03] to-purple-500/[0.03] border-y border-white/[0.04] relative">
        <div className="max-w-[1200px] mx-auto">
          <Reveal className="text-center mb-8 sm:mb-12">
            <span className="inline-flex items-center gap-2 text-[0.78rem] font-semibold tracking-[0.14em] uppercase text-purple-300 bg-purple-500/[0.08] border border-purple-500/[0.12] rounded-full px-5 py-2 mb-5">Ограниченный набор</span>
            <h2 className="text-[clamp(1.6rem,5vw,3.4rem)] font-extrabold leading-tight tracking-[-0.03em]">
              Запуск нового спринта: <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-300 bg-clip-text text-transparent">1 апреля</span>
            </h2>
            <p className="text-sm sm:text-lg text-white/50 max-w-[660px] mx-auto mt-4 sm:mt-5">Запись открыта до 28 марта. В группе максимум 8 мест.</p>
          </Reveal>
          <Reveal>
            <div className="grid grid-cols-3 gap-3 sm:gap-6 max-w-[900px] mx-auto">
              <div className="bg-[#12122a] border border-white/[0.06] rounded-2xl p-4 sm:p-7 text-center">
                <div className="text-2xl sm:text-4xl font-black font-mono text-purple-300 mb-1">3</div>
                <div className="text-xs sm:text-sm text-white/50 mb-3 sm:mb-5">Свободных места</div>
                <div className="w-full h-2 sm:h-2.5 bg-[#10101c] rounded-full overflow-hidden">
                  <div className="h-full w-[62%] rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 transition-all duration-1000" />
                </div>
                <p className="text-[0.6rem] sm:text-xs text-white/30 mt-1.5 sm:mt-2">62% мест заполнено</p>
              </div>
              <div className="bg-[#12122a] border border-white/[0.06] rounded-2xl p-4 sm:p-7 text-center">
                <div className="text-2xl sm:text-4xl font-black font-mono text-orange-400 mb-1">3 дня</div>
                <div className="text-xs sm:text-sm text-white/50">До конца набора</div>
              </div>
              <div className="bg-[#12122a] border border-white/[0.06] rounded-2xl p-4 sm:p-7 text-center">
                <div className="text-2xl sm:text-4xl font-black font-mono text-cyan-400 mb-1">1 апр</div>
                <div className="text-xs sm:text-sm text-white/50">Старт спринта</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ====== BONUSES ====== */}
      <section className="py-16 sm:py-28 px-4 sm:px-6 bg-[#0a0a14] relative">
        <div className="max-w-[1200px] mx-auto">
          <Reveal className="text-center mb-8 sm:mb-12">
            <span className="inline-flex items-center gap-2 text-[0.78rem] font-semibold tracking-[0.14em] uppercase text-purple-300 bg-purple-500/[0.08] border border-purple-500/[0.12] rounded-full px-5 py-2 mb-5">Бонусы</span>
            <h2 className="text-[clamp(1.6rem,5vw,3.4rem)] font-extrabold leading-tight tracking-[-0.03em]">
              При записи на спринт <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-300 bg-clip-text text-transparent">бесплатно</span>
            </h2>
          </Reveal>
          <Reveal>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
              {[
                { icon: <Palette className="size-6 text-purple-400" />, title: "Стартовый набор дизайна", desc: "20+ шаблонов персонажей в Figma, примеры проектов, чек-лист.", value: "$200" },
                { icon: <FileText className="size-6 text-purple-400" />, title: "Библиотека промптов", desc: "50+ готовых промптов для ChatGPT/Midjourney с примерами.", value: "$150" },
                { icon: <Hash className="size-6 text-purple-400" />, title: "Закрытый Discord", desc: "200+ ребят со всего мира. Общаются, помогают, делятся проектами.", value: "$100" },
                { icon: <Trophy className="size-6 text-purple-400" />, title: "Сертификат", desc: "PDF-сертификат с навыками ребёнка для портфолио и CV.", value: "$50" },
              ].map((b, i) => (
                <div key={i} className="bg-[#12122a] border border-white/[0.06] rounded-2xl p-4 sm:p-6 relative hover:border-purple-500/20 hover:-translate-y-0.5 transition-all duration-300">
                  <span className="absolute top-3 right-3 text-[0.6rem] sm:text-[0.72rem] font-bold text-cyan-400 bg-cyan-500/[0.1] rounded-full px-2 sm:px-2.5 py-0.5">{b.value}</span>
                  <IconBox className="bg-purple-500/[0.1] mb-3">
                    {b.icon}
                  </IconBox>
                  <h4 className="text-xs sm:text-base font-bold mb-1 sm:mb-2">{b.title}</h4>
                  <p className="text-[0.65rem] sm:text-sm text-white/50 leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-center mt-5 sm:mt-7 text-xs sm:text-sm text-white/30">
              Общая стоимость бонусов: <strong className="text-cyan-400">$500</strong> --- бесплатно при записи до 28 марта
            </p>
          </Reveal>
        </div>
      </section>

      {/* ====== GUARANTEES ====== */}
      <section className="py-16 sm:py-28 px-4 sm:px-6 relative">
        <div className="max-w-[1200px] mx-auto">
          <Reveal className="text-center mb-8 sm:mb-12">
            <span className="inline-flex items-center gap-2 text-[0.78rem] font-semibold tracking-[0.14em] uppercase text-purple-300 bg-purple-500/[0.08] border border-purple-500/[0.12] rounded-full px-5 py-2 mb-5">Гарантии</span>
            <h2 className="text-[clamp(1.6rem,5vw,3.4rem)] font-extrabold leading-tight tracking-[-0.03em]">
              Мы настолько уверены, <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-300 bg-clip-text text-transparent">что даём 3 гарантии</span>
            </h2>
          </Reveal>
          <Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {[
                { icon: <Target className="size-8 text-cyan-400" />, title: "Результат в первый день", desc: "Если на пробном уроке ребёнок не создаст мини-проект --- мы возвращаем деньги за спринт." },
                { icon: <Shield className="size-8 text-cyan-400" />, title: "Проект или возврат", desc: "К концу спринта ребёнок не создаст рабочий проект --- полный возврат. За 2 года: 0 возвратов." },
                { icon: <HeartHandshake className="size-8 text-cyan-400" />, title: "Психологическая поддержка", desc: "Если ребёнок расстроен или выгорел --- первая консультация с детским психологом за наш счёт." },
              ].map((g, i) => (
                <div key={i} className="bg-[#12122a] border border-white/[0.06] rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center hover:border-cyan-500/20 hover:-translate-y-0.5 transition-all duration-300">
                  <IconBox className="bg-cyan-500/[0.1] mx-auto mb-4">
                    {g.icon}
                  </IconBox>
                  <h4 className="text-sm sm:text-lg font-bold mb-2 sm:mb-3">{g.title}</h4>
                  <p className="text-xs sm:text-sm text-white/50 leading-relaxed">{g.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ====== FAQ ====== */}
      <section id="faq" className="py-16 sm:py-28 px-4 sm:px-6 bg-[#0a0a14] relative">
        <div className="max-w-[1200px] mx-auto">
          <Reveal className="text-center mb-8 sm:mb-12">
            <span className="inline-flex items-center gap-2 text-[0.78rem] font-semibold tracking-[0.14em] uppercase text-purple-300 bg-purple-500/[0.08] border border-purple-500/[0.12] rounded-full px-5 py-2 mb-5">FAQ</span>
            <h2 className="text-[clamp(1.6rem,5vw,3.4rem)] font-extrabold leading-tight tracking-[-0.03em]">
              Ответы на <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-300 bg-clip-text text-transparent">частые вопросы</span>
            </h2>
          </Reveal>
          <Reveal>
            <div className="max-w-[800px] mx-auto space-y-2 sm:space-y-3">
              <FAQItem question="Нужен ли ребёнку опыт программирования?" answer="Нет, абсолютно не нужен. Мы управляем кодом через естественный язык (промпты). Вместо «напиши цикл for» мы говорим: «Создай мне список из 10 котиков в боте» --- и ИИ пишет код." />
              <FAQItem question="С какого возраста можно начинать?" answer="Минимум 8 лет. В этом возрасте ребёнок может читать инструкции, формулировать вопрос для ИИ и сидеть 1.5 часа на занятии. Если ребёнок в 7 лет готов --- добро пожаловать!" />
              <FAQItem question="Какой нужен компьютер?" answer="Любой обычный ноутбук, Chromebook или даже планшет со стабильным интернетом (10 Мбит/с). Всё работает в браузере Chrome --- скачивать ничего не нужно." />
              <FAQItem question="Не отупеет ли ребёнок от использования ИИ?" answer="Наоборот --- разовьётся критическое мышление. Мы учим проверять факты (ИИ галлюцинирует), использовать ИИ как ассистента, а не шпаргалку. Калькулятор не делает человека глупее в математике --- он экономит время." />
              <FAQItem question="А если ребёнку не понравится?" answer="На пробном уроке вы сразу поймёте. Если ребёнок создал проект и улыбался --- понравится. Если скучал --- скажите прямо, и мы вернём деньги." />
              <FAQItem question="Сколько часов нужно заниматься дома?" answer="10-15 минут в день или 30-60 минут один раз в неделю. Основной материал проходим вместе на занятиях. Мы не заставляем сидеть часами." />
              <FAQItem question="Есть ли гарантия результата?" answer="Да. К концу спринта у ребёнка будет рабочий проект. На пробном уроке он уже создаст мини-проект. Если не получится --- возвращаем деньги." />
              <FAQItem question="Как часто открываются новые группы?" answer="Каждый месяц (новый спринт 1-го числа). 3-4 группы: утренние, вечерние, выходные. Минимум 4 ребёнка, максимум 8. Места ограничены." />
              <FAQItem question="Что если ребёнок пропустит занятие?" answer="Запись загружается в Discord. Ребёнок смотрит в своё время, куратор даёт задание. Но не пропускайте часто --- если 3+ пропуска, обсудим." />
              <FAQItem question="Какие результаты за 1, 3, 6 месяцев?" answer="1 месяц: 1 проект, уверенность. 3 месяца: 3+ проектов, готовность к фрилансу. 6-9 месяцев: 10+ проектов, первые доходы, трансформация с потребителя на создателя." />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ====== CTA FINAL ====== */}
      <section id="trial" className="py-16 sm:py-28 px-4 sm:px-6 bg-gradient-to-r from-purple-500/[0.06] to-cyan-500/[0.04] border-t border-white/[0.04] relative">
        <div className="max-w-[1200px] mx-auto">
          <Reveal className="text-center mb-8 sm:mb-12">
            <span className="inline-flex items-center gap-2 text-[0.78rem] font-semibold tracking-[0.14em] uppercase text-purple-300 bg-purple-500/[0.08] border border-purple-500/[0.12] rounded-full px-5 py-2 mb-5">Выбор за вами</span>
            <h2 className="text-[clamp(1.6rem,5vw,3.4rem)] font-extrabold leading-tight tracking-[-0.03em]">
              Два пути <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-300 bg-clip-text text-transparent">для вашего ребёнка</span>
            </h2>
          </Reveal>

          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-7 max-w-[900px] mx-auto mb-8 sm:mb-12">
              <div className="bg-[#12122a] border border-red-500/20 rounded-2xl p-5 sm:p-8">
                <div className="flex items-center gap-2 mb-4 sm:mb-5">
                  <X className="size-5 text-red-400" />
                  <h4 className="text-base sm:text-lg font-bold text-red-400">Ничего не менять</h4>
                </div>
                <ul className="space-y-3 sm:space-y-3.5">
                  {[
                    "Через месяц: TikTok 4 часа в день",
                    "Через 3 мес.: «Почему я ничего не умею?»",
                    "Через 6 мес.: Страх перед выбором профессии",
                    "Через год: «Если бы начал раньше...»",
                  ].map((item, i) => (
                    <li key={i} className="text-xs sm:text-sm text-white/50 flex items-start gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-red-500/50 mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#12122a] border border-cyan-500/20 rounded-2xl p-5 sm:p-8">
                <div className="flex items-center gap-2 mb-4 sm:mb-5">
                  <CheckCircle className="size-5 text-cyan-400" />
                  <h4 className="text-base sm:text-lg font-bold text-cyan-400">Записаться на пробный урок</h4>
                </div>
                <ul className="space-y-3 sm:space-y-3.5">
                  {[
                    "День 1: Первый проект, «Я это могу!»",
                    "1 месяц: Проект в портфолио, уверенность x10",
                    "3 месяца: 3 проекта, готовность к фрилансу",
                    "1 год: Трансформация в создателя",
                  ].map((item, i) => (
                    <li key={i} className="text-xs sm:text-sm text-white/50 flex items-start gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-cyan-500/70 mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-[#12122a] border border-purple-500/20 rounded-2xl sm:rounded-3xl p-6 sm:p-12 max-w-[700px] mx-auto text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-cyan-500 to-pink-500" />
              <h3 className="text-xl sm:text-2xl font-extrabold mb-3">Бесплатный пробный урок</h3>
              <p className="text-sm sm:text-base text-white/50 mb-6 sm:mb-7">1.5 часа на Zoom. Ребёнок создаст свой первый мини-проект. Никаких скрытых платежей.</p>
              <a href="#" className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-violet-600 text-white px-7 sm:px-10 py-3.5 sm:py-4 rounded-full text-base sm:text-lg font-bold shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:-translate-y-0.5 transition-all no-underline mb-4 sm:mb-5">
                Записаться на пробный урок
                <ArrowRight className="size-4 sm:size-5" />
              </a>
              <div className="flex flex-wrap gap-3 sm:gap-4 justify-center mt-2 sm:mt-3 text-xs sm:text-sm text-white/30">
                <span className="flex items-center gap-1"><Calendar className="size-3.5" /> Пробный: 25-28 марта</span>
                <span className="flex items-center gap-1"><Rocket className="size-3.5" /> Старт: 1 апреля</span>
                <span className="flex items-center gap-1"><Gift className="size-3.5" /> Бонусы $500 бесплатно</span>
              </div>
            </div>
          </Reveal>

          <Reveal className="mt-10 sm:mt-16">
            <div className="max-w-[700px] mx-auto text-center">
              <p className="text-sm sm:text-lg text-white/50 leading-relaxed italic">
                &laquo;Мы создавали Vibe Coding не для заработка. Мы хотели изменить способ обучения детей --- показать, что программирование и ИИ --- это не скучно, это круто. Каждый месяц видеть трансформацию ребёнка --- бесценно.&raquo;
              </p>
              <p className="mt-4 font-bold text-purple-300">--- Команда Vibe Coding</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ====== FOOTER ====== */}
      <footer className="border-t border-white/[0.04] bg-[#0a0a14] py-8 sm:py-10 px-4 sm:px-6">
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-5 sm:mb-6">
            <a href="mailto:hello@vibecoding.com" className="text-xs sm:text-sm text-white/40 hover:text-white transition-colors flex items-center gap-1.5 no-underline">
              <Mail className="size-3.5 sm:size-4" /> hello@vibecoding.com
            </a>
            <a href="#" className="text-xs sm:text-sm text-white/40 hover:text-white transition-colors flex items-center gap-1.5 no-underline">
              <MessageCircle className="size-3.5 sm:size-4" /> @vibecoding_support
            </a>
            <a href="#" className="text-xs sm:text-sm text-white/40 hover:text-white transition-colors flex items-center gap-1.5 no-underline">
              <Phone className="size-3.5 sm:size-4" /> WhatsApp
            </a>
            <a href="#" className="text-xs sm:text-sm text-white/40 hover:text-white transition-colors flex items-center gap-1.5 no-underline">
              <Globe className="size-3.5 sm:size-4" /> Discord
            </a>
          </div>
          <p className="text-[0.65rem] sm:text-xs text-white/20">&copy; 2025 Vibe Coding & AI. Все права защищены.</p>
        </div>
      </footer>

      {/* ====== FLOATING CTA ====== */}
      <div className={`fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 transition-all duration-300 ${showFloat ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5 pointer-events-none"}`}>
        <a href="#trial" className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-violet-600 text-white px-5 sm:px-7 py-3 sm:py-3.5 rounded-full font-bold shadow-xl shadow-purple-500/40 hover:shadow-purple-500/60 transition-all no-underline text-xs sm:text-sm">
          <Rocket className="size-3.5 sm:size-4" />
          Записаться
        </a>
      </div>
    </div>
  );
}
