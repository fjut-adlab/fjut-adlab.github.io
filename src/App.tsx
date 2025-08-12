/**
 * App.tsx
 * 应用路由入口。使用 HashRouter 适配 GitHub Pages，配置基础布局与各页面路由。
 */

import { HashRouter, Route, Routes } from 'react-router'
import AppLayout from './components/layout/AppLayout'
import HomePage from './pages/Home'
import ProjectsPage from './pages/Projects'
import PublicationsPage from './pages/Publications'
import DatasetsPage from './pages/Datasets'
import TeamPage from './pages/Team'

/**
 * 应用根组件，定义路由结构。
 */
export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="publications" element={<PublicationsPage />} />
          <Route path="datasets" element={<DatasetsPage />} />
          <Route path="team" element={<TeamPage />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
