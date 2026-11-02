# 输入输出格式

## 输入

`feedback.csv`：`id,customer,scenario,text`。ID唯一；客户使用代号。
`knowledge.json`：对象，含 `demo` 布尔值和 `items` 数组。每项含 `id,title,content`；只使用其确认的信息。

## result.json

```json
{
  "demo": true,
  "issues": [{"id":"I01","source_ids":["R001"],"customer":"试点A","category":"使用障碍","summary":"现象与影响","priority":"P1","missing_info":["待核实的信息"]}],
  "tasks": [{"id":"T01","issue_id":"I01","next_action":"下一步动作","suggested_role":"建议协作职能","owner":null,"due_date":null,"status":"待人工确认"}],
  "faqs": [{"id":"Q01","source_ids":["R003"],"knowledge_ids":["K01"],"question":"通用问题","answer":"限于知识材料的草稿回答","status":"待审核"}]
}
```

- `demo` 与知识材料一致。ID不重复；每条输入恰好归属一个问题；不跨客户合并。
- 每个问题恰好有一条下一步任务。真实负责人和期限需用户明示，本次演示全部留空。
- 每个FAQ有非空反馈来源及知识依据。不能从另一个模型草稿中推导事实。

`review.md`：按问题列出来源、现象、建议优先级、缺失信息和下一步；独立列出FAQ草稿及人工复核事项。
