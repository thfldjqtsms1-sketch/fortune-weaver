import { motion } from 'framer-motion';
import { Gift, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const PromoBanner = () => {
  return (
    <div className="fixed right-4 top-1/3 z-40 hidden xl:flex flex-col gap-4">
      {/* 코인보너스 배너 */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
      >
        <Link
          to="/promotion"
          className="block w-[180px] p-4 bg-gradient-to-br from-gold via-coral to-gold rounded-2xl shadow-elevated text-white text-center hover:shadow-glow transition-all"
        >
          <div className="text-sm font-medium mb-1">2025 다드리</div>
          <div className="text-xl font-bold mb-1">코인보너스</div>
          <div className="text-2xl font-black">더블이벤트</div>
          <div className="mt-2 text-sm bg-white/20 rounded-full py-1">
            12월 바로지급 29%
          </div>
        </Link>
      </motion.div>

      {/* 나눔상담사 배너 */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
      >
        <Link
          to="/sharing"
          className="block w-[180px] p-4 bg-gradient-to-br from-mint via-sky to-mint rounded-2xl shadow-elevated text-foreground text-center hover:shadow-glow transition-all"
        >
          <div className="flex items-center justify-center gap-1 mb-2">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-lg font-bold text-primary">콕콕</span>
            <span className="font-medium">나눔</span>
          </div>
          <div className="text-lg font-bold">상담사</div>
          <div className="text-sm text-muted-foreground">구독서비스</div>
          <div className="mt-2 text-xs bg-primary/10 text-primary rounded-full py-1">
            매월 10원 ~31일까지!
          </div>
        </Link>
      </motion.div>
    </div>
  );
};

export default PromoBanner;
