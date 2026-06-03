"use client";

import React, { useState, useEffect, useRef } from "react";
import { 
  Home, 
  TrendingUp, 
  Search as SearchIcon, 
  Bookmark, 
  Trash2, 
  Clock, 
  BookOpen, 
  ChevronLeft, 
  Send, 
  Cpu, 
  Users, 
  Share2, 
  ExternalLink, 
  Zap, 
  Compass, 
  Bell, 
  Activity, 
  Smile, 
  MapPin, 
  AlertTriangle,
  Sparkles,
  Info,
  ArrowUpRight,
  MessageCircle,
  User,
  Lock,
  Shield,
  Camera,
  LogOut,
  CheckCircle,
  AlertCircle,
  Radio,
  FileText,
  BellOff
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Replicating colors.ts from real theme
const colors = {
  background: {
    primary: '#05050A',
    secondary: '#11101A',
    tertiary: '#1e1b2e',
  },
  neon: {
    cyan: '#00C6FF',
    purple: '#6A25F4',
    pink: '#FF007A',
    green: '#4ADE80',
    red: '#EF4444',
    blue: '#2563EB',
  },
  text: {
    primary: '#F8FAFC',
    secondary: '#94A3B8',
    tertiary: '#64748B',
  }
};

// Replicating mockTrends.ts from real data
interface TrendItem {
  trendId: string;
  title: string;
  category: string;
  source: string;
  trendScore: number;
  viralScore: number;
  engagementScore: number;
  isEmerging: boolean;
  sentiment: string;
  sentimentScore: number;
  aiSummary: string;
  time: string;
  aiConfidence: number;
  readTime: string;
  growth: string;
  growthMomentum: string;
  velocityHistory: number[];
  sourceUrl: string;
  sourceConsistency: number;
  dataCompleteness: number;
  keyDrivers: Array<{ title: string; desc: string }>;
  aiPrediction: string;
  keywords: string[];
  whyTrending: string;
  targetAudience: string;
}

const MOCK_TRENDS: TrendItem[] = [
  {
    trendId: 'trend-1',
    title: 'Generative AI Agent Orchestrators',
    category: 'AI & Tech',
    source: 'TechCrunch',
    trendScore: 98,
    viralScore: 98,
    engagementScore: 120, // 120k
    isEmerging: true,
    sentiment: 'Positive',
    sentimentScore: 88,
    aiSummary: 'Autonomous multi-agent networks are superseding standalone LLM chats, driving massive enterprise automation workflows with zero human intervention.',
    time: '12m ago',
    aiConfidence: 96,
    readTime: '5 min read',
    growth: '+142%',
    growthMomentum: 'viral',
    whyTrending: 'Major funding rounds for agent startups and releases of auto-agent frameworks (LangGraph, CrewAI) have driven widespread developer adoption.',
    targetAudience: 'Enterprise architects, software engineers, automation researchers',
    velocityHistory: [40, 55, 65, 75, 80, 92, 98],
    sourceUrl: 'https://techcrunch.com',
    sourceConsistency: 92,
    dataCompleteness: 95,
    keyDrivers: [
      { title: 'Framework Proliferation', desc: 'Open source frameworks making multi-agent design accessible.' },
      { title: 'Enterprise ROI', desc: 'Companies reporting 70% manual-task reductions using autonomous loops.' }
    ],
    aiPrediction: 'Exponential growth expected to continue as multi-modal agents gain advanced browser interaction capabilities.',
    keywords: ['LangGraph', 'Multi-Agent', 'AutoGPT', 'AI Automation']
  },
  {
    trendId: 'trend-2',
    title: 'WebGPU Realtime Fluid Simulations',
    category: 'Web Dev',
    source: 'GitHub',
    trendScore: 94,
    viralScore: 92,
    engagementScore: 85,
    isEmerging: true,
    sentiment: 'Positive',
    sentimentScore: 92,
    aiSummary: 'Developers are utilizing WebGPU to render ultra-realistic 3D fluid dynamics directly in modern browsers at 60FPS without server overhead.',
    time: '45m ago',
    aiConfidence: 94,
    readTime: '4 min read',
    growth: '+95%',
    growthMomentum: 'accelerating',
    whyTrending: 'The deprecation of WebGL in favor of WebGPU enables direct access to graphics cards, resulting in 3x performance gains for in-browser computations.',
    targetAudience: 'Frontend developers, game designers, creative coders',
    velocityHistory: [30, 42, 50, 68, 74, 85, 94],
    sourceUrl: 'https://github.com',
    sourceConsistency: 85,
    dataCompleteness: 90,
    keyDrivers: [
      { title: 'Direct GPU Pipeline', desc: 'Low-overhead CPU-to-GPU data pipelines in standard web pages.' },
      { title: '3D Graphics Boom', desc: 'Surging demand for immersive 3D ecommerce and interactive portfolio experiences.' }
    ],
    aiPrediction: 'WebGPU will become standard for web graphics by Q4 2026, forcing a major rebuild of active design libraries.',
    keywords: ['Three.js', 'WebGPU', 'Shaders', 'Fluid Dynamics']
  },
  {
    trendId: 'trend-3',
    title: 'Decentralized Physical Infrastructure (DePIN)',
    category: 'Finance',
    source: 'Coindesk',
    trendScore: 89,
    viralScore: 86,
    engagementScore: 72,
    isEmerging: false,
    sentiment: 'Neutral',
    sentimentScore: 68,
    aiSummary: 'Blockchain incentives are driving crowdsourced deployment of telecommunication nodes, storage networks, and compute clusters globally.',
    time: '2h ago',
    aiConfidence: 88,
    readTime: '6 min read',
    growth: '+74%',
    growthMomentum: 'emerging',
    whyTrending: 'DePIN networks bypass traditional capital expenditures by rewarding node hosters, offering services up to 80% cheaper than Amazon or Google Cloud.',
    targetAudience: 'Web3 investors, server operators, network architects',
    velocityHistory: [50, 52, 58, 62, 70, 80, 89],
    sourceUrl: 'https://coindesk.com',
    sourceConsistency: 80,
    dataCompleteness: 85,
    keyDrivers: [
      { title: 'Incentive Alignment', desc: 'Token distribution mechanics rewarding hardware setups.' },
      { title: 'GPU Shortage', desc: 'AI startups seeking crowdsourced compute rigs outside major hubs.' }
    ],
    aiPrediction: 'Infrastructure token utility will stabilize as real-world computation demand outpaces centralized servers.',
    keywords: ['Helium', 'Render Network', 'Filecoin', 'Compute Node']
  },
  {
    trendId: 'trend-4',
    title: 'Zero-Party Data Collection Architectures',
    category: 'Marketing',
    source: 'Wired',
    trendScore: 78,
    viralScore: 75,
    engagementScore: 40,
    isEmerging: false,
    sentiment: 'Negative',
    sentimentScore: 42,
    aiSummary: 'Rising cookie deprecation is forcing brands to design hyper-transparent user-consented data loops or face severe conversion drops.',
    time: '4h ago',
    aiConfidence: 91,
    readTime: '7 min read',
    growth: '-15%',
    growthMomentum: 'declining',
    whyTrending: 'Users are increasingly rejecting corporate tracking, forcing developers to build active survey-based consenting models.',
    targetAudience: 'Privacy officers, marketing managers, data engineers',
    velocityHistory: [90, 88, 85, 82, 80, 79, 78],
    sourceUrl: 'https://wired.com',
    sourceConsistency: 78,
    dataCompleteness: 88,
    keyDrivers: [
      { title: 'Regulation Compliance', desc: 'Strict GDPR and CCPA updates enforcing immediate consent policies.' },
      { title: 'Consumer Trust', desc: 'Higher engagement values reported by brands using honest questionnaires.' }
    ],
    aiPrediction: 'Brands ignoring custom consented data collection will lose access to 60% of their target market data by next year.',
    keywords: ['Cookie deprecation', 'GDPR', 'First-Party Data', 'Privacy']
  },
  {
    trendId: 'trend-5',
    title: 'Glassmorphism Design Systems Renaissance',
    category: 'Design',
    source: 'Dribbble',
    trendScore: 85,
    viralScore: 88,
    engagementScore: 60,
    isEmerging: true,
    sentiment: 'Positive',
    sentimentScore: 85,
    aiSummary: 'Subtle high-contrast glassmorphic interfaces with neon backdrops are trending heavily across AI-native developer tooling platforms.',
    time: '6h ago',
    aiConfidence: 85,
    readTime: '3 min read',
    growth: '+110%',
    growthMomentum: 'accelerating',
    whyTrending: 'High-contrast blur styling offers clean text hierarchies while maintaining modern, premium futuristic neon mesh grids.',
    targetAudience: 'UI/UX designers, product owners, frontend engineers',
    velocityHistory: [25, 38, 48, 55, 68, 76, 85],
    sourceUrl: 'https://dribbble.com',
    sourceConsistency: 88,
    dataCompleteness: 82,
    keyDrivers: [
      { title: 'AI Branding Trend', desc: 'AI developer tools seeking to differentiate themselves visually.' },
      { title: 'Hardware Optimization', desc: 'Modern browsers rendering backdrop-filters smoothly at 120Hz.' }
    ],
    aiPrediction: 'Futuristic frosted overlays will peak in developer SaaS applications before shifting to organic texturing.',
    keywords: ['Glassmorphism', 'Neon Glow', 'Web Design', 'UI Systems']
  }
];

const getLifecycleColor = (state: string) => {
  switch(state.toLowerCase()) {
    case 'emerging': return '#0ea5e9';
    case 'accelerating': return '#00F2FE';
    case 'viral': return '#a855f7';
    case 'declining': return '#f43f5e';
    case 'dead': return '#64748b';
    default: return '#0ea5e9';
  }
};

const CATEGORIES = ['All', 'AI & Tech', 'Web Dev', 'Finance', 'Marketing', 'Design'];

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

export function TrendPulseSimulator() {
  // Navigation stack state
  const [currentScreen, setCurrentScreen] = useState<string>('Home'); // Home, Trending, Search, Saved, CategoryTrends, Detail, TrendAnalysis, TrendGraph, AIChat
  const [historyStack, setHistoryStack] = useState<string[]>([]);
  
  // Navigation tabs active sub-state (when in Tab Screens)
  const [activeTab, setActiveTab] = useState<'Home' | 'Trending' | 'Search' | 'Saved'>('Home');
  
  // App state
  const [activeTrend, setActiveTrend] = useState<TrendItem>(MOCK_TRENDS[0]);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [savedTrendIds, setSavedTrendIds] = useState<string[]>(['trend-1', 'trend-3']);
  const [chatMessages, setChatMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I am Shahkal AI, your advanced trend intelligence assistant. Ask me anything!",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isChatLoading, setIsChatLoading] = useState(false);
  const [trendingSubTab, setTrendingSubTab] = useState<'Trending' | 'For You' | 'Emerging'>('Trending');
  const [timeFilter, setTimeFilter] = useState<'24H' | '7D' | '30D'>('24H');
  
  // Sound or notifications mock state
  const [pulseScore, setPulseScore] = useState<number>(88);

  // Mock notifications and user states
  interface Notification {
    _id: string;
    title: string;
    message: string;
    type: 'hot_trend' | 'multi_source' | 'viral_spike' | 'system';
    read: boolean;
    createdAt: string;
    trendId?: string;
  }

  const [user, setUser] = useState({
    displayName: "Son Goko",
    email: "goko.demo@trendpulse.ai",
    emailVerified: false,
    photoURL: "",
    bio: "Exploring social media trends with Gemini AI."
  });

  const [notifications, setNotifications] = useState<Notification[]>([
    {
      _id: 'notif-1',
      title: 'Viral Spike Alert',
      message: 'Generative AI Agent Orchestrators has crossed +140% growth momentum on GitHub.',
      type: 'viral_spike',
      read: false,
      createdAt: new Date(Date.now() - 1000 * 60 * 12).toISOString(),
      trendId: 'trend-1'
    },
    {
      _id: 'notif-2',
      title: 'Multi-Source Convergence',
      message: 'WebGPU Realtime Fluid Simulations is trending on Reddit, News, and GitHub simultaneously.',
      type: 'multi_source',
      read: false,
      createdAt: new Date(Date.now() - 1000 * 60 * 45).toISOString(),
      trendId: 'trend-2'
    },
    {
      _id: 'notif-3',
      title: 'System Alert',
      message: 'TrendPulse DB sync completed successfully. 42 new micro-trends indexed.',
      type: 'system',
      read: true,
      createdAt: new Date(Date.now() - 1000 * 60 * 120).toISOString(),
    },
    {
      _id: 'notif-4',
      title: 'Hot Trend Alert',
      message: 'Decentralized Physical Infrastructure (DePIN) has hit the top trending charts.',
      type: 'hot_trend',
      read: true,
      createdAt: new Date(Date.now() - 1000 * 60 * 240).toISOString(),
      trendId: 'trend-3'
    }
  ]);

  const [logoutModalVisible, setLogoutModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [newNameInput, setNewNameInput] = useState("");
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const unreadCount = notifications.filter(n => !n.read).length;

  // Time tracker for status bar
  const [timeString, setTimeString] = useState("17:47");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(
        now.getHours().toString().padStart(2, '0') + ':' + 
        now.getMinutes().toString().padStart(2, '0')
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  // Pulse animation trigger (Score breathes)
  const [pulseScale, setPulseScale] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      setPulseScale(prev => prev === 1 ? 1.12 : 1);
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  // Refs for drag-to-scroll functionality
  const categoryScrollRef = useRef<HTMLDivElement>(null);
  const carouselScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bindDragScroll = (el: HTMLDivElement | null) => {
      if (!el) return null;
      let isDown = false;
      let startX: number;
      let scrollLeft: number;

      const onMouseDown = (e: MouseEvent) => {
        isDown = true;
        startX = e.pageX - el.offsetLeft;
        scrollLeft = el.scrollLeft;
        el.style.cursor = 'grabbing';
      };

      const onMouseLeave = () => {
        isDown = false;
        el.style.cursor = 'grab';
      };

      const onMouseUp = () => {
        isDown = false;
        el.style.cursor = 'grab';
      };

      const onMouseMove = (e: MouseEvent) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - el.offsetLeft;
        const walk = (x - startX) * 1.5; // scroll speed multiplier
        el.scrollLeft = scrollLeft - walk;
      };

      el.addEventListener('mousedown', onMouseDown);
      el.addEventListener('mouseleave', onMouseLeave);
      el.addEventListener('mouseup', onMouseUp);
      el.addEventListener('mousemove', onMouseMove);
      el.style.cursor = 'grab';

      return () => {
        el.removeEventListener('mousedown', onMouseDown);
        el.removeEventListener('mouseleave', onMouseLeave);
        el.removeEventListener('mouseup', onMouseUp);
        el.removeEventListener('mousemove', onMouseMove);
        el.style.cursor = '';
      };
    };

    const cleanupCategory = bindDragScroll(categoryScrollRef.current);
    const cleanupCarousel = bindDragScroll(carouselScrollRef.current);

    return () => {
      if (cleanupCategory) cleanupCategory();
      if (cleanupCarousel) cleanupCarousel();
    };
  }, [currentScreen, activeTab]);

  // Helper function to push screen to navigation stack
  const navigateTo = (screen: string, params?: { trend?: TrendItem; category?: string }) => {
    setHistoryStack(prev => [...prev, currentScreen]);
    if (params?.trend) setActiveTrend(params.trend);
    if (params?.category) setActiveCategory(params.category);
    setCurrentScreen(screen);
  };

  // Helper function to pop screen from navigation stack
  const goBack = () => {
    if (historyStack.length > 0) {
      const prev = historyStack[historyStack.length - 1];
      setHistoryStack(prevStack => prevStack.slice(0, -1));
      setCurrentScreen(prev);
    } else {
      setCurrentScreen('Home');
    }
  };

  // Chat message send handler
  const sendChatMessage = async (textToSend: string) => {
    if (!textToSend.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      text: textToSend.trim(),
      sender: 'user',
      timestamp: new Date()
    };

    setChatMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsChatLoading(true);

    // Simulated chatbot intelligence (Shahkal AI)
    setTimeout(() => {
      const query = textToSend.toLowerCase();
      let replyText = "Based on our TrendPulse AI model, I couldn't find a direct matches. However, our indicators show general volume acceleration across Tech categories (+14.5% daily).";

      // Context-aware replies
      if (query.includes('agent') || query.includes('orchestrator') || query.includes('trend-1')) {
        replyText = "Shahkal AI Report:\n'Generative AI Agent Orchestrators' are currently peaking with a Composite Pulse Score of 98/100.\n\nKey analysis:\n- Sentiment: 88% Positive\n- Driving force: Shift from chat completions to autonomous loop workflows (LangGraph, CrewAI).\n- Momentum: +142% velocity spike. Highly active in Silicon Valley developer hubs.";
      } else if (query.includes('webgpu') || query.includes('fluid') || query.includes('trend-2')) {
        replyText = "Shahkal AI Report:\n'WebGPU Realtime Fluid Simulations' have hit a 94 Pulse Score.\n\nInsight:\n- High rendering efficiency directly in modern browser sandboxes without cloud dependencies.\n- Volume growth: +95% this week.\n- Developers are using this to build interactive mesh graphics and custom shaders at 60FPS.";
      } else if (query.includes('depin') || query.includes('infrastructure') || query.includes('trend-3')) {
        replyText = "Shahkal AI Report:\n'Decentralized Physical Infrastructure (DePIN)' is showing steady growth at 89 composite score.\n\nInsight:\n- Strong adoption for crowdsourced storage, compute nodes, and 5G telecommunications networks.\n- Driven by worldwide GPU shortages; startups are renting decentralized compute loops at a fraction of cloud cost.";
      } else if (query.includes('cookie') || query.includes('zero-party') || query.includes('trend-4')) {
        replyText = "Shahkal AI Report:\n'Zero-Party Data Collection Architectures' are currently displaying declining momentum (78 score, -15% growth).\n\nInsight:\n- High regulatory pressure. However, user fatigue around cookies is causing designers to rethink survey consenting formats.";
      } else if (query.includes('glassmorphism') || query.includes('design') || query.includes('trend-5')) {
        replyText = "Shahkal AI Report:\n'Glassmorphism Design Systems Renaissance' is accelerating strongly (+110% growth).\n\nInsight:\n- Highly popular for AI products wanting premium futuristic glowing dashboards.\n- Recommends frosted overlay designs, neon radial lights, and solid borders to ensure high contrast.";
      } else if (query.includes('trending') || query.includes('today') || query.includes('nich')) {
        replyText = `Today's top trending topics from News, YouTube & Reddit: \n\n1. Generative AI Agent Orchestrators (+142%)\n2. WebGPU Realtime Fluid Simulations (+95%)\n3. Glassmorphism Renaissance (+110%)\n\nWhich of these would you like to analyze in detail?`;
      }

      setChatMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        text: replyText,
        sender: 'ai',
        timestamp: new Date()
      }]);
      setIsChatLoading(false);
    }, 1500);
  };

  // Toggle saved items
  const toggleBookmark = (id: string) => {
    setSavedTrendIds(prev => 
      prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id]
    );
  };

  // Get active tab UI component
  const renderTabContent = () => {
    switch(activeTab) {
      case 'Home':
        return renderHomeScreen();
      case 'Trending':
        return renderTrendingScreen();
      case 'Search':
        return renderSearchScreen();
      case 'Saved':
        return renderSavedScreen();
      default:
        return renderHomeScreen();
    }
  };

  // ────────────────────────────────────────────────────────
  // SCREEN 1: HOME SCREEN
  // ────────────────────────────────────────────────────────
  const renderHomeScreen = () => {
    const sentimentLabel = pulseScore >= 80 ? 'Hyperactive' : pulseScore >= 65 ? 'Bullish' : 'Neutral';
    const sentimentColor = pulseScore >= 80 ? colors.neon.cyan : colors.neon.green;

    return (
      <div className="relative w-full h-full flex flex-col bg-[#05050A] select-none overflow-hidden">
        {/* Scrollable feed content */}
        <div className="flex-1 overflow-y-auto pb-24 scrollbar-none relative">
          {/* Ambient background glow */}
          <div className="absolute top-[-50px] left-[-50px] w-[200px] h-[200px] rounded-full bg-cyan-500/5 blur-[80px] pointer-events-none shrink-0" style={{ flexShrink: 0 }} />

          {/* HEADER */}
          <div className="flex items-center justify-between px-4 pt-5 pb-2 shrink-0" style={{ flexShrink: 0 }}>
            <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => navigateTo('Profile')}>
              <div className="p-[2px] rounded-full bg-gradient-to-r from-purple-600 via-cyan-400 to-blue-500">
                <div className="w-8 h-8 rounded-full bg-[#1e1b2e] flex items-center justify-center overflow-hidden">
                  {user.photoURL ? (
                    <img src={user.photoURL} alt="avatar" className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-[#F8FAFC] text-[10px] font-black">
                      {user.displayName === "Son Goko" ? "Goko" : user.displayName.split(" ").map(n => n[0]).join("").substring(0, 2).toUpperCase()}
                    </span>
                  )}
                </div>
              </div>
              <div>
                <p className="text-[#94A3B8] text-[11px] leading-none mb-0.5">Welcome back</p>
                <p className="text-[#F8FAFC] text-[14px] font-black tracking-[0.3px]">Hello, {user.displayName === "Son Goko" ? "Goko" : user.displayName.split(" ")[0]} 👋</p>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <button 
                onClick={() => setActiveTab('Search')}
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#E2E8F0] hover:bg-white/10 active:scale-95 transition-all"
              >
                <SearchIcon size={14} />
              </button>
              <button 
                onClick={() => navigateTo('Notifications')}
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#E2E8F0] hover:bg-white/10 active:scale-95 transition-all relative"
              >
                <Bell size={14} />
                {unreadCount > 0 && (
                  <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-[#EF4444] border border-[#05050A]" />
                )}
              </button>
            </div>
          </div>

          {/* PULSE CARD */}
          <div 
            className="mx-4 my-3 p-4 rounded-[16px] bg-[#11101A] border flex items-center justify-between shadow-xl relative overflow-hidden cursor-pointer shrink-0"
            style={{ borderColor: 'rgba(0, 242, 254, 0.2)', flexShrink: 0 }}
            onClick={() => navigateTo('TrendGraph', { trend: MOCK_TRENDS[0] })}
          >
            {/* Subtle light leak */}
            <div className="absolute top-0 right-0 w-28 h-28 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex flex-col justify-between">
              <div>
                <p className="text-[#94A3B8] text-[10px] font-bold tracking-[1.2px] uppercase mb-1">Global AI Pulse</p>
                <p className="text-[#F8FAFC] text-[22px] font-black leading-none tracking-wide" style={{ color: sentimentColor }}>{sentimentLabel}</p>
              </div>
              <div 
                className="flex items-center gap-1 px-2 py-0.5 rounded-full mt-2 self-start"
                style={{ backgroundColor: `${sentimentColor}22` }}
              >
                <Activity size={12} className="animate-pulse" style={{ color: sentimentColor }} />
                <span className="text-[10px] font-bold" style={{ color: sentimentColor }}>
                  {pulseScore >= 80 ? 'High Engagement' : pulseScore >= 65 ? 'Growing Fast' : pulseScore >= 45 ? 'Steady' : 'Slowing'}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-center relative w-[72px] h-[72px] shrink-0" style={{ flexShrink: 0 }}>
              {/* Animated breathing ring */}
              <div 
                className="absolute w-[72px] h-[72px] rounded-full border-2 transition-transform duration-1000 top-0 left-0"
                style={{ transform: `scale(${pulseScale})`, borderColor: `${sentimentColor}33` }}
              />
              {/* Score background */}
              <div className="w-[58px] h-[58px] rounded-full bg-gradient-to-br from-purple-600 via-cyan-400 to-blue-500 p-[2.5px] flex items-center justify-center shadow-lg z-10">
                <div className="w-full h-full rounded-full bg-[#0A0515] flex flex-col items-center justify-center">
                  <span className="text-white text-[20px] font-black leading-none">{pulseScore}</span>
                  <span className="text-gray-500 text-[8px] mt-0.5 font-bold">Score</span>
                </div>
              </div>
            </div>
          </div>

          {/* FEATURED TRENDS CAROUSEL */}
          <div className="px-4 mt-4 flex items-center justify-between shrink-0" style={{ flexShrink: 0 }}>
            <p className="text-[#F8FAFC] text-[16px] font-black tracking-[0.3px]">Featured Trends</p>
            <span 
              onClick={() => navigateTo('CategoryTrends', { category: 'All' })}
              className="text-[#00C6FF] text-[12px] font-semibold hover:underline cursor-pointer"
            >
              Explore all
            </span>
          </div>

          {/* CAROUSEL WRAPPER */}
          <div 
            ref={carouselScrollRef}
            className="flex gap-3 overflow-x-auto px-4 py-3 scrollbar-none snap-x snap-mandatory shrink-0"
            style={{ height: 185, flexShrink: 0 }}
          >
            {MOCK_TRENDS.slice(0, 3).map((item) => (
              <div 
                key={item.trendId}
                onClick={() => navigateTo('Detail', { trend: item })}
                className="shrink-0 w-[220px] h-[155px] rounded-[16px] border border-white/10 bg-[#1e1b2e] relative overflow-hidden snap-start cursor-pointer hover:border-cyan-500/30 transition-colors"
                style={{ flexShrink: 0 }}
              >
                {/* Cover background */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050510]/95 via-[#0a0514]/60 to-transparent z-10" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#1e1b2e] to-[#2a2440] z-0" />
                
                {/* Header badges inside card */}
                <div className="absolute top-3.5 left-3.5 right-3.5 flex justify-between items-center z-20">
                  <span className="px-2 py-0.5 rounded-[5px] text-[9px] font-black uppercase bg-[#00F2FE]/20 border border-[#00F2FE]/30 text-[#00F2FE] tracking-[0.2px]">
                    #{item.category.replace(/\s+/g, '')}
                  </span>
                  <span 
                    className="px-1.5 py-0.5 rounded-[4px] text-[8px] font-extrabold uppercase border"
                    style={{ 
                      color: getLifecycleColor(item.growthMomentum),
                      borderColor: getLifecycleColor(item.growthMomentum),
                      backgroundColor: getLifecycleColor(item.growthMomentum) + '20'
                    }}
                  >
                    {item.growthMomentum}
                  </span>
                </div>

                {/* Title & Stats */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 z-20 flex flex-col">
                  <p className="text-white text-[14px] font-black leading-[18px] mb-1.5 line-clamp-2">{item.title}</p>
                  
                  {/* Sparkline */}
                  <div className="flex items-end gap-[2px] h-3 mb-2">
                    {item.velocityHistory.map((val, i) => (
                      <div 
                        key={i}
                        className="w-1 rounded-[1.5px]"
                        style={{ 
                          height: `${Math.max(2.5, (val / 100) * 12)}px`,
                          backgroundColor: i === 6 ? '#00F2FE' : 'rgba(0, 242, 254, 0.4)'
                        }}
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-1">
                    <TrendingUp size={12} className="text-[#4ade80]" />
                    <span className="text-[#4ade80] text-[11px] font-bold">{item.growth} velocity</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* RISING FAST LIST */}
          <div className="px-4 mt-3 pb-1 shrink-0" style={{ flexShrink: 0 }}>
            <p className="text-[#F8FAFC] text-[16px] font-black tracking-[0.3px]">Rising Fast</p>
          </div>

          <div className="px-4 space-y-2 shrink-0" style={{ flexShrink: 0 }}>
            {MOCK_TRENDS.map((item, index) => (
              <div 
                key={item.trendId}
                onClick={() => navigateTo('Detail', { trend: item })}
                className="flex items-center bg-[#140f1e]/60 border border-white/[0.04] rounded-[14px] p-2.5 hover:border-cyan-500/20 transition-all cursor-pointer shrink-0 justify-between"
                style={{ flexShrink: 0 }}
              >
                <span className="text-[#64748B] font-extrabold text-[13px] w-[20px] shrink-0" style={{ flexShrink: 0 }}>{index + 1}</span>
                
                <div 
                  className="w-11 h-11 rounded-[8px] bg-gradient-to-br from-[#1e1b2e] to-[#2a2440] flex items-center justify-center shrink-0 border border-white/5"
                  style={{ flexShrink: 0 }}
                >
                  <Activity size={18} className="text-gray-500" />
                </div>

                <div className="flex-1 min-w-0 ml-3 pr-2 flex flex-col justify-center">
                  <p className="text-[#F8FAFC] text-[12px] font-bold leading-[16px] mb-0.5 line-clamp-2">{item.title}</p>
                  <div className="flex items-center gap-x-1.5 text-[10px] text-gray-500 flex-wrap">
                    <span className="text-[#94A3B8] font-medium">{item.source}</span>
                    <div className="w-1 h-1 rounded-full bg-[#475569]" />
                    <span 
                      className="font-extrabold tracking-wider uppercase text-[8px]"
                      style={{ color: getLifecycleColor(item.growthMomentum) }}
                    >
                      {item.growthMomentum}
                    </span>
                    <div className="w-1 h-1 rounded-full bg-[#475569]" />
                    <span className="text-[#64748B]">{item.time}</span>
                  </div>
                </div>

                <div className="flex items-center bg-[#00F2FE]/10 px-2 py-1 rounded-[8px] shrink-0 ml-1" style={{ flexShrink: 0 }}>
                  <ArrowUpRight size={10} className="text-[#00F2FE]" />
                  <span className="text-[#00F2FE] font-black text-[11px] ml-0.5">{item.engagementScore}k</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Chat FAB (Placed outside scrollable div so it stays fixed) */}
        <button 
          onClick={() => navigateTo('AIChat')}
          className="absolute bottom-20 right-3 w-12 h-12 rounded-full bg-gradient-to-r from-[#6A25F4] to-[#2563EB] flex items-center justify-center text-white shadow-2xl z-40 border border-white/10 hover:scale-105 transition-all active:scale-95 cursor-pointer"
        >
          <MessageCircle size={20} color="#FFF" />
        </button>
      </div>
    );
  };

  // ────────────────────────────────────────────────────────
  // SCREEN 2: TRENDING SCREEN
  // ────────────────────────────────────────────────────────
  const renderTrendingScreen = () => {
    return (
      <div className="flex flex-col h-full overflow-y-auto pb-24 select-none scrollbar-none bg-[#05050A]">
        {/* Header */}
        <div className="flex items-center justify-between px-5 pt-6 pb-3 shrink-0">
          <p className="text-white text-lg font-black tracking-wide">Trending Now</p>
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center shadow-lg">
            <TrendingUp size={16} className="text-white" />
          </div>
        </div>

        {/* Sub tabs */}
        <div className="flex gap-4 px-5 my-3 border-b border-white/5 shrink-0">
          {['Trending', 'For You', 'Emerging'].map(tab => (
            <button
              key={tab}
              onClick={() => setTrendingSubTab(tab as any)}
              className={`pb-2.5 text-xs font-bold relative transition-colors ${
                trendingSubTab === tab ? 'text-white' : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              {tab}
              {trendingSubTab === tab && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-cyan-400 rounded-full" />
              )}
            </button>
          ))}
        </div>

        <div className="px-5 mt-2 space-y-3.5 shrink-0" style={{ flexShrink: 0 }}>
          {MOCK_TRENDS.map((item, index) => (
            <div
              key={item.trendId}
              onClick={() => navigateTo('Detail', { trend: item })}
              className="flex items-center bg-[#1e1b2e]/60 border border-white/[0.04] rounded-[18px] p-4 cursor-pointer hover:border-[#6A25F4]/30 shrink-0 justify-between"
              style={{ flexShrink: 0 }}
            >
              <div 
                className="w-9 h-9 rounded-lg bg-[#6A25F4]/15 border border-[#6A25F4]/20 flex items-center justify-center shrink-0 text-[#d8b4fe] text-[15px] font-black"
                style={{ flexShrink: 0 }}
              >
                #{index + 1}
              </div>

              <div className="flex-1 min-w-0 ml-3.5 pr-2">
                <p className="text-white text-[15px] font-bold leading-tight truncate">{item.title}</p>
                <div className="flex items-center gap-1.5 mt-1.5 flex-wrap">
                  <span 
                    className="px-1.5 py-0.5 rounded text-[8px] font-extrabold uppercase border"
                    style={{
                      color: item.sentiment === 'Positive' ? '#4ADE80' : item.sentiment === 'Negative' ? '#EF4444' : '#F59E0B',
                      borderColor: item.sentiment === 'Positive' ? '#4ADE8040' : item.sentiment === 'Negative' ? '#EF444440' : '#F59E0B40',
                      backgroundColor: item.sentiment === 'Positive' ? '#4ADE8015' : item.sentiment === 'Negative' ? '#EF444415' : '#F59E0B15'
                    }}
                  >
                    {item.sentiment}
                  </span>
                  <span className="text-[#94A3B8] text-[10px] font-medium">{item.category}</span>
                </div>
              </div>

              <div className="flex flex-col items-end shrink-0 ml-2" style={{ flexShrink: 0 }}>
                <span className="text-[#cbd5e1] text-[11px] font-medium">{item.readTime}</span>
                <span 
                  className="font-extrabold text-[11px] mt-1.5 px-2 py-0.5 rounded border"
                  style={{
                    color: '#00F2FE',
                    borderColor: '#00F2FE30',
                    backgroundColor: '#00F2FE15'
                  }}
                >
                  {item.growth}
                </span>
              </div>
            </div>
          ))}

          {/* Explore niche card */}
          <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-purple-900/15 via-[#0d091e] to-cyan-950/15 border border-cyan-500/10 flex flex-col items-center text-center shadow-lg shrink-0">
            <div className="w-12 h-12 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-4">
              <Compass size={24} className="text-cyan-400" />
            </div>
            <p className="text-white text-sm font-bold">Explore More Niches</p>
            <p className="text-gray-500 text-[11px] mt-1 max-w-[220px] leading-relaxed">Find emerging trends before they go viral on major networks.</p>
            <button 
              onClick={() => navigateTo('CategoryTrends', { category: 'All' })}
              className="mt-4 px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:opacity-95 text-[#05050A] font-black text-xs rounded-xl shadow-lg transition-transform active:scale-95"
            >
              Discover
            </button>
          </div>
        </div>
      </div>
    );
  };

  // ────────────────────────────────────────────────────────
  // SCREEN 3: SEARCH SCREEN
  // ────────────────────────────────────────────────────────
  const renderSearchScreen = () => {
    const suggested = ['Machine Learning', 'Fintech', 'SaaS', 'Robotics', 'Privacy'];
    const recents = ['GPT-4', 'Midjourney', 'AI Agents', 'Crypto Trends'];

    const filteredTrends = MOCK_TRENDS.filter(item => 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
      <div className="flex flex-col h-full overflow-y-auto pb-24 select-none scrollbar-none bg-[#05050A]">
        {/* Search Input Bar */}
        <div className="px-5 pt-6 pb-3 shrink-0">
          <div className="flex items-center bg-[#11101A]/80 border border-purple-500/30 rounded-xl px-3.5 h-12 shadow-inner">
            <SearchIcon size={18} className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search trends, topics, categories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent text-white text-xs outline-none placeholder:text-gray-600"
            />
            {searchQuery.length > 0 && (
              <button onClick={() => setSearchQuery('')} className="text-gray-500 hover:text-gray-300">
                <Trash2 size={16} />
              </button>
            )}
          </div>
        </div>

        {/* Content list */}
        <div className="px-5 mt-2 shrink-0">
          {searchQuery.trim().length === 0 ? (
            <>
              {/* Recent searches */}
              <div className="flex justify-between items-center mb-3 mt-2 shrink-0">
                <p className="text-white text-xs font-bold">Recent Searches</p>
                <span className="text-purple-400 text-[11px] font-bold cursor-pointer hover:underline">Clear</span>
              </div>
              <div className="flex flex-wrap gap-2.5 mb-6 shrink-0">
                {recents.map((item, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setSearchQuery(item)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-500/10 border border-purple-500/20 text-[#d8b4fe] text-[11px] font-bold hover:bg-purple-500/20 transition-colors"
                  >
                    <Clock size={11} />
                    {item}
                  </button>
                ))}
              </div>

              {/* Suggested topics */}
              <p className="text-white text-xs font-bold mb-3 shrink-0">Suggested Topics</p>
              <div className="flex flex-wrap gap-2.5 shrink-0">
                {suggested.map((item, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setSearchQuery(item)}
                    className="px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[11px] font-bold hover:bg-cyan-500/20 transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <>
              <p className="text-gray-500 text-[11px] mb-3 shrink-0">
                {filteredTrends.length} result{filteredTrends.length !== 1 ? 's' : ''} for "{searchQuery}"
              </p>
              
              <div className="space-y-3.5 shrink-0" style={{ flexShrink: 0 }}>
                {filteredTrends.map(item => (
                  <div
                    key={item.trendId}
                    onClick={() => navigateTo('Detail', { trend: item })}
                    className="p-4 rounded-[12px] bg-gradient-to-br from-[#1e1b2e]/90 to-[#6A25F4]/10 border border-white/10 cursor-pointer hover:border-[#6A25F4]/30 shrink-0"
                    style={{ flexShrink: 0 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="px-2.5 py-1 rounded bg-[#6A25F4]/15 border border-[#6A25F4]/20 text-[#d8b4fe] text-[10px] font-extrabold uppercase tracking-[0.5px]">
                        {item.category}
                      </span>
                      <div className="flex items-center gap-1">
                        <TrendingUp size={12} className="text-green-400" />
                        <span className="text-green-400 font-extrabold text-[12px]">{item.growth}</span>
                      </div>
                    </div>
                    <p className="text-white text-[15px] font-bold leading-[22px] mt-2 mb-2 line-clamp-2">{item.title}</p>
                    <div className="flex items-center gap-1.5 mt-2.5 text-gray-500 text-[12px]">
                      <Clock size={12} />
                      <span>{item.time}</span>
                      <span>·</span>
                      <span>{item.readTime}</span>
                    </div>
                  </div>
                ))}

                {filteredTrends.length === 0 && (
                  <div className="flex flex-col items-center justify-center pt-12 text-center shrink-0">
                    <SearchIcon size={40} className="text-gray-600 mb-3" />
                    <p className="text-gray-400 text-xs font-bold">No results found</p>
                    <p className="text-gray-600 text-[10px] mt-1 max-w-[180px]">Try searching for AI, Finance, Web Dev, or Design</p>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    );
  };

  // ────────────────────────────────────────────────────────
  // SCREEN 4: SAVED SCREEN
  // ────────────────────────────────────────────────────────
  const renderSavedScreen = () => {
    const savedTrends = MOCK_TRENDS.filter(t => savedTrendIds.includes(t.trendId));

    return (
      <div className="flex flex-col h-full overflow-y-auto pb-24 select-none scrollbar-none bg-[#05050A]">
        {/* Header */}
        <div className="flex items-center justify-between px-5 pt-6 pb-3 shrink-0">
          <p className="text-white text-lg font-black tracking-wide">Saved Items</p>
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center shadow-lg">
            <Bookmark size={16} className="text-white" />
          </div>
        </div>

        {/* Content list */}
        <div className="px-5 mt-2 shrink-0">
          {savedTrends.length > 0 ? (
            <div className="space-y-3.5 shrink-0" style={{ flexShrink: 0 }}>
              {savedTrends.map(item => {
                return (
                  <div
                    key={item.trendId}
                    className="p-4 rounded-[12px] bg-gradient-to-br from-[#1e1b2e] to-purple-950/10 border border-[#6A25F4]/30 relative overflow-hidden shrink-0"
                    style={{ flexShrink: 0 }}
                  >
                    <div className="flex justify-between items-center mb-2.5">
                      <span className="px-2.5 py-1 rounded bg-[#6A25F4]/15 border border-[#6A25F4]/20 text-[#d8b4fe] text-[10px] font-extrabold uppercase tracking-[0.5px]">
                        {item.category}
                      </span>
                      <button 
                        onClick={() => toggleBookmark(item.trendId)}
                        className="text-[#ef4444] hover:scale-105 active:scale-95 transition-all p-1"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>

                    <p 
                      onClick={() => navigateTo('Detail', { trend: item })}
                      className="text-[#F8FAFC] text-[15px] font-bold leading-[22px] cursor-pointer hover:underline line-clamp-2 mt-2 mb-2"
                    >
                      {item.title}
                    </p>

                    <div className="flex justify-between items-center mt-4 pt-2.5 border-t border-white/5">
                      <div className="flex items-center gap-1.5 text-gray-500 text-[12px]">
                        <Clock size={13} color="#64748b" style={{ marginRight: 2 }} />
                        <span>{item.time}</span>
                      </div>
                      <div className="flex items-center gap-1 bg-[#6A25F4]/15 border border-[#6A25F4]/20 px-2 py-0.5 rounded">
                        <BookOpen size={11} className="text-purple-400" />
                        <span className="text-purple-400 text-[11px] font-bold">{item.readTime}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center pt-20 text-center shrink-0">
              <div className="w-16 h-16 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-4">
                <Bookmark size={28} className="text-purple-400" />
              </div>
              <p className="text-white text-sm font-bold">Nothing Saved Yet</p>
              <p className="text-gray-500 text-[11px] mt-1 max-w-[220px] leading-relaxed">
                Bookmark articles from the home feed — they'll appear here so you can read them later.
              </p>
              <button
                onClick={() => setActiveTab('Home')}
                className="mt-6 px-6 py-2.5 bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-bold text-xs rounded-xl shadow-lg transition-transform active:scale-95"
              >
                Browse Trends
              </button>
            </div>
          )}
        </div>
      </div>
    );
  };

  // ────────────────────────────────────────────────────────
  // SCREEN 5: CATEGORIES FEED
  // ────────────────────────────────────────────────────────
  const renderCategoryTrendsScreen = () => {
    const filteredTrends = MOCK_TRENDS.filter(t => 
      activeCategory === 'All' ? true : t.category === activeCategory
    );

    return (
      <div className="flex flex-col h-full bg-[#05050A] select-none">
        {/* Header */}
        <div className="flex items-center px-4 pt-6 pb-3 border-b border-white/5 bg-[#05050A] shrink-0">
          <button onClick={goBack} className="p-1 text-white mr-3 hover:bg-white/5 rounded-full">
            <ChevronLeft size={20} />
          </button>
          <p className="text-white text-sm font-bold">Categories</p>
        </div>

        {/* Categories horizontal list */}
        <div 
          ref={categoryScrollRef}
          className="py-2.5 overflow-x-auto flex gap-2.5 px-4 bg-[#05050A] scrollbar-none border-b border-white/5 shrink-0"
        >
          {CATEGORIES.map(cat => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 px-4 py-1.5 rounded-full text-[11px] font-bold transition-all border ${
                  isActive 
                    ? 'bg-gradient-to-r from-purple-600 to-cyan-500 text-white border-transparent shadow-md' 
                    : 'bg-white/5 border-white/10 text-gray-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Trends list in categories */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3.5 pb-24 scrollbar-none">
          {filteredTrends.length > 0 ? (
            filteredTrends.map(item => (
              <div 
                key={item.trendId}
                onClick={() => navigateTo('Detail', { trend: item })}
                className="flex bg-gradient-to-br from-[#1e1b2e] to-[#11101a]/60 border border-white/5 rounded-[12px] p-3 cursor-pointer hover:border-purple-500/20 shrink-0"
                style={{ flexShrink: 0 }}
              >
                {/* Fallback image */}
                <div 
                  className="w-16 h-16 rounded-lg bg-gradient-to-br from-purple-500/20 to-cyan-500/10 border border-purple-500/20 flex items-center justify-center shrink-0"
                  style={{ flexShrink: 0 }}
                >
                  <TrendingUp size={24} className="text-purple-400" />
                </div>

                <div className="flex-1 min-w-0 ml-3 flex flex-col justify-between">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-bold text-purple-400 uppercase tracking-wide">{item.category}</span>
                    <span className="text-gray-500 text-[10px]">{item.time}</span>
                  </div>
                  <p className="text-[#F8FAFC] text-[13px] font-bold leading-tight line-clamp-2 mt-1">{item.title}</p>
                  <div className="flex justify-between items-center mt-2.5">
                    <div className="flex items-center gap-1 bg-[#4ADE80]/15 border border-[#4ADE80]/20 px-2 py-0.5 rounded">
                      <TrendingUp size={11} className="text-[#4ADE80]" />
                      <span className="text-[#4ADE80] text-[10px] font-bold">{item.growth}</span>
                    </div>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleBookmark(item.trendId);
                      }}
                      className="p-1 hover:scale-105"
                    >
                      <Bookmark size={14} className={savedTrendIds.includes(item.trendId) ? "text-purple-500 fill-purple-500" : "text-gray-500"} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center pt-24 text-center shrink-0">
              <Compass size={40} className="text-gray-700 mb-3" />
              <p className="text-gray-400 text-xs font-bold">No trends found</p>
              <p className="text-gray-600 text-[9px] mt-1">Check back later for emerging topics in {activeCategory}.</p>
            </div>
          )}
        </div>
      </div>
    );
  };

  // ────────────────────────────────────────────────────────
  // SCREEN 6: TREND DETAIL
  // ────────────────────────────────────────────────────────
  const renderDetailScreen = () => {
    const isBookmarked = savedTrendIds.includes(activeTrend.trendId);

    return (
      <div className="flex flex-col h-full bg-[#05050A] select-none overflow-y-auto pb-24 scrollbar-none">
        {/* Header */}
        <div className="flex items-center justify-between px-4 pt-6 pb-3 border-b border-white/5 bg-[#05050A] sticky top-0 z-30 shrink-0">
          <button onClick={goBack} className="p-1 text-white hover:bg-white/5 rounded-full">
            <ChevronLeft size={20} />
          </button>
          <div className="flex gap-2.5">
            <button className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 active:scale-95 transition-all">
              <Share2 size={14} />
            </button>
            <button 
              onClick={() => toggleBookmark(activeTrend.trendId)}
              className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 active:scale-95 transition-all"
            >
              <Bookmark size={14} className={isBookmarked ? "text-purple-400 fill-purple-400" : "text-white"} />
            </button>
          </div>
        </div>

        {/* Hero image placeholder with gradient overlay */}
        <div className="relative w-full h-36 bg-gradient-to-b from-[#11101a] via-[#100b20] to-[#05050A] flex items-center justify-center border-b border-white/5 overflow-hidden shrink-0">
          {/* Neon mesh lights */}
          <div className="absolute top-[-20%] left-[-10%] w-[120%] h-[120%] bg-gradient-to-tr from-purple-800/10 via-cyan-500/5 to-transparent blur-[80px]" />
          <TrendingUp size={60} className="text-purple-500/20" />
        </div>

        {/* Content body */}
        <div className="px-5 pt-4 shrink-0">
          <div className="flex items-center gap-3 mb-3 shrink-0">
            <span className="px-2.5 py-1 rounded-lg text-[10px] font-black uppercase bg-purple-500/15 border border-purple-500/30 text-purple-400">
              {activeTrend.category}
            </span>
            <span className="flex items-center gap-1 text-gray-500 text-xs font-semibold">
              <Clock size={12} />
              {activeTrend.readTime}
            </span>
          </div>

          <h1 className="text-white text-[18px] font-black leading-tight tracking-wide mb-4 shrink-0">{activeTrend.title}</h1>

          {/* Author/Source row */}
          <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-white/5 shrink-0">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center">
              <Cpu size={16} className="text-white" />
            </div>
            <div>
              <p className="text-white text-xs font-bold">{activeTrend.source}</p>
              <p className="text-gray-500 text-[10px] mt-0.5">{activeTrend.time}</p>
            </div>
          </div>

          {/* Body content */}
          <p className="text-gray-400 text-xs leading-relaxed font-light mb-6 whitespace-pre-line shrink-0">{activeTrend.aiSummary}</p>

          {/* AI METRICS STRIP */}
          <div className="p-4 rounded-xl bg-gradient-to-br from-purple-500/10 to-cyan-500/5 border border-purple-500/20 mb-6 shrink-0">
            <p className="text-gray-500 text-[9px] font-black tracking-wider uppercase mb-3">AI Intelligence</p>
            
            <div className="grid grid-cols-3 gap-2.5 text-center mb-4">
              <div className="flex flex-col items-center">
                <span className="text-[#4ade80] text-xs font-bold mb-0.5">{activeTrend.growth}</span>
                <span className="text-gray-500 text-[8px] uppercase tracking-wider">Growth</span>
              </div>
              <div className="flex flex-col items-center border-x border-white/5">
                <span className="text-cyan-400 text-xs font-bold mb-0.5">{activeTrend.sentiment}</span>
                <span className="text-gray-500 text-[8px] uppercase tracking-wider">Sentiment</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-purple-400 text-xs font-bold mb-0.5">{activeTrend.aiConfidence}%</span>
                <span className="text-gray-500 text-[8px] uppercase tracking-wider">AI Conf.</span>
              </div>
            </div>

            {/* Target audience */}
            <div className="flex items-center gap-1.5 pt-3 border-t border-white/5 text-gray-500 text-[10px] leading-tight shrink-0">
              <Users size={12} className="text-gray-600 shrink-0" />
              <span className="truncate">{activeTrend.targetAudience}</span>
            </div>

            {/* Score breakdown */}
            <div className="grid grid-cols-3 gap-1 pt-3.5 border-t border-white/5 mt-3 text-center shrink-0">
              <div>
                <p className="text-white text-xs font-black">{activeTrend.viralScore}%</p>
                <p className="text-gray-500 text-[7.5px] uppercase tracking-wider mt-0.5">Viral Index</p>
              </div>
              <div>
                <p className="text-white text-xs font-black">{activeTrend.trendScore}%</p>
                <p className="text-gray-500 text-[7.5px] uppercase tracking-wider mt-0.5">Composite</p>
              </div>
              <div>
                <p className="text-white text-xs font-black">{activeTrend.engagementScore}k</p>
                <p className="text-gray-500 text-[7.5px] uppercase tracking-wider mt-0.5">Engagement</p>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="space-y-3 shrink-0 pb-4">
            {activeTrend.sourceUrl && (
              <button 
                onClick={() => window.open(activeTrend.sourceUrl, '_blank')}
                className="w-full h-11 rounded-full border border-cyan-500/30 bg-[#1e1b2e]/10 text-cyan-400 flex items-center justify-center font-bold text-xs hover:bg-cyan-500/10 transition-all active:scale-98"
              >
                <ExternalLink size={14} className="mr-2" />
                Visit Original Source
              </button>
            )}

            <button 
              onClick={() => navigateTo('TrendAnalysis')}
              className="w-full h-11 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white flex items-center justify-center font-black text-xs hover:opacity-95 shadow-lg transition-all active:scale-98"
            >
              <Zap size={14} className="mr-2" />
              View AI Analysis
            </button>
          </div>
        </div>
      </div>
    );
  };

  // ────────────────────────────────────────────────────────
  // SCREEN 7: AI ANALYSIS
  // ────────────────────────────────────────────────────────
  const renderTrendAnalysisScreen = () => {
    return (
      <div className="flex flex-col h-full bg-[#05050A] select-none overflow-y-auto pb-24 scrollbar-none">
        {/* Header */}
        <div className="flex items-center px-4 pt-6 pb-3 border-b border-white/5 bg-[#05050A] sticky top-0 z-30 shrink-0">
          <button onClick={goBack} className="p-1 text-white mr-3 hover:bg-white/5 rounded-full">
            <ChevronLeft size={20} />
          </button>
          <p className="text-white text-sm font-bold">AI Analysis</p>
        </div>

        {/* Title Section */}
        <div className="flex flex-col items-center px-5 pt-6 text-center mb-6 shrink-0">
          <div className="w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mb-4">
            <Cpu size={28} className="text-cyan-400" />
          </div>
          <h2 className="text-white text-[16px] font-black leading-tight mb-1">{activeTrend.title}</h2>
          <p className="text-gray-500 text-[10px]">Generated by TrendPulse AI model v4.0</p>
        </div>

        <div className="px-5 space-y-5 shrink-0 pb-4">
          {/* Sentiment & Virality Gauges */}
          <div className="grid grid-cols-2 gap-4 shrink-0">
            <div className="p-4 rounded-xl bg-gradient-to-br from-[#1e1b2e]/60 to-[#11101a]/80 border border-[#4ade80]/20 flex flex-col justify-between h-[105px]">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-1 rounded bg-[#4ade80]/15 text-[#4ade80]">
                  <Smile size={13} />
                </div>
                <span className="text-gray-400 text-[11px] font-bold">Sentiment</span>
              </div>
              <p className="text-[#4ade80] text-lg font-black">{activeTrend.sentimentScore}% Pos</p>
              <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mt-3">
                <div className="h-full bg-[#4ade80]" style={{ width: `${activeTrend.sentimentScore}%` }} />
              </div>
            </div>

            <div className="p-4 rounded-xl bg-gradient-to-br from-[#1e1b2e]/60 to-[#11101a]/80 border border-purple-500/20 flex flex-col justify-between h-[105px]">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-1 rounded bg-purple-500/15 text-purple-400">
                  <TrendingUp size={13} />
                </div>
                <span className="text-gray-400 text-[11px] font-bold">Virality</span>
              </div>
              <p className="text-purple-400 text-lg font-black">{activeTrend.viralScore} <span className="text-[10px] text-gray-500">/ 100</span></p>
              <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mt-3">
                <div className="h-full bg-purple-500" style={{ width: `${activeTrend.viralScore}%` }} />
              </div>
            </div>
          </div>

          {/* Key Drivers */}
          <div className="shrink-0">
            <h3 className="text-white text-xs font-bold mb-3">Key Drivers</h3>
            <div className="p-5 rounded-xl bg-[#1e1b2e]/50 border border-white/5 space-y-4">
              {activeTrend.keyDrivers.map((driver, idx) => (
                <div key={idx} className="flex gap-3 items-start pb-3.5 border-b border-white/5 last:border-0 last:pb-0">
                  <div className="mt-0.5 text-yellow-400">
                    <Zap size={15} />
                  </div>
                  <div>
                    <h4 className="text-white text-xs font-bold">{driver.title}</h4>
                    <p className="text-gray-500 text-[10px] mt-1 leading-normal">{driver.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Why Trending */}
          <div className="shrink-0">
            <h3 className="text-white text-xs font-bold mb-3">Why It's Trending</h3>
            <div className="p-4 rounded-xl bg-[#1e1b2e]/50 border border-white/5">
              <p className="text-gray-400 text-[11px] leading-relaxed font-light">{activeTrend.whyTrending}</p>
            </div>
          </div>

          {/* AI Confidence Breakdown */}
          <div className="shrink-0">
            <h3 className="text-white text-xs font-bold mb-3">AI Confidence Breakdown</h3>
            <div className="p-4 rounded-xl bg-[#1e1b2e]/50 border border-white/5 space-y-3.5">
              <div>
                <div className="flex justify-between text-[11px] mb-1.5 font-bold">
                  <span className="text-white">Source Consistency</span>
                  <span className="text-cyan-400">{activeTrend.sourceConsistency}%</span>
                </div>
                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-cyan-400" style={{ width: `${activeTrend.sourceConsistency}%` }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-[11px] mb-1.5 font-bold">
                  <span className="text-white">Data Completeness</span>
                  <span className="text-purple-400">{activeTrend.dataCompleteness}%</span>
                </div>
                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-purple-500" style={{ width: `${activeTrend.dataCompleteness}%` }} />
                </div>
              </div>
            </div>
          </div>

          {/* Predictive analysis */}
          <div className="p-5 rounded-xl bg-gradient-to-br from-purple-500/10 via-purple-950/5 to-cyan-500/5 border border-purple-500/20 shrink-0">
            <p className="text-gray-500 text-[9px] font-black tracking-wider uppercase mb-2">Lifecycle State: {activeTrend.growthMomentum.toUpperCase()}</p>
            <p className="text-white text-xs font-bold mb-2">Future Prediction</p>
            <p className="text-gray-400 text-[10px] leading-relaxed font-light">{activeTrend.aiPrediction}</p>
          </div>

          {/* Keywords cloud */}
          <div className="shrink-0">
            <h3 className="text-white text-xs font-bold mb-3">Related Keywords</h3>
            <div className="flex flex-wrap gap-2 pb-4">
              {activeTrend.keywords.map((kw, i) => (
                <button
                  key={i}
                  onClick={() => navigateTo('Search')}
                  className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 hover:border-cyan-500/30 text-gray-300 text-[10px] font-bold"
                >
                  #{kw}
                </button>
              ))}
            </div>
          </div>

          {/* Graph Screen button */}
          <button 
            onClick={() => navigateTo('TrendGraph')}
            className="w-full h-11 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white flex items-center justify-center font-black text-xs hover:opacity-95 shadow-lg transition-all active:scale-98 shrink-0"
          >
            <TrendingUp size={16} className="mr-2" />
            View Detailed Statistics
          </button>
        </div>
      </div>
    );
  };

  // ────────────────────────────────────────────────────────
  // SCREEN 8: TREND GRAPH STATISTICS
  // ────────────────────────────────────────────────────────
  const renderTrendGraphScreen = () => {
    return (
      <div className="flex flex-col h-full bg-[#05050A] select-none overflow-y-auto pb-24 scrollbar-none">
        {/* Header */}
        <div className="flex items-center justify-between px-4 pt-6 pb-3 border-b border-white/5 bg-[#05050A] sticky top-0 z-30 shrink-0">
          <div className="flex items-center">
            <button onClick={goBack} className="p-1 text-white mr-3 hover:bg-white/5 rounded-full">
              <ChevronLeft size={20} />
            </button>
            <p className="text-white text-sm font-bold truncate max-w-[170px]">{activeTrend.title}</p>
          </div>
          
          <div className="flex items-center gap-1.5 bg-[#EF4444]/15 border border-[#EF4444]/30 px-2.5 py-1 rounded-full shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444] animate-ping" />
            <span className="text-[#EF4444] text-[9px] font-black uppercase tracking-wider">Live</span>
          </div>
        </div>

        {/* Hero Card Momentum */}
        <div className="mx-5 my-5 p-5 rounded-2xl bg-gradient-to-br from-[#1e1b2e] to-[#11101a] border border-white/5 relative overflow-hidden shrink-0">
          <p className="text-gray-500 text-[9px] font-bold tracking-wider uppercase mb-1">Current Momentum Score</p>
          <div className="flex items-end gap-3.5 mb-4">
            <span className="text-white text-3xl font-black tracking-tight">{activeTrend.viralScore * 10}</span>
            <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-cyan-500/15 text-cyan-400 text-[10px] font-bold mb-1">
              <TrendingUp size={10} />
              <span>{activeTrend.growth}</span>
            </div>
          </div>
          <div className="flex items-center gap-4 pt-3.5 border-t border-white/5 text-gray-500 text-[10px] font-bold">
            <div className="flex items-center gap-1">
              <Activity size={12} className="text-purple-400" />
              <span>{activeTrend.growthMomentum.toUpperCase()}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users size={12} className="text-cyan-400" />
              <span>{activeTrend.engagementScore}k mentions</span>
            </div>
          </div>
        </div>

        {/* Trajectory line chart mock */}
        <div className="px-5 mb-6 shrink-0">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-white text-xs font-bold">Volume Trajectory</h3>
            <div className="flex gap-1.5 bg-white/5 border border-white/10 rounded-lg p-0.5">
              {['24H', '7D', '30D'].map(t => (
                <button
                  key={t}
                  onClick={() => setTimeFilter(t as any)}
                  className={`px-2 py-1 rounded text-[8.5px] font-black transition-all ${
                    timeFilter === t ? 'bg-white/10 text-white' : 'text-gray-500'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="p-5 rounded-xl bg-[#11101A] border border-white/5 h-44 flex gap-3.5 relative overflow-hidden">
            {/* Grid lines */}
            <div className="absolute inset-0 flex flex-col justify-between py-5 px-3 pointer-events-none">
              <div className="h-[1px] bg-white/[0.03] w-full" />
              <div className="h-[1px] bg-white/[0.03] w-full" />
              <div className="h-[1px] bg-white/[0.03] w-full" />
            </div>

            {/* Y axis */}
            <div className="flex flex-col justify-between text-[8px] text-gray-600 font-extrabold pr-1.5 z-10">
              <span>1,200</span>
              <span>600</span>
              <span>0</span>
            </div>

            {/* Bars */}
            <div className="flex-1 flex justify-between items-end h-full px-2 z-10">
              {activeTrend.velocityHistory.map((val, i) => {
                const heightVal = `${Math.min(100, Math.max(15, (val / 100) * 100))}%`;
                return (
                  <div key={i} className="flex flex-col items-center h-full justify-end w-[18px]">
                    <div 
                      className="w-2.5 rounded-full bg-gradient-to-t from-cyan-500/10 to-cyan-400 relative overflow-hidden" 
                      style={{ height: heightVal }}
                    >
                      <div className="absolute top-0 left-0 right-0 h-2.5 bg-white rounded-full opacity-80" />
                    </div>
                    <span className="text-[7.5px] text-gray-600 font-black mt-2">D{i+1}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Network distribution */}
        <div className="px-5 mb-6 shrink-0">
          <h3 className="text-white text-xs font-bold mb-3">Network Distribution</h3>
          <div className="grid grid-cols-3 gap-3">
            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col items-center">
              <Compass size={18} className="text-cyan-400" />
              <span className="text-white text-xs font-black mt-2">65%</span>
              <span className="text-gray-500 text-[8px] uppercase tracking-wider mt-0.5">News</span>
            </div>
            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col items-center">
              <TrendingUp size={18} className="text-[#FF4500]" />
              <span className="text-white text-xs font-black mt-2">25%</span>
              <span className="text-gray-500 text-[8px] uppercase tracking-wider mt-0.5">Reddit</span>
            </div>
            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col items-center">
              <Cpu size={18} className="text-[#FF0000]" />
              <span className="text-white text-xs font-black mt-2">10%</span>
              <span className="text-gray-500 text-[8px] uppercase tracking-wider mt-0.5">YouTube</span>
            </div>
          </div>
        </div>

        {/* Global reach */}
        <div className="px-5 mb-6 shrink-0">
          <h3 className="text-white text-xs font-bold mb-3">Global Reach</h3>
          <div className="p-5 rounded-xl bg-[#11101A] border border-white/5 space-y-4">
            <div>
              <div className="flex justify-between text-[11px] mb-1.5 font-bold">
                <span className="text-gray-300">📍 North America</span>
                <span className="text-cyan-400">55%</span>
              </div>
              <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-cyan-400" style={{ width: '55%' }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-[11px] mb-1.5 font-bold">
                <span className="text-gray-300">📍 Europe</span>
                <span className="text-purple-400">30%</span>
              </div>
              <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-purple-500" style={{ width: '30%' }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-[11px] mb-1.5 font-bold">
                <span className="text-gray-300">📍 Asia</span>
                <span className="text-[#4ade80]">15%</span>
              </div>
              <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-[#4ade80]" style={{ width: '15%' }} />
              </div>
            </div>
          </div>
        </div>

        {/* System alerts */}
        <div className="px-5 mb-6 shrink-0">
          <h3 className="text-white text-xs font-bold mb-3">System Alerts</h3>
          <div className="p-4 rounded-xl bg-yellow-500/5 border border-yellow-500/20 flex gap-3.5 items-center">
            <div className="w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-400 shrink-0">
              <AlertTriangle size={15} />
            </div>
            <div>
              <p className="text-white text-xs font-bold">Velocity Spike Detected</p>
              <p className="text-gray-500 text-[10px] mt-0.5">Momentum accelerating rapidly in developer hubs.</p>
            </div>
          </div>
        </div>

        {/* Bottom footer button */}
        <div className="px-5 shrink-0 pb-4">
          <button 
            onClick={() => navigateTo('AIChat')}
            className="w-full h-11 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white flex items-center justify-center font-black text-xs hover:opacity-95 shadow-lg transition-all active:scale-98 shrink-0"
          >
            <Cpu size={16} className="mr-2" />
            Ask TrendPulse AI
          </button>
        </div>
      </div>
    );
  };

  // ────────────────────────────────────────────────────────
  // SCREEN 9: AI CHAT (SHAHKAL AI)
  // ────────────────────────────────────────────────────────
  const renderAIChatScreen = () => {
    const quickPrompts = [
      "What are the key drivers for Generative AI Agent Orchestrators?",
      "Which technology category has the highest growth rate?",
      "Explain the virality potential of WebGPU Fluid Simulations."
    ];

    return (
      <div className="flex flex-col h-full bg-[#05050A] select-none">
        {/* Header */}
        <div className="flex items-center px-4 pt-6 pb-3 border-b border-white/5 bg-[#05050A] shrink-0">
          <button onClick={goBack} className="p-1 text-white mr-3 hover:bg-white/5 rounded-full">
            <ChevronLeft size={20} />
          </button>
          <p className="text-white text-sm font-bold">Shahkal AI Assistant</p>
        </div>

        {/* Messages list */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 scrollbar-none pb-24">
          <div className="absolute top-[-50px] left-[-50px] w-[200px] h-[200px] rounded-full bg-cyan-500/5 blur-[80px] pointer-events-none" />

          {chatMessages.map(msg => {
            const isAI = msg.sender === 'ai';
            return (
              <div 
                key={msg.id} 
                className={`flex items-end gap-2.5 max-w-[85%] ${
                  isAI ? 'self-start mr-auto' : 'self-end ml-auto flex-row-reverse'
                }`}
              >
                {isAI ? (
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shrink-0 border border-[#05050A]">
                    <Cpu size={12} className="text-[#05050A]" />
                  </div>
                ) : (
                  <div className="w-7 h-7 rounded-full bg-purple-600 flex items-center justify-center shrink-0 text-white border border-[#05050A] text-[10px] font-black">
                    GU
                  </div>
                )}

                <div 
                  className={`p-3.5 rounded-2xl border text-xs leading-relaxed whitespace-pre-wrap ${
                    isAI 
                      ? 'bg-[#11101A] border-white/5 text-gray-300 rounded-bl-sm' 
                      : 'bg-cyan-500/10 border-cyan-500/35 text-white rounded-br-sm shadow-md shadow-cyan-500/5'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            );
          })}

          {/* Typing state */}
          {isChatLoading && (
            <div className="flex items-end gap-2.5 max-w-[85%] self-start mr-auto">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shrink-0">
                <Cpu size={12} className="text-[#05050A]" />
              </div>
              <div className="p-3.5 rounded-2xl border bg-[#11101A] border-white/5 rounded-bl-sm text-gray-500 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          )}

          {/* Suggestions if chat is empty or short */}
          {chatMessages.length === 1 && !isChatLoading && (
            <div className="pt-6 space-y-2 shrink-0">
              <p className="text-gray-500 text-[10px] font-bold uppercase tracking-wider mb-2">Quick Questions</p>
              {quickPrompts.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => sendChatMessage(prompt)}
                  className="w-full text-left p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 text-gray-400 text-[11px] leading-snug font-medium transition-all"
                >
                  {prompt}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Input Bar */}
        <div className="p-3 bg-[#0A0510] border-t border-white/5 flex items-center gap-2 shrink-0">
          <input
            type="text"
            placeholder="Ask Shahkal AI..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') sendChatMessage(inputText);
            }}
            disabled={isChatLoading}
            className="flex-1 bg-[#1e1b2e] border border-white/5 rounded-full px-4 py-2.5 text-white text-xs outline-none placeholder:text-gray-600 disabled:opacity-50"
          />
          <button 
            onClick={() => sendChatMessage(inputText)}
            disabled={isChatLoading || !inputText.trim()}
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
              inputText.trim() ? 'bg-cyan-400 text-[#05050A]' : 'bg-[#1e1b2e] text-gray-500 border border-white/5'
            }`}
          >
            <Send size={15} />
          </button>
        </div>
      </div>
    );
  };

  // ────────────────────────────────────────────────────────
  // SCREEN 10: PROFILE SCREEN (NEW)
  // ────────────────────────────────────────────────────────
  const renderProfileScreen = () => {
    return (
      <div className="flex flex-col h-full bg-[#05050A] select-none overflow-y-auto pb-24 scrollbar-none">
        {/* Header */}
        <div className="flex items-center px-4 pt-6 pb-3 border-b border-white/5 bg-[#05050A] shrink-0 sticky top-0 z-30">
          <button onClick={goBack} className="p-1 text-white mr-3 hover:bg-white/5 rounded-full transition-colors">
            <ChevronLeft size={20} />
          </button>
          <p className="text-white text-sm font-bold">Profile</p>
        </div>

        {/* Profile Info */}
        <div className="flex flex-col items-center mt-6 px-5 mb-6 shrink-0">
          {/* Avatar Ring with Glow */}
          <div className="relative mb-4">
            {/* Glow effect */}
            <div className="absolute top-[-4px] left-[-4px] right-[-4px] bottom-[-4px] rounded-full bg-purple-600/20 blur-[12px] pointer-events-none" />
            <div className="p-[2.5px] rounded-full bg-gradient-to-r from-purple-600 via-cyan-400 to-blue-500">
              <div className="w-[84px] h-[84px] rounded-full bg-[#11101A] flex items-center justify-center border-2 border-[#05050A] overflow-hidden">
                {user.photoURL ? (
                  <img src={user.photoURL} alt="avatar" className="w-full h-full object-cover" />
                ) : (
                  <User size={36} className="text-white" />
                )}
              </div>
            </div>
            {/* Camera Edit Badge */}
            <button 
              onClick={() => {
                const avatars = [
                  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=150&auto=format&fit=crop&q=60",
                  "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=150&auto=format&fit=crop&q=60",
                  "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=150&auto=format&fit=crop&q=60",
                  "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=150&auto=format&fit=crop&q=60"
                ];
                const currentIdx = avatars.indexOf(user.photoURL);
                const nextAvatar = avatars[(currentIdx + 1) % avatars.length];
                setUser(prev => ({ ...prev, photoURL: nextAvatar }));
              }}
              className="absolute bottom-0 right-0 w-7 h-7 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 border-[2.5px] border-[#05050A] flex items-center justify-center text-white hover:scale-105 active:scale-95 transition-all shadow-md"
            >
              <Camera size={11} />
            </button>
          </div>

          <h2 className="text-white text-base font-bold tracking-wide leading-tight mb-1">{user.displayName}</h2>
          <p className="text-gray-500 text-xs mb-3">{user.email}</p>

          {/* Verification Badge */}
          <div 
            onClick={() => {
              setUser(prev => ({ ...prev, emailVerified: !prev.emailVerified }));
            }}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold cursor-pointer transition-all border shrink-0 ${
              user.emailVerified 
                ? 'bg-green-500/10 border-green-500/20 text-[#4ADE80] hover:bg-green-500/15' 
                : 'bg-red-500/10 border-red-500/20 text-[#EF4444] hover:bg-red-500/15'
            }`}
          >
            {user.emailVerified ? (
              <>
                <CheckCircle size={10} />
                <span>Email Verified</span>
              </>
            ) : (
              <>
                <AlertTriangle size={10} />
                <span>Email Not Verified</span>
              </>
            )}
          </div>

          {/* Resend Verification Button */}
          {!user.emailVerified && (
            <button
              onClick={() => {
                alert("Simulated: Verification email has been resent to " + user.email);
              }}
              className="mt-2.5 flex items-center gap-1.5 bg-[#6A25F4]/10 border border-[#6A25F4]/20 hover:bg-[#6A25F4]/15 px-3 py-1.5 rounded-lg text-purple-400 text-[10px] font-bold transition-all"
            >
              <Send size={10} />
              <span>Resend Verification Email</span>
            </button>
          )}

          {user.bio && (
            <p className="text-gray-400 text-[11px] text-center mt-3 max-w-[220px] leading-relaxed italic">
              "{user.bio}"
            </p>
          )}
        </div>

        {/* Menu Options */}
        <div className="px-5 shrink-0">
          <p className="text-gray-600 text-[9px] font-extrabold uppercase tracking-wider mb-2.5 ml-1">Account</p>

          <div className="bg-[#11101A]/60 border border-white/[0.04] rounded-2xl overflow-hidden shadow-xl shrink-0">
            {/* Edit Profile */}
            <button 
              onClick={() => {
                setNewNameInput(user.displayName);
                setEditModalVisible(true);
              }}
              className="w-full flex items-center justify-between px-4 py-3.5 hover:bg-white/[0.02] active:bg-white/[0.04] transition-colors text-left"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#6A25F4]/15 border border-[#6A25F4]/20 flex items-center justify-center text-purple-400">
                  <User size={15} />
                </div>
                <span className="text-white text-xs font-semibold">Edit Profile</span>
              </div>
              <ChevronLeft size={16} className="text-gray-600 rotate-180" />
            </button>
            <div className="h-[1px] bg-white/[0.04] ml-15" />

            {/* Saved Posts */}
            <button 
              onClick={() => {
                setActiveTab('Saved');
                setCurrentScreen('Saved');
              }}
              className="w-full flex items-center justify-between px-4 py-3.5 hover:bg-white/[0.02] active:bg-white/[0.04] transition-colors text-left"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#00C6FF]/15 border border-[#00C6FF]/20 flex items-center justify-center text-cyan-400">
                  <Bookmark size={15} />
                </div>
                <span className="text-white text-xs font-semibold">Saved Posts</span>
              </div>
              <ChevronLeft size={16} className="text-gray-600 rotate-180" />
            </button>
            <div className="h-[1px] bg-white/[0.04] ml-15" />

            {/* Account Security */}
            <button 
              onClick={() => {
                alert("Security features are locked in Guest Demo Mode.");
              }}
              className="w-full flex items-center justify-between px-4 py-3.5 hover:bg-white/[0.02] active:bg-white/[0.04] transition-colors text-left"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-500/15 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <Shield size={15} />
                </div>
                <span className="text-white text-xs font-semibold">Account Security</span>
              </div>
              <ChevronLeft size={16} className="text-gray-600 rotate-180" />
            </button>
            <div className="h-[1px] bg-white/[0.04] ml-15" />

            {/* Notifications */}
            <button 
              onClick={() => navigateTo('Notifications')}
              className="w-full flex items-center justify-between px-4 py-3.5 hover:bg-white/[0.02] active:bg-white/[0.04] transition-colors text-left"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-green-500/12 border border-green-500/20 flex items-center justify-center text-green-400">
                  <Bell size={15} />
                </div>
                <span className="text-white text-xs font-semibold">Notifications</span>
              </div>
              <ChevronLeft size={16} className="text-gray-600 rotate-180" />
            </button>
            <div className="h-[1px] bg-white/[0.04] ml-15" />

            {/* Admin Intelligence */}
            <button 
              onClick={() => {
                alert("Admin authentication failed. Admin Intelligence panel requires verified developer credentials.");
              }}
              className="w-full flex items-center justify-between px-4 py-3.5 hover:bg-white/[0.02] active:bg-white/[0.04] transition-colors text-left"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-pink-500/15 border border-pink-500/20 flex items-center justify-center text-pink-400">
                  <Activity size={15} />
                </div>
                <span className="text-white text-xs font-semibold">Admin Intelligence</span>
              </div>
              <ChevronLeft size={16} className="text-gray-600 rotate-180" />
            </button>
          </div>
        </div>

        {/* Logout Wrapper */}
        <div className="px-5 mt-8 shrink-0">
          <button 
            onClick={() => setLogoutModalVisible(true)}
            className="w-full h-11 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 flex items-center justify-center font-bold text-xs hover:bg-red-500/15 active:scale-98 transition-all shrink-0"
          >
            <LogOut size={14} className="mr-2" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    );
  };

  // ────────────────────────────────────────────────────────
  // SCREEN 11: NOTIFICATIONS SCREEN (NEW)
  // ────────────────────────────────────────────────────────
  const renderNotificationsScreen = () => {
    const handleMarkAllRead = () => {
      setNotifications(prev => prev.map(n => ({ ...n, read: true })));
    };

    const handleClearAll = () => {
      setNotifications([]);
    };

    const handleNotificationPress = (item: Notification) => {
      setNotifications(prev => prev.map(n => n._id === item._id ? { ...n, read: true } : n));
      if (item.trendId) {
        const matchingTrend = MOCK_TRENDS.find(t => t.trendId === item.trendId);
        if (matchingTrend) {
          navigateTo('Detail', { trend: matchingTrend });
        }
      }
    };

    const getIconData = (type: string) => {
      switch (type) {
        case 'hot_trend':
          return { icon: <TrendingUp size={16} className="text-red-500" />, bg: "rgba(239,68,68,0.15)", border: "rgba(239,68,68,0.25)" };
        case 'multi_source':
          return { icon: <Radio size={16} className="text-[#a855f7]" />, bg: "rgba(168,85,247,0.15)", border: "rgba(168,85,247,0.25)" };
        case 'viral_spike':
          return { icon: <Zap size={16} className="text-[#00F2FE]" />, bg: "rgba(0,242,254,0.15)", border: "rgba(0,242,254,0.25)" };
        case 'system':
          return { icon: <FileText size={16} className="text-amber-400" />, bg: "rgba(251,191,36,0.15)", border: "rgba(251,191,36,0.25)" };
        default:
          return { icon: <Bell size={16} className="text-white" />, bg: "rgba(255,255,255,0.1)", border: "rgba(255,255,255,0.15)" };
      }
    };

    const getTimeAgo = (dateStr: string) => {
      const now = new Date();
      const date = new Date(dateStr);
      const diffMs = now.getTime() - date.getTime();
      const mins = Math.floor(diffMs / 60000);
      const hours = Math.floor(mins / 60);
      const days = Math.floor(hours / 24);

      if (mins < 1) return 'Just now';
      if (mins < 60) return `${mins}m ago`;
      if (hours < 24) return `${hours}h ago`;
      if (days === 1) return 'Yesterday';
      return `${days}d ago`;
    };

    return (
      <div className="flex flex-col h-full bg-[#05050A] select-none">
        {/* Ambient glow */}
        <div className="absolute top-[-50px] right-[-50px] w-[200px] h-[200px] rounded-full bg-cyan-500/5 blur-[80px] pointer-events-none z-10 shrink-0" />

        {/* Header */}
        <div className="flex items-center justify-between px-4 pt-6 pb-3 border-b border-white/5 bg-[#05050A] shrink-0 sticky top-0 z-30">
          <div className="flex items-center">
            <button onClick={goBack} className="p-1 text-white mr-3 hover:bg-white/5 rounded-full transition-colors">
              <ChevronLeft size={20} />
            </button>
            <p className="text-white text-sm font-bold">Notifications</p>
          </div>

          {notifications.length > 0 && (
            <div className="flex items-center gap-1.5">
              {unreadCount > 0 && (
                <button 
                  onClick={handleMarkAllRead} 
                  title="Mark all read"
                  className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 hover:bg-white/10 active:scale-95 transition-all"
                >
                  <CheckCircle size={14} />
                </button>
              )}
              <button 
                onClick={handleClearAll} 
                title="Clear all"
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-red-500 hover:bg-white/10 active:scale-95 transition-all"
              >
                <Trash2 size={14} />
              </button>
            </div>
          )}
        </div>

        {/* Notifications List */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 pb-24 scrollbar-none relative z-20">
          {notifications.length > 0 ? (
            notifications.map((item) => {
              const { icon, bg, border } = getIconData(item.type);
              return (
                <div
                  key={item._id}
                  onClick={() => handleNotificationPress(item)}
                  className={`flex gap-3.5 p-3.5 rounded-2xl border transition-all cursor-pointer select-none shrink-0 ${
                    item.read
                      ? "bg-[#140F1E]/30 border-white/[0.04] opacity-75"
                      : "bg-gradient-to-br from-cyan-400/5 to-purple-600/5 border-cyan-400/20"
                  }`}
                  style={{ flexShrink: 0 }}
                >
                  {/* Icon Column */}
                  <div className="relative shrink-0" style={{ flexShrink: 0 }}>
                    <div 
                      className="w-9 h-9 rounded-full flex items-center justify-center border"
                      style={{ backgroundColor: bg, borderColor: border }}
                    >
                      {icon}
                    </div>
                    {!item.read && (
                      <span className="absolute top-[-2px] right-[-2px] w-2.5 h-2.5 rounded-full bg-cyan-400 border-[2px] border-[#05050A]" />
                    )}
                  </div>

                  {/* Content Column */}
                  <div className="flex-1 min-w-0 flex flex-col justify-center">
                    <div className="flex justify-between items-start mb-1 gap-2">
                      <p className={`text-xs truncate ${item.read ? "text-gray-400 font-semibold" : "text-white font-bold"}`}>
                        {item.title}
                      </p>
                      <span className="text-[10px] text-gray-600 font-medium shrink-0">
                        {getTimeAgo(item.createdAt)}
                      </span>
                    </div>
                    <p className="text-gray-500 text-[11px] leading-relaxed line-clamp-2">
                      {item.message}
                    </p>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="flex flex-col items-center justify-center pt-24 text-center shrink-0">
              <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                <BellOff size={24} className="text-gray-500" />
              </div>
              <p className="text-white text-xs font-bold">No Alerts Yet</p>
              <p className="text-gray-600 text-[10px] mt-1 max-w-[200px] leading-relaxed">
                When trends start trending, you'll be the first to know!
              </p>
            </div>
          )}
        </div>
      </div>
    );
  };

  // Smartphone frame rendering wrapper
  return (
    <div className="relative mx-auto flex items-center justify-center p-2 select-none">
      
      {/* Smartphone physical shell - Optimized size from 285x585 to 320x660 */}
      <div className="relative w-[320px] h-[660px] rounded-[48px] border-[10px] border-[#1e1f29] bg-[#05050A] shadow-[0_25px_65px_-15px_rgba(0,0,0,0.95)] overflow-hidden flex flex-col ring-1 ring-white/10 select-none">
        
        {/* Dynamic Island Notch - Resized for 320px shell */}
        <div className="absolute top-[8px] left-1/2 -translate-x-1/2 w-[105px] h-[26px] rounded-full bg-black z-50 flex items-center justify-center border border-white/5">
          <div className="w-2.5 h-2.5 rounded-full bg-blue-950 shrink-0 mr-1.5 border border-white/5" />
          <div className="w-1.5 h-1.5 rounded-full bg-slate-900 shrink-0" />
        </div>

        {/* Flashing green indicator for Demo mode */}
        <div className="absolute top-[40px] left-[16px] z-50 flex items-center gap-1.5 bg-cyan-500/10 border border-cyan-400/35 px-2.5 py-0.5 rounded-full scale-90 origin-top-left pointer-events-none shadow-sm shadow-cyan-400/10">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-cyan-400 text-[8px] font-black uppercase tracking-wider">Demo Active</span>
        </div>

        {/* Status Bar */}
        <div className="h-10 pt-1.5 px-6 flex justify-between items-center text-[10px] text-white/90 z-40 bg-[#05050A] border-b border-white/[0.02] shrink-0">
          <span className="font-extrabold select-none tracking-tight">{timeString}</span>
          <div className="flex items-center gap-1.5">
            <span className="font-black text-[8px]">LTE</span>
            {/* Battery bar */}
            <div className="w-5 h-2.5 rounded border border-white/40 p-[1px] flex items-center relative">
              <div className="h-full bg-white rounded-sm w-[90%]" />
              <div className="absolute right-[-2.5px] top-1/2 -translate-y-1/2 w-0.5 h-1 bg-white/40 rounded-r-sm" />
            </div>
          </div>
        </div>

        {/* Main Content screens wrapper */}
        <div className="flex-1 min-h-0 relative z-30">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentScreen === 'MainTabs' ? activeTab : currentScreen}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 w-full h-full"
            >
              {(() => {
                if (currentScreen === 'Home' || currentScreen === 'Trending' || currentScreen === 'Search' || currentScreen === 'Saved') {
                  return renderTabContent();
                }
                switch(currentScreen) {
                  case 'CategoryTrends':
                    return renderCategoryTrendsScreen();
                  case 'Detail':
                    return renderDetailScreen();
                  case 'TrendAnalysis':
                    return renderTrendAnalysisScreen();
                  case 'TrendGraph':
                    return renderTrendGraphScreen();
                  case 'AIChat':
                    return renderAIChatScreen();
                  case 'Profile':
                    return renderProfileScreen();
                  case 'Notifications':
                    return renderNotificationsScreen();
                  default:
                    return renderHomeScreen();
                }
              })()}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* EDIT PROFILE MODAL */}
        <AnimatePresence>
          {editModalVisible && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <motion.div 
                initial={{ scale: 0.9, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 15 }}
                className="w-full bg-[#161424] border border-purple-500/20 rounded-2xl p-5 flex flex-col items-center shadow-2xl mx-4"
              >
                <div className="w-12 h-12 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-3">
                  <User size={20} className="text-purple-400" />
                </div>
                <h3 className="text-white text-sm font-bold mb-1">Edit Display Name</h3>
                <p className="text-gray-500 text-[10px] text-center mb-4">Update your profile display name below.</p>
                
                <input
                  type="text"
                  value={newNameInput}
                  onChange={(e) => setNewNameInput(e.target.value)}
                  placeholder="Enter display name..."
                  className="w-full bg-[#1f1d2e] border border-white/5 rounded-xl px-3 py-2.5 text-white text-xs outline-none mb-4 placeholder:text-gray-600 focus:border-purple-500/40"
                  maxLength={25}
                />

                <div className="flex w-full gap-2.5">
                  <button 
                    onClick={() => setEditModalVisible(false)}
                    className="flex-1 h-9 rounded-xl bg-white/5 border border-white/10 text-white text-xs font-semibold hover:bg-white/10 active:scale-95 transition-all"
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={() => {
                      if (newNameInput.trim()) {
                        setUser(prev => ({ ...prev, displayName: newNameInput.trim() }));
                        setEditModalVisible(false);
                      }
                    }}
                    className="flex-1 h-9 rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 text-white text-xs font-black hover:opacity-95 active:scale-95 transition-all"
                  >
                    Save
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* LOGOUT MODAL */}
        <AnimatePresence>
          {logoutModalVisible && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <motion.div 
                initial={{ scale: 0.9, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 15 }}
                className="w-full bg-[#161424] border border-red-500/20 rounded-2xl p-5 flex flex-col items-center shadow-2xl mx-4"
              >
                <div className="w-12 h-12 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-3">
                  <LogOut size={20} className="text-red-500" />
                </div>
                <h3 className="text-white text-sm font-bold mb-1">Logout</h3>
                <p className="text-gray-500 text-[10px] text-center mb-5 leading-relaxed">
                  {isLoggingOut 
                    ? "Resetting demo session..." 
                    : "Are you sure you want to logout? This will reset your simulated profile."}
                </p>

                {isLoggingOut ? (
                  <div className="flex justify-center py-2">
                    <span className="w-6 h-6 rounded-full border-2 border-red-500 border-t-transparent animate-spin" />
                  </div>
                ) : (
                  <div className="flex w-full gap-2.5">
                    <button 
                      onClick={() => setLogoutModalVisible(false)}
                      className="flex-1 h-9 rounded-xl bg-white/5 border border-white/10 text-white text-xs font-semibold hover:bg-white/10 active:scale-95 transition-all"
                    >
                      Cancel
                    </button>
                    <button 
                      onClick={() => {
                        setIsLoggingOut(true);
                        setTimeout(() => {
                          setUser({
                            displayName: "Son Goko",
                            email: "goko.demo@trendpulse.ai",
                            emailVerified: false,
                            photoURL: "",
                            bio: "Exploring social media trends with Gemini AI."
                          });
                          setNotifications([
                            {
                              _id: 'notif-1',
                              title: 'Viral Spike Alert',
                              message: 'Generative AI Agent Orchestrators has crossed +140% growth momentum on GitHub.',
                              type: 'viral_spike',
                              read: false,
                              createdAt: new Date(Date.now() - 1000 * 60 * 12).toISOString(),
                              trendId: 'trend-1'
                            },
                            {
                              _id: 'notif-2',
                              title: 'Multi-Source Convergence',
                              message: 'WebGPU Realtime Fluid Simulations is trending on Reddit, News, and GitHub simultaneously.',
                              type: 'multi_source',
                              read: false,
                              createdAt: new Date(Date.now() - 1000 * 60 * 45).toISOString(),
                              trendId: 'trend-2'
                            },
                            {
                              _id: 'notif-3',
                              title: 'System Alert',
                              message: 'TrendPulse DB sync completed successfully. 42 new micro-trends indexed.',
                              type: 'system',
                              read: true,
                              createdAt: new Date(Date.now() - 1000 * 60 * 120).toISOString(),
                            },
                            {
                              _id: 'notif-4',
                              title: 'Hot Trend Alert',
                              message: 'Decentralized Physical Infrastructure (DePIN) has hit the top trending charts.',
                              type: 'hot_trend',
                              read: true,
                              createdAt: new Date(Date.now() - 1000 * 60 * 240).toISOString(),
                              trendId: 'trend-3'
                            }
                          ]);
                          setIsLoggingOut(false);
                          setLogoutModalVisible(false);
                          setCurrentScreen('Home');
                          setActiveTab('Home');
                        }, 1500);
                      }}
                      className="flex-1 h-9 rounded-xl bg-gradient-to-r from-red-600 to-red-700 text-white text-xs font-black hover:opacity-95 active:scale-95 transition-all"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom Navigation Tab Bar (Only visible on home-level views) */}
        {['Home', 'Trending', 'Search', 'Saved'].includes(currentScreen) && (
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#0A0510]/95 backdrop-blur-xl border-t border-white/5 flex justify-around items-center px-4 pb-2 z-40">
            <button 
              onClick={() => {
                setActiveTab('Home');
                setCurrentScreen('Home');
              }}
              className={`flex flex-col items-center justify-center transition-colors ${
                activeTab === 'Home' ? 'text-cyan-400' : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              <Home size={16} />
              <span className="text-[9px] font-bold mt-1">Home</span>
            </button>

            <button 
              onClick={() => {
                setActiveTab('Trending');
                setCurrentScreen('Trending');
              }}
              className={`flex flex-col items-center justify-center transition-colors ${
                activeTab === 'Trending' ? 'text-cyan-400' : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              <TrendingUp size={16} />
              <span className="text-[9px] font-bold mt-1">Trending</span>
            </button>

            <button 
              onClick={() => {
                setActiveTab('Search');
                setCurrentScreen('Search');
              }}
              className={`flex flex-col items-center justify-center transition-colors ${
                activeTab === 'Search' ? 'text-cyan-400' : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              <SearchIcon size={16} />
              <span className="text-[9px] font-bold mt-1">Search</span>
            </button>

            <button 
              onClick={() => {
                setActiveTab('Saved');
                setCurrentScreen('Saved');
              }}
              className={`flex flex-col items-center justify-center transition-colors ${
                activeTab === 'Saved' ? 'text-cyan-400' : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              <Bookmark size={16} />
              <span className="text-[9px] font-bold mt-1">Saved</span>
            </button>
          </div>
        )}

        {/* Swipe indicator at the very bottom (iPhone style) */}
        <div className="absolute bottom-[4px] left-1/2 -translate-x-1/2 w-[100px] h-[4px] rounded-full bg-white/30 z-50 pointer-events-none" />
      </div>

      {/* Side buttons decor */}
      <div className="absolute left-[-2px] top-[110px] w-[2px] h-[24px] bg-[#22232a] rounded-l" />
      <div className="absolute left-[-2px] top-[148px] w-[2px] h-[38px] bg-[#22232a] rounded-l" />
      <div className="absolute left-[-2px] top-[196px] w-[2px] h-[38px] bg-[#22232a] rounded-l" />
      <div className="absolute right-[-2px] top-[152px] w-[2px] h-[48px] bg-[#22232a] rounded-r" />
    </div>
  );
}
