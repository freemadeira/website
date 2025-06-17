'use client';

import { Button, Flex, IconButton, ScreenReaderOnly, Text } from '@/components/ui/atoms';
import axios from 'axios';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

export function Newsletter(): React.ReactElement {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [email, setEmail] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email) {
      return;
    }

    const language = navigator.language;

    await axios.post('/newsletter/subscribe', { email, language });
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setEmail('');
    }, 2000);
  };

  return (
    <Flex direction="column" gap={4} className="w-full sm:w-auto">
      <Text size="lg">Subscribe to our newsletter</Text>

      <Flex gap={2}>
        <input
          type="email"
          required
          placeholder="Email address"
          aria-label="Email address"
          className="grow rounded-full bg-white px-6 py-2.5 text-dark text-sm placeholder:text-dark/40 focus:outline-none focus:ring-0"
          onChange={handleChange}
          value={email || ''}
        />
        <IconButton
          onClick={handleSubmit}
          type="button"
          disabled={submitted}
          className="size-12 items-center justify-center border-[1.5px]"
        >
          <ScreenReaderOnly>Sign up</ScreenReaderOnly>
          <ArrowRight strokeWidth={1.5} size={36} />
        </IconButton>
      </Flex>
    </Flex>
  );
}
