import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { Check, Coins, Phone, Gift, CreditCard, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const pricingPlans = [
  {
    tier: '베이직',
    coinPrice: '700',
    wonPrice: '1,100',
    description: '부담없이 시작하는 상담',
    features: [
      '30초당 요금',
      '모든 상담사 이용 가능',
      '기본 상담 서비스',
      '후기 작성 가능',
    ],
    recommended: false,
    color: 'from-muted to-muted/80',
  },
  {
    tier: '스탠다드',
    coinPrice: '1,200',
    wonPrice: '1,500',
    description: '가장 인기있는 요금제',
    features: [
      '30초당 요금',
      '인기 상담사 이용',
      '우선 예약 가능',
      '상담 기록 저장',
      '맞춤 상담사 추천',
    ],
    recommended: true,
    color: 'from-primary to-magenta',
  },
  {
    tier: '프리미엄',
    coinPrice: '1,500',
    wonPrice: '1,700',
    description: '최고의 상담 경험',
    features: [
      '30초당 요금',
      'TOP 상담사 우선 매칭',
      '예약 우선권',
      '무제한 상담 기록',
      '프리미엄 고객센터',
      '특별 이벤트 초대',
    ],
    recommended: false,
    color: 'from-gold to-coral',
  },
];

const coinPackages = [
  { coins: 5000, bonus: 0, price: '5,000원' },
  { coins: 10000, bonus: 500, price: '10,000원' },
  { coins: 30000, bonus: 3000, price: '30,000원' },
  { coins: 50000, bonus: 7500, price: '50,000원' },
  { coins: 100000, bonus: 20000, price: '100,000원' },
];

const Pricing = () => {
  return (
    <Layout>
      {/* 페이지 헤더 */}
      <section className="py-16 bg-gradient-hero">
        <div className="container text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold mb-4"
          >
            <span className="gradient-text">이용요금 안내</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            투명한 요금 체계로 부담없이 상담받으세요.<br />
            선불/후불 모두 가능합니다.
          </motion.p>
        </div>
      </section>

      {/* 요금제 카드 */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.tier}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative rounded-2xl overflow-hidden ${
                  plan.recommended ? 'scale-105 shadow-elevated' : 'shadow-card'
                }`}
              >
                {plan.recommended && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-primary text-primary-foreground text-center py-2 text-sm font-medium">
                    가장 인기있는 선택
                  </div>
                )}
                <div className={`bg-card p-8 ${plan.recommended ? 'pt-14' : ''}`}>
                  <h3 className="text-xl font-bold mb-2">{plan.tier}</h3>
                  <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-gold">
                        <Coins className="w-5 h-5 inline" />
                      </span>
                      <span className="text-3xl font-bold">{plan.coinPrice}</span>
                      <span className="text-muted-foreground">코인</span>
                    </div>
                    <div className="flex items-baseline gap-2 text-muted-foreground">
                      <span className="text-primary">₩</span>
                      <span className="text-xl">{plan.wonPrice}</span>
                      <span>원 / 30초</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-status-online" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    asChild 
                    className={`w-full ${plan.recommended ? 'bg-gradient-primary' : ''}`}
                    variant={plan.recommended ? 'default' : 'outline'}
                  >
                    <Link to="/coin-charge">
                      시작하기
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 코인 충전 패키지 */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-serif font-bold mb-4">
              <Coins className="w-8 h-8 inline text-gold mr-2" />
              코인 충전 패키지
            </h2>
            <p className="text-muted-foreground">
              많이 충전할수록 더 많은 보너스 코인을 드려요!
            </p>
            <div className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-coral/10 text-coral rounded-full text-sm font-medium">
              <Gift className="w-4 h-4" />
              12월 한정! 최대 29% 보너스 지급
            </div>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {coinPackages.map((pkg, index) => (
                <motion.div
                  key={pkg.coins}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between bg-card rounded-xl p-6 shadow-soft hover:shadow-card transition-shadow"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center">
                      <Coins className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-lg">
                        {pkg.coins.toLocaleString()} 코인
                        {pkg.bonus > 0 && (
                          <span className="ml-2 text-coral text-sm font-medium">
                            +{pkg.bonus.toLocaleString()} 보너스
                          </span>
                        )}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {pkg.bonus > 0 
                          ? `총 ${(pkg.coins + pkg.bonus).toLocaleString()} 코인 지급`
                          : '보너스 없음'
                        }
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-xl font-bold">{pkg.price}</span>
                    <Button className="bg-gradient-primary">
                      충전하기
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 결제 수단 */}
      <section className="py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-2xl font-bold mb-8">
              <CreditCard className="w-6 h-6 inline mr-2" />
              다양한 결제 수단
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['신용카드', '계좌이체', '휴대폰 결제', '무통장입금'].map((method) => (
                <div key={method} className="p-4 bg-muted rounded-xl text-center">
                  <span className="text-sm font-medium">{method}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">지금 바로 시작하세요</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            첫 상담 고객에게는 특별한 혜택을 드립니다.<br />
            지금 가입하고 무료 코인을 받아보세요!
          </p>
          <Button asChild size="lg" className="btn-gold">
            <Link to="/register">
              무료로 시작하기 <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
