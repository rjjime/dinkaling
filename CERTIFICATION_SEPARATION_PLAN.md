# Certification Separation Plan

## Objective
Separate the current Mizunoto/Mizunoe/Kanoto combined certification test into 3 distinct rank-based certification tests with individual quizzes and practical components.

## Information Gathered
- Current certification.html contains one combined test for ranks 1-3
- User provided detailed Mizunoto (rank 1) quiz questions and expanded practical test components
- Navigation structure exists for certification page
- Need to maintain consistent design and user experience

## Plan

### 1. Create Mizunoto Certification Test (Rank 1)
**File:** `html/certification-mizunoto.html`
- **Quiz:** 10 questions focusing on core basics for 2.0 DUPR entry survival
- **Pass Criteria:** 8/10 correct (80%)
- **Practical Components:**
  - Serve Test: 20/30 legal serves (66% pass)
  - Groundstroke Rally Test: 10 rallies of 4+ shots
  - Dink Rally Test: 5 minutes fault-free kitchen play  
  - Game Simulation: Play to 11 vs 2.5 tester

### 2. Create Mizunoe Certification Test (Rank 2)
**File:** `html/certification-mizunoe.html`
- Placeholder page with coming soon message
- Will focus on intermediate skills (2.5-3.0 DUPR)

### 3. Create Kanoto Certification Test (Rank 3)
**File:** `html/certification-kanoto.html`
- Placeholder page with coming soon message
- Will focus on advanced skills (3.0-3.5 DUPR)

### 4. Update Main Certification Page
**File:** `html/certification.html`
- Convert to landing page with overview of all three ranks
- Add navigation cards linking to each individual test
- Remove current combined test content

### 5. Update Navigation
- Update main navigation if needed
- Add certification test links to the individual pages

## Dependent Files to be Edited
- `html/certification-mizunoto.html` (new file)
- `html/certification-mizunoe.html` (new file)
- `html/certification-kanoto.html` (new file)
- `html/certification.html` (update existing)
- `css/style.css` (add any new styles needed)

## Followup Steps
1. Test the new certification pages for proper rendering
2. Verify navigation links work correctly
3. Ensure mobile responsiveness is maintained
4. Update any internal references to the old certification structure

## Quiz Questions for Mizunoto (Confirmed)
1. What is the non-volley zone (NVZ or "kitchen")?
2. Can you hit a volley (no bounce) while standing in the kitchen? Why or why not?
3. Name 3 requirements for a legal serve.
4. Who scores points during a game?
5. Name 3 common faults that end your turn to hit.
6. In doubles, where does the server start (right or left side)?
7. What happens if you step on the kitchen line while volleying?
8. How do you call a ball "in" or "out"?
9. What is a "let serve," and what happens?
10. After the serve and return, how many bounces does each team get?
