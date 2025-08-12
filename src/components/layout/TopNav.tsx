/**
 * TopNav.tsx
 * 顶部导航栏，带当前路由高亮与外部 GitHub 按钮。
 */

import { useLocation } from 'react-router'
import { Github } from 'lucide-react'
import { Button } from '../ui/button'

/**
 * 判断路由是否激活
 */
function isActivePath(current: string, target: string): boolean {
  // HashRouter 下的 location.pathname 为哈希后的路径，如 /projects
  return current === target
}

/**
 * 顶部导航组件。
 */
export default function TopNav() {
  const location = useLocation()
  const path = location.pathname

  const nav = [
    { label: '首页', href: '#/', match: '/' },
    { label: '项目', href: '#/projects', match: '/projects' },
    { label: '论文', href: '#/publications', match: '/publications' },
    { label: '数据集', href: '#/datasets', match: '/datasets' },
    { label: '团队', href: '#/team', match: '/team' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#/" className="font-semibold text-slate-900 hover:opacity-80 transition">
            福建理工大学 · 自动驾驶实验室
          </a>
          <nav className="hidden md:flex items-center gap-2">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={
                  'px-3 py-2 rounded-md text-sm transition ' +
                  (isActivePath(path, item.match)
                    ? 'bg-slate-900 text-white'
                    : 'text-slate-700 hover:bg-slate-100')
                }
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              <Button variant="outline" className="bg-transparent gap-2">
                <Github className="w-4 h-4" />
                GitHub
              </Button>
            </a>
          </div>
        </div>
      </div>
      {/* 移动端导航条 */}
      <div className="md:hidden bg-white/90 border-b border-slate-200">
        <div className="container mx-auto px-4 pb-2 flex gap-2 overflow-x-auto no-scrollbar">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={
                'whitespace-nowrap px-3 py-2 rounded-md text-sm my-2 transition ' +
                (isActivePath(path, item.match)
                  ? 'bg-slate-900 text-white'
                  : 'text-slate-700 hover:bg-slate-100')
              }
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}
