import { motion } from 'framer-motion';
import { Phone, Calendar, MessageSquare, Star, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

export interface Counselor {
  id: number;
  name: string;
  number: string;
  image: string;
  status: 'online' | 'busy' | 'offline';
  coinPrice: number;
  wonPrice: number;
  phone: string;
  tagline: string;
  tags: string[];
  reviewCount: string;
  isNew?: boolean;
  isTarot?: boolean;
}

interface CounselorCardProps {
  counselor: Counselor;
  index: number;
}

const statusLabels = {
  online: '상담중',
  busy: '상담대기',
  offline: '부재중',
};

const statusColors = {
  online: 'bg-status-online',
  busy: 'bg-status-busy',
  offline: 'bg-status-offline',
};

const CounselorCard = ({ counselor, index }: CounselorCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="bg-card rounded-2xl shadow-card hover:shadow-elevated transition-all duration-300 overflow-hidden group"
    >
      {/* 상단 정보 */}
      <div className="p-4 pb-0">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-lg">{counselor.name}</span>
            <span className="text-primary font-bold">{counselor.number}</span>
            {counselor.isTarot && (
              <span className="px-2 py-0.5 bg-magenta/10 text-magenta text-xs rounded-full">타로</span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <span className={`${statusColors[counselor.status]} text-white text-xs px-2 py-1 rounded-full flex items-center gap-1`}>
              <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
              {statusLabels[counselor.status]}
            </span>
            {counselor.status === 'online' && (
              <Button variant="ghost" size="sm" className="text-xs text-primary hover:bg-primary/10">
                예약신청 <ChevronRight className="w-3 h-3" />
              </Button>
            )}
          </div>
        </div>

        {/* 가격 정보 */}
        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
          <span className="flex items-center gap-1">
            <span className="text-gold font-semibold">C</span>선불 {counselor.coinPrice.toLocaleString()}코인
          </span>
          <span className="flex items-center gap-1">
            <span className="text-primary font-semibold">₩</span>후불 {counselor.wonPrice.toLocaleString()}원
          </span>
          <span className="text-muted-foreground/70">{counselor.phone}</span>
        </div>
      </div>

      {/* 프로필 이미지 영역 */}
      <div className="relative px-4">
        <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-b from-muted/30 to-muted/50">
          <img
            src={counselor.image}
            alt={counselor.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      {/* 하단 정보 */}
      <div className="p-4">
        <p className="font-medium text-primary text-center mb-2">{counselor.tagline}</p>
        <div className="flex justify-center gap-2 mb-3">
          {counselor.tags.map((tag) => (
            <span key={tag} className="text-xs text-coral">#{tag}</span>
          ))}
        </div>

        {/* 리뷰 및 액션 */}
        <div className="flex items-center justify-between pt-3 border-t border-border/50">
          <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors">
            <Star className="w-3 h-3 fill-gold text-gold" />
            <span>추천후기 ({counselor.reviewCount})</span>
          </button>
          <div className="flex gap-2">
            <Button size="sm" variant="outline" className="text-xs h-8">
              <Phone className="w-3 h-3 mr-1" />
              바로상담
            </Button>
            <Button size="sm" className="text-xs h-8 bg-gradient-primary">
              <Calendar className="w-3 h-3 mr-1" />
              예약
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CounselorCard;
