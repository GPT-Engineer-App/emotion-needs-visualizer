import { useState } from 'react';
import EmotionForm from '../components/EmotionForm';
import EmotionAnalysis from '../components/EmotionAnalysis';
import NeedsAnalysis from '../components/NeedsAnalysis';
import EmotionWheel from '../components/EmotionWheel';

const Index = () => {
  const [analysis, setAnalysis] = useState(null);

  const handleAnalysis = (data) => {
    // In a real application, this would be processed by a backend
    // For now, we'll simulate an analysis
    const simulatedAnalysis = {
      emotions: {
        joy: Math.random(),
        trust: Math.random(),
        fear: Math.random(),
        surprise: Math.random(),
        sadness: Math.random(),
        disgust: Math.random(),
        anger: Math.random(),
        anticipation: Math.random(),
      },
      needs: {
        physiological: Math.random(),
        safety: Math.random(),
        belongingness: Math.random(),
        esteem: Math.random(),
        selfActualization: Math.random(),
      },
    };
    setAnalysis(simulatedAnalysis);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Emotion Analysis Tool</h1>
      <div className="max-w-4xl mx-auto">
        <EmotionForm onSubmit={handleAnalysis} />
        {analysis && (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <EmotionAnalysis emotions={analysis.emotions} />
            <NeedsAnalysis needs={analysis.needs} />
            <div className="md:col-span-2">
              <EmotionWheel emotions={analysis.emotions} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
