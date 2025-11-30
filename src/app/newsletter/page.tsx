'use client';

import axios from 'axios';
import { useState } from 'react';
import { Button, Container, Flex, Heading, Text } from '@/components/ui/atoms';

export default function About() {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [email, setEmail] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>,
  ) => {
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
    // TODO: Dark mode
    <Flex as={Container} direction="column" gap={8} className="my-12 md:mx-32">
      <Heading size="h5">Subscribe to our Newsletter</Heading>

      <Flex justifyContent="between">
        <div className="w-full md:w-2/3">
          <div className="w-full">
            <Text>
              Every quarter, we send a single update on our initiatives, upcoming events, progress
              reports, and ways you can get involved. By subscribing, you'll stay in the loop about
              our efforts to promote Bitcoin adoption in Madeira and beyond. You will also be the
              first to know about discounts in our online shop.
            </Text>

            <input
              type="email"
              required
              placeholder="Email address"
              aria-label="Email address"
              className="grow rounded-full bg-white px-6 py-2.5 text-dark text-sm placeholder:text-dark/40 focus:outline-none focus:ring-0"
              onChange={handleChange}
              value={email || ''}
            />

            <Button
              onClick={handleSubmit}
              type="button"
              disabled={submitted}
              // className="size-12 items-center justify-center border-[1.5px]"
            >
              Subscribe
            </Button>
          </div>
        </div>

        {/* TODO: Add illustration */}
      </Flex>
    </Flex>
  );
}
