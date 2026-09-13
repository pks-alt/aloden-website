import fs from 'node:fs';
import {renderRole,renderBoardSnapshot} from '../server/careers/jobs-api.mjs';
const {jobs}=JSON.parse(fs.readFileSync('preview/data/careers-openings.json','utf8'));
let careers=fs.readFileSync('preview/careers.html','utf8');
careers=careers.replace(/<!-- JOBS_SNAPSHOT_START -->[\s\S]*?<!-- JOBS_SNAPSHOT_END -->/,renderBoardSnapshot(jobs,true));
fs.writeFileSync('preview/careers.html',careers);
console.log('Generated the five hiring-confirmed role review cards; no job is published to the runtime database.');

const hr = fs.readFileSync('preview/hr-jobs.html','utf8');
fs.mkdirSync('preview/reviews/jobs', {recursive:true});
fs.writeFileSync('preview/reviews/hr-jobs.html', hr.replace('<head>','<head><base href="../">').replace('<body class="hr-page">','<body class="hr-page" data-review-demo="true">'));
const template=fs.readFileSync('preview/career-role.html','utf8');
for (const job of jobs) fs.writeFileSync(`preview/reviews/jobs/${job.id}.html`,renderRole(template,job,'https://www.aloden.com',{review:true,base:'../../'}).replace(/[\t ]+$/gm,''));
