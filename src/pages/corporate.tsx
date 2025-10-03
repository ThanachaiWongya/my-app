export default function CorporatePage() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#333' }}>
        Corporate Page
      </h1>
      <p style={{ fontSize: '1.125rem', marginBottom: '2rem', color: '#666' }}>
        ทดสอบ SubNavigation Bar - ควรเห็น secondary navbar ด้านล่าง main navbar
      </p>

      <div style={{ backgroundColor: '#f5f5f5', padding: '2rem', borderRadius: '8px', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#01243c' }}>
          SubNavigation Test
        </h2>
        <ul style={{ lineHeight: 1.8, color: '#444' }}>
          <li>✅ Route: /corporate (matches corporate namespace)</li>
          <li>✅ SubNavigationWrapper should detect 'corporate' namespace</li>
          <li>✅ Should display corporate submenu items</li>
          <li>✅ Sub-menu: เกี่ยวกับ BAM, Corporate Governance, etc.</li>
        </ul>
      </div>

      <div style={{ border: '2px solid #34719c', padding: '2rem', borderRadius: '8px', backgroundColor: 'white' }}>
        <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#34719c' }}>
          Expected SubNavigation Items
        </h3>
        <p style={{ color: '#666', marginBottom: '1rem' }}>
          ควรเห็น secondary navbar ที่มี:
        </p>
        <ul style={{ color: '#666', lineHeight: 1.8 }}>
          <li>BAM ผู้นำด้านการบริหารสินทรัพย์ (text only)</li>
          <li>เกี่ยวกับ BAM (with dropdown)</li>
          <li>การกำกับดูแลกิจการ (with dropdown)</li>
          <li>การพัฒนาอย่างยั่งยืน (with dropdown)</li>
          <li>ร่วมงานกับ BAM</li>
          <li>ข่าวสารและสื่อ (with dropdown)</li>
        </ul>
      </div>
    </div>
  );
}
