/**
 * Publications.tsx
 * 论文展示页，列出代表性论文。
 */

import Section from '../components/common/Section'
import PublicationCard from '../components/cards/PublicationCard'

/**
 * 论文数据示例（可替换为真实数据）
 */
const publications = [
  {
    title: 'Unified Multi-Modal Perception for Autonomous Driving',
    authors: 'A. Zhang, B. Li, C. Wang, 等',
    venue: 'CVPR',
    year: 2024,
    link: 'https://arxiv.org/',
    tags: ['Perception', 'Multimodal'],
  },
  {
    title: 'Semantic HD-Map Aided Localization in Urban Scenes',
    authors: 'D. Chen, E. Wu, F. Lin',
    venue: 'RAL',
    year: 2023,
    link: 'https://arxiv.org/',
    tags: ['Localization', 'HD Map'],
  },
  {
    title: 'Interactive Motion Forecasting with Social Attention',
    authors: 'G. He, H. Sun',
    venue: 'NeurIPS',
    year: 2022,
    link: 'https://arxiv.org/',
    tags: ['Prediction', 'Transformer'],
  },
]

/**
 * 论文页组件。
 */
export default function PublicationsPage() {
  return (
    <div className="space-y-10">
      <Section
        title="论文 Publications"
        description="我们在感知、定位、预测与规划方向的部分研究成果。"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {publications.map((pub) => (
            <PublicationCard key={pub.title} {...pub} />
          ))}
        </div>
      </Section>
    </div>
  )
}
