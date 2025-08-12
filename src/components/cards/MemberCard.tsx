/**
 * MemberCard.tsx
 * 团队成员卡片，展示头像、姓名、角色与链接。
 */

import { Github, Link as LinkIcon } from 'lucide-react'
import { Card, CardContent } from '../../components/ui/card'
import { Badge } from '../../components/ui/badge'

/**
 * 成员卡片属性。
 */
export interface MemberCardProps {
  /** 姓名 */
  name: string
  /** 职务或方向 */
  role: string
  /** 头像图片 */
  avatar?: string
  /** GitHub 链接 */
  github?: string
  /** 个人主页链接 */
  homepage?: string
  /** 标签，如研究方向关键词 */
  tags?: string[]
}

/**
 * 成员卡片组件。
 */
export default function MemberCard({ name, role, avatar, github, homepage, tags = [] }: MemberCardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="pt-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full overflow-hidden bg-slate-100 flex-shrink-0">
            {avatar ? (
              <img src={avatar} alt={name} className="object-cover w-full h-full" />
            ) : (
              <div className="w-full h-full" />
            )}
          </div>
          <div className="flex-1">
            <div className="font-medium">{name}</div>
            <div className="text-sm text-slate-600">{role}</div>
            {tags.length > 0 ? (
              <div className="mt-2 flex flex-wrap gap-1">
                {tags.map((t) => (
                  <Badge key={t} variant="outline" className="bg-transparent">{t}</Badge>
                ))}
              </div>
            ) : null}
            <div className="mt-2 flex items-center gap-3">
              {github ? (
                <a href={github} target="_blank" rel="noreferrer" className="text-slate-600 hover:text-slate-900 transition inline-flex items-center gap-1 text-sm">
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              ) : null}
              {homepage ? (
                <a href={homepage} target="_blank" rel="noreferrer" className="text-slate-600 hover:text-slate-900 transition inline-flex items-center gap-1 text-sm">
                  <LinkIcon className="w-4 h-4" />
                  主页
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
