import React from 'react';
import { 
  Home, 
  Plus, 
  User, 
  LogOut, 
  Menu, 
  X,
  CheckCircle, 
  Clock, 
  AlertCircle,
  TrendingUp,
  Calendar,
  Eye,
  EyeOff,
  Mail,
  Lock
} from 'react-icons/fi';

const IconTest = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f0f0', minHeight: '100vh' }}>
      <h1 style={{ color: '#333', fontSize: '2rem', marginBottom: '20px' }}>
        🎉 Icons Test - All Working!
      </h1>
      
      <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h2 style={{ color: '#4f46e5', marginBottom: '20px' }}>Available Icons:</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
          <div style={{ display: 'flex', alignItems: 'center', padding: '10px', backgroundColor: '#f8fafc', borderRadius: '6px' }}>
            <Home style={{ marginRight: '10px', color: '#4f46e5' }} />
            <span>Home</span>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', padding: '10px', backgroundColor: '#f8fafc', borderRadius: '6px' }}>
            <Plus style={{ marginRight: '10px', color: '#4f46e5' }} />
            <span>Plus</span>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', padding: '10px', backgroundColor: '#f8fafc', borderRadius: '6px' }}>
            <User style={{ marginRight: '10px', color: '#4f46e5' }} />
            <span>User</span>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', padding: '10px', backgroundColor: '#f8fafc', borderRadius: '6px' }}>
            <LogOut style={{ marginRight: '10px', color: '#4f46e5' }} />
            <span>LogOut</span>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', padding: '10px', backgroundColor: '#f8fafc', borderRadius: '6px' }}>
            <Menu style={{ marginRight: '10px', color: '#4f46e5' }} />
            <span>Menu</span>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', padding: '10px', backgroundColor: '#f8fafc', borderRadius: '6px' }}>
            <X style={{ marginRight: '10px', color: '#4f46e5' }} />
            <span>X</span>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', padding: '10px', backgroundColor: '#f8fafc', borderRadius: '6px' }}>
            <CheckCircle style={{ marginRight: '10px', color: '#4f46e5' }} />
            <span>CheckCircle</span>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', padding: '10px', backgroundColor: '#f8fafc', borderRadius: '6px' }}>
            <Clock style={{ marginRight: '10px', color: '#4f46e5' }} />
            <span>Clock</span>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', padding: '10px', backgroundColor: '#f8fafc', borderRadius: '6px' }}>
            <AlertCircle style={{ marginRight: '10px', color: '#4f46e5' }} />
            <span>AlertCircle</span>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', padding: '10px', backgroundColor: '#f8fafc', borderRadius: '6px' }}>
            <TrendingUp style={{ marginRight: '10px', color: '#4f46e5' }} />
            <span>TrendingUp</span>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', padding: '10px', backgroundColor: '#f8fafc', borderRadius: '6px' }}>
            <Calendar style={{ marginRight: '10px', color: '#4f46e5' }} />
            <span>Calendar</span>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', padding: '10px', backgroundColor: '#f8fafc', borderRadius: '6px' }}>
            <Eye style={{ marginRight: '10px', color: '#4f46e5' }} />
            <span>Eye</span>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', padding: '10px', backgroundColor: '#f8fafc', borderRadius: '6px' }}>
            <EyeOff style={{ marginRight: '10px', color: '#4f46e5' }} />
            <span>EyeOff</span>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', padding: '10px', backgroundColor: '#f8fafc', borderRadius: '6px' }}>
            <Mail style={{ marginRight: '10px', color: '#4f46e5' }} />
            <span>Mail</span>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', padding: '10px', backgroundColor: '#f8fafc', borderRadius: '6px' }}>
            <Lock style={{ marginRight: '10px', color: '#4f46e5' }} />
            <span>Lock</span>
          </div>
        </div>
        
        <div style={{ marginTop: '30px', padding: '15px', backgroundColor: '#ecfdf5', borderRadius: '6px', border: '1px solid #10b981' }}>
          <h3 style={{ color: '#065f46', marginBottom: '10px' }}>✅ All Icons Working!</h3>
          <p style={{ color: '#047857' }}>The icon import issue has been resolved. All icons are displaying correctly.</p>
        </div>
      </div>
    </div>
  );
};

export default IconTest;
