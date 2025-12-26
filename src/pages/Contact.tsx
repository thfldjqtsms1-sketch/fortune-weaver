import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { Phone, Mail, MessageCircle, Clock, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { toast } from '@/hooks/use-toast';

const contactMethods = [
  {
    icon: Phone,
    title: '전화 문의',
    value: '02-1234-5678',
    description: '24시간 연중무휴',
    color: 'bg-primary',
  },
  {
    icon: Mail,
    title: '이메일 문의',
    value: 'help@unsechungung.com',
    description: '24시간 이내 답변',
    color: 'bg-gold',
  },
  {
    icon: MessageCircle,
    title: '카카오톡 문의',
    value: '@운세천궁',
    description: '빠른 상담',
    color: 'bg-status-online',
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: '문의가 접수되었습니다',
      description: '빠른 시일 내에 답변 드리겠습니다.',
    });
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

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
            <span className="gradient-text">고객센터</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            궁금하신 점이 있으시면 언제든 문의해주세요.<br />
            친절하게 안내해드리겠습니다.
          </motion.p>
        </div>
      </section>

      {/* 연락처 카드 */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 text-center shadow-card hover:shadow-elevated transition-shadow"
              >
                <div className={`w-14 h-14 ${method.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <method.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold mb-2">{method.title}</h3>
                <p className="text-lg font-semibold text-primary mb-1">{method.value}</p>
                <p className="text-sm text-muted-foreground">{method.description}</p>
              </motion.div>
            ))}
          </div>

          {/* 문의 폼 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <h2 className="text-2xl font-bold mb-6 text-center">문의하기</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">이름</label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="홍길동"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">연락처</label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="010-1234-5678"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">이메일</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="example@email.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">제목</label>
                  <Input
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="문의 제목을 입력해주세요"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">문의 내용</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="문의하실 내용을 자세히 적어주세요"
                    rows={5}
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-gradient-primary" size="lg">
                  <Send className="w-4 h-4 mr-2" />
                  문의 보내기
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 운영시간 및 위치 */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-8 shadow-card"
            >
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold">운영시간</h3>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">상담 서비스</span>
                  <span className="font-medium">24시간 연중무휴</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">고객센터 전화</span>
                  <span className="font-medium">09:00 ~ 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">카카오톡 상담</span>
                  <span className="font-medium">09:00 ~ 22:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">이메일 답변</span>
                  <span className="font-medium">24시간 이내</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-8 shadow-card"
            >
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold">오시는 길</h3>
              </div>
              <div className="space-y-3 text-sm">
                <p className="font-medium">서울특별시 강남구 테헤란로 123, 8층</p>
                <p className="text-muted-foreground">
                  지하철 2호선 강남역 3번 출구에서 도보 5분
                </p>
                <div className="mt-4 aspect-video bg-muted rounded-lg flex items-center justify-center text-muted-foreground">
                  <MapPin className="w-8 h-8" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
