import { useState } from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import ConsultationInfo from '@/components/ConsultationInfo';
import CategoryTabs from '@/components/CategoryTabs';
import CounselorCard, { Counselor } from '@/components/CounselorCard';
import SearchBox from '@/components/SearchBox';
import PromoBanner from '@/components/PromoBanner';
import { motion } from 'framer-motion';
import { ChevronRight, TrendingUp, Star, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

// 샘플 상담사 데이터
const sampleCounselors: Counselor[] = [
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
    name: '도이',
    number: '031',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=400&fit=crop',
    status: 'online',
    coinPrice: 1400,
    wonPrice: 1500,
    phone: '060.700.4466',
    tagline: '선택의 순간, 당신과 함께 할게요',
    tags: ['성향분석', '명리정성술'],
    reviewCount: '9999+',
    isTarot: true,
  },
  {
    id: 3,
    name: '초연',
    number: '234',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=400&fit=crop',
    status: 'busy',
    coinPrice: 1300,
    wonPrice: 1500,
    phone: '060.700.4466',
    tagline: '맑은 영으로 신에 소리를 전달',
    tags: ['순수내면', '명철감각'],
    reviewCount: '7000+',
  },
  {
    id: 4,
    name: '연우',
    number: '450',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=400&fit=crop',
    status: 'online',
    coinPrice: 1400,
    wonPrice: 1600,
    phone: '060.700.8577',
    tagline: '삶의 방향성을 바꾸는 영타로',
    tags: ['공감소통', '속마음전문'],
    reviewCount: '8500+',
    isTarot: true,
    isNew: true,
  },
];

// 인기 키워드
const popularKeywords = [
  { rank: 1, keyword: '신년운세', isNew: true },
  { rank: 2, keyword: '토정비결', isNew: false },
  { rank: 3, keyword: '속마음', isNew: true },
  { rank: 4, keyword: '사주타로', isNew: false },
  { rank: 5, keyword: '심리타로', isNew: false },
  { rank: 6, keyword: '애정운', isNew: true },
  { rank: 7, keyword: '타로애정운', isNew: false },
  { rank: 8, keyword: '연애', isNew: false },
  { rank: 9, keyword: '재결합', isNew: false },
  { rank: 10, keyword: '궁합', isNew: true },
];

const Home = () => {
  const [activeCategory, setActiveCategory] = useState('tarot');

  return (
    <Layout>
      {/* 프로모션 배너 */}
      <PromoBanner />

      {/* 히어로 섹션 */}
      <HeroSection />

      {/* 상담 안내 바 */}
      <ConsultationInfo />

      {/* 메인 상담사 섹션 */}
      <section className="py-12 md:py-16">
        <div className="container">
          {/* 인기 검색어 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 bg-gradient-to-r from-secondary/50 via-muted/30 to-secondary/50 rounded-2xl p-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 text-primary" />
              <h2 className="font-semibold text-lg">인기 검색어</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {popularKeywords.map((item) => (
                <Link
                  key={item.rank}
                  to={`/search?q=${item.keyword}`}
                  className="flex items-center gap-1 px-3 py-1.5 bg-background rounded-full text-sm hover:bg-primary hover:text-primary-foreground transition-colors group"
                >
                  <span className="font-bold text-primary group-hover:text-primary-foreground">{item.rank}.</span>
                  <span>{item.keyword}</span>
                  {item.isNew && (
                    <span className="w-1.5 h-1.5 bg-coral rounded-full" />
                  )}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* 카테고리 탭 */}
          <CategoryTabs
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />

          {/* 검색 및 필터 */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
            <h2 className="section-title gradient-text">
              {activeCategory === 'tarot' && '타로 상담사'}
              {activeCategory === 'fortune' && '역학 상담사'}
              {activeCategory === 'spiritual' && '신점 상담사'}
              {activeCategory === 'new' && '신규 상담사'}
            </h2>
            <SearchBox />
          </div>

          {/* 상담사 카드 그리드 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sampleCounselors.map((counselor, index) => (
              <CounselorCard key={counselor.id} counselor={counselor} index={index} />
            ))}
          </div>

          {/* 더보기 */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <Link
              to={`/${activeCategory}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-muted hover:bg-muted/80 rounded-full text-foreground/80 hover:text-foreground transition-colors"
            >
              더 많은 상담사 보기
              <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 통계 섹션 */}
      <section className="py-16 bg-gradient-primary text-primary-foreground">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">25</div>
              <div className="text-sm opacity-80">서비스 운영 년수</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-sm opacity-80">전문 상담사</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">1,315,511</div>
              <div className="text-sm opacity-80">누적 리뷰</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
              <div className="text-sm opacity-80">연중무휴 상담</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 최신 후기 섹션 */}
      <section className="py-16">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <h2 className="section-title flex items-center gap-2">
              <Star className="w-6 h-6 text-gold" />
              실시간 후기
            </h2>
            <Link to="/reviews" className="text-primary hover:underline flex items-center gap-1 text-sm">
              전체보기 <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-xl p-6 shadow-soft hover:shadow-card transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold">
                    {['김', '이', '박'][i - 1]}
                  </div>
                  <div>
                    <div className="font-medium">{['김**', '이**', '박**'][i - 1]}</div>
                    <div className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      방금 전
                    </div>
                  </div>
                </div>
                <p className="text-sm text-foreground/80 line-clamp-3">
                  {[
                    '선생님 상담 정말 감사합니다. 마음이 많이 복잡했는데 깔끔하게 정리해 주셔서 너무 좋았어요. 말씀해주신대로 잘 될 것 같아요!',
                    '처음 상담받아봤는데 너무 잘 맞아서 소름돋았어요ㅋㅋ 다음에 또 상담받고 싶습니다. 추천해요!',
                    '항상 편안하게 상담해주셔서 감사합니다. 쌤 덕분에 마음이 편해졌어요. 새해에도 잘 부탁드려요~',
                  ][i - 1]}
                </p>
                <div className="mt-4 flex items-center gap-1">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
