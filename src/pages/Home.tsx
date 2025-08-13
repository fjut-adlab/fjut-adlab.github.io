/**
 * Home.tsx
 * 实验室首页，包含 Hero 区、快速入口、精选项目与简介。
 */

import { Button } from '../components/ui/button'
import { ArrowRight, BookOpen, Database, Github, Group, Rocket } from 'lucide-react'
import Section from '../components/common/Section'
import ProjectCard from '../components/cards/ProjectCard'

/**
 * 精选项目示例数据（后续可替换为真实数据）
 */
const featuredProjects = [
  {
    name: 'Autonomous Perception Kit',
    description: '多模态感知管线：图像/点云融合检测与跟踪，支持实时推理（test）。',
    tags: ['Perception', 'Fusion', 'Tracking'],
    stars: 256,
    repoUrl: 'https://github.com/',
    image: 'https://pub-cdn.sider.ai/u/U07GH222NKJ/web-coder/689a03fbf530328388964ca0/resource/f27c63cf-5566-4361-b9f0-37a25bf149c7.jpg',
  },
  {
    name: 'HD-Map Localizer',
    description: '基于高精地图与语义特征的鲁棒定位模块，城市道路实测验证。',
    tags: ['Localization', 'HD Map'],
    stars: 143,
    repoUrl: 'https://github.com/',
    image: 'https://pub-cdn.sider.ai/u/U07GH222NKJ/web-coder/689a03fbf530328388964ca0/resource/597118f9-c15c-4062-b43f-4445c34c4c12.jpg',
  },
  {
    name: 'Decision & Planning Suite',
    description: '行为决策与轨迹规划一体化框架，支持多场景约束和仿真回放。',
    tags: ['Decision', 'Planning', 'Simulation'],
    stars: 198,
    repoUrl: 'https://github.com/',
    image: 'https://pub-cdn.sider.ai/u/U07GH222NKJ/web-coder/689a03fbf530328388964ca0/resource/8b76b1db-e331-49ff-b0d5-9e1713af0396.jpg',
  },
]

/**
 * 首页组件。
 */
export default function HomePage() {
  return (
    <div className="space-y-14">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-900 text-white">
        <div className="absolute inset-0">
          <img
            src="https://pub-cdn.sider.ai/u/U07GH222NKJ/web-coder/689a03fbf530328388964ca0/resource/9325476c-2d97-4c5d-ba19-cf6339b6d4e0.jpg"
            className="object-cover w-full h-full opacity-60"
            alt="autonomous driving"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/80 via-slate-900/40 to-transparent" />
        </div>
        <div className="relative px-6 md:px-12 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
              福建理工大学 自动驾驶实验室
            </h1>
            <p className="mt-4 text-slate-200 text-base md:text-lg">
              专注自动驾驶感知、定位、决策与仿真平台的前沿研究与工程实践。开放共享代码与数据，推动学术与产业协同发展。
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#/projects">
                <Button size="lg" className="gap-2">
                  查看项目
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
              <a href="https://github.com/" target="_blank" rel="noreferrer">
                <Button size="lg" variant="outline" className="bg-transparent gap-2 text-white border-white/60 hover:bg-white/10">
                  <Github className="w-5 h-5" />
                  GitHub
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 快速入口 */}
      <Section
        title="快速入口"
        description="一站式浏览实验室对外开放的代码、论文与数据集。"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <a href="#/projects" className="group rounded-xl border border-slate-200 p-5 hover:shadow-md transition bg-white">
            <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <Rocket className="w-5 h-5" />
            </div>
            <div className="mt-3 font-medium text-slate-900">项目</div>
            <div className="text-sm text-slate-600 mt-1">开源代码与演示</div>
          </a>
          <a href="#/publications" className="group rounded-xl border border-slate-200 p-5 hover:shadow-md transition bg-white">
            <div className="w-10 h-10 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center">
              <BookOpen className="w-5 h-5" />
            </div>
            <div className="mt-3 font-medium text-slate-900">论文</div>
            <div className="text-sm text-slate-600 mt-1">学术论文与报告</div>
          </a>
          <a href="#/datasets" className="group rounded-xl border border-slate-200 p-5 hover:shadow-md transition bg-white">
            <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center">
              <Database className="w-5 h-5" />
            </div>
            <div className="mt-3 font-medium text-slate-900">数据集</div>
            <div className="text-sm text-slate-600 mt-1">下载与说明</div>
          </a>
          <a href="#/team" className="group rounded-xl border border-slate-200 p-5 hover:shadow-md transition bg-white">
            <div className="w-10 h-10 rounded-lg bg-pink-100 text-pink-700 flex items-center justify-center">
              <Group className="w-5 h-5" />
            </div>
            <div className="mt-3 font-medium text-slate-900">团队</div>
            <div className="text-sm text-slate-600 mt-1">成员与合作</div>
          </a>
        </div>
      </Section>

      {/* 精选项目 */}
      <Section
        title="精选项目"
        description="覆盖感知、定位、决策与仿真等核心模块，提供可复现的开源实现。"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((p) => (
            <ProjectCard
              key={p.name}
              name={p.name}
              description={p.description}
              tags={p.tags}
              stars={p.stars}
              repoUrl={p.repoUrl}
              image={p.image}
            />
          ))}
        </div>
        <div className="mt-6">
          <a href="#/projects">
            <Button variant="outline" className="bg-transparent">
              浏览全部项目
            </Button>
          </a>
        </div>
      </Section>

      {/* 实验室简介 */}
      <Section
        title="关于我们"
        description="我们致力于将学术研究成果落地为可复用的工程组件，促进自动驾驶技术的规模化与可靠性提升。"
      >
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div className="rounded-2xl overflow-hidden border border-slate-200">
            <img
              src="https://pub-cdn.sider.ai/u/U07GH222NKJ/web-coder/689a03fbf530328388964ca0/resource/128b8a0e-a6bd-4a40-91b4-13d0ef9eb91e.jpg"
              className="object-cover w-full h-full"
              alt="lab research"
            />
          </div>
          <div className="text-slate-700 leading-relaxed">
            <p>
              研究方向涵盖多传感器感知融合、SLAM/高精定位、行为决策与轨迹规划、仿真与评测平台。我们坚持“开源驱动”的科研理念，提供高质量代码与文档，支持学术复现与产业验证。
            </p>
            <p className="mt-3">
              欢迎加入我们，或与我们开展产学研合作，共同推动自动驾驶技术的前沿探索与工程落地。
            </p>
          </div>
        </div>
      </Section>
    </div>
  )
}
