import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

const EmotionForm = ({ onSubmit }) => {
  const [situation, setSituation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ situation });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Textarea
        placeholder="Describe the situation..."
        value={situation}
        onChange={(e) => setSituation(e.target.value)}
        className="min-h-[100px]"
      />
      <Button type="submit">Analyze Emotions</Button>
    </form>
  );
};

export default EmotionForm;
