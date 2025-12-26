import { motion } from 'framer-motion';
import { Play, Gift, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative min-h-[500px] md:min-h-[600px] bg-gradient-hero overflow-hidden">
      {/* 배경 이미지/일러스트 */}
      <div className="absolute inset-0 pointer-events-none">
        {/* 좌측 상담사 이미지 */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute left-0 bottom-0 w-[300px] md:w-[400px] hidden lg:block"
        >
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop"
            alt="상담사"
            className="w-full h-auto object-contain opacity-90"
          />
        </motion.div>

        {/* 우측 상담사 이미지 */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute right-0 bottom-0 w-[300px] md:w-[400px] hidden lg:block"
        >
          <img
            src="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=500&fit=crop"
            alt="상담사"
            className="w-full h-auto object-contain opacity-90"
          />
        </motion.div>
      </div>

      {/* 메인 컨텐츠 */}
      <div className="container relative z-10 flex flex-col items-center justify-center min-h-[500px] md:min-h-[600px] text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-4">
            <span className="block text-foreground/80 mb-2">올 한해</span>
            <span className="gradient-text">수고많으셨어요</span>
            <Sparkles className="inline-block w-8 h-8 text-gold ml-2 animate-float" />
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <p className="text-lg md:text-xl text-foreground/70 mb-2">
            국내 최초 개통 운세상담 서비스 <span className="font-bold text-primary">25주년</span>
          </p>
          <Button variant="outline" size="sm" className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <Play className="w-3 h-3 mr-1" /> 관련자료
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-4 mb-8"
        >
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base text-foreground/70">
            <div className="flex items-center gap-2">
              <span className="font-bold text-primary">KBS</span>
              <span>9시뉴스 운세상담업체 보도</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-primary">MBC</span>
              <span>예능프로그램 전화상담 출연</span>
            </div>
          </div>
          <p className="text-foreground/60">
            업계 최대 단골고객 약 <span className="font-bold text-gold">1,315,511</span> 리얼후기,
            국내 최대 상담사 약 <span className="font-bold text-gold">500여명</span> 활동
          </p>
          <p className="text-lg font-semibold text-primary">
            대한민국 대표 전화상담 업체!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Button asChild size="lg" className="btn-primary text-lg px-8">
            <Link to="/tarot">
              <Gift className="w-5 h-5 mr-2" />
              무료 타로 체험
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-lg px-8 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <Link to="/reservation">
              예약상담 시작하기
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
