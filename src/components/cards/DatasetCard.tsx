/**
 * DatasetCard.tsx
 * 数据集卡片，展示名称、任务、规模、下载/说明链接。
 */

import { Download, Link as LinkIcon } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card'
import { Badge } from '../../components/ui/badge'
import { Button } from '../../components/ui/button'

/**
 * 数据集卡片属性。
 */
export interface DatasetCardProps {
  /** 数据集名称 */
  name: string
  /** 任务类型 */
  tasks: string[]
  /** 规模或统计，如 100k images */
  size?: string
  /** 下载链接 */
  downloadUrl?: string
  /** 说明文档链接 */
  docUrl?: string
}

/**
 * 数据集卡片组件。
 */
export default function DatasetCard({ name, tasks, size, downloadUrl, docUrl }: DatasetCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {tasks.map((t) => (
            <Badge key={t} variant="secondary">{t}</Badge>
          ))}
        </div>
        {size ? <div className="text-sm text-slate-600 mt-2">规模：{size}</div> : null}
        <div className="mt-4 flex items-center gap-2">
          {downloadUrl ? (
            <a href={downloadUrl} target="_blank" rel="noreferrer">
              <Button size="sm" variant="outline" className="bg-transparent gap-2">
                <Download className="w-4 h-4" />
                下载
              </Button>
            </a>
          ) : null}
          {docUrl ? (
            <a href={docUrl} target="_blank" rel="noreferrer">
              <Button size="sm" variant="outline" className="bg-transparent gap-2">
                <LinkIcon className="w-4 h-4" />
                说明
              </Button>
            </a>
          ) : null}
        </div>
      </CardContent>
    </Card>
  )
}
