import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card1';
import { Heart, Shield, Clock, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">About Doctor AI Assistant</h1>
      <div className="max-w-3xl mx-auto">
        <p className="text-lg mb-8">
          Doctor AI Assistant is a cutting-edge healthcare platform that combines artificial intelligence with medical expertise to provide you with 24/7 access to personalized healthcare services. Our mission is to make quality healthcare accessible, affordable, and convenient for everyone.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Heart className="mr-2 text-red-500" />
                Personalized Care
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Our AI analyzes your unique health profile to provide tailored medical advice and recommendations.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="mr-2 text-blue-500" />
                Privacy & Security
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Your health data is protected with state-of-the-art encryption and security measures.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="mr-2 text-green-500" />
                24/7 Availability
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Access medical assistance anytime, anywhere, with our always-on AI system.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Award className="mr-2 text-yellow-500" />
                Expert-Backed
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Our AI is continuously trained and verified by a team of experienced medical professionals.</p>
            </CardContent>
          </Card>
        </div>
        <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
        <p className="text-lg mb-8">
          We envision a world where everyone has instant access to high-quality healthcare guidance. By leveraging AI technology, we aim to reduce the burden on healthcare systems, empower individuals to make informed health decisions, and ultimately improve global health outcomes.
        </p>
        <h2 className="text-2xl font-bold mb-4">Join Us in Revolutionizing Healthcare</h2>
        <p className="text-lg">
          Whether you're a patient seeking convenient care, a healthcare provider looking to enhance your services, or a tech enthusiast interested in the future of medicine, Doctor AI Assistant is here to support you on your healthcare journey.
        </p>
      </div>
    </div>
  );
};

export default About;

