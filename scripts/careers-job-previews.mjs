import fs from 'node:fs';
import {renderRole,renderBoardSnapshot} from '../server/careers/jobs-api.mjs';
const {jobs}=JSON.parse(fs.readFileSync('preview/data/careers-openings.json','utf8'));
let careers=fs.readFileSync('preview/careers.html','utf8');
careers=careers.replace(/<!-- JOBS_SNAPSHOT_START -->[\s\S]*?<!-- JOBS_SNAPSHOT_END -->/,renderBoardSnapshot(jobs,true));
fs.writeFileSync('preview/careers.html',careers);
console.log('Generated the five hiring-confirmed role review cards; no job is published to the runtime database.');
