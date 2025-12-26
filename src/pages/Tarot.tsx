import { useState } from 'react';
import Layout from '@/components/Layout';
import CounselorCard, { Counselor } from '@/components/CounselorCard';
import SearchBox from '@/components/SearchBox';
import { motion } from 'framer-motion';
import { Sparkles, Filter, Grid3X3, List } from 'lucide-react';
import { Button } from '@/components/ui/button';

const tarotCounselors: Counselor[] = [
  {
    id: 1,
    name: '대박',
    number: '307',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop',
    status: 'online',
    coinPrice: 1500,
    wonPrice: 1700,
    phone: '060.700.8577',
    tagline: '인생 대박을 위한 속마음 타로!',
    tags: ['족집게콕콕', '속마음전문'],
    reviewCount: '9999+',
    isTarot: true,
  },
  {
    id: 2,
    name: '세라',
    number: '498',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=400&fit=crop',
    status: 'online',
    coinPrice: 1500,
    wonPrice: 1700,
    phone: '060.700.8577',
    tagline: '당신에게 행운을 드릴께요',
    tags: ['감탄리딩', '예지력'],
    reviewCount: '9999+',
    isTarot: true,
  },
  {
    id: 3,
    name: '히카리',
    number: '426',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=400&fit=crop',
    status: 'online',
    coinPrice: 1200,
    wonPrice: 1500,
    phone: '060.700.4466',
    tagline: '별에 바라는 마음. 이루고 싶은 사랑.',
    tags: ['진심을다해', '속마음전문'],
    reviewCount: '5000+',
    isTarot: true,
  },
  {
    id: 4,
    name: '별아라',
    number: '369',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=300&h=400&fit=crop',
    status: 'online',
    coinPrice: 1400,
    wonPrice: 1500,
    phone: '060.700.4466',
    tagline: '나와 너를 알 수 있는 시간 별아라',
    tags: ['현실주의', '심리상담'],
    reviewCount: '6000+',
    isTarot: true,
  },
  {
    id: 5,
    name: '오월',
    number: '128',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=400&fit=crop',
    status: 'online',
    coinPrice: 1200,
    wonPrice: 1500,
    phone: '060.700.4466',
    tagline: '당신의 입장을 최우선으로 생각하겠습니다.',
    tags: ['직관적', '속마음전문'],
    reviewCount: '7000+',
    isTarot: true,
  },
  {
    id: 6,
    name: '테리',
    number: '424',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=400&fit=crop',
    status: 'online',
    coinPrice: 1400,
    wonPrice: 1500,
    phone: '060.700.4466',
    tagline: '지혜와 조언을 드리는 타로마스터',
    tags: ['속시원한', '속마음전문'],
    reviewCount: '9999+',
    isTarot: true,
  },
  {
    id: 7,
    name: '한비',
    number: '466',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=400&fit=crop',
    status: 'online',
    coinPrice: 1400,
    wonPrice: 1500,
    phone: '060.700.4466',
    tagline: '♡말을 멈추고 행동하라♡',
    tags: ['경청공감', '심리타로'],
    reviewCount: '4000+',
    isTarot: true,
  },
  {
    id: 8,
    name: '루아',
    number: '458',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&h=400&fit=crop',
    status: 'busy',
    coinPrice: 1500,
    wonPrice: 1700,
    phone: '060.700.8577',
    tagline: '가치있는 선택의 도슨트~☆',
    tags: ['연애전략가', '속마음전문'],
    reviewCount: '9999+',
    isTarot: true,
  },
];

const filters = ['전체', '상담중', '상담대기', '인기순', '후기순', '가격낮은순'];

const Tarot = () => {
  const [activeFilter, setActiveFilter] = useState('전체');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  return (
    <Layout>
      {/* 페이지 헤더 */}
      <section className="py-16 bg-gradient-hero">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-magenta/10 text-magenta rounded-full text-sm font-medium mb-4"
          >
            <Sparkles className="w-4 h-4" />
            타로 전문
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold mb-4"
          >
            <span className="gradient-text">타로 상담사</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            당신의 마음을 읽는 타로 전문가들과 함께하세요.<br />
            정확한 리딩으로 삶의 방향을 제시해드립니다.
          </motion.p>
        </div>
      </section>

      {/* 필터 및 검색 */}
      <section className="py-8 border-b border-border/50 sticky top-0 bg-background/95 backdrop-blur-md z-20">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* 필터 */}
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
              <Filter className="w-4 h-4 text-muted-foreground flex-shrink-0" />
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${
                    activeFilter === filter
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted hover:bg-muted/80'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* 검색 및 뷰 모드 */}
            <div className="flex items-center gap-4">
              <SearchBox />
              <div className="flex items-center gap-1 bg-muted rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-background shadow-sm' : ''}`}
                >
                  <Grid3X3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-background shadow-sm' : ''}`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 상담사 목록 */}
      <section className="py-12">
        <div className="container">
          <div className="flex items-center justify-between mb-6">
            <p className="text-muted-foreground">
              총 <span className="font-bold text-foreground">{tarotCounselors.length}</span>명의 상담사
            </p>
          </div>

          <div className={`grid gap-6 ${
            viewMode === 'grid'
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
              : 'grid-cols-1'
          }`}>
            {tarotCounselors.map((counselor, index) => (
              <CounselorCard key={counselor.id} counselor={counselor} index={index} />
            ))}
          </div>

          {/* 더보기 버튼 */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Button variant="outline" size="lg" className="px-12">
              더 많은 상담사 보기
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Tarot;
