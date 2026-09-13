from pathlib import Path
p=Path('preview/built-by-aloden.html')
s=p.read_text()
replacements=[
('<h2>Voice requests connected to completed tasks.</h2>', '<h2>From conversation to completed action.</h2>'),
("if(p) p.textContent='Aloden engineers system-connected voice experiences that understand intent, use business context, take permitted actions, confirm outcomes, and hand off to people when judgment is required.';", "if(p) p.textContent='Aloden’s voice AI solution is deployed and in use. It connects spoken requests to business systems, checks permissions, confirms completed actions, and passes the conversation to a person when needed. The appointment workflow below shows those steps.';"),
('<b>Live voice session</b><span>Verified context · active</span>', '<b>Voice workflow view</b><span>Verified context</span>'),
('Tuesday 10:00 AM</small></div><span>LIVE</span>', 'Tuesday 10:00 AM</small></div><span>SESSION</span>'),
('The products differ. The discipline behind them does not: product strategy, experience, engineering, AI, integration, and production move together.', 'In each product, the interface, application logic, AI, and integrations work together around a task the user needs to complete.')
]
for old,new in replacements:
 assert old in s, old
 s=s.replace(old,new)
p.write_text(s)
print('Updated the existing Our Work renderer; approved Voice heading and styles retained.')
