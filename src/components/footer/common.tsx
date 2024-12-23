import { COLOR, SIZE_CONFIG } from '@/configs/theme';
import {
  ActionIcon,
  AspectRatio,
  Center,
  Group,
  Image,
  Paper,
  rem,
  SimpleGrid,
  Space,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { CommonButton } from '../indie/common_button';
import { Children } from 'react';
import {
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBrandWhatsapp,
  IconBrandYoutube,
} from '@tabler/icons-react';
import { useMediaQuerys } from '@filante/cobalt/hooks';

const SocialLogo = [
  {
    icon: (
      <>
        <IconBrandLinkedin />
      </>
    ),
  },
  {
    icon: (
      <>
        <IconBrandTwitter />
      </>
    ),
  },
  {
    icon: (
      <>
        <IconBrandYoutube />
      </>
    ),
  },
  {
    icon: (
      <>
        <IconBrandWhatsapp />
      </>
    ),
  },
];

interface CommonTagsProps {
  title: string;
  list: {
    title?: string;
    links: {
      text: string;
    }[];
  }[];
}

const CommonTag = (props: CommonTagsProps) => (
  <>
    <Stack gap="md">
      <Text c={COLOR.GREEN}>{props.title}</Text>
      {Children.toArray(
        props.list.map((item) => (
          <>
            <Stack gap={0}>
              {item.title && (
                <Text size="xs" opacity={0.8} c={COLOR.GREEN}>
                  {item.title}
                </Text>
              )}
              <Space h="xs" />
              {item.links.map((link) => (
                <>
                  <Text size="sm" opacity={0.9} c={COLOR.GREEN}>
                    {link.text}
                  </Text>
                </>
              ))}
            </Stack>
          </>
        ))
      )}
    </Stack>
  </>
);

export const CommonFooter = () => {
  const { MD } = useMediaQuerys();
  return (
    <>
      <Stack
        mih="100vh"
        bg={COLOR.TURQUOISE}
        pl={MD ? 150 : 'md'}
        pt={SIZE_CONFIG.SECTION_SPACE}
      >
        <SimpleGrid cols={{ base: 1, md: 2 }}>
          <Stack maw={500}>
            <Title c={COLOR.GREEN}>
              Empowering Quantum Solutions with People and Technology
            </Title>
            <Text c={COLOR.GREEN}>
              At CVRCQRD, we combine the power of cutting-edge quantum computing
              technology with expert talent to deliver precise, efficient, and
              innovative solutions. Whether it&apos;s training, research
              collaboration, or quantum computing advancements, we ensure:
            </Text>
            <Group>
              <CommonButton title="Let's Collaborate" color={COLOR.PEACH} />
            </Group>
          </Stack>
          <Image px="md" radius="xl" src="/quantum-chip.jpeg" alt="image" />
        </SimpleGrid>
        <SimpleGrid cols={{ base: 1, md: 2 }}>
          <Stack justify="center">
            <AspectRatio ratio={11 / 2.8} maw="300">
              <Image src="/logo-full.png" alt="logo" />
            </AspectRatio>
          </Stack>
          <Stack>
            <SimpleGrid cols={{ base: 2, md: 3 }}>
              {MD ? (
                <Stack>
                  <CommonTag
                    title="SOLUTIONS"
                    list={[
                      {
                        links: [
                          { text: 'Quantum for Business (Finance)' },
                          { text: 'Quantum Simulation' },
                          { text: 'Quantum Space' },
                          { text: 'Quantum Chemistry ' },
                          { text: 'Quantum Machine Learning' },
                        ],
                      },
                    ]}
                  />{' '}
                  <CommonTag
                    title="ABOUT"
                    list={[
                      {
                        links: [
                          { text: 'About' },
                          { text: 'Pricing' },
                          { text: 'Career (Join Us)' },
                          { text: 'FAQ' },
                        ],
                      },
                    ]}
                  />
                </Stack>
              ) : null}

              {MD ? (
                <Stack>
                  <CommonTag
                    title="RESOURCES"
                    list={[
                      {
                        links: [
                          { text: 'Case Studies' },
                          { text: 'Learning' },
                          { text: 'Blogs' },
                          { text: 'Community' },
                        ],
                      },
                    ]}
                  />
                  <CommonTag
                    title="PARTNERS"
                    list={[
                      {
                        links: [
                          { text: 'Startup India' },
                          { text: 'MNIT' },
                          { text: 'BITS Pilani' },
                          { text: 'SEO Meta Code' },
                        ],
                      },
                    ]}
                  />
                </Stack>
              ) : null}
              <Stack>
                <CommonTag
                  title="GET IN TOUCH"
                  list={[
                    {
                      title: 'Headquarter- JDH',
                      links: [
                        { text: 'Jodhpur,Rajasthan' },
                        { text: '8005982481' },
                      ],
                    },
                    {
                      title: 'Operation- JAI',
                      links: [{ text: 'Jaipur, Rajasthan' }],
                    },
                    {
                      title: 'Contact Us',
                      links: [{ text: 'info@neocosmicx.in' }],
                    },
                  ]}
                />
              </Stack>
            </SimpleGrid>
          </Stack>
        </SimpleGrid>
        <SimpleGrid cols={{ base: 1, md: 2 }}>
          <Stack>
            <Group>
              {Children.toArray(
                SocialLogo.map((item) => (
                  <>
                    <ActionIcon
                      color={COLOR.GREEN}
                      variant="outline"
                      size={rem(40)}
                    >
                      {item.icon}
                    </ActionIcon>
                  </>
                ))
              )}
            </Group>
            <Text size="xs" c={COLOR.GREEN}>
              Copyright 2024 | All Rights Reserved Login Privacy Policy
            </Text>
          </Stack>
        </SimpleGrid>
        <Paper
          bg={COLOR.GREEN}
          h={MD ? 150 : 80}
          w={MD ? 150 : 80}
          pos="relative"
          left={MD ? '80%' : '70%'}
          bottom={MD ? 40 : 350}
          radius="50%"
          style={{
            rotate: '35deg',
          }}
        >
          <Center h="100%">
            <Text
              size={MD ?"1.2vw" : '3.5vw'}
              c={COLOR.TURQUOISE}
              maw={80}
            >
              CVRCQRD
            </Text>
          </Center>
        </Paper>
      </Stack>
    </>
  );
};
