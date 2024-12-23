import { CommonFooter } from '@/components/footer/common';
import { CommonLayout } from '@/components/layout/common';
import { TeamHero } from '@/components/pages/team/hero';
import { TeamSection1 } from '@/components/pages/team/section1';
import { TeamSection2 } from '@/components/pages/team/section2';

export default function Team() {
  return (
    <>
      <CommonLayout>
        <TeamHero />
        <TeamSection1 />
        <TeamSection2 />
        <CommonFooter />
      </CommonLayout>
    </>
  );
}
