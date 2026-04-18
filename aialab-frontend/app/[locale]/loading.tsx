export default function Loading() {
  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: '#050a18',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
      color: 'white',
      fontFamily: 'Roboto, sans-serif'
    }}>
      <div className="flex flex-col items-center">
        <div style={{
          width: '60px',
          height: '2px',
          background: 'var(--cyan)',
          animation: 'loadLine 2s ease-in-out infinite'
        }} />
        <span style={{ 
          marginTop: '20px', 
          fontSize: '11px', 
          letterSpacing: '0.4em', 
          opacity: 0.5,
          textTransform: 'uppercase'
        }}>
          AIA LAB <em>Master Edition</em>
        </span>
      </div>
      <style>{`
        @keyframes loadLine {
          0% { width: 0; opacity: 0; transform: translateX(-50px); }
          50% { width: 100px; opacity: 1; transform: translateX(0); }
          100% { width: 0; opacity: 0; transform: translateX(50px); }
        }
      `}</style>
    </div>
  );
}
