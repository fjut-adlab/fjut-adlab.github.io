/**
 * AppLayout.tsx
 * 全局布局组件，包含顶部导航、内容区与页脚。
 */

import { Outlet } from 'react-router'
import TopNav from './TopNav'
import Footer from './Footer'

/**
 * 应用布局，包裹所有页面。
 */
export default function AppLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      <TopNav />
      <main className="container mx-auto px-4 md:px-6 lg:px-8 pt-20 pb-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
