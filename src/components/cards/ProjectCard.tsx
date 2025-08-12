/**
 * ProjectCard.tsx
 * 项目卡片，展示封面、名称、简介、标签与仓库链接。
 */

import { Github, Star } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card'
import { Badge } from '../../components/ui/badge'
import { Button } from '../../components/ui/button'

/**
 * 项目卡片属性。
 */
export interface ProjectCardProps {
  /** 项目名称 */
  name: string
  /** 简介 */
  description: string
  /** 标签列表 */
  tags?: string[]
  /** Stars 数量（可选） */
  stars?: number
  /** 仓库链接 */
  repoUrl?: string
  /** 封面图片地址 */
  image?: string
}

/**
 * 项目卡片组件。
 */
export default function ProjectCard({ name, description, tags = [], stars, repoUrl, image }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      {image ? (
        <div className="h-40 w-full overflow-hidden">
          <img src={image} className="object-cover w-full h-full" alt={name} />
        </div>
      ) : null}
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-slate-600 text-sm">{description}</p>
        {tags.length > 0 ? (
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((t) => (
              <Badge key={t} variant="secondary">{t}</Badge>
            ))}
          </div>
        ) : null}
        <div className="mt-4 flex items-center justify-between">
          <div className="text-sm text-slate-500 inline-flex items-center gap-1">
            <Star className="w-4 h-4 text-amber-500" />
            {typeof stars === 'number' ? stars : '—'}
          </div>
          {repoUrl ? (
            <a href={repoUrl} target="_blank" rel="noreferrer">
              <Button size="sm" variant="outline" className="bg-transparent gap-2">
                <Github className="w-4 h-4" />
                仓库
              </Button>
            </a>
          ) : null}
        </div>
      </CardContent>
    </Card>
  )
}
