export default function Home() {
  return (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '40px 20px',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#333' }}>
        Welcome to Old Website (Next.js 12)
      </h1>

      <p style={{ fontSize: '1.125rem', marginBottom: '2rem', color: '#666' }}>
        This is a test environment for BAM Legacy Components
      </p>

      <div style={{
        backgroundColor: '#f5f5f5',
        padding: '2rem',
        borderRadius: '8px',
        marginBottom: '2rem'
      }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#01243c' }}>
          Testing Features
        </h2>
        <ul style={{ lineHeight: '1.8', color: '#444' }}>
          <li>✅ Next.js 12.0.3 (Pages Router)</li>
          <li>✅ React 17.0.2</li>
          <li>✅ BAM Legacy Components (Navbar + Footer)</li>
          <li>✅ CSS Isolation with .bam-legacy-wrapper</li>
          <li>✅ No Tailwind CSS (simulating old website)</li>
        </ul>
      </div>

      <div style={{
        border: '2px dashed #34719c',
        padding: '2rem',
        borderRadius: '8px',
        textAlign: 'center'
      }}>
        <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#34719c' }}>
          Main Content Area
        </h3>
        <p style={{ color: '#666' }}>
          This area simulates the old website content.
          Notice how the Navbar and Footer have their own styles that don't conflict with this content.
        </p>
      </div>
    </div>
  );
}
