"""Check source coverage and handoff consistency, not semantic truth."""
import argparse, csv, json
from collections import Counter
from pathlib import Path
p=argparse.ArgumentParser()
p.add_argument('--input',required=True);p.add_argument('--knowledge',required=True);p.add_argument('--result',required=True)
a=p.parse_args()
rows=list(csv.DictReader(Path(a.input).open(encoding='utf-8-sig')))
k=json.loads(Path(a.knowledge).read_text());r=json.loads(Path(a.result).read_text())
ids=[x['id'] for x in rows];assert len(ids)==len(set(ids)), 'Duplicate input IDs'
byid={x['id']:x for x in rows};assert all(x['text'].strip() for x in rows),'Empty feedback'
assert r['demo']==k['demo'], 'Demo flag mismatch'
assert set(r)=={'demo','issues','tasks','faqs'}, 'Unexpected result fields'
issues=r['issues'];tasks=r['tasks'];faqs=r['faqs']
for group in [issues,tasks,faqs]:assert len({x['id'] for x in group})==len(group),'Duplicate output IDs'
coverage=Counter(s for issue in issues for s in issue['source_ids'])
assert coverage==Counter(ids),'Missing, repeated or unknown feedback references'
for x in issues:
 assert set(x)=={'id','source_ids','customer','category','summary','priority','missing_info'}
 assert x['priority'] in ['P1','P2','P3']
 assert {byid[s]['customer'] for s in x['source_ids']}=={x['customer']},'Cross-customer grouping'
 assert isinstance(x['missing_info'],list)
assert Counter(x['issue_id'] for x in tasks)==Counter(x['id'] for x in issues), 'Task handoff mismatch'
for x in tasks:
 assert set(x)=={'id','issue_id','next_action','suggested_role','owner','due_date','status'}
 assert x['owner'] is None and x['due_date'] is None, 'Unprovided assignment or deadline'
 assert x['status']=='待人工确认' and x['next_action'].strip()
kids={x['id'] for x in k['items']}
for x in faqs:
 assert set(x)=={'id','source_ids','knowledge_ids','question','answer','status'}
 assert x['source_ids'] and set(x['source_ids'])<=set(ids)
 assert x['knowledge_ids'] and set(x['knowledge_ids'])<=kids
 assert x['status']=='待审核'
print(json.dumps({'demo':r['demo'],'input_records':len(rows),'issues':len(issues),'tasks':len(tasks),'faq_drafts':len(faqs),'coverage':'PASS','handoffs':'PASS','references':'PASS','manual_review':'REQUIRED'},ensure_ascii=False,indent=2))
