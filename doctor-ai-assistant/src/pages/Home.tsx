import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Brain, Stethoscope, Calendar, PieChart, Clock } from 'lucide-react';
import Button from '../components/ui/Button';

const Home: React.FC = () => {
  const features = [
    { icon: <Heart className="w-12 h-12 text-red-500" />, title: 'AI-Powered Diagnosis', description: 'Get accurate health assessments using cutting-edge artificial intelligence.' },
    { icon: <Brain className="w-12 h-12 text-blue-500" />, title: 'Personalized Treatment Plans', description: 'Receive tailored treatment recommendations based on your unique health profile.' },
    { icon: <Stethoscope className="w-12 h-12 text-green-500" />, title: 'Virtual Consultations', description: 'Connect with healthcare professionals from the comfort of your home.' },
    { icon: <Calendar className="w-12 h-12 text-purple-500" />, title: 'Easy Appointment Scheduling', description: 'Book appointments with specialists effortlessly through our platform.' },
    { icon: <PieChart className="w-12 h-12 text-yellow-500" />, title: 'Health Analytics', description: 'Track your health progress with detailed analytics and insights.' },
    { icon: <Clock className="w-12 h-12 text-indigo-500" />, title: '24/7 Support', description: 'Access round-the-clock assistance for your health-related queries.' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white">
        <div className="container mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Doctor AI Assistant</h1>
          <p className="text-xl mb-8">Your personal AI-powered healthcare companion</p>
          <div className="flex justify-center space-x-4">
            <Link to="/register">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">Get Started</Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-700">Learn More</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">{feature.title}</h3>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to take control of your health?</h2>
          <p className="text-xl mb-8">Join thousands of users benefiting from AI-powered healthcare.</p>
          <Link to="/register">
            <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">Sign Up Now</Button>
          </Link>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Sarah L.', quote: 'Doctor AI Assistant has revolutionized how I manage my health. It\'s like having a doctor on call 24/7!' },
              { name: 'Michael R.', quote: 'The personalized treatment plans have made a significant difference in my recovery. Highly recommended!' },
              { name: 'Emily T.', quote: 'I love how easy it is to book appointments and get quick answers to my health questions. A game-changer!' },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
                <p className="font-semibold">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
