// AppWrapper.jsx
const AppWrapper = ({ children }) => {
  return (
    <div
      className="min-h-screen bg-gradient-to-br text-white m-6 rounded-3xl"
      style={{ background: 'linear-gradient(135deg, #344148 0%, #292B2D 100%)' }}
    >
      {children}
    </div>
  );
};

export default AppWrapper;