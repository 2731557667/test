import Image from "next/image";
import Topnav from '@/components/header/topnav';
import Nav from '@/components/header/nav'
import Landing from '@/components/layout/landing'
import Quick from '@/components/layout/announcement'
import WhyPSW from '@/components/layout/whyucek'

import AdministrationPanel from '@/components/layout/admins'
import MorePSW from '@/components/layout/ucekmore'
import Footer from '@/components/layout/footer'
import Link from "next/link";
import HeroSlider from "@/components/layout/landing";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* 头部导航区域 - 添加玻璃态效果 */}
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 shadow-sm">
        <Topnav />
        <Nav />
      </header>
      
      {/* 主要内容区域 */}
      <main className="flex-grow">
        {/* 轮播图部分 - 全宽显示 */}
        <section className="w-full relative">
          <HeroSlider />
          {/* 添加波浪分隔效果 */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" className="w-full h-20 fill-white">
              <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
            </svg>
          </div>
        </section>
        
        {/* 公告区域 - 带容器和动画 */}
        <section className="py-12 md:py-20 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="animate-slideUp">
              <Quick />
            </div>
          </div>
        </section>
        
        {/* 为什么选择我们 - 全宽显示 */}
        <section className="w-full">
          <WhyPSW />
        </section>
        
        {/* 管理团队介绍 - 带容器和装饰 */}
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
          <div className="absolute top-20 -right-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-20 -left-20 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="animate-slideUp">
              <AdministrationPanel />
            </div>
          </div>
        </section>
        
        {/* 更多信息区域 - 带容器和背景 */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-gray-100 relative">
          <div className="container mx-auto px-4">
            <div className="animate-fadeIn">
              <MorePSW />
            </div>
          </div>
        </section>
      </main>
      
      {/* 页脚区域 - 现代化设计 */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <Footer />
      </footer>
    </div>
  );
}
