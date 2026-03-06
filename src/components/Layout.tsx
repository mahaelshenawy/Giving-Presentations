import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { useProgressStore } from '../store/useProgress';
import { 
  BookOpen, 
  CheckCircle, 
  LayoutDashboard, 
  Award,
  MessageSquare,
  BarChart,
  Presentation,
  HelpCircle,
  PlayCircle,
  Menu,
  X
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const modules = [
  { id: 'module0', path: '/module/0', title: '0. Give a Killer Presentation', icon: PlayCircle },
  { id: 'module1', path: '/module/1', title: '1. Let\'s get started', icon: PlayCircle },
  { id: 'module2', path: '/module/2', title: '2. Today\'s topic is...', icon: Presentation },
  { id: 'module3', path: '/module/3', title: '3. My next slide shows...', icon: BookOpen },
  { id: 'module4', path: '/module/4', title: '4. As you can see from this graph...', icon: BarChart },
  { id: 'module5', path: '/module/5', title: '5. To sum up...', icon: MessageSquare },
  { id: 'module6', path: '/module/6', title: '6. Any questions?', icon: HelpCircle },
];

export default function Layout() {
  const location = useLocation();
  const { modulesCompleted } = useProgressStore();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className="flex h-screen bg-slate-50 font-sans text-slate-900 overflow-hidden">
      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 z-30">
        <h1 className="text-lg font-bold text-indigo-700 tracking-tight">Presentations Mastery</h1>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-slate-900/50 z-20"
          onClick={closeMenu}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "fixed md:static inset-y-0 left-0 w-72 bg-white border-r border-slate-200 flex flex-col shadow-sm z-30 transition-transform duration-300 ease-in-out",
        isMobileMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      )}>
        <div className="p-6 border-b border-slate-200 hidden md:block">
          <h1 className="text-xl font-bold text-indigo-700 tracking-tight">Presentations Mastery</h1>
        </div>
        
        <div className="p-6 border-b border-slate-200 md:hidden flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold text-indigo-700 tracking-tight">Menu</h1>
          </div>
          <button onClick={closeMenu} className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <nav className="flex-1 overflow-y-auto p-4 space-y-1">
          <Link
            to="/"
            onClick={closeMenu}
            className={cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors",
              location.pathname === '/' 
                ? "bg-indigo-50 text-indigo-700" 
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
            )}
          >
            <LayoutDashboard className="w-5 h-5" />
            Dashboard
          </Link>
          
          <div className="pt-4 pb-2">
            <p className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Modules</p>
          </div>
          
          {modules.map((mod) => {
            const isCompleted = modulesCompleted[mod.id as keyof typeof modulesCompleted];
            const isActive = location.pathname === mod.path;
            const Icon = mod.icon;
            
            return (
              <Link
                key={mod.id}
                to={mod.path}
                onClick={closeMenu}
                className={cn(
                  "flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-colors group",
                  isActive 
                    ? "bg-indigo-50 text-indigo-700" 
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                )}
              >
                <div className="flex items-center gap-3">
                  <Icon className={cn("w-5 h-5", isActive ? "text-indigo-600" : "text-slate-400 group-hover:text-slate-600")} />
                  <span className="truncate max-w-[150px]">{mod.title}</span>
                </div>
                {isCompleted && <CheckCircle className="w-4 h-4 text-emerald-500" />}
              </Link>
            );
          })}

          <div className="pt-4 pb-2">
            <p className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Completion</p>
          </div>
          
          <Link
            to="/certificate"
            onClick={closeMenu}
            className={cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors",
              location.pathname === '/certificate' 
                ? "bg-indigo-50 text-indigo-700" 
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
            )}
          >
            <Award className="w-5 h-5" />
            Certificate
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto pt-16 md:pt-0">
        <div className="max-w-5xl mx-auto p-4 md:p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
