/**
 * Team.tsx
 * 团队展示页，包含导师与成员。
 */

import Section from '../components/common/Section'
import MemberCard from '../components/cards/MemberCard'

/**
 * 成员数据示例（可替换为真实数据）
 */
const members = [
  {
    name: '廖律超 教授 (Prof. Lyuchao Liao)',
    role: '导师 · 自动驾驶系统',
    avatar: 'https://pub-cdn.sider.ai/u/U07GH222NKJ/web-coder/689a03fbf530328388964ca0/resource/64dd891a-054e-419f-bd5d-9298ce579035.jpg',
    homepage: 'https://faculty.fjut.edu.cn/liaolyuchao/zh_CN/index.htm',
  },
  {
    name: '张三',
    role: '博士生 · 感知融合',
    avatar: 'https://pub-cdn.sider.ai/u/U07GH222NKJ/web-coder/689a03fbf530328388964ca0/resource/bade6d48-9c26-4210-a39c-40ec81da59f9.jpg',
    github: 'https://github.com/',
  },
  {
    name: '李四',
    role: '硕士生 · 视觉SLAM',
    avatar: 'https://pub-cdn.sider.ai/u/U07GH222NKJ/web-coder/689a03fbf530328388964ca0/resource/5502dd68-ceff-448f-aeca-126bce1bafa9.jpg',
    github: 'https://github.com/',
  },
  {
    name: '王五',
    role: '硕士生 · 轨迹预测',
    avatar: 'https://pub-cdn.sider.ai/u/U07GH222NKJ/web-coder/689a03fbf530328388964ca0/resource/9deec25a-01f9-4497-8e44-53e08e4462db.jpg',
    github: 'https://github.com/',
  },
]

/**
 * 团队页组件。
 */
export default function TeamPage() {
  return (
    <div className="space-y-10">
      <Section
        title="团队 Team"
        description="开放协作、严谨务实，欢迎优秀同学加入我们。"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((m) => (
            <MemberCard key={m.name} {...m} />
          ))}
        </div>
      </Section>
    </div>
  )
}
