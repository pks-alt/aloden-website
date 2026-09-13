# Aloden Launch SEO Keyword Map

This map assigns one primary commercial search theme to each public page so Aloden pages reinforce each other instead of competing for the same query. Do not add a legacy `<meta name="keywords">` tag; targeting is implemented through page titles, headings, body copy, internal links, structured data, and crawl/index signals.

| Page | Primary keyword / topic | Secondary topics | Search intent |
| --- | --- | --- | --- |
| `/` | AI product engineering company | AI software development company; AI-native product development; production AI; digital modernization | Company / solution discovery |
| `/capabilities.html` | AI engineering services | AI product engineering services; AI modernization; AI agents; voice AI services; healthcare AI | Service discovery |
| `/ai-product-engineering.html` | AI product engineering services | AI product development; production AI engineering; AI application development; AI architecture | Commercial service |
| `/product-modernization.html` | AI-native software modernization | application modernization; AI-ready software; legacy modernization; architecture modernization | Commercial service |
| `/agentic-ai.html` | agentic workflow engineering | AI agent development; AI workflow automation; agentic AI services; human-in-the-loop AI | Commercial service |
| `/voice-ai-engineering.html` | voice AI engineering | conversational AI development; voice AI development company; AI voice agents; system-connected voice AI | Commercial service |
| `/healthcare-ai.html` | healthcare AI development | healthcare AI solutions; healthcare workflow automation; healthcare workforce technology; credentialing automation | Industry/service |
| `/built-by-aloden.html` | AI product engineering portfolio | AI product examples; healthcare AI platform; innovation platform; voice AI product | Proof / evaluation |
| `/company.html` | AI-native product engineering company | AI engineering company; product engineering company; Aloden | Brand / company evaluation |
| `/careers.html` | careers at Aloden | AI engineering jobs; product engineering careers; AI software engineering jobs; early career technology roles | Employment / employer evaluation |
| `/start-project.html` | AI product engineering partner | hire AI product engineering company; AI development project; AI modernization partner | Conversion |
| `/privacy.html` | Aloden privacy notice | privacy policy | Navigational |
| `/terms.html` | Aloden website terms | terms of use | Navigational |

## Internal linking rules

- Home should link to the four core capability pages and Our Work using descriptive anchor text.
- Capabilities should be the hub for all service pages.
- Each service page should link back to Capabilities, to relevant Our Work proof, and to Start a Project.
- Healthcare AI should link to Medlivo proof on Our Work.
- Our Work should link to the relevant capability pages where appropriate, without turning the proof page into a services catalog.
- Company should support brand/entity understanding rather than compete with service pages for detailed service queries.
- Careers should be discoverable from the site footer and Company context, while specific job-detail pages should only be created when an approved role exists.

## Search indexing launch checklist

1. Deploy the final branch to `https://www.aloden.com` with HTTPS and one canonical hostname.
2. Verify the domain property in Google Search Console.
3. Submit `https://www.aloden.com/sitemap.xml` in Search Console.
4. Inspect and request indexing for Home, Capabilities, the five service/domain pages, Our Work, Company, Careers, and Start a Project.
5. Verify the site in Bing Webmaster Tools and submit the same sitemap.
6. Confirm `robots.txt`, canonicals, social image, and structured data return correctly from the live domain.
7. Test LinkedIn Post Inspector and other social-card debuggers after deployment.
8. Monitor Search Console Coverage/Pages, Core Web Vitals, search queries, impressions, CTR, and indexed-page count after launch.
9. Keep Insights noindex until Aloden has original, high-quality content ready for publication.
10. Do not use paid or automated bulk-indexing schemes; rely on crawlable architecture, sitemap submission, relevant content, and legitimate links/mentions.
