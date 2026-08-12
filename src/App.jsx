const topics = [
  {
    title: 'AWS Amplify',
    text: 'Build and deploy modern web applications with a simple Git-based workflow.',
  },
  {
    title: 'Amazon S3',
    text: 'Store files and static website assets securely in scalable object storage.',
  },
  {
    title: 'Amazon CloudFront',
    text: 'Deliver websites quickly to users through AWS global edge locations.',
  },
]

function App() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <span className="eyebrow">ProgramGuru AWS</span>
          <h1>Learn AWS with simple, practical tutorials.</h1>
          <p>
            This React application is deployed to production using AWS Amplify,
            GitHub continuous deployment, a custom domain, and HTTPS.
          </p>
          <a className="button" href="#topics">
            Explore AWS Topics
          </a>
        </div>

        <div className="deploy-card" aria-label="Deployment status">
          <div className="status-dot" />
          <div>
            <strong>Production Deployment</strong>
            <span>React + AWS Amplify</span>
          </div>
        </div>
      </section>

      <section className="topics" id="topics">
        <div className="section-heading">
          <span>Start Learning</span>
          <h2>AWS services you will see in our tutorials</h2>
        </div>

        <div className="topic-grid">
          {topics.map((topic) => (
            <article className="topic-card" key={topic.title}>
              <div className="service-icon" aria-hidden="true">AWS</div>
              <h3>{topic.title}</h3>
              <p>{topic.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="deployment">
        <div>
          <span className="eyebrow">Deployed to Production</span>
          <h2>programguruaws.com</h2>
          <p>
            Every push to the connected GitHub branch can trigger a new Amplify
            build and deployment.
          </p>
        </div>
        <div className="check">✓</div>
      </section>

      <footer>
        <span>ProgramGuru AWS</span>
        <span>React application hosted with AWS Amplify</span>
      </footer>
    </main>
  )
}

export default App
