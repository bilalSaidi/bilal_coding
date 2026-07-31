import React from "react";
import "../linkedPosts.css";

const LinkedPosts = () => {
  return (
    <div className="linked_posts">
      <div className="main_header">LinkedIn posts</div>
      <div className="posts_grid">
        <div className="post_card">
          <h3>QA as a partner, not a documentation bottleneck</h3>
          <p>
            This post explains why a single QA supporting 4–7 developers should avoid
            excessive test-case documentation, focus on scenarios, exploratory testing,
            and automation, and use bug history to guide quality efforts.
          </p>
          <a
            href="https://www.linkedin.com/posts/bilal-saidi-qa_if-you-are-the-only-qa-supporting-47-developers-share-7487171448961323009-BHzT/?utm_source=share&utm_medium=member_desktop&rcm=ACoAACnfKYYBbDv3wblhZb2U8e37Hnjsf3cyPSE"
            target="_blank"
            rel="noreferrer"
          >
            Read the article
          </a>
        </div>
        <div className="post_card">
          <h3>Data-driven testing with clearer role scenarios</h3>
          <p>
            This post argues that data-driven testing means reusing test logic across
            different input values, while keeping separate scenarios when permissions
            differ for Admin, Manager, and Viewer roles.
          </p>
          <a
            href="https://www.linkedin.com/posts/bilal-saidi-qa_qualityassurance-softwaretesting-playwright-share-7486772805825552384-9SPZ/?utm_source=share&utm_medium=member_desktop&rcm=ACoAACnfKYYBbDv3wblhZb2U8e37Hnjsf3cyPSE"
            target="_blank"
            rel="noreferrer"
          >
            Read the article
          </a>
        </div>
        <div className="post_card">
          <h3>Starting fast as a new QA on an existing project</h3>
          <p>
            This post explains how a new QA should first understand the product workflow,
            review Jira, explore historical bugs, and then build a focused testing strategy
            before reporting issues or automating critical scenarios.
          </p>
          <a
            href="https://www.linkedin.com/posts/bilal-saidi-qa_qualityassurance-softwaretesting-qa-share-7486468267109302272-8aS6/?utm_source=share&utm_medium=member_desktop&rcm=ACoAACnfKYYBbDv3wblhZb2U8e37Hnjsf3cyPSE"
            target="_blank"
            rel="noreferrer"
          >
            Read the article
          </a>
        </div>
        <div className="post_card">
          <h3>Quality is about protecting trust, not just finding bugs</h3>
          <p>
            This post highlights the real cost of production defects and argues that QA
            protects customer trust, reduces business risk, and prevents disappointment
            when critical systems like logistics and support are affected.
          </p>
          <a
            href="https://www.linkedin.com/posts/bilal-saidi-qa_as-qa-engineers-we-often-measure-our-work-share-7484654829533990912-JLSR/?utm_source=share&utm_medium=member_desktop&rcm=ACoAACnfKYYBbDv3wblhZb2U8e37Hnjsf3cyPSE"
            target="_blank"
            rel="noreferrer"
          >
            Read the article
          </a>
        </div>
        <div className="post_card">
          <h3>Shift Left Testing with AI requirements review</h3>
          <p>
            This post proposes using AI agents to review stories before development starts,
            asking QA-style questions about requirements, gaps, edge cases, and ambiguous acceptance criteria.
          </p>
          <a
            href="https://www.linkedin.com/posts/bilal-saidi-qa_maybe-weve-been-solving-shift-left-testing-share-7481068220452421632-Fmw8/?utm_source=share&utm_medium=member_desktop&rcm=ACoAACnfKYYBbDv3wblhZb2U8e37Hnjsf3cyPSE"
            target="_blank"
            rel="noreferrer"
          >
            Read the article
          </a>
        </div>
      </div>
    </div>
  );
};

export default LinkedPosts;
