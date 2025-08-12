/**
 * Footer.tsx
 * 页脚信息与版权。
 */

import { Github, Mail } from 'lucide-react'

/**
 * 页脚组件。
 */
export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="font-semibold text-slate-900">福建理工大学 · 自动驾驶实验室</div>
            <div className="text-sm text-slate-600 mt-2">
              专注自动驾驶感知、定位、决策与仿真平台研发
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-slate-900 transition inline-flex items-center gap-2">
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a href="mailto:lab@example.com" className="text-slate-600 hover:text-slate-900 transition inline-flex items-center gap-2">
              <Mail className="w-4 h-4" />
              联系我们
            </a>
          </div>
        </div>
        <div className="text-xs text-slate-500 mt-6">
          © {new Date().getFullYear()} 福建理工大学自动驾驶实验室. 保留所有权利.
        </div>
      </div>
    </footer>
  )
}
