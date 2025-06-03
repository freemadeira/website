'use client';

import type { Language } from '@/utils/mailerlite';
import { Radio, RadioGroup } from '@headlessui/react';
import type { AxiosResponse } from 'axios';
import axios from 'axios';
import { CircleDot } from 'lucide-react';
import { useEffect, useState } from 'react';
import { twJoin } from 'tailwind-merge';
import { Button, Container, Flex, Heading, Text } from '../ui/atoms';
import { HandCoin } from '../ui/svgs';
import { CONFIG } from '@/utils/constants';

type Props = {
  email: string;
  token: string;
};

type Option = {
  key: Language | 'all';
  name: string;
  description: string;
};

const options: Option[] = [
  { key: 'english', name: 'English', description: 'Monthly updates in english' },
  { key: 'portuguese', name: 'Portuguese', description: 'Monthly updates in portuguese' },
  { key: 'all', name: 'Both', description: 'Receive both versions monthly' },
];

export const Preferences: React.FC<Props> = ({ email, token }) => {
  const [languages, setLanguages] = useState<Language[]>([]);
  const [selected, setSelected] = useState<Option | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPreferences = async () => {
      try {
        // Decode the email parameter, otherwise it will be URL encoded, e.g. henrique%40freemadeira.org
        const decodedEmail = decodeURIComponent(email);
        const res = await axios.get(`${CONFIG.BASE_URL}/newsletter/preferences`, {
          params: { email: decodedEmail, token },
        });

        const data = res.data;
        setLanguages(data.languages);

        const currentPref: Option['key'] =
          data.languages.includes('english') && data.languages.includes('portuguese')
            ? 'all'
            : data.languages.includes('portuguese')
              ? 'portuguese'
              : 'english';

        const option = options.find((opt) => opt.key === currentPref) || options[0];
        setSelected(option);
      } catch (err) {
        setError('Failed to load preferences');
      } finally {
        setLoading(false);
      }
    };

    fetchPreferences();
  }, [email, token]);

  const savePreferences = async () => {
    if (!selected) return;

    const selectedLanguages = selected.key === 'all' ? ['english', 'portuguese'] : [selected.key];

    try {
      const response: AxiosResponse = await axios.post('/newsletter/preferences', {
        languages: selectedLanguages,
      });

      // TODO: Review code bellow
      // if (!response.ok) {
      //   throw new Error('Failed to save preferences');
      // }
      // const result = await response.data;
    } catch (error) {
      // TODO: Handle error (e.g., show a notification to the user)
    }
  };

  return (
    // TODO: Dark mode
    <Flex as={Container} direction="column" gap={8} className="mx-32 my-12">
      <Heading size="h5">Newsletter preferences</Heading>
      {/* <div className="my-32 w-full px-4"> */}
      <Flex justifyContent="between">
        <div className="w-1/2">
          <div className="w-full max-w-md">
            <RadioGroup
              by={(a: Option | null, b: Option | null) => a?.key === b?.key}
              value={selected}
              onChange={setSelected}
              aria-label="Language"
              className="space-y-4"
            >
              {options.map((option) => (
                <Radio
                  key={option.key}
                  value={option}
                  className={twJoin(
                    'group relative flex cursor-pointer bg-bridal-50 px-5 py-4 transition',
                    'bg-bridal-50/50 outline-[1.5px] outline-transparent hover:outline-mountain-mist-200',
                    'data-checked:bg-bridal-50 data-checked:outline-yellow-400',
                  )}
                >
                  <div className="flex w-full items-center justify-between">
                    <CircleDot className="me-4 size-6 fill-mountain-mist-200/60 text-white transition group-data-checked:fill-yellow-400 group-data-checked:text-bridal-100" />

                    <Flex direction="column" className="grow text-sm/6">
                      <Text className="text-[20px] leading-[150%] tracking-[1%] sm:text-xl sm:tracking-normal">
                        {option.name}
                      </Text>

                      <Text className="text-mountain-mist-400">{option.description}</Text>
                    </Flex>
                  </div>
                </Radio>
              ))}
            </RadioGroup>
          </div>
        </div>

        {/* TODO: Add illustration */}
        {/* <HandCoin className="w-4/12" /> */}
      </Flex>

      <Button onClick={savePreferences}>Save preferences</Button>
    </Flex>
  );
};
