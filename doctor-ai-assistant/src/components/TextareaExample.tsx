import React, { useState } from 'react'
import { Textarea } from './ui/textarea'
import  Button  from './ui/Button'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from './ui/card1'

const TextareaExample: React.FC = () => {
  const [value, setValue] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Submitted value:', value)
    // Here you would typically send the data to your backend
    setValue('') // Clear the textarea after submission
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Feedback Form</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent>
          <div className="space-y-2">
            <label htmlFor="feedback" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Your Feedback
            </label>
            <Textarea
              id="feedback"
              placeholder="Please enter your feedback here..."
              value={value}
              onChange={(e) => setValue(e.target.value)}
              rows={5}
              className="w-full"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full">Submit Feedback</Button>
        </CardFooter>
      </form>
    </Card>
  )
}

export default TextareaExample

