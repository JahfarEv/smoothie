import React, { useState } from 'react';

const EmailModal = ({ isOpen, onClose, onSubmit }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // First submit to Google Sheets
      const formData = new FormData();
      formData.append('email', email);
      formData.append('timestamp', new Date().toISOString());
      
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbwe2YvZ1JkaG5mDaT3b7mtIlElyqF-vP1CtZE7YRguNkqmPWvFlVpvTaRATN9s6-bJd/exec",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!res.ok) throw new Error('Failed to submit email');
      
      // Then call the parent component's submit handler
      await onSubmit(email);
      
      setIsSubmitted(true);
      
      setTimeout(() => {
        onClose();
        setIsSubmitting(false);
        setIsSubmitted(false);
        setEmail('');
      }, 1500);
    } catch (error) {
      console.error("Submission error:", error);
      setIsSubmitting(false);
      alert('Failed to submit. Please try again.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-md w-full p-6 shadow-2xl transform transition-all">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        {!isSubmitted ? (
          <>
            <h3 className="text-2xl font-bold text-green-800 mb-4">Get Your 21-Day Smoothie Plan</h3>
            <p className="text-gray-600 mb-6">
              Enter your email to receive your personalized weight loss program
            </p>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 mb-4 focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition ${
                  isSubmitting ? "opacity-75 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  "Get Instant Access"
                )}
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-green-800 mb-2">Success!</h3>
            <p className="text-gray-600">You're being redirected to your program...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmailModal;