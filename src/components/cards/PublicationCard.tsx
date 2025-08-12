/**
 * PublicationCard.tsx
 * 论文卡片，展示标题、作者、会议/期刊、年份和链接。
 */

import { ExternalLink } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card'
import { Badge } from '../../components/ui/badge'
import { Button } from '../../components/ui/button'

/**
 * 论文卡片属性。
 */
export interface PublicationCardProps {
  /** 论文标题 */
  title: string
  /** 作者 */
  authors: string
  /** 会议/期刊 */
  venue: string
  /** 年份 */
  year: number
  /** PDF 或 arXiv 链接 */
  link?: string
  /** 分类或关键词 */
  tags?: string[]
}

/**
 * 论文卡片组件。
 */
export default function PublicationCard({ title, authors, venue, year, link, tags = [] }: PublicationCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-slate-600">{authors}</p>
        <div className="text-sm text-slate-700 mt-1">{venue} · {year}</div>
        {tags.length > 0 ? (
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((t) => (
              <Badge key={t} variant="outline" className="bg-transparent">{t}</Badge>
            ))}
          </div>
        ) : null}
        {link ? (
          <div className="mt-4">
            <a href={link} target="_blank" rel="noreferrer">
              <Button size="sm" variant="outline" className="bg-transparent gap-2">
                <ExternalLink className="w-4 h-4" />
                查看
              </Button>
            </a>
          </div>
        ) : null}
      </CardContent>
    </Card>
  )
}
