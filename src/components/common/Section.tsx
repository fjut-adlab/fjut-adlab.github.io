/**
 * Section.tsx
 * 通用分节容器，统一标题与描述样式。
 */

import { ReactNode } from 'react'

/**
 * Section 组件属性。
 */
export interface SectionProps {
  /** 标题 */
  title: string
  /** 可选描述 */
  description?: string
  /** 子内容 */
  children: ReactNode
  /** 额外类名 */
  className?: string
}

/**
 * 分节容器组件。
 */
export default function Section({ title, description, children, className }: SectionProps) {
  return (
    <section className={className}>
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">{title}</h2>
        {description ? <p className="text-slate-600 mt-2">{description}</p> : null}
      </div>
      {children}
    </section>
  )
}
