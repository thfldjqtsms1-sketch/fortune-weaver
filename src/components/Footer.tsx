import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background/80 relative z-10">
      {/* 상단 링크 */}
      <div className="border-b border-background/10">
        <div className="container py-4">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm">
            <Link to="/about" className="hover:text-background transition-colors">회사소개</Link>
            <Link to="/terms" className="hover:text-background transition-colors">이용약관</Link>
            <Link to="/privacy" className="hover:text-background transition-colors font-bold">개인정보처리방침</Link>
            <Link to="/youth" className="hover:text-background transition-colors">청소년보호정책</Link>
            <Link to="/partner" className="hover:text-background transition-colors">제휴안내</Link>
            <Link to="/recruit" className="hover:text-background transition-colors">상담사모집</Link>
          </div>
        </div>
      </div>

      {/* 메인 푸터 컨텐츠 */}
      <div className="container py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 회사 정보 */}
          <div>
            <h3 className="text-xl font-serif font-bold text-background mb-4">운세천궁</h3>
            <p className="text-sm mb-4 text-background/60">
              대한민국 대표 전화 상담 서비스<br />
              25년 전통의 신뢰와 정확성
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 bg-background/10 rounded-full hover:bg-background/20 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-background/10 rounded-full hover:bg-background/20 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-background/10 rounded-full hover:bg-background/20 transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* 고객센터 */}
          <div>
            <h4 className="font-semibold text-background mb-4">고객센터</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold" />
                <span>02-1234-5678</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold" />
                <span>help@unsechungung.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gold" />
                <span>24시간 연중무휴</span>
              </li>
            </ul>
          </div>

          {/* 빠른 링크 */}
          <div>
            <h4 className="font-semibold text-background mb-4">서비스 안내</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/guide" className="hover:text-background transition-colors">이용안내</Link></li>
              <li><Link to="/pricing" className="hover:text-background transition-colors">이용요금</Link></li>
              <li><Link to="/reservation" className="hover:text-background transition-colors">예약상담</Link></li>
              <li><Link to="/faq" className="hover:text-background transition-colors">자주묻는질문</Link></li>
            </ul>
          </div>

          {/* 인증마크 */}
          <div>
            <h4 className="font-semibold text-background mb-4">인증 및 수상</h4>
            <div className="flex flex-wrap gap-2">
              <div className="px-3 py-2 bg-background/10 rounded-lg text-xs">
                KBS 9시뉴스 보도
              </div>
              <div className="px-3 py-2 bg-background/10 rounded-lg text-xs">
                MBC 출연
              </div>
              <div className="px-3 py-2 bg-background/10 rounded-lg text-xs">
                25주년 운세상담
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 하단 저작권 */}
      <div className="border-t border-background/10">
        <div className="container py-6 text-center text-xs text-background/50">
          <p className="mb-2">
            (주)운세천궁 | 대표: 홍길동 | 사업자등록번호: 123-45-67890
          </p>
          <p className="mb-2">
            <MapPin className="w-3 h-3 inline mr-1" />
            서울특별시 강남구 테헤란로 123, 8층
          </p>
          <p>
            © 2025 운세천궁. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
