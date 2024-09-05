import React from 'react';
import { FAQList } from './components/faqList';
import { MOCK_FAQS } from './mock';

export default function App() {
  return (
    <div style={{ padding: '16px', display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '90%', maxWidth: '800px' }}>
        <FAQList faqs={MOCK_FAQS} />
      </div>
    </div>
  );
}
