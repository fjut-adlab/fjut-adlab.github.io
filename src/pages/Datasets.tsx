/**
 * Datasets.tsx
 * 数据集展示页，列出可下载的数据集。
 */

import Section from '../components/common/Section'
import DatasetCard from '../components/cards/DatasetCard'

/**
 * 数据集示例（可替换为真实数据）
 */
const datasets = [
  {
    name: 'Urban-Scenes-1K',
    tasks: ['Detection', 'Segmentation'],
    size: '1,000 场景 · 120k 图像',
    downloadUrl: 'https://example.com/download',
    docUrl: 'https://example.com/doc',
  },
  {
    name: 'LiDAR-Drive',
    tasks: ['3D Detection'],
    size: '20k 帧点云 · 标注盒',
    downloadUrl: 'https://example.com/download',
    docUrl: 'https://example.com/doc',
  },
  {
    name: 'Traj-Interact',
    tasks: ['Trajectory Prediction'],
    size: '8k 交互片段',
    downloadUrl: 'https://example.com/download',
    docUrl: 'https://example.com/doc',
  },
]

/**
 * 数据集页组件。
 */
export default function DatasetsPage() {
  return (
    <div className="space-y-10">
      <Section
        title="数据集 Datasets"
        description="公开数据集与说明文档，支持研究复现与评测。"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {datasets.map((ds) => (
            <DatasetCard key={ds.name} {...ds} />
          ))}
        </div>
      </Section>
    </div>
  )
}
