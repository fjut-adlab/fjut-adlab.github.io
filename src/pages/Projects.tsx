/**
 * Projects.tsx
 * 项目列表页，展示更多项目卡片。
 */

import Section from '../components/common/Section'
import ProjectCard from '../components/cards/ProjectCard'

/**
 * 项目数据示例（可替换为真实数据）
 */
const projects = [
  {
    name: 'Sensor Fusion 3D Detector',
    description: '基于 BEV 表征的相机-激光雷达融合三维检测方法。',
    tags: ['3D Detection', 'Fusion', 'BEV'],
    stars: 312,
    repoUrl: 'https://github.com/',
    image: 'https://pub-cdn.sider.ai/u/U07GH222NKJ/web-coder/689a03fbf530328388964ca0/resource/a71158aa-5882-4ecf-b1e2-d41c65a16973.jpg',
  },
  {
    name: 'Robust Visual SLAM',
    description: '针对低纹理与动态场景的鲁棒视觉 SLAM 系统。',
    tags: ['SLAM', 'Robustness'],
    stars: 221,
    repoUrl: 'https://github.com/',
    image: 'https://pub-cdn.sider.ai/u/U07GH222NKJ/web-coder/689a03fbf530328388964ca0/resource/27692bb8-b238-4d7f-bdee-b48e23cbf0c0.jpg',
  },
  {
    name: 'Prediction Module',
    description: '基于 Transformer 的交互式轨迹预测，适配多智能体。',
    tags: ['Trajectory', 'Transformer'],
    stars: 167,
    repoUrl: 'https://github.com/',
    image: 'https://pub-cdn.sider.ai/u/U07GH222NKJ/web-coder/689a03fbf530328388964ca0/resource/6fc58cd7-4d59-44f4-9343-bb3219339d72.jpg',
  },
  {
    name: 'Planning Benchmark',
    description: '统一的规划评测基准与可视化工具链。',
    tags: ['Planning', 'Benchmark'],
    stars: 97,
    repoUrl: 'https://github.com/',
    image: 'https://pub-cdn.sider.ai/u/U07GH222NKJ/web-coder/689a03fbf530328388964ca0/resource/453d8e52-19c6-4d90-ae5c-d615f50d8822.jpg',
  },
]

/**
 * 项目页组件。
 */
export default function ProjectsPage() {
  return (
    <div className="space-y-10">
      <Section
        title="项目 Projects"
        description="全部对外开源或展示的项目列表。"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.name} {...p} />
          ))}
        </div>
      </Section>
    </div>
  )
}
