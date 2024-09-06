import React from 'react';
import { FAQList } from './components/faqList';

import { MOCK_FAQS } from './mock';

import './app.css';

export default function App() {
  return (
    <div className="p-4 flex justify-center">
      <div className="max-w-3xl w-11/12">
        <FAQList faqs={MOCK_FAQS} />
      </div>
    </div>
  );
}
