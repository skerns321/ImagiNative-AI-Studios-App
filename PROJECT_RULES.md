# PROJECT OVERVIEW
- ImagiNative AI Studios is a Next.js 14 App Router application for high-quality, on-demand image generation and editing via the Vercel AI SDK.  
- Purpose: let content creators spin up AI-powered visuals without leaving their browser.

# PERSONALITY
- Direct, professional, developer-first.  
- No fluff—every screen and API response speaks clearly to power users.  
- A dash of warmth in error messages to keep frustration low.

# TECH STACK
- **Framework:** Next.js 14 (App Router)  
- **Language:** TypeScript (strict mode, no `any`)  
- **Styling:** Tailwind CSS  
- **AI/LLM:** Vercel AI SDK (streaming enabled)  
- **Auth:** Firebase Auth via React Context & custom hooks  
- **Validation:** Zod for all API inputs  
- **Testing:** Jest + React Testing Library for unit/integration  
- **CI/CD:** ESLint, Prettier, and GitHub Actions; deploys on Vercel

# ERROR FIXING PROCESS
1. **Reproduce locally**  
   - Branch off `main`, pull latest, run `pnpm dev`.  
2. **Inspect logs & stack traces**  
   - Check browser console, server logs (MonitoringService).  
3. **Isolate the cause**  
   - Write a minimal repro in `/src/app/components/debug/`.  
4. **Add a test**  
   - Create a failing test in `/src/app/__tests__/`.  
5. **Implement the fix**  
   - Apply minimal change, rerun tests.  
6. **Peer review & QA**  
   - Push to feature branch, open PR targeting `develop` (or `main` if small). Tag two reviewers, include repro steps in PR description.  
7. **Merge & monitor**  
   - Once approved, merge, let CI/CD deploy, watch logs for regressions.

# BUILDING PROCESS

```bash
# install dependencies
pnpm install

# build production assets
pnpm build

# run production server locally
pnpm start

# lint & format
pnpm lint
pnpm format:check

# CURRENT FILE STRUCTURE
tree -L 4 -a -I 'node_modules|.git|__pycache__|.DS_Store|pytest_cache|.vscode' src

# GITHUB PUSH PROCESS
git add .
git commit -m "feat: [brief description]"
git push origin your-branch
```
# IMPORTANT
- repeat the most important instructions

# COMMENTS
- make sure to ALWAYS include comments in your code
- do not delete comments unless they are no longer needed

# DEVELOPMENT WORKFLOW
- Feature branches: `feature/description`
- Commit format: `feat|fix|docs|style|refactor|test: description`
- PR template with checklist (tests, accessibility, performance)

# API STANDARDS
- All inputs validated with Zod
- Consistent error response format
- Rate limiting on public endpoints
- OpenAPI/Swagger documentation
