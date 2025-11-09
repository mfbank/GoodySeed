import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Facebook, MessageCircle, MapPin } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: "เบอร์โทรศัพท์",
      detail: "062 782 6194",
      subdetail: "062-782-6194",
      link: "tel:062 782 6194",
      color: "bg-green-500"
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "อีเมล",
      detail: "goodyseed888@gmail.com",
      subdetail: "goodyseed888@gmail.com",
      link: "lto:goodyseed888@gmail.comai",
      color: "bg-red-500"
    },
    {
      icon: <Facebook className="w-8 h-8" />,
      title: "Facebook",
      detail: "facebook.com/GoodySeed",
      subdetail: "ติดต่อผ่าน Messenger",
      link: "https://facebook.com/GoodySeed",
      color: "bg-blue-600"
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden'
      id='Contact'
    >
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>
        ช่องทาง<span className='underline underline-offset-4 decoration-1 font-light'>ติดต่อ</span>
      </h1>
      <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>
        สามารถติดต่อซื้อ-สอบถามผ่าน ช่องทางการติดต่อด้านล่างนี้
      </p>

      <div className='max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12'>
        {contactMethods.map((method, index) => (
          <motion.a
            key={index}
            href={method.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, translateY: -5 }}
            className='bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-xl transition-all cursor-pointer group'
          >
            <div className={`${method.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform`}>
              {method.icon}
            </div>
            <h3 className='text-xl font-semibold mb-2 text-gray-800'>
              {method.title}
            </h3>
            <p className='text-gray-600 font-medium mb-1'>
              {method.detail}
            </p>
            <p className='text-gray-500 text-sm'>
              {method.subdetail}
            </p>
          </motion.a>
        ))}
      </div>

      <div className='mt-16 bg-gray-50 rounded-lg p-8 max-w-3xl mx-auto'>
        <h3 className='text-xl font-semibold mb-4 text-gray-800'>
          ช่วงเวลาทำการ
        </h3>
        <div className='text-gray-600 space-y-2'>
          <p>จันทร์ - อาทิตย์: 6:00 - 21:00 น.</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;