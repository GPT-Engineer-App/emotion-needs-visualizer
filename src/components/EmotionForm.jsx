import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';

const EmotionForm = ({ onSubmit }) => {
  const [situations, setSituations] = useState(['']);
  const [timePoints, setTimePoints] = useState(['']);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ situations, timePoints });
  };

  const addTimePoint = () => {
    setSituations([...situations, '']);
    setTimePoints([...timePoints, '']);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {situations.map((situation, index) => (
        <div key={index} className="space-y-2">
          <Input
            placeholder={`Time point ${index + 1}`}
            value={timePoints[index]}
            onChange={(e) => {
              const newTimePoints = [...timePoints];
              newTimePoints[index] = e.target.value;
              setTimePoints(newTimePoints);
            }}
          />
          <Textarea
            placeholder={`Describe the situation at time point ${index + 1}...`}
            value={situation}
            onChange={(e) => {
              const newSituations = [...situations];
              newSituations[index] = e.target.value;
              setSituations(newSituations);
            }}
            className="min-h-[100px]"
          />
        </div>
      ))}
      <Button type="button" onClick={addTimePoint}>Add Time Point</Button>
      <Button type="submit">Analyze Emotions</Button>
    </form>
  );
};

export default EmotionForm;
