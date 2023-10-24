import React from 'react';

const Onboarding = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="onboarding-container">
      <h2>Chào mừng bạn đến với ứng dụng của chúng tôi!</h2>
      <p>Vui lòng liên kết điện thoại của bạn để tạo tài khoản.</p>
      <button onClick={onClose}>Liên kết điện thoại</button>
    </div>
  );
};

export default Onboarding;
