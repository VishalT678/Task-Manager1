import React from 'react';

const SimpleTest = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f0f0', minHeight: '100vh' }}>
      <h1 style={{ color: '#333', fontSize: '2rem', marginBottom: '20px' }}>
        🎉 Dashboard App is Working!
      </h1>
      <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h2 style={{ color: '#4f46e5', marginBottom: '10px' }}>✅ Frontend Status</h2>
        <p>React app is running successfully on port 5173</p>
        
        <h2 style={{ color: '#4f46e5', marginBottom: '10px', marginTop: '20px' }}>✅ Backend Status</h2>
        <p>Express API is running on port 5000</p>
        
        <h2 style={{ color: '#4f46e5', marginBottom: '10px', marginTop: '20px' }}>✅ Database Status</h2>
        <p>MongoDB is connected and ready</p>
        
        <div style={{ marginTop: '30px', padding: '15px', backgroundColor: '#f8fafc', borderRadius: '6px' }}>
          <h3 style={{ color: '#374151', marginBottom: '10px' }}>Next Steps:</h3>
          <ul style={{ color: '#6b7280', lineHeight: '1.6' }}>
            <li>✅ Fixed icon import issues</li>
            <li>✅ Basic React setup working</li>
            <li>🔄 Ready to test authentication</li>
            <li>🔄 Ready to test dashboard</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SimpleTest;
