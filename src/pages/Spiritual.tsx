import { useState } from 'react';
import Layout from '@/components/Layout';
import CounselorCard, { Counselor } from '@/components/CounselorCard';
import SearchBox from '@/components/SearchBox';
import { motion } from 'framer-motion';
import { Moon, Filter, Grid3X3, List } from 'lucide-react';
import { Button } from '@/components/ui/button';

const spiritualCounselors: Counselor[] = [
  {
    id: 1,
    name: '초연',
    number: '234',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=400&fit=crop',
    status: 'online',
    coinPrice: 1500,
    wonPrice: 1700,
    phone: '060.700.8577',
    tagline: '맑은 영으로 신에 소리를 전달',
    tags: ['순수내면', '명철감각'],
    reviewCount: '7000+',
  },
  {
    id: 2,
    name: '신명',
    number: '178',
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=300&h=400&fit=crop',
    status: 'online',
    coinPrice: 1600,
    wonPrice: 1800,
    phone: '060.700.8577',
    tagline: '40년 내림 무속인의 정확한 신점',
    tags: ['신내림', '사업운'],
    reviewCount: '9999+',
  },
  {
    id: 3,
    name: '청화',
    number: '291',
    image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=300&h=400&fit=crop',
    status: 'busy',
    coinPrice: 1400,
    wonPrice: 1600,
    phone: '060.700.4466',
    tagline: '신과 함께하는 영적 상담',
    tags: ['신점', '애정운'],
    reviewCount: '6500+',
  },
  {
    id: 4,
    name: '영통',
    number: '367',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=400&fit=crop',
    status: 'online',
    coinPrice: 1300,
    wonPrice: 1500,
    phone: '060.700.4466',
    tagline: '영의 세계를 통해 답을 드립니다',
    tags: ['영적상담', '가족운'],
    reviewCount: '5800+',
  },
];

const filters = ['전체', '상담중', '상담대기', '인기순', '후기순', '가격낮은순'];

const Spiritual = () => {
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-deep-purple/10 text-deep-purple rounded-full text-sm font-medium mb-4"
          >
            <Moon className="w-4 h-4" />
            신점 전문
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold mb-4"
          >
            <span className="gradient-text">신점 상담사</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            영적 교감으로 정확한 미래를 전해드립니다.<br />
            신의 뜻을 통해 삶의 해답을 찾으세요.
          </motion.p>
        </div>
      </section>

      {/* 필터 및 검색 */}
      <section className="py-8 border-b border-border/50 sticky top-0 bg-background/95 backdrop-blur-md z-20">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
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
              총 <span className="font-bold text-foreground">{spiritualCounselors.length}</span>명의 상담사
            </p>
          </div>

          <div className={`grid gap-6 ${
            viewMode === 'grid'
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
              : 'grid-cols-1'
          }`}>
            {spiritualCounselors.map((counselor, index) => (
              <CounselorCard key={counselor.id} counselor={counselor} index={index} />
            ))}
          </div>

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

export default Spiritual;
