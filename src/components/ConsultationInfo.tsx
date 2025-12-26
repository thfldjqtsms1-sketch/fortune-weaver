import { motion } from 'framer-motion';
import { Calendar, Phone, Coins, Smartphone } from 'lucide-react';

const consultTypes = [
  {
    icon: Calendar,
    label: '예약상담',
    sublabel: '상담',
    description: '선생님의 예약신청 버튼을 누르고 \'상담예약\' 후, 예약시간에 전화',
    color: 'bg-primary',
  },
  {
    icon: Phone,
    label: '바로상담',
    sublabel: '상담',
    description: '급하신 상담은 전화 걸어, 0번 + 상담사 번호 3자리',
    color: 'bg-coral',
  },
  {
    icon: Coins,
    label: '선불제',
    sublabel: '코인충전',
    description: '코인상담 02.397.1004',
    extra: '30초 당 : 700 ~ 1,700코인',
    color: 'bg-gold',
  },
  {
    icon: Smartphone,
    label: '후불제',
    sublabel: 'VAT포함',
    description: '060상담 선생님 번호확인',
    extra: '30초 당 : 1,100 ~ 1,900원',
    color: 'bg-magenta',
  },
];

const ConsultationInfo = () => {
  return (
    <section className="py-4 bg-gradient-to-r from-muted/50 via-background to-muted/50 border-y border-border/30">
      <div className="container">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
          {consultTypes.map((type, index) => (
            <motion.div
              key={type.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3 group cursor-pointer"
            >
              <div className={`${type.color} p-2 rounded-lg text-white group-hover:scale-110 transition-transform`}>
                <type.icon className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <span className="font-semibold text-sm">{type.label}</span>
                  <span className="text-xs text-muted-foreground">{type.sublabel}</span>
                </div>
                <p className="text-xs text-muted-foreground max-w-[180px] hidden lg:block">
                  {type.description}
                </p>
                {type.extra && (
                  <p className="text-xs font-medium text-primary hidden lg:block">{type.extra}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConsultationInfo;
