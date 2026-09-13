from pathlib import Path
import re, json, html
root=Path('.')
def edit(file,pairs):
 p=root/file;s=p.read_text()
 for old,new in pairs:
  assert old in s, f'{file}: missing expected copy: {old[:80]}'
  s=s.replace(old,new)
 p.write_text(s)

edit('preview/homepage-final.js',[
('Four capabilities. One product-engineering discipline from definition through production.','Choose the expertise your project needs, from a new application to a connected voice or AI workflow.'),
('Engineering capabilities for intelligent products and modern platforms.','Four capabilities to build and improve your software.'),
('Aloden combines product strategy, AI and software engineering to launch new digital products and modernize the software and platforms businesses depend on.','We design and build software for the work your business needs to do. That can mean launching a new product, improving an existing platform, or connecting systems that currently work apart.'),
('Turn an idea, business problem or market opportunity into production-ready software.','Create applications that help customers and teams find information, make decisions, and complete tasks.'),
('Improve architecture, UX, integrations and workflows without rebuilding what already works.','Remove the technical and usability problems that slow your teams down, while preserving what works.'),
('Apply AI and automation where they improve useful, measurable outcomes.','Use AI where it helps, from reviewing documents to coordinating work across business systems.'),
('Voice AI Engineering','Voice &amp; Conversational AI'),
('Intelligent Workflow &amp; Agentic Systems','Agentic Workflow Engineering'),
('Product Modernization','AI-Native Modernization'),
('Build AI into the product, not around it.','Build the complete AI-enabled product.'),
('Define, design and engineer AI-enabled products for production from day one.','Bring a new idea or working prototype through design, software development, AI integration, and launch.'),
('Build voice experiences that understand intent, connect to business systems and act within clear controls.','Let people schedule, ask for updates, and complete requests by voice, with confirmation and human help when needed.'),
('Connect intelligence to the work that needs to happen.</strong>','Automate work across your business systems.</strong>'),
('Connect models, tools, systems and approvals into governed workflows that move work forward.','Build agents that gather information, carry out permitted steps, and pause for approval on sensitive actions.'),
('Modernize architecture, UX, APIs and workflows—adding intelligence where it improves the product.','Improve how your software runs, connects, and serves users. Add AI where it solves a specific problem.'),
('Two ways to move the product forward.','Start with what you have today.'),
('Build something new or improve software already in use—with the same product and engineering discipline from strategy through production.','You do not need a finished plan. Bring the idea you want to test or the software problem you need to solve.'),
('For new products, AI capabilities, workflow platforms and customer experiences that need to reach production.','Start with a product idea or prototype. We help define the first useful release, its technical requirements, and a path to launch.'),
('For existing applications that need stronger architecture, better UX, cleaner integrations or practical AI readiness.','Start with software already in use. We assess the constraints, agree on priorities, and plan changes around ongoing operations.'),
('Aloden works with teams that need product thinking, AI expertise and engineering depth to build, modernize and scale important software.','We work with founders launching a product and established teams improving software their business already relies on.'),
('Launch a credible, production-ready product.','Define and build the first release.'),
('Accelerate complex roadmaps with AI and engineering depth.','Work directly with engineers on your roadmap.'),
('Modernize products and operations with scalable technology.','Improve systems without building a large internal team.'),
('Evolve complex platforms with disciplined architecture and delivery.','Plan changes around existing systems and controls.'),
('Aloden brings product judgment, engineering depth and production discipline to turn ambitious ideas into software that works in the real world.','Your project has one accountable delivery lead, direct access to the engineers, and regular reviews of working software.'),
('Build for real users, connected systems, operating conditions, reliability and measurable outcomes.','Keep delivery decisions, progress, and release risks visible from the first build through launch.')])

edit('preview/homepage-section1-review.js',[
('Aloden brings together AI, product strategy, experience design, engineering, and modernization to turn ideas and existing software into production-ready digital products.','We help companies launch new software and improve the systems they already rely on, combining product strategy, design, engineering, and practical AI.'),
('<span class="tabGlyph">M</span><span><b>Medlivo</b><small>Healthcare</small></span>','<span class="tabGlyph">H</span><span><b>Healthcare</b><small>Operations</small></span>'),
('<span class="tabGlyph">S</span><span><b>StartupFair</b><small>Innovation</small></span>','<span class="tabGlyph">I</span><span><b>Innovation</b><small>Platform</small></span>'),
('<small>ALODEN PRODUCT SYSTEM</small>','<small>ALODEN PRODUCT ENGINEERING</small>'),
('<span data-bind="productName">Medlivo</span>','<span data-bind="productName">Healthcare Operations</span>'),
('PRODUCTION READY</span>','ENGINEERED FOR PRODUCTION</span>'),
('Modernization at Scale','AI-Native Modernization')])
edit('preview/homepage-section1.js',[
("productName: 'Medlivo'","productName: 'Healthcare Operations'"),
("productName: 'StartupFair'","productName: 'Innovation Platform'"),
("productName: 'Aloden Voice AI'","productName: 'Conversational AI'"),
('Context, readiness, and workflow state are connected before action.','Check the requirement, clinician availability, and credential readiness before assignment.'),
('Challenge, builder evidence, evaluation, and selection stay connected.','Keep the challenge, submitted work, judging, and next steps together.')])
edit('preview/index.html',[
('Aloden brings together AI, product strategy, experience design, engineering, and modernization to turn ideas and existing software into production-ready digital products.','We help companies launch new software and improve the systems they already rely on, combining product strategy, design, engineering, and practical AI.'),
('Voice AI Engineering','Voice &amp; Conversational AI'),('Intelligent Workflow &amp; Agentic Systems','Agentic Workflow Engineering'),('Product Modernization','AI-Native Modernization'),
('Intelligent products touch data, workflows, decisions, and people. Aloden treats confidentiality, delivery control, evaluation, and responsible AI as part of product engineering—not as an afterthought.','We plan data access, testing, approvals, and failure handling before launch. You can review the decisions and see how the software behaves as it is built.'),
('Tell us what you’re building, modernizing, or trying to solve. Aloden can help shape the right path from idea to production.','Tell us what you want to build or improve, what exists today, and what is getting in the way.')])

edit('preview/capabilities.html',[
('Aloden helps companies launch intelligent products, modernize existing software for the AI era, and automate high-value workflows with agents and voice—engineered for production from day one.','We build new applications, improve existing platforms, and connect business workflows with AI and voice. Choose the service that fits what you need to change.'),
('We combine product strategy, experience design, engineering, AI, integration, and production discipline around the outcome—not around a technology checklist.','Each service addresses a different starting point. Product strategy, design, engineering, and testing stay connected throughout the work.'),
('For organizations launching a new product, platform, internal application, or AI-enabled capability. Aloden connects product definition, user experience, architecture, engineering, AI, evaluation, and production delivery.','For a new application, platform, or AI feature. We define the user experience, build the software and integrations, test its behavior, and prepare it for launch.'),
('For products constrained by aging architecture, poor experience, technical debt, disconnected systems, or limited AI readiness. Modernization is staged around business value rather than a forced rewrite.','For software that is difficult to change, use, or connect. We assess what should stay and improve the parts that limit your next release or operational needs.'),
('For processes that span systems, decisions, repetitive work, approvals, and handoffs. We engineer agents and orchestration around real workflows—with permissions, controls, observability, and people in the loop.','For work that moves across several systems and depends on changing information. We build agents that carry out permitted steps and ask for approval where needed.'),
('For customer service, scheduling, support, intake, operations, and other workflows where conversation is the most natural interface. Voice is connected to systems, permissions, outcomes, and human escalation.','For scheduling, support, intake, and other requests people can explain by speaking. We connect the conversation to business systems and confirm results before reporting success.'),
('Production is where the real engineering starts.','Plan for production from the start.'),
('AI demos are easy to make impressive. Production systems have to survive real users, real data, real workflows, real failures, and real accountability.','Before launch, the software needs to handle actual data, permissions, slow responses, and failed requests. These requirements shape the design and testing from the beginning.'),
('ALODEN PRODUCT ENGINEERING SYSTEM','HOW ALODEN BUILDS'),
('One discipline from opportunity to operation.','One team from discovery through delivery.'),
('AI is engineered into the product and workflow—not bolted on afterward. Product, experience, engineering, intelligence, integration, and production move together.','A delivery lead coordinates the project. You can speak directly with the engineers and review progress through regular updates and demonstrations of working software.'),
('<a class="btn" href="mailto:hello@aloden.com">Start a Project →</a>','<a class="btn" href="start-project.html">Start a Project →</a>')])

edit('preview/company.html',[
('Aloden is an AI-native product engineering company helping organizations turn ambitious ideas, existing software, and complex workflows into products that work in the real world.','Aloden helps companies build intelligent digital products and modernize the software they depend on. We bring product strategy, design, engineering, and AI together around the problems our customers need to solve.'),
('FOUNDED 2024 · AI-NATIVE FROM DAY ONE','FOUNDED IN 2024'),
('FOUNDED · AI-NATIVE FROM DAY ONE','ALODEN LLC'),
('AI changed what software can do. It did not change what good products require.','New possibilities. The same responsibility to build well.'),
('Models are becoming more capable at extraordinary speed. But customers still need software that understands context, works with existing systems, handles failures, protects information, earns trust, and creates measurable value.','AI gives businesses new ways to use information and automate work. Our job is to turn those possibilities into software people can use, with the integrations, safeguards, and support for human decisions that the task requires.'),
('Aloden was founded in 2024 as software moved from simply adding AI features toward products increasingly shaped by intelligent capabilities. <strong>We did not have to retrofit a legacy delivery model for the AI era.</strong> We are building the company around faster learning, cross-functional product teams, model evaluation, human control, system integration, and production accountability from the start.','Aloden was founded in 2024. <strong>Today, we help companies build intelligent digital products and modernize the software they depend on.</strong> We bring product strategy, design, engineering, and AI together around the problems our customers need to solve.'),
('<h2>Built for this moment.</h2>','<h2>Our focus today.</h2>'),
('We keep the business problem, product experience, engineering decisions, AI behavior, and production reality connected rather than handing the product from discipline to discipline.','One delivery lead coordinates your project and serves as your primary contact. Product, design, and engineering work together, with direct technical discussions when decisions need your input.'),
('The unit of work stays the product—not the department, technology, or project phase.','You know who is accountable and can speak with the people doing the work.'),
('Modern AI delivery should move quickly without becoming opaque. We keep decisions, assumptions, working product evidence, and production readiness visible throughout the engagement.','You should be able to see what has been built, understand the decisions ahead, and raise questions before they become expensive changes.'),
('<b>Direct communication</b><p>Important product and engineering decisions stay close to the people responsible for the outcome.</p>','<b>One accountable lead</b><p>Your delivery lead coordinates the work, keeps priorities clear, and serves as your primary contact.</p>'),
('<b>Working product early</b><p>Useful product evidence appears early enough to influence the next decision instead of arriving only at the end.</p>','<b>Access to the engineers</b><p>Speak directly with the engineers when you need to discuss an integration, technical choice, or tradeoff.</p>'),
('<b>Tradeoffs made visible</b><p>AI behavior, architecture, scope, data, risk, and operational constraints are surfaced rather than hidden behind delivery language.</p>','<b>Regular progress reviews</b><p>Receive progress updates and demonstrations of working software so you can give feedback throughout the project.</p>'),
('<b>No inflated AI claims</b><p>Capabilities should be demonstrated, evaluated, and measured. We prefer evidence over hype.</p>','<b>Clear decisions and limits</b><p>We explain what works, what needs further testing, and where AI or automation is not the right approach.</p>'),
('Aloden is designed for organizations that need more than development capacity—teams that need product judgment, AI expertise, and engineering depth around an important product or workflow.','We work with founders and established teams that need help defining, building, or improving a product. The scope depends on what you have today and what you need to achieve next.'),
('Aloden is intentionally building a product-engineering culture around curiosity, craft, clear communication, and responsibility for what reaches production.','We value people who ask good questions, explain their decisions, and stay involved when a problem needs to be resolved.'),
('Build with a team that stays accountable to the product.','Talk with the team that will build it.'),
('Tell us what you are trying to create, modernize, or make more intelligent. We’ll help determine the right path forward.','Bring us your product idea or the software problem you need to solve. We will discuss where to begin.')])

edit('preview/ai-product-engineering.html',[
('Build AI-native products that are ready for real use.','Build AI products people can rely on.'),
('Aloden turns AI opportunities, product ideas, and working prototypes into dependable software—combining product strategy, experience design, AI architecture, full-stack engineering, evaluation, and production controls from the beginning.','Bring us a product idea or working AI prototype. We help define the first useful release, design the experience, build the application, and test how it behaves before launch.'),
('Everything required to turn AI capability into a product.','What we deliver with your product.'),
('We engineer the product as one connected system. That means the AI, application, data, experience, integrations, evaluation, and operating controls are designed around the same outcome.','The work covers the user experience and the software behind it. These are the decisions and deliverables we work through together.'),
('Clarify the users, workflow, business outcome, product boundaries, success measures, and the specific decisions or interactions where AI creates meaningful value.','A clear product brief: who will use it, the task it should help them complete, what the first release includes, and how success will be assessed.'),
('Create experiences that make AI behavior understandable: recommendations, generated outputs, confirmations, corrections, approvals, uncertainty, fallbacks, and human escalation.','User flows and interface designs for the main task, including how people review an AI response, correct it, confirm an action, or ask for help.'),
('Design the model strategy, retrieval, structured data, application state, memory, tools, business rules, and privacy boundaries that make AI useful inside the product.','An architecture that specifies the models, data sources, retrieval, tools, and access boundaries the product needs. Model choices account for quality, speed, and cost.'),
('Engineer frontend, backend services, APIs, identity, workflow state, business logic, events, and integrations so the AI is part of a complete product—not an isolated endpoint.','The working application: screens, backend services, APIs, sign-in, permissions, business rules, and connections to the systems your users depend on.'),
('Evaluate realistic scenarios, quality, edge cases, latency, permissions, failures, and critical actions. Add validation, guardrails, human review, and release criteria where they matter.','Repeatable tests and release criteria covering answer quality, permissions, response time, failed requests, and actions that need a person to approve them.'),
('Instrument the system so teams can understand usage, quality, model behavior, errors, workflow outcomes, operating cost, and user feedback as the product evolves.','Deployment and monitoring that show usage, errors, AI quality, and operating cost, so the team has evidence for future improvements.'),
('The model is one component. The product is the complete system.','How the application, AI, and data fit together.'),
('Production AI succeeds when experience, application logic, intelligence, systems, data, and controls work together. This is where many impressive prototypes become fragile products—or become dependable ones.','A user request moves from the interface through application rules to the model and connected data. Each layer has a job, and the boundaries between them matter.'),
('The hard part starts after the demo works.','Close the gaps between a prototype and a release.'),
('A prototype can prove that an AI idea is possible. A production product has to behave consistently across users, data, systems, permissions, failures, costs, edge cases, and changing models.','A useful prototype gives us a starting point. We check what is missing before people depend on it: access controls, reliable integrations, repeatable evaluation, and recovery when a request fails.'),
('You do not need a finished architecture or AI strategy before engaging Aloden. The right starting point depends on whether you are defining the opportunity, productizing something that already works, or building the full product.','Start with discovery, strengthen an existing prototype, or build a defined product. We agree on the scope and the evidence needed before moving to the next stage.'),
('Production requirements shape the product from the beginning.','What we check before release.'),
('AI changes the failure modes and operating questions, but it does not remove the fundamentals of strong software engineering. We design both together.','Software tests and AI evaluations answer different questions. Both inform the release decision, alongside security, reliability, and operating cost.')])

edit('preview/product-modernization.html',[
('Aloden helps organizations modernize products, platforms, and workflows without defaulting to a full rewrite—improving architecture, experience, integrations, data, delivery, and AI readiness while preserving the business value that already works.','When useful software becomes hard to change, we help improve its architecture, experience, and integrations. We preserve what works and introduce AI where it solves a specific business problem.'),
('Modernization should be driven by product value and operating reality—not by the age of a framework or pressure to adopt the newest technology.','The assessment identifies what is slowing the product down. That may be the code, the user experience, an integration, or the way releases are delivered.'),
('The best modernization program is not the one that replaces the most code. It is the one that makes the product easier to use, change, integrate, operate, and evolve.','We decide component by component what to keep, connect, replace, or extend. Each decision should address a specific constraint and account for migration risk.'),
('AI readiness is an architecture and workflow problem.','Give AI reliable data and well-defined actions.'),
('Adding a model to an unstable product does not make the product modern. AI becomes useful when the software can provide the right context, expose safe actions, enforce permissions, measure behavior, and keep people in control where judgment matters.','Before adding an AI feature, we check the data it will read, the actions it can take, and the rules it must follow. Fixing those foundations can also improve conventional automation.'),
('Move from prioritized roadmap through architecture, UX, engineering, migration, AI enablement, rollout, and production operation in controlled slices.','Work through the agreed roadmap in stages, reviewing working changes and migration risks with your delivery lead and engineers.'),
('Existing software often supports real users and business operations today. Modernization has to improve the product without treating disruption as an acceptable side effect.','Release planning accounts for the people and operations using the software today. Staged changes, verification, and recovery plans help manage disruption.')])

edit('preview/agentic-ai.html',[
('Turn complex work into AI systems that can act—with control.','Automate multi-step work across your business systems.'),
('Aloden engineers governed agentic workflows that understand context, maintain state, use permitted tools, coordinate multi-step work, verify outcomes, and bring people in when judgment or authority is required.','We build AI agents that gather information, carry out permitted tasks, and coordinate next steps across applications. Sensitive actions pause for approval, and completed actions are checked against the connected system.'),
('The agent is one component inside a controlled workflow system.','What it takes to build the workflow.'),
('Dependable agentic software needs product state, tool contracts, permissions, orchestration, recovery, verification, and observability around the intelligence.','We define how work starts, which information is available, which actions are allowed, and how the process continues after a delay or failure.'),
('The hard part is the system around the reasoning.','Deciding what to do is only one step.'),
('A model may be able to decide or generate the next action. Production software still has to know whether that action is permitted, whether the tool succeeded, what changed, what should happen after failure, and when a person must take over.','An agent may propose an update, but the application still needs to check permission, make the request, and verify the result. If a system times out, the workflow must avoid duplicate actions and make the unresolved state visible.'),
('You do not need an enterprise-wide agent strategy. A strong first engagement identifies one high-value workflow, the systems it touches, the controls it needs, and the evidence required to justify production investment.','Choose one recurring task that is slow or difficult to coordinate. We map the current steps, connect the required systems, and test whether an agent improves completion, effort, or reliability.'),
('Introduce agentic decisioning or tool use into an existing application, automation, or operational workflow while preserving reliable deterministic logic.','Add an agent to an existing application or process while keeping the rules and automated steps that already work reliably.'),
('Agentic systems have to be understandable when they fail.','Make failures visible and recoverable.'),
('Production readiness means the workflow can be observed, constrained, recovered, measured, and explained—not just that the agent can complete the happy path.','Before release, test denied permissions, unavailable tools, duplicate requests, and delayed approvals. The team needs to see what happened and how to resume safely.')])

edit('preview/voice-ai-engineering.html',[
('Aloden engineers system-connected voice experiences that understand intent, use business context, take permitted actions, confirm outcomes, and hand off to people when judgment is required.','We build voice experiences for scheduling, service, and operational requests. The conversation connects to your business systems, checks the result of each action, and brings in a person when help is needed.'),
('Use conversation where it removes real friction.','Use voice where speaking makes the task easier.'),
('Voice is valuable when speaking is faster or more natural than navigating a screen—and when the conversation can connect directly to the workflow, systems, and outcome behind it.','Voice should save the user effort. It works best when a spoken request can lead to a clear answer or completed task without sending the user through another process.'),
('The product should move through explicit state: understand the request, establish context and authority, act through the right system, verify what actually happened, and only then confirm success to the user.','For an appointment change, the system first checks identity and availability. It updates the booking, verifies the new time, and then confirms it to the caller.'),
('You do not need a full voice strategy before beginning. A focused workflow is usually the best place to test whether conversation can reduce friction and improve completion.','Choose one task, such as rescheduling an appointment or checking a request. Test how the conversation handles the normal path, corrections, and the need for human help.'),
('Real conversations create real operating requirements.','Design for interruptions, corrections, and delays.'),
('Bring us the workflow, the existing product, or the service experience. We’ll help determine where conversation fits and what has to be engineered behind it for dependable real-world use.','Tell us which requests people need to complete and which systems they use. We will help identify a practical first voice workflow.')])

edit('preview/healthcare-ai.html',[
('Intelligence connected to the healthcare operating system around it.','Connect AI to the systems your teams already use.'),
('Healthcare AI becomes dependable when product experience, workflow state, data, integrations, permissions, AI behavior, and human decisions are engineered together.','Workforce and care operations depend on accurate records, clear requirements, and timely handoffs. We build around those needs, with AI supporting the people responsible for decisions.'),
('Turn unstructured requests into connected workflow state.','Turn incoming requests into clear next steps.'),
('Apply document intelligence, workflow automation, prioritization, and exception handling to referral, request, intake, or operational processes.','Extract relevant information from referrals or intake documents, flag missing details, and route the request to the right team for review.'),
('Know how the system behaves after the demo works.','Monitor the workflow after launch.'),
('Our Work carries the deeper product story so this page can stay focused on what healthcare customers can hire Aloden to do.','Explore Medlivo, an Aloden-engineered platform currently in use, to see how matching, credentialing, scheduling, and workforce operations connect.'),
('Medlivo demonstrates Aloden’s healthcare workflow and workforce-technology depth.','Medlivo brings this work into day-to-day operations.'),
('Tell us what you want to build, modernize, connect, or improve. We’ll help determine where AI, workflow engineering, modernization, or conventional software belongs.','Tell us which workflow needs attention, which systems it touches, and where staff need to stay in control.')])

edit('preview/built-by-aloden.html',[
('Selected Aloden work across healthcare, innovation, and voice AI—showing how product thinking, intelligent workflows, engineering, and connected systems come together in software built for production.','Explore Aloden’s work across healthcare, innovation, and voice AI. Each example shows the task the product supports and how the software connects people, information, and business systems.'),
('Each chapter focuses on what the system needs to do, how people move through it, and the engineering required to make the experience work end to end.','Medlivo is in use, StartupFair is fully functional, and the voice AI solution is deployed. The operating figures shown are snapshots, not a live data feed.'),
('Medlivo brings referral intake, clinician matching, credentialing, scheduling, documentation, approvals, and workforce operations into one connected product experience.','Medlivo is currently in use, connecting referral intake, clinician matching, credentialing, scheduling, documentation, and approvals. Aloden’s work brings these steps together so teams can follow a requirement through to assignment and operations.'),
('<span>LIVE OPERATIONS</span>','<span>OPERATING SNAPSHOT</span>'),
('A complete operating system for an AI hackathon.','Run the AI hackathon from challenge to opportunity.'),
('StartupFair connects challenge owners, participants, teams, mentors, judges, sponsors, and administrators across one lifecycle—from applications and team formation through building, validation, exact-commit submission, judging, results, and opportunity workflows.','StartupFair is a fully functional platform for organizing AI hackathons. It connects applications, team formation, building, submissions, judging, and results, so organizers and participants can follow the event in one place.'),
('StartupFair · Production Platform','StartupFair · Platform View'),
('TEAM PHOENIX · RUNNING','TEAM PHOENIX · WORKSPACE'),
('Voice experiences that complete real work.','Voice requests connected to completed tasks.'),
('Aloden engineers voice workflows that move beyond transcription: understand intent, use business context, check permissions, call connected systems, confirm the result, preserve an audit trail, and escalate with full context when a person should take over.','Aloden’s voice AI solution is deployed and in use. It connects spoken requests to business systems, checks permissions, confirms completed actions, and passes the conversation to a person when needed. The appointment workflow below shows those steps.'),
('Voice Operations · Live Session','Voice Operations · Workflow View'),
('<b>Live appointment call</b>','<b>Appointment workflow</b>'),
('Session active · 02:14','Session view · 02:14')])

edit('preview/careers.html',[
('At Aloden, product thinkers, designers, engineers, and AI practitioners work together from problem definition through production. If you like ownership, ambiguity, and turning new capability into useful products, you’ll fit the work.','Join a team that brings product, design, engineering, and AI together. You will help define the problem, build the software, and see how it performs when people use it.'),
('More ownership. More context. Less distance from the outcome.','Understand the problem. Help shape the solution.'),
('We are building Aloden around small, capable teams that can move from an important problem to working software without separating product judgment from technical execution.','Work alongside the people designing and building the product. You will have the context to question assumptions, explain tradeoffs, and take responsibility for your contribution.'),
('We use modern AI tools to increase leverage, while keeping architecture, fundamentals, evaluation, security, and human judgment intact.','Use AI tools to explore and build, while understanding the code, checking the results, and protecting data. Tools support your judgment; they do not replace it.'),
('Build at the edge of what software is becoming.','Work on products with problems worth solving.'),
('Aloden works where product engineering, AI, modernization, and real operating workflows meet. The technology changes quickly; the standard for useful software does not.','Our work includes new applications, existing platforms that need improvement, and AI-enabled workflows. You will build features, connect systems, and test what happens beyond the expected path.'),
('The behaviors matter as much as the tools.','How we work together.'),
('We value people who can think clearly, make progress visible, challenge assumptions respectfully, and take responsibility for the quality of what reaches users.','Ask questions, explain decisions, share progress, and raise problems early. Good work depends on how the team collaborates as well as what each person builds.'),
('Hackathons, internships, and early-career programs can give emerging builders a real surface to demonstrate how they think, collaborate, use AI, and turn an idea into working software.','Hackathons, internships, and early-career programs give emerging builders a chance to show what they can do. Share a project, explain your contribution, and tell us what you learned.'),
('Different disciplines. One product-engineering standard.','Find where your skills fit.'),
('A practical process designed to understand how you work.','Get to know the role and the team.'),
('The exact process can vary by role, but the goal stays the same: give both sides enough signal to make a thoughtful decision without unnecessary ceremony.','The steps vary by role. We discuss your experience, review relevant work, and make time for your questions so both sides can assess the fit.'),
('For some technical or early-career roles, a practical build, portfolio walkthrough, or hackathon output may provide better signal than a traditional interview exercise.','Some roles include a practical task, portfolio walkthrough, or discussion of a hackathon project. HR will explain the process for the role you are considering.'),
('If the way Aloden works sounds like the way you want to work, introduce yourself. The right conversation can start before the perfect job title exists.','Explore an opening or introduce yourself with your résumé and a sample of your work. You do not need to find an exact job title to get in touch.')])

edit('preview/start-project.html',[
('You do not need a finished specification or a long RFP. Tell us about the product, workflow, or system you want to create, modernize, automate, or make more intelligent. We’ll use the context to determine the most useful next conversation.','You do not need a finished specification. Share what you want to achieve, what exists today, and where you need help. We will review the brief and contact you to discuss the next step.'),
('Choose the closest fit. We can refine the scope together later.','Choose the main reason you are getting in touch.'),
('The goal is to understand the problem before prescribing the solution.','A high-level outline is enough to begin.'),
('The first conversation should clarify the product decision—not create another questionnaire.','We use the brief to prepare for a conversation about your priorities and next step.'),
('A few focused questions. One useful conversation.','Give us the context for a useful first conversation.'),
('Share enough context for us to understand what you are trying to accomplish, what already exists, and where the product needs help.','Tell us the main goal and any important constraints. Leave confidential technical or business details out of this initial brief.'),
('What should become better?','Where do you need help?'),
('<p>Select all that apply.</p>','<p>Select the parts of the work you need support with.</p>'),
('Define or productize the idea','Define the product'),
('Clarify users, workflow, product direction, architecture, and path to production.','Decide who it serves, what it should do, and what belongs in the first release.'),
('Improve a decision, workflow, or interaction with useful intelligence.','Identify and build the AI feature the product needs.'),
('Connect context, tools, systems, approvals, verification, and people.','Connect several steps or systems, including required approvals.'),
('Connect conversation to context, actions, confirmation, and human handoff.','Let users complete a task by speaking, with human help when needed.')])
edit('preview/404.html',[
('Wrong path.<br>Right place.','We couldn’t find that page.'),
('No product state was changed. Choose a valid destination to continue.','Try one of the links to return to the website.')])
for file in ['preview/voice-ai-engineering.html','preview/product-modernization.html','preview/agentic-ai.html']:
 p=root/file;s=p.read_text()
 for a,b in [('Voice AI Engineering','Voice &amp; Conversational AI'),('Product Modernization','AI-Native Modernization'),('Intelligent Workflow &amp; Agentic Systems','Agentic Workflow Engineering')]:s=s.replace(a,b)
 p.write_text(s)
for p in (root/'preview').glob('*.html'):
 s=p.read_text();s=re.sub(r'(<script\b[^>]*type="application/ld\+json"[^>]*>)(.*?)(</script>)',lambda m:m[1]+m[2].replace('&amp;','&')+m[3],s,flags=re.S);p.write_text(s)

names=[('AI Product Engineering','ai-product-engineering.html'),('Voice &amp; Conversational AI','voice-ai-engineering.html'),('Agentic Workflow Engineering','agentic-ai.html'),('AI-Native Modernization','product-modernization.html')]
for file in ['preview/homepage-final.js','preview/index.html']:
 p=root/file;s=p.read_text()
 for label,url in names:
  old='<h3>'+label+'</h3>'
  if file.endswith('.js'):assert s.count(old)==1
  s=s.replace(old,f'<h3><a href="{url}">{label}</a></h3>')
 p.write_text(s)
p=root/'preview/capabilities.html';s=p.read_text()
for id,url in [('ai-product-engineering','ai-product-engineering.html'),('product-modernization','product-modernization.html'),('agentic-systems','agentic-ai.html'),('voice-ai-engineering','voice-ai-engineering.html')]:
 pat=rf'(<article\b[^>]*id="{id}"[^>]*>.*?<h3>)(.*?)(</h3>)'
 s,n=re.subn(pat,lambda m:m[1]+f'<a href="{url}">'+m[2]+'</a>'+m[3],s,flags=re.S);assert n==1
p.write_text(s)
meta={
'Aloden builds AI-native products, modernizes existing software, and engineers agentic and voice workflows for production-ready real-world use.':'Aloden helps companies build intelligent digital products, modernize existing software, and connect business workflows with practical AI.',
'Explore Aloden’s AI product engineering, AI-native modernization, agentic workflow engineering, voice AI, and healthcare AI capabilities.':'Explore four Aloden services: AI Product Engineering, AI-Native Modernization, Agentic Workflow Engineering, and Voice & Conversational AI.',
'Aloden is an AI-native product engineering company founded in 2024, combining product thinking, engineering depth, practical AI, and production discipline.':'Founded in 2024, Aloden helps companies build intelligent products and modernize software, with one delivery lead and direct access to engineers.',
'Aloden engineers agentic workflows that connect AI agents to tools, systems, approvals, verification, observability, and human control.':'Automate multi-step work across business systems with Aloden. Build AI agents with clear permissions, approvals, and verified outcomes.',
'AI-native product engineering and digital modernization company building intelligent software for real-world use.':'Aloden builds intelligent digital products and modernizes existing software.'}
for p in [root/'scripts/apply-seo.mjs',*list((root/'preview').glob('*.html'))]:
 s=p.read_text()
 for old,new in meta.items():s=s.replace(old,new).replace(html.escape(old,quote=True),html.escape(new,quote=True))
 s=re.sub(r'(<script\b[^>]*type="application/ld\+json"[^>]*>)(.*?)(</script>)',lambda m:m[1]+m[2].replace('&amp;','&')+m[3],s,flags=re.S)
 p.write_text(s)
p=root/'preview/sitemap.xml';s=p.read_text()
for file in ['','built-by-aloden.html','capabilities.html','ai-product-engineering.html','product-modernization.html','agentic-ai.html','voice-ai-engineering.html','healthcare-ai.html','company.html','careers.html','start-project.html']:
 s=re.sub(r'(<loc>https://www.aloden.com/'+re.escape(file)+r'</loc><lastmod>)[^<]+',r'\g<1>2026-09-13',s)
p.write_text(s)
p=root/'README.md';s=p.read_text()
s=s.replace('capabilities, products, insights, company story, and project engagement experience.','capabilities, products, company story, careers, and project inquiry experience.')
s=s.replace('- Developer-controlled content for V1; no CMS initially','- Developer-controlled marketing content; a separate, authenticated HR job manager for approved vacancies')
s=s.replace('- Built by Aloden\n','- Our Work\n').replace('- Insights\n','')
s=s.replace('Supporting pages include Privacy, Terms, and a branded 404 page.','Careers is linked from the footer and includes job details and résumé upload. Contact redirects to Start a Project. Supporting pages include Privacy, Terms, and 404. Insights is not included in this release.')
s=s.replace('- Aloden Voice AI','- Voice & Conversational AI')
s=s.replace('See `docs/SITE-QA-OVERNIGHT.md` for the latest launch-readiness handoff.','See `docs/SITE-FINAL-HANDOFF.md` for the authoritative current scope. Older design documents are historical where they conflict. `docs/CONTENT-CONSISTENCY-REVIEW.md` records the confirmed facts and copy-edit boundaries. Careers job publishing, HR sign-in, applicant privacy, and résumé delivery also require production activation; see the dedicated Careers handoffs.')
p.write_text(s)
print('Applied the owner-confirmed wording pass. No CSS, logo, job-data or backend changes.')
