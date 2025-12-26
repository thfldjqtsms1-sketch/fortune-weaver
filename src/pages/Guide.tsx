import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { Calendar, Phone, Coins, Smartphone, MessageCircle, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const steps = [
  {
    number: '01',
    icon: Calendar,
    title: '상담사 선택',
    description: '원하시는 상담 분야의 상담사를 선택하세요. 타로, 사주, 신점 등 다양한 전문가가 대기중입니다.',
    color: 'bg-primary',
  },
  {
    number: '02',
    icon: Coins,
    title: '결제 방식 선택',
    description: '선불(코인) 또는 후불(060) 중 편하신 결제 방식을 선택하세요.',
    color: 'bg-gold',
  },
  {
    number: '03',
    icon: Phone,
    title: '상담 시작',
    description: '바로상담 또는 예약상담으로 전문 상담사와 1:1 전화상담을 시작하세요.',
    color: 'bg-coral',
  },
  {
    number: '04',
    icon: MessageCircle,
    title: '후기 작성',
    description: '상담이 끝나면 후기를 남겨주세요. 다른 분들께 도움이 됩니다.',
    color: 'bg-mint',
  },
];

const consultTypes = [
  {
    icon: Phone,
    title: '바로상담',
    description: '지금 바로 상담사와 연결됩니다',
    steps: [
      '원하는 상담사 선택',
      '02-397-1004 전화',
      '0번 + 상담사 번호 3자리 입력',
      '상담 시작',
    ],
    color: 'from-coral to-pink',
  },
  {
    icon: Calendar,
    title: '예약상담',
    description: '원하는 시간에 상담받으세요',
    steps: [
      '상담사 프로필에서 예약신청 클릭',
      '원하는 날짜/시간 선택',
      '예약 확정 문자 확인',
      '예약 시간에 전화 수신',
    ],
    color: 'from-primary to-magenta',
  },
  {
    icon: Smartphone,
    title: '060 후불상담',
    description: '전화요금으로 간편하게',
    steps: [
      '상담사 060 번호 확인',
      '060-700-XXXX로 전화',
      '상담 후 전화요금으로 청구',
      '30초당 1,100~1,900원',
    ],
    color: 'from-sky to-mint',
  },
];

const Guide = () => {
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
            <span className="gradient-text">이용안내</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            운세천궁 이용방법을 안내해 드립니다.<br />
            쉽고 간편하게 상담받으세요.
          </motion.p>
        </div>
      </section>

      {/* 이용 단계 */}
      <section className="py-16">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-serif font-bold text-center mb-12"
          >
            간단한 <span className="gradient-text">4단계</span>로 시작하세요
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-shadow h-full">
                  <div className={`w-14 h-14 ${step.color} rounded-xl flex items-center justify-center mb-4`}>
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-5xl font-bold text-muted/30 mb-2">{step.number}</div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-1/2 -right-4 w-8 h-8 text-muted-foreground/30 transform -translate-y-1/2" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 상담 유형별 안내 */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-serif font-bold text-center mb-4"
          >
            상담 유형별 안내
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-muted-foreground mb-12"
          >
            상황에 맞는 상담 방법을 선택하세요
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {consultTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl overflow-hidden shadow-card"
              >
                <div className={`bg-gradient-to-r ${type.color} p-6 text-white`}>
                  <type.icon className="w-10 h-10 mb-3" />
                  <h3 className="text-xl font-bold">{type.title}</h3>
                  <p className="text-sm opacity-80">{type.description}</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {type.steps.map((step, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                          {i + 1}
                        </span>
                        <span className="text-sm">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 주의사항 */}
      <section className="py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-2xl font-bold mb-8 text-center">
              <Clock className="w-6 h-6 inline mr-2" />
              알아두세요
            </h2>
            <div className="space-y-4">
              {[
                '운세천궁은 24시간 연중무휴로 운영됩니다.',
                '상담 요금은 30초 단위로 과금되며, 상담사마다 요금이 다릅니다.',
                '선불 코인은 충전 후 유효기간 없이 사용 가능합니다.',
                '예약 상담은 최소 30분 전에 예약해주세요.',
                '상담 내용은 철저히 비밀이 보장됩니다.',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-muted/50 rounded-lg p-4">
                  <CheckCircle className="w-5 h-5 text-status-online flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">궁금한 점이 있으신가요?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            고객센터에서 친절하게 안내해드립니다.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="btn-gold">
              <Link to="/contact">
                문의하기 <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
              <Link to="/faq">
                자주 묻는 질문
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Guide;
