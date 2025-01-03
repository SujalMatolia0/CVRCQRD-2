import { COLOR } from '@/configs/theme';
import { ICON_SIZE } from '@filante/cobalt';
import { Button, Paper, Center } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import Link from 'next/link';

export const CommonButton = (params: {
  title: string;
  variant?: string;
  color?: string;
  href?: string;
}) => {
  return (
    <>
      <Button
        component={Link}
        href={params.href ?? ''}
        w="fit-content"
        variant={params.variant}
        h={50}
        radius="lg"
        color={params.color}
        rightSection={
          <>
            <Paper bg={COLOR.GREEN} radius="50%" h={25} w={25}>
              <Center h="100%">
                <IconArrowRight color={COLOR.TURQUOISE} size={ICON_SIZE.SM} />
              </Center>
            </Paper>
          </>
        }
      >
        {params.title}
      </Button>
    </>
  );
};
