'use client';

import { useState } from 'react';
import { Button } from '../../components/ui/button';

interface CounterProps {
  initialLikes: number;
  initialDisLikes:number;
}

export default function Counter({ initialLikes,initialDisLikes }: CounterProps) {
  const [likes, setLikes] = useState(initialLikes);
  const [dislikes, setDislikes] = useState(initialDisLikes);

  const handleLike = () => {
    setLikes(likes + 1);
  };
  const handleDisLike = () => {
    setDislikes(dislikes + 1);
  };

  return (
    <div className="flex flex-col items-center gap-4 mb-16 p-8 bg-white rounded-lg shadow">
      
     
      <div className='flex gap-6'>
        <div className='flex-col '>
          <h2 className="text-2xl font-bold text-slate-900">ถูกใจแล้ว</h2>
          <p className="text-4xl font-bold text-blue-600 flex justify-center">{likes}</p>
           <Button onClick={handleLike} size="lg">
            👍 ถูกใจ
         </Button>
        </div>
        <div className='flex-col'>
          <h2 className="text-2xl font-bold text-slate-900">ไม่ถูกใจ</h2>
          <p className="text-4xl font-bold text-blue-600 flex justify-center">{dislikes}</p>
           <Button onClick={handleDisLike} size="lg">
             ไม่ถูกใจ
          </Button>
        </div>
      </div>
      
    </div>
  );
}