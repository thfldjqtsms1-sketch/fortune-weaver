import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, User, UserPlus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';

const navItems = [
  { label: '17분예약상담', href: '/reservation' },
  { label: '신규상담사', href: '/new-counselors', badge: 'NEW' },
  { label: '단골상담사', href: '/favorites' },
  { label: '찐상담사', href: '/verified' },
  { label: '인기상담사', href: '/popular' },
  { label: '타로상담사', href: '/tarot' },
  { label: '역학상담사', href: '/fortune' },
  { label: '신점상담사', href: '/spiritual' },
  { label: '이용안내', href: '/guide' },
  { label: '이용요금', href: '/pricing' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50 shadow-soft">
      {/* 상단 띠 배너 */}
      <div className="bg-gradient-primary text-primary-foreground py-1.5 text-center text-sm">
        <span className="font-medium">🎄 연말 특별 코인보너스 29% 지급! 🎄</span>
      </div>

      {/* 상단 유틸리티 바 */}
      <div className="bg-muted/50 py-2 text-xs border-b border-border/30">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-4 text-muted-foreground">
            <Link to="/customer-center" className="hover:text-primary transition-colors">고객센터</Link>
            <Link to="/reviews" className="hover:text-primary transition-colors">상담후기</Link>
            <Link to="/events" className="hover:text-primary transition-colors">이벤트</Link>
            <Link to="/favorites" className="hover:text-primary transition-colors hidden sm:block">즐겨찾기상담사</Link>
            <Link to="/recruit" className="hover:text-primary transition-colors hidden sm:block">상담사모집</Link>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/login" className="flex items-center gap-1 px-3 py-1 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors">
              <User className="w-3 h-3" />
              <span>로그인</span>
            </Link>
            <Link to="/register" className="flex items-center gap-1 px-3 py-1 border border-primary text-primary rounded-full hover:bg-primary/10 transition-colors">
              <UserPlus className="w-3 h-3" />
              <span>회원가입</span>
            </Link>
          </div>
        </div>
      </div>

      {/* 메인 헤더 */}
      <div className="container py-4">
        <div className="flex items-center justify-between">
          {/* 좌측 프로모션 */}
          <Link to="/promotion" className="hidden lg:flex items-center gap-2 text-primary font-bold">
            <span className="bg-gradient-gold text-primary-foreground px-3 py-1 rounded-full text-sm">코인보너스</span>
            <span className="text-xl">29%</span>
          </Link>

          {/* 로고 */}
          <Link to="/" className="flex flex-col items-center">
            <span className="text-3xl md:text-4xl font-serif font-bold gradient-text">운세천궁</span>
            <span className="text-xs text-muted-foreground">나만의 운명 해결사</span>
          </Link>

          {/* 우측 첫 고객 혜택 */}
          <div className="hidden lg:flex items-center gap-2">
            <span className="text-sm font-medium text-coral">첫 고객님</span>
            <span className="text-sm font-bold text-primary">특별한 선물</span>
          </div>

          {/* 모바일 메뉴 버튼 */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* 데스크톱 네비게이션 */}
        <nav className="hidden lg:flex items-center justify-center gap-1 mt-4 flex-wrap">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`nav-item ${location.pathname === item.href ? 'active' : ''}`}
            >
              {item.label}
              {item.badge && (
                <span className="ml-1 px-1.5 py-0.5 text-[10px] bg-coral text-white rounded-full">
                  {item.badge}
                </span>
              )}
            </Link>
          ))}
          <Button
            asChild
            className="ml-4 bg-gradient-gold hover:shadow-lg hover:scale-105 transition-all text-white border-0"
          >
            <Link to="/coin-charge">
              선불결제 코인충전
            </Link>
          </Button>
        </nav>
      </div>

      {/* 모바일 메뉴 */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden bg-background border-t border-border"
          >
            <nav className="container py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`block py-2 px-4 rounded-lg transition-colors ${
                    location.pathname === item.href
                      ? 'bg-primary text-primary-foreground'
                      : 'hover:bg-muted'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                  {item.badge && (
                    <span className="ml-2 px-1.5 py-0.5 text-[10px] bg-coral text-white rounded-full">
                      {item.badge}
                    </span>
                  )}
                </Link>
              ))}
              <Button
                asChild
                className="w-full mt-4 bg-gradient-gold text-white"
              >
                <Link to="/coin-charge" onClick={() => setIsMenuOpen(false)}>
                  선불결제 코인충전
                </Link>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
