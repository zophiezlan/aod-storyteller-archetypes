# AOD Storyteller Archetypes - Comprehensive Upgrade Plan

## Based on SHARE & BUILD Training Materials

This upgrade transforms the quiz from a simple archetype assessment into a comprehensive storytelling education tool grounded in NUAA's SHARE & BUILD peer work foundations training.

---

## Key Insights from SHARE & BUILD Materials

### Core Principles of Storytelling
1. **Intentional**: Every story is shared with conscious thought—why this story, why now, why this audience
2. **Purposeful**: Stories serve a clear purpose—to educate, heal, advocate, connect, or inspire
3. **Meaningful**: Stories resonate and create genuine impact, avoiding tokenism

### The Power of Storytelling in AOD Work
- **Transcends boundaries**: Connects across cultures, generations, and communities
- **Humanizes data**: Puts faces and meaning behind statistics
- **Bridges gaps**: Makes complex AOD issues accessible
- **Builds empathy**: Challenges stigma and fosters compassion
- **Amplifies voices**: Centers lived experience in shaping services and policy
- **Creates impact**: Resonates longer than facts, driving real change

### Boundaries & Self-Care: The Traffic Light System
- **RED**: Not Today - topics, questions, or scenarios that feel unsafe, triggering, or not right to share
- **YELLOW**: Proceed with Caution - areas you might share depending on context, audience, or with proper support
- **GREEN**: Ready to Share - topics you feel comfortable discussing openly without additional preparation

### Understanding Audiences
- Different audiences require different approaches (peers vs politicians vs general public)
- Key considerations: needs & interests, language/tone, common ground, effective strategies

### Universal Experiences Over Explicit Details
- Focus on **emotions** rather than explicit drug use details
- Shared human experiences: desire for relief, feelings of isolation, hope, resilience, navigating judgment
- This approach reduces stigma by highlighting humanity

### Narrative Reframing
- Moving from **"moral failure"** to **"health and social issue"**
- Challenging prohibitionist frames with harm reduction values
- Using the "Principle → Process → Problem → Proposal" structure

---

## Upgrade Components

### 1. Enhanced Welcome/Introduction Screen ✨
**Before Quiz Starts:**
- Brief explanation of storytelling in harm reduction work
- Introduction to the three core principles (Intentional, Purposeful, Meaningful)
- Set expectations: "This quiz will help you understand your natural storytelling style"
- Acknowledgment of Country (NUAA standard)

### 2. Improved Quiz Experience
**During Quiz:**
- Keep existing 18 questions and 12 archetypes
- Add tooltips/info icons explaining storytelling concepts
- Progress indicators remain

### 3. Comprehensive Results Page Upgrade 🎯

#### A. Primary & Secondary Archetypes (EXISTING - Enhanced)
- Keep current display
- **ADD**: How each archetype aligns with storytelling purposes (Educate, Inspire, Advocate, Heal, Connect)

#### B. NEW: Your Storytelling Principles
Based on archetype results, explain how user embodies:
- **Intentional storytelling**: Why you tell stories
- **Purposeful storytelling**: What you aim to achieve
- **Meaningful storytelling**: How you create impact

#### C. NEW: Boundaries & Self-Care for Your Archetype
- Custom guidance based on archetype
- Introduction to Traffic Light System
- Specific boundary considerations for their storytelling style
- Self-care tips relevant to their archetype

#### D. NEW: Understanding Your Audience
- Who resonates most with your storytelling style
- How to adapt your approach for different audiences:
  - Peers with lived experience
  - Healthcare workers & service providers
  - Policy makers & politicians
  - General public
  - Media & journalists
- Tips for tone, language, and engagement strategies

#### E. NEW: Universal Experiences Guidance
- How to focus on emotions vs explicit details
- Examples of universal experiences for their archetype
- Benefits of this approach for reducing stigma

#### F. NEW: Story Crafting Tips for Your Archetype
Based on the Story Framework from SHARE training:
- Life Events to focus on
- Themes that resonate
- Emotions and feelings to emphasize
- Skills and lessons to highlight
- Relevant contexts for storytelling

#### G. NEW: Reflective Practice Prompts
- Questions to consider before sharing stories
- Post-storytelling reflection questions
- Ongoing development prompts

#### H. NEW: Resources & Next Steps
- **About NUAA**: Brief intro to NUAA and ConnectED Programs
- **SHARE & BUILD Training**: Information about the full training (for those interested)
- **Support Services**: Links to PeerLine, other NUAA resources
- **Downloadable Resources**:
  - Personal Story Map template (PDF)
  - Boundary Traffic Light worksheet (PDF)
  - Audience Mapping guide (PDF)
- **Community Safe Space Guidelines**: Link or summary

### 4. NEW: Educational Sidebar/Pop-ups
Throughout the experience:
- **"Did you know?"** boxes with harm reduction facts
- **"Storytelling Tip"** callouts with SHARE principles
- **"Remember"** notes about boundaries and self-care

### 5. NEW: About This Tool Page
Separate page explaining:
- Purpose of the quiz
- How it was developed (based on SHARE & BUILD training)
- Who it's for (general public, people interested in peer work)
- How to use results
- Connection to NUAA's peer work

---

## Technical Implementation Plan

### Phase 1: Content Development ✅
- [x] Review SHARE & BUILD materials
- [ ] Write all new content sections
- [ ] Create downloadable PDF templates
- [ ] Gather NUAA resources and links

### Phase 2: Component Development
- [ ] Create `IntroductionScreen.tsx` component
- [ ] Create `EnhancedResults.tsx` with all new sections
- [ ] Create `BoundariesSection.tsx` (Traffic Light System)
- [ ] Create `AudienceGuidance.tsx`
- [ ] Create `StoryTips.tsx`
- [ ] Create `ReflectivePractice.tsx`
- [ ] Create `ResourcesSection.tsx`
- [ ] Create `AboutPage.tsx`

### Phase 3: Data & Content
- [ ] Create `archetypeEnhancements.ts` with extended archetype data:
  - Storytelling purposes alignment
  - Boundary considerations
  - Audience tips
  - Universal experiences examples
  - Story crafting guidance
  - Reflective prompts
- [ ] Create `educationalContent.ts` with all educational snippets
- [ ] Create `resources.ts` with all links and references

### Phase 4: UI/UX Enhancements
- [ ] Add navigation between sections
- [ ] Create collapsible/expandable sections for readability
- [ ] Add print/download functionality for results
- [ ] Mobile responsiveness check
- [ ] Accessibility improvements

### Phase 5: Testing & Refinement
- [ ] Content review for accuracy
- [ ] User testing (if possible)
- [ ] Copy editing
- [ ] Final QA

---

## Content Alignment with SHARE & BUILD

### Archetype → Storytelling Purpose Mapping

| Archetype | Primary Purpose | Secondary Purpose | SHARE Principles Emphasis |
|-----------|----------------|-------------------|---------------------------|
| **Advocate** | Advocacy | Inspiring | Purposeful, Intentional |
| **Educator** | Education | Connecting | Meaningful, Purposeful |
| **Connector** | Connecting | Healing & Empathy | Meaningful, Intentional |
| **Explorer** | Inspiring | Healing & Empathy | Intentional, Meaningful |
| **Healer** | Healing & Empathy | Connecting | Meaningful, Intentional |
| **Creator** | Inspiring | Advocacy | Meaningful, Purposeful |
| **Witness** | Education | Advocacy | Intentional, Purposeful |
| **Ally** | Connecting | Advocacy | Meaningful, Intentional |
| **Pragmatist** | Education | Healing & Empathy | Purposeful, Meaningful |
| **Challenger** | Advocacy | Education | Purposeful, Intentional |
| **Navigator** | Education | Connecting | Purposeful, Meaningful |
| **Historian** | Education | Connecting | Meaningful, Intentional |

---

## Success Metrics

### User Engagement
- Time spent on results page (should increase significantly)
- Interaction with new sections (clicks, expansions)
- Downloads of resources
- Clicks to NUAA resources/SHARE training info

### Educational Impact
- Users report better understanding of:
  - Storytelling principles
  - Boundaries and self-care
  - Audience awareness
  - Their own storytelling strengths

### Connection to NUAA
- Increased awareness of NUAA and ConnectED programs
- Referrals to SHARE & BUILD training
- Community engagement

---

## Scope Boundaries

### What This Tool IS:
✅ An educational introduction to storytelling in harm reduction
✅ A self-discovery tool for understanding your natural storytelling style
✅ A gateway to NUAA's SHARE & BUILD training
✅ Publicly accessible on NUAA website
✅ Based on peer work principles but for general audience

### What This Tool IS NOT:
❌ A replacement for SHARE & BUILD training
❌ Certification or credentials
❌ Only for people with lived experience (it's for everyone!)
❌ Clinical assessment or therapy tool
❌ Restricted to SHARE participants

---

## Key Messages to Emphasize

1. **"All voices matter in harm reduction work"** - No matter your archetype or background
2. **"Boundaries equal self-care"** - Sustainable storytelling requires protection
3. **"Stories are more than testimonials"** - They're professional practice tools
4. **"Focus on universal experiences"** - Connect through emotion, not explicit details
5. **"Peer work is expertise"** - Lived experience is valuable knowledge

---

## Next Steps After This Upgrade

### Future Enhancements (Post-Launch)
1. **Spanish translation** (if NUAA serves Spanish-speaking communities)
2. **Video content** - Short clips explaining archetypes
3. **Community stories** - Examples from each archetype (with consent)
4. **Progress tracking** - Allow users to save and revisit results
5. **Workshop materials** - Facilitator guides for using tool in groups
6. **API integration** - Connect with NUAA's other platforms

### Evaluation & Iteration
- Collect user feedback (optional survey at end)
- Analytics review monthly
- Annual content update to align with SHARE training evolution
- Consultation with SHARE facilitators and participants

---

## Questions for NUAA Stakeholders

1. **Branding**: Should we include NUAA logo and official branding?
2. **Links**: Confirm all NUAA resource URLs are current
3. **Contact**: What's the best contact for SHARE training inquiries?
4. **PDFs**: Can we create/host downloadable templates?
5. **Language**: Any specific terminology preferences or things to avoid?
6. **Privacy**: Any disclaimers needed about data collection?
7. **Accessibility**: WCAG compliance level required?

---

## Timeline Estimate

- **Content Development**: 3-5 days
- **Component Development**: 5-7 days
- **Testing & Refinement**: 2-3 days
- **Total**: ~2 weeks for full implementation

---

## Conclusion

This upgrade transforms a simple quiz into a comprehensive storytelling education tool that:
- **Educates** the general public about effective harm reduction storytelling
- **Empowers** people to find their voice while maintaining boundaries
- **Connects** users to NUAA's deeper resources and training
- **Honors** the principles of SHARE & BUILD training
- **Bridges** the gap between curiosity and professional peer work practice

The tool becomes a **gateway** - accessible to everyone, educational for all, and an invitation to those who want to go deeper through SHARE & BUILD training.
