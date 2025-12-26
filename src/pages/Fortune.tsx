import { useState } from 'react';
import Layout from '@/components/Layout';
import CounselorCard, { Counselor } from '@/components/CounselorCard';
import SearchBox from '@/components/SearchBox';
import { motion } from 'framer-motion';
import { Star, Filter, Grid3X3, List } from 'lucide-react';
import { Button } from '@/components/ui/button';

const fortuneCounselors: Counselor[] = [
  {
    id: 1,
    name: '명운',
    number: '215',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=400&fit=crop',
    status: 'online',
    coinPrice: 1400,
    wonPrice: 1600,
    phone: '060.700.8577',
    tagline: '40년 경력의 정통 사주명리',
    tags: ['사주팔자', '운세전문'],
    reviewCount: '9999+',
  },
  {
    id: 2,
    name: '천명',
    number: '342',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=400&fit=crop',
    status: 'online',
    coinPrice: 1300,
    wonPrice: 1500,
    phone: '060.700.4466',
    tagline: '명리학으로 풀어가는 인생의 해답',
    tags: ['토정비결', '신년운세'],
    reviewCount: '8500+',
  },
  {
    id: 3,
    name: '백운',
    number: '189',
    image: 'https://images.unsplash.com/photo-1556157382-97edd3f93c0a?w=300&h=400&fit=crop',
    status: 'busy',
    coinPrice: 1500,
    wonPrice: 1700,
    phone: '060.700.8577',
    tagline: '운명을 바꾸는 정확한 사주풀이',
    tags: ['오행분석', '직업운'],
    reviewCount: '7200+',
  },
  {
    id: 4,
    name: '현담',
    number: '456',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=400&fit=crop',
    status: 'online',
    coinPrice: 1200,
    wonPrice: 1400,
    phone: '060.700.4466',
    tagline: '3대째 이어온 명리학의 정수',
    tags: ['궁합전문', '결혼운'],
    reviewCount: '6800+',
  },
];

const filters = ['전체', '상담중', '상담대기', '인기순', '후기순', '가격낮은순'];

const Fortune = () => {
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 text-gold rounded-full text-sm font-medium mb-4"
          >
            <Star className="w-4 h-4" />
            역학 전문
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold mb-4"
          >
            <span className="gradient-text">역학 상담사</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            사주팔자, 토정비결, 명리학 전문가와 상담하세요.<br />
            정통 동양철학으로 당신의 운명을 풀어드립니다.
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
              총 <span className="font-bold text-foreground">{fortuneCounselors.length}</span>명의 상담사
            </p>
          </div>

          <div className={`grid gap-6 ${
            viewMode === 'grid'
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
              : 'grid-cols-1'
          }`}>
            {fortuneCounselors.map((counselor, index) => (
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

export default Fortune;
