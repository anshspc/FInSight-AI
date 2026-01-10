import React, { useState, useRef, useEffect } from 'react';
import { Search, Sun, Moon, Bell, Menu, Command, User, Settings, LogOut, ChevronDown } from 'lucide-react';
import { useSearch } from '../../context/SearchContext';
import { Link } from 'react-router-dom';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, setDarkMode }) => {
  const { searchQuery, setSearchQuery } = useSearch();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);
  const notificationsRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
      if (notificationsRef.current && !notificationsRef.current.contains(event.target as Node)) {
        setShowNotifications(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="h-20 border-b border-border/50 bg-background/80 backdrop-blur-xl sticky top-0 z-40 px-6 md:px-10 flex items-center justify-between">
      <div className="flex items-center gap-6 flex-1">
        <button className="lg:hidden p-2.5 hover:bg-accent rounded-xl transition-colors">
          <Menu size={22} />
        </button>
        
        <div className="relative max-w-lg w-full hidden md:block group">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors">
            <Search size={18} />
          </div>
          <input 
            type="text" 
            placeholder="Search transactions, insights..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-accent/30 border-none rounded-2xl py-3 pl-12 pr-16 text-sm font-medium focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-muted-foreground/60"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 px-2 py-1 bg-background border border-border/50 rounded-lg shadow-sm">
            <Command size={10} className="text-muted-foreground" />
            <span className="text-[10px] font-bold text-muted-foreground">K</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1 p-1 bg-accent/30 rounded-2xl border border-border/50">
          <button 
            onClick={() => setDarkMode(false)}
            className={`p-2 rounded-xl transition-all ${!darkMode ? 'bg-card shadow-sm text-primary' : 'text-muted-foreground hover:text-foreground'}`}
          >
            <Sun size={18} />
          </button>
          <button 
            onClick={() => setDarkMode(true)}
            className={`p-2 rounded-xl transition-all ${darkMode ? 'bg-card shadow-sm text-primary' : 'text-muted-foreground hover:text-foreground'}`}
          >
            <Moon size={18} />
          </button>
        </div>
        
        <div className="relative" ref={notificationsRef}>
          <button 
            onClick={() => setShowNotifications(!showNotifications)}
            className={`p-2.5 rounded-2xl transition-all relative border ${showNotifications ? 'bg-accent border-border/50 text-foreground' : 'text-muted-foreground border-transparent hover:border-border/50 hover:bg-accent'} group`}
          >
            <Bell size={20} className="group-hover:shake" />
            <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-primary rounded-full ring-2 ring-background"></span>
          </button>

          {/* Step 3: Notifications Dropdown */}
          {showNotifications && (
            <div className="absolute right-0 top-14 w-80 rounded-2xl border border-border bg-card p-4 shadow-xl animate-in fade-in zoom-in-95 duration-200 z-50">
              <h4 className="font-semibold mb-3">Notifications</h4>

              <div className="space-y-3 text-sm">
                <div className="p-3 rounded-xl bg-accent/40 border border-border/50">
                  Budget limit reached for Food category
                </div>

                <div className="p-3 rounded-xl bg-accent/40 border border-border/50">
                  Credit card payment due tomorrow
                </div>

                <div className="p-3 rounded-xl bg-accent/40 border border-border/50">
                  Monthly savings increased by 8%
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="h-10 w-[1px] bg-border mx-1"></div>

        <div className="relative" ref={profileRef}>
          <button 
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center gap-4 pl-2 cursor-pointer hover:opacity-80 transition-all group"
          >
            <div className="text-right hidden sm:block">
              <p className="text-sm font-bold tracking-tight">Alex Rivera</p>
              <div className="flex items-center justify-end gap-1.5 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Active Now</p>
              </div>
            </div>
            <div className="relative">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-primary via-blue-400 to-indigo-600 p-[2px] shadow-lg shadow-primary/20 rotate-3 group-hover:rotate-0 transition-transform duration-300">
                <div className="w-full h-full rounded-[14px] bg-card flex items-center justify-center overflow-hidden">
                  <img 
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" 
                    alt="Profile" 
                    className="w-full h-full object-cover -rotate-3 group-hover:rotate-0 transition-transform duration-300"
                  />
                </div>
              </div>
              <div className="absolute -bottom-1 -right-1 bg-background border border-border/50 rounded-full p-0.5 shadow-sm">
                <ChevronDown size={10} className={`transition-transform duration-300 ${isProfileOpen ? 'rotate-180' : ''}`} />
              </div>
            </div>
          </button>

          {/* Dropdown Menu */}
          {isProfileOpen && (
            <div className="absolute right-0 mt-4 w-56 bg-card border border-border shadow-2xl rounded-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 py-2 z-50">
              <div className="px-4 py-3 border-b border-border mb-1">
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Signed in as</p>
                <p className="text-sm font-bold mt-1 truncate">alex@example.com</p>
              </div>
              
              <Link 
                to="/profile" 
                onClick={() => setIsProfileOpen(false)}
                className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium hover:bg-accent transition-colors"
              >
                <User size={16} className="text-muted-foreground" />
                Profile Details
              </Link>
              
              <Link 
                to="/settings" 
                onClick={() => setIsProfileOpen(false)}
                className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium hover:bg-accent transition-colors"
              >
                <Settings size={16} className="text-muted-foreground" />
                Settings
              </Link>
              
              <div className="h-[1px] bg-border my-1" />
              
              <button 
                className="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-bold text-destructive hover:bg-destructive/10 transition-colors text-left"
                onClick={() => setIsProfileOpen(false)}
              >
                <LogOut size={16} />
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
