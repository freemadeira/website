'use client';

import { Button, Flex, IconButton, Text } from '@/components/ui/atoms';
import axios from 'axios';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

export function Newsletter(): React.ReactElement {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState(null);

  // TODO: Add types
  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async () => {
    event.preventDefault();

    await axios.post('/api/mailerlite', { email });
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setEmail(null);
    }, 4000);
  };

  return (
    <Flex direction="column" gap={4} className="w-full">
      <Text size="lg">Subscribe to our newsletter</Text>

      <Flex gap={2}>
        <input
          type="email"
          required
          placeholder="Email address"
          aria-label="Email address"
          className="grow rounded-full bg-white px-6 py-2.5 text-dark text-sm placeholder:text-dark/40 focus:outline-none focus:ring-0"
          onChange={handleChange}
        />
        <IconButton
          onClick={handleSubmit}
          type="button"
          disabled={submitted}
          className="size-12 items-center justify-center border-[1.5px]"
        >
          <span className="sr-only">Sign up</span>
          <ArrowRight strokeWidth={1.5} size={36} />
        </IconButton>
      </Flex>
    </Flex>
  );
}
