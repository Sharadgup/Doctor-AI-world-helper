import React from 'react'
import TextareaExample from '../components/TextareaExample'

const FeedbackPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Provide Your Feedback</h1>
      <TextareaExample />
    </div>
  )
}

export default FeedbackPage

