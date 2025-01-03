import { COLOR } from '@/configs/theme';
import {
  Group,
  Text,
  Menu,
  SimpleGrid,
  Modal,
  ActionIcon,
  Paper,
  Center,
  Accordion,
  Stack,
  Image,
  AspectRatio,
} from '@mantine/core';
import { CommonButton } from '../indie/common_button';
import { useState } from 'react';
import { CommonMenuSection } from '../indie/common_modal_section';
import { useMediaQuerys } from '@filante/cobalt/hooks';
import { IconMenu2, IconX } from '@tabler/icons-react';
import { ICON_SIZE } from '@filante/cobalt';
import Link from 'next/link';

const DATA = [
  {
    title: 'Solutions',
    menu: [
      {
        list: [
          { text: 'Machine Learning', link: '/q-ml' },
          { text: 'Space & Cosmology', link: '/q-space' },
          { text: 'Transportation & Mobility', link: '/transportation' },
          { text: 'Pharma & Chemistry', link: '/pharma' },
          { text: 'Material Science', link: '/material-science' },
          { text: 'Network & Security', link: '/communication' },
          { text: 'Defense', link: '/defense' },
          { text: 'Finance', link: '/finance' },
        ],
      },

    ],
  },
  {
    title: 'Resources',
    menu: [
      {
        list: [
          { text: 'Quantune.py', link: '/coming_soon' },
          { text: 'Membership', link: '/membership' },
          { text: 'Chapter', link: '/chapter' },
          { text: 'Journal (Q-Plus)', link: '/coming_soon' },
          // { text: 'Challenges', link: '/challenges' },
        ],
      },
    ],
  },
  {
    title: 'Accreditations',
    menu: [
      {
        list: [
          { text: 'Quantum Innovator Program', link: '/quantum_innovator_program' },
          {
            text: 'Charted Quantum Scientist',
            link: '/charted_quantum_scientist',
          },
          {
            text: 'Certified Quantum Engineer',
            link: '/certified_quantum_engineer',
          },
        ],
      },
    ],
  },
  {
    title: 'Learnings',
    menu: [
      {
        list: [
          { text: 'Courses', link: '/courses' },
          { text: 'Trainings', link: '/training' },
          { text: 'Research', link: '/research' },
          // { text: 'Codebook', link: '/codebook' },
        ],
      },
    ],
  },
  {
    title: 'About',
    menu: [
      {
        list: [
          { text: 'Company', link: '/about' },
          { text: 'Team', link: '/team' },
          { text: 'Pricing', link: '/pricing' },
          { text: 'Join Us', link: '/join-us' },
          { text: 'FAQs', link: '/faq' },
        ],
      },
    ],
  },
  {
    title: 'Spark',
    description: '/blog',
  },
  {
    title: 'Contact',
    description: '/contact',
  },
];

export const CommonHeader = () => {
  const { MD } = useMediaQuerys();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {MD ? (
        <Group px={80} py={20} justify="space-between">
          <Group>

            <Link href="/">
              <AspectRatio ratio={11 / 9} maw={60}>
                <Image src="/logo-removebg.png" alt="logo" />
              </AspectRatio>
            </Link>

            <Group gap="xl">
              {DATA.map((item) => (
                <Menu key={item.title} trigger="hover" openDelay={100}>
                  <Menu.Target>
                    <Text
                      c={COLOR.TURQUOISE}
                      component={Link}
                      href={item.description || ''}
                      style={{ cursor: item.description ? 'pointer' : 'default' }}
                    >
                      {item.title}
                    </Text>
                  </Menu.Target>
                  {item.menu && (
                    <Menu.Dropdown
                      style={{
                        background: 'rgba(1, 55, 61, 0.2)',
                        backdropFilter: 'blur(15px)',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        borderRadius: '8px',
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                        padding: '8px',
                      }}
                    >
                      <SimpleGrid cols={item.menu.length}>
                        {item.menu.map((menuItem, idx) => (
                          <Menu.Item key={idx}>
                            <CommonMenuSection data={[menuItem]} />
                          </Menu.Item>
                        ))}
                      </SimpleGrid>
                    </Menu.Dropdown>
                  )}
                </Menu>
              ))}
            </Group>
          </Group>

          <Group>
            <CommonButton
              href="/contact"
              variant="transparent"
              title="Get Connected"
            />
            <CommonButton href='/coming_soon' title="Q-Platform" />
          </Group>
        </Group>
      ) : (
        <>
          <Group p="sm" justify="space-between">
            <Link href="/">
              <AspectRatio ratio={11 / 9} maw={50}>
                <Image src="/logo-removebg.png" alt="logo" />
              </AspectRatio>
            </Link>
            <ActionIcon
              size="xl"
              onClick={() => setModalOpen(true)}
              variant="filled"
              color={COLOR.TURQUOISE}
            >
              <Paper h={20} w={20} radius="50%" bg={COLOR.GREEN}>
                <Center h="100%">
                  <IconMenu2 size={ICON_SIZE.SM} color={COLOR.TURQUOISE} />
                </Center>
              </Paper>
            </ActionIcon>
          </Group>

          <Modal
            fullScreen
            opened={modalOpen}
            onClose={() => setModalOpen(false)}
            title="CVRCQRD"
            c={COLOR.TURQUOISE}
            closeButtonProps={{
              icon: (
                <ActionIcon size="xl" variant="filled" color={COLOR.TURQUOISE}>
                  <Paper h={20} w={20} radius="50%" bg={COLOR.GREEN}>
                    <Center h="100%">
                      <IconX size={ICON_SIZE.SM} color={COLOR.TURQUOISE} />
                    </Center>
                  </Paper>
                </ActionIcon>
              ),
            }}
          >
            <Stack>
              <Group justify="center">
                <CommonButton variant="outline" title="Get Connected" />
                <CommonButton title="Q-Platform" />
              </Group>

              <Accordion>
                {DATA.map((item) => (
                  <Accordion.Item value={item.title} key={item.title}>
                    <Accordion.Control>
                      <Text c={COLOR.TURQUOISE}>{item.title}</Text>
                    </Accordion.Control>
                    <Accordion.Panel>
                      {item.menu?.map((menuItem, idx) => (
                        <Stack key={idx}>

                          {menuItem.list.map((linkItem, linkIdx) => (
                            <Text key={linkIdx} c={COLOR.GREEN} size="sm">
                              <Link href={linkItem.link}>{linkItem.text}</Link>
                            </Text>
                          ))}
                        </Stack>
                      ))}
                    </Accordion.Panel>

                  </Accordion.Item>
                ))}
              </Accordion>
            </Stack>
          </Modal>
        </>
      )
      }
    </>
  );
};
