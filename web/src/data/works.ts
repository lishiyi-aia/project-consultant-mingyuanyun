export type WorkLanguage = 'zh' | 'en'

export interface WorkListItem {
  name: string
  meta?: string
  tags?: string[]
  link?: string
  slug?: string
}

export type WorkItem = WorkListItem

export interface WorkGroup {
  heading: string
  items: string[]
}

export interface WorkSection {
  id: string
  no: string
  title: string
  tagline: string
  items?: WorkListItem[]
  groups?: WorkGroup[]
  awards?: string[]
  footer?: string
}

export interface WorksLang {
  title: string
  closeLabel: string
  openLabel: string
  hint: string
  awardsLabel: string
  visitLabel: string
  detailPlaceholder: string
  phImageLabel: string
  phButtonLabel: string
  countLabel: (n: number) => string
  sections: WorkSection[]
}

export type WorksCopy = WorksLang

export const WORKS: Record<WorkLanguage, WorksLang> = {
  "zh": {
    "title": "项目经历",
    "closeLabel": "返回",
    "openLabel": "展开项目",
    "hint": "继续下滑",
    "awardsLabel": "项目成果",
    "visitLabel": "查看完整项目",
    "detailPlaceholder": "项目详情",
    "phImageLabel": "项目预览",
    "phButtonLabel": "打开项目",
    "countLabel": (n: number) => `${n} projects`,
    "sections": [
      {
        "id": "project-2",
        "no": "01",
        "title": "客户需求与试点推进",
        "tagline": "需求确认｜方案支持｜演示试用｜节点跟进",
        "items": [
          {
            "name": "AI教育产品客户合作与试点推进",
            "meta": "AI Education Customer Projects & Pilot Coordination",
            "slug": "ai-education-partnership",
            "link": `${import.meta.env.BASE_URL}projects/ai-education-partnership/case_study.html`,
            "tags": [
              "需求确认：梳理试用安排、合作条件及待确认事项",
              "方案支持：产品介绍、演示账号及培训材料准备",
              "推进协同：合同核对、负责人及完成时间跟进",
              "流程沉淀：AI辅助整理SOP、检查清单与模板"
            ]
          }
        ]
      },
      {
        "id": "project-1",
        "no": "02",
        "title": "需求分析与AI复盘",
        "tagline": "用户调研｜功能说明｜AI分析｜反馈改进",
        "items": [
          {
            "name": "AI资讯产品需求分析与使用支持",
            "meta": "AI Information Product Needs Analysis & User Support",
            "slug": "ai-news-dashboard",
            "link": `${import.meta.env.BASE_URL}projects/ai-news-dashboard/case_study.html`,
            "tags": [
              "需求调研：用户反馈、价格问卷与使用阶段梳理",
              "使用支持：100+条产品介绍、教程、案例与FAQ",
              "AI分析：跟踪用户路径，识别流失并整理改进项",
              "效果跟踪：注册较前周+50%，首次专题创建率相对约+15%"
            ]
          }
        ]
      },
      {
        "id": "project-4",
        "no": "03",
        "title": "执行协同与内容复盘",
        "tagline": "前期调研｜素材交付｜渠道排期｜周度复盘",
        "items": [
          {
            "name": "ZUS Coffee新品内容执行与渠道协同",
            "meta": "ZUS Coffee Content Delivery & Channel Coordination",
            "slug": "zus-everywhere",
            "link": `${import.meta.env.BASE_URL}projects/zus-everywhere/case_study.html`,
            "tags": [
              "业务调研：结合用户偏好、互动反馈和竞品内容",
              "执行配合：50条Instagram内容，拍摄剪辑及英文文案",
              "渠道协同：线上首发、FamilyMart素材与发布排期",
              "周度复盘：15+次内容复盘，账号粉丝增长1.1w+"
            ]
          }
        ]
      }
    ]
  },
  "en": {
    "title": "Project Experience",
    "closeLabel": "Back",
    "openLabel": "Open case",
    "hint": "Scroll to continue",
    "awardsLabel": "Outcomes",
    "visitLabel": "View full case",
    "detailPlaceholder": "项目详情",
    "phImageLabel": "项目预览",
    "phButtonLabel": "打开项目",
    "countLabel": (n: number) => `${n} projects`,
    "sections": [
      {
        "id": "project-2",
        "no": "01",
        "title": "AI Education Customer Projects & Pilot Coordination",
        "tagline": "Needs · Action · Follow-up · Review",
        "items": [
          {
            "name": "AI Education Customer Projects & Pilot Coordination",
            "meta": "Ming Yuan Cloud · Project Consultant Portfolio",
            "slug": "ai-education-partnership",
            "link": `${import.meta.env.BASE_URL}projects/ai-education-partnership/case_study.html`,
            "tags": [
              "Customer needs and business context",
              "Defined preparation and execution tasks",
              "Coordination, follow-up and review"
            ]
          }
        ]
      },
      {
        "id": "project-1",
        "no": "02",
        "title": "AI Information Product Needs Analysis & User Support",
        "tagline": "Needs · Action · Follow-up · Review",
        "items": [
          {
            "name": "AI Information Product Needs Analysis & User Support",
            "meta": "Ming Yuan Cloud · Project Consultant Portfolio",
            "slug": "ai-news-dashboard",
            "link": `${import.meta.env.BASE_URL}projects/ai-news-dashboard/case_study.html`,
            "tags": [
              "Customer needs and business context",
              "Defined preparation and execution tasks",
              "Coordination, follow-up and review"
            ]
          }
        ]
      },
      {
        "id": "project-4",
        "no": "03",
        "title": "ZUS Coffee Content Delivery & Channel Coordination",
        "tagline": "Needs · Action · Follow-up · Review",
        "items": [
          {
            "name": "ZUS Coffee Content Delivery & Channel Coordination",
            "meta": "Ming Yuan Cloud · Project Consultant Portfolio",
            "slug": "zus-everywhere",
            "link": `${import.meta.env.BASE_URL}projects/zus-everywhere/case_study.html`,
            "tags": [
              "Customer needs and business context",
              "Defined preparation and execution tasks",
              "Coordination, follow-up and review"
            ]
          }
        ]
      }
    ]
  }
}
export const WORKS_CONTENT = WORKS
export const SECTION_COVERS: Record<string, string> = {
  'project-1': `${import.meta.env.BASE_URL}works/covers/sohu-dashboard.png`,
  'project-2': `${import.meta.env.BASE_URL}works/covers/education-pilot.png`,
  'project-4': `${import.meta.env.BASE_URL}works/covers/zus-everywhere.jpg`,
}
